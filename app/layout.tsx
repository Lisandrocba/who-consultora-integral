import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

export const metadata: Metadata = {
  title: "Who? Consultora Integral - Especialistas en RRHH",
  description: "Consultora especializada en atracción de talentos con más de 15 años de experiencia en RRHH. Presencia global con +200 clientes y +50.000 candidatos.",
  keywords: ["consultora RRHH", "recursos humanos", "reclutamiento", "selección de personal", "atracción de talentos", "coaching organizacional", "consultoría IT"],
  authors: [{ name: "Who? Consultora Integral" }],
  creator: "Who? Consultora Integral",
  publisher: "Who? Consultora Integral",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://whoconsultoraintegral.com.ar',
    title: 'Who? Consultora Integral - Especialistas en RRHH',
    description: 'Consultora especializada en atracción de talentos con más de 15 años de experiencia en RRHH. Presencia global con +200 clientes y +50.000 candidatos.',
    siteName: 'Who? Consultora Integral',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Who? Consultora Integral - Especialistas en RRHH',
    description: 'Consultora especializada en atracción de talentos con más de 15 años de experiencia en RRHH.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* SEO Meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="language" content="es" />
        <meta name="geo.region" content="AR" />
        <meta name="geo.country" content="Argentina" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://whoconsultoraintegral.com.ar" />
        
        {/* Favicon */}
        <link rel="icon" href="/logo-who.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-who.png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
