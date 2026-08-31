import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Home, ArrowRight, Plane, ShieldCheck, Phone } from "lucide-react";
import UserLayout from "@/components/layouts/UserLayout";

export const metadata: Metadata = {
    title: "Page Not Found (404) | Volare Aviation",
    description: "The requested page or flight destination could not be found.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    const quickLinks = [
        { title: "Private Jet Charter", href: "/charter", icon: <Plane className="h-4 w-4 text-[#8C6D3F]" /> },
        { title: "Luxury Travel Advisory", href: "/travel", icon: <ShieldCheck className="h-4 w-4 text-[#8C6D3F]" /> },
        { title: "Captain & Credentials", href: "/about", icon: <Compass className="h-4 w-4 text-[#8C6D3F]" /> },
        { title: "Contact Flight Desk", href: "/contact", icon: <Phone className="h-4 w-4 text-[#8C6D3F]" /> },
    ];

    return (
        <UserLayout>
            <section className="px-2">
                <div className="min-h-[80vh] rounded-xl flex items-center justify-center px-4 py-16 text-[#0A1628] bg-white">
                    <div className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] p-8 sm:p-14 text-center space-y-8">


                        <div className="inline-flex items-center gap-2 rounded-full border border-[#D6CEBF] bg-[#FAF9F5] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#8C6D3F]">
                            <Compass className="h-3.5 w-3.5 text-[#8C6D3F]" />
                            <span>Error 404 · Uncharted Route</span>
                        </div>

                        <div className="space-y-3">
                            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-light text-[#0A1628] tracking-tight leading-none">
                                4<span className="italic font-normal text-[#8C6D3F]">0</span>4
                            </h1>
                            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0A1628]">
                                We couldn't find that page.
                            </h2>
                            <p className="font-sans text-sm sm:text-base text-[#4A5568] font-light max-w-md mx-auto leading-relaxed">
                                The URL you entered might have a typo, or the sector has been repositioned. Check the spelling or navigate to one of our main sectors below.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
                            {quickLinks.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href}
                                    className="group flex items-center justify-between p-4 rounded-2xl border border-[#E6E1D3] bg-[#FAF9F6] hover:border-[#8C6D3F] hover:bg-white transition-all shadow-xs"
                                >
                                    <div className="flex items-center gap-3">
                                        {item.icon}
                                        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0A1628]">
                                            {item.title}
                                        </span>
                                    </div>
                                    <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#8C6D3F] group-hover:translate-x-0.5 transition-all" />
                                </Link>
                            ))}
                        </div>

                        {/* Home Button */}
                        <div className="pt-2">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A1628] px-8 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#FAF9F5] hover:bg-[#8C6D3F] transition-all duration-300 shadow-md"
                            >
                                <Home className="h-3.5 w-3.5" />
                                <span>Return to Home Base</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </UserLayout>
    );
}