"use client";

import Image from "next/image";
import type { Testimonial } from "./../../../../types/types";


export function TestimonialCard({ item }: { item: Testimonial }) {
    return (
        <article
            className={[
                "relative overflow-hidden rounded-[22px]",
                "border border-white/35 bg-white/20 p-5 backdrop-blur-sm",
                "transition-transform duration-200 hover:-translate-y-1",
            ].join(" ")}
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-70 bg-gradient-to-br from-[#2464A8]/14 via-white/0 to-[#D3A32D]/14"
            />

            <div className="relative z-10 mt-3">
                <div className="mt-5 flex items-center gap-3">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full ring-4 ring-white/55">
                        <Image src={item.avatar} alt={item.name} fill className="object-cover" sizes="44px" />
                    </div>

                    <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground">{item.name}</p>
                        <p className="mt-0.5 line-clamp-2 text-xs text-[#D3A32D]">{item.role}</p>
                    </div>
                </div>

                <p className="mt-2 text-[14px] leading-relaxed text-foreground">{item.quoteText}</p>

            </div>
        </article>
    );
}
