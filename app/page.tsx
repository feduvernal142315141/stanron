import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProcessTimeline from "@/components/process-timeline"
import PastProjectsSection from "@/components/past-projects-section"
import AboutStanron from "@/components/about-stanron"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import LocationSection from "@/components/location-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessTimeline />
      <PastProjectsSection />
      <AboutStanron />
      <TestimonialsSection />
      <FAQSection />
      <LocationSection />
      <ContactSection />
    </>
  )
}
