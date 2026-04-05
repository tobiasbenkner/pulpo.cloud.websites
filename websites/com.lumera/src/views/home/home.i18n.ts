import type { FlattenTranslation } from "@/lib/i18n";

export const translations = {
  navigationLabel: {
    pl: "Strona główna",
    en: "Home",
  },
  seo: {
    title: {
      pl: "Lumera — AI Portrait Studio",
      en: "Lumera — AI Portrait Studio",
    },
    description: {
      pl: "Artystyczne portrety AI. Nie musisz się zmieniać. Wystarczy, że będziesz widoczna.",
      en: "Artistic AI portraits. You don't need to change. You need to be seen.",
    },
  },
  hero: {
    subtitle: {
      pl: "AI Portrait Studio",
      en: "AI Portrait Studio",
    },
    tagline: {
      pl: "Nie musisz się zmieniać.\nWystarczy, że będziesz widoczna.",
      en: "You don't need to change.\nYou need to be seen.",
    },
    cta: {
      pl: "Odkryj trzy światy",
      en: "Explore the Three Worlds",
    },
  },
  worlds: {
    quietPower: {
      title: {
        pl: "Quiet Power",
        en: "Quiet Power",
      },
      line1: {
        pl: "Cisza nie jest słabością.",
        en: "Stillness is not weakness.",
      },
      line2: {
        pl: "Jest głębią.",
        en: "It is depth.",
      },
      cta: {
        pl: "Wejdź do świata",
        en: "Enter this world",
      },
      manifest: {
        pl: "Nie musisz krzyczeć, żeby być usłyszaną.",
        en: "You don't have to shout to be heard.",
      },
    },
    softRed: {
      title: {
        pl: "Soft Red",
        en: "Soft Red",
      },
      line1: {
        pl: "Ciepło to nie miękkość.",
        en: "Warmth is not softness.",
      },
      line2: {
        pl: "To forma mocy.",
        en: "It is presence.",
      },
      cta: {
        pl: "Wejdź do świata",
        en: "Enter this world",
      },
      manifest: {
        pl: "Twoja siła nie potrzebuje zbroi.",
        en: "Your strength needs no armor.",
      },
    },
    depth: {
      title: {
        pl: "Depth",
        en: "Depth",
      },
      line1: {
        pl: "Cień nie ukrywa.",
        en: "Shadow does not hide you.",
      },
      line2: {
        pl: "On odsłania.",
        en: "It reveals you.",
      },
      cta: {
        pl: "Wejdź do świata",
        en: "Enter this world",
      },
      manifest: {
        pl: "W cieniu odkrywasz to, czego światło nie pokaże.",
        en: "In shadow, you discover what light cannot show.",
      },
    },
    apply: {
      pl: "Aplikuj do tego świata",
      en: "Apply for this World",
    },
  },
  process: {
    heading: {
      pl: "Jak to działa",
      en: "How it works",
    },
    step1: {
      pl: "Napisz do nas — powiedz, co Cię inspiruje",
      en: "Reach out — tell us what inspires you",
    },
    step2: {
      pl: "Odezwiemy się z indywidualną propozycją",
      en: "We'll get back to you with a personal proposal",
    },
    step3: {
      pl: "Powstaje Twój portret",
      en: "Your portrait is created",
    },
  },
  about: {
    heading: {
      pl: "Idea",
      en: "The Idea",
    },
    text: {
      pl: "Lumera to artystyczne studio portretów AI.\n\nPowstała z potrzeby ciszy, światła i autentyczności. To miejsce, w którym technologia przestaje dominować, a zaczyna służyć emocji.",
      en: "Lumera is an artistic AI portrait studio.\n\nCreated from the need for silence, light and authenticity. A place where technology stops leading and starts serving emotion.",
    },
    quote: {
      pl: "Nie przestałam tworzyć. Zmieniam tylko medium.",
      en: "I didn't stop creating. I only changed the medium.",
    },
  },
  contact: {
    heading: {
      pl: "Kontakt",
      en: "Contact",
    },
    text: {
      pl: "Gotowa zobaczyć swoje światło?\nSkontaktuj się lub zajrzyj na Instagram.",
      en: "Ready to see your light?\nGet in touch or visit Instagram.",
    },
  },
  manifest: {
    quote: {
      pl: "Światło nie znika.\nOno tylko zmienia formę.",
      en: "Light doesn't disappear.\nIt only changes form.",
    },
    tagline: {
      pl: "Lumera — The Era of Light",
      en: "Lumera — The Era of Light",
    },
  },
  modal: {
    title: {
      pl: "Aplikacja",
      en: "Application",
    },
    world: {
      pl: "Wybrany świat",
      en: "Selected world",
    },
    name: {
      pl: "Imię",
      en: "Name",
    },
    namePlaceholder: {
      pl: "Twoje imię",
      en: "Your name",
    },
    message: {
      pl: "Wiadomość",
      en: "Message",
    },
    messagePlaceholder: {
      pl: "Cześć! Interesuje mnie ten świat. Chciałabym dowiedzieć się więcej o procesie i dostępności. Czy mogłybyśmy umówić się na krótką rozmowę?",
      en: "Hi! I'm interested in this world. I'd like to know more about the process and availability. Could we schedule a quick chat?",
    },
    imagesHint: {
      pl: "Po wysłaniu zgłoszenia skontaktujemy się z Tobą osobiście.",
      en: "After submitting, we will get back to you personally.",
    },
    sendEmail: {
      pl: "Wyślij e-mailem",
      en: "Send via Email",
    },
    sendWhatsapp: {
      pl: "Wyślij przez WhatsApp",
      en: "Send via WhatsApp",
    },
    disclaimer: {
      pl: "Po weryfikacji zgłoszenia otrzymasz pełne informacje, w tym szczegóły dotyczące ceny i dostępności.\nKażdy świat realizowany jest w ograniczonej liczbie miejsc miesięcznie.",
      en: "After reviewing your application, you will receive full details including pricing and availability.\nEach world is created in limited monthly availability.",
    },
    close: {
      pl: "Zamknij",
      en: "Close",
    },
  },
};

export type HomeTranslations = FlattenTranslation<typeof translations>;