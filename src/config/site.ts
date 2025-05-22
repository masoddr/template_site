export interface SiteConfig {
  name: string;
  description: string;
  logo: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
  services: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  testimonials: Array<{
    name: string;
    role: string;
    content: string;
    image?: string;
  }>;
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
  location: {
    title: string;
    address: string;
    mapUrl: string;
  };
  businessHours: {
    title: string;
    timezone: string;
    hours: Array<{
      day: string;
      hours: string;
      isClosed?: boolean;
    }>;
  };
  pricing: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      price?: string;
      description: string;
      features: string[];
      isPopular?: boolean;
      ctaText?: string;
      ctaLink?: string;
    }>;
  };
}

// Configuration par défaut
export const defaultConfig: SiteConfig = {
  name: "Votre Entreprise",
  description: "Description de votre entreprise",
  logo: "/images/logo.svg",
  contact: {
    email: "contact@example.com",
    phone: "+33 1 23 45 67 89",
    address: "123 rue Example, 75000 Paris"
  },
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  },
  services: {
    title: "Nos Services",
    description: "Découvrez nos services professionnels",
    items: [
      {
        title: "Service 1",
        description: "Description du service 1",
        icon: "service-1"
      },
      {
        title: "Service 2",
        description: "Description du service 2",
        icon: "service-2"
      },
      {
        title: "Service 3",
        description: "Description du service 3",
        icon: "service-3"
      }
    ]
  },
  testimonials: [
    {
      name: "Jean Dupont",
      role: "Client",
      content: "Excellent service, je recommande !",
      image: "/images/testimonials/client-1.jpg"
    }
  ],
  cta: {
    title: "Prêt à commencer ?",
    description: "Contactez-nous dès aujourd'hui",
    buttonText: "Nous contacter",
    buttonLink: "/contact"
  },
  location: {
    title: "Notre Localisation",
    address: "123 rue Example, 75000 Paris",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647874586708!5m2!1sfr!2sfr"
  },
  businessHours: {
    title: "Horaires d'ouverture",
    timezone: "Europe/Paris",
    hours: [
      { day: "Lundi", hours: "9h00 - 18h00" },
      { day: "Mardi", hours: "9h00 - 18h00" },
      { day: "Mercredi", hours: "9h00 - 18h00" },
      { day: "Jeudi", hours: "9h00 - 18h00" },
      { day: "Vendredi", hours: "9h00 - 18h00" },
      { day: "Samedi", hours: "10h00 - 16h00" },
      { day: "Dimanche", hours: "Fermé", isClosed: true }
    ]
  },
  pricing: {
    title: "Nos Tarifs",
    description: "Découvrez nos différentes formules adaptées à vos besoins",
    items: [
      {
        title: "Formule Basique",
        price: "À partir de 99€",
        description: "Idéal pour démarrer",
        features: [
          "Fonctionnalité 1",
          "Fonctionnalité 2",
          "Fonctionnalité 3"
        ],
        ctaText: "Choisir cette formule",
        ctaLink: "/contact"
      },
      {
        title: "Formule Pro",
        price: "À partir de 199€",
        description: "Notre formule la plus populaire",
        features: [
          "Tout de la formule Basique",
          "Fonctionnalité 4",
          "Fonctionnalité 5",
          "Fonctionnalité 6"
        ],
        isPopular: true,
        ctaText: "Choisir cette formule",
        ctaLink: "/contact"
      },
      {
        title: "Formule Premium",
        price: "Sur mesure",
        description: "Solution personnalisée",
        features: [
          "Tout de la formule Pro",
          "Fonctionnalité 7",
          "Fonctionnalité 8",
          "Fonctionnalité 9",
          "Support prioritaire"
        ],
        ctaText: "Nous contacter",
        ctaLink: "/contact"
      }
    ]
  }
}; 