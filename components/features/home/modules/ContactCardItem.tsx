"use client";

import { ArrowRight } from "lucide-react";
import type { ContactCard } from "./../../../../types/types";

type ContactCardItemProps = {
    card: ContactCard;
};

export function ContactCardItem({ card }: ContactCardItemProps) {
    const Icon = card.Icon;

    return (
        <a
            key={card.title}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/card relative flex flex-col items-center justify-between overflow-hidden rounded-[28px] border border-white/80 bg-white/40 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/60 hover:shadow-xl"
        >
            <div
                className={`absolute inset-0 bg-gradient-to-br ${card.tint} to-transparent opacity-0 transition-opacity group-hover/card:opacity-100`}
            />

            <div className="relative z-10 flex flex-col items-center">
                <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 group-hover/card:scale-110 group-hover/card:shadow-md ${card.iconColor}`}
                >
                    <Icon className="h-8 w-8" />
                </div>

                <h3 className="text-lg font-bold text-[#0A3763]">{card.title}</h3>
                <p className="mt-2 break-all text-sm font-medium text-slate-600">{card.value}</p>
            </div>

            <div className="relative z-10 mt-8 flex w-full justify-end">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2464A8]/20 bg-white/50 text-[#2464A8] transition-all group-hover/card:bg-[#2464A8] group-hover/card:text-white">
                    <ArrowRight className="h-4 w-4" />
                </div>
            </div>
        </a>
    );
}
