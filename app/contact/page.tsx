import { Metadata } from "next";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import UserLayout from "@/components/layouts/UserLayout";
import BannerSection from "@/components/general-components/BannerSection";
import { WHATSAPP_LINK } from "@/constants/common.constant";

export const metadata: Metadata = {
  title: "Contact Flight Operations & Advisory Desk | Volare Aviation",
  description:
    "Direct dispatch to Captain Connor Casarella via email or WhatsApp. Request private jet charter proposals, contract pilot availability, and luxury Virtuoso travel itineraries.",
  keywords: [
    "Contact Volare Aviation",
    "Private Jet Charter WhatsApp",
    "Captain Connor Casarella Contact",
    "Dallas Love Field Aviation Desk",
    "Contract Pilot Inquiry",
    "Aviation Advisory Contact",
  ],
  openGraph: {
    title: "Contact Volare Aviation | Direct Flight Operations Desk",
    description:
      "Direct dispatch to Captain Connor Casarella. Inquiries receive pilot-level operational review and rapid turnaround.",
    url: "https://www.volareavi.com/contact",
    siteName: "Volare Aviation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.volareavi.com/images/hero-plan.png",
        width: 1200,
        height: 630,
        alt: "Volare Aviation Contact Flight Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Flight Operations Desk | Volare Aviation",
    description:
      "Direct dispatch to Captain Connor Casarella via WhatsApp and Email. 2-4 hour turnaround.",
    images: ["https://www.volareavi.com/images/hero-plan.png"],
  },
  alternates: {
    canonical: "https://www.volareavi.com/contact",
    languages: {
      "x-default": "https://www.volareavi.com/contact"
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

export default function ContactUs() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Volare Aviation",
    url: "https://www.volareavi.com/contact",
    description:
      "Direct communication channels for charter quotes, flight ops, and luxury itinerary planning with Captain Connor Casarella.",
    mainEntity: {
      "@type": "AviationBusiness",
      name: "Volare Aviation",
      email: "Connor.Casarella@VolareAvi.com",
      url: "https://www.volareavi.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Dallas Love Field (DAL)",
        addressLocality: "Dallas",
        addressRegion: "TX",
        postalCode: "75235",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Direct Flight Desk",
        email: "Connor.Casarella@VolareAvi.com",
        availableLanguage: ["English"],
        areaServed: "Worldwide",
      },
    },
  };

  return (
    <UserLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen text-[#0A1628]">
        <BannerSection
          slogan="Direct Flight Operations & Travel Desk"
          title={"Tell Us About Your"}
          italicTitle={"Next Trip."}
          subTitle={"Direct dispatch to Captain Connor Casarella. Inquiries receive pilot-level operational review, rigorous operator vetting, and curated luxury access."}
        />

        <section className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Profile Section */}
            <div className="lg:col-span-5 space-y-4">
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
                    <span className="text-gray-600">Direct Email</span>
                    <a
                      href="mailto:Connor.Casarella@VolareAvi.com"
                      className="text-[#0A1628] font-medium hover:text-[#B38E5D] transition-colors"
                    >
                      Connor.Casarella@VolareAvi.com
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

            {/* Right Simple Contact Buttons */}
            <div className="lg:col-span-7 space-y-6 pt-2">
              <div className="space-y-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6D3F]">
                  Direct Dispatch
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#0A1628]">
                  Start a conversation.
                </h2>
                <p className="font-sans text-sm text-slate-600 font-light leading-relaxed">
                  Reach out directly for charter quotes, contract crew coverage, or luxury hotel bookings. Every inquiry goes straight to Connor.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A1628] px-8 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#8C6D3F] transition-colors shadow-sm"
                >
                  <MessageSquare className="h-4 w-4 text-[#C5A880]" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href="mailto:Connor.Casarella@VolareAvi.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D6CEBF] bg-white px-8 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#0A1628] hover:border-[#8C6D3F] transition-colors shadow-sm"
                >
                  <Mail className="h-4 w-4 text-[#8C6D3F]" />
                  <span>Send Direct Email</span>
                </a>
              </div>
            </div>

          </div>
        </section>

      </div>
    </UserLayout>
  );
}