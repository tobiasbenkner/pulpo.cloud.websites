import type { FlattenTranslation } from '@/lib/i18n';

export const translations = {
  navigationLabel: { de: 'Impressum', en: 'Legal Notice' },
  seo: {
    title: { de: 'Impressum', en: 'Legal Notice' },
  },
  title: { de: 'Impressum', en: 'Legal Notice' },
  lssi: {
    de: 'Pflichtangaben gemäß Ley 34/2002 (LSSI-CE)',
    en: 'Mandatory information pursuant to Ley 34/2002 (LSSI-CE)',
  },
  contactLabel: { de: 'Kontakt', en: 'Contact' },
  emailLabel: { de: 'E-Mail', en: 'Email' },
  phoneLabel: { de: 'Telefon', en: 'Phone' },
  vatTitle: { de: 'Steuernummer (NIF/NIE)', en: 'Tax ID (NIF/NIE)' },
  registryTitle: {
    de: 'Handelsregister',
    en: 'Business Registry',
  },
  registryText: {
    de: 'Eingetragen als Autónomo (Selbständiger) in Spanien.',
    en: 'Registered as Autónomo (self-employed) in Spain.',
  },
  liabilityContentTitle: {
    de: 'Haftung für Inhalte',
    en: 'Liability for Content',
  },
  liabilityContent: {
    de: 'Der Betreiber dieser Website ist für die eigenen Inhalte gemäß den allgemeinen Gesetzen verantwortlich. Es wird keine Verpflichtung übernommen, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
    en: 'The operator of this website is responsible for its own content in accordance with general laws. There is no obligation to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.',
  },
  liabilityLinksTitle: {
    de: 'Haftung für Links',
    en: 'Liability for Links',
  },
  liabilityLinks: {
    de: 'Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss besteht. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.',
    en: 'This website contains links to external third-party websites, the content of which is beyond our control. The respective provider or operator is always responsible for the content of the linked pages.',
  },
  intellectualPropertyTitle: {
    de: 'Geistiges Eigentum',
    en: 'Intellectual Property',
  },
  intellectualProperty: {
    de: 'Alle Inhalte dieser Website, einschließlich Texte, Bilder, Grafiken, Design und Quellcode, sind Eigentum des Betreibers oder seiner Lizenzgeber und durch das spanische Gesetz zum Schutz des geistigen Eigentums (Ley de Propiedad Intelectual) geschützt. Die Vervielfältigung, Verbreitung oder Veränderung ohne ausdrückliche Genehmigung ist untersagt.',
    en: 'All content on this website, including text, images, graphics, design, and source code, is the property of the operator or its licensors and is protected by the Spanish Intellectual Property Law (Ley de Propiedad Intelectual). Reproduction, distribution, or modification without express permission is prohibited.',
  },
  jurisdictionTitle: {
    de: 'Anwendbares Recht & Gerichtsstand',
    en: 'Applicable Law & Jurisdiction',
  },
  jurisdiction: {
    de: 'Es gilt spanisches Recht. Gerichtsstand ist Las Palmas de Gran Canaria, Spanien.',
    en: 'Spanish law applies. Place of jurisdiction is Las Palmas de Gran Canaria, Spain.',
  },
};

export type ImprintTranslations = FlattenTranslation<typeof translations>;
