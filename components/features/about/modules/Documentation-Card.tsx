"use client";

import type { GalleryItem } from "@/types/types";

type DocumentationCardProps = {
    item: GalleryItem;
    onClick: () => void;
};

export function DocumentationCard({ item, onClick }: DocumentationCardProps) {
    return (
        <button type="button" onClick={onClick} className="group text-left">
            <div
                className="relative overflow-hidden rounded-[20px] border border-black/10 bg-white/20 shadow-[0_12px_36px_rgba(7,18,39,0.10)] dark:border-white/14 dark:bg-white/10 dark:shadow-[0_14px_40px_rgba(0,0,0,0.22)]"
            >
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                        background: "linear-gradient(135deg, rgba(211,163,45,0.16) 0%, rgba(255,255,255,0) 55%)",
                    }}
                />

                <div className="relative aspect-[16/9] w-full">
                    <img
                        src={item.src}
                        alt={item.alt}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                    />
                </div>

                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[20px]"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)" }}
                />
            </div>

            <div className="mt-3 px-1">
                <p className="line-clamp-1 text-sm font-semibold text-foreground">{item.title}</p>
                {/* <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">{item.proker}</p> */}
            </div>
        </button>
    );
}
