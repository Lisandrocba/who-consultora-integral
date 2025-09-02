"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/animated-counter"
import { useI18n } from "@/hooks/use-i18n"
import Image from "next/image"

export function GlobalPresenceSection() {
  const { t } = useI18n()

  return (
    <section className="py-20 bg-dark-custom">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("presenceTitle")} <span className="text-brand-primary">{t("presenceHighlight")}</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Statistics Cards */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-brand-secondary/10 to-brand-primary/10 border-brand-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-brand-primary mb-2">
                  +<AnimatedCounter end={200} duration={2500} />
                </div>
                <div className="text-lg text-gray-600">{t("clientsLabel")}</div>
                <div className="w-16 h-1 bg-brand-primary mx-auto mt-2"></div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-brand-purple/10 to-brand-purple-dark/10 border-brand-purple/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-brand-purple mb-2">
                  +<AnimatedCounter end={50000} duration={3000} />
                </div>
                <div className="text-lg text-gray-600">{t("candidatesLabel")}</div>
                <div className="w-16 h-1 bg-brand-purple mx-auto mt-2"></div>
              </CardContent>
            </Card>
          </div>
          <div className="border-brand-primary/20 rounded-md pl-4 py-4 bg-[#f5f4f8]">
            <Image src="/maps.png" alt="Global Presence" width={600} height={400} className="mx-auto " />
          </div>
        </div>
      </div>
    </section>
  )
}
