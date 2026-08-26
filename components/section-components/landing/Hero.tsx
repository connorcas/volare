"use client";

import Link from "next/link";
import {
    Plane,
    ArrowUpRight
} from "lucide-react";

export default function Hero() {
    return (
        <section >
            <div className="relative w-full overflow-hidden rounded-2xl bg-[#0A1628] text-[#F4F1EA] border border-[#C5A880]/20 pt-12 pb-16 sm:py-20 px-6 sm:px-12">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A88012_1px,transparent_1px),linear-gradient(to_bottom,#C5A88012_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none z-0" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[650px] rounded-full bg-[#C5A880]/10 blur-[160px] pointer-events-none z-0" />
                <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#13233A]/60 blur-[130px] pointer-events-none z-0" />

                <div className="relative z-10 mx-auto max-w-5xl space-y-12 text-center">
                    <div className="space-y-6 max-w-4xl mx-auto">

                        <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/30 bg-[#070C14]/80 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A880] backdrop-blur-md">
                            <Plane className="h-3.5 w-3.5 text-[#C5A880]" />
                            <span>Pilot-Led Private Aviation</span>
                        </div>

                        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-[#F4F1EA] leading-[1.02]">
                            From Runway <br />
                            <span className="italic font-normal text-[#C5A880]">
                                To Curated Resort
                            </span>
                        </h1>
                        <p className="font-sans text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
                            I fly large-cabin business jets internationally. When you book charter or plan travel with Volare, every aircraft recommendation and routing is vetted by someone who actually sits at the controls—not a sales broker behind a desk.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                        <Link
                            href="/contact"
                            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#C5A880] px-8 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-[#070C14] hover:bg-[#F4F1EA] transition-all duration-300 shadow-xl shadow-[#C5A880]/10">
                            <span>Request Flight Proposal</span>
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>

                        <Link
                            href="/about"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-[#F4F1EA] hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                            <span>Captain Credentials</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}