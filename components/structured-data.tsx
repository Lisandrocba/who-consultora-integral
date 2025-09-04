import Script from 'next/script'

export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Who? Consultora Integral',
    description: 'Consultora especializada en atracción de talentos con más de 15 años de experiencia en RRHH',
    url: 'https://whoconsultoraintegral.com.ar',
    logo: 'https://whoconsultoraintegral.com.ar/logo-who.png',
    foundingDate: '2008',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+54-9-351-750-2319',
      contactType: 'customer service',
      availableLanguage: ['Spanish', 'English']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AR',
      addressRegion: 'Córdoba'
    },
    sameAs: [
      'https://www.linkedin.com/company/who-consultora-integral'
    ],
    serviceType: [
      'Reclutamiento y selección de personal',
      'Coaching organizacional',
      'Consultoría de IT'
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Argentina'
    }
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
