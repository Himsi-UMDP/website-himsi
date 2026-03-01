"use client";

import Image from "next/image";
import type React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { BidangDetail, Person, WorkProgram } from "@/types/types";
import Snowfall from "react-snowfall";
import { DocumentationProker } from "./Documentation-Proker";
import { AnimatedSection, AnimatedItem } from "@/components/animation/Animated";
import {
    pengurusInfoVariants,
    pengurusOrbitalVariants,
    prokerContainerVariants,
    prokerCardVariants,
    aboutVariants,
} from "@/components/animation/presets";

function initials(name: string) {
    return name.split(" ").slice(0, 2).map((n) => n[0]?.toUpperCase()).join("");
}

function AvatarNode({ p, active }: { p: Person; active?: boolean }) {
    return (
        <div className={["pointer-events-auto rounded-full bg-white p-[6px] shadow-[0_12px_40px_rgba(2,6,23,0.18)]", active ? "shadow-[0_18px_70px_rgba(211,163,45,0.25)]" : ""].join(" ")}>
            <div className={["relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border bg-white", active ? "border-transparent ring-2 ring-[#D3A32D]/45 shadow-[0_0_0_8px_rgba(211,163,45,0.14)]" : "border-slate-200"].join(" ")}>
                {p.avatar ? (
                    <Image src={p.avatar} alt={p.name} fill className="object-cover" />
                ) : (
                    <span className="text-[11px] font-extrabold text-slate-700">{initials(p.name)}</span>
                )}
            </div>
        </div>
    );
}

function getAvatarPositionLeft(index: number, total: number, containerSize: number, avatarSize: number) {
    const cx = containerSize / 2, cy = containerSize / 2, radius = containerSize / 2;
    if (total <= 1) return { x: cx - radius - avatarSize / 2, y: cy - avatarSize / 2 };
    const t = index / (total - 1);
    const angle = -Math.PI / 2 + t * Math.PI;
    return { x: cx - radius * Math.cos(angle) - avatarSize / 2, y: cy + radius * Math.sin(angle) - avatarSize / 2 };
}

function getAvatarPositionUp(index: number, total: number, containerSize: number, avatarSize: number) {
    const cx = containerSize / 2, cy = containerSize / 2, radius = containerSize / 2;
    if (total <= 1) return { x: cx - avatarSize / 2, y: cy - radius - avatarSize / 2 };
    const t = index / (total - 1);
    const angle = Math.PI - t * Math.PI;
    return { x: cx + radius * Math.cos(angle) - avatarSize / 2, y: cy - radius * Math.sin(angle) - avatarSize / 2 };
}

type ViewMode = "kepengurusan" | "staff";

export default function Pengurus({
    sectionRef,
    bidang,
    onBackToBidang,
    himsiLogo,
    kabinetLogo,
}: {
    sectionRef: React.RefObject<HTMLElement | null>;
    bidang: BidangDetail | null;
    onBackToBidang: () => void;
    himsiLogo: string;
    kabinetLogo: string;
}) {
    const [viewMode, setViewMode] = useState<ViewMode>("kepengurusan");
    const [open, setOpen] = useState(false);
    const [activeProgram, setActiveProgram] = useState<WorkProgram | null>(null);

    const people = useMemo<Person[]>(() => {
        if (!bidang) return [];
        const source = viewMode === "staff"
            ? (bidang.divisions ?? []).flatMap((d) => d.members ?? [])
            : (bidang.leaders ?? []).filter((p) => {
                const role = p.role.toLowerCase();
                return role.includes("ketua") || role.includes("wakil") || role.includes("sekretaris") || role.includes("bendahara") || role.includes("kepala bidang") || role.includes("koordinator");
            });
        const seen = new Set<string>();
        const unique: Person[] = [];
        for (const p of source) {
            const key = `${p.name}__${p.role}`;
            if (seen.has(key)) continue;
            seen.add(key);
            unique.push(p);
        }
        return unique;
    }, [bidang, viewMode]);

    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const normalizedActiveIndex = people.length ? activeIndex % people.length : 0;
    const activePerson = people[normalizedActiveIndex] ?? people[0];

    const startAutoSwitch = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (!people.length) return;
        intervalRef.current = setInterval(() => setActiveIndex((prev) => (prev + 1) % people.length), 3000);
    }, [people.length]);

    useEffect(() => {
        if (!bidang || people.length <= 1) return;
        startAutoSwitch();
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [bidang, people.length, startAutoSwitch]);

    const handleSelect = (index: number) => { setActiveIndex(index); startAutoSwitch(); };

    const openModal = (program: WorkProgram) => { setActiveProgram(program); setOpen(true); };
    const closeModal = useCallback(() => { setOpen(false); setActiveProgram(null); }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
        if (open) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [closeModal, open]);

    const CONTAINER = 520;
    const AVATAR_SIZE = 44;
    const hasProgramKerja = Boolean(bidang?.workPrograms?.length);

    return (
        <section ref={sectionRef} id="anggota" className="relative overflow-hidden min-h-screen">
            <Snowfall />
            <div className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:px-7 lg:px-10">
                {!bidang ? (
                    <AnimatedSection variants={aboutVariants} threshold={0.3}>
                        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
                            <p className="text-sm text-white/80">Pilih bidang pada section sebelumnya untuk menampilkan anggota.</p>
                            <button onClick={onBackToBidang} className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-extrabold text-white hover:bg-white/15" type="button">
                                Kembali Pilih Bidang
                                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10">↑</span>
                            </button>
                        </div>
                    </AnimatedSection>
                ) : (
                    <>
                        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch">

                            <AnimatedSection
                                variants={pengurusInfoVariants}
                                threshold={0.15}
                                className="flex min-h-[320px] w-full flex-col items-center justify-center text-center lg:min-h-[740px] lg:w-[40%] lg:items-start lg:justify-center lg:text-left"
                            >
                                <div>
                                    <div className="text-sm font-semibold text-foreground">Bidang</div>
                                    <h3 className="mt-2 text-5xl font-extrabold tracking-tight text-[#D3A32D]">{bidang.name}</h3>
                                </div>

                                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                                    {bidang.id !== "bpi" && (
                                        <>
                                            <button type="button" onClick={() => { setViewMode("kepengurusan"); setActiveIndex(0); }}
                                                className={["rounded-full border px-4 py-2 text-sm font-bold transition", viewMode === "kepengurusan" ? "border-[#D3A32D] bg-[#D3A32D] text-[#0A3763]" : "glass-card text-foreground hover:bg-white/15"].join(" ")}>
                                                Kepengurusan
                                            </button>
                                            <button type="button" onClick={() => { setViewMode("staff"); setActiveIndex(0); }}
                                                className={["rounded-full border px-4 py-2 text-sm font-bold transition", viewMode === "staff" ? "border-[#D3A32D] bg-[#D3A32D] text-[#0A3763]" : "glass-card text-foreground hover:bg-white/15"].join(" ")}>
                                                Anggota
                                            </button>
                                        </>
                                    )}
                                </div>

                                <div className="mt-10 flex items-center justify-center gap-7">
                                    <div className="relative glass-effect-sm grid h-28 w-28 place-items-center overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
                                        <Image src={himsiLogo} alt="HIMSI" fill className="object-contain object-center p-3 lg:p-4" sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 180px" />
                                    </div>
                                    <div className="relative glass-effect-sm grid h-28 w-28 place-items-center overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
                                        <Image src={kabinetLogo} alt="Kabinet" fill className="object-contain object-center p-3 lg:p-4" sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 180px" />
                                    </div>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection
                                variants={pengurusOrbitalVariants}
                                threshold={0.1}
                                className="relative min-h-[560px] w-full overflow-visible sm:min-h-[680px] lg:min-h-[740px] lg:w-[60%]"
                            >
                                {people.length ? (
                                    <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
                                        <div className={["relative pointer-events-none", "aspect-square w-[min(92vw,520px)]", "lg:w-[clamp(420px,44vw,640px)]", "lg:translate-x-[10%]"].join(" ")}>
                                            <svg viewBox={`0 0 ${CONTAINER} ${CONTAINER}`} className="absolute inset-0 h-full w-full overflow-visible" fill="none" aria-hidden="true">
                                                <path className="lg:hidden" d={`M 0 ${CONTAINER / 2} A ${CONTAINER / 2} ${CONTAINER / 2} 0 0 1 ${CONTAINER} ${CONTAINER / 2}`} stroke="#D3A32D" strokeWidth="2" strokeDasharray="6 6" opacity={0.55} />
                                                <path className="hidden lg:block" d={`M ${CONTAINER / 2} 0 A ${CONTAINER / 2} ${CONTAINER / 2} 0 0 0 ${CONTAINER / 2} ${CONTAINER}`} stroke="#D3A32D" strokeWidth="2" strokeDasharray="6 6" opacity={0.55} />
                                            </svg>

                                            <div className="pointer-events-auto absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={`${activePerson?.name}-${normalizedActiveIndex}`}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -20 }}
                                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                                        className="flex flex-col items-center"
                                                    >
                                                        <div className="glass-card relative h-[240px] w-[200px] overflow-hidden p-3 transition-all duration-500 md:h-[300px] md:w-[240px]">
                                                            <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-slate-200/50 dark:bg-slate-800/50">
                                                                {activePerson?.avatar ? (
                                                                    <Image src={activePerson.avatar} alt={activePerson.name} fill className="object-cover transition-transform duration-700 hover:scale-110" priority />
                                                                ) : (
                                                                    <div className="grid h-full w-full place-items-center bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-700 dark:to-slate-900">
                                                                        <span className="text-4xl font-black text-slate-400 opacity-40">{activePerson ? initials(activePerson.name) : "NA"}</span>
                                                                    </div>
                                                                )}
                                                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60" />
                                                            </div>
                                                            <div className="shine pointer-events-none absolute inset-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                                        </div>
                                                        <div className="mt-6 text-center">
                                                            <h4 className="text-xl font-black tracking-tight text-[#0A3763] dark:text-[#D3A32D] md:text-2xl">{activePerson?.name ?? "Nama Anggota"}</h4>
                                                            <p className="mt-1 text-sm font-bold uppercase tracking-widest text-[#2464A8] dark:text-slate-400 md:text-base">{activePerson?.role ?? "Jabatan"}</p>
                                                        </div>
                                                    </motion.div>
                                                </AnimatePresence>
                                            </div>

                                            {people.map((p, index) => {
                                                const isActive = index === normalizedActiveIndex;
                                                const pos = getAvatarPositionUp(index, people.length, CONTAINER, AVATAR_SIZE);
                                                return (
                                                    <motion.button key={`m-${p.name}-${p.role}-${index}`} onClick={() => handleSelect(index)} aria-label={`Pilih ${p.name}`} type="button"
                                                        className="pointer-events-auto absolute z-20 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D3A32D] focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
                                                        style={{ left: `${(pos.x / CONTAINER) * 100}%`, top: `${(pos.y / CONTAINER) * 100}%` }}
                                                        animate={{ scale: isActive ? 1.12 : 1 }} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                                                        <AvatarNode p={p} active={isActive} />
                                                    </motion.button>
                                                );
                                            })}

                                            {people.map((p, index) => {
                                                const isActive = index === normalizedActiveIndex;
                                                const pos = getAvatarPositionLeft(index, people.length, CONTAINER, AVATAR_SIZE);
                                                return (
                                                    <motion.button key={`d-${p.name}-${p.role}-${index}`} onClick={() => handleSelect(index)} aria-label={`Pilih ${p.name}`} type="button"
                                                        className="pointer-events-auto absolute z-20 hidden rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D3A32D] focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:block"
                                                        style={{ left: `${(pos.x / CONTAINER) * 100}%`, top: `${(pos.y / CONTAINER) * 100}%` }}
                                                        animate={{ scale: isActive ? 1.12 : 1 }} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                                                        <AvatarNode p={p} active={isActive} />
                                                    </motion.button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
                                        <p className="text-sm text-white/80">Tidak ada data untuk kategori ini.</p>
                                    </div>
                                )}
                            </AnimatedSection>
                        </div>

                        {hasProgramKerja && (
                            <div className="mt-4">
                                <AnimatedSection variants={aboutVariants} threshold={0.2}>
                                    <h4 className="text-4xl text-center font-semibold tracking-tight text-[#0A3763] dark:text-[#2464A8] sm:text-5xl">
                                        Program Kerja <span className="text-[#D3A32D]">{bidang.name}</span>
                                    </h4>
                                </AnimatedSection>

                                <AnimatedSection
                                    variants={prokerContainerVariants}
                                    threshold={0.1}
                                    className="mt-8 glass-card rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-7"
                                >
                                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                                        {bidang.workPrograms?.map((program) => (
                                            <AnimatedItem key={program.title} variants={prokerCardVariants}>
                                                <article className="overflow-hidden glass-effect-sm rounded-2xl border border-white/15 bg-white/10">
                                                    <button type="button" className="block w-full text-left" onClick={() => openModal(program)}>
                                                        <div className="relative h-44 w-full">
                                                            <Image src={program.image} alt={program.title} fill className="object-cover" />
                                                        </div>
                                                        <div className="p-4">
                                                            <h5 className="text-base font-extrabold text-[#D3A32D]">{program.title}</h5>
                                                            <p className="mt-2 text-foreground">{program.description}</p>
                                                        </div>
                                                    </button>
                                                </article>
                                            </AnimatedItem>
                                        ))}
                                    </div>
                                </AnimatedSection>

                                {open && activeProgram && <DocumentationProker active={activeProgram} onClose={closeModal} />}
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}