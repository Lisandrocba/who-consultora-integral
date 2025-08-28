"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useI18n } from "@/hooks/use-i18n"

export function ContactSection() {
  const { t } = useI18n()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("contactTitle")}</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("nameLabel")}</label>
                    <Input type="text" className="w-full" placeholder={t("nameLabel")} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("emailLabel")}</label>
                    <Input type="email" className="w-full" placeholder={t("emailLabel")} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("subjectLabel")}</label>
                  <Input type="text" className="w-full" placeholder={t("subjectLabel")} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("messageLabel")}</label>
                  <Textarea rows={6} className="w-full" placeholder={t("messageLabel")} />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-brand-dark hover:bg-brand-dark/90 text-white px-12 py-3"
                  >
                    {t("sendButton")}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
