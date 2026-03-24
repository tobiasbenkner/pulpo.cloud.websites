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
    num: string;
    recommended: string;
    mvp: ServiceBlock;
    websites: ServiceBlock;
    consulting: ServiceBlock;
  };
  projects: {
    label: string;
    num: string;
    headline: string;
    viewProject: string;
  };
  blogSection: {
    label: string;
    num: string;
    headline: string;
    viewAll: string;
  };
  aboutSection: {
    label: string;
    num: string;
    headline: string;
    bio: string;
    bio2: string;
    techLabel: string;
  };
  contactSection: {
    label: string;
    num: string;
    headline1: string;
    headline2: string;
    subtitle: string;
    cta: string;
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
      title: 'Tobias Benkner',
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
      line3: '€10,000.',
      subtitle:
        'From idea to working product — shipped in 7 days, fixed price, no surprises.',
      cta: 'Start Your Project',
      ctaSecondary: 'View My Work',
    },
    services: {
      label: 'Services',
      num: '001',
      recommended: 'Most Popular',
      mvp: {
        title: 'MVP Development',
        price: '€10,000',
        period: '7 days',
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
        price: '€2,000',
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
        price: 'On Request',
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
      num: '002',
      headline: 'Projects that shipped.',
      viewProject: 'View Project',
    },
    blogSection: {
      label: 'From the Blog',
      num: '003',
      headline: 'Writing about code.',
      viewAll: 'All Posts',
    },
    aboutSection: {
      label: 'About',
      num: '004',
      headline: 'Building software\nthat works.',
      bio: 'Freelance software developer based in Germany, working with enterprises and startups alike. I specialize in turning complex requirements into clean, maintainable systems — from cloud infrastructure to pixel-perfect frontends.',
      bio2: 'Currently available for MVP sprints, website projects, and contract work in German enterprises.',
      techLabel: 'Tech Stack',
    },
    contactSection: {
      label: 'Contact',
      num: '005',
      headline1: "Let's build",
      headline2: 'something.',
      subtitle:
        "Have a project in mind? Let's talk.",
      cta: 'hello@benkner-it.com',
    },
    home: { headline: 'Latest Posts', viewAll: 'View all posts' },
    blog: { headline: 'All Posts' },
    about: { headline: 'About' },
    post: { backTo: 'Back to' },
    notFound: 'No posts in this category yet.',
  },
  de: {
    site: {
      title: 'Tobias Benkner',
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
      line3: '€10.000.',
      subtitle:
        'Von der Idee zum fertigen Produkt — in 7 Tagen geliefert, Festpreis, keine Überraschungen.',
      cta: 'Projekt starten',
      ctaSecondary: 'Meine Arbeit ansehen',
    },
    services: {
      label: 'Leistungen',
      num: '001',
      recommended: 'Beliebteste Option',
      mvp: {
        title: 'MVP-Entwicklung',
        price: '€10.000',
        period: '7 Tage',
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
        price: '€2.000',
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
        price: 'Auf Anfrage',
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
      num: '002',
      headline: 'Projekte, die live sind.',
      viewProject: 'Projekt ansehen',
    },
    blogSection: {
      label: 'Aus dem Blog',
      num: '003',
      headline: 'Über Code schreiben.',
      viewAll: 'Alle Beiträge',
    },
    aboutSection: {
      label: 'Über mich',
      num: '004',
      headline: 'Software bauen,\ndie funktioniert.',
      bio: 'Freiberuflicher Software-Entwickler mit Sitz in Deutschland, tätig für Konzerne und Startups gleichermaßen. Ich spezialisiere mich darauf, komplexe Anforderungen in saubere, wartbare Systeme zu verwandeln — von Cloud-Infrastruktur bis zu pixel-perfekten Frontends.',
      bio2: 'Aktuell verfügbar für MVP-Sprints, Webseiten-Projekte und Aufträge in deutschen Unternehmen.',
      techLabel: 'Tech Stack',
    },
    contactSection: {
      label: 'Kontakt',
      num: '005',
      headline1: 'Lass uns etwas',
      headline2: 'bauen.',
      subtitle: 'Ein Projekt im Kopf? Lass uns reden.',
      cta: 'hello@benkner-it.com',
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
