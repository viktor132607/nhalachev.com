"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"
import { getLocaleFromPathname } from "../lib/locale"

export default function LanguageHtmlSync() {
    const { i18n } = useTranslation()
    const pathname = usePathname()
    const routeLocale = getLocaleFromPathname(pathname)
    const fallbackLocale = i18n.language?.toLowerCase().startsWith("en") ? "en" : "bg"
    const language = routeLocale ?? fallbackLocale

    useEffect(() => {
        document.documentElement.lang = language
        localStorage.setItem("lang", language)

        if (!i18n.language?.toLowerCase().startsWith(language)) {
            void i18n.changeLanguage(language)
        }
    }, [i18n, language])

    return null
}
