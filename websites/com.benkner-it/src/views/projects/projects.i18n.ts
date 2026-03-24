import type { FlattenTranslation } from '@/lib/i18n';

export const translations = {
  navigationLabel: { de: 'Projekte', en: 'Projects' },
  seo: {
    title: { de: 'Projekte', en: 'Projects' },
    description: {
      de: 'Ausgewählte Arbeiten — von Open-Source-Plattformen bis zu Unternehmenswebseiten.',
      en: 'Selected work — from open source platforms to corporate websites.',
    },
  },
  label: { de: 'Ausgewählte Arbeiten', en: 'Selected Work' },
  headline: { de: 'Projekte, die live sind.', en: 'Projects that shipped.' },
  items: [
    {
      name: 'pulpo.cloud',
      description: {
        de: 'Open-Source-Kassensystem, E-Commerce & Warenwirtschaft für KMU',
        en: 'Open Source POS, e-commerce & inventory management platform for SMEs',
      },
      tags: ['Astro', 'TypeScript', 'Directus', 'Docker'],
      url: 'https://pulpo.cloud',
      featured: true,
    },
    {
      name: 'beckernet.es',
      description: {
        de: 'Unternehmenswebsite für eine Versicherungsberatung',
        en: 'Corporate website for an insurance consultancy',
      },
      tags: ['Astro', 'Tailwind', 'CMS'],
      url: 'https://beckernet.es',
    },
    {
      name: 'seguros.beckernet.es',
      description: {
        de: 'Versicherungsvergleichs- & Angebotsplattform',
        en: 'Insurance comparison & quote platform',
      },
      tags: ['Astro', 'Directus', 'Tailwind'],
      url: 'https://seguros.beckernet.es',
    },
    {
      name: 'hektorysara.com',
      description: {
        de: 'Webseite für eine Tanzakademie',
        en: 'Website for a dance academy',
      },
      tags: ['Astro', 'Tailwind', 'CMS'],
      url: 'https://hektorysara.com',
    },
    {
      name: 'holacanterasclub.com',
      description: {
        de: 'Community-Webseite für einen Strandclub',
        en: 'Community website for a beach club',
      },
      tags: ['Astro', 'Tailwind'],
      url: 'https://holacanterasclub.com',
    },
    {
      name: 'elbuhotuerto.com',
      description: {
        de: 'Restaurant-Webseite mit Online-Präsenz',
        en: 'Restaurant website with online presence',
      },
      tags: ['Astro', 'Tailwind'],
      url: 'https://elbuhotuerto.com',
    },
  ],
};

export type ProjectsTranslations = FlattenTranslation<typeof translations>;
