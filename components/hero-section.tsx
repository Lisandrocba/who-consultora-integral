"use client"

import { Button } from "@/components/ui/button"
import { useI18n } from "@/hooks/use-i18n"
import Image from "next/image"

export function HeroSection() {
  const { t } = useI18n()

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-dark-custom">
        {/* Geometric shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-purple/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        
      </div>

      <div className="relative flex flex-col-reverse gap-20 z-10 container mx-auto px-4 text-center text-white xl:flex xl:flex-row xl:items-center xl:gap-0 xl:justify-between">
        <div className="max-w-4xl mx-auto xl:flex xl:flex-col xl:items-start justify-center xl:text-left animate-arriba-abajo">
          <h1 className="text-4xl text-center md:text-5xl font-bold mb-4 xl:text-nowrap animate-fade-in">
            {t("heroTitle")} <span className="text-brand-secondary">{t("heroSubtitle")}</span>
          </h1>

          <p className="text-xl md:text-3xl mb-8 text-gray-300 animate-fade-in delay-300">{t("heroDescription")}</p>

          <Button
            onClick={scrollToServices}
            size="lg"
            className="bg-chart-3 mb-5 md:mb-0 hover:bg-chart-4 cursor-pointer text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
          >
            {t("seeServices")}
          </Button>
        </div>

        {/* Logo section */}
        <Image 
          priority
          src="/logo.svg" 
          alt="Who? Consultora Logo" 
          width={480} 
          height={480} 
          sizes="(max-width: 768px) 256px, 480px"
          className="w-64 m-auto md:w-[30rem] md:-translate-y-5 animate-der-izq" 
        />
      </div>
    </section>
  )
}
