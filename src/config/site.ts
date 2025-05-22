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
  name: "Rayon Bike",
  description: "Artisanat de vélos vintage sur mesure",
  logo: "/images/logo.svg",
  contact: {
    email: "contact@rayonbike.com",
    phone: "+33 1 23 45 67 89",
    address: "15 rue du Vélocipède, 75011 Paris"
  },
  social: {
    instagram: "https://instagram.com/rayonbike",
    facebook: "https://facebook.com/rayonbike"
  },
  services: {
    title: "Notre Savoir-Faire",
    description: "Découvrez notre approche artisanale de la construction de vélos",
    items: [
      {
        title: "Restauration Vintage",
        description: "Renaissance de vélos classiques avec des matériaux d'époque",
        icon: "restoration"
      },
      {
        title: "Vélos Sur Mesure",
        description: "Création de vélos uniques adaptés à vos besoins",
        icon: "custom"
      },
      {
        title: "Entretien Expert",
        description: "Service d'entretien spécialisé pour vélos vintage",
        icon: "maintenance"
      }
    ]
  },
  testimonials: [
    {
      name: "Marie Laurent",
      role: "Cycliste passionnée",
      content: "Mon vélo vintage restauré est une véritable œuvre d'art. Chaque détail a été soigné avec passion.",
      image: "/images/testimonials/client-1.jpg"
    },
    {
      name: "Thomas Dubois",
      role: "Collectionneur",
      content: "Un savoir-faire exceptionnel et une attention aux détails remarquable.",
      image: "/images/testimonials/client-2.jpg"
    }
  ],
  cta: {
    title: "Créez votre vélo unique",
    description: "Transformez votre vision en réalité avec notre expertise artisanale",
    buttonText: "Construire mon vélo",
    buttonLink: "/contact"
  },
  location: {
    title: "Notre Atelier",
    address: "15 rue du Vélocipède, 75011 Paris",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647874586708!5m2!1sfr!2sfr"
  },
  businessHours: {
    title: "Horaires d'ouverture",
    timezone: "Europe/Paris",
    hours: [
      { day: "Lundi", hours: "Fermé", isClosed: true },
      { day: "Mardi", hours: "10h00 - 19h00" },
      { day: "Mercredi", hours: "10h00 - 19h00" },
      { day: "Jeudi", hours: "10h00 - 19h00" },
      { day: "Vendredi", hours: "10h00 - 19h00" },
      { day: "Samedi", hours: "10h00 - 18h00" },
      { day: "Dimanche", hours: "Fermé", isClosed: true }
    ]
  },
  pricing: {
    title: "Nos Prestations",
    description: "Des services adaptés à vos besoins",
    items: [
      {
        title: "Restauration Basique",
        price: "À partir de 800€",
        description: "Pour les vélos en bon état",
        features: [
          "Démontage complet",
          "Nettoyage et dégraissage",
          "Remplacement des pièces usées",
          "Réglage des freins et dérailleurs"
        ],
        ctaText: "Demander un devis",
        ctaLink: "/contact"
      },
      {
        title: "Restauration Premium",
        price: "À partir de 1500€",
        description: "Notre formule la plus populaire",
        features: [
          "Tout de la formule Basique",
          "Peinture personnalisée",
          "Pièces d'origine restaurées",
          "Selle en cuir sur mesure",
          "Garantie 1 an"
        ],
        isPopular: true,
        ctaText: "Demander un devis",
        ctaLink: "/contact"
      },
      {
        title: "Vélo Sur Mesure",
        price: "Sur devis",
        description: "Création unique",
        features: [
          "Étude personnalisée",
          "Cadre sur mesure",
          "Composants haut de gamme",
          "Finitions artisanales",
          "Accompagnement complet"
        ],
        ctaText: "Nous contacter",
        ctaLink: "/contact"
      }
    ]
  }
}; 