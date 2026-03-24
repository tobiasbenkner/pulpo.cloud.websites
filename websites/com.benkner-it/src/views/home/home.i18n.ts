import { config } from '@/data/config';
import type { FlattenTranslation } from '@/lib/i18n';

export const translations = {
  navigationLabel: { de: 'Start', en: 'Home' },
  seo: {
    title: {
      de: `${config.company} — Software Development`,
      en: `${config.company} — Software Development`,
    },
    description: {
      de: 'Freiberuflicher Software-Entwickler — MVPs in 1 Woche, Webseiten und Enterprise-Beratung.',
      en: 'Freelance software developer — MVPs in 1 week, websites, and enterprise consulting.',
    },
  },
  hero: {
    label: { de: 'Software-Entwickler', en: 'Software Developer' },
    line1: { de: 'Dein MVP.', en: 'Your MVP.' },
    line2: { de: 'Eine Woche.', en: 'One Week.' },
    line3: { de: `${config.pricing.mvp.de}.`, en: `${config.pricing.mvp.en}.` },
    subtitle: {
      de: `Von der Idee zum fertigen Produkt — in ${config.mvpDays} Tagen geliefert, Festpreis, keine Überraschungen.`,
      en: `From idea to working product — shipped in ${config.mvpDays} days, fixed price, no surprises.`,
    },
    cta: { de: 'Projekt starten', en: 'Start Your Project' },
    ctaSecondary: { de: 'Meine Arbeit ansehen', en: 'View My Work' },
  },
  services: {
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
    },
    websites: {
      title: { de: 'Webseiten', en: 'Websites' },
      price: { de: config.pricing.website.de, en: config.pricing.website.en },
      description: {
        de: 'Professionelle, schnelle und ansprechend gestaltete Webseiten für Ihr Unternehmen.',
        en: 'Professional, fast, and beautifully crafted websites for your business.',
      },
    },
    consulting: {
      title: { de: 'Beratung', en: 'Consulting' },
      price: { de: config.pricing.consulting.de, en: config.pricing.consulting.en },
      description: {
        de: 'Enterprise-Grade DevOps, Cloud-Infrastruktur und Full-Stack-Entwicklung.',
        en: 'Enterprise-grade DevOps, cloud infrastructure, and full-stack development.',
      },
    },
  },
  projects: {
    label: { de: 'Ausgewählte Arbeiten', en: 'Selected Work' },
    headline: { de: 'Projekte, die live sind.', en: 'Projects that shipped.' },
  },
  blogSection: {
    label: { de: 'Aus dem Blog', en: 'From the Blog' },
    headline: { de: 'Über Code schreiben.', en: 'Writing about code.' },
  },
  contact: {
    headline1: { de: 'Lass uns etwas', en: "Let's build" },
    headline2: { de: 'bauen.', en: 'something.' },
    subtitle: { de: 'Ein Projekt im Kopf? Lass uns reden.', en: "Have a project in mind? Let's talk." },
  },
  stats: {
    projectsShipped: { de: 'Projekte live', en: 'Projects shipped' },
    daysForMvp: { de: 'Tage für MVP', en: 'Days for MVP' },
    yearsExperience: { de: 'Jahre Erfahrung', en: 'Years experience' },
    fixedPrice: { de: 'Festpreis', en: 'Fixed price' },
  },
  viewAll: { de: 'Alle anzeigen', en: 'View all' },
  learnMore: { de: 'Mehr erfahren', en: 'Learn more' },
};

export type HomeTranslations = FlattenTranslation<typeof translations>;
