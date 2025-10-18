import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import LogoCloud from '@/components/LogoCloud'
import Benefits from '@/components/Benefits'
import FeaturesCarousel from '@/components/FeaturesCarousel'
import SpecificationsTable from '@/components/SpecificationsTable'
import Testimonial from '@/components/Testimonial'
import HowItWorks from '@/components/HowItWorks'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <LogoCloud />
      <Benefits />
      <FeaturesCarousel />
      <SpecificationsTable />
      <Testimonial />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}
