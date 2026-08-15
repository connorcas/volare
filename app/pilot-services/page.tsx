import { InteriorPage, ServiceList } from '@/components/volare-shell'

export default function PilotServicesPage() {
  return <InteriorPage eyebrow="Flight operations" title="Experience you can trust at altitude." description="Safe, disciplined, and world-class flight crew services for long-range business aircraft."><div><ServiceList items={['Contract captain services', 'Flight operations advisory', 'Aircraft acceptance flights', 'Operational leadership']} /></div><div className="flex flex-col gap-6 text-lg leading-8 text-slate"><p>Part 135 Captain — Bombardier Global XRS (BD-700)</p><p>NBAA Certified Aviation Manager candidate. LFPA board member. Based at Dallas Love Field.</p></div></InteriorPage>
}
