import type { FlattenTranslation } from '@/lib/i18n';

export const translations = {
  navigationLabel: { de: 'Impressum', en: 'Imprint' },
  seo: {
    title: { de: 'Impressum', en: 'Imprint' },
  },
  title: { de: 'Impressum', en: 'Imprint' },
  tmg: {
    de: 'Angaben gemäß § 5 TMG',
    en: 'Information according to § 5 TMG',
  },
  contactLabel: { de: 'Kontakt', en: 'Contact' },
  emailLabel: { de: 'E-Mail', en: 'Email' },
  phoneLabel: { de: 'Telefon', en: 'Phone' },
  vatTitle: { de: 'Umsatzsteuer-ID', en: 'VAT ID' },
  vatDescription: {
    de: 'Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz',
    en: 'VAT identification number according to § 27a of the German VAT Act',
  },
  liabilityContentTitle: {
    de: 'Haftung für Inhalte',
    en: 'Liability for Content',
  },
  liabilityContent: {
    de: 'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
    en: 'As a service provider, we are responsible for our own content on these pages in accordance with § 7 paragraph 1 of the German Telemedia Act (TMG). According to §§ 8 to 10 TMG, however, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.',
  },
  liabilityLinksTitle: {
    de: 'Haftung für Links',
    en: 'Liability for Links',
  },
  liabilityLinks: {
    de: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
    en: 'Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages.',
  },
};

export type ImprintTranslations = FlattenTranslation<typeof translations>;
