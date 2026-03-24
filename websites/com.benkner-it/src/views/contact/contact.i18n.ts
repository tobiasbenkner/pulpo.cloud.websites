import type { FlattenTranslation } from '@/lib/i18n';

export const translations = {
  navigationLabel: { de: 'Kontakt', en: 'Contact' },
  seo: {
    title: { de: 'Kontakt', en: 'Contact' },
    description: {
      de: 'Nehmen Sie Kontakt auf — per E-Mail, Telefon oder WhatsApp.',
      en: 'Get in touch — via email, phone, or WhatsApp.',
    },
  },
  label: { de: 'Kontakt', en: 'Contact' },
  headline1: { de: 'Bringen Sie Ihre Idee', en: 'Bring your idea' },
  headline2: { de: 'zum Leben.', en: 'to life.' },
  subtitle: {
    de: 'Erzählen Sie mir von Ihrem Projekt — ich melde mich innerhalb von 24 Stunden.',
    en: 'Tell me about your project — I\'ll get back to you within 24 hours.',
  },
  directContact: {
    title: { de: 'Direkt erreichen', en: 'Reach me directly' },
  },
  response: {
    title: { de: 'Was passiert als nächstes?', en: 'What happens next?' },
    steps: [
      {
        title: { de: 'Nachricht senden', en: 'Send a message' },
        text: {
          de: 'Schreiben Sie mir per E-Mail, Telefon oder WhatsApp.',
          en: 'Reach out via email, phone, or WhatsApp.',
        },
      },
      {
        title: { de: 'Erstgespräch vereinbaren', en: 'Schedule a call' },
        text: {
          de: 'Wir führen ein kostenloses 30-Minuten-Gespräch über Ihr Projekt.',
          en: 'We have a free 30-minute call about your project.',
        },
      },
      {
        title: { de: 'Angebot erhalten', en: 'Receive a quote' },
        text: {
          de: 'Sie bekommen ein klares Angebot mit Umfang, Zeitplan und Festpreis.',
          en: 'You get a clear quote with scope, timeline, and fixed price.',
        },
      },
    ],
  },
  availability: {
    title: { de: 'Verfügbarkeit', en: 'Availability' },
    status: { de: 'Aktuell verfügbar für neue Projekte', en: 'Currently available for new projects' },
    remote: { de: 'Remote weltweit', en: 'Remote worldwide' },
    onsite: { de: 'Vor Ort in Europa', en: 'On-site across Europe' },
    languages: { de: 'Deutsch, Englisch, Spanisch', en: 'German, English, Spanish' },
  },
};

export type ContactTranslations = FlattenTranslation<typeof translations>;
