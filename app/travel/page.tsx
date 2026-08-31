import UserLayout from "@/components/layouts/UserLayout";
import BannerSection from "@/components/general-components/BannerSection";
import { WHATSAPP_LINK } from "@/constants/common.constant";
import Faq from "@/components/section-components/travel/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Travel Advisory & Virtuoso Hotel Bookings | Volare Aviation",
  description:
    "Bespoke international travel advisory, VIP Virtuoso hotel and resort bookings with complimentary upgrades, daily breakfast, and private jet charter coordination.",
  keywords: [
    "Luxury Travel Advisory",
    "Virtuoso Travel Advisor",
    "VIP Hotel Bookings",
    "Private Jet Itinerary Planning",
    "Fora Preferred Partner",
    "Luxury Resort Upgrades",
    "Bespoke Travel Planning USA",
    "Worldwide Luxury Concierge",
  ],
  openGraph: {
    title: "Luxury Travel Advisory & Virtuoso Perks | Volare Aviation",
    description:
      "Unlock room upgrades, resort credits, and complimentary breakfast at 175,000+ luxury hotels worldwide. Designed and coordinated with pilot expertise.",
    url: "https://www.volareavi.com/travel",
    siteName: "Volare Aviation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.volareavi.com/images/hero-plan.png",
        width: 1200,
        height: 630,
        alt: "Volare Aviation Luxury Travel Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Travel Advisory & VIP Virtuoso Bookings | Volare",
    description:
      "Global luxury hotel reservations with VIP amenities, charter coordination, and end-to-end trip planning at $0 added advisory cost.",
    images: ["https://www.volareavi.com/images/hero-plan.png"],
  },
  alternates: {
    canonical: "https://www.volareavi.com/travel",
    languages: {
      "x-default": "https://www.volareavi.com/travel"
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function TravelSection() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Volare Aviation - Luxury Travel Advisory",
    url: "https://www.volareavi.com/travel",
    logo: "https://www.volareavi.com/logo.png",
    image: "https://www.volareavi.com/images/hero-plan.png",
    description:
      "Virtuoso partner luxury hotel bookings, custom itinerary architecture, and charter flight coordination with direct pilot expertise.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Virtuoso & Fora Preferred Hotel & Resort Booking",
          description: "Complimentary room upgrades, daily breakfast for two, and $100+ resort credits at luxury hotels globally.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Itinerary Architecture & Trip Planning",
          description: "End-to-end travel curation including private charter legs, ground transfers, and bespoke local experiences.",
        },
      },
    ],
    priceRange: "$$$$",
  };

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

  return (
    <UserLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen pb-20 space-y-16 lg:space-y-24">
        <BannerSection
          slogan="Luxury Travel Advisory"
          title={"Luxury Travel,"}
          italicTitle={"Elevated by Expertise."}
          subTitle={"Most advisors book trips. We've flown them."}
        />

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

        <div className="px-2">
          <section className="rounded-2xl bg-[#0A1628]">
            <div className="relative mx-auto max-w-7xl overflow-hidden text-[#F4F1EA] border border-[#C5A880]/20 p-8 sm:p-12 lg:p-16">
              <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-[#C5A880]/10 blur-[130px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-5 space-y-6 lg:sticky">
                  <div className="text-center lg:text-left space-y-4">
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#F4F1EA] leading-tight">
                      Frequently <br className="hidden lg:inline" />
                      <span className="italic font-semibold text-[#C5A880]">asked questions</span>
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
                        href={WHATSAPP_LINK}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full bg-[#C5A880] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#070C14] hover:bg-white transition-all shadow-md">
                        <span>Ask Connor Directly</span>
                        <span className="text-sm">→</span>
                      </a>
                    </div>
                  </div>
                </div>
                <Faq />
              </div>
            </div>
          </section>
        </div>
      </div>
    </UserLayout>
  );
}