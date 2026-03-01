"use client";

import { useState } from "react";
import { FaqAccordionItem } from "./modules/FaqAccordionItem";
import { CONTENT } from "./../../../types/content";
import { AnimatedSection, AnimatedItem } from "@/components/animation/Animated";
import {
    faqVariants,
    faqContainerVariants,
    faqItemVariants,
} from "@/components/animation/presets";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative w-full overflow-hidden min-h-screen pb-10">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
                <svg className="h-full w-full" viewBox="0 0 1400 800" fill="none">
                    <g stroke="white" strokeOpacity="0.35" strokeWidth="1.15">
                        <path d="M90 180 L280 120 L470 190 L660 140 L850 210 L1040 160 L1250 220" />
                        <path d="M120 520 L320 440 L520 520 L720 450 L920 540 L1120 470 L1320 560" />
                        <path d="M280 120 L220 260 L340 380 L520 520" />
                        <path d="M1040 160 L980 290 L1120 420 L1250 560" />
                    </g>
                    <g fill="white" fillOpacity="0.45">
                        {[
                            [90, 180], [280, 120], [470, 190], [660, 140], [850, 210],
                            [1040, 160], [1250, 220], [120, 520], [320, 440], [520, 520],
                            [720, 450], [920, 540], [1120, 470], [1320, 560],
                            [220, 260], [340, 380], [980, 290], [1120, 420],
                        ].map(([x, y], i) => (
                            <circle key={i} cx={x} cy={y} r="4.5" />
                        ))}
                    </g>
                </svg>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-7 lg:px-10">

                <AnimatedSection
                    variants={faqVariants}
                    threshold={0.5}
                    className="text-center"
                >
                    <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0A3763] dark:text-[#2464A8] sm:text-5xl">
                        Frequently Asked
                        <span className="text-[#D3A32D]"> Questions</span>
                    </h2>
                </AnimatedSection>

                <div className="relative mt-10 sm:mt-12">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-4 rounded-[34px] bg-gradient-to-r from-[#2464A8]/18 via-white/8 to-[#D3A32D]/18 blur-2xl"
                    />

                    <div className="relative rounded-[34px] border border-white/45 bg-white/25 p-5 backdrop-blur sm:p-6">

                        <AnimatedSection
                            variants={faqContainerVariants}
                            threshold={0.1}
                            className="space-y-4"
                        >
                            {CONTENT.home.faqs.map((item, index) => (
                                <AnimatedItem key={item.q} variants={faqItemVariants}>
                                    <FaqAccordionItem
                                        item={item}
                                        open={openIndex === index}
                                        onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                                    />
                                </AnimatedItem>
                            ))}
                        </AnimatedSection>

                    </div>
                </div>
            </div>
        </section>
    );
}