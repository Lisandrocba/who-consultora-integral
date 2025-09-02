"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/hooks/use-i18n"
import Image from "next/image"

export function TeamSection() {
  const { t } = useI18n()
  return (
    <section className="py-20 bg-dark-custom text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("teamTitle")} <span className="text-brand-secondary">{t("teamHighlight")}</span>
          </h2>
        </div>

         <div className='flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-5 lg:mx-auto lg:w-full'>
        <div className='flex flex-col justify-start items-start gap-4 w-[90vw] lg:w-[450px] bg-white rounded-lg'>
          <Image width={1000} height={1000} src='/nadia.jpg' alt='Belen' className='w-full rounded-t-lg' />
          <div className="flex flex-col justify-between items-start">
            <div className='flex flex-col justify-start items-start gap-2'>
              <p className='font-semibold px-4 text-xl text-gray-800'>Nadia Jurevicius Rodríguez</p>
              <p className='font-semibold px-4 text-chart-3'>{t('nadia')}</p>
              <p className='px-4 pb-2 text-sm font-medium text-gray-600'>{t('nadiaDescripcion')}</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2 p-4">
            <div className="flex flex-row justify-center items-center gap-4 cursor-pointer">
              <a
                href="https://wa.me/34608329393"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path
                    fill="#5680BC"
                    d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zm64 0l0 304 224 0 0-304-224 0zM192 472c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"
                  />
                </svg>
                <p className="text-gray-800">+34 608 329 393</p>
              </a>
            </div>

            <div className="flex flex-row justify-center items-center gap-4 cursor-pointer">
              <a href="mailto:njurevicius@whoconsultoraintegral.com" className="flex items-center gap-2">
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="#5680BC"
                    d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
                  />
                </svg>
                <p className="text-gray-800">njurevicius@whoconsultoraintegral.com</p>
              </a>
            </div>

            <div className="flex flex-row justify-start items-center gap-4 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/nadia-jurevicius-rodriguez-10a8b121a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="#5680BC"
                    d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"
                  />
                </svg>
                <p className="text-gray-800">Nadia Jurevicius</p>
              </a>
            </div>

            </div>
          </div>
        </div>
        <div className='flex flex-col justify-start items-start gap-4 w-[90vw] lg:w-[450px] bg-white rounded-lg'>
          <Image width={1000} height={1000} src='/blanquita.jpg' alt='Belen' className='w-full rounded-t-lg' />
          <div className="flex flex-col justify-between items-start min-h-fit h-full">
            <div className='flex flex-col justify-start items-start gap-2'>
              <p className='font-semibold px-4 text-xl text-gray-800'>María Belén Córdoba</p>
              <p className='font-semibold px-4 text-chart-4'>{t('belen')}</p>
              <p className='px-4 text-sm pb-2 font-medium text-gray-600'>{t('belenDescripcion')}</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2 p-4">
             <div className="flex flex-row justify-center items-center gap-4 cursor-pointer">
                <a
                  href="https://wa.me/5493517502319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      fill="#5680BC"
                      d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zm64 0l0 304 224 0 0-304-224 0zM192 472c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"
                    />
                  </svg>
                  <p className="text-gray-800">+54 9 351 7502319</p>
                </a>
              </div>

              <div className="flex flex-row justify-center items-center gap-4 cursor-pointer">
                <a href="mailto:mbcordoba@whoconsultoraintegral.com" className="flex items-center gap-2">
                  <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="#5680BC"
                      d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
                    />
                  </svg>
                  <p className="text-gray-800">mbcordoba@whoconsultoraintegral.com</p>
                </a>
              </div>

              <div className="flex flex-row justify-start items-center gap-4 cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/maria-belen-cordoba-b93122113/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#5680BC"
                      d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"
                    />
                  </svg>
                  <p className="text-gray-800">Belén Córdoba</p>
                </a>
              </div>

            </div>
          </div>
        </div>
        <div className='flex flex-col justify-start items-start gap-4 w-[90vw] lg:w-[450px] bg-white rounded-lg'>
          <Image width={1000} height={1000} src='/juan.jpg' alt='Belen' className='w-full rounded-t-lg' />
          <div className="flex flex-col justify-between items-start min-h-fit h-full">
          <div className='flex flex-col justify-start items-start gap-2'>
            <p className='font-semibold px-4 text-xl text-gray-800'>Juan Manuel Román</p>
            <p className='font-semibold px-4 text-chart-3'>{t('juan')}</p>
            <p className='px-4 text-sm pb-2 font-medium text-gray-600'>{t('juanDescripcion')}</p>
          </div>
          <div className="flex flex-col justify-center items-start gap-2 p-4">
            <div className="flex flex-row justify-center items-center gap-4 cursor-pointer">
              <a
                href="https://wa.me/5491165227793"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path
                    fill="#5680BC"
                    d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zm64 0l0 304 224 0 0-304-224 0zM192 472c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"
                  />
                </svg>
                <p className="text-gray-800">+54 9 11 6522 7793</p>
              </a>
            </div>

            <div className="flex flex-row justify-center items-center gap-4 cursor-pointer">
              <a href="mailto:jmroman@whoconsultoraintegral.com" className="flex items-center gap-2">
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="#5680BC"
                    d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
                  />
                </svg>
                <p className="text-gray-800">jmroman@whoconsultoraintegral.com</p>
              </a>
            </div>

            <div className="flex flex-row justify-start items-center gap-4 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/juan-manuel-roman-a9531a21/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="#5680BC"
                    d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"
                  />
                </svg>
                <p className="text-gray-800">Juan Manuel Román</p>
              </a>
            </div>
        </div>
      </div>
          
        </div>
      </div>
      </div>
    </section>
  )
}
