"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { AboutStat } from "./../../types/types";

type AboutStatCardProps = {
    item: AboutStat & { id: number };
    isHover: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onFocus: () => void;
    onBlur: () => void;
};

export function AboutStatCard({
    item,
    isHover,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
}: AboutStatCardProps) {
    const Icon = item.Icon;

    return (
        <motion.div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onFocus}
            onBlur={onBlur}
            className={[
                "glass-effect-sm relative overflow-hidden rounded-2xl border border-white/10",
                "px-5 py-6 sm:px-6 sm:py-7",
                "transition-all duration-200",
                "min-h-[150px] sm:min-h-[190px]",
                "outline-none",
            ].join(" ")}
            whileHover={{ y: -12 }}
        >
            <AnimatePresence>
                {isHover ? (
                    <motion.div
                        key="chroma"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="pointer-events-none absolute inset-0"
                    />
                ) : null}
            </AnimatePresence>

            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 text-center">
                <div
                    className={[
                        "grid place-items-center rounded-xl",
                        "h-12 w-12",
                        "bg-[#D3A32D]/12 text-[#D3A32D]",
                        "ring-1 ring-[#D3A32D]/20",
                        "transition-transform duration-200",
                        isHover ? "scale-[1.05]" : "",
                    ].join(" ")}
                >
                    <Icon className="h-6 w-6" />
                </div>

                <div className="leading-none">
                    <div className="text-3xl font-semibold text-[#0A3763] dark:text-[#2464A8]">{item.value}</div>
                    <div className="mt-2 text-sm text-foreground">{item.label}</div>
                </div>
            </div>

            <div
                aria-hidden
                className={[
                    "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200",
                    isHover ? "opacity-100" : "",
                ].join(" ")}
                style={{
                    background:
                        "radial-gradient(520px 180px at 50% 0%, rgba(211,163,45,0.14), transparent 65%)",
                }}
            />
        </motion.div>
    );
}
