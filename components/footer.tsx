"use client"

import { useI18n } from "@/hooks/use-i18n"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-dark-custom text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Social Networks */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">{t("socialNetworks")}</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:text-brand-secondary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-brand-secondary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-brand-secondary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <Image src="/logo-who.png" alt="Who? Consultora Logo" width={800} height={800} className="w-[10rem] mx-auto animate-fade-in delay-500" />

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">{t("contactInfo")}</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>info@whoconsultoraintegral.com.ar</p>
              <p>+54 11 1234 5678</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Who? Consultora Integral. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
