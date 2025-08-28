"use client"

import { LanguageToggle } from "@/components/language-toggle"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { CompaniesSection } from "@/components/companies-section"
import { GlobalPresenceSection } from "@/components/global-presence-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="absolute top-4 right-4 z-50">
        <LanguageToggle />
      </div>

      <HeroSection />
      <ServicesSection />
      <div id="companies">
        <CompaniesSection />
      </div>
      <div id="presence">
        <GlobalPresenceSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />

      <WhatsAppButton />
    </main>
  )
}
