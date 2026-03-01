"use client";

import Snowfall from "react-snowfall";
import TiltedCard from "@/components/common/TiltedCard";
import { AnimatedSection, AnimatedItem } from "@/components/animation/Animated";
import {
    faqVariants,
    aboutContainerVariants,
    aboutCardVariants,
} from "@/components/animation/presets";

export default function VisiMisi() {
    return (
        <section className="relative overflow-hidden" id="visi-misi">
            <Snowfall />
            <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-7 lg:px-10">

                <AnimatedSection
                    variants={faqVariants}
                    threshold={0.2}
                    className="mx-auto mb-12 max-w-3xl text-center"
                >
                    <h2 className="mt-2 text-4xl font-semibold tracking-tight text-[#D3A32D] sm:text-5xl">
                        Visi
                        <span className="text-foreground"> & </span>
                        Misi
                    </h2>
                </AnimatedSection>

                <AnimatedSection
                    variants={aboutContainerVariants}
                    threshold={0.1}
                    rootMargin="0px 0px -40px 0px"
                    className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2"
                    style={{ perspective: 1000 }}
                >
                    <AnimatedItem variants={aboutCardVariants} className="h-full">
                        <TiltedCard
                            showTooltip={false}
                            showMobileWarning={false}
                            rotateAmplitude={10}
                            scaleOnHover={1.02}
                            containerHeight="100%"
                            containerWidth="100%"
                        >
                            <div className="glass-card relative flex h-full flex-col overflow-hidden rounded-[24px] border border-black/10 bg-white/70 p-8 backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:p-10">
                                <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#2464A8]/10 blur-3xl" />
                                <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#D3A32D]/10 blur-3xl" />

                                <div className="relative flex flex-col flex-1">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur dark:border-white/20 dark:bg-white/10 w-fit">
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#D3A32D]" />
                                        Visi
                                    </div>

                                    <p className="mt-6 flex-1 text-base leading-relaxed text-foreground sm:text-[17px]">
                                        Menjadikan Himpunan Mahasiswa Sistem Informasi sebagai wadah pemersatu,
                                        penampung, aspirasi, dan penyalur bakat mahasiswa program studi Sistem
                                        Informasi sehingga terwujud himpunan yang solid dan bersinergi.
                                    </p>
                                </div>
                            </div>
                        </TiltedCard>
                    </AnimatedItem>

                    <AnimatedItem variants={aboutCardVariants} className="h-full">
                        <TiltedCard
                            showTooltip={false}
                            showMobileWarning={false}
                            rotateAmplitude={10}
                            scaleOnHover={1.02}
                            containerHeight="100%"
                            containerWidth="100%"
                        >
                            <div className="glass-card relative flex h-full flex-col overflow-hidden rounded-[24px] border border-black/10 bg-white/70 p-8 backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:p-10">
                                <div aria-hidden className="pointer-events-none absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-[#D3A32D]/10 blur-3xl" />
                                <div aria-hidden className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#2464A8]/10 blur-3xl" />

                                <div className="relative flex flex-col flex-1">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur dark:border-white/20 dark:bg-white/10 w-fit">
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#2464A8]" />
                                        Misi
                                    </div>

                                    <p className="mt-6 flex-1 text-base leading-relaxed text-foreground sm:text-[17px]">
                                        Menjadi wadah kegiatan dan penyalur aspirasi, minat, serta bakat mahasiswa
                                        dengan asas kekeluargaan, sekaligus mengembangkan potensi agar terus maju
                                        dan berkembang, menjalin hubungan baik dengan civitas akademika, alumni,
                                        serta organisasi/lembaga lain khususnya di lingkungan Universitas Multi
                                        Data Palembang, menyelenggarakan program yang mendukung terciptanya
                                        mahasiswa yang aktif, solid, berwawasan, dan kompeten, serta
                                        mengoptimalkan fungsi setiap bidang.
                                    </p>
                                </div>
                            </div>
                        </TiltedCard>
                    </AnimatedItem>
                </AnimatedSection>

            </div>
        </section>
    );
}