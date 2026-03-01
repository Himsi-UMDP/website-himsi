"use client";

import Image from "next/image";
import type { ElementType, Ref } from "react";
import type { BidangDetail } from "@/types/types";
import Snowfall from "react-snowfall";
import { AnimatedSection, AnimatedItem } from "@/components/animation/Animated";
import {
    filosofiHeadingVariants,
    bidangContainerVariants,
    bidangTileVariants,
} from "@/components/animation/presets";

function MosaicTile({
    title,
    badge,
    cover,
    coverContain = false,
    className = "",
    onClick,
}: {
    title: string;
    badge?: string;
    icon?: string;
    cover?: string;
    coverContain?: boolean;
    className?: string;
    onClick?: () => void;
}) {
    const Wrapper: ElementType = onClick ? "button" : "div";
    const displayTitle = title || badge || "Bidang";

    return (
        <Wrapper
            onClick={onClick}
            type={onClick ? "button" : undefined}
            aria-label={onClick ? `Buka anggota ${displayTitle}` : undefined}
            className={[
                "group relative w-full overflow-hidden rounded-[16px] border border-[rgba(7,18,39,0.1)]",
                "bg-[linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.60)_100%)]",
                "shadow-[0_14px_40px_rgba(7,18,39,0.12),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-[20px] saturate-125",
                "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_56px_rgba(7,18,39,0.16),inset_0_1px_0_rgba(255,255,255,0.75)]",
                onClick ? "cursor-pointer text-left" : "",
                className,
            ].join(" ")}
        >
            <div className="absolute inset-0">
                {cover ? (
                    <Image
                        src={cover}
                        alt={displayTitle}
                        fill
                        className={[
                            "h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]",
                            coverContain ? "object-contain p-2.5 sm:p-3.5" : "object-cover",
                        ].join(" ")}
                    />
                ) : (
                    <div className="h-full w-full bg-gradient-to-br from-[#0B3B82]/35 via-white/10 to-[#EA6A1A]/30" />
                )}
            </div>

            <div className="pointer-events-none absolute inset-0 flex justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <div className="w-full h-full border border-white/25 bg-slate-900/58 px-3 py-1.5 shadow-[0_16px_45px_rgba(2,6,23,0.6)] backdrop-blur-md flex items-center justify-center">
                    <p className="text-center text-xs font-bold tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-3xl">
                        {displayTitle}
                    </p>
                </div>
            </div>
        </Wrapper>
    );
}

export default function Bidang({
    sectionRef,
    bidangList,
    onClickAnggota,
}: {
    sectionRef: Ref<HTMLElement>;
    bidangList: BidangDetail[];
    onClickAnggota: (id: BidangDetail["id"]) => void;
}) {
    const layoutById: Record<string, string> = {
        psdm:    "col-span-1 sm:col-span-6 lg:col-span-4 lg:row-span-2",
        kominfo: "col-span-1 sm:col-span-6 lg:col-span-4 lg:row-span-2",
        litbang: "col-span-1 sm:col-span-6 lg:col-span-4 lg:row-span-2",
        sosial:  "col-span-1 sm:col-span-6 lg:col-span-4 lg:row-span-2",
    };

    const getBidang = (id: string) => bidangList.find((b) => b.id === id);
    const psdm    = getBidang("psdm");
    const kominfo = getBidang("kominfo");
    const litbang = getBidang("litbang");
    const sosial  = getBidang("sosial");

    return (
        <section ref={sectionRef} id="bidang" className="relative overflow-hidden pb-12 pt-20">
            <Snowfall />
            <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-7 lg:px-10">

                <AnimatedSection variants={filosofiHeadingVariants} threshold={0.3} className="text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        <span className="text-[#0A3763] dark:text-[#2464A8]">Bidang </span>
                        <span className="text-[#D3A32D]">Eksekutif</span>
                    </h2>
                </AnimatedSection>

                <AnimatedSection
                    variants={bidangContainerVariants}
                    threshold={0.1}
                    rootMargin="-40px 0px -40px 0px"
                    className="mt-12 grid grid-cols-2 sm:grid-cols-12 grid-flow-dense gap-3.5 sm:gap-4 [grid-auto-rows:120px] sm:[grid-auto-rows:132px] lg:[grid-auto-rows:142px]"
                >
                    <AnimatedItem variants={bidangTileVariants} className="col-span-1 sm:col-span-6 lg:col-span-4 lg:row-span-2">
                        <MosaicTile title="BPI" badge="BPI" cover="/images/logo/logo-himsi.png" coverContain className="h-full" onClick={() => onClickAnggota("bpi")} />
                    </AnimatedItem>

                    {psdm && (
                        <AnimatedItem variants={bidangTileVariants} className={layoutById.psdm}>
                            <MosaicTile className="h-full" title={psdm.name} badge="PSDM" cover="/images/logo/logo-psdm.jpeg" onClick={() => onClickAnggota(psdm.id)} />
                        </AnimatedItem>
                    )}

                    <AnimatedItem variants={bidangTileVariants} className="col-span-1 sm:col-span-6 lg:col-span-4 lg:row-span-2">
                        <MosaicTile title="BPI" badge="BPI" cover="/images/logo/logo-kabinet.png" coverContain className="h-full" onClick={() => onClickAnggota("bpi")} />
                    </AnimatedItem>

                    {kominfo && (
                        <AnimatedItem variants={bidangTileVariants} className={layoutById.kominfo}>
                            <MosaicTile className="h-full" title={kominfo.name} badge="Kominfo" cover="/images/logo/logo-kominfo.jpeg" onClick={() => onClickAnggota(kominfo.id)} />
                        </AnimatedItem>
                    )}

                    {litbang && (
                        <AnimatedItem variants={bidangTileVariants} className={layoutById.litbang}>
                            <MosaicTile className="h-full" title={litbang.name} badge="Litbang IT" cover="/images/logo/logo-litbang.png" onClick={() => onClickAnggota(litbang.id)} />
                        </AnimatedItem>
                    )}

                    {sosial && (
                        <AnimatedItem variants={bidangTileVariants} className={layoutById.sosial}>
                            <MosaicTile className="h-full" title={sosial.name} badge="Bidang" cover="/images/logo/logo-sosial.png" onClick={() => onClickAnggota(sosial.id)} />
                        </AnimatedItem>
                    )}
                </AnimatedSection>

            </div>
        </section>
    );
}