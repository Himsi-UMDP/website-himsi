export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
  nama: z.string().min(1).max(80),
  email: z.string().email().max(120),
  catatan: z.string().min(1).max(2000),
  hp: z.string().optional(),
});

function env(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      const msg = parsed.error.issues[0]?.message ?? "Data tidak valid.";
      return NextResponse.json({ ok: false, message: msg }, { status: 400 });
    }

    const { nama, email, catatan, hp } = parsed.data;

    if (typeof hp === "string" && hp.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const host = env("NEXT_PUBLIC_SMTP_HOST");
    const port = Number(env("NEXT_PUBLIC_SMTP_PORT"));
    const user = env("NEXT_PUBLIC_SMTP_USER");
    const pass = env("NEXT_PUBLIC_SMTP_PASS");
    const to = process.env.NEXT_PUBLIC_ASPIRASI_TO || user;

    const secure = port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    console.log("MAIL_ENV", { host, port, secure, to, hasUser: !!user, hasPass: !!pass });
    await transporter.verify();

    await transporter.sendMail({
      from: `"Aspirasi HIMSI" <${user}>`,
      to,
      subject: `[Aspirasi HIMSI] ${nama}`,
      replyTo: email,
      text:
        `Nama: ${nama}\n` +
        `Email: ${email}\n\n` +
        `Catatan:\n${catatan}\n\n` +
        `Waktu: ${new Date().toISOString()}\n`,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("MAIL_ERROR", err);
    return NextResponse.json(
      { ok: false, message: err?.message ?? "Gagal mengirim." },
      { status: 500 }
    );
  }
}
