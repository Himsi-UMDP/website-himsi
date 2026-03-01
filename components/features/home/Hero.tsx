"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animation/Animated";
import {
    heroVariants,
    heroChildVariants,
} from "@/components/animation/presets";

const heroContainerVariants = {
    initial: {},
    enter: {
        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
    exit: {
        transition: { staggerChildren: 0.06, staggerDirection: -1 },
    },
};

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50">
                <svg className="h-full w-full" viewBox="0 0 1400 800" fill="none">
                    <g stroke="white" strokeOpacity="0.35" strokeWidth="1.2">
                        <path d="M80 160 L260 110 L420 190 L620 140 L820 220" />
                        <path d="M140 560 L300 450 L470 560 L640 470 L820 560" />
                        <path d="M260 210 L190 340 L320 470" />
                        <path d="M960 90 L1120 140 L1260 110 L1340 180" />
                        <path d="M980 240 L1120 140 L1210 260 L1340 180" />
                        <path d="M1040 360 L1210 260 L1320 380" />
                    </g>
                    <g fill="white" fillOpacity="0.45">
                        {[
                            [80, 160], [260, 110], [420, 190], [620, 140], [820, 220],
                            [140, 560], [300, 450], [470, 560], [640, 470], [820, 560],
                            [260, 210], [190, 340], [320, 470],
                            [960, 90], [1120, 140], [1260, 110], [1340, 180],
                            [980, 240], [1210, 260], [1040, 360], [1320, 380],
                        ].map(([x, y], i) => (
                            <circle key={i} cx={x} cy={y} r="4.5" />
                        ))}
                    </g>
                </svg>
            </div>

            <div className="relative z-10 mx-auto min-h-screen w-full max-w-[1480px] px-6 pb-16 pt-24 sm:px-10 lg:px-12 lg:pb-24 lg:pt-28 xl:pt-30">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    <AnimatedSection
                        variants={heroContainerVariants}
                        threshold={0.2}
                        className="max-w-[680px]"
                    >
                        <motion.div
                            variants={heroChildVariants}
                            className="inline-flex items-center gap-3 rounded-full px-6 py-2.5 text-sm backdrop-blur border border-black/10 bg-white/70 text-[#0A3763] dark:border-white/25 dark:bg-white/10 dark:text-white"
                        >
                            <span className="h-2.5 w-2.5 rounded-full bg-[#D3A32D]" />
                            <span className="text-foreground"> Selamat Datang di HIMSI UMDP </span>
                        </motion.div>

                        <motion.h1
                            variants={heroChildVariants}
                            className="mt-7 text-5xl font-semibold leading-[1.02] tracking-tight text-[#2464A8] sm:text-6xl lg:text-[72px] xl:text-[82px]"
                        >
                            Together,
                            <span className="block text-[#D3A32D]">We Are Better!</span>
                        </motion.h1>

                        <motion.p
                            variants={heroChildVariants}
                            className="mt-7 max-w-[600px] text-[16px] leading-relaxed text-foreground sm:text-[17px]"
                        >
                            HIMSI UMDP adalah organisasi mahasiswa di Universitas Multi Data Palembang
                            yang menghimpun seluruh mahasiswa dalam program studi Sistem Informasi.
                        </motion.p>

                        <motion.div
                            variants={heroChildVariants}
                            className="mt-9 flex flex-row flex-wrap items-center gap-4"
                        >
                            <Button
                                className="h-12 rounded-full px-9 text-white bg-[#0A3763] hover:bg-[#0A3763]/90 dark:bg-[#2464A8] dark:hover:bg-[#2464A8]/90"
                                asChild
                            >
                                <Link href="/kabinet">Lihat Program</Link>
                            </Button>

                            <Button
                                variant="outline"
                                className="h-12 rounded-full px-9 border border-black/10 bg-white/70 text-[#071227] hover:bg-white/85 dark:border-white/35 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                            >
                                <Link href="/about">Tentang HIMSI</Link>
                            </Button>
                        </motion.div>
                    </AnimatedSection>

                    <div className="relative flex justify-center lg:justify-end">
                        <AnimatedSection
                            variants={heroVariants}
                            threshold={0.2}
                            className="relative h-[420px] w-full max-w-[640px] sm:h-[520px] lg:h-[640px] lg:max-w-[760px] lg:translate-x-6"
                        >
                            <div className="absolute left-0 top-[18%] h-[60%] w-[70%] rotate-[-4deg] rounded-[28px] border border-black/10 bg-white/70 dark:border-white/25 dark:bg-white/10 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur">
                                <div className="relative h-full w-full overflow-hidden rounded-[22px]">
                                    <Image src="/images/hero/hero3.jpg" alt="Kegiatan HIMSI" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="absolute right-[10%] top-[6%] h-[28%] w-[48%] rotate-[6deg] rounded-[24px] border border-black/10 bg-white/70 dark:border-white/25 dark:bg-white/10 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur">
                                <div className="relative h-full w-full overflow-hidden rounded-[18px]">
                                    <Image src="/images/hero/hero1.jpg" alt="Kolaborasi" fill className="object-cover" />
                                </div>
                            </div>
                            <div className="absolute right-0 top-[30%] h-[52%] w-[48%] rotate-[2deg] rounded-[24px] border border-white/60 bg-white/20 dark:border-white/25 dark:bg-white/10 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur">
                                <div className="relative h-full w-full overflow-hidden rounded-[18px]">
                                    <Image src="/images/hero/hero2.jpg" alt="Belajar bersama" fill className="object-cover" />
                                </div>
                            </div>
                            <div aria-hidden className="pointer-events-none absolute right-0 top-[42%] h-1 w-[80%] -rotate-12 rounded-full bg-white/25 blur-[1px]" />
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}