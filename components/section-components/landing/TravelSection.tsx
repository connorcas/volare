"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Route } from "lucide-react";

const TravelSection = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const destinations = [
        {
            title: "Amalfi Coast & Capri",
            region: "Southern Italy",
            tag: "Virtuoso Preferred",
            description:
                "Direct cliffside helicopter transfers, private yacht access, and automatic room upgrades at premier luxury estates.",
            rating: "4.9",
            image: "/images/hero-plan.png",
        },
        {
            title: "Aspen & St. Moritz",
            region: "Alpine Sanctuaries",
            tag: "Ski & Charter",
            description:
                "Runway-side ski valet dispatch, private mountain chalet access, and exclusive resort dining privileges.",
            rating: "4.8",
            image: "/images/hero-plan.png",
        },
        {
            title: "St. Barths & Anguilla",
            region: "Caribbean Escapes",
            tag: "Private Island Access",
            description:
                "Bespoke island charter logistics paired with preferred VIP arrival at Eden Rock & Cheval Blanc.",
            rating: "4.9",
            image: "/images/hero-plan.png",
        },
        {
            title: "Kyoto & Tokyo",
            region: "Japan Expeditions",
            tag: "Cultural Retreat",
            description:
                "Seamless private jet entry via Haneda with curated ryokan reservations and private local master guides.",
            rating: "4.8",
            image: "/images/hero-plan.png",
        },
    ];

    const handleScroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -420 : 420;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="travel" className="relative w-full bg-[#F4F1EA] py-24 text-[#0A1628]">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                {/* Header Section with "View all" */}
                <div className="flex items-end justify-center mb-8">
                    <div className="space-y-2">
                        <div className="flex">
                            <div className="flex justify-center mx-auto items-center gap-2 rounded-full border border-[#C5A880]/40 bg-white/80 px-4 py-1.5 font-sans text-xs font-medium tracking-wide text-[#8C6D3F] shadow-sm backdrop-blur-sm">
                                <Route className="h-4 w-4 text-[#C5A880]" />
                                Curated Routes
                            </div>
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-[#0A1628]">
                            Featured Destinations
                        </h2>
                    </div>
                </div>

                <div className="relative group">
                    <button
                        onClick={() => handleScroll("left")}
                        aria-label="Scroll left"
                        className="absolute -left-5 sm:-left-6 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-[#C5A880]/40 bg-white/90 text-[#0A1628] shadow-xl backdrop-blur-md transition-all hover:bg-[#C5A880] hover:text-white hover:border-[#C5A880]">
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={() => handleScroll("right")}
                        aria-label="Scroll right"
                        className="absolute -right-5 sm:-right-6 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-[#C5A880]/40 bg-white/90 text-[#0A1628] shadow-xl backdrop-blur-md transition-all hover:bg-[#C5A880] hover:text-white hover:border-[#C5A880]">
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex gap-7 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4">
                        {destinations.map((item, idx) => (
                            <div
                                key={idx}
                                className="group/card relative h-[500px] sm:h-[540px] w-[320px] sm:w-[360px] md:w-[400px] flex-shrink-0 snap-start overflow-hidden rounded-3xl border border-[#C5A880]/30 bg-[#0A1628] shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-[#C5A880]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    draggable={false}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover/card:scale-110 opacity-90"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/40 to-black/20" />

                                <div className="absolute top-8 inset-x-5 flex items-center justify-between z-10">
                                    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#F4F1EA] drop-shadow-md">
                                        {item.region}
                                    </span>
                                </div>

                                <div className="absolute bottom-6 inset-x-6 z-10 space-y-3">
                                    <div className="space-y-1.5">
                                        <span className="inline-block rounded-full border border-white/20 bg-[#0A1628]/70 px-3 py-1 font-sans text-xs font-medium text-[#C5A880] backdrop-blur-md">
                                            {item.tag}
                                        </span>
                                        <h3 className="font-serif text-2xl sm:text-3xl font-light leading-tight text-white tracking-wide">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="font-sans text-xs sm:text-sm leading-relaxed text-slate-200 font-light line-clamp-3">
                                        {item.description}
                                    </p>

                                    <div className="pt-2 flex justify-end">
                                        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/95 px-3 py-1 text-xs font-bold text-[#0A1628] shadow-md backdrop-blur-md">
                                            <Star className="h-3.5 w-3.5 fill-[#C5A880] text-[#C5A880]" />
                                            <span>{item.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelSection;