"use client";

import { useMemo, useState } from "react";
import { AboutStatCard } from "./../../common/StatCard";
import { CONTENT } from "./../../../types/content";
import { AnimatedSection, AnimatedItem } from "@/components/animation/Animated";
import {
    aboutVariants,
    aboutContainerVariants,
    aboutCardVariants,
} from "@/components/animation/presets";

export default function About() {
    const [hovered, setHovered] = useState<number | null>(null);

    const items = useMemo(
        () => CONTENT.home.aboutStats.map((item, index) => ({ ...item, id: index })),
        [],
    );

    return (
        <section id="about" className="relative w-full overflow-hidden">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50">
                <svg className="h-full w-full" viewBox="0 0 1400 800" fill="none">
                    <g stroke="white" strokeOpacity="0.45" strokeWidth="1.2">
                        <path d="M880 90 L1020 140 L1160 110 L1320 180" />
                        <path d="M900 240 L1020 140 L1110 260 L1320 180" />
                        <path d="M980 360 L1110 260 L1230 380" />
                        <path d="M1120 520 L1230 380 L1340 520" />
                        <path d="M80 260 L210 210 L360 280 L520 240" />
                        <path d="M130 520 L260 440 L410 520 L560 460" />
                    </g>
                    <g fill="white" fillOpacity="0.55">
                        {[
                            [880, 90], [1020, 140], [1160, 110], [1320, 180],
                            [900, 240], [1110, 260], [980, 360], [1230, 380],
                            [1120, 520], [1340, 520], [80, 260], [210, 210],
                            [360, 280], [520, 240], [130, 520], [260, 440],
                            [410, 520], [560, 460],
                        ].map(([x, y], i) => (
                            <circle key={i} cx={x} cy={y} r="5" />
                        ))}
                    </g>
                </svg>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 py-20 sm:px-7 lg:px-10 lg:py-24">

                <AnimatedSection
                    variants={aboutVariants}
                    threshold={0.4}
                    className="mx-auto max-w-3xl text-center"
                >
                    <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#0A3763] dark:text-[#2464A8] sm:text-5xl">
                        Tentang <span className="text-[#D3A32D]">HIMSI</span>
                    </h2>

                    <p className="mt-6 text-base leading-relaxed text-foreground sm:text-lg">
                        HIMSI UMDP adalah Himpunan Mahasiswa Sistem Informasi Universitas Multi Data
                        Palembang yang hadir sebagai wadah pengembangan diri, kreativitas, serta
                        memperkuat hubungan antar mahasiswa Sistem Informasi di kampus.
                    </p>
                </AnimatedSection>

                <div className="mt-12">
                    <AnimatedSection
                        variants={aboutContainerVariants}
                        threshold={0.2}
                        className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6"
                    >
                        {items.map((item) => (
                            <AnimatedItem key={item.id} variants={aboutCardVariants}>
                                <AboutStatCard
                                    item={item}
                                    isHover={hovered === item.id}
                                    onMouseEnter={() => setHovered(item.id)}
                                    onMouseLeave={() => setHovered(null)}
                                    onFocus={() => setHovered(item.id)}
                                    onBlur={() => setHovered(null)}
                                />
                            </AnimatedItem>
                        ))}
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}