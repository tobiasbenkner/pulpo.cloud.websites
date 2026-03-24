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
  headline1: { de: 'Lass uns etwas', en: "Let's build" },
  headline2: { de: 'bauen.', en: 'something.' },
  subtitle: {
    de: 'Ein Projekt im Kopf? Lass uns reden.',
    en: "Have a project in mind? Let's talk.",
  },
};

export type ContactTranslations = FlattenTranslation<typeof translations>;
