import UserLayout from "@/components/layouts/UserLayout";
import BannerSection from "@/components/general-components/BannerSection";
import ContactForm from "@/components/section-components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Flight Operations & Advisory Desk | Volare Aviation",
  description:
    "Direct dispatch to Captain Connor Casarella. Request private jet charter proposals, contract pilot availability, and luxury Virtuoso travel itineraries.",
  keywords: [
    "Contact Volare Aviation",
    "Private Jet Charter Quote",
    "Captain Connor Casarella Contact",
    "Dallas Love Field Aviation Desk",
    "Contract Pilot Inquiry",
    "Aviation Advisory Contact",
    "Luxury Travel Desk Inquiries",
  ],
  openGraph: {
    title: "Contact Volare Aviation | Direct Flight Operations Desk",
    description:
      "Direct dispatch to Captain Connor Casarella. Pilot-level review, Part 135 airframe vetting, and luxury travel advisory requests.",
    url: "https://volareavi.com/contact",
    siteName: "Volare Aviation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://volareavi.com/images/hero-plan.png",
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
      "Direct dispatch to Captain Connor Casarella. 2-4 hour turnaround for private jet charters and luxury travel advisory.",
    images: ["https://volareavi.com/images/hero-plan.png"],
  },
  alternates: {
    canonical: "https://volareavi.com/contact",
    languages: {
      "x-default": "https://volareavi.com/contact",
      "en-US": "https://volareavi.com/en-us/contact",
      "en-CA": "https://volareavi.com/en-ca/contact",
      "en-GB": "https://volareavi.com/en-gb/contact",
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
    url: "https://volareavi.com/contact",
    description:
      "Contact Volare Aviation and Captain Connor Casarella for private jet charter inquiries, contract flight crew, and luxury travel itinerary coordination.",
    mainEntity: {
      "@type": "AviationBusiness",
      name: "Volare Aviation",
      telephone: "+1-214-000-0000",
      email: "Connor.Casarella@VolareAvi.com",
      url: "https://volareavi.com",
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
        contactType: "Flight Operations & Charter Desk",
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

            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </section>

      </div>
    </UserLayout>
  );
}