"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plane, ArrowUpRight, ShieldCheck, MapPin, Calendar, Repeat } from "lucide-react";

const Hero = () => {
    const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");

    return (
        <section className="relative w-full overflow-hidden rounded-3xl bg-[#0A1628] text-[#F4F1EA] border border-[#C5A880]/20 py-16 md:py-20 px-6 sm:px-12 shadow-2xl">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A88015_1px,transparent_1px),linear-gradient(to_bottom,#C5A88015_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none z-0" />

            {/* Ambient Lighting Glow */}
            <div className="absolute top-1/2 left-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C5A880]/10 blur-[140px] pointer-events-none z-0" />

            <div className="relative z-10 mx-auto max-w-5xl text-center space-y-8">

                {/* Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/40 bg-[#070C14]/80 px-4 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A880] backdrop-blur-md">
                    <Plane className="h-3.5 w-3.5 text-[#C5A880]" />
                    <span>Private Aviation &amp; Advisory</span>
                </div>

                {/* Headlines */}
                <div className="space-y-3">
                    <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F4F1EA] leading-none">
                        From Runway <span className="italic font-normal text-[#C5A880]">To Resort</span>
                    </h1>
                    <p className="font-serif italic text-base sm:text-xl text-slate-300 font-light max-w-xl mx-auto">
                        Built by a pilot. Designed for travelers.
                    </p>
                </div>

                {/* Flight Booking Strip */}
                <div className="max-w-4xl mx-auto pt-2 z-20 relative">

                    {/* Trip Selector */}
                    <div className="flex items-center justify-center gap-3 mb-4 font-sans text-xs">
                        <button
                            onClick={() => setTripType("one-way")}
                            className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full transition-all duration-300 ${tripType === "one-way"
                                ? "bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/40 font-medium"
                                : "text-slate-400 hover:text-[#F4F1EA]"
                                }`}
                        >
                            <Plane className="h-3 w-3" />
                            <span>One Way</span>
                        </button>
                        <button
                            onClick={() => setTripType("round-trip")}
                            className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full transition-all duration-300 ${tripType === "round-trip"
                                ? "bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/40 font-medium"
                                : "text-slate-400 hover:text-[#F4F1EA]"
                                }`}
                        >
                            <Repeat className="h-3 w-3" />
                            <span>Round Trip</span>
                        </button>
                    </div>

                    {/* Clean Rounded Bar */}
                    <div className="rounded-2xl sm:rounded-full border border-[#C5A880]/30 bg-[#070C14]/90 p-2 sm:p-2.5 shadow-2xl backdrop-blur-md">
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">

                            {/* Departure */}
                            <div className="sm:col-span-4 flex items-center gap-3 rounded-xl sm:rounded-full border border-white/5 bg-white/5 px-4 py-2 text-left">
                                <MapPin className="h-4 w-4 text-[#C5A880] shrink-0" />
                                <div className="space-y-0.5 overflow-hidden w-full">
                                    <span className="block font-sans text-[9px] font-semibold uppercase tracking-widest text-[#C5A880]">
                                        Departure
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="DAL (Dallas Love Field)"
                                        className="w-full bg-transparent font-sans text-xs text-[#F4F1EA] placeholder-slate-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Destination */}
                            <div className="sm:col-span-4 flex items-center gap-3 rounded-xl sm:rounded-full border border-white/5 bg-white/5 px-4 py-2 text-left">
                                <MapPin className="h-4 w-4 text-[#C5A880] shrink-0" />
                                <div className="space-y-0.5 overflow-hidden w-full">
                                    <span className="block font-sans text-[9px] font-semibold uppercase tracking-widest text-[#C5A880]">
                                        Destination
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="ASE (Aspen) or Capri"
                                        className="w-full bg-transparent font-sans text-xs text-[#F4F1EA] placeholder-slate-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Date */}
                            <div className="sm:col-span-2 flex items-center gap-2 rounded-xl sm:rounded-full border border-white/5 bg-white/5 px-3.5 py-2 text-left">
                                <Calendar className="h-4 w-4 text-[#C5A880] shrink-0" />
                                <div className="space-y-0.5 overflow-hidden w-full">
                                    <span className="block font-sans text-[9px] font-semibold uppercase tracking-widest text-[#C5A880]">
                                        Date
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Departure"
                                        className="w-full bg-transparent font-sans text-xs text-[#F4F1EA] placeholder-slate-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="sm:col-span-2">
                                <Button className="w-full h-full min-h-[42px] rounded-xl sm:rounded-full bg-[#C5A880] px-4 font-sans text-xs font-semibold uppercase tracking-widest text-[#070C14] shadow-md hover:bg-white transition-all duration-300">
                                    <span>Inquire</span>
                                    <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="relative w-full max-w-4xl mx-auto select-none z-10">
                    <img
                        src="/images/hero-plan.png"
                        alt="Volare Private Jet"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        className="relative z-10 mx-auto h-auto w-full max-w-3xl object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.6)] pointer-events-none select-none transition-transform"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;