import { Plane, Award, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

const VolareDifference = () => {
    const credentials = [
        { title: "Part 135 Captain", subtitle: "Commercial Aviation" },
        { title: "Bombardier Global XRS", subtitle: "Type Rated Pilot" },
        { title: "LFPA Board Member", subtitle: "Industry Leadership" },
        { title: "NBAA CAM Candidate", subtitle: "Aviation Management" },
        { title: "Fora Certified Advisor", subtitle: "Luxury Travel Specialist" },
        { title: "Dallas Love Field", subtitle: "Primary Base Operations" },
    ];

    return (
        <section id="volare-difference" className="relative w-full overflow-hidden bg-[#F4F1EA] py-16 md:py-24 text-[#0A1628]">
            {/* Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C5A880]/15 blur-[120px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/40 bg-white/80 px-4 py-1.5 font-sans text-xs font-medium tracking-wide text-[#8C6D3F] shadow-sm backdrop-blur-sm">
                        <Award className="h-4 w-4 text-[#C5A880]" />
                        Cockpit to Concierge
                    </div>

                    <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-[#0A1628]">
                        The Volare Difference
                    </h2>

                    <div className="mt-6 max-w-5xl rounded-2xl ">
                        <p className="font-serif italic text-2xl sm:text-xl md:text-5xl leading-relaxed text-[#0A1628]/90 font-light">
                            &ldquo;Most travel advisors have never set foot in a cockpit. Most charter brokers have never personally flown the routes they&apos;re selling. Connor has done both — for years.&rdquo;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VolareDifference;