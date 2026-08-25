"use client";

import React, { useState, useEffect } from "react";

export interface TOCSection {
    id: string;
    title: string;
}

export default function LegalTableOfContents({
    sections,
}: {
    sections: TOCSection[];
}) {
    const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 160;
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    const scrollToSection = (
        e: React.MouseEvent<HTMLAnchorElement>,
        id: string
    ) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -90;
            const y =
                element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <aside className="hidden lg:block lg:col-span-4 sticky top-24">
            <div className="space-y-4">
                <div className="pb-3 border-b border-[#D6CEBF]">
                    <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#8C6D3F] font-semibold">
                        Table of Contents
                    </span>
                </div>
                <nav className="space-y-0.5 border-l border-[#D6CEBF]/70">
                    {sections.map((section) => {
                        const isActive = activeSection === section.id;
                        return (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                onClick={(e) => scrollToSection(e, section.id)}
                                className={`block py-1 pl-4 text-[13px] transition-all relative ${isActive
                                        ? "font-medium text-[#0A1628] -ml-[1px] border-l-2 border-[#0A1628]"
                                        : "text-slate-500 hover:text-[#0A1628]"
                                    }`}
                            >
                                {section.title}
                            </a>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}