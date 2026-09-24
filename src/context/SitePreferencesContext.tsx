"use client"

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react"
import { usePathname, useRouter } from "next/navigation"
import { useTranslation } from "react-i18next"
import {
    getLocaleFromPathname,
    switchLocaleInPath,
    type Locale,
} from "../lib/locale"

const THEME_KEY = "theme"
const LANGUAGE_KEY = "lang"

type SitePreferencesContextValue = {
    locale: Locale
    isDark: boolean
    themeReady: boolean
    toggleTheme: () => void
    setLocale: (locale: Locale) => Promise<void>
}

const SitePreferencesContext = createContext<SitePreferencesContextValue | null>(null)

export function SitePreferencesProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const router = useRouter()
    const { i18n } = useTranslation()
    const [isDark, setIsDark] = useState(false)
    const [themeReady, setThemeReady] = useState(false)

    const routeLocale = getLocaleFromPathname(pathname)
    const fallbackLocale: Locale = i18n.language?.toLowerCase().startsWith("en") ? "en" : "bg"
    const locale = routeLocale ?? fallbackLocale

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            const savedTheme = localStorage.getItem(THEME_KEY)
            const dark =
                document.documentElement.classList.contains("dark") ||
                savedTheme === "dark"

            document.documentElement.classList.toggle("dark", dark)
            setIsDark(dark)
            setThemeReady(true)
        }, 0)

        return () => window.clearTimeout(timeoutId)
    }, [])

    useEffect(() => {
        document.documentElement.lang = locale
        localStorage.setItem(LANGUAGE_KEY, locale)

        if (!i18n.language?.toLowerCase().startsWith(locale)) {
            void i18n.changeLanguage(locale)
        }
    }, [i18n, locale])

    const toggleTheme = useCallback(() => {
        setIsDark((current) => {
            const next = !current
            document.documentElement.classList.toggle("dark", next)
            localStorage.setItem(THEME_KEY, next ? "dark" : "light")
            return next
        })
    }, [])

    const setLocale = useCallback(
        async (nextLocale: Locale) => {
            localStorage.setItem(LANGUAGE_KEY, nextLocale)
            await i18n.changeLanguage(nextLocale)
            router.push(switchLocaleInPath(pathname, nextLocale))
        },
        [i18n, pathname, router]
    )

    const value = useMemo(
        () => ({
            locale,
            isDark,
            themeReady,
            toggleTheme,
            setLocale,
        }),
        [isDark, locale, setLocale, themeReady, toggleTheme]
    )

    return (
        <SitePreferencesContext.Provider value={value}>
            {children}
        </SitePreferencesContext.Provider>
    )
}

export function useSitePreferences() {
    const context = useContext(SitePreferencesContext)

    if (!context) {
        throw new Error("useSitePreferences must be used within SitePreferencesProvider")
    }

    return context
}
