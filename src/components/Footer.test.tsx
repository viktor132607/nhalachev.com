import React from "react"
import { act, render, screen, waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

const footerState = vi.hoisted(() => ({
    language: "bg" as string | undefined,
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
        footerState.language = "bg"
        localStorage.clear()
        document.documentElement.classList.remove("dark")
    })

    it("renders Bulgarian copy by default", async () => {
        render(<Footer />)

        expect(screen.getByText("Професионално счетоводно обслужване и консултации. Налични 24/7.")).toBeInTheDocument()
        expect(screen.getByText("Страници")).toBeInTheDocument()
        expect(screen.getByRole("link", { name: "За мен" })).toHaveAttribute("href", "/about")
        expect(screen.getByRole("link", { name: "Контакти" })).toHaveAttribute("href", "/contact")
        expect(screen.getByText("Политика за поверителност")).toBeInTheDocument()
        expect(screen.getByText("Общи условия")).toBeInTheDocument()
        expect(screen.getByText("Политика за бисквитките")).toBeInTheDocument()
        expect(screen.getByText("Тел:")).toBeInTheDocument()

        await waitFor(() => {
            expect(screen.getByAltText("Halachev Accounting").className).not.toContain("invert")
        })
    })

    it("renders all English footer copy and phone label", () => {
        footerState.language = "en"

        render(<Footer />)

        expect(screen.getByText("Professional accounting & consulting services. Available 24/7.")).toBeInTheDocument()
        expect(screen.getByText("Pages")).toBeInTheDocument()
        expect(screen.getByText("Legal")).toBeInTheDocument()
        expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/")
        expect(screen.getByRole("link", { name: "About Me" })).toHaveAttribute("href", "/about")
        expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact")
        expect(screen.getByText("Privacy Policy")).toBeInTheDocument()
        expect(screen.getByText("Terms of Service")).toBeInTheDocument()
        expect(screen.getByText("Cookie Policy")).toBeInTheDocument()
        expect(screen.getByText(/All rights reserved\./)).toBeInTheDocument()
        expect(screen.getByText("Phone:")).toBeInTheDocument()
    })

    it("falls back to Bulgarian if the language is missing", () => {
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
