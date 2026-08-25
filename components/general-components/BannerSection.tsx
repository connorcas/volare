import { Plane } from "lucide-react";

interface BannerSectionPropType {
    slogan: string;
    title: string;
    italicTitle: string;
    subTitle?: string | null;
    effectDate?: string | null;
}

const BannerSection = ({
    slogan,
    title,
    italicTitle,
    subTitle,
    effectDate = null,
}: BannerSectionPropType) => {
    return (
        <section className="px-2">
            <div className="relative w-full overflow-hidden rounded-2xl bg-[#0A1628] text-[#F4F1EA] border border-[#C5A880]/20 py-16 md:py-20 px-6 sm:px-12">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A88015_1px,transparent_1px),linear-gradient(to_bottom,#C5A88015_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none z-0" />
                <div className="absolute top-1/2 left-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C5A880]/10 blur-[140px] pointer-events-none z-0" />

                {effectDate ? (
                    <div className="relative z-10 mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/40 bg-[#070C14]/80 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A880] backdrop-blur-md">
                                <Plane className="h-3.5 w-3.5 text-[#C5A880]" />
                                <span>{slogan}</span>
                            </div>
                            <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#F4F1EA] tracking-tight">
                                {title} <span className="italic text-[#C5A880]">{italicTitle}</span>
                            </h1>
                            {subTitle && (
                                <p className="font-sans text-sm sm:text-base text-slate-300 font-light max-w-xl">
                                    {subTitle}
                                </p>
                            )}
                        </div>

                        <div className="font-mono text-sm sm:text-md text-slate-400 shrink-0">
                            Effective Date: {effectDate}
                        </div>
                    </div>
                ) : (
                    <div className="relative z-10 mx-auto max-w-5xl text-center space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/40 bg-[#070C14]/80 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A880] backdrop-blur-md">
                            <Plane className="h-3.5 w-3.5 text-[#C5A880]" />
                            <span>{slogan}</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold text-[#F4F1EA] leading-[1.08]">
                                {title} <br />
                                <span className="italic font-semibold text-[#C5A880]">
                                    {italicTitle}
                                </span>
                            </h1>
                            {subTitle && (
                                <p className="font-serif italic text-base sm:text-xl text-slate-300 font-light max-w-xl mx-auto">
                                    {subTitle}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BannerSection;