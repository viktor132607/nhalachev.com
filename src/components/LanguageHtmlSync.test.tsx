import React from "react"
import { render } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

const languageState = vi.hoisted(() => ({
    pathname: "/bg",
    language: "bg" as string | undefined,
    changeLanguage: vi.fn(),
}))

vi.mock("next/navigation", () => ({
    usePathname: () => languageState.pathname,
}))

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        i18n: {
            language: languageState.language,
            changeLanguage: languageState.changeLanguage,
        },
    }),
}))

import LanguageHtmlSync from "./LanguageHtmlSync"

describe("LanguageHtmlSync", () => {
    beforeEach(() => {
        languageState.pathname = "/bg"
        languageState.language = "bg"
        languageState.changeLanguage.mockReset()
        document.documentElement.lang = ""
        localStorage.clear()
    })

    it("sets the document language from the localized route", () => {
        render(<LanguageHtmlSync />)

        expect(document.documentElement).toHaveAttribute("lang", "bg")
        expect(localStorage.getItem("lang")).toBe("bg")
        expect(languageState.changeLanguage).not.toHaveBeenCalled()
    })

    it("synchronizes i18n when the route locale differs", () => {
        languageState.pathname = "/en/about"
        languageState.language = "bg"

        render(<LanguageHtmlSync />)

        expect(document.documentElement).toHaveAttribute("lang", "en")
        expect(localStorage.getItem("lang")).toBe("en")
        expect(languageState.changeLanguage).toHaveBeenCalledWith("en")
    })

    it("uses a regional English i18n fallback on legacy paths", () => {
        languageState.pathname = "/legacy"
        languageState.language = "EN-us"

        render(<LanguageHtmlSync />)

        expect(document.documentElement).toHaveAttribute("lang", "en")
        expect(languageState.changeLanguage).not.toHaveBeenCalled()
    })

    it("falls back to Bulgarian when route and language are missing", () => {
        languageState.pathname = "/legacy"
        languageState.language = undefined

        render(<LanguageHtmlSync />)

        expect(document.documentElement).toHaveAttribute("lang", "bg")
        expect(localStorage.getItem("lang")).toBe("bg")
        expect(languageState.changeLanguage).toHaveBeenCalledWith("bg")
    })
})
