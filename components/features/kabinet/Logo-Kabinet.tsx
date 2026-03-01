"use client";

import { AnimatedSection } from "@/components/animation/Animated";
import { logoVariants } from "@/components/animation/presets";

export default function LogoKabinet() {
    return (
        <section className="relative overflow-hidden">
            <div className="px-5 py-20 sm:px-7 lg:px-10">
                <AnimatedSection
                    variants={logoVariants}
                    threshold={0.3}
                    rootMargin="0px 0px -80px 0px"
                    className="flex justify-center"
                >
                    <img
                        src="/images/logo/logo-kabinet.png"
                        alt="Logo HIMSI"
                        className="mx-auto my-20 w-72 sm:w-96"
                    />
                </AnimatedSection>
            </div>
        </section>
    );
}