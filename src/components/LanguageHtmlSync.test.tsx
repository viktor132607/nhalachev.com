import React from "react"
import { render } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

const languageState = vi.hoisted(() => ({
    language: "bg" as string | undefined,
}))

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        i18n: { language: languageState.language },
    }),
}))

import LanguageHtmlSync from "./LanguageHtmlSync"

describe("LanguageHtmlSync", () => {
    beforeEach(() => {
        languageState.language = "bg"
        document.documentElement.lang = ""
    })

    it("sets Bulgarian document language", () => {
        render(<LanguageHtmlSync />)

        expect(document.documentElement).toHaveAttribute("lang", "bg")
    })

    it("updates document language to English", () => {
        const { rerender } = render(<LanguageHtmlSync />)

        languageState.language = "en"
        rerender(<LanguageHtmlSync />)

        expect(document.documentElement).toHaveAttribute("lang", "en")
    })

    it("normalizes regional English locales", () => {
        languageState.language = "EN-us"

        render(<LanguageHtmlSync />)

        expect(document.documentElement).toHaveAttribute("lang", "en")
    })

    it("falls back to Bulgarian when language is missing", () => {
        languageState.language = undefined

        render(<LanguageHtmlSync />)

        expect(document.documentElement).toHaveAttribute("lang", "bg")
    })
})
