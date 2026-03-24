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
      de: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
      en: 'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally.',
    },
  },
  responsible: {
    title: { de: '2. Verantwortliche Stelle', en: '2. Responsible Party' },
    text: {
      de: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist',
      en: 'The responsible party for data processing on this website is',
    },
    emailLabel: { de: 'E-Mail', en: 'Email' },
  },
  collection: {
    title: { de: '3. Datenerfassung auf dieser Website', en: '3. Data Collection on This Website' },
    serverTitle: { de: 'Server-Log-Dateien', en: 'Server Log Files' },
    serverText: {
      de: 'Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners und Uhrzeit der Serveranfrage. Eine Zuordnung dieser Daten zu bestimmten Personen ist nicht möglich.',
      en: 'The website provider automatically collects and stores information in server log files that your browser transmits to us. These are: browser type and version, operating system used, referrer URL, hostname of the accessing computer, and time of the server request. This data cannot be assigned to specific persons.',
    },
    emailTitle: { de: 'Kontaktaufnahme per E-Mail', en: 'Contact by Email' },
    emailText: {
      de: 'Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, E-Mail-Adresse) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.',
      en: 'If you contact us by email, your inquiry including all personal data (name, email address) will be stored and processed by us for the purpose of handling your request. We will not share this data without your consent.',
    },
  },
  hosting: {
    title: { de: '4. Hosting', en: '4. Hosting' },
    text: {
      de: 'Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.',
      en: 'This website is hosted externally. The personal data collected on this website is stored on the servers of the host. This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website accesses and other data generated via a website.',
    },
  },
  rights: {
    title: { de: '5. Ihre Rechte', en: '5. Your Rights' },
    text: {
      de: 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.',
      en: 'You have the right to receive information about the origin, recipient and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future.',
    },
    contact: {
      de: 'Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.',
      en: 'For this and other questions regarding data protection, you can contact us at any time.',
    },
  },
};

export type PrivacyTranslations = FlattenTranslation<typeof translations>;
