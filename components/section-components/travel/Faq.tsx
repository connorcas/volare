"use client";

import { useState } from "react";

const Faq = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(2);
    const faqs = [
        {
            id: 0,
            q: "What benefits can you provide through your preferred hotel partnerships?",
            a: "Through Volare's preferred hotel partnerships, qualifying reservations may receive valuable benefits such as daily breakfast for two, resort or hotel credits, room upgrades when available, early check-in, late checkout, and personalized recognition from the property. Benefits vary by hotel, rate, and availability and will be confirmed before booking.",
        },
        {
            id: 1,
            q: "Do you charge a hotel-booking or advisory fee?",
            a: "Volare does not charge an additional advisory fee for standard hotel and resort reservations booked through our preferred partners. More complex itinerary planning, private villa sourcing, aviation coordination, or concierge-intensive requests may require a separate planning fee, which will always be disclosed and agreed upon in advance.",
        },
        {
            id: 2,
            q: "Can you coordinate hotels with a private charter itinerary?",
            a: "Yes. Volare can coordinate accommodations, airport transfers, arrival timing, and other travel arrangements around your private flight schedule. Our aviation experience helps us account for airport selection, repositioning, customs requirements, ground-transfer times, and potential itinerary changes.",
        },
        {
            id: 3,
            q: "Can you arrange private transfers, dining, villas, and special experiences?",
            a: "Yes. Depending on the destination, Volare can assist with private villas, chauffeured transportation, dining reservations, yacht charters, guides, wellness experiences, and other personalized arrangements. Availability and supplier terms vary, so advance notice is recommended for high-demand destinations and peak travel periods.",
        },
        {
            id: 4,
            q: "What happens if my itinerary changes?",
            a: "Contact Volare as soon as your plans change. We will coordinate with the applicable hotel, carrier, or travel provider to revise the reservation and minimize disruption. Changes, cancellations, and refunds remain subject to each provider’s policies, availability, and applicable fees.",
        },
        {
            id: 5,
            q: "Who supports my reservation while I am traveling?",
            a: "You will have a direct point of contact at Volare for assistance with reservations and itinerary coordination. When immediate action is required, we will work with the hotel, transportation provider, charter operator, or other applicable supplier to help resolve the issue as efficiently as possible.",
        },
        {
            id: 6,
            q: "Can you recommend the best routing for my trip?",
            a: "Yes. Volare evaluates the complete journey—not simply the destination. Recommendations may consider commercial and private-flight options, airport access, connection risk, customs requirements, ground-transfer time, schedule reliability, cabin preferences, and the overall value of each option.",
        },
        {
            id: 7,
            q: "How far in advance should I contact Volare?",
            a: "For standard hotel reservations, Volare can often assist with relatively short notice. For private villas, festive-season travel, major events, multi-destination itineraries, or private charter coordination, contacting us as early as possible provides the best selection and flexibility.",
        },
        {
            id: 8,
            q: "Are preferred-partner benefits guaranteed?",
            a: "Confirmed benefits will be documented with your reservation. Certain benefits—especially room upgrades, early check-in, and late checkout—are generally subject to availability at arrival. Volare will clearly explain which benefits are guaranteed and which are availability-based before you book."
        }
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