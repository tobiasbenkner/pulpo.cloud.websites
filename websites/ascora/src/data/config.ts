export const config = {
  /** Business info */
  name: 'Ascora Asesoría Fiscal S.L.',
  shortName: 'Ascora',
  domain: 'ascora.es',

  /** Contact */
  email: 'info@ascora.es',

  /** Social links */
  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
  },

  /** Locations */
  locations: {
    granCanaria: {
      name: 'Sede en Gran Canaria',
      address: {
        street: 'Calle Las Canteras del Fondillo, 39',
        area: 'Tafira Baja',
        zip: '35017',
        city: 'Las Palmas de Gran Canaria',
        country: 'España',
      },
      phone: ['928 35 39 07', '928 35 52 08'],
      fax: '928 35 14 17',
      mobile: '629 81 31 60',
      hours: [
        { days: 'Lunes - Viernes', time: '09:00 - 14:00' },
        { days: 'Sábado', time: 'Cerrado' },
        { days: 'Domingo', time: 'Cerrado' },
      ],
      googleMapsEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.7369376511856!2d-15.449420324467482!3d28.063055775980423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40967be2777517%3A0x20526f771cd794!2sAscora%20Asesor%C3%ADa%20Fiscal!5e0!3m2!1sen!2ses!4v1774519352252!5m2!1sen!2ses',
      googleMaps: 'https://maps.app.goo.gl/WW2zkgUu7q469CAb8',
    },
    fuerteventura: {
      name: 'Sede en Fuerteventura',
      address: {
        street: 'Calle la Parábola, 1',
        area: 'Costa Calma',
        zip: '35627',
        city: 'Pájara',
        country: 'España',
      },
      phone: ['928 54 73 30'],
      fax: '928 54 73 30',
      mobile: '',
      hours: [
        { days: 'Lunes - Viernes', time: '09:00 - 14:00' },
        { days: 'Sábado', time: 'Cerrado' },
        { days: 'Domingo', time: 'Cerrado' },
      ],
      googleMapsEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.4846724216673!2d-14.233131224464001!3d28.162171975924878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc47995d8e6e31cd%3A0xcc1ed0d26ca4a303!2sAscora%20Asesor%C3%ADa%20Fiscal%20S.L.!5e0!3m2!1sen!2ses!4v1774519310818!5m2!1sen!2ses',
      googleMaps: 'https://maps.app.goo.gl/GuUz3U4KkkZg8YeG6',
    },
  },} as const;

export type Config = typeof config;
