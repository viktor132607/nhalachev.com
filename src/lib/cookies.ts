export const COOKIE_CONSENT_KEY = "cookie_consent"
export const COOKIE_CONSENT_EVENT = "cookieconsentchange"

export type CookieConsent = "accepted" | "rejected" | null

export function getCookieConsent(): CookieConsent {
    if (typeof window === "undefined") return null

    const value = window.localStorage.getItem(COOKIE_CONSENT_KEY)
    return value === "accepted" || value === "rejected" ? value : null
}

export function hasAcceptedOptionalCookies(): boolean {
    return getCookieConsent() === "accepted"
}

export function hasRejectedOptionalCookies(): boolean {
    return getCookieConsent() === "rejected"
}

export function setCookieConsent(value: Exclude<CookieConsent, null>): void {
    if (typeof window === "undefined") return

    window.localStorage.setItem(COOKIE_CONSENT_KEY, value)
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT))
}

export function clearCookieConsent(): void {
    if (typeof window === "undefined") return

    window.localStorage.removeItem(COOKIE_CONSENT_KEY)
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT))
}