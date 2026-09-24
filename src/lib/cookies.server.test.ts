// @vitest-environment node
import { describe, expect, it } from "vitest"
import {
    clearCookieConsent,
    getCookieConsent,
    setCookieConsent,
} from "./cookies"

describe("cookie consent helpers during SSR", () => {
    it("return safely when window does not exist", () => {
        expect(getCookieConsent()).toBeNull()
        expect(() => setCookieConsent("accepted")).not.toThrow()
        expect(() => clearCookieConsent()).not.toThrow()
    })
})
