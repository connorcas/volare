"use client";

import React, { useState } from "react";
import UserLayout from "@/components/layouts/UserLayout";
import {
  Plane,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Plus,
  X,
  Sparkles,
  Coffee,
  ShieldCheck,
  Clock,
  Crown,
} from "lucide-react";

export default function TravelSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(2);

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Travel", href: "/travel" },
    { name: "Charter", href: "/charter" },
    { name: "Pilot Services", href: "/pilot-services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const perks = [
    {
      icon: <Sparkles className="h-5 w-5 text-[#B38E5D]" />,
      title: "Room Upgrade",
      detail: "On arrival, when available",
    },
    {
      icon: <Coffee className="h-5 w-5 text-[#B38E5D]" />,
      title: "Daily Breakfast",
      detail: "For two, every morning",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-[#B38E5D]" />,
      title: "Resort Credits",
      detail: "Spa, dining & more",
    },
    {
      icon: <Clock className="h-5 w-5 text-[#B38E5D]" />,
      title: "Early Check-in",
      detail: "Late check-out too",
    },
    {
      icon: <Crown className="h-5 w-5 text-[#B38E5D]" />,
      title: "VIP Treatment",
      detail: "At 175,000+ hotels",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Hotel & Resort Booking",
      desc: "Access to 175,000+ hotels through Virtuoso and Fora's preferred partner network.",
    },
    {
      num: "02",
      title: "Full Itinerary Planning",
      desc: "From flights to ground transfers, restaurants to experiences — every detail handled.",
    },
    {
      num: "03",
      title: "Flight Recommendations",
      desc: "Routing, airline, and cabin advice from someone who actually flies for a living.",
    },
    {
      num: "04",
      title: "Charter Coordination",
      desc: "Seamlessly connect your private charter leg with the rest of your trip.",
    },
  ];

  const propertyTags = [
    "City Break",
    "Luxury Hotel",
    "London",
    "Marriott Bonvoy",
  ];

  const reportInclusions = [
    "+ Welcome amenity",
    "· Daily breakfast",
    "· Upgrade on arrival",
    "· Extended checkout",
  ];

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
    <UserLayout>
      <div className="min-h-screen pb-20 space-y-16 lg:space-y-24">

        <section className="px-2">
          <div className="relative w-full overflow-hidden rounded-3xl bg-[#0A1628] text-[#F4F1EA] border border-[#C5A880]/20 py-16 md:py-20 px-6 sm:px-12 shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A88015_1px,transparent_1px),linear-gradient(to_bottom,#C5A88015_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none z-0" />
            <div className="absolute top-1/2 left-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C5A880]/10 blur-[140px] pointer-events-none z-0" />

            <div className="relative z-10 mx-auto max-w-5xl text-center space-y-8">

              <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/40 bg-[#070C14]/80 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A880] backdrop-blur-md">
                <Plane className="h-3.5 w-3.5 text-[#C5A880]" />
                <span>Luxury Travel Advisory</span>
              </div>

              <div className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F4F1EA] leading-[1.08]">
                  Luxury Travel, <br />
                  <span className="italic font-normal text-[#C5A880]">
                    Elevated by Expertise.
                  </span>
                </h1>
                <p className="font-serif italic text-base sm:text-xl text-slate-300 font-light max-w-xl mx-auto">
                  Most advisors book trips. We've flown them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4">
          <div className="space-y-8">
            <div className="flex  sm:flex-row sm:items-end justify-center gap-4 pb-5">
              <div className="text-center">
                <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#8C6D3F]">
                  Scope of Representation
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0A1628] mt-1">
                  Advisory <span className="italic text-[#B38E5D]">Architecture</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between rounded-3xl bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B38E5D] hover:shadow-xl hover:shadow-[#B38E5D]/10 min-h-[260px]"
                >
                  <span className="absolute right-5 top-4 font-serif text-5xl font-light text-slate-100 select-none group-hover:text-[#B38E5D]/10 transition-colors">
                    {step.num}
                  </span>

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center justify-center rounded-full bg-[#FAF9F6] border border-[#E6E1D3] px-3 py-1 font-mono text-[11px] font-bold text-[#8C6D3F] group-hover:border-[#B38E5D] group-hover:bg-[#0A1628] group-hover:text-white transition-all">
                      PHASE {step.num}
                    </span>
                  </div>

                  <div className="relative z-10 space-y-3 pt-6">
                    <h3 className="font-serif text-xl font-medium text-[#0A1628] group-hover:text-[#B38E5D] transition-colors leading-snug">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="mt-4 h-0.5 w-0 bg-[#B38E5D] transition-all duration-300 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4">
          <div className="space-y-6">
            <div>
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#8C6D3F]">
                Book through Volare and unlock
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0A1628] mt-1">
                Exclusive perks at <span className="italic text-[#B38E5D]">no extra cost</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-12">
              <div className="md:col-span-6 relative overflow-hidden rounded-3xl bg-white p-7 min-h-[190px] flex flex-col justify-between">
                <div className="relative z-10">
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#0A1628]">
                    ROOM UPGRADE
                  </h3>
                </div>
                <p className="relative z-10 font-sans text-xs text-slate-600 max-w-[220px] leading-relaxed font-light">
                  On arrival, when available across Virtuoso partner properties.
                </p>
                <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
                  <img
                    src="/images/hero-plan.png"
                    alt="Upgrade Room"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
                </div>
              </div>

              <div className="md:col-span-3 rounded-3xl bg-[#C5A880] text-white p-7 min-h-[190px] flex flex-col justify-between">
                <div className="font-serif text-2xl sm:text-3xl font-semibold">
                  DAILY BREAKFAST
                </div>
                <p className="font-sans text-xs text-white/90 font-light leading-relaxed">
                  For two, every morning throughout your stay
                </p>
              </div>

              <div className="md:col-span-3 rounded-3xl bg-white p-7 min-h-[190px] flex flex-col justify-between">
                <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#0A1628]">
                  $100+
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase text-[#0A1628]">Resort Credits</h4>
                  <p className="font-sans text-xs text-slate-600 font-light mt-0.5">
                    Spa, dining & exclusive property experiences
                  </p>
                </div>
              </div>

              <div className="md:col-span-3 rounded-3xl bg-[#0A1628] text-white p-7 min-h-[190px] flex flex-col justify-between">
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#C5A880]">
                  EARLY <br /> CHECK-IN
                </div>
                <p className="font-sans text-xs text-slate-300 font-light leading-relaxed">
                  Late check-out too, subject to availability
                </p>
              </div>

              <div className="md:col-span-3 rounded-3xl bg-white p-7 min-h-[190px] flex flex-col justify-between">
                <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#0A1628]">
                  175,000+
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase text-[#0A1628]">VIP Treatment</h4>
                  <p className="font-sans text-xs text-slate-600 font-light mt-0.5">
                    Hotels & resorts globally unlocked
                  </p>
                </div>
              </div>

              <div className="md:col-span-6 relative overflow-hidden rounded-3xl bg-white p-7 min-h-[190px] flex flex-col justify-between">
                <div className="relative z-10">
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#0A1628]">
                    $0 ADVISORY COST
                  </h3>
                </div>
                <p className="relative z-10 font-sans text-xs text-slate-600 max-w-[220px] leading-relaxed font-light">
                  We incur zero added fees for standard hotel and resort bookings while delivering VIP status.
                </p>
                <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden opacity-35">
                  <img
                    src="/images/hero-plan.png"
                    alt="Aviation Advisory"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-[#0A1628] text-[#F4F1EA] border border-[#C5A880]/20 p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-[#C5A880]/10 blur-[130px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-6 lg:sticky">
                <div className="text-center lg:text-left space-y-4">
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F4F1EA] leading-tight">
                    Frequently <br className="hidden lg:inline" />
                    <span className="italic font-normal text-[#C5A880]">asked questions</span>
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Everything you need to know about our preferred booking rates, routing advisory, and itinerary changes.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#C5A880]/15 space-y-3 text-center lg:text-left">
                  <p className="font-mono text-xs text-slate-400">
                    Have a specific route in mind?
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <a
                      href="mailto:connor.casarella@volareavi.com"
                      className="inline-flex items-center gap-2 rounded-full bg-[#C5A880] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#070C14] hover:bg-white transition-all shadow-md"
                    >
                      <span>Ask Connor Directly</span>
                      <span className="text-sm">→</span>
                    </a>
                  </div>
                </div>
              </div>

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
            </div>
          </div>
        </section>
      </div>
    </UserLayout>
  );
}