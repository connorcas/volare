import Link from "next/link";

interface FooterProps {
    navLinks?: { name: string; href: string }[];
    legalLinks?: { name: string; href: string }[];
}

export default function Footer({
    navLinks = [
        { name: "Home", href: "/" },
        { name: "Travel", href: "/travel" },
        { name: "Charter", href: "/charter" },
        { name: "Pilot Services", href: "/pilot-services" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ],
    legalLinks = [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
}: FooterProps) {
    return (
        <footer className="relative w-full rounded-2xl bg-[#0A1628] text-[#F4F1EA] font-sans border border-[#C5A880]/20 pt-16 sm:pt-20 pb-12 overflow-hidden shadow-2xl">

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
                    <div className="md:col-span-5 space-y-4">
                        <Link href="/" className="inline-block">
                            <span className="font-serif text-2xl font-semibold uppercase tracking-[0.2em] text-[#F4F1EA]">
                                VOLARE
                            </span>
                        </Link>
                        <p className="font-sans text-sm text-slate-400 font-light leading-relaxed max-w-sm">
                            Combining active airline transport flight command with Virtuoso luxury privileges for transparent, uncompromised global journeys.
                        </p>
                        <div className="pt-2 font-mono text-xs text-[#C5A880]">
                            Dallas Love Field (DAL) · Worldwide Dispatch
                        </div>
                    </div>

                    <div className="md:col-span-3 space-y-4">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A880]/70">
                            Navigation
                        </span>
                        <ul className="space-y-2.5 font-sans text-sm font-light">
                            {navLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-[#C5A880] transition-colors block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-4 space-y-4">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A880]/70">
                            Flight Operations
                        </span>

                        <div className="space-y-3 font-mono text-xs">
                            <div>
                                <span className="block text-slate-500 uppercase text-[9px]">Direct Contact</span>
                                <a
                                    href="mailto:connor.casarella@volareavi.com"
                                    className="font-sans text-sm text-[#F4F1EA] hover:text-[#C5A880] transition-colors"
                                >
                                    connor.casarella@volareavi.com
                                </a>
                            </div>

                            <div>
                                <span className="block text-slate-500 uppercase text-[9px]">Airframe Rating</span>
                                <span className="font-sans text-sm text-[#F4F1EA]">
                                    Bombardier Global 7500 / Part 135
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Volare Aviation Services LLC. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        {legalLinks.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href}
                                className="hover:text-[#C5A880] transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}