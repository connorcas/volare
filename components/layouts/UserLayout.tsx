"use client";

import { Mail, MapPin, ArrowUpRight, ShieldCheck, Sparkles, X, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface UserLayout {
    children: React.ReactNode;
}

const UserLayout = ({ children }: UserLayout) => {

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Travel Advisory", href: "/travel" },
        { name: "Private Charter", href: "/charter" },
        { name: "Pilote Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const legalLinks = [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Charter Agreement", href: "#charter-terms" },
    ];

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div>
            <div className="sticky top-0 z-50 flex justify-center bg-[#F4F1EA]/95 backdrop-blur-md">
                <header className="flex items-center justify-between gap-6 w-full max-w-7xl px-5 sm:px-8 py-3.5">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/images/logo.png"
                            width={140}
                            alt="Volare Aviation Services"
                            className="w-28 sm:w-36 h-auto"
                        />
                    </Link>
                    <nav className="hidden items-center gap-7 md:flex font-sans">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-[#050A10] transition-colors duration-200 hover:text-[#B38E5D]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-3">
                        <a
                            href="#charter"
                            className="hidden sm:inline-flex rounded-full border-2 border-[#050A10] px-6 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#050A10] transition-all hover:bg-[#050A10] hover:text-white">
                            Book Flight
                        </a>

                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex md:hidden items-center justify-center p-2 rounded-lg text-[#050A10] hover:bg-black/5 focus:outline-none"
                            aria-label="Toggle Navigation Menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6 stroke-[1.75]" />
                            ) : (
                                <Menu className="h-6 w-6 stroke-[1.75]" />
                            )}
                        </button>
                    </div>
                </header>

                {/* Mobile Drawer Menu */}
                {mobileMenuOpen && (
                    <div className="fixed inset-x-0 top-[61px] bg-[#F4F1EA] border-b border-[#050A10]/10 px-6 py-8 md:hidden shadow-2xl animate-in slide-in-from-top-2 duration-200">
                        <nav className="flex flex-col space-y-5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-base font-medium text-[#050A10] hover:text-[#B38E5D] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="pt-4 border-t border-[#050A10]/10">
                                <a
                                    href="#charter"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-center w-full rounded-full border-2 border-[#050A10] bg-[#050A10] text-white py-3 font-mono text-xs font-semibold uppercase tracking-wider"
                                >
                                    Book Flight
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
            <div className="bg-[#F4F1EA] ">
                {children}
            </div>

            <div className="p-2 bg-[#F4F1EA]">
                <div className='px-2'>
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
                                    href="#travel"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#0A1628] bg-white/80 px-8 py-4 font-sans text-xs font-semibold uppercase tracking-widest text-[#0A1628] backdrop-blur-md transition-all duration-300 hover:bg-[#0A1628] hover:text-[#F4F1EA]"
                                >
                                    <span>Inquire Travel Advisory</span>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="rounded-3xl relative w-full overflow-hidden bg-[#0A1628] pt-20 pb-12 text-[#F4F1EA] border-t border-[#C5A880]/20">

                    <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center overflow-hidden z-0">
                        <span className="font-serif text-[16vw] font-bold uppercase leading-none text-[#C5A880]/[0.025] tracking-[0.25em] whitespace-nowrap">
                            VOLARE
                        </span>
                    </div>

                    <div className="absolute top-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#C5A880]/10 blur-[140px] pointer-events-none" />

                    <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12">

                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-white/10">
                            <div>
                                <span className="font-sans text-xs font-medium tracking-wide text-[#C5A880]">
                                    Direct Aviator Concierge
                                </span>
                                <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-normal text-[#F4F1EA]">
                                    Ready for your next trip?
                                </h3>
                            </div>

                            <a
                                href="mailto:connor.casarella@volareavi.com"
                                className="group inline-flex items-center gap-3 rounded-full bg-[#C5A880] px-6 py-3.5 font-sans text-xs font-semibold text-[#070C14] transition-all duration-300 hover:bg-white"
                            >
                                <Mail className="h-4 w-4" />
                                <span>Request a Flight Quote</span>
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-12 border-b border-white/10">
                            <div className="md:col-span-5 space-y-4">
                                <a href="#home" className="inline-block">
                                    <span className="font-serif text-2xl font-semibold uppercase tracking-[0.2em] text-[#F4F1EA]">
                                        VOLARE
                                    </span>
                                </a>

                                <p className="font-serif italic text-sm text-[#C5A880] font-light">
                                    Built by a pilot. Designed for travelers.
                                </p>

                                <p className="font-sans text-xs text-slate-400 leading-relaxed max-w-sm">
                                    Combining captain flight command experience with Virtuoso travel privileges for seamless regional and intercontinental journeys.
                                </p>

                                <div className="pt-1 flex items-center gap-2 font-sans text-xs text-[#C5A880]">
                                    <MapPin className="h-4 w-4 shrink-0" />
                                    <span>Dallas Love Field (DAL) • Global Dispatch</span>
                                </div>
                            </div>

                            <div className="md:col-span-3 space-y-3">
                                <h4 className="font-sans text-xs font-semibold text-[#F4F1EA]">
                                    Navigation
                                </h4>
                                <ul className="space-y-2 font-sans text-xs text-slate-400">
                                    {navLinks.map((link, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={link.href}
                                                className="transition-colors hover:text-[#C5A880]"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="md:col-span-4 space-y-3">
                                <h4 className="font-sans text-xs font-semibold text-[#F4F1EA]">
                                    Flight Operations
                                </h4>

                                <div className="space-y-3 font-sans text-xs">
                                    <a
                                        href="mailto:connor.casarella@volareavi.com"
                                        className="group flex items-center gap-3 text-slate-300 transition-colors hover:text-[#C5A880]"
                                    >
                                        <div className="rounded-full bg-white/5 p-2 text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#070C14] transition-colors">
                                            <Mail className="h-4 w-4" />
                                        </div>
                                        <span className="truncate">connor.casarella@volareavi.com</span>
                                    </a>

                                    <div className="flex items-center gap-3 text-slate-400">
                                        <div className="rounded-full bg-white/5 p-2 text-[#C5A880]">
                                            <ShieldCheck className="h-4 w-4" />
                                        </div>
                                        <span>Captain Dispatch Support</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-slate-500">
                            <p>© {new Date().getFullYear()} Volare Aviation. All rights reserved.</p>

                            <div className="flex items-center gap-6">
                                {legalLinks.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className="transition-colors hover:text-[#C5A880]"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </footer>
            </div>
        </div>
    )
}

export default UserLayout;