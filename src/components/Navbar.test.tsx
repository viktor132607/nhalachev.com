import React from "react"
import { act, fireEvent, render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

const navState = vi.hoisted(() => ({
    pathname: "/bg",
    locale: "bg" as "bg" | "en",
    isDark: false,
}))

const navMocks = vi.hoisted(() => ({
    push: vi.fn(),
    toggleTheme: vi.fn(),
    setLocale: vi.fn(),
}))

vi.mock("next/navigation", () => ({
    usePathname: () => navState.pathname,
    useRouter: () => ({
        push: navMocks.push,
    }),
}))

vi.mock("../context/SitePreferencesContext", () => ({
    useSitePreferences: () => ({
        locale: navState.locale,
        isDark: navState.isDark,
        themeReady: true,
        toggleTheme: navMocks.toggleTheme,
        setLocale: navMocks.setLocale,
    }),
}))

vi.mock("next/link", () => ({
    default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a href={String(href)} {...props}>{children}</a>
    ),
}))

import Navbar from "./Navbar"

function addServicesSection(rect = { top: 100, bottom: 500 }) {
    const section = document.createElement("section")
    section.id = "services"
    const rectMock = vi.fn(() => ({
        x: 0,
        y: rect.top,
        width: 100,
        height: rect.bottom - rect.top,
        top: rect.top,
        right: 100,
        bottom: rect.bottom,
        left: 0,
        toJSON: () => ({}),
    }))
    Object.defineProperty(section, "getBoundingClientRect", {
        configurable: true,
        value: rectMock,
    })
    Object.defineProperty(section, "scrollIntoView", {
        configurable: true,
        value: vi.fn(),
    })
    document.body.appendChild(section)
    return { section, rectMock }
}

describe("Navbar", () => {
    beforeEach(() => {
        navState.pathname = "/bg"
        navState.locale = "bg"
        navState.isDark = false
        navMocks.push.mockReset()
        navMocks.toggleTheme.mockReset()
        navMocks.setLocale.mockReset()
        navMocks.setLocale.mockResolvedValue(undefined)
        document.getElementById("services")?.remove()
        Object.defineProperty(window, "scrollTo", {
            configurable: true,
            value: vi.fn(),
        })
    })

    it("delegates theme and language changes to the preferences provider", () => {
        navState.pathname = "/bg/about"
        navState.isDark = true
        render(<Navbar />)

        expect(screen.getByRole("navigation", { name: "Основна навигация" })).toBeInTheDocument()
        expect(screen.getByRole("link", { name: "За мен" })).toHaveAttribute("aria-current", "page")
        expect(screen.getByAltText("Halachev Accounting").className).toContain("invert")

        fireEvent.click(screen.getByRole("button", { name: "Смени тема" }))
        expect(navMocks.toggleTheme).toHaveBeenCalledTimes(1)

        fireEvent.click(screen.getByRole("button", { name: "EN" }))
        fireEvent.click(screen.getByRole("button", { name: "BG" }))

        expect(navMocks.setLocale).toHaveBeenCalledWith("en")
        expect(navMocks.setLocale).toHaveBeenCalledWith("bg")
    })

    it("scrolls to services, tracks its active state, handles resize and scrolls home", () => {
        const { section, rectMock } = addServicesSection()
        const removeListener = vi.spyOn(window, "removeEventListener")
        const { unmount } = render(<Navbar />)

        fireEvent.click(screen.getByRole("button", { name: "Услуги" }))
        expect(section.scrollIntoView).toHaveBeenCalledWith({
            behavior: "smooth",
            block: "start",
        })

        fireEvent.click(screen.getByAltText("Halachev Accounting").closest("button")!)
        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" })

        rectMock.mockReturnValue({
            x: 0,
            y: 200,
            width: 100,
            height: 300,
            top: 200,
            right: 100,
            bottom: 500,
            left: 0,
            toJSON: () => ({}),
        })
        act(() => {
            window.dispatchEvent(new Event("scroll"))
            window.dispatchEvent(new Event("resize"))
        })

        unmount()
        expect(removeListener).toHaveBeenCalledWith("scroll", expect.any(Function))
        expect(removeListener).toHaveBeenCalledWith("resize", expect.any(Function))
    })

    it("handles a missing services section on localized home", () => {
        render(<Navbar />)

        expect(() => {
            fireEvent.click(screen.getByRole("button", { name: "Услуги" }))
        }).not.toThrow()
    })

    it("navigates to localized home before scrolling to services", () => {
        vi.useFakeTimers()
        navState.pathname = "/bg/about"
        const { section } = addServicesSection()
        render(<Navbar />)

        fireEvent.click(screen.getByRole("button", { name: "Услуги" }))
        expect(navMocks.push).toHaveBeenCalledWith("/bg")

        act(() => {
            vi.advanceTimersByTime(120)
        })
        expect(section.scrollIntoView).toHaveBeenCalledWith({
            behavior: "smooth",
            block: "start",
        })

        fireEvent.click(screen.getByAltText("Halachev Accounting").closest("button")!)
        expect(navMocks.push).toHaveBeenCalledWith("/bg")
    })

    it("keeps English navigation inside the English locale", () => {
        vi.useFakeTimers()
        navState.pathname = "/en/contact"
        navState.locale = "en"
        render(<Navbar />)

        expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument()
        expect(screen.getByRole("link", { name: "About Me" })).toHaveAttribute("href", "/en/about")
        expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/en/contact")
        expect(screen.getByRole("button", { name: "Toggle theme" })).toBeInTheDocument()

        fireEvent.click(screen.getByRole("button", { name: "Services" }))
        act(() => {
            vi.advanceTimersByTime(120)
        })
        expect(navMocks.push).toHaveBeenCalledWith("/en")
    })

    it("supports the legacy root while redirects are being applied", () => {
        navState.pathname = "/"
        render(<Navbar />)

        fireEvent.click(screen.getByAltText("Halachev Accounting").closest("button")!)
        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" })
    })
})
