import { beforeEach, describe, expect, it, vi } from "vitest"
import {
    COOKIE_CONSENT_EVENT,
    COOKIE_CONSENT_KEY,
    clearCookieConsent,
    getCookieConsent,
    hasAcceptedOptionalCookies,
    hasRejectedOptionalCookies,
    setCookieConsent,
} from "./cookies"

describe("cookie consent helpers in the browser", () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it("reads accepted, rejected and invalid values", () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, "accepted")
        expect(getCookieConsent()).toBe("accepted")
        expect(hasAcceptedOptionalCookies()).toBe(true)
        expect(hasRejectedOptionalCookies()).toBe(false)

        localStorage.setItem(COOKIE_CONSENT_KEY, "rejected")
        expect(getCookieConsent()).toBe("rejected")
        expect(hasAcceptedOptionalCookies()).toBe(false)
        expect(hasRejectedOptionalCookies()).toBe(true)

        localStorage.setItem(COOKIE_CONSENT_KEY, "unknown")
        expect(getCookieConsent()).toBeNull()

        localStorage.removeItem(COOKIE_CONSENT_KEY)
        expect(getCookieConsent()).toBeNull()
    })

    it("stores consent and dispatches the consent event", () => {
        const dispatch = vi.spyOn(window, "dispatchEvent")

        setCookieConsent("accepted")

        expect(localStorage.getItem(COOKIE_CONSENT_KEY)).toBe("accepted")
        expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: COOKIE_CONSENT_EVENT }))
    })

    it("clears consent and dispatches the consent event", () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, "rejected")
        const dispatch = vi.spyOn(window, "dispatchEvent")

        clearCookieConsent()

        expect(localStorage.getItem(COOKIE_CONSENT_KEY)).toBeNull()
        expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: COOKIE_CONSENT_EVENT }))
    })
})
