import { config } from '@/data/config';

export const sharedTranslations = {
  site: {
    title: {
      de: `${config.company} — Software Development`,
      en: `${config.company} — Software Development`,
    },
    description: {
      de: 'Freiberuflicher Software-Entwickler — MVPs in 1 Woche, Webseiten und Enterprise-Beratung.',
      en: 'Freelance software developer — MVPs in 1 week, websites, and enterprise consulting.',
    },
  },
  categories: {
    devops: { de: 'DevOps', en: 'DevOps' },
    web: { de: 'Webentwicklung', en: 'Web Development' },
    ai: { de: 'Künstliche Intelligenz', en: 'Artificial Intelligence' },
    tooling: { de: 'Tooling', en: 'Tooling' },
    thoughts: { de: 'Gedanken', en: 'Thoughts' },
  },
  post: {
    backTo: { de: 'Zurück zu', en: 'Back to' },
  },
  notFound: {
    de: 'Noch keine Beiträge in dieser Kategorie.',
    en: 'No posts in this category yet.',
  },
  footer: {
    legal: { de: 'Rechtliches', en: 'Legal' },
    navigation: { de: 'Navigation', en: 'Navigation' },
    allRightsReserved: {
      de: 'Alle Rechte vorbehalten.',
      en: 'All rights reserved.',
    },
  },
  common: {
    learnMore: { de: 'Mehr erfahren', en: 'Learn more' },
    viewAll: { de: 'Alle anzeigen', en: 'View all' },
  },
};
