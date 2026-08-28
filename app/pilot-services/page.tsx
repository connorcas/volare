import type { Metadata } from "next";
import UserLayout from "@/components/layouts/UserLayout";
import BannerSection from "@/components/general-components/BannerSection";
import {
  Plane,
  Award,
  BookOpen,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contract Pilot, Flight Crew Placement & Safety Consulting | Volare Aviation",
  description:
    "Professional typed contract captain, flight crew placement, and Part 135 SMS aviation consulting led by Captain Connor Casarella. Large-cabin international expertise.",
  keywords: [
    "Contract Pilot Services",
    "Bombardier Global Captain",
    "Part 135 Contract Captain",
    "Business Aviation Crew Placement",
    "Flight Operations Consulting",
    "Aviation Safety Management Systems",
    "Dallas Love Field Pilot Services",
    "NBAA CAM Aviation Advisory",
  ],
  openGraph: {
    title: "Contract Pilot & Aviation Consulting | Volare Aviation",
    description:
      "Typed Bombardier Global PIC/SIC coverage, international trip support, and SMS operations consulting by active Part 135 airline transport command.",
    url: "https://volareavi.com/pilot-services",
    siteName: "Volare Aviation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://volareavi.com/images/hero-plan.png",
        width: 1200,
        height: 630,
        alt: "Volare Aviation Contract Pilot & Consulting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contract Pilot, Crew & Consulting | Volare Aviation",
    description:
      "Professional typed captain coverage, DAL flight crew placement, and flight department advisory.",
    images: ["https://volareavi.com/images/hero-plan.png"],
  },
  alternates: {
    canonical: "https://volareavi.com/pilot-services",
    languages: {
      "x-default": "https://volareavi.com/pilot-services",
      "en-US": "https://volareavi.com/en-us/pilot-services",
      "en-CA": "https://volareavi.com/en-ca/pilot-services",
      "en-GB": "https://volareavi.com/en-gb/pilot-services",
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

export default function PilotServicesPage() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Volare Aviation - Contract Pilot & Consulting",
    url: "https://volareavi.com/pilot-services",
    logo: "https://volareavi.com/logo.png",
    image: "https://volareavi.com/images/hero-plan.png",
    description:
      "Professional typed contract captain, relief first officer, trip logistics coordination, and Part 135 SMS flight department advisory.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Flight Deck & Advisory Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Contract Captain (PIC)",
            description: "Pilot-in-Command services for select operators on large-cabin business jets.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "First Officer Coverage (SIC)",
            description: "Second-in-Command relief flight crew coverage for international legs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Trip Support & Operational Logistics",
            description: "International flight permits, routing optimization, and crew duty coordination.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flight Department & SMS Consulting",
            description: "Safety management system reviews, risk assessment frameworks, and Part 135 compliance guidance.",
          },
        },
      ],
    },
  };

  const credentials = [
    {
      role: "Current Flight Command",
      title: "Bombardier Global 7500",
      sub: "Part 135 Captain · Solairus Aviation",
      detail: "Active worldwide flight operations on ultra-long-range large-cabin business jets.",
      icon: <Plane className="h-4 w-4 text-[#8C6D3F]" />,
    },
    {
      role: "Safety Governance",
      title: "Safety Committee Member",
      sub: "SMS Oversight & Risk Management",
      detail: "Active flight safety oversight, hazard mitigation frameworks, and operational risk review.",
      icon: <CheckCircle2 className="h-4 w-4 text-[#8C6D3F]" />,
    },
    {
      role: "Aviation Management",
      title: "NBAA CAM Candidate",
      sub: "Certified Aviation Manager",
      detail: "Formal executive credentials in flight department leadership, fiscal control, and compliance.",
      icon: <Award className="h-4 w-4 text-[#8C6D3F]" />,
    },
    {
      role: "Academic Background",
      title: "BS Aviation & Aerospace",
      sub: "Everglades University · Flight Operations",
      detail: "Rigorous aeronautical science degree paired with Marquis Who's Who professional recognition.",
      icon: <BookOpen className="h-4 w-4 text-[#8C6D3F]" />,
    },
  ];

  const crewTable = [
    {
      num: "01",
      service: "Contract Captain",
      role: "Pilot-in-Command (PIC)",
      coverage: "Available as pilot-in-command for select operators on large-cabin business jets.",
    },
    {
      num: "02",
      service: "First Officer Coverage",
      role: "Second-in-Command (SIC)",
      coverage: "Available as SIC when operators need experienced crew coverage.",
    },
    {
      num: "03",
      service: "Trip Support & Coordination",
      role: "Operational Logistics",
      coverage: "Operational support for complex international trips — routing, permits, crew coordination.",
    },
    {
      num: "04",
      service: "Crew Placement",
      role: "Talent Sourcing",
      coverage: "Leverage Connor's network within the business aviation community at Dallas Love Field.",
    },
  ];

  const operationalStandards = [
    "SMS Trained",
    "Part 135 Standards",
    "CRM Proficient",
    "International Ops",
    "Long-range Typed",
    "NBAA CAM Candidate",
  ];

  return (
    <UserLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BannerSection
        slogan="Contract Pilot, Crew & Consulting"
        title="Professional. Typed."
        italicTitle="Ready to Advise."
        subTitle="Connor is available to select operators as a contract pilot and advisor — bringing Part 135 captain experience and safety committee depth to every engagement."
      />

      <div className="pt-20">
        <section className="px-4 space-y-12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8C6D3F]">
                The Pilot
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A1628] tracking-tight leading-[1.1]">
                Large-cabin experience at the highest level
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 font-sans text-sm sm:text-[15px] text-[#4A5568] font-light leading-relaxed text-left border-l-0 lg:border-l lg:border-[#D6CEBF] lg:pl-10">
              <p>
                Connor flies the Bombardier Global 7500 internationally for Solairus Aviation under Part 135 — one of the most demanding positions in business aviation. On days off, he is available to select operators requiring a typed, experienced, and safety-minded captain or first officer for contract assignments.
              </p>
              <p>
                His work on Solairus&apos;s safety committee — combined with his NBAA CAM candidacy — means he brings a management-level perspective beyond the flight deck.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 text-left">
            {credentials.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl bg-white text-[#0A1628] border border-[#E6E1D3] hover:border-[#B38E5D] hover:shadow-md p-6 sm:p-7 space-y-6 transition-all duration-300 hover:border-[#8C6D3F]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#D6CEBF]/70 pb-3">
                    <span className="font-mono text-[12px] uppercase tracking-wider text-[#8C6D3F]">
                      {card.role}
                    </span>
                    {card.icon}
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-[#0A1628]">
                    {card.title}
                  </h3>
                  <p className="font-mono text-[12px] text-[#8C6D3F]">
                    {card.sub}
                  </p>
                </div>

                <p className="font-sans text-xs text-[#718096] font-light leading-relaxed pt-2 border-t border-[#D6CEBF]/40">
                  {card.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 space-y-8 text-left mx-auto max-w-7xl mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#D6CEBF] pb-6">
            <div className="space-y-1">
              <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-[#8C6D3F]">
                Contract Flying
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0A1628] tracking-tight">
                Crew services offered
              </h2>
            </div>
            <span className="font-mono text-md text-[#718096]">
              Part 135 &amp; 91 Subpart K Standards
            </span>
          </div>

          <div className="divide-y divide-[#D6CEBF] border-b border-[#D6CEBF]">
            {crewTable.map((row) => (
              <div
                key={row.num}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 items-center hover:bg-black/[0.01] transition-colors"
              >
                <div className="md:col-span-1 font-mono text-xs text-[#8C6D3F] font-semibold">
                  {row.num}
                </div>
                <div className="md:col-span-4 font-serif text-xl text-[#0A1628]">
                  {row.service}
                </div>
                <div className="md:col-span-3 font-mono text-xs uppercase tracking-wider text-[#718096]">
                  {row.role}
                </div>
                <div className="md:col-span-4 font-sans text-sm text-[#4A5568] font-light">
                  {row.coverage}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-2 mt-16">
          <div className="rounded-2xl bg-[#0A1628]">
            <section className="relative overflow-hidden px-8 py-18 mx-auto max-w-7xl space-y-12 text-left text-[#F4F1EA]">

              {/* Section Header */}
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                <div className="space-y-2 max-w-2xl">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C5A880]">
                    Aviation Consulting
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F4F1EA] tracking-tight">
                    Advisory services for operators &amp; flight departments
                  </h2>
                </div>
                <p className="font-mono text-xs text-slate-400 max-w-xs leading-relaxed">
                  Connor takes on a limited number of consulting engagements annually. All projects are handled personally — not delegated.
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6">
                <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#070C14]/70 p-7 sm:p-9 space-y-8 backdrop-blur-md transition-all duration-300 hover:border-[#C5A880]/40">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[11px] text-[#C5A880] uppercase tracking-widest">
                      <span>Safety &amp; Operations</span>
                      <span className="text-slate-500">[01]</span>
                    </div>

                    <div className="relative aspect-[16/8] w-full flex items-center justify-center select-none py-2">
                      <img
                        src="/images/jet.png"
                        alt="Safety & SMS Consulting"
                        className="relative z-10 max-h-full max-w-[85%] object-contain filter drop-shadow-[0_18px_22px_rgba(0,0,0,0.9)] transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/5 h-3 bg-[#C5A880]/15 blur-lg rounded-[100%] pointer-events-none" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F4F1EA]">
                        Safety &amp; SMS Consulting
                      </h3>
                      <p className="font-sans text-sm text-slate-300 font-light leading-relaxed">
                        Drawing on his safety committee role and NBAA CAM candidacy, Connor advises operators on building genuine safety culture.
                      </p>
                    </div>

                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-6 border-t border-white/10 font-mono text-slate-200">
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880] shrink-0" />
                      <span>SMS program review &amp; development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880] shrink-0" />
                      <span>Risk assessment frameworks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880] shrink-0" />
                      <span>Operational policy review</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880] shrink-0" />
                      <span>Part 135 compliance guidance</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#070C14]/70 p-7 sm:p-9 space-y-8 backdrop-blur-md transition-all duration-300 hover:border-[#C5A880]/40">
                  <div className="space-y-6">

                    {/* Visual Header Strip */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[11px] text-[#C5A880] uppercase tracking-widest">
                      <span>Charter &amp; Flight Department</span>
                      <span className="text-slate-500">[02]</span>
                    </div>

                    {/* Jet Asset Showcase */}
                    <div className="relative aspect-[16/8] w-full flex items-center justify-center select-none py-2">
                      <img
                        src="/images/hero-plan.png"
                        alt="Charter & Flight Department Advisory"
                        className="relative z-10 max-h-full max-w-[85%] object-contain filter drop-shadow-[0_18px_22px_rgba(0,0,0,0.9)] transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/5 h-3 bg-[#C5A880]/15 blur-lg rounded-[100%] pointer-events-none" />
                    </div>

                    {/* Narrative */}
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F4F1EA]">
                        Charter &amp; Flight Department Advisory
                      </h3>
                      <p className="font-sans text-sm text-slate-300 font-light leading-relaxed">
                        Helping companies evaluate, set up, or optimize their aviation program from operator selection to cost benchmarking.
                      </p>
                    </div>

                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-6 border-t border-white/10 font-mono text-slate-200">
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880] shrink-0" />
                      <span>Charter operator vetting &amp; selection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880] shrink-0" />
                      <span>Flight department setup &amp; structure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880] shrink-0" />
                      <span>Own vs. charter cost analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880] shrink-0" />
                      <span>Aircraft selection guidance</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <div className="px-2 mt-4">
          <section className="bg-white rounded-2xl text-left">
            <div className="mx-auto max-w-7xl p-8 sm:p-12 lg:p-16 space-y-12">

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end border-b border-[#D6CEBF]/80 pb-10">
                <div className="lg:col-span-7 space-y-3">
                  <div className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.25em] text-[#8C6D3F]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8C6D3F]" />
                    <span>The Operating Standard</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A1628] tracking-tight leading-[1.08]">
                    The standard doesn&apos;t change based on who&apos;s signing the check.
                  </h2>
                </div>

                <div className="lg:col-span-5">
                  <p className="font-sans text-sm sm:text-base text-[#4A5568] font-light leading-relaxed">
                    Every contract flight and consulting engagement receives the exact same rigorous flight-deck preparation, risk awareness, and operational discipline as Connor&apos;s full-time airline transport command.
                  </p>
                </div>
              </div>

              {/* Structured Criteria Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {operationalStandards.map((std, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl border border-[#D6CEBF] bg-white p-4 flex flex-col justify-between space-y-4 transition-all duration-300 hover:border-[#8C6D3F] hover:shadow-md hover:shadow-[#8C6D3F]/5"
                  >
                    <span className="font-mono text-[10px] text-[#8C6D3F] font-semibold">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-sm uppercase tracking-wider text-[#0A1628] font-medium leading-snug">
                      {std}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </UserLayout>
  );
}