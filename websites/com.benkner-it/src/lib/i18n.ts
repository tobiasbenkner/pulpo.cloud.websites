import { config } from '@/data/config';

export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const categories = ['devops', 'web', 'ai', 'tooling', 'thoughts'] as const;
export type Category = (typeof categories)[number];

interface ServiceBlock {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
}

interface TranslationSet {
  site: { title: string; description: string };
  nav: {
    home: string;
    services: string;
    projects: string;
    blog: string;
    about: string;
    contact: string;
  };
  categories: Record<Category, string>;
  hero: {
    label: string;
    line1: string;
    line2: string;
    line3: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  services: {
    label: string;
    recommended: string;
    mvp: ServiceBlock;
    websites: ServiceBlock;
    consulting: ServiceBlock;
  };
  projects: {
    label: string;
    headline: string;
    viewProject: string;
  };
  blogSection: {
    label: string;
    headline: string;
    viewAll: string;
  };
  aboutSection: {
    label: string;
    headline: string;
    bio: string;
    bio2: string;
    techLabel: string;
  };
  contactSection: {
    label: string;
    headline1: string;
    headline2: string;
    subtitle: string;
  };
  home: { headline: string; viewAll: string };
  blog: { headline: string };
  about: { headline: string };
  post: { backTo: string };
  notFound: string;
}

const translations = {
  en: {
    site: {
      title: config.domain,
      description:
        'Freelance software developer — MVPs in 1 week, websites, and enterprise consulting.',
    },
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      blog: 'Blog',
      about: 'About',
      contact: 'Contact',
    },
    categories: {
      devops: 'DevOps',
      web: 'Web Development',
      ai: 'Artificial Intelligence',
      tooling: 'Tooling',
      thoughts: 'Thoughts',
    },
    hero: {
      label: 'Software Developer',
      line1: 'Your MVP.',
      line2: 'One Week.',
      line3: `${config.pricing.mvp.en}.`,
      subtitle: `From idea to working product — shipped in ${config.mvpDays} days, fixed price, no surprises.`,
      cta: 'Start Your Project',
      ctaSecondary: 'View My Work',
    },
    services: {
      label: 'Services',
      recommended: 'Most Popular',
      mvp: {
        title: 'MVP Development',
        price: config.pricing.mvp.en,
        period: `${config.mvpDays} days`,
        description:
          'A complete, working product — designed, built, and deployed in one week.',
        features: [
          'Full-stack application',
          'Custom design & UX',
          'Cloud deployment included',
          'Source code ownership',
          'Post-launch support',
        ],
        cta: 'Book MVP Sprint',
      },
      websites: {
        title: 'Websites',
        price: config.pricing.website.en,
        period: undefined,
        description:
          'Professional, fast, and beautifully crafted websites for your business.',
        features: [
          'Custom design',
          'Mobile responsive',
          'SEO optimized',
          'CMS integration',
          'Hosting setup',
        ],
        cta: 'Get a Website',
      },
      consulting: {
        title: 'Consulting',
        price: config.pricing.consulting.en,
        period: undefined,
        description:
          'Enterprise-grade DevOps, cloud infrastructure, and full-stack development.',
        features: [
          'Kubernetes & Docker',
          'CI/CD pipelines',
          'Cloud architecture',
          'Monitoring & observability',
          'German enterprise experience',
        ],
        cta: 'Get in Touch',
      },
    },
    projects: {
      label: 'Selected Work',
      headline: 'Projects that shipped.',
      viewProject: 'View Project',
    },
    blogSection: {
      label: 'From the Blog',
      headline: 'Writing about code.',
      viewAll: 'All Posts',
    },
    aboutSection: {
      label: 'About',
      headline: 'Building software\nthat works.',
      bio: 'Freelance software developer based in Germany, working with enterprises and startups alike. I specialize in turning complex requirements into clean, maintainable systems — from cloud infrastructure to pixel-perfect frontends.',
      bio2: 'Currently available for MVP sprints, website projects, and contract work in German enterprises.',
      techLabel: 'Tech Stack',
    },
    contactSection: {
      label: 'Contact',
      headline1: "Let's build",
      headline2: 'something.',
      subtitle: "Have a project in mind? Let's talk.",
    },
    home: { headline: 'Latest Posts', viewAll: 'View all posts' },
    blog: { headline: 'All Posts' },
    about: { headline: 'About' },
    post: { backTo: 'Back to' },
    notFound: 'No posts in this category yet.',
  },
  de: {
    site: {
      title: config.domain,
      description:
        'Freiberuflicher Software-Entwickler — MVPs in 1 Woche, Webseiten und Enterprise-Beratung.',
    },
    nav: {
      home: 'Start',
      services: 'Leistungen',
      projects: 'Projekte',
      blog: 'Blog',
      about: 'Über mich',
      contact: 'Kontakt',
    },
    categories: {
      devops: 'DevOps',
      web: 'Webentwicklung',
      ai: 'Künstliche Intelligenz',
      tooling: 'Tooling',
      thoughts: 'Gedanken',
    },
    hero: {
      label: 'Software-Entwickler',
      line1: 'Dein MVP.',
      line2: 'Eine Woche.',
      line3: `${config.pricing.mvp.de}.`,
      subtitle: `Von der Idee zum fertigen Produkt — in ${config.mvpDays} Tagen geliefert, Festpreis, keine Überraschungen.`,
      cta: 'Projekt starten',
      ctaSecondary: 'Meine Arbeit ansehen',
    },
    services: {
      label: 'Leistungen',
      recommended: 'Beliebteste Option',
      mvp: {
        title: 'MVP-Entwicklung',
        price: config.pricing.mvp.de,
        period: `${config.mvpDays} Tage`,
        description:
          'Ein vollständiges, funktionierendes Produkt — konzipiert, gebaut und deployed in einer Woche.',
        features: [
          'Full-Stack-Anwendung',
          'Individuelles Design & UX',
          'Cloud-Deployment inklusive',
          'Quellcode-Eigentum',
          'Support nach Launch',
        ],
        cta: 'MVP Sprint buchen',
      },
      websites: {
        title: 'Webseiten',
        price: config.pricing.website.de,
        period: undefined,
        description:
          'Professionelle, schnelle und ansprechend gestaltete Webseiten für Ihr Unternehmen.',
        features: [
          'Individuelles Design',
          'Mobil-optimiert',
          'SEO-optimiert',
          'CMS-Integration',
          'Hosting-Einrichtung',
        ],
        cta: 'Webseite anfragen',
      },
      consulting: {
        title: 'Beratung',
        price: config.pricing.consulting.de,
        period: undefined,
        description:
          'Enterprise-Grade DevOps, Cloud-Infrastruktur und Full-Stack-Entwicklung.',
        features: [
          'Kubernetes & Docker',
          'CI/CD-Pipelines',
          'Cloud-Architektur',
          'Monitoring & Observability',
          'Erfahrung in deutschen Konzernen',
        ],
        cta: 'Kontakt aufnehmen',
      },
    },
    projects: {
      label: 'Ausgewählte Arbeiten',
      headline: 'Projekte, die live sind.',
      viewProject: 'Projekt ansehen',
    },
    blogSection: {
      label: 'Aus dem Blog',
      headline: 'Über Code schreiben.',
      viewAll: 'Alle Beiträge',
    },
    aboutSection: {
      label: 'Über mich',
      headline: 'Software bauen,\ndie funktioniert.',
      bio: 'Freiberuflicher Software-Entwickler mit Sitz in Deutschland, tätig für Konzerne und Startups gleichermaßen. Ich spezialisiere mich darauf, komplexe Anforderungen in saubere, wartbare Systeme zu verwandeln — von Cloud-Infrastruktur bis zu pixel-perfekten Frontends.',
      bio2: 'Aktuell verfügbar für MVP-Sprints, Webseiten-Projekte und Aufträge in deutschen Unternehmen.',
      techLabel: 'Tech Stack',
    },
    contactSection: {
      label: 'Kontakt',
      headline1: 'Lass uns etwas',
      headline2: 'bauen.',
      subtitle: 'Ein Projekt im Kopf? Lass uns reden.',
    },
    home: { headline: 'Neueste Beiträge', viewAll: 'Alle Beiträge anzeigen' },
    blog: { headline: 'Alle Beiträge' },
    about: { headline: 'Über mich' },
    post: { backTo: 'Zurück zu' },
    notFound: 'Noch keine Beiträge in dieser Kategorie.',
  },
} satisfies Record<Locale, TranslationSet>;

export function t(lang: Locale): TranslationSet {
  return translations[lang];
}

export function parsePostId(id: string): { slug: string; lang: Locale } {
  const lastSlash = id.lastIndexOf('/');
  const lang = id.slice(lastSlash + 1) as Locale;
  const slug = id.slice(0, lastSlash);
  return { slug, lang };
}

export function getAlternateUrl(
  currentPath: string,
  targetLang: Locale,
): string {
  const isGerman =
    currentPath === '/de' ||
    currentPath === '/de/' ||
    currentPath.startsWith('/de/');

  if (targetLang === 'de') {
    if (isGerman) return currentPath;
    if (currentPath === '/') return '/de/';
    return `/de${currentPath}`;
  }

  if (!isGerman) return currentPath;
  const stripped = currentPath.replace(/^\/de\/?/, '/');
  return stripped || '/';
}

export function localePath(path: string, lang: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLocale) return clean;
  if (clean === '/') return `/${lang}/`;
  return `/${lang}${clean}`;
}
