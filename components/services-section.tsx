"use client"

import { useI18n } from "@/hooks/use-i18n"
import CarouselSection from "./carousel-section"

export function ServicesSection() {
  const { t } = useI18n()

  return (
    <section id="services" className="py-20">
      <div>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("servicesTitle")} <span className="text-brand-primary">{t("servicesHighlight")}</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
        </div>

        <CarouselSection />
      </div>
    </section>
  )
}
