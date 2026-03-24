import type { FlattenTranslation } from '@/lib/i18n';

export const translations = {
  navigationLabel: { de: 'Über mich', en: 'About' },
  seo: {
    title: { de: 'Über mich', en: 'About' },
    description: {
      de: 'Freiberuflicher Software-Entwickler mit 15+ Jahren Erfahrung — DevOps, Cloud, Full-Stack, KI.',
      en: 'Freelance software developer with 15+ years experience — DevOps, Cloud, Full-Stack, AI.',
    },
  },
  label: { de: 'Über mich', en: 'About' },
  headline: {
    de: 'Software bauen,\ndie funktioniert.',
    en: 'Building software\nthat works.',
  },
  bio: {
    de: 'Mit über 15 Jahren Erfahrung als Fullstack-Entwickler und DevOps-Experte verbinde ich bewährte Softwareentwicklung mit dem praxisnahen Einsatz moderner KI-Lösungen. Vom Start-up bis zum DAX-Konzern habe ich Projekte sowohl von Grund auf aufgebaut als auch bestehende Systeme modernisiert.',
    en: 'With over 15 years of experience as a full-stack developer and DevOps expert, I combine proven software engineering with the practical use of modern AI solutions. From startups to DAX corporations, I have built projects from scratch and modernized existing systems.',
  },
  bio2: {
    de: 'Ich arbeite pragmatisch und ergebnisorientiert. Technologien setze ich nicht ein, weil sie gerade im Trend liegen, sondern weil sie zum Problem passen und langfristig tragfähig sind. Gute Architektur, saubere Prozesse und klare Kommunikation gehören für mich genauso dazu wie funktionierender Code.',
    en: 'I work pragmatically and results-oriented. I don\'t adopt technologies because they\'re trending, but because they fit the problem and are sustainable long-term. Good architecture, clean processes, and clear communication are just as important to me as working code.',
  },
  photoPlaceholder: {
    de: 'Foto folgt',
    en: 'Photo coming soon',
  },
  education: {
    title: { de: 'Ausbildung', en: 'Education' },
    items: [
      {
        degree: { de: 'Master of Science — Informatik', en: 'Master of Science — Computer Science' },
      },
      {
        degree: { de: 'Bachelor of Science — Informatik', en: 'Bachelor of Science — Computer Science' },
      },
      {
        degree: {
          de: 'Fachinformatiker für Anwendungsentwicklung',
          en: 'Certified IT Specialist — Application Development',
        },
      },
      {
        degree: { de: 'Microsoft Certified System Administrator', en: 'Microsoft Certified System Administrator' },
      },
    ],
  },
  languages: {
    title: { de: 'Sprachen', en: 'Languages' },
    items: [
      { language: { de: 'Deutsch', en: 'German' }, level: { de: 'Muttersprache', en: 'Native' } },
      { language: { de: 'Englisch', en: 'English' }, level: { de: 'Fließend', en: 'Fluent' } },
      { language: { de: 'Spanisch', en: 'Spanish' }, level: { de: 'Fließend', en: 'Fluent' } },
    ],
  },
  career: {
    title: { de: 'Berufliche Stationen', en: 'Career' },
    items: [
      {
        company: { de: 'DAX-Konzern', en: 'DAX Corporation' },
        industry: { de: 'Verteidigungstechnologie', en: 'Defense Technology' },
        period: { de: '2025 — heute', en: '2025 — present' },
        role: {
          de: 'Aufbau einer Entwicklungsplattform mit KI-Agents, RAG-Pipeline und Echtzeit-Simulation',
          en: 'Building a development platform with AI agents, RAG pipeline, and real-time simulation',
        },
      },
      {
        company: { de: 'Globaler Konzern', en: 'Global Corporation' },
        industry: { de: 'Intralogistik', en: 'Intralogistics' },
        period: { de: '2023 — 2024', en: '2023 — 2024' },
        role: {
          de: 'Cloud-Migration und Legacy-Modernisierung der gesamten Anwendungslandschaft',
          en: 'Cloud migration and legacy modernization of the entire application landscape',
        },
      },
      {
        company: { de: 'DAX-Konzern', en: 'DAX Corporation' },
        industry: { de: 'Medizintechnik', en: 'Medical Technology' },
        period: { de: '2022 — 2023', en: '2022 — 2023' },
        role: {
          de: 'Konsolidierung der Datenarchitektur und Migration auf AWS-Serverless',
          en: 'Data architecture consolidation and migration to AWS serverless',
        },
      },
      {
        company: { de: 'DAX-Konzern', en: 'DAX Corporation' },
        industry: { de: 'Maschinenbau', en: 'Manufacturing' },
        period: { de: '2020 — 2022', en: '2020 — 2022' },
        role: {
          de: 'Automatisierung globaler Softwareentwicklungsprozesse und CI/CD-Einführung',
          en: 'Automation of global software engineering processes and CI/CD introduction',
        },
      },
      {
        company: { de: 'DAX-Konzern', en: 'DAX Corporation' },
        industry: { de: 'Rückversicherung', en: 'Reinsurance' },
        period: { de: '2019 — 2020', en: '2019 — 2020' },
        role: {
          de: 'Weiterentwicklung einer digitalen Transaktionsplattform',
          en: 'Development of a digital transaction platform',
        },
      },
      {
        company: { de: 'Mittelständisches Unternehmen', en: 'Mid-size Enterprise' },
        industry: { de: 'Finanzdienstleistung', en: 'Financial Services' },
        period: { de: '2018 — 2019', en: '2018 — 2019' },
        role: {
          de: 'Mandantenfähiges Leasing-Portal mit Microservice-Architektur',
          en: 'Multi-tenant leasing portal with microservice architecture',
        },
      },
    ],
  },
  methodology: {
    title: { de: 'Arbeitsweise', en: 'How I Work' },
    items: [
      {
        title: { de: 'Pragmatisch & ergebnisorientiert', en: 'Pragmatic & results-driven' },
        text: {
          de: 'Keine Technologie um der Technologie willen. Jede Entscheidung dient dem Projekterfolg.',
          en: 'No technology for technology\'s sake. Every decision serves the project\'s success.',
        },
      },
      {
        title: { de: 'Flexibel einsetzbar', en: 'Flexible engagement' },
        text: {
          de: 'Ob als Berater im Team oder als Einzelkämpfer für Ihr Projekt — ich passe mich Ihrer Arbeitsweise an.',
          en: 'Whether as a consultant in your team or as a solo developer for your project — I adapt to your way of working.',
        },
      },
      {
        title: { de: 'Klare Kommunikation', en: 'Clear communication' },
        text: {
          de: 'Regelmäßige Updates, transparenter Fortschritt, erreichbar auf Deutsch, Englisch und Spanisch.',
          en: 'Regular updates, transparent progress, reachable in German, English, and Spanish.',
        },
      },
      {
        title: { de: 'Hands-on & Clean Code', en: 'Hands-on & Clean Code' },
        text: {
          de: 'Agile Methoden, TDD, Domain-driven Design — ich schreibe selbst Code, nicht nur Konzepte.',
          en: 'Agile methods, TDD, Domain-driven Design — I write code myself, not just concepts.',
        },
      },
    ],
  },
  techLabel: { de: 'Tech Stack', en: 'Tech Stack' },
  personal: {
    de: 'Verfügbar für Remote-Projekte weltweit und vor Ort in Europa.',
    en: 'Available for remote projects worldwide and on-site across Europe.',
  },
};

export type AboutTranslations = FlattenTranslation<typeof translations>;
