import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const savedLang =
  typeof window !== "undefined" ? localStorage.getItem("lang") : "bg"

i18n.use(initReactI18next).init({
  lng: savedLang || "bg",
  fallbackLng: "bg",
  resources: {},
  interpolation: {
    escapeValue: false,
  },
})

i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("lang", lng)
  }
})

export default i18n