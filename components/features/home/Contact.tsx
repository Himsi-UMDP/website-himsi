"use client";

import { ContactCardItem } from "./modules/ContactCardItem";
import { CONTENT } from "./../../../types/content";
import { AnimatedSection, AnimatedItem } from "@/components/animation/Animated";
import {
    contactVariants,
    contactContainerVariants,
    contactCardVariants,
} from "@/components/animation/presets";

export default function Contact() {
    return (
        <section className="relative flex min-h-[80vh] w-full items-center overflow-hidden pt-16 pb-24">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(36,100,168,0.1) 0%, rgba(245,247,252,1) 50%, rgba(211,163,45,0.08) 100%)",
                    }}
                />
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "radial-gradient(#2464A8 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />
            </div>

            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

                <AnimatedSection
                    variants={contactVariants}
                    threshold={0.4}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-[#0A3763] sm:text-5xl">
                        Kontak & <span className="text-[#D3A32D]">Media Sosial</span>
                    </h2>
                    <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-[#D3A32D] opacity-80" />
                </AnimatedSection>

                <div className="group relative">
                    <div className="absolute -inset-1 rounded-[45px] bg-gradient-to-r from-[#2464A8]/10 to-[#D3A32D]/10 blur-xl" />
                    <div className="relative rounded-[40px] border border-white/60 bg-white/40 p-8 shadow-2xl backdrop-blur-2xl">

                        <AnimatedSection
                            variants={contactContainerVariants}
                            threshold={0.15}
                            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                        >
                            {CONTENT.home.contactCards.map((card) => (
                                <AnimatedItem key={card.title} variants={contactCardVariants}>
                                    <ContactCardItem card={card} />
                                </AnimatedItem>
                            ))}
                        </AnimatedSection>

                    </div>
                </div>
            </div>
        </section>
    );
}