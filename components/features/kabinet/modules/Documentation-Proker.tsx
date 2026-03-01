"use client";

import Image from "next/image";
import { useState } from "react";
import type { WorkProgram } from "@/types/types";

type DocumentationProkerProps = {
  active: WorkProgram;
  onClose: () => void;
};

export function DocumentationProker({ active, onClose }: DocumentationProkerProps) {
  const [naturalSize, setNaturalSize] = useState<{ width: number; height: number } | null>(null);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-10"
      role="dialog"
      aria-modal="true"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />

      <div className="relative w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/15 bg-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-base font-semibold text-white">{active.title}</p>
            <p className="mt-1 text-sm text-white/70">Program Kerja</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/15"
          >
            Tutup ✕
          </button>
        </div>

        <div className="grid gap-0 lg:grid-cols-5">
          <div className="relative w-full overflow-hidden lg:col-span-3">
            {naturalSize ? (
              <div
                className="relative w-full"
                style={{ paddingBottom: `${(naturalSize.height / naturalSize.width) * 100}%` }}
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            ) : (

              <div className="relative aspect-video w-full bg-white/5">
                <img
                  src={active.image}
                  alt={active.title}
                  className="absolute inset-0 h-full w-full object-contain"
                  onLoad={(e) => {
                    const img = e.currentTarget;
                    setNaturalSize({
                      width: img.naturalWidth,
                      height: img.naturalHeight,
                    });
                  }}
                />
              </div>
            )}
          </div>

          <div className="p-5 lg:col-span-2">
            <h4 className="text-sm font-semibold text-white/90">Deskripsi</h4>
            <p className="mt-2 text-sm leading-relaxed text-white/75">{active.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}