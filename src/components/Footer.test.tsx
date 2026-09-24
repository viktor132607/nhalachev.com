import React from "react"
import { act, render, screen, waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

const footerState = vi.hoisted(() => ({
    pathname: "/bg",
    language: "bg" as string | undefined,
}))

vi.mock("next/navigation", () => ({
    usePathname: () => footerState.pathname,
}))

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        i18n: { language: footerState.language },
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
        footerState.pathname = "/bg"
        footerState.language = "bg"
        localStorage.clear()
        document.documentElement.classList.remove("dark")
    })

    it("renders Bulgarian copy and localized links", async () => {
        render(<Footer />)

        expect(screen.getByText("Професионално счетоводно обслужване и консултации. Налични 24/7.")).toBeInTheDocument()
        expect(screen.getByRole("link", { name: "Начало" })).toHaveAttribute("href", "/bg")
        expect(screen.getByRole("link", { name: "За мен" })).toHaveAttribute("href", "/bg/about")
        expect(screen.getByRole("link", { name: "Контакти" })).toHaveAttribute("href", "/bg/contact")
        expect(screen.getByRole("link", { name: "Политика за поверителност" })).toHaveAttribute("href", "/bg/privacy")
        expect(screen.getByRole("link", { name: "Общи условия" })).toHaveAttribute("href", "/bg/terms")
        expect(screen.getByRole("link", { name: "Политика за бисквитките" })).toHaveAttribute("href", "/bg/cookies")
        expect(screen.getByText("Тел:")).toBeInTheDocument()

        await waitFor(() => {
            expect(screen.getByAltText("Halachev Accounting").className).not.toContain("invert")
        })
    })

    it("uses the route locale for English copy even when i18n is still Bulgarian", () => {
        footerState.pathname = "/en/about"
        footerState.language = "bg"

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

    it("uses i18n as fallback for an unprefixed legacy URL", () => {
        footerState.pathname = "/legacy"
        footerState.language = "en"

        render(<Footer />)

        expect(screen.getByText("Pages")).toBeInTheDocument()
        expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/en")
    })

    it("falls back to Bulgarian if both route and language are missing", () => {
        footerState.pathname = "/legacy"
        footerState.language = undefined

        render(<Footer />)

        expect(screen.getByText("Страници")).toBeInTheDocument()
        expect(screen.getByText("Тел:")).toBeInTheDocument()
    })

    it("restores dark theme, reacts to theme changes and removes its listener", async () => {
        localStorage.setItem("theme", "dark")
        const remove = vi.spyOn(window, "removeEventListener")
        const { unmount } = render(<Footer />)

        await waitFor(() => {
            expect(document.documentElement).toHaveClass("dark")
            expect(screen.getByAltText("Halachev Accounting").className).toContain("invert")
            expect(screen.getByAltText("Facebook").className).toContain("invert")
            expect(screen.getByAltText("TikTok").className).toContain("invert")
        })

        document.documentElement.classList.remove("dark")
        act(() => {
            window.dispatchEvent(new Event("themechange"))
        })

        await waitFor(() => {
            expect(screen.getByAltText("Halachev Accounting").className).not.toContain("invert")
        })

        document.documentElement.classList.add("dark")
        act(() => {
            window.dispatchEvent(new Event("themechange"))
        })

        await waitFor(() => {
            expect(screen.getByAltText("Halachev Accounting").className).toContain("invert")
        })

        unmount()
        expect(remove).toHaveBeenCalledWith("themechange", expect.any(Function))
    })
})
