import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
  lng: "bg",
  fallbackLng: "bg",
  resources: {},
  interpolation: {
    escapeValue: false,
  },
})

if (typeof window !== "undefined") {
  const saved = localStorage.getItem("lang")
  if (saved) i18n.changeLanguage(saved)

  i18n.on("languageChanged", (lng) => {
    localStorage.setItem("lang", lng)
  })
}

export default i18n