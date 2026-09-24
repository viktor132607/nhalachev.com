export const LOCALES = ["bg", "en"] as const
export type Locale = (typeof LOCALES)[number]

export function isLocale(value: string): value is Locale {
    return LOCALES.includes(value as Locale)
}

export function getLocaleFromPathname(pathname: string): Locale | null {
    const segment = pathname.split("/").filter(Boolean)[0]?.toLowerCase()
    return segment && isLocale(segment) ? segment : null
}

export function localizePath(locale: Locale, path = "/") {
    const normalized = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`
    return `/${locale}${normalized}`
}

export function switchLocaleInPath(pathname: string, locale: Locale) {
    const segments = pathname.split("/").filter(Boolean)

    if (segments[0] && isLocale(segments[0])) {
        segments.shift()
    }

    const suffix = segments.length ? `/${segments.join("/")}` : "/"
    return localizePath(locale, suffix)
}
