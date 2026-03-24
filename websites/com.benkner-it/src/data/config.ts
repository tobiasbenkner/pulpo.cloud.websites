/**
 * Central configuration — edit this file to update
 * contact info, pricing, and social links across the entire site.
 */

export const config = {
  /** Business info */
  name: 'Tobias Benkner',
  company: 'Benkner IT',
  domain: 'benkner-it.com',

  /** Contact */
  email: 'info@benkner-it.com',
  phone: '+49 156 78 74 79 40',
  whatsapp: '+34624156091',

  /** Social links (leave empty string to hide) */
  social: {
    github: 'https://github.com/tobiasbenkner',
    linkedin: '',
    twitter: '',
  },

  /** Pricing */
  pricing: {
    mvp: {
      en: '€10,000',
      de: '€10.000',
    },
    website: {
      en: '€2,000',
      de: '€2.000',
    },
    consulting: {
      en: 'On Request',
      de: 'Auf Anfrage',
    },
  },

  /** MVP sprint duration */
  mvpDays: 7,

  /** Stats shown on homepage */
  stats: {
    projectsShipped: '6+',
    yearsExperience: '10+',
  },
  /** Legal / Imprint */
  legal: {
    fullName: 'Tobias Benkner',
    address: {
      street: 'Calle Doctor Alfonso Chiscano Diaz 10',
      zip: '35010',
      city: 'Las Palmas de Gran Canaria',
      country: 'España',
    },
    taxId: 'Y8763074L',
  },
} as const;

export type Config = typeof config;
