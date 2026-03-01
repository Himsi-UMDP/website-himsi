"use client";

import { useMemo } from "react";
import { MarqueeColumn } from "./modules/MarqueeColumn";
import { CONTENT } from "./../../../types/content";
import { AnimatedSection } from "@/components/animation/Animated";
import { testimonialsVariants } from "@/components/animation/presets";

export default function Testimonials() {
    const slides = useMemo(() => CONTENT.home.testimonials, []);
    const firstColumn = useMemo(() => slides, [slides]);
    const secondColumn = useMemo(() => [...slides].reverse(), [slides]);
    const thirdColumn = useMemo(() => [...slides.slice(1), slides[0]], [slides]);

    return (
        <section className="relative w-full overflow-hidden py-20 sm:py-24">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-45">
                <svg className="h-full w-full" viewBox="0 0 1400 800" fill="none">
                    <g stroke="white" strokeOpacity="0.40" strokeWidth="1.2">
                        <path d="M120 120 L300 90 L460 160 L640 120 L820 190" />
                        <path d="M160 280 L340 230 L520 300 L700 250" />
                        <path d="M120 520 L320 440 L520 520 L720 460" />
                        <path d="M460 160 L340 320 L520 460" />
                        <path d="M880 140 L1040 190 L1180 160 L1320 220" />
                        <path d="M920 280 L1040 190 L1120 300 L1320 220" />
                    </g>
                    <g fill="white" fillOpacity="0.50">
                        {[
                            [120, 120], [300, 90], [460, 160], [640, 120], [820, 190],
                            [160, 280], [340, 230], [520, 300], [700, 250],
                            [120, 520], [320, 440], [520, 520], [720, 460],
                            [460, 160], [340, 320], [520, 460],
                            [880, 140], [1040, 190], [1180, 160], [1320, 220],
                            [920, 280], [1120, 300],
                        ].map(([x, y], i) => (
                            <circle key={i} cx={x} cy={y} r="4.8" />
                        ))}
                    </g>
                </svg>
            </div>

            <AnimatedSection
                variants={testimonialsVariants}
                threshold={0.1}
                className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-7 lg:px-10"
            >
                <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                    <MarqueeColumn items={firstColumn} duration={50} offset={0} />
                    <MarqueeColumn items={secondColumn} duration={60} offset={-120} />
                    <MarqueeColumn items={thirdColumn} duration={50} offset={-60} />
                </div>
            </AnimatedSection>
        </section>
    );
}