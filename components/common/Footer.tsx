"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/animation/Animated";
import type { Variants } from "framer-motion";

// ── Preset animasi khusus footer ──────────────────────────────────────────────

const ease = {
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  snappy: [0.34, 1.56, 0.64, 1] as const,
};

/** Wrapper utama: slide-up + fade */
const footerWrapperVariants: Variants = {
  initial: { opacity: 0, y: 48 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: ease.smooth,
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: 24,
    transition: { duration: 0.4, ease: ease.smooth },
  },
};

/** Kolom logo: blur + scale masuk dari kiri */
const footerLogoVariants: Variants = {
  initial: { opacity: 0, x: -32, scale: 0.92, filter: "blur(6px)" },
  enter: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: ease.smooth },
  },
  exit: {
    opacity: 0,
    x: -20,
    filter: "blur(4px)",
    transition: { duration: 0.35, ease: ease.smooth },
  },
};

/** Kolom menu: stagger tiap item */
const footerMenuContainerVariants: Variants = {
  initial: {},
  enter: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  exit:  { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const footerMenuItemVariants: Variants = {
  initial: { opacity: 0, x: -16 },
  enter: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: ease.snappy },
  },
  exit: {
    opacity: 0,
    x: -8,
    transition: { duration: 0.25, ease: ease.smooth },
  },
};

/** Kolom info: item masuk dari bawah dengan stagger */
const footerInfoContainerVariants: Variants = {
  initial: {},
  enter: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  exit:  { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const footerInfoItemVariants: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: ease.snappy },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.97,
    transition: { duration: 0.28, ease: ease.smooth },
  },
};

/** Teks copyright: fade sederhana */
const footerCopyrightVariants: Variants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.6, ease: ease.smooth },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const quickLinks = [
  { label: "Home",     href: "/" },
  { label: "Tentang",  href: "/about" },
  { label: "Kabinet",  href: "/kabinet" },
  { label: "Aspirasi", href: "/aspirasi" },
];

export default function FooterHimsi() {
  return (
    <footer className="relative w-full overflow-hidden">
      <div className="relative mx-auto max-w-[1240px] px-5 py-12 sm:px-7 lg:px-10">

        <AnimatedSection
          variants={footerWrapperVariants}
          threshold={0.1}
          rootMargin="0px 0px -40px 0px"
          className="glass-card rounded-[28px] p-6 sm:p-8 ring-1 ring-black/5 dark:ring-white/10"
        >
          <div className="grid gap-10 lg:grid-cols-12">

            <AnimatedItem
              variants={footerLogoVariants}
              className="lg:col-span-4"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/icon.png"
                  alt="Logo HIMSI"
                  width={42}
                  height={42}
                  priority
                  className="rounded-2xl"
                />
                <h3 className="text-2xl font-semibold text-foreground">HIMSI</h3>
              </div>

              <p className="mt-5 text-muted-foreground">
                Himpunan Mahasiswa Sistem Informasi <br />
                Universitas Multi Data Palembang
              </p>
            </AnimatedItem>

            <AnimatedItem
              variants={footerMenuContainerVariants}
              className="lg:col-span-3"
            >
              <h4 className="text-lg font-semibold text-foreground">Menu</h4>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                {quickLinks.map((l) => (
                  <AnimatedItem key={l.href} variants={footerMenuItemVariants}>
                    <li>
                      <Link
                        href={l.href}
                        className="flex items-center gap-2 hover:text-[#D3A32D] transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                        {l.label}
                      </Link>
                    </li>
                  </AnimatedItem>
                ))}
              </ul>
            </AnimatedItem>

            <AnimatedItem
              variants={footerInfoContainerVariants}
              className="lg:col-span-5 text-muted-foreground"
            >
              <h4 className="text-lg font-semibold text-foreground">Informasi</h4>
              <div className="mt-4 space-y-4">

                <AnimatedItem variants={footerInfoItemVariants}>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-foreground" />
                    <span>himsi@umdp.ac.id</span>
                  </div>
                </AnimatedItem>

                <AnimatedItem variants={footerInfoItemVariants}>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-foreground" />
                    <span>0812-3456-7890</span>
                  </div>
                </AnimatedItem>

                <AnimatedItem variants={footerInfoItemVariants}>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-foreground mt-1" />
                    <span>
                      Jl. Rajawali No.14 <br />
                      Palembang, Sumatera Selatan
                    </span>
                  </div>
                </AnimatedItem>

              </div>
            </AnimatedItem>

          </div>
        </AnimatedSection>

        <AnimatedSection
          variants={footerCopyrightVariants}
          threshold={0.05}
          className="mt-10 text-center text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} HIMSI UMDP. All rights reserved.
        </AnimatedSection>

      </div>
    </footer>
  );
}