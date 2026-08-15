import UserLayout from '@/components/layouts/UserLayout'
import CredentialsSection from '@/components/section-components/landing/CredentialsSection'
import Hero from '@/components/section-components/landing/Hero'
import Services from '@/components/section-components/landing/Services'
import VolareDifference from '@/components/section-components/landing/VolareDifference'
import WhyVolare from '@/components/section-components/landing/WhyVolare'
import TravelPage from './travel/page'
import { Mail, ArrowUpRight, PhoneCall, Calendar, Sparkle, Sparkles } from "lucide-react";
import TravelSection from '@/components/section-components/landing/TravelSection'

export default function Page() {
  return (
    <UserLayout>
      <div className='px-2'>
        <Hero />
      </div>
      <Services />
      <div className='px-2'>
        <WhyVolare />
      </div>
      <VolareDifference />
      <div className='px-2'>
        <CredentialsSection />
      </div>
      <TravelSection />
    </UserLayout>
  )
};