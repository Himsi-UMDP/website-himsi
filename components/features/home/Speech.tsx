"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/animation/Animated";
import { speechVariants, speechImageVariants } from "@/components/animation/presets";

export default function Speech() {
    return (
        <div id="opening-speech" className="relative w-full overflow-hidden min-h-screen pb-10">
            <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-7 lg:px-10">

                <AnimatedSection
                    variants={speechVariants}
                    threshold={0.5}
                    className="text-center"
                >
                    <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#0A3763] dark:text-[#2464A8] sm:text-5xl">
                        Sambutan Ketua <span className="text-[#D3A32D]">HIMSI</span>
                    </h1>
                </AnimatedSection>

                <div className="relative mx-auto mt-12 max-w-5xl">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-7 rounded-[44px] bg-gradient-to-r from-[#2464A8]/18 via-white/10 to-[#D3A32D]/22 blur-2xl"
                    />

                    <div className="relative grid gap-8 rounded-[34px] border border-white/45 bg-white/20 p-8 shadow-[0_18px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl md:grid-cols-[1.2fr_0.8fr] md:items-center">

                        <AnimatedSection
                            variants={speechVariants}
                            threshold={0.2}
                        >
                            <p className="max-w-xl whitespace-pre-line text-[15px] leading-relaxed text-foreground sm:text-base">
                                Assalamualaikum Warahmatullahi Wabarakatuh,
                            </p>

                            <p className="max-w-xl whitespace-pre-line text-[15px] leading-relaxed text-foreground sm:text-base">
                                Salam sejahtera bagi kita semua.
                                {"\n"}
                                Saya, Muhammad Akbar ingin menyampaikan apresiasi setinggi-tingginya kepada seluruh
                                jajaran pengurus, anggota, dosen pembina, serta seluruh pihak yang senantiasa
                                mendukung eksistensi dan perkembangan HIMSI dari waktu ke waktu.
                            </p>

                            <p className="mt-4 max-w-xl whitespace-pre-line text-[15px] leading-relaxed text-foreground sm:text-base">
                                HIMSI memiliki peran strategis sebagai wadah pengembangan potensi, intelektualitas,
                                serta jiwa kepemimpinan mahasiswa Sistem Informasi. Melalui berbagai program kerja,
                                kegiatan akademik maupun non-akademik, HIMSI berkomitmen untuk menciptakan ekosistem
                                yang mendorong kolaborasi, inovasi, serta kontribusi nyata terhadap lingkungan kampus
                                dan masyarakat luas.
                            </p>

                            <p className="mt-4 max-w-xl whitespace-pre-line text-[15px] leading-relaxed text-foreground sm:text-base">
                                Akhir kata, besar harapan kami agar HIMSI senantiasa menjadi organisasi yang membawa
                                manfaat, membangun karakter, dan menciptakan perubahan positif di lingkungan akademik
                                maupun masyarakat luas.
                            </p>

                            <p className="mt-4 max-w-xl whitespace-pre-line text-[15px] leading-relaxed text-foreground sm:text-base">
                                Wassalamualaikum Warahmatullahi Wabarakatuh.
                            </p>

                            <div className="mt-8">
                                <div className="text-2xl font-semibold tracking-tight text-[#0A3763] dark:text-[#2464A8]">
                                    Muhammad Akbar.
                                </div>
                                <div className="mt-1 text-sm font-medium text-[#D3A32D]/80">
                                    Ketua Umum, 2025/2026
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection
                            variants={speechImageVariants}
                            threshold={0.2}
                            className="relative"
                        >
                            <div className="group relative mx-auto w-full max-w-[360px] rotate-[1.2deg] transition-transform duration-500 hover:rotate-0">
                                <div className="relative z-10 rounded-[28px] bg-white/70 p-3 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-white/50">
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-slate-100">
                                        <Image
                                            src="/images/pengurus/bph/akbar.png"
                                            alt="Ketua HIMSI"
                                            fill
                                            className="object-cover transition-scale duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 360px"
                                            priority={false}
                                        />
                                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 to-transparent" />
                                    </div>
                                </div>
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute -inset-2 rounded-[32px] border border-white/30 bg-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                />
                            </div>
                        </AnimatedSection>

                    </div>
                </div>
            </div>
        </div>
    );
}