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
              <a
                href="https://www.linkedin.com/company/who-consultora-integral/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-secondary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/whoconsultoraintegral/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-secondary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063522880814"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-secondary transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Logo */}
          <Image
            loading="lazy"
            src="/logo-who.png"
            alt="Who? Consultora Logo"
            width={160}
            height={160}
            sizes="160px"
            className="w-[10rem] mx-auto animate-fade-in delay-500"
          />

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">{t("contactInfo")}</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <a
                href="mailto:info@whoconsultoraintegral.com.ar"
                className="hover:text-brand-secondary transition-colors block"
              >
                info@whoconsultoraintegral.com.ar
              </a>
             <a href="https://wa.me/5493517502319" target="_blank">
                +54 9 351 750-2319
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Who? Consultora Integral. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
