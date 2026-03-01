"use client";

import Snowfall from "react-snowfall";
import { AboutStatCard } from "./modules/About-Card";
import { CONTENT } from "./../../../types/content";
import { AnimatedSection, AnimatedItem } from "@/components/animation/Animated";
import {
    aboutVariants,
    aboutContainerVariants,
    aboutCardVariants,
    speechVariants,
    speechImageVariants,
} from "@/components/animation/presets";

export default function Profile() {
    return (
        <section className="relative overflow-hidden" id="profile">
            <Snowfall />
            <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-7 lg:px-10">

                <AnimatedSection variants={aboutVariants} threshold={0.3}>
                    <h1 className="mt-5 mb-10 text-center text-4xl font-semibold tracking-tight text-[#0A3763] dark:text-[#2464A8] sm:text-5xl">
                        Profile <span className="text-[#D3A32D]">HIMSI</span>
                    </h1>
                </AnimatedSection>

                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    <AnimatedSection
                        variants={speechVariants}
                        threshold={0.2}
                        className="mx-auto w-full max-w-3xl lg:mx-0 lg:max-w-none"
                    >
                        <p className="mt-5 text-base leading-relaxed text-foreground sm:text-[17px]">
                            Himpunan Mahasiswa Sistem Informasi Universitas Multi Data Palembang (HIMSI UMDP)
                            adalah organisasi di Fakultas Ilmu Komputer dan Rekayasa yang menjadi wadah aspirasi
                            mahasiswa/i Sistem Informasi untuk berkolaborasi, meningkatkan wawasan dan kemampuan,
                            serta membentuk jiwa kepemimpinan yang bertanggung jawab demi menjaga nama baik
                            universitas. HIMSI UMDP dibina oleh Pembina sekaligus Ketua Program Studi Sistem
                            Informasi, dipimpin oleh Ketua Umum (Kahim) dan Wakil Ketua Umum (Wakahim) dengan
                            dukungan Sekretaris Umum dan Bendahara Umum, serta memiliki 4 Bidang Eksekutif:
                            Litbang IT, Sosial, PSDM, dan Kominfo.
                        </p>
                    </AnimatedSection>

                    <div className="relative">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[#2464A8]/15 via-white/10 to-[#D3A32D]/15 blur-2xl dark:from-[#2464A8]/25 dark:via-white/5 dark:to-[#D3A32D]/20"
                        />
                        <div className="relative sm:p-7">
                            <AnimatedSection
                                variants={aboutContainerVariants}
                                threshold={0.2}
                                className="mt-6 grid grid-cols-2 gap-6"
                            >
                                {CONTENT.about.stats.map((item) => (
                                    <AnimatedItem key={item.label} variants={aboutCardVariants}>
                                        <AboutStatCard item={item} />
                                    </AnimatedItem>
                                ))}
                            </AnimatedSection>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}