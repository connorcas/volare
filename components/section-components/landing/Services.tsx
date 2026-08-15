import { Compass, Plane, ArrowRight } from "lucide-react";

const Services = () => {
    const steps = [
        {
            number: "01",
            title: "TRAVEL ADVISORY",
            subtitle: "Real-Time Airspace Intelligence",
            description:
                "Comprehensive route analysis, live meteorological updates, and personalized airspace risk briefings directly from our master flight dispatch.",
            icon: <Compass className="h-5 w-5 md:h-6 md:w-6 text-[#C5A880]" />,
            image: "/images/jet.png",
            href: "#travel-advisory",
            badge: "LIVE ADVISORY",
            tagline: "Global Airspace Briefing",
        },
        {
            number: "02",
            title: "PRIVATE CHARTER",
            subtitle: "Bespoke Journey Execution",
            description:
                "End-to-end luxury charter management, from tail selection to direct runway-side concierge service across global destinations.",
            icon: <Plane className="h-5 w-5 md:h-6 md:w-6 text-[#C5A880]" />,
            image: "/images/hero-plan.png",
            href: "#private-charter",
            badge: "VIP FLEET",
            tagline: "Tailored Flight Logistics",
        },
    ];

    return (
        <section id="advisory-charter" className="relative w-full overflow-hidden bg-[#F4F1EA] py-12 md:py-24 text-[#0A1628]">
            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-12">

                <div className="flex flex-col items-center text-center">
                    <span className="font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] md:tracking-[0.3em] text-[#8C6D3F]">
                        OUR SERVICES
                    </span>
                    <h2 className="mt-2 md:mt-3 font-serif text-2xl sm:text-3xl lg:text-5xl font-semibold uppercase tracking-[0.1em] md:tracking-[0.15em] text-[#0A1628]">
                        TRAVEL ADVISORY &amp; PRIVATE CHARTER
                    </h2>
                </div>

                <div className="relative mt-10 md:mt-20 flex flex-col space-y-12 md:space-y-24">

                    <div className="absolute left-1/2 top-8 hidden h-[calc(100%-8rem)] w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#C5A880]/10 via-[#C5A880]/60 to-[#C5A880]/10 lg:block" />

                    {steps.map((step, idx) => {
                        const isEven = idx % 2 === 0;

                        return (
                            <div
                                key={idx}
                                className={`relative flex flex-col items-center gap-6 md:gap-10 lg:flex-row lg:gap-16 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                <div className="absolute left-1/2 top-1/2 z-30 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#C5A880] bg-[#070C14] font-sans text-xs font-bold text-[#C5A880] shadow-[0_0_20px_rgba(197,168,128,0.4)] lg:flex">
                                    {step.number}
                                </div>

                                <div className="flex w-full items-center justify-between lg:hidden border-b border-[#C5A880]/20 pb-3">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/40 bg-white/80 px-3 py-1 shadow-sm">
                                        {step.icon}
                                        <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-[#8C6D3F]">
                                            STEP {step.number}
                                        </span>
                                    </div>
                                    <span className="rounded-full border border-[#C5A880]/40 bg-[#070C14] px-3 py-1 font-sans text-[9px] font-bold uppercase tracking-widest text-[#C5A880]">
                                        {step.badge}
                                    </span>
                                </div>

                                <div className="w-full space-y-3 md:space-y-4 text-left lg:w-1/2">
                                    <div className="hidden lg:inline-flex items-center gap-3 rounded-full border border-[#C5A880]/40 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-sm">
                                        {step.icon}
                                        <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#8C6D3F]">
                                            STEP {step.number}
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold uppercase tracking-[0.1em] md:tracking-[0.15em] text-[#0A1628]">
                                        {step.title}
                                    </h3>

                                    <p className="font-sans text-xs font-semibold tracking-wider text-[#C5A880]">
                                        {step.subtitle}
                                    </p>

                                    <p className="font-sans text-xs leading-relaxed text-slate-600 sm:text-sm">
                                        {step.description}
                                    </p>

                                    <div className="pt-1 md:pt-2">
                                        <a
                                            href={step.href}
                                            className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-[#0A1628] transition-colors hover:text-[#C5A880]"
                                        >
                                            <span>Explore Service</span>
                                            <ArrowRight className="h-4 w-4 text-[#C5A880]" />
                                        </a>
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2">
                                    <div className="group relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden p-4 sm:p-6">
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,168,128,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,168,128,0.08)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] md:bg-[size:2rem_2rem] pointer-events-none" />
                                        <div className="absolute left-1/2 top-1/2 h-[180px] sm:h-[220px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#C5A880]/20 via-[#E8D1B0]/15 to-[#C5A880]/20 blur-2xl md:blur-3xl pointer-events-none" />

                                        <div className="relative z-20 flex items-center justify-between">
                                            <span className="font-sans text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A880]">
                                                {step.tagline}
                                            </span>
                                            <span className="hidden lg:inline-block rounded-full border border-[#C5A880]/40 bg-[#C5A880]/10 px-3 py-1 font-sans text-[9px] font-bold uppercase tracking-widest text-[#C5A880] backdrop-blur-md">
                                                {step.badge}
                                            </span>
                                        </div>
                                        <div className="relative z-20 flex h-full w-full items-center justify-center pb-4 sm:pb-6">
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="h-auto w-full max-w-[90%] sm:max-w-[80%] object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.85)] transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="absolute top-0 left-0 h-5 w-5 sm:h-8 sm:w-8 border-t-2 border-l-2 border-[#C5A880]/40" />
                                        <div className="absolute bottom-0 right-0 h-5 w-5 sm:h-8 sm:w-8 border-b-2 border-r-2 border-[#C5A880]/40" />
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;