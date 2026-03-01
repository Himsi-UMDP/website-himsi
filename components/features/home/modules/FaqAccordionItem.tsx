"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { FaqItem } from "./../../../../types/types";

type FaqAccordionItemProps = {
    item: FaqItem;
    open: boolean;
    onToggle: () => void;
};

function PlusIcon({ open }: { open: boolean }) {
    return (
        <div
            className={[
                "grid h-12 w-12 place-items-center rounded-full border border-white/55 bg-white/20 backdrop-blur",
                "shadow-[0_10px_30px_rgba(0,0,0,0.12)]",
            ].join(" ")}
            aria-hidden
        >
            <div className="relative h-5 w-5">
                <span className="absolute left-1/2 top-1/2 block h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2464A8]" />
                <span
                    className={[
                        "absolute left-1/2 top-1/2 block h-5 w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2464A8] transition",
                        open ? "rotate-90 opacity-0" : "rotate-0 opacity-100",
                    ].join(" ")}
                />
            </div>
        </div>
    );
}

export function FaqAccordionItem({ item, open, onToggle }: FaqAccordionItemProps) {
    return (
        <div
            className={[
                "rounded-[22px] border border-white/50 bg-white/35 backdrop-blur",
                "shadow-[0_14px_40px_rgba(0,0,0,0.10)]",
            ].join(" ")}
        >
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
                <span className="text-lg font-medium text-[#0A3763] sm:text-xl">{item.q}</span>
                <PlusIcon open={open} />
            </button>

            <AnimatePresence initial={false}>
                {open ? (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 pt-0 text-[15px] leading-relaxed text-foreground sm:text-base">{item.a}</div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
}
