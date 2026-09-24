import { describe, expect, it } from "vitest"
import {
    getLocaleFromPathname,
    isLocale,
    localizePath,
    switchLocaleInPath,
} from "./locale"

describe("locale helpers", () => {
    it("validates supported locales case-insensitively", () => {
        expect(isLocale("bg")).toBe(true)
        expect(isLocale("EN")).toBe(true)
        expect(isLocale("de")).toBe(false)
    })

    it("reads a locale only from the first pathname segment", () => {
        expect(getLocaleFromPathname("/bg/about")).toBe("bg")
        expect(getLocaleFromPathname("/EN/contact")).toBe("en")
        expect(getLocaleFromPathname("/about")).toBeNull()
        expect(getLocaleFromPathname("/")).toBeNull()
    })

    it("creates normalized localized paths", () => {
        expect(localizePath("bg")).toBe("/bg")
        expect(localizePath("en", "/about/")).toBe("/en/about")
        expect(localizePath("bg", "contact")).toBe("/bg/contact")
    })

    it("switches locale while preserving the rest of the route", () => {
        expect(switchLocaleInPath("/bg/about", "en")).toBe("/en/about")
        expect(switchLocaleInPath("/en", "bg")).toBe("/bg")
        expect(switchLocaleInPath("/contact", "en")).toBe("/en/contact")
    })
})
