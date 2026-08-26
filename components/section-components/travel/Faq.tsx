"use client";

import { useState } from "react";

const Faq = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(2);
    const faqs = [
        {
            id: 0,
            q: "Where to live?",
            a: "Access to 175,000+ hotels through Virtuoso and Fora's preferred partner network, securing elite amenities at $0 advisory cost.",
        },
        {
            id: 1,
            q: "How do I issue a ticket refund?",
            a: "Refunds, cancellations, and modifications are handled directly with your dedicated advisor and executed under priority partner terms.",
        },
        {
            id: 2,
            q: "What to take with you on vacation?",
            a: "1. Passport and travel documents\n2. Money, credit card and travel insurance information\n3. Travel first aid kit and medicines that you need regularly\n4. Adapters and chargers",
        },
        {
            id: 3,
            q: "Do you have discounts for students & corporate groups?",
            a: "Yes, bespoke corporate agreements, flight coordination packages, and seasonal partner rates are tailored per request.",
        },
        {
            id: 4,
            q: "How do I change the date of a ticket?",
            a: "Tell Connor where you need to adjust and he'll manage the re-routing directly with airlines and properties.",
        },
        {
            id: 5,
            q: "Can I change my ticket?",
            a: "Yes, flexible ticket modification and elite hotel booking terms apply depending on fare classes and Virtuoso partner conditions.",
        },
    ];
    return (
        <div className="lg:col-span-7 divide-y divide-[#C5A880]/15 border-y border-[#C5A880]/15">
            {faqs.map((faq) => {
                const isOpen = activeFaq === faq.id;
                return (
                    <div key={faq.id} className="py-6 transition-colors">
                        <button
                            type="button"
                            onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                            className="w-full flex items-start justify-between gap-6 text-left group"
                        >
                            <div className="flex items-start gap-4">
                                <span className="font-mono text-xs font-semibold text-[#C5A880]/60 mt-1">
                                    0{faq.id + 1}
                                </span>
                                <span className="font-serif text-lg sm:text-xl font-normal text-[#F4F1EA] group-hover:text-[#C5A880] transition-colors leading-snug">
                                    {faq.q}
                                </span>
                            </div>
                            <span className="shrink-0 mt-1 font-mono text-xl text-[#C5A880]">
                                {isOpen ? "[ - ]" : "[ + ]"}
                            </span>
                        </button>

                        {isOpen && (
                            <div className="mt-4 pl-8 sm:pl-9 pr-4">
                                <p className="font-sans text-xs sm:text-sm font-light text-slate-300 leading-relaxed whitespace-pre-line border-l border-[#C5A880]/30 pl-4">
                                    {faq.a}
                                </p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    )
}

export default Faq