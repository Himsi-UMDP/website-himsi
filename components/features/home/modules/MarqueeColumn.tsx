"use client";

import { useMemo, type CSSProperties } from "react";
import { TestimonialCard } from "./TestimonialCard";
import type { MarqueeColumnProps } from "./../../../../types/types";


export function MarqueeColumn({
    items,
    duration = 40,
    offset = 0,
    reverse = false,
}: MarqueeColumnProps) {
    const loopedItems = useMemo(() => [...items, ...items], [items]);

    return (
        <div className="relative h-[560px] overflow-hidden">
            <div
                className="marqueeY absolute left-0 top-0 w-full px-4 py-5 will-change-transform"
                style={
                    {
                        ["--dur" as string]: `${duration}s`,
                        ["--offset" as string]: `${offset}px`,
                        ["--dir" as string]: reverse ? -1 : 1,
                    } as CSSProperties
                }
            >
                <div className="flex flex-col gap-4">
                    {loopedItems.map((item, index) => (
                        <TestimonialCard key={`${item.id}-${index}`} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
