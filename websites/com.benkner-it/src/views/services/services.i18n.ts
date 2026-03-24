import { config } from '@/data/config';
import type { FlattenTranslation } from '@/lib/i18n';

export const translations = {
  navigationLabel: { de: 'Leistungen', en: 'Services' },
  seo: {
    title: { de: 'Leistungen', en: 'Services' },
    description: {
      de: `MVP-Entwicklung für ${config.pricing.mvp.de}, Webseiten ab ${config.pricing.website.de}, Enterprise-Beratung.`,
      en: `MVP development for ${config.pricing.mvp.en}, websites from ${config.pricing.website.en}, enterprise consulting.`,
    },
  },
  label: { de: 'Leistungen', en: 'Services' },
  recommended: { de: 'Beliebteste Option', en: 'Most Popular' },
  mvp: {
    title: { de: 'MVP-Entwicklung', en: 'MVP Development' },
    price: { de: config.pricing.mvp.de, en: config.pricing.mvp.en },
    period: { de: `${config.mvpDays} Tage`, en: `${config.mvpDays} days` },
    description: {
      de: 'Ein vollständiges, funktionierendes Produkt — konzipiert, gebaut und deployed in einer Woche.',
      en: 'A complete, working product — designed, built, and deployed in one week.',
    },
    features: {
      de: ['Full-Stack-Anwendung', 'Individuelles Design & UX', 'Cloud-Deployment inklusive', 'Quellcode-Eigentum', 'Support nach Launch'],
      en: ['Full-stack application', 'Custom design & UX', 'Cloud deployment included', 'Source code ownership', 'Post-launch support'],
    },
    cta: { de: 'MVP Sprint buchen', en: 'Book MVP Sprint' },
  },
  websites: {
    title: { de: 'Webseiten', en: 'Websites' },
    price: { de: config.pricing.website.de, en: config.pricing.website.en },
    description: {
      de: 'Professionelle, schnelle und ansprechend gestaltete Webseiten für Ihr Unternehmen.',
      en: 'Professional, fast, and beautifully crafted websites for your business.',
    },
    features: {
      de: ['Individuelles Design', 'Mobil-optimiert', 'SEO-optimiert', 'CMS-Integration', 'Hosting-Einrichtung'],
      en: ['Custom design', 'Mobile responsive', 'SEO optimized', 'CMS integration', 'Hosting setup'],
    },
    cta: { de: 'Webseite anfragen', en: 'Get a Website' },
  },
  consulting: {
    title: { de: 'Beratung', en: 'Consulting' },
    price: { de: config.pricing.consulting.de, en: config.pricing.consulting.en },
    description: {
      de: 'Enterprise-Grade DevOps, Cloud-Infrastruktur und Full-Stack-Entwicklung.',
      en: 'Enterprise-grade DevOps, cloud infrastructure, and full-stack development.',
    },
    features: {
      de: ['Kubernetes & Docker', 'CI/CD-Pipelines', 'Cloud-Architektur', 'Monitoring & Observability', 'Erfahrung in deutschen Konzernen'],
      en: ['Kubernetes & Docker', 'CI/CD pipelines', 'Cloud architecture', 'Monitoring & observability', 'German enterprise experience'],
    },
    cta: { de: 'Kontakt aufnehmen', en: 'Get in Touch' },
  },
};

export type ServicesTranslations = FlattenTranslation<typeof translations>;
