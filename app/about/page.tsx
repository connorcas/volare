import UserLayout from '@/components/layouts/UserLayout'
import { WHATSAPP_LINK } from '@/constants/common.constant';
import {
  Award,
  BookOpenText,
  Building,
  GraduationCap,
  Plane,
  Scale,
  Search,
  ShieldCheck,
  ArrowRight
} from 'lucide-react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Captain Connor Casarella | Founder & Part 135 Pilot | Volare Aviation",
  description:
    "Meet Captain Connor Casarella, active Bombardier Global Part 135 airline transport pilot, NBAA CAM Candidate, and Virtuoso luxury travel advisor based at Dallas Love Field (DAL).",
  keywords: [
    "Captain Connor Casarella",
    "Bombardier Global Captain",
    "Part 135 Captain Dallas",
    "Volare Aviation Founder",
    "NBAA CAM Candidate",
    "Dallas Love Field Pilot Association",
    "Fora Certified Travel Advisor",
    "Marquis Who's Who Aviation",
  ],
  openGraph: {
    title: "About Captain Connor Casarella | Pilot & Advisor | Volare",
    description:
      "Active airline transport pilot and founder of Volare Aviation. Commanding international long-haul routes on the Bombardier Global with direct advisory expertise.",
    url: "https://volareavi.com/about",
    siteName: "Volare Aviation",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "https://volareavi.com/images/connorhs.jpg",
        width: 800,
        height: 1000,
        alt: "Captain Connor Casarella - Founder of Volare Aviation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Captain Connor Casarella | Volare Aviation",
    description:
      "Built by someone who flies for a living. Part 135 flight command and Virtuoso luxury travel advisory.",
    images: ["https://volareavi.com/images/connorhs.jpg"],
  },
  alternates: {
    canonical: "https://volareavi.com/about",
    languages: {
      "x-default": "https://volareavi.com/about"
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

const credentials = [
  {
    icon: <Award className="h-7 w-7 text-[#C5A880]" />,
    category: "Recognition",
    title: "Marquis Who's Who in America",
    description: "Selected for inclusion among the most accomplished professionals in the United States.",
  },
  {
    icon: <Plane className="h-7 w-7 text-[#C5A880]" />,
    category: "Aviation",
    title: "Part 135 Captain",
    description: "Bombardier Global 7500 · Solairus Aviation · International operations.",
  },
  {
    icon: <Search className="h-7 w-7 text-[#C5A880]" />,
    category: "Travel",
    title: "Fora Certified Advisor",
    description: "Virtuoso member · 175,000+ bookable properties · Preferred partner perks.",
  },
  {
    icon: <Building className="h-7 w-7 text-[#C5A880]" />,
    category: "Leadership",
    title: "LFPA Board Member",
    description: "Love Field Pilots Association · Dallas Love Field · Membership & community.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-[#C5A880]" />,
    category: "Safety",
    title: "Safety Committee",
    description: "Solairus Aviation · SMS oversight · Risk management.",
  },
  {
    icon: <Scale className="h-7 w-7 text-[#C5A880]" />,
    category: "Designation",
    title: "NBAA CAM Candidate",
    description: "Certified Aviation Manager · National Business Aviation Association.",
  },
  {
    icon: <BookOpenText className="h-7 w-7 text-[#C5A880]" />,
    category: "Flight Training",
    title: "Aviator College",
    description: "Professional flight training — the foundation of Connor's aviation career.",
  },
  {
    icon: <GraduationCap className="h-7 w-7 text-[#C5A880]" />,
    category: "Academic",
    title: "Everglades University",
    description: "Bachelor of Science · Aviation & Aerospace — Flight Operations.",
  },
];

const AboutUs = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Connor Casarella",
    jobTitle: "Part 135 Captain & Founder",
    worksFor: {
      "@type": "AviationBusiness",
      name: "Volare Aviation",
      url: "https://volareavi.com",
    },
    url: "https://volareavi.com/about",
    image: "https://volareavi.com/images/connorhs.jpg",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Everglades University",
      },
      {
        "@type": "EducationalOrganization",
        name: "Aviator College",
      },
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Love Field Pilots Association (LFPA)",
      },
      {
        "@type": "Organization",
        name: "National Business Aviation Association (NBAA)",
      },
    ],
    award: "Marquis Who's Who in America",
    description:
      "Active airline transport pilot commanding Bombardier Global business jets, SMS safety committee member, and founder of Volare Aviation.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dallas",
      addressRegion: "TX",
      addressCountry: "US",
    },
  };

  return (
    <UserLayout>
      <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className='px-2'>
          <section className="p-4 md:p-12 rounded-2xl bg-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                <div className="lg:col-span-5 space-y-6">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#D6CEBF] bg-[#F0EBE1] shadow-sm">
                    <img
                      src="/images/connorhs.jpg"
                      alt="Connor Casarella, Pilot & Advisor"
                      className="h-full w-full object-cover transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest bg-white/90 border border-[#D6CEBF] px-3 py-1 text-[#0A1628]">
                      Dallas Love Field (DAL)
                    </div>
                  </div>

                  <div className="divide-y divide-[#D6CEBF] border-y border-[#D6CEBF] font-mono text-xs">
                    <div className="py-2.5 flex justify-between">
                      <span className="text-gray-600 uppercase tracking-wider">Captain</span>
                      <span className="text-[#0A1628] font-medium">Connor Casarella</span>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <span className="text-gray-600 uppercase tracking-wider">Airframe</span>
                      <span className="text-[#0A1628] font-medium">Bombardier Global 7500</span>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <span className="text-gray-600 uppercase tracking-wider">Certification</span>
                      <span className="text-[#0A1628] font-medium">Part 135 Captain · NBAA CAM</span>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <span className="text-gray-600 uppercase tracking-wider">Recognition</span>
                      <span className="text-[#8C6D3F] font-medium">Marquis Who&apos;s Who</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-8 lg:pl-4">
                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8C6D3F]">
                      The Pilot Behind Volare
                    </span>
                    <h1 className="font-serif text-4xl sm:text-6xl lg:text-6xl font-semibold tracking-tight text-[#0A1628] leading-[1.08]">
                      Built by someone <br />
                      <span className="italic text-[#B38E5D]">who flies for a living.</span>
                    </h1>
                  </div>

                  <div className="space-y-5 font-sans text-sm sm:text-base text-slate-700 font-light leading-relaxed">
                    <p>
                      Connor Casarella is an active airline transport pilot, luxury travel advisor, and the founder of Volare Travel Services. Operating out of Dallas Love Field, Connor commands international long-haul routes on the Bombardier Global 7500.
                    </p>
                    <p>
                      Unlike conventional brokers and travel advisors who rely on secondary third-party descriptions, Connor approaches every mission from the flight deck—evaluating runway performance, operator safety cultures, and luxury accommodations first-hand.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6">
                    <a
                      href={WHATSAPP_LINK}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A1628] px-8 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#8C6D3F] transition-colors">
                      <span>Inquire Directly</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <span className="font-mono text-xs text-gray-600 uppercase tracking-widest">
                      Worldwide Missions · Bespoke Travel
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="px-2 mt-4">
          <div className="relative overflow-hidden rounded-xl bg-[#0A1628] text-[#F4F1EA] border border-[#C5A880]/20 p-10 sm:p-16 lg:p-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A88015_1px,transparent_1px),linear-gradient(to_bottom,#C5A88015_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 h-[350px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C5A880]/10 blur-[130px] pointer-events-none" />
            <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A880]">
                Genuine Expertise
              </span>
              <blockquote className="font-serif text-2xl sm:text-4xl lg:text-5xl font-light italic leading-[1.15] text-[#F4F1EA]">
                “Most travel advisors have never set foot in a cockpit. Most charter brokers have never personally flown the routes they're selling. Connor has done both — for years.”
              </blockquote>
              <p className="font-sans text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed pt-2">
                That's not a marketing line. Every recommendation comes from genuine experience — whether it's the best routing into Geneva, which operator to trust, or which London hotel earns a second stay.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 space-y-12 mt-20">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6D3F]">
              Professional Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A1628]">
              Credentials & <span className="italic font-normal text-[#B38E5D]">Roles</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-500 font-light pt-1">
              What Connor brings to every engagement
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {credentials.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B38E5D] hover:shadow-xl hover:shadow-[#B38E5D]/10 min-h-[220px]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#8C6D3F]">
                      {item.category}
                    </span>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-[#0A1628]">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-[13px] text-slate-600 font-light mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </UserLayout>
  )
}

export default AboutUs;