"use client";

import React, { useState } from "react";
import UserLayout from "@/components/layouts/UserLayout";
import { ArrowRight, Plane } from "lucide-react";
import BannerSection from "@/components/general-components/BannerSection";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "Private Jet Charter",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    "Private Jet Charter",
    "Luxury Travel & Virtuoso Stays",
    "Contract Pilot Services",
    "General Advisory",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <UserLayout>
      <div className="min-h-screen text-[#0A1628] font-sans pb-24">
        <BannerSection
          slogan="Direct Flight Operations & Travel Desk"
          title={"Initiate Your,"}
          italicTitle={"Next Engagement."}
          subTitle={"Direct dispatch to Captain Connor Casarella. Inquiries receive pilot-level operational review, rigorous operator vetting, and curated luxury access."}
        />

        <section className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-4 space-y-3">
              <div className="aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-[#D6CEBF] bg-[#F0EBE1]">
                <img
                  src="/images/connorhs.jpg"
                  alt="Connor Casarella"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="max-w-sm space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#0A1628]">
                      Connor Casarella
                    </h3>
                    <p className="font-mono text-xs font-semibold text-[#8C6D3F]">
                      Pilot · Advisor · Founder
                    </p>
                  </div>
                  <span className="font-serif italic text-2xl text-gray-400">CC</span>
                </div>

                <div className="divide-y divide-[#D6CEBF] border-y border-[#D6CEBF] font-mono text-xs text-slate-600">
                  <div className="py-2.5 flex justify-between">
                    <span className="text-gray-600">Direct Line</span>
                    <a
                      href="mailto:connor.casarella@volareavi.com"
                      className="text-[#0A1628] font-medium hover:text-[#B38E5D] transition-colors"
                    >
                      connor.casarella@volareavi.com
                    </a>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-gray-600">Base</span>
                    <span className="text-[#0A1628] font-medium">Dallas Love Field (DAL)</span>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-gray-600">Airframe</span>
                    <span className="text-[#0A1628] font-medium">Bombardier Global 7500</span>
                  </div>
                  <div className="py-2.5 flex justify-between">
                    <span className="text-gray-600">Turnaround</span>
                    <span className="text-[#0A1628] font-medium">2 – 4 Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean, Minimalist Form */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="border-b border-[#D6CEBF] pb-2 focus-within:border-[#0A1628] transition-colors">
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-600">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jonathan Mercer"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-transparent pt-2 text-sm text-[#0A1628] placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>

                  <div className="border-b border-[#D6CEBF] pb-2 focus-within:border-[#0A1628] transition-colors">
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-600">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent pt-2 text-sm text-[#0A1628] placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Phone & Service Focus */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="border-b border-[#D6CEBF] pb-2 focus-within:border-[#0A1628] transition-colors">
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-600">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent pt-2 text-sm text-[#0A1628] placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>

                  <div className="border-b border-[#D6CEBF] pb-2 focus-within:border-[#0A1628] transition-colors">
                    <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-600">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-transparent pt-2 text-sm text-[#0A1628] focus:outline-none cursor-pointer"
                    >
                      {serviceOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="border-b border-[#D6CEBF] pb-2 focus-within:border-[#0A1628] transition-colors">
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-gray-600">
                    Mission Details / Requirements *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Routing, travel dates, passenger count, or hotel preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent pt-2 text-sm text-[#0A1628] placeholder:text-gray-400 focus:outline-none resize-none"
                  />
                </div>

                {/* Action Button */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-gray-600">
                    Strictly confidential dispatch.
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0A1628] px-8 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#B38E5D] transition-colors shadow-sm"
                  >
                    <span>{submitted ? "Inquiry Dispatched ✓" : "Send Inquiry"}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </form>
            </div>

          </div>
        </section>

      </div>
    </UserLayout>
  );
}