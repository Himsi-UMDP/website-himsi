"use client";

import TiltedCard from "@/components/common/TiltedCard";
import { AboutStatCardProps } from "@/types/types";


export function AboutStatCard({ item }: AboutStatCardProps) {
    const Icon = item.Icon;

    return (
        <TiltedCard
            showTooltip={false}
            showMobileWarning={false}
            rotateAmplitude={12}
            scaleOnHover={1.05}
            containerHeight="160px"
            containerWidth="100%"
        >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-black/10 bg-white/75 p-6 text-center shadow-sm backdrop-blur transition dark:border-white/15 dark:bg-white/10">
                <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[#D3A32D]/12 text-[#D3A32D] ring-1 ring-[#D3A32D]/25">
                    <Icon className="h-5 w-5" />
                </div>
                <p className="text-xl font-bold text-[#D3A32D]">{item.value}</p>
                <p className="text-[12px] font-medium uppercase tracking-wider text-foreground">{item.label}</p>
            </div>
        </TiltedCard>
    );
}
