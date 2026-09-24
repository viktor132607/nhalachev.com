"use client"

import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export default function LanguageHtmlSync() {
    const { i18n } = useTranslation()
    const language = i18n.language?.toLowerCase().startsWith("en") ? "en" : "bg"

    useEffect(() => {
        document.documentElement.lang = language
    }, [language])

    return null
}
