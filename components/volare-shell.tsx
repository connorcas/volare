'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Plane, X } from 'lucide-react'

export const navItems = [
  { label: 'Travel Advisory', href: '/travel' },
  { label: 'Private Charter', href: '/charter' },
  { label: 'Pilot Services', href: '/pilot-services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function VolareHeader() {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur-md">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
      <Link href="/" className="flex items-center gap-3" aria-label="Volare Aviation home"><span className="flex size-9 items-center justify-center border border-gold/70 text-gold"><Plane className="size-4 -rotate-12" strokeWidth={1.4} /></span><span className="font-sans text-[11px] font-semibold tracking-[0.22em] text-navy">VOLARE <span className="text-gold">AVIATION</span></span></Link>
      <nav className="hidden items-center gap-7 lg:flex">{navItems.map((item) => <Link key={item.href} href={item.href} className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-navy/65 hover:text-gold">{item.label}</Link>)}</nav>
      <div className="flex items-center gap-3"><Link href="/contact" className="hidden h-10 items-center bg-gold px-5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-navy hover:bg-gold/90 md:inline-flex">Begin a conversation</Link><button className="flex size-10 items-center justify-center lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
    </div>
    {open && <nav className="flex flex-col gap-5 border-t border-navy/10 bg-white px-5 py-6 lg:hidden">{navItems.map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} className="font-sans text-xs font-semibold uppercase tracking-[0.16em]">{item.label}</Link>)}</nav>}
  </header>
}

export function VolareFooter() {
  return <footer className="bg-navy px-5 py-16 text-white md:px-8"><div className="mx-auto max-w-7xl"><div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between"><div><Link href="/" className="flex items-center gap-3"><span className="flex size-9 items-center justify-center border border-gold/70 text-gold"><Plane className="size-4 -rotate-12" strokeWidth={1.4} /></span><span className="font-sans text-[11px] font-semibold tracking-[0.22em]">VOLARE <span className="text-gold">AVIATION</span></span></Link><p className="mt-6 max-w-xs text-sm leading-6 text-white/50">From runway to resort, travel with the perspective of a pilot.</p></div><div className="flex flex-wrap gap-x-8 gap-y-3">{navItems.map((item) => <Link key={item.href} href={item.href} className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55 hover:text-gold">{item.label}</Link>)}</div></div><div className="mt-16 border-t border-white/10 pt-7 text-[10px] uppercase tracking-[0.16em] text-white/35">© 2025 Volare Aviation Services · Virtuoso member · Powered by Fora</div></div></footer>
}

export function InteriorShell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-ivory text-navy"><VolareHeader />{children}<VolareFooter /></main>
}

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  if (submitted) return <div className="flex min-h-64 flex-col items-center justify-center gap-4 text-center"><span className="flex size-12 items-center justify-center rounded-full bg-gold text-navy">✓</span><h3 className="font-serif text-3xl">Consider it in motion.</h3><p className="max-w-sm text-sm leading-6 text-slate">Thank you. Connor&apos;s team will be in touch shortly.</p></div>
  return <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="flex flex-col gap-5"><div className="grid gap-5 md:grid-cols-2"><label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.18em]">Your name<input required className="field" placeholder="Full name" /></label><label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.18em]">Email address<input required type="email" className="field" placeholder="you@example.com" /></label></div><label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.18em]">How can we help?<textarea required className="field min-h-32 resize-none" placeholder="Tell us about your plans..." /></label><button className="h-12 bg-gold font-sans text-xs font-semibold uppercase tracking-[0.16em] text-navy hover:bg-gold/90">Send inquiry →</button></form>
}

export function InteriorPage({ eyebrow, title, description, children, form = false }: { eyebrow: string; title: string; description: string; children?: React.ReactNode; form?: boolean }) {
  return <InteriorShell><section className="bg-navy px-5 pb-20 pt-44 text-white md:px-8 md:pb-28"><div className="mx-auto max-w-7xl"><p className="mb-6 flex items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.26em] text-gold"><span className="h-px w-8 bg-gold" /> {eyebrow}</p><h1 className="max-w-4xl font-sans text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-8xl">{title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">{description}</p></div></section><section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:px-8 md:py-32 lg:grid-cols-[1.1fr_0.9fr]">{children ?? <div className="flex flex-col gap-6 text-lg leading-8 text-slate"><p>Every detail is considered with the discipline of aviation and the ease of true hospitality.</p><p>From the first conversation to the final arrival, Volare brings clarity, discretion, and a pilot&apos;s perspective to the journey.</p></div>}{form && <div className="bg-white p-8 md:p-12"><InquiryForm /></div>}</section></InteriorShell>
}

export function ServiceList({ items }: { items: string[] }) {
  return <ul className="flex flex-col gap-5">{items.map((item) => <li key={item} className="border-b border-navy/10 pb-5 font-sans text-2xl font-semibold">{item}</li>)}</ul>
}
