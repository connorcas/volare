import UserLayout from '@/components/layouts/UserLayout'
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
  return (
    <UserLayout>
      <div className="space-y-16 lg:space-y-24 pb-24">

        <div className='px-4'>
          <section className="p-4 rounded-xl">
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
                      href="mailto:connor.casarella@volareavi.com?subject=Inquiry%3A%20Connor%20Casarella"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A1628] px-8 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#B38E5D] transition-colors"
                    >
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

        <section className="px-4">
          <div className="relative overflow-hidden rounded-xl bg-[#0A1628] text-[#F4F1EA] border border-[#C5A880]/20 p-10 sm:p-16 lg:p-20 shadow-2xl">
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

        <section className="mx-auto max-w-7xl px-4 space-y-12">
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