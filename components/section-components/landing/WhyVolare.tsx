import { ShieldCheck, Hotel, Globe, Award, Sparkles } from "lucide-react";

const WhyVolare = () => {
    const highlights = [
        {
            value: "10+",
            title: "Years in Aviation",
            description: "Flight planning and route dispatch handled directly by active commercial pilots.",
            icon: <Award className="h-5 w-5 text-[#C5A880]" />,
        },
        {
            value: "175k+",
            title: "Virtuoso Hotels",
            description: "Handpicked 5-star properties with elite status perks and preferred rates.",
            icon: <Hotel className="h-5 w-5 text-[#C5A880]" />,
        },
        {
            value: "Global",
            title: "Charter Network",
            description: "Sourcing private aircraft across major routes for short hops and long-range flights.",
            icon: <Globe className="h-5 w-5 text-[#C5A880]" />,
        },
        {
            value: "$0",
            title: "Extra Perks Cost",
            description: "Room upgrades, daily breakfast, and resort credits included at zero added agency fee.",
            icon: <Sparkles className="h-5 w-5 text-[#C5A880]" />,
        },
    ];

    return (
        <section id="why-volare" className="relative w-full overflow-hidden bg-[#0A1628] py-20 md:py-28 text-[#F4F1EA] rounded-2xl">
            <div className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C5A880]/10 blur-[130px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    <div className="lg:col-span-5 space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/30 bg-white/5 px-4 py-1.5 font-sans text-xs font-medium tracking-wide text-[#C5A880]">
                            <ShieldCheck className="h-4 w-4 text-[#C5A880]" />
                            The Pilot Difference
                        </div>

                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide text-[#F4F1EA] leading-tight">
                            Why Volare
                        </h2>

                        <p className="font-serif italic text-lg sm:text-xl text-[#C5A880] font-light leading-relaxed">
                            &ldquo;Aviator precision in the air. Bespoke hospitality on the ground.&rdquo;
                        </p>

                        <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                            Most travel advisors have never sat in a cockpit, and most charter brokers haven&apos;t flown the routes they sell. Volare connects active captain experience directly with luxury itinerary planning.
                        </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-14 border-t lg:border-t-0 lg:border-l border-[#C5A880]/20 pt-8 lg:pt-0 lg:pl-12">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-lg bg-[#C5A880]/10 p-2 text-[#C5A880]">
                                        {item.icon}
                                    </div>
                                    <span className="font-serif text-3xl sm:text-4xl font-light text-[#F4F1EA]">
                                        {item.value}
                                    </span>
                                </div>

                                <h3 className="font-sans text-sm font-semibold text-[#F4F1EA]">
                                    {item.title}
                                </h3>

                                <p className="font-sans text-xs leading-relaxed text-slate-400 font-normal">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyVolare;