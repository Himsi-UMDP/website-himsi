"use client";

import Image from "next/image";
import Snowfall from "react-snowfall";
import { AnimatedSection } from "@/components/animation/Animated";
import { profileCardVariants } from "@/components/animation/presets";

export default function ProfileKabinet() {
    return (
        <section className="relative overflow-hidden">
            <div className="mt-40 mb-20">
                <Snowfall />
                <AnimatedSection
                    variants={profileCardVariants}
                    threshold={0.25}
                    rootMargin="-40px 0px -40px 0px"
                    className="glass-card relative mx-auto w-full max-w-5xl overflow-hidden rounded-[28px]"
                >
                    <div className="relative z-30 h-[220px] sm:h-[280px] md:h-[340px]">
                        <Image
                            src="/images/hero/hero-4.png"
                            alt="Kegiatan HIMSI"
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 900px, 1024px"
                        />
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}