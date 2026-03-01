"use client";

import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import { DocumentationCard } from "./modules/Documentation-Card";
import { CONTENT } from "@/types/content";
import type { GalleryItem } from "@/types/types";
import { AnimatedSection, AnimatedItem } from "@/components/animation/Animated";
import {
    aboutVariants,
    aboutContainerVariants,
    aboutCardVariants,
} from "@/components/animation/presets";

export default function Dokumentasi() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<GalleryItem | null>(null);

    const openModal = (item: GalleryItem) => {
        setActive(item);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        setActive(null);
    };

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        if (open) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <section className="relative overflow-hidden py-20">
            <Snowfall />
            <div className="mx-auto max-w-[1240px] px-5 sm:px-7 lg:px-10">

                <AnimatedSection
                    variants={aboutVariants}
                    threshold={0.3}
                    className="mx-auto max-w-3xl text-center"
                >
                    <h2 className="text-4xl font-semibold tracking-tight text-[#0A3763] dark:text-[#2464A8] sm:text-5xl">
                        Dokumentasi <span className="text-[#D3A32D]">Kegiatan</span>
                    </h2>
                </AnimatedSection>

                <div className="relative mt-12">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-6 rounded-[44px] bg-gradient-to-r from-[#2464A8]/18 via-white/8 to-[#D3A32D]/20 blur-2xl"
                    />

                    <div className="relative rounded-[40px] border border-black/10 bg-white/28 p-6 backdrop-blur-xl shadow-[0_18px_60px_rgba(7,18,39,0.12)] dark:border-white/14 dark:bg-white/10 dark:shadow-[0_26px_80px_rgba(0,0,0,0.40)] sm:p-7">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 rounded-[40px] opacity-60"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(211,163,45,0.18) 0%, rgba(255,255,255,0) 38%, rgba(36,100,168,0.14) 100%)",
                                WebkitMask: "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                                padding: "1px",
                            }}
                        />

                        <AnimatedSection
                            variants={aboutContainerVariants}
                            threshold={0.1}
                            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {CONTENT.about.gallery.map((item, index) => (
                                <AnimatedItem key={`${item.title}-${index}`} variants={aboutCardVariants}>
                                    <DocumentationCard item={item} onClick={() => openModal(item)} />
                                </AnimatedItem>
                            ))}
                        </AnimatedSection>
                    </div>
                </div>

            </div>
        </section>
    );
}