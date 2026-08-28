"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "@/constants/common.constant";

export default function Header({
    navLinks = [
        { name: "Home", href: "/" },
        { name: "Travel", href: "/travel" },
        { name: "Charter", href: "/charter" },
        { name: "Pilot Services", href: "/pilot-services" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ],
}: {
    navLinks?: { name: string; href: string }[];
}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isFloated, setIsFloated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsFloated(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="w-full flex justify-center bg-[#F4F1EA]">
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
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
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
            </div>

            <div
                className={`fixed inset-x-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none ${isFloated ? "top-4" : "-top-20"}`}>
                <header className="pointer-events-auto flex items-center justify-between gap-6 w-full max-w-5xl rounded-full bg-white border border-[#050A10]/10 px-6 sm:px-8 py-2.5 shadow-xl shadow-black/5">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/images/logo.png"
                            width={110}
                            alt="Volare Aviation Services"
                            className="w-24 sm:w-28 h-auto"
                        />
                    </Link>

                    <nav className="hidden items-center gap-7 md:flex font-sans">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs font-semibold uppercase tracking-wider text-[#050A10] transition-colors duration-200 hover:text-[#B38E5D]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex rounded-full bg-[#050A10] px-5 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#8C6D3F]">
                            Book Flight
                        </a>

                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex md:hidden items-center justify-center p-2 rounded-full text-[#050A10] hover:bg-black/5 focus:outline-none"
                            aria-label="Toggle Navigation Menu">
                            {mobileMenuOpen ? (
                                <X className="h-5 w-5 stroke-[1.75]" />
                            ) : (
                                <Menu className="h-5 w-5 stroke-[1.75]" />
                            )}
                        </button>
                    </div>
                </header>

                {/* Mobile Flyout Drawer */}
                {mobileMenuOpen && (
                    <div className="pointer-events-auto absolute top-full mt-3 inset-x-4 max-w-sm mx-auto rounded-3xl bg-[#F4F1EA]/95 backdrop-blur-md border border-[#050A10]/10 p-6 md:hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-base font-semibold text-[#050A10] hover:text-[#B38E5D] transition-colors py-1"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="pt-3 border-t border-[#050A10]/10">
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full rounded-full border-2 border-[#050A10] bg-[#050A10] text-white py-2.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all hover:bg-transparent hover:text-[#050A10]"
                                >
                                    Book Flight
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </>
    );
}