import React from "react"
import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

const footerState = vi.hoisted(() => ({
    locale: "bg" as "bg" | "en",
    isDark: false,
    themeReady: true,
}))

vi.mock("../context/SitePreferencesContext", () => ({
    useSitePreferences: () => ({
        locale: footerState.locale,
        isDark: footerState.isDark,
        themeReady: footerState.themeReady,
        toggleTheme: vi.fn(),
        setLocale: vi.fn(),
    }),
}))

vi.mock("next/link", () => ({
    default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a href={String(href)} {...props}>{children}</a>
    ),
}))

import Footer from "./Footer"

describe("Footer", () => {
    beforeEach(() => {
        footerState.locale = "bg"
        footerState.isDark = false
        footerState.themeReady = true
    })

    it("renders Bulgarian copy and localized links", () => {
        render(<Footer />)

        expect(screen.getByText("Професионално счетоводно обслужване и консултации. Налични 24/7.")).toBeInTheDocument()
        expect(screen.getByRole("link", { name: "Начало" })).toHaveAttribute("href", "/bg")
        expect(screen.getByRole("link", { name: "За мен" })).toHaveAttribute("href", "/bg/about")
        expect(screen.getByRole("link", { name: "Контакти" })).toHaveAttribute("href", "/bg/contact")
        expect(screen.getByRole("link", { name: "Политика за поверителност" })).toHaveAttribute("href", "/bg/privacy")
        expect(screen.getByRole("link", { name: "Общи условия" })).toHaveAttribute("href", "/bg/terms")
        expect(screen.getByRole("link", { name: "Политика за бисквитките" })).toHaveAttribute("href", "/bg/cookies")
        expect(screen.getByText("Тел:")).toBeInTheDocument()
        expect(screen.getByAltText("Halachev Accounting").className).not.toContain("invert")
    })

    it("renders English copy from centralized locale", () => {
        footerState.locale = "en"
        render(<Footer />)

        expect(screen.getByText("Professional accounting & consulting services. Available 24/7.")).toBeInTheDocument()
        expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/en")
        expect(screen.getByRole("link", { name: "About Me" })).toHaveAttribute("href", "/en/about")
        expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/en/contact")
        expect(screen.getByRole("link", { name: "Privacy Policy" })).toHaveAttribute("href", "/en/privacy")
        expect(screen.getByRole("link", { name: "Terms of Service" })).toHaveAttribute("href", "/en/terms")
        expect(screen.getByRole("link", { name: "Cookie Policy" })).toHaveAttribute("href", "/en/cookies")
        expect(screen.getByText(/All rights reserved\./)).toBeInTheDocument()
        expect(screen.getByText("Phone:")).toBeInTheDocument()
    })

    it("inverts branding when the centralized dark theme is ready", () => {
        footerState.isDark = true
        footerState.themeReady = true
        render(<Footer />)

        expect(screen.getByAltText("Halachev Accounting").className).toContain("invert")
        expect(screen.getByAltText("Facebook").className).toContain("invert")
        expect(screen.getByAltText("TikTok").className).toContain("invert")
    })

    it("does not invert before centralized theme initialization is ready", () => {
        footerState.isDark = true
        footerState.themeReady = false
        render(<Footer />)

        expect(screen.getByAltText("Halachev Accounting").className).not.toContain("invert")
    })
})
