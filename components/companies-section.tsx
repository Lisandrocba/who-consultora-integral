"use client"

import { useI18n } from "@/hooks/use-i18n"
import Image from "next/image"

export function CompaniesSection() {
  const { t } = useI18n()

  const companies = [
    "CAIP",
    "Provincia",
    "Oventa",
    "Velas",
    "Cloud Legion",
    "Solo",
    "Tuzap",
    "Clasifica",
    "The Colony",
    "Miral",
  ]

  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-4">
            {t("companiesTitle")} <span className="text-brand-secondary">{t("companiesHighlight")}</span>{" "}
            {t("companiesSubtitle")}
          </h2>
        </div>

        <div className='slider' style={{'--width': '100px', '--height': '50px', '--quantity': 8 } as React.CSSProperties}>
          <div className='list'>
            <div className='item' style={{'--position': 1}   as React.CSSProperties}>
              <Image width={800} height={800} src='/empresas/river.jpg' alt='Empresas'/>
            </div>
            <div className='item' style={{'--position': 2} as React.CSSProperties}>
              <Image width={800} height={800} src='/empresas/cloneUp.jpg' alt='Empresas'/>
              </div>
            <div className='item' style={{'--position': 3}  as React.CSSProperties}>
              <Image width={800} height={800} src='/empresas/hPampa.jpg' alt='Empresas'/>
              </div>
            <div className='item' style={{'--position': 4}  as React.CSSProperties}>
              <Image width={800} height={800} src='/empresas/diveria.jpg' alt='Empresas'/>
              </div>
            <div className='item' style={{'--position': 5} as React.CSSProperties}>
              <Image width={800} height={800} src='/empresas/tebsa.jpg' alt='Empresas' />
              </div>
            <div className='item' style={{'--position': 6} as React.CSSProperties}>
              <Image width={800} height={800} src='/empresas/theColony.jpg' alt='Empresas' />
              </div>
            <div className='item' style={{'--position': 7} as React.CSSProperties}>
              <Image width={800} height={800} src='/empresas/themill.jpg' alt='Empresas' />
              </div>
            <div className='item' style={{'--position': 8} as React.CSSProperties}>
              <Image width={800} height={800} src='/empresas/trizap.jpg' alt='Empresas' />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
