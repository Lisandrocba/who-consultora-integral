"use client"

import dynamic from "next/dynamic"
import { LanguageToggle } from "@/components/language-toggle"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/hero-section"
import { I18nProvider } from "@/hooks/use-i18n"

// Dynamic imports para code splitting
const ServicesSection = dynamic(() => import("@/components/services-section").then(mod => ({ default: mod.ServicesSection })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-primary"></div></div>
})

const CompaniesSection = dynamic(() => import("@/components/companies-section").then(mod => ({ default: mod.CompaniesSection })), {
  loading: () => <div className="h-64 flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-primary"></div></div>
})

const GlobalPresenceSection = dynamic(() => import("@/components/global-presence-section").then(mod => ({ default: mod.GlobalPresenceSection })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-primary"></div></div>
})

const TeamSection = dynamic(() => import("@/components/team-section").then(mod => ({ default: mod.TeamSection })), {
  loading: () => <div className="h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-primary"></div></div>
})

const ContactSection = dynamic(() => import("@/components/contact-section").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-primary"></div></div>
})

const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="h-32 flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-primary"></div></div>
})

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
