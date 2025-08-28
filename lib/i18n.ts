export const translations = {
  es: {
    // Header
    services: "Servicios",
    companies: "Empresas",
    presence: "Presencia",
    team: "Equipo",
    contact: "Contacto",

    // Hero Section
    heroTitle: "SOMOS WHO?",
    heroSubtitle: "CONSULTORA INTEGRAL",
    heroDescription: "Una consultora especializada en atracción de talentos con más de 15 años de experiencia en RRHH.",
    seeServices: "Ver servicios",

    // Services Section
    servicesTitle: "Nuestros",
    servicesHighlight: "Servicios",
    recruitmentTitle: "Reclutamiento y selección",
    recruitmentDescription:
      "Realizamos todo el proceso de búsqueda y selección de talentos. Esto incluye la identificación de los perfiles más adecuados para cada puesto, la evaluación de sus habilidades y competencias hasta la presentación del perfil adecuado a tu empresa.",

    // Companies Section
    companiesTitle: "Empresas que",
    companiesHighlight: "ya confían",
    companiesSubtitle: "en nosotros",

    // Global Presence Section
    presenceTitle: "Nuestra Presencia",
    presenceHighlight: "Global",
    clientsLabel: "Clientes",
    candidatesLabel: "Candidatos",
    knowMore: "Quiero saber más",

    // Team Section
    teamTitle: "Nuestro",
    teamHighlight: "Equipo",

    // Contact Section
    contactTitle: "Contáctanos",
    nameLabel: "Nombre",
    emailLabel: "Email",
    subjectLabel: "Asunto",
    messageLabel: "Mensaje",
    sendButton: "Enviar",

    // Footer
    socialNetworks: "Nuestras Redes",
    contactInfo: "Contactos",
  },
  en: {
    // Header
    services: "Services",
    companies: "Companies",
    presence: "Presence",
    team: "Team",
    contact: "Contact",

    // Hero Section
    heroTitle: "WHO ARE WE?",
    heroSubtitle: "INTEGRAL CONSULTANCY",
    heroDescription: "A consultancy specialized in talent attraction with more than 15 years of experience in HR.",
    seeServices: "See services",

    // Services Section
    servicesTitle: "Our",
    servicesHighlight: "Services",
    recruitmentTitle: "Recruitment and selection",
    recruitmentDescription:
      "We carry out the entire talent search and selection process. This includes identifying the most suitable profiles for each position, evaluating their skills and competencies up to presenting the right profile to your company.",

    // Companies Section
    companiesTitle: "Companies that",
    companiesHighlight: "already trust",
    companiesSubtitle: "in us",

    // Global Presence Section
    presenceTitle: "Our Global",
    presenceHighlight: "Presence",
    clientsLabel: "Clients",
    candidatesLabel: "Candidates",
    knowMore: "I want to know more",

    // Team Section
    teamTitle: "Our",
    teamHighlight: "Team",

    // Contact Section
    contactTitle: "Contact Us",
    nameLabel: "Name",
    emailLabel: "Email",
    subjectLabel: "Subject",
    messageLabel: "Message",
    sendButton: "Send",

    // Footer
    socialNetworks: "Our Networks",
    contactInfo: "Contacts",
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.es
