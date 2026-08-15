"use client";

import { useState } from "react";
import UserLayout from "@/components/layouts/UserLayout";
import {
  Plane,
  ArrowRight,
  ShieldCheck,
  Globe2,
  UserCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Charter() {

  const [selectedFleet, setSelectedFleet] = useState(3);
  const pilotPillars = [
    {
      badge: "Part 135",
      desc: "The gold standard for on-demand charter",
      icon: <ShieldCheck className="h-5 w-5 text-[#B38E5D]" />,
    },
    {
      badge: "Global",
      desc: "International routing capability",
      icon: <Globe2 className="h-5 w-5 text-[#B38E5D]" />,
    },
    {
      badge: "Direct",
      desc: "Work directly with Connor",
      icon: <UserCheck className="h-5 w-5 text-[#B38E5D]" />,
    },
    {
      badge: "Vetted",
      desc: "Only operators Connor flies under",
      icon: <CheckCircle2 className="h-5 w-5 text-[#B38E5D]" />,
    },
  ];

  const aircraftCategories = [
    {
      category: "Light Jet",
      subtitle: "Short Missions",
      passengers: "4–6",
      range: "Up to 1,500 nm",
      bestFor: "Regional hops",
      description: "Optimized for nimble point-to-point flights and quick regional getaways with direct access to smaller airfields.",
    },
    {
      category: "Midsize Jet",
      subtitle: "Cross-Country",
      passengers: "6–8",
      range: "Up to 2,500 nm",
      bestFor: "Coast to coast",
      description: "Generous stand-up cabin comfort combined with non-stop range across continental routes.",
    },
    {
      category: "Heavy Jet",
      subtitle: "Long Range",
      passengers: "8–12",
      range: "Up to 4,000 nm",
      bestFor: "Transcontinental",
      description: "Spacious multi-zone cabins designed for long-range transcontinental cruising with dedicated flight attendant service.",
    },
    {
      badge: "Connor's Aircraft",
      category: "Ultra Long Range",
      subtitle: "Bombardier Global Class",
      passengers: "10–14",
      range: "6,000+ nm",
      bestFor: "Transatlantic & beyond",
      description: "Direct long-haul intercontinental reach with full berthing configuration and quiet cabin performance.",
    },
  ];

  const charterServices = [
    {
      num: "01",
      title: "On-Demand Charter",
      desc: "Book a private jet on your schedule. Connor handles operator selection, pricing, and coordination.",
    },
    {
      num: "02",
      title: "Group Charter",
      desc: "Connor matches the right aircraft and cabin configuration to your group size.",
    },
    {
      num: "03",
      title: "International Routing",
      desc: "Cross-border missions require operator expertise and permit coordination.",
    },
    {
      num: "04",
      title: "Empty Leg Opportunities",
      desc: "Access discounted empty leg flights when positioning routes align with your travel.",
    },
  ];

  return (
    <UserLayout>
      <div className="min-h-screen bg-[#F7F6F2] text-[#0A1628] font-sans lg:space-y-24">

        <section className="px-2">
          <div className="relative w-full overflow-hidden rounded-3xl bg-[#0A1628] text-[#F4F1EA] border border-[#C5A880]/20 py-16 md:py-20 px-6 sm:px-12 shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A88015_1px,transparent_1px),linear-gradient(to_bottom,#C5A88015_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none z-0" />
            <div className="absolute top-1/2 left-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C5A880]/10 blur-[140px] pointer-events-none z-0" />

            <div className="relative z-10 mx-auto max-w-5xl text-center space-y-8">

              <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/40 bg-[#070C14]/80 px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A880] backdrop-blur-md">
                <Plane className="h-3.5 w-3.5 text-[#C5A880]" />
                <span>Private Jet Charter</span>
              </div>

              <div className="space-y-4">
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#F4F1EA] leading-[1.08]">
                  Private Jet Charter, <br />
                  <span className="italic font-normal text-[#C5A880]">
                    Curated by a Working Pilot.
                  </span>
                </h1>
                <p className="font-serif italic text-base sm:text-xl text-slate-300 font-light max-w-xl mx-auto">
                  Connor doesn't just broker jets — he flies them professionally. Every operator recommendation comes from someone who has logged hours at the front of the cabin.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#8C6D3F]">
                  The Pilot Difference
                </span>
                <blockquote className="font-serif text-2xl sm:text-4xl font-light italic text-[#0A1628] leading-snug">
                  "I've sat in the left seat of the aircraft I'm recommending. That changes everything about how I broker a charter."
                </blockquote>
                <p className="font-sans text-sm text-slate-600 font-light leading-relaxed">
                  Most charter brokers are salespeople. Connor is a Part 135 captain flying the Bombardier Global XRS internationally.
                </p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pilotPillars.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-medium text-[#0A1628]">
                        {item.badge}
                      </span>
                      {item.icon}
                    </div>
                    <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E6E1D3]">
            <div className="space-y-2">
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.25em] text-[#8C6D3F]">
                Fleet Capabilities
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A1628] mt-3">
                The right aircraft <span className="italic font-normal text-[#B38E5D]">for every mission</span>
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-slate-500 font-light max-w-xs leading-relaxed">
              Curated fleet tiers configured for mission-critical range, cabin comfort, and regional airstrip access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {aircraftCategories.map((aircraft, idx) => {
              const isSelected = selectedFleet === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedFleet(idx)}
                  className={`cursor-pointer flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 min-h-[440px] ${isSelected
                    ? "bg-[#0A1628] text-white ring-2 ring-[#C5A880] shadow-xl"
                    : "bg-white text-[#0A1628] border border-[#E6E1D3] hover:border-[#B38E5D] hover:shadow-md"}`}>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/10">
                      <span className={`font-mono text-xs font-semibold ${isSelected ? "text-[#C5A880]" : "text-[#8C6D3F]"}`}>
                        TIER 0{idx + 1}
                      </span>
                      {aircraft.badge && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#C5A880]/20 border border-[#C5A880]/40 px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-[#C5A880]">
                          <Sparkles className="h-2.5 w-2.5" />
                          {aircraft.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className={`font-serif text-2xl font-semibold text-gray-700 ${isSelected ? "text-white" : "text-[#0A1628]"}`}>
                        {aircraft.category}
                      </h3>
                      <p className={`font-sans text-xs font-medium mt-1 ${isSelected ? "text-[#C5A880]" : "text-[#8C6D3F]"}`}>
                        {aircraft.subtitle}
                      </p>
                    </div>

                    <p className={`font-sans text-xs leading-relaxed ${isSelected ? "text-slate-200" : "text-slate-600"}`}>
                      {aircraft.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-6">
                    <div className={`space-y-2.5 py-3.5 border-y font-mono text-xs ${isSelected ? "border-white/15 bg-white/5 rounded-xl px-3" : "border-slate-100 bg-[#FAF9F5] rounded-xl px-3"}`}>
                      <div className="flex justify-between items-center">
                        <span className={isSelected ? "text-slate-300" : "text-slate-500"}>Capacity</span>
                        <span className={`font-bold ${isSelected ? "text-white" : "text-[#0A1628]"}`}>{aircraft.passengers}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={isSelected ? "text-slate-300" : "text-slate-500"}>Range</span>
                        <span className={`font-bold ${isSelected ? "text-white" : "text-[#0A1628]"}`}>{aircraft.range}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={isSelected ? "text-slate-300" : "text-slate-500"}>Best For</span>
                        <span className={`font-serif italic font-medium ${isSelected ? "text-[#C5A880]" : "text-[#0A1628]"}`}>
                          {aircraft.bestFor}
                        </span>
                      </div>
                    </div>

                    <a
                      href={`mailto:connor.casarella@volareavi.com?subject=Quote%20Request%3A%20${encodeURIComponent(aircraft.category)}`}
                      className={`inline-flex items-center justify-center gap-2 w-full rounded-full py-3 font-mono text-xs font-semibold uppercase tracking-wider transition-all ${isSelected
                        ? "bg-[#C5A880] text-[#0A1628] hover:bg-white"
                        : "bg-[#0A1628] text-white hover:bg-[#B38E5D]"
                        }`}
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="px-2">
          <div className="bg-white rounded-3xl py-8">
            <section className="mx-auto max-w-7xl px-4 py-8">
              <div className="mb-10 max-w-2xl">
                <span className="font-mono text-sm uppercase tracking-[0.2em] text-[#8C6D3F]">
                  Scope of Charter
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0A1628] mt-2 leading-tight">
                  Bespoke <span className="italic text-[#B38E5D]">Coordination</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-[#D6CEBF] py-8">
                {charterServices.map((service, idx) => (
                  <div
                    key={idx}
                    className={`relative flex flex-col justify-between py-6 ${idx === 0
                      ? "md:px-8"
                      : idx === charterServices.length - 1
                        ? "md:pl-8"
                        : "md:px-8"
                      }`}>
                    <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-[#D6CEBF]">
                      <div className="absolute top-8 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0A1628] font-mono text-[11px] font-bold text-[#C5A880] shadow-md">
                        {service.num}
                      </div>
                    </div>

                    <div className="lg:hidden flex mb-4 h-8 w-8 items-center justify-center rounded-full bg-[#0A1628] font-mono text-[11px] font-bold text-[#C5A880] shadow-md">
                      {service.num}
                    </div>

                    <div className="lg:pt-14">
                      <h3 className="font-serif text-xl font-semibold text-gray-700 leading-snug">
                        {service.title}
                      </h3>
                      <p className="font-sans text-sm text-slate-600 font-light leading-relaxed mt-3">
                        {service.desc}
                      </p>
                    </div>

                    <div className="pt-8 mt-auto flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B38E5D]" />
                      <span className="font-mono text-[14px] uppercase tracking-wider text-slate-500 font-medium">
                        Charter Service
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}