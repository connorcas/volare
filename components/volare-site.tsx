'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronDown,
  Globe2,
  Mail,
  Menu,
  Plane,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'Travel Advisory', href: '/travel' },
  { label: 'Private Charter', href: '/charter' },
  { label: 'Pilot Services', href: '/pilot-services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function BrandMark() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Volare Aviation home">
      <span className="flex size-9 items-center justify-center border border-gold/70 text-gold">
        <Plane className="size-4 -rotate-12" strokeWidth={1.4} />
      </span>
      <span className="font-sans text-[11px] font-semibold tracking-[0.22em] text-navy">
        VOLARE <span className="text-gold">AVIATION</span>
      </span>
    </a>
  )
}

function SectionIntro({ eyebrow, title, children, light = false }: { eyebrow: string; title: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`max-w-2xl ${light ? 'text-white' : 'text-navy'}`}>
      <p className="mb-5 flex items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.26em] text-gold">
        <span className="h-px w-8 bg-gold" /> {eyebrow}
      </p>
      <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-6xl text-balance">{title}</h2>
      <p className={`mt-6 max-w-xl font-sans text-base leading-7 md:text-lg ${light ? 'text-white/65' : 'text-slate'}`}>{children}</p>
    </div>
  )
}

function InquiryForm({ kind }: { kind: 'travel' | 'charter' | 'contact' }) {
  const [submitted, setSubmitted] = useState(false)
  if (submitted) return <div className="flex min-h-64 flex-col items-center justify-center gap-4 text-center"><span className="flex size-12 items-center justify-center rounded-full bg-gold text-navy"><Check /></span><h3 className="font-serif text-3xl text-navy">Consider it in motion.</h3><p className="max-w-sm text-sm leading-6 text-slate">Thank you. Connor&apos;s team will be in touch shortly.</p></div>
  const isContact = kind === 'contact'
  return (
    <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="flex flex-col gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy">Your name<input required className="field" placeholder="Full name" /></label>
        <label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy">Email address<input required type="email" className="field" placeholder="you@example.com" /></label>
      </div>
      {!isContact && <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy">{kind === 'travel' ? 'Destination' : 'Departure airport'}<input required className="field" placeholder={kind === 'travel' ? 'Where will you go?' : 'ICAO / IATA code'} /></label>
        <label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy">{kind === 'travel' ? 'Travel dates' : 'Destination'}<input required className="field" placeholder={kind === 'travel' ? 'Select dates' : 'ICAO / IATA code'} /></label>
      </div>}
      <label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy">How can we help?<textarea required className="field min-h-28 resize-none" placeholder={isContact ? 'Tell us a little about your plans...' : 'Preferences, timing, and anything else we should know...'} /></label>
      <Button type="submit" className="h-12 w-full rounded-none bg-gold font-sans text-xs font-semibold uppercase tracking-[0.16em] text-navy hover:bg-gold/90">Send inquiry <ArrowRight data-icon="inline-end" /></Button>
    </form>
  )
}

export function VolareSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-ivory text-navy">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8"><BrandMark /><nav className="hidden items-center gap-7 lg:flex">{navItems.map((item) => <a key={item.href} href={item.href} className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-navy/65 transition-colors hover:text-gold">{item.label}</a>)}</nav><div className="flex items-center gap-3"><a href="#contact" className="hidden h-10 items-center rounded-none bg-gold px-5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-navy hover:bg-gold/90 md:inline-flex">Begin a conversation</a><button className="flex size-10 items-center justify-center lg:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div></div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-navy/10 bg-white px-5 py-6 lg:hidden">{navItems.map((item) => <a onClick={() => setMenuOpen(false)} key={item.href} href={item.href} className="font-sans text-xs font-semibold uppercase tracking-[0.16em]">{item.label}</a>)}</nav>}
      </header>

      <section className="relative flex min-h-[760px] items-end bg-navy pt-20 md:min-h-[850px]"><div className="absolute inset-0"><img src="/volare-hero.png" alt="Private jet on a golden runway" className="size-full object-cover object-center opacity-65" /><div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" /></div><div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 md:px-8 md:pb-28"><div className="max-w-3xl"><p className="mb-7 flex items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-gold"><span className="h-px w-10 bg-gold" /> From runway to resort</p><h1 className="max-w-3xl font-serif text-6xl leading-[0.92] tracking-[-0.05em] text-white md:text-8xl">Built by a pilot.<br /><em className="text-gold">Designed for travelers.</em></h1><p className="mt-8 max-w-xl font-sans text-lg leading-8 text-white/70">Bespoke travel advisory and private jet charter curated by an active Bombardier Global 6000 captain.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#charter" className="inline-flex h-12 items-center justify-center gap-2 rounded-none bg-gold px-7 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-navy hover:bg-gold/90">Request charter quote <ArrowRight className="size-4" /></a><a href="#travel" className="inline-flex h-12 items-center justify-center rounded-none border border-white/40 bg-transparent px-7 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-white hover:text-navy">Plan your travel</a></div></div></div><div className="absolute bottom-7 right-8 hidden items-center gap-3 text-white/50 md:flex"><span className="font-sans text-[9px] uppercase tracking-[0.2em]">Scroll to explore</span><ChevronDown className="size-4" /></div></section>

      <section className="border-b border-navy/10 bg-white"><div className="mx-auto grid max-w-7xl divide-y divide-navy/10 px-5 py-0 md:grid-cols-4 md:divide-x md:divide-y-0 md:px-8">{[['10+', 'Years professional aviation'], ['175k+', 'Virtuoso bookable hotels'], ['Global', 'Worldwide charter network'], ['$0', 'Added cost for perks']].map(([number, label]) => <div key={label} className="flex items-center gap-4 py-7 md:flex-col md:items-start md:gap-2 md:px-8 md:py-10 first:md:pl-0"><span className="font-serif text-4xl text-gold">{number}</span><span className="max-w-32 font-sans text-[10px] font-semibold uppercase leading-5 tracking-[0.12em] text-slate">{label}</span></div>)}</div></section>

      <section className="bg-ivory px-5 py-24 md:px-8 md:py-36"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_2fr] md:items-center"><p className="font-serif text-3xl leading-tight text-navy md:text-4xl">The difference is perspective.</p><blockquote className="border-l-2 border-gold pl-7 font-serif text-3xl leading-tight tracking-[-0.02em] text-navy md:text-5xl">“Most travel advisors have never set foot in a cockpit. Most charter brokers have never personally flown the routes they&apos;re selling. Connor has done both — for years.”</blockquote></div></section>

      <section id="travel" className="scroll-mt-20 bg-white px-5 py-24 md:px-8 md:py-36"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="Travel advisory" title="Luxury travel, elevated by expertise.">Hotels, itineraries, and bespoke experiences curated by someone who has traveled the world professionally.</SectionIntro><div className="mt-16 grid gap-5 md:grid-cols-2"><article className="border border-navy/10 bg-ivory p-8 md:p-10"><Sparkles className="size-7 text-gold" strokeWidth={1.2} /><h3 className="mt-8 font-serif text-3xl">Virtuoso &amp; Fora perks</h3><p className="mt-4 leading-7 text-slate">Room upgrades, complimentary breakfast, resort credits, and VIP treatment at no extra cost.</p></article><article className="border border-navy/10 bg-ivory p-8 md:p-10"><CalendarDays className="size-7 text-gold" strokeWidth={1.2} /><h3 className="mt-8 font-serif text-3xl">Custom itinerary planning</h3><p className="mt-4 leading-7 text-slate">Tailored global journeys built with flight-crew precision, from first departure to final detail.</p></article></div><div className="mt-16 grid gap-10 border-t border-navy/10 pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Your next chapter</p><h3 className="font-serif text-4xl leading-tight">Where will you go from here?</h3></div><div><InquiryForm kind="travel" /></div></div></div></section>

      <section id="charter" className="scroll-mt-20 bg-navy px-5 py-24 text-white md:px-8 md:py-36"><div className="mx-auto max-w-7xl"><SectionIntro light eyebrow="Private charter" title="Private jet charter, curated by a working pilot.">Direct access to safety-vetted operators, aircraft selection, and global charter networks.</SectionIntro><div className="mt-16 grid gap-px bg-white/15 md:grid-cols-3">{[['01', 'Light & midsize jets', 'Agile, comfortable aircraft for shorter routes and smaller groups.'], ['02', 'Super-midsize & heavy jets', 'More cabin, more range, and the comfort to make long-haul feel effortless.'], ['03', 'Ultra long range', 'Bombardier Global and Gulfstream aircraft for the world without boundaries.']].map(([number, title, copy]) => <div key={number} className="bg-navy p-8 md:p-10"><span className="font-sans text-[10px] tracking-[0.2em] text-gold">{number}</span><h3 className="mt-16 font-serif text-3xl">{title}</h3><p className="mt-4 leading-7 text-white/60">{copy}</p><ArrowRight className="mt-10 size-5 text-gold" /></div>)}</div><div className="mt-20 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><div><h3 className="font-serif text-4xl">Let&apos;s find the right aircraft.</h3><p className="mt-5 leading-7 text-white/60">Tell us what you&apos;re imagining. We&apos;ll handle the rest with discretion and precision.</p></div><div className="bg-white p-8 md:p-10"><InquiryForm kind="charter" /></div></div></div></section>

      <section id="pilot-services" className="scroll-mt-20 bg-ivory px-5 py-24 md:px-8 md:py-36"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-28"><div><SectionIntro eyebrow="Flight operations" title="Contract pilot & operational leadership.">Safe, disciplined, and world-class flight crew services for long-range business aircraft.</SectionIntro><ul className="mt-12 flex flex-col gap-5">{['Contract captain services', 'Flight operations advisory', 'Aircraft acceptance flights'].map((item) => <li key={item} className="flex items-center gap-4 border-b border-navy/10 pb-5 font-serif text-2xl"><span className="flex size-7 items-center justify-center rounded-full border border-gold text-gold"><Check className="size-4" /></span>{item}</li>)}</ul></div><div className="border border-navy/10 bg-white p-8 md:p-12"><ShieldCheck className="size-8 text-gold" strokeWidth={1.2} /><p className="mt-12 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Pilot qualifications</p><h3 className="mt-4 font-serif text-4xl">Experience you can trust at altitude.</h3><div className="mt-8 flex flex-col gap-4 text-sm leading-6 text-slate"><p>Part 135 Captain — Bombardier Global 7500 (BD-700)</p><p>NBAA Certified Aviation Manager (CAM) Candidate</p><p>LFPA Board Member · Based at Dallas Love Field (KDAL)</p></div></div></div></section>

      <section id="about" className="scroll-mt-20 bg-white px-5 py-24 md:px-8 md:py-36"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center"><div className="relative aspect-[4/5] overflow-hidden bg-navy"><div className="absolute inset-8 border border-gold/40" /><div className="flex size-full items-center justify-center"><Plane className="size-28 text-gold/60" strokeWidth={0.7} /></div><span className="absolute bottom-7 left-8 font-sans text-[10px] uppercase tracking-[0.22em] text-white/60">Dallas · Texas · KDAL</span></div><div><SectionIntro eyebrow="About Volare" title="Bridging the cockpit and luxury hospitality.">Meet Connor Casarella — aviator, entrepreneur, and luxury travel advisor. Volare was built on a simple belief: the best journeys are shaped by people who understand both the route and the reason for taking it.</SectionIntro><div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">{[['NBAA', Award], ['PART 135', BadgeCheck], ['LFPA', Globe2], ['VIRTUOSO', Sparkles], ['FORA', ShieldCheck]].map(([label, Icon]) => { const IconComponent = Icon as typeof Award; return <div key={label as string} className="flex min-h-24 flex-col justify-between border border-navy/10 p-4"><IconComponent className="size-5 text-gold" strokeWidth={1.3} /><span className="font-sans text-[9px] font-semibold tracking-[0.16em] text-navy">{label as string}</span></div> })}</div></div></div></section>

      <section id="contact" className="scroll-mt-20 bg-ivory px-5 py-24 md:px-8 md:py-36"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-28"><div><SectionIntro eyebrow="Contact" title="Your next journey starts here.">Tell us what you&apos;re planning, and we&apos;ll bring the expertise to make it extraordinary.</SectionIntro><div className="mt-12 flex flex-col gap-6 border-t border-navy/10 pt-8"><a href="mailto:connor.casarella@volareavi.com" className="flex items-center gap-4 text-sm hover:text-gold"><Mail className="size-5 text-gold" /> connor.casarella@volareavi.com</a><p className="flex items-center gap-4 text-sm"><Plane className="size-5 text-gold" /> Dallas Love Field (KDAL), Texas</p></div></div><div className="bg-white p-8 md:p-12"><InquiryForm kind="contact" /></div></div></section>

      <footer className="bg-navy px-5 py-16 text-white md:px-8"><div className="mx-auto max-w-7xl"><div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between"><div><div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center border border-gold/70 text-gold"><Plane className="size-4 -rotate-12" strokeWidth={1.4} /></span><span className="font-sans text-[11px] font-semibold tracking-[0.22em]">VOLARE <span className="text-gold">AVIATION</span></span></div><p className="mt-6 max-w-xs text-sm leading-6 text-white/50">From runway to resort, travel with the perspective of a pilot.</p></div><div className="flex flex-wrap gap-x-8 gap-y-3">{navItems.map((item) => <a key={item.href} href={item.href} className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55 hover:text-gold">{item.label}</a>)}</div></div><div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-[10px] uppercase tracking-[0.16em] text-white/35 md:flex-row md:justify-between"><span>© 2025 Volare Aviation Services</span><span>Virtuoso member · Powered by Fora · NBAA · LFPA</span></div></div></footer>
    </main>
  )
}

export default VolareSite

