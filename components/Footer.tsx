"use client";

import { AnimateIn } from "lib/animation/Animation";
import { Heart } from "lucide-react";
import BackToTop from "./BackToTop";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <AnimateIn variant="fadeUp" delay={0.2}>

            <footer className="mt-16 mb-8 pt-8 border-t border-zinc-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-zinc-500">
                        © {currentYear} Ayush Mehrotra. All rights reserved.
                    </p>

                    <p className="text-sm text-zinc-500 flex items-center gap-1">

                    </p>
                </div>
            </footer>
        </AnimateIn>
    );
}
