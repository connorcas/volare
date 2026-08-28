import type { Metadata } from "next";
import UserLayout from "@/components/layouts/UserLayout";
import CredentialsSection from "@/components/section-components/landing/CredentialsSection";
import Hero from "@/components/section-components/landing/Hero";
import Services from "@/components/section-components/landing/Services";
import VolareDifference from "@/components/section-components/landing/VolareDifference";
import WhyVolare from "@/components/section-components/landing/WhyVolare";

export const metadata: Metadata = {
  title: "Volare Aviation | Worldwide Private Jet Charter & Aviation Advisory",
  description:
    "Pilot-commanded private jet charter, Part 135 airframe brokerage, and bespoke luxury travel advisory with worldwide coverage, international long-range flight operations, and direct pilot oversight.",
  keywords: [
    "Worldwide Private Jet Charter",
    "International Jet Brokerage",
    "Global Flight Operations",
    "Part 135 Jet Charter USA",
    "Private Jet Charter Canada",
    "Transatlantic Jet Charter",
    "Bombardier Global 7500 Charter",
    "Contract Pilot Services Worldwide",
    "Executive Aviation Advisory",
    "Virtuoso Luxury Travel Partner",
  ],
  openGraph: {
    title: "Volare Aviation | Worldwide Private Jet Charter & Pilot Advisory",
    description:
      "Direct Part 135 international flight command and luxury travel advisory orchestrated by an active Bombardier Global Captain across global routes.",
    url: "https://volareavi.com",
    siteName: "Volare Aviation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://volareavi.com/images/hero-plan.png",
        width: 1200,
        height: 630,
        alt: "Volare Aviation Worldwide Private Jet Charter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volare Aviation | Pilot-Led Global Jet Charter & Advisory",
    description:
      "Bespoke private jet charter, Part 135 safety auditing, and Virtuoso travel logistics across international and transatlantic destinations.",
    images: ["https://volareavi.com/images/hero-plan.png"],
  },
  alternates: {
    canonical: "https://volareavi.com",
    languages: {
      "x-default": "https://volareavi.com"
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

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AviationBusiness",
    name: "Volare Aviation",
    url: "https://volareavi.com",
    logo: "https://volareavi.com/logo.png",
    image: "https://volareavi.com/images/hero-plan.png",
    description:
      "Worldwide private jet charter, contract pilot solutions, and executive aviation advisory commanded by Captain Connor Casarella across global routes.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
    availableService: [
      {
        "@type": "Service",
        name: "Worldwide Private Jet Charter",
        serviceType: "Air Charter Service",
      },
      {
        "@type": "Service",
        name: "Contract Flight Operations & Pilot Services",
        serviceType: "Flight Crew Placement",
      },
      {
        "@type": "Service",
        name: "Aviation Consulting & Safety Advisory",
        serviceType: "Aviation Consulting",
      },
      {
        "@type": "Service",
        name: "Virtuoso Luxury Travel Coordination",
        serviceType: "Luxury Travel Concierge",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dallas",
      addressRegion: "TX",
      addressCountry: "US",
    },
    priceRange: "$$$$",
  };

  return (
    <UserLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="px-2">
        <Hero />
      </div>
      <Services />
      <div className="px-2">
        <WhyVolare />
      </div>
      <VolareDifference />
      <div className="px-2">
        <CredentialsSection />
      </div>
    </UserLayout>
  );
}