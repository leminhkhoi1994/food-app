import i18next from "i18next"
import { initReactI18next } from "react-i18next"

import translationFrance from "./translation/france/translation.json"
import translationEnglish from "./translation/english/translation.json"

const resources = {
  ko: {
    translation: translationFrance,
  },
  en: {
    translation: translationEnglish,
  },
}

const userLanguage = window.navigator.language

i18next.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || userLanguage || "fr",
  debug: false,
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
