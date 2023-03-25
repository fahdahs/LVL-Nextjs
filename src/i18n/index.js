// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      'header title': "Starting from 195 MAD per day!",
      'header subtitle' : "The best car rental agency in Laayoune offers you free delivery of cars and 4x4s at the Laayoune airport.",
    },
  },
  fr: {
    translation: {
      'header title':"À Partir de 195 Dhs Par jour!",
      'header subtitle' : "la meilleur agence de location de voiture à Laayoune vous offre La livraison gratuite des voitures et 4×4 dans l’aéroport de Laâyoune"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
