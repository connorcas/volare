import React from "react";
import UserLayout from "@/components/layouts/UserLayout";
import LegalTableOfContents, { TOCSection } from "./LegalTableOfContents";
import BannerSection from "@/components/general-components/BannerSection";

interface LegalPageLayoutProps {
    title: string;
    italicTitle: string;
    effectiveDate: string;
    sections: TOCSection[];
    children: React.ReactNode;
}

export default function LegalPageLayout({
    title,
    italicTitle,
    effectiveDate,
    sections,
    children,
}: LegalPageLayoutProps) {
    return (
        <UserLayout>
            <div className="min-h-screen text-[#0A1628] font-sans pb-32">
                <BannerSection
                    slogan="Volare Aviation Services LLC"
                    title={title}
                    italicTitle={italicTitle}
                    effectDate={effectiveDate}
                />

                <div className="mx-auto max-w-7xl px-4 pt-12 sm:pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        <LegalTableOfContents sections={sections} />
                        <main className="lg:col-span-8 space-y-12 text-[15px] sm:text-base leading-relaxed text-slate-700 font-light">
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}