import type { FlattenTranslation } from '@/lib/i18n';

export const translations = {
  navigationLabel: { de: 'Über mich', en: 'About' },
  seo: {
    title: { de: 'Über mich', en: 'About' },
    description: {
      de: 'Freiberuflicher Software-Entwickler — DevOps, Cloud, Full-Stack.',
      en: 'Freelance software developer — DevOps, Cloud, Full-Stack.',
    },
  },
  label: { de: 'Über mich', en: 'About' },
  headline: {
    de: 'Software bauen,\ndie funktioniert.',
    en: 'Building software\nthat works.',
  },
  bio: {
    de: 'Freiberuflicher Software-Entwickler mit Sitz in Deutschland, tätig für Konzerne und Startups gleichermaßen. Ich spezialisiere mich darauf, komplexe Anforderungen in saubere, wartbare Systeme zu verwandeln — von Cloud-Infrastruktur bis zu pixel-perfekten Frontends.',
    en: 'Freelance software developer based in Germany, working with enterprises and startups alike. I specialize in turning complex requirements into clean, maintainable systems — from cloud infrastructure to pixel-perfect frontends.',
  },
  bio2: {
    de: 'Aktuell verfügbar für MVP-Sprints, Webseiten-Projekte und Aufträge in deutschen Unternehmen.',
    en: 'Currently available for MVP sprints, website projects, and contract work in German enterprises.',
  },
  techLabel: { de: 'Tech Stack', en: 'Tech Stack' },
};

export type AboutTranslations = FlattenTranslation<typeof translations>;
