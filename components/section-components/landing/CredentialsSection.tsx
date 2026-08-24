import { ShieldCheck, Award, MapPin, CheckCircle, Plane, Sparkles } from "lucide-react";

const CredentialsSection = () => {
    const credentials = [
        {
            title: "Part 135 Captain",
            category: "Commercial Aviation",
            detail: "FAA Certified Command Authority",
            icon: <ShieldCheck className="h-5 w-5 text-[#C5A880]" />,
        },
        {
            title: "Bombardier Global 7500",
            category: "Type Rated Pilot",
            detail: "Ultra-Long-Range Jet Flight Specialist",
            icon: <Plane className="h-5 w-5 text-[#C5A880]" />,
        },
        {
            title: "LFPA Board Member",
            category: "Industry Leadership",
            detail: "Private Aviation Policy & Governance",
            icon: <Award className="h-5 w-5 text-[#C5A880]" />,
        },
        {
            title: "NBAA CAM Candidate",
            category: "Aviation Management",
            detail: "Certified Aviation Manager Executive Program",
            icon: <CheckCircle className="h-5 w-5 text-[#C5A880]" />,
        },
        {
            title: "Fora Certified Advisor",
            category: "Luxury Travel Specialist",
            detail: "Privileged VIP Access & Hospitality",
            icon: <Sparkles className="h-5 w-5 text-[#C5A880]" />,
        },
        {
            title: "Dallas Love Field",
            category: "Base Operations",
            detail: "Primary Operational & Dispatch Hub",
            icon: <MapPin className="h-5 w-5 text-[#C5A880]" />,
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-[#0A1628] text-[#F4F1EA] py-20 rounded-3xl">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A88015_1px,transparent_1px),linear-gradient(to_bottom,#C5A88015_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_35%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C5A880]/10 blur-[120px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 md:px-12">
                <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/30 bg-[#0A1628]/60 px-4 py-1.5 font-sans text-xs font-medium tracking-wide text-[#C5A880] shadow-sm backdrop-blur-sm">
                        <ShieldCheck className="h-4 w-4 text-[#C5A880]" />
                        Accreditations &amp; Base Operations
                    </div>

                    <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-[#F4F1EA]">
                        Pilot Qualifications
                    </h2>

                    <p className="mt-3 font-serif italic text-base sm:text-lg text-[#C5A880] font-light max-w-xl">
                        Cockpit mastery, board leadership, and certified luxury travel advisory.
                    </p>
                </div>

                <div className="mt-14 divide-y divide-[#C5A880]/20 border-y border-[#C5A880]/20">
                    {credentials.map((item, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col justify-between gap-2 py-6 transition-all duration-300 hover:bg-[#0A1628]/60 hover:px-4 sm:flex-row sm:items-center sm:gap-6 sm:py-7 rounded-lg">
                            <div className="flex items-center gap-4 sm:gap-6">
                                <span className="font-sans text-xs font-semibold tracking-widest text-[#C5A880]/50">
                                    0{idx + 1}
                                </span>

                                <div className="rounded-full bg-[#0A1628] p-2.5 text-[#C5A880] shadow-sm border border-[#C5A880]/30 group-hover:border-[#C5A880] transition-colors">
                                    {item.icon}
                                </div>

                                <div>
                                    <h3 className="font-serif text-lg sm:text-xl font-medium tracking-wide text-[#F4F1EA]">
                                        {item.title}
                                    </h3>
                                    <p className="font-sans text-xs text-slate-400 sm:hidden mt-0.5">
                                        {item.detail}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between sm:justify-end gap-6 pl-14 sm:pl-0">
                                <p className="hidden font-sans text-xs text-slate-400 sm:block">
                                    {item.detail}
                                </p>

                                <span className="inline-flex items-center rounded-full border border-[#C5A880]/30 bg-[#0A1628]/80 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider text-[#C5A880] shadow-sm">
                                    {item.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CredentialsSection;