"use client"

import { Button } from "@/components/ui/button"
import { useI18n } from "@/hooks/use-i18n"

export function LanguageToggle() {
  const { language, changeLanguage } = useI18n()

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === "es" ? "default" : "outline"}
        size="sm"
        onClick={() => changeLanguage("es")}
        className="flex items-center gap-2 px-3"
      >
        <span className="text-lg">🇪🇸</span>
        <span className="text-sm font-medium">ES</span>
      </Button>
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => changeLanguage("en")}
        className="flex items-center gap-2 px-3"
      >
        <span className="text-lg">🇺🇸</span>
        <span className="text-sm font-medium">EN</span>
      </Button>
    </div>
  )
}
