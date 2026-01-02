"use client";

import { AnimateIn } from "lib/animation/Animation";

export default function StatusBadge() {
    return (
        <AnimateIn variant="fadeUp" delay={0.3}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-[0_0_15px_rgba(55,65,81,0.1)] mb-4">
                <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-zinc-600">Available for work</span>
            </div>
        </AnimateIn>
    );
}
