"use client";

import React, { useState, useEffect } from "react";
import { Mail, ArrowUpRight, Sparkles, ArrowUp } from "lucide-react";
import Header from "../general-components/Header";
import Footer from "../general-components/Footer";
import Image from "next/image";
import { WHATSAPP_LINK } from "@/constants/common.constant";

interface UserLayoutProps {
    children: React.ReactNode;
}

const UserLayout = ({ children }: UserLayoutProps) => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative min-h-screen">
            <Header />

            <div className="bg-[#F4F1EA]">
                {children}
            </div>

            <div className="p-2 bg-[#F4F1EA]">
                <div className="px-2">
                    <section id="contact" className="relative w-full overflow-hidden py-20 lg:py-28 text-[#0A1628] rounded-3xl">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A88018_1px,transparent_1px),linear-gradient(to_bottom,#C5A88018_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C5A880]/20 blur-[140px] pointer-events-none" />

                        <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/50 bg-white/80 px-4 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-widest text-[#8C6D3F] shadow-sm backdrop-blur-md mb-6">
                                <Sparkles className="h-3.5 w-3.5 text-[#C5A880]" />
                                <span>Direct Captain Concierge</span>
                            </div>

                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A1628] tracking-wide leading-tight">
                                Ready to Elevate Your <br className="hidden sm:block" />
                                <span className="italic font-semibold text-[#8C6D3F]">Flight Experience?</span>
                            </h2>

                            <p className="mt-4 font-sans text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-xl mx-auto">
                                Whether dispatched for private jet charters or Virtuoso luxury travel advisory, receive direct flight logistics tailored to your exact schedule.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="mailto:connor.casarella@volareavi.com"
                                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#0A1628] px-8 py-4 font-sans text-xs font-semibold uppercase tracking-widest text-[#F4F1EA] transition-all duration-300 hover:bg-[#8C6D3F] hover:shadow-lg hover:shadow-[#C5A880]/20"
                                >
                                    <Mail className="h-4 w-4 text-[#C5A880] group-hover:text-white transition-colors" />
                                    <span>Request Flight Quote</span>
                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>

                                <a
                                    href={WHATSAPP_LINK}
                                    target="_black"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#0A1628] bg-white/80 px-8 py-4 font-sans text-xs font-semibold uppercase tracking-widest text-[#0A1628] backdrop-blur-md transition-all duration-300 hover:bg-[#0A1628] hover:text-[#F4F1EA]"
                                >
                                    <span>Inquire Travel Advisory</span>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>

            {/* Floating Bottom-Left Scroll to Top Action Button */}
            <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className={`fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[#D6CEBF] bg-[#FAF9F5]/90 text-[#0A1628] shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-[#0A1628] hover:text-white hover:border-[#0A1628] ${showScrollTop
                    ? "translate-y-0 opacity-100 pointer-events-auto"
                    : "translate-y-4 opacity-0 pointer-events-none"
                    }`}>
                <ArrowUp className="h-4 w-4 stroke-[2]" />
            </button>

            <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="z-50 fixed bottom-5 right-5">
                <Image src="/images/whats-logo.png" width={75} height={75} alt="Connect on Whatsapp" />
            </a>
        </div>
    );
};

export default UserLayout;