import type { FlattenTranslation } from '@/lib/i18n';

export const translations = {
  navigationLabel: { de: 'Datenschutz', en: 'Privacy Policy' },
  seo: {
    title: { de: 'Datenschutzerklärung', en: 'Privacy Policy' },
  },
  title: { de: 'Datenschutzerklärung', en: 'Privacy Policy' },
  overview: {
    title: { de: '1. Datenschutz auf einen Blick', en: '1. Data Protection at a Glance' },
    subtitle: { de: 'Allgemeine Hinweise', en: 'General Information' },
    text: {
      de: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Diese Website wird von Spanien aus betrieben. Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage der EU-Datenschutz-Grundverordnung (DSGVO/RGPD) sowie der spanischen Ley Orgánica 3/2018 (LOPD-GDD).',
      en: 'The following information provides a simple overview of what happens to your personal data when you visit this website. This website is operated from Spain. The processing of personal data is based on the EU General Data Protection Regulation (GDPR/RGPD) and the Spanish Ley Orgánica 3/2018 (LOPD-GDD).',
    },
  },
  responsible: {
    title: { de: '2. Verantwortlicher', en: '2. Data Controller' },
    text: {
      de: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist',
      en: 'The data controller for this website is',
    },
    emailLabel: { de: 'E-Mail', en: 'Email' },
    basis: {
      de: 'Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb der Website) bzw. Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung bei Kontaktaufnahme).',
      en: 'The legal basis for processing is Art. 6(1)(f) GDPR (legitimate interest in operating the website) and Art. 6(1)(b) GDPR (pre-contractual measures when you contact us).',
    },
  },
  collection: {
    title: { de: '3. Datenerfassung auf dieser Website', en: '3. Data Collection on This Website' },
    serverTitle: { de: 'Server-Log-Dateien', en: 'Server Log Files' },
    serverText: {
      de: 'Beim Besuch dieser Website werden automatisch technische Daten in Server-Log-Dateien gespeichert: Browsertyp und -version, Betriebssystem, Referrer-URL, IP-Adresse (anonymisiert) und Uhrzeit der Anfrage. Diese Daten dienen der technischen Bereitstellung der Website und werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.',
      en: 'When you visit this website, technical data is automatically stored in server log files: browser type and version, operating system, referrer URL, IP address (anonymized), and time of the request. This data is used for the technical provision of the website and is not merged with other data sources. Legal basis is Art. 6(1)(f) GDPR.',
    },
    analyticsTitle: { de: 'Webanalyse', en: 'Web Analytics' },
    analyticsText: {
      de: 'Diese Website verwendet Umami Analytics, eine datenschutzfreundliche Webanalyse-Lösung. Es werden keine Cookies gesetzt und keine personenbezogenen Daten gespeichert. Alle erfassten Daten sind anonymisiert und werden auf eigenen Servern in der EU verarbeitet.',
      en: 'This website uses Umami Analytics, a privacy-friendly web analytics solution. No cookies are set and no personal data is stored. All collected data is anonymized and processed on our own servers in the EU.',
    },
    emailTitle: { de: 'Kontaktaufnahme per E-Mail', en: 'Contact by Email' },
    emailText: {
      de: 'Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, E-Mail-Adresse) zum Zwecke der Bearbeitung Ihres Anliegens gespeichert und verarbeitet. Die Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.',
      en: 'If you contact us by email, your inquiry including all personal data (name, email address) will be stored and processed for the purpose of handling your request. Data will not be shared with third parties without your consent. Legal basis is Art. 6(1)(b) GDPR.',
    },
  },
  hosting: {
    title: { de: '4. Hosting', en: '4. Hosting' },
    text: {
      de: 'Diese Website wird bei Hetzner Online GmbH in Deutschland gehostet. Die Server befinden sich in der EU. Beim Besuch der Website werden personenbezogene Daten (z.B. IP-Adressen) auf den Servern des Hosters verarbeitet. Grundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO sowie ein Auftragsverarbeitungsvertrag mit dem Hoster.',
      en: 'This website is hosted by Hetzner Online GmbH in Germany. The servers are located in the EU. When visiting the website, personal data (e.g., IP addresses) is processed on the host\'s servers. The legal basis is Art. 6(1)(f) GDPR and a data processing agreement with the host.',
    },
  },
  rights: {
    title: { de: '5. Ihre Rechte', en: '5. Your Rights' },
    text: {
      de: 'Gemäß DSGVO und LOPD-GDD haben Sie folgende Rechte: Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO), Berichtigung unrichtiger Daten (Art. 16 DSGVO), Löschung Ihrer Daten (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO), Widerspruch gegen die Verarbeitung (Art. 21 DSGVO). Sie haben zudem das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen — in Spanien ist dies die Agencia Española de Protección de Datos (AEPD).',
      en: 'Under the GDPR and LOPD-GDD, you have the following rights: access to your stored data (Art. 15 GDPR), rectification of inaccurate data (Art. 16 GDPR), erasure of your data (Art. 17 GDPR), restriction of processing (Art. 18 GDPR), data portability (Art. 20 GDPR), objection to processing (Art. 21 GDPR). You also have the right to lodge a complaint with the competent supervisory authority — in Spain, this is the Agencia Española de Protección de Datos (AEPD).',
    },
    contact: {
      de: 'Für Datenschutzanfragen erreichen Sie uns jederzeit unter der oben genannten E-Mail-Adresse.',
      en: 'For data protection inquiries, you can reach us at any time at the email address listed above.',
    },
  },
};

export type PrivacyTranslations = FlattenTranslation<typeof translations>;
