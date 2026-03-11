export const runtime = "nodejs";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { promises as dns } from "dns";
import { z } from "zod";
import nodemailer from "nodemailer";
import disposableDomains from "disposable-email-domains";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

const ipMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now   = Date.now();
  const entry = ipMap.get(ip);

  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count++;
  return false;
}

async function isEmailAllowed(email: string): Promise<boolean> {
  const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) return false;

  const domain = email.split("@")[1].toLowerCase();

  if ((disposableDomains as string[]).includes(domain)) return false;

  try {
    const records = await dns.resolveMx(domain);
    if (!records || records.length === 0) return false;
  } catch {
    return false;
  }

  return true;
}

const schema = z.object({
  nama:    z.string().min(1).max(80),
  email:   z.string().email().max(120),
  catatan: z.string().min(1).max(2000),
  hp:      z.string().optional(),
});

function env(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Terlalu banyak permintaan. Coba lagi dalam 15 menit." },
      { status: 429 }
    );
  }

  try {
    const body   = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      const msg = parsed.error.issues[0]?.message ?? "Data tidak valid.";
      return NextResponse.json({ ok: false, message: msg }, { status: 400 });
    }

    const { nama, email, catatan, hp } = parsed.data;

    if (typeof hp === "string" && hp.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (!(await isEmailAllowed(email))) {
      return NextResponse.json(
        { ok: false, message: "Alamat email tidak valid atau tidak diizinkan." },
        { status: 400 }
      );
    }

    const host   = env("NEXT_PUBLIC_SMTP_HOST");
    const port   = Number(env("NEXT_PUBLIC_SMTP_PORT"));
    const user   = env("NEXT_PUBLIC_SMTP_USER");
    const pass   = env("NEXT_PUBLIC_SMTP_PASS");
    const to     = process.env.NEXT_PUBLIC_ASPIRASI_TO ?? user;
    const secure = port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.verify();

    await transporter.sendMail({
      from:    `"Aspirasi HIMSI" <${user}>`,
      to,
      subject: `[Aspirasi HIMSI] ${nama}`,
      replyTo: email,
      text:
        `Nama   : ${nama}\n` +
        `Email  : ${email}\n\n` +
        `Catatan:\n${catatan}\n\n` +
        `Waktu  : ${new Date().toISOString()}\n`,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("MAIL_ERROR", err);
    return NextResponse.json(
      { ok: false, message: "Gagal mengirim aspirasi. Silakan coba lagi nanti." },
      { status: 500 }
    );
  }
}