import React from "react";
import Link from "next/link";
import { Compass, Plane, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

export default function Services() {
    const services = [
        {
            number: "01",
            title: "Luxury Travel Advisory",
            subtitle: "Virtuoso Privileges & Global Itineraries",
            description:
                "Bespoke itinerary design commanded with pilot-level logistics. Enjoy preferred partner rates, complimentary room upgrades, daily breakfast, and VIP resort credits across premier global hotels and private villas.",
            icon: <Compass className="h-4 w-4 text-[#8C6D3F]" />,
            image: "/images/jet.png",
            href: "/travel",
            tag: "Virtuoso Member",
            highlights: ["Complimentary Upgrades", "VIP Resort Credits", "Dedicated Concierge"],
        },
        {
            number: "02",
            title: "Private Jet Charter",
            subtitle: "Part 135 Worldwide Aircraft Sourcing",
            description:
                "Direct access to top-tier heavy, super-mid, and light aircraft. Every flight is audited for airframe pedigree, operator safety records, and crew duty limits with absolute transparency and clear pricing with no hidden charges.",
            icon: <Plane className="h-4 w-4 text-[#8C6D3F]" />,
            image: "/images/hero-plan.png",
            href: "/charter",
            tag: "Part 135 Vetted",
            highlights: ["Bombardier Global Specialists", "Zero Hidden Markups", "Direct Pilot Review"],
        },
    ];

    return (
        <div className="px-2 my-4">
            <section id="services" className="relative w-full bg-white py-20 text-[#0A1628] rounded-2xl font-sans">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D6CEBF] pb-10">
                        <div className="space-y-3 max-w-2xl">
                            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8C6D3F] font-semibold">
                                Operational Capabilities
                            </span>
                            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#0A1628] tracking-tight leading-[1.08]">
                                Precision Flight &amp; <br />
                                <span className="italic text-[#B38E5D]">Curated Advisory.</span>
                            </h2>
                        </div>
                        <p className="font-sans text-sm sm:text-base text-slate-600 font-light max-w-sm leading-relaxed">
                            Eliminating broker friction by unifying cockpit command with luxury travel management.
                        </p>
                    </div>

                    <div className="space-y-20 sm:space-y-28">
                        {services.map((service, idx) => {
                            const isReversed = idx % 2 !== 0;

                            return (
                                <div
                                    key={service.number}
                                    className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${isReversed ? "lg:flex-row-reverse" : ""
                                        }`}>

                                    <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                                        <div className="group relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-[2rem] p-8 sm:p-12 flex items-center justify-center transition-all duration-500">

                                            <div className="absolute inset-0 bg-[radial-gradient(#8C6D3F15_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
                                            <div className="absolute top-5 left-5 font-mono text-[12px] uppercase tracking-widest bg-[#F0EBE1] border border-[#D6CEBF] px-3 py-1 text-[#0A1628] rounded-full backdrop-blur-sm">
                                                {service.tag}
                                            </div>
                                            <div className="absolute top-5 right-5 font-serif italic text-4xl text-[#8C6D3F]/40 font-light">
                                                {service.number}
                                            </div>
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="relative z-10 w-full max-w-[85%] h-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)] transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-[#C5A880]/20 blur-3xl rounded-full pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className={`lg:col-span-6 space-y-6 text-left ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 font-mono text-sm text-[#8C6D3F] uppercase tracking-widest font-semibold">
                                                {service.icon}
                                                <span>Service Tier {service.number}</span>
                                            </div>
                                            <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0A1628] tracking-tight">
                                                {service.title}
                                            </h3>
                                            <p className="font-mono text-md text-[#8C6D3F]">
                                                {service.subtitle}
                                            </p>
                                        </div>

                                        <p className="font-sans text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                                            {service.description}
                                        </p>

                                        <div className="flex items-center flex-wrap gap-x-6 pt-2 border-t border-[#D6CEBF]">
                                            {service.highlights.map((item, i) => (
                                                <div key={i} className="flex items-center gap-2 font-mono text-[14px] text-[#0A1628] pt-3">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-[#8C6D3F]" />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-4">
                                            <Link
                                                href={service.href}
                                                className="group inline-flex items-center gap-3 rounded-full bg-[#0A1628] px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#8C6D3F] transition-all duration-300 shadow-sm"
                                            >
                                                <span>Explore {service.title}</span>
                                                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </Link>
                                        </div>

                                    </div>

                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
        </div>
    );
}