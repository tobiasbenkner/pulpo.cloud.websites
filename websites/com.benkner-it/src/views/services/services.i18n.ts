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
  process: {
    label: { de: 'So läuft es ab', en: 'How It Works' },
    steps: {
      consultation: {
        title: { de: 'Erstgespräch', en: 'Initial Consultation' },
        description: {
          de: 'Kostenlos und unverbindlich. Wir besprechen Ihre Idee, Ziele und Anforderungen — und klären, ob und wie ich helfen kann.',
          en: 'Free and no obligation. We discuss your idea, goals, and requirements — and determine if and how I can help.',
        },
      },
      concept: {
        title: { de: 'Konzept & Angebot', en: 'Concept & Quote' },
        description: {
          de: 'Sie erhalten ein klares Konzept mit Umfang, Zeitplan und Festpreis für MVPs und Webseiten — oder ein Tagessatz-Angebot für Beratungsprojekte.',
          en: 'You receive a clear concept with scope, timeline, and fixed price for MVPs and websites — or a day-rate proposal for consulting projects.',
        },
      },
      implementation: {
        title: { de: 'Umsetzung', en: 'Implementation' },
        description: {
          de: 'Regelmäßige Updates und transparenter Fortschritt. Sie wissen jederzeit, wo das Projekt steht.',
          en: 'Regular updates and transparent progress. You always know where the project stands.',
        },
      },
      delivery: {
        title: { de: 'Übergabe & Launch', en: 'Delivery & Handover' },
        description: {
          de: 'Deployment, Dokumentation und vollständiger Quellcode. Ihr Projekt ist live und gehört Ihnen.',
          en: 'Deployment, documentation, and full source code. Your project is live and belongs to you.',
        },
      },
    },
  },
  testimonials: {
    label: { de: 'Was Kunden sagen', en: 'What Clients Say' },
    items: {
      quote1: {
        text: {
          de: 'Die CI/CD-Pipeline, die er für uns aufgesetzt hat, hat unsere Deployment-Zeit von Stunden auf Minuten reduziert. Sehr strukturierte Arbeitsweise und tiefes Verständnis für Enterprise-Anforderungen.',
          en: 'The CI/CD pipeline he set up for us reduced our deployment time from hours to minutes. Very structured approach and deep understanding of enterprise requirements.',
        },
        role: {
          de: 'IT-Leiter, DAX-Industriekonzern',
          en: 'IT Lead, DAX Manufacturing Company',
        },
      },
      quote2: {
        text: {
          de: 'Wir brauchten einen funktionierenden Prototyp, um Investoren zu überzeugen. Nach nur fünf Tagen hatten wir eine vollständige App mit Authentifizierung, Dashboard und API — bereit für die Demo.',
          en: 'We needed a working prototype to convince investors. After just five days, we had a complete app with authentication, dashboard, and API — ready for the demo.',
        },
        role: {
          de: 'Projektmanagerin, HealthTech-Startup',
          en: 'Project Manager, HealthTech Startup',
        },
      },
      quote3: {
        text: {
          de: 'Unsere alte Webseite war langsam und nicht mobilfähig. Die neue Seite lädt in unter einer Sekunde, sieht auf jedem Gerät perfekt aus und wir können Inhalte selbst pflegen.',
          en: 'Our old website was slow and not mobile-friendly. The new site loads in under a second, looks perfect on every device, and we can manage content ourselves.',
        },
        role: {
          de: 'CTO, mittelständisches Logistikunternehmen',
          en: 'CTO, Mid-Size Logistics Company',
        },
      },
    },
  },
  faq: {
    label: { de: 'Häufige Fragen', en: 'Frequently Asked Questions' },
    items: {
      q1: {
        question: {
          de: 'Was passiert, wenn das MVP länger als eine Woche dauert?',
          en: 'What happens if the MVP takes longer than a week?',
        },
        answer: {
          de: 'Im Erstgespräch definieren wir gemeinsam einen realistischen Umfang für die Woche. Sollte sich während der Umsetzung herausstellen, dass mehr Zeit nötig ist, besprechen wir das transparent und Sie entscheiden, ob wir erweitern.',
          en: 'During the initial consultation, we define a realistic scope for the week together. If it turns out during implementation that more time is needed, we discuss it transparently and you decide whether to extend.',
        },
      },
      q2: {
        question: {
          de: 'Wem gehört der Quellcode?',
          en: 'Who owns the source code?',
        },
        answer: {
          de: 'Ihnen. Nach Abschluss und Bezahlung erhalten Sie den vollständigen Quellcode und alle Eigentumsrechte. Keine Vendor-Lock-ins.',
          en: 'You do. After completion and payment, you receive the full source code and all ownership rights. No vendor lock-ins.',
        },
      },
      q3: {
        question: {
          de: 'Welche Technologien setzen Sie ein?',
          en: 'What technologies do you use?',
        },
        answer: {
          de: 'Da es sich um Festpreisprojekte handelt und die Entwicklung schnell gehen soll, wähle ich die Technologien, die am besten zum Projekt passen. Durch meine langjährige Erfahrung mit einem breiten Tech-Stack kann ich für jedes Projekt die optimale Lösung einsetzen — effizient, wartbar und zukunftssicher.',
          en: 'Since these are fixed-price projects and development needs to move fast, I choose the technologies that best fit the project. With my years of experience across a broad tech stack, I can deliver the optimal solution for each project — efficient, maintainable, and future-proof.',
        },
      },
      q4: {
        question: {
          de: 'Kann ich den Fortschritt während der Entwicklung sehen?',
          en: 'Can I see the progress during development?',
        },
        answer: {
          de: 'Ja, unbedingt. Sie erhalten regelmäßige Updates und Zugang zu einer Staging-Umgebung, auf der Sie den aktuellen Stand jederzeit testen können.',
          en: 'Yes, absolutely. You receive regular updates and access to a staging environment where you can test the current state at any time.',
        },
      },
      q5: {
        question: {
          de: 'Bieten Sie auch Wartung nach der Übergabe an?',
          en: 'Do you also offer maintenance after delivery?',
        },
        answer: {
          de: 'Ja. Nach der Übergabe biete ich optionale Wartungs- und Support-Pakete an — von gelegentlichen Updates bis hin zu laufender Betreuung. Das besprechen wir individuell.',
          en: 'Yes. After delivery, I offer optional maintenance and support packages — from occasional updates to ongoing support. We discuss this individually.',
        },
      },
      q6: {
        question: {
          de: 'Wie läuft das Erstgespräch ab?',
          en: 'How does the initial consultation work?',
        },
        answer: {
          de: 'Schreiben Sie mir einfach eine Nachricht über das Kontaktformular oder per E-Mail. Wir vereinbaren dann einen kurzen Videocall (ca. 30 Minuten), in dem wir Ihr Projekt besprechen. Kostenlos und unverbindlich.',
          en: 'Simply send me a message via the contact form or email. We then schedule a short video call (about 30 minutes) to discuss your project. Free and no obligation.',
        },
      },
    },
  },
};

export type ServicesTranslations = FlattenTranslation<typeof translations>;
