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
import { I18nProvider } from "@/hooks/use-i18n"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <I18nProvider>
        <div className="absolute top-4 right-4 z-50">
          <LanguageToggle />
        </div>

        <HeroSection />
        <ServicesSection />
        <div id="presence">
          <GlobalPresenceSection />
        </div>
        <div id="companies">
          <CompaniesSection />
        </div>
        <div id="team">
          <TeamSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />

        <WhatsAppButton />
      </I18nProvider>
    </main>
  )
}
