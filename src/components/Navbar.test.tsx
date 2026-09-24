import React from "react"
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

const navState = vi.hoisted(() => ({
    pathname: "/",
    language: "bg" as string | undefined,
}))

const navMocks = vi.hoisted(() => ({
    push: vi.fn(),
    refresh: vi.fn(),
    changeLanguage: vi.fn(),
}))

vi.mock("next/navigation", () => ({
    usePathname: () => navState.pathname,
    useRouter: () => ({
        push: navMocks.push,
        refresh: navMocks.refresh,
    }),
}))

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        i18n: {
            language: navState.language,
            changeLanguage: navMocks.changeLanguage,
        },
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
        navState.pathname = "/"
        navState.language = "bg"
        navMocks.push.mockReset()
        navMocks.refresh.mockReset()
        navMocks.changeLanguage.mockReset()
        navMocks.changeLanguage.mockResolvedValue(undefined)
        localStorage.clear()
        document.getElementById("services")?.remove()
        Object.defineProperty(window, "scrollTo", {
            configurable: true,
            value: vi.fn(),
        })
    })

    it("restores saved language/theme, toggles both themes and changes language", async () => {
        localStorage.setItem("lang", "bg")
        localStorage.setItem("theme", "dark")

        render(<Navbar />)

        await waitFor(() => expect(navMocks.changeLanguage).toHaveBeenCalledWith("bg"))
        expect(document.documentElement).toHaveClass("dark")

        const themeButton = screen.getByRole("button", { name: "Смени тема" })
        fireEvent.click(themeButton)
        expect(localStorage.getItem("theme")).toBe("light")
        expect(document.documentElement).not.toHaveClass("dark")

        fireEvent.click(themeButton)
        expect(localStorage.getItem("theme")).toBe("dark")
        expect(document.documentElement).toHaveClass("dark")

        fireEvent.click(screen.getByRole("button", { name: "BG" }))
        fireEvent.click(screen.getByRole("button", { name: "EN" }))

        await waitFor(() => expect(navMocks.refresh).toHaveBeenCalledTimes(2))
        expect(navMocks.changeLanguage).toHaveBeenCalledWith("bg")
        expect(navMocks.changeLanguage).toHaveBeenCalledWith("en")
        expect(localStorage.getItem("lang")).toBe("en")
    })

    it("scrolls to services, tracks its active state, handles resize and scrolls home", () => {
        const { section, rectMock } = addServicesSection()
        localStorage.setItem("theme", "light")
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

    it("handles a missing services section on the home page", () => {
        render(<Navbar />)

        expect(() => {
            fireEvent.click(screen.getByRole("button", { name: "Услуги" }))
        }).not.toThrow()
    })

    it("navigates home first and then scrolls to services from another page", () => {
        vi.useFakeTimers()
        navState.pathname = "/about"
        const { section } = addServicesSection()
        render(<Navbar />)

        fireEvent.click(screen.getByRole("button", { name: "Услуги" }))
        expect(navMocks.push).toHaveBeenCalledWith("/")

        act(() => {
            vi.advanceTimersByTime(120)
        })
        expect(section.scrollIntoView).toHaveBeenCalledWith({
            behavior: "smooth",
            block: "start",
        })

        fireEvent.click(screen.getByAltText("Halachev Accounting").closest("button")!)
        expect(navMocks.push).toHaveBeenCalledWith("/")
    })

    it("handles services navigation when the target section is still unavailable", () => {
        vi.useFakeTimers()
        navState.pathname = "/contact"
        render(<Navbar />)

        fireEvent.click(screen.getByRole("button", { name: "Услуги" }))
        act(() => {
            vi.advanceTimersByTime(120)
        })

        expect(navMocks.push).toHaveBeenCalledWith("/")
    })

    it("renders English when language is undefined and ignores an invalid saved language", () => {
        navState.pathname = "/about"
        navState.language = undefined
        localStorage.setItem("lang", "fr")

        render(<Navbar />)

        expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument()
        expect(screen.getByRole("button", { name: "Services" })).toBeInTheDocument()
        expect(screen.getByRole("button", { name: "Toggle theme" })).toBeInTheDocument()
        expect(navMocks.changeLanguage).not.toHaveBeenCalledWith("fr")
        expect(screen.getByRole("link", { name: "About Me" })).toHaveAttribute("href", "/about")
        expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact")
    })

    it("restores a saved English language", async () => {
        navState.pathname = "/contact"
        navState.language = "en"
        localStorage.setItem("lang", "en")

        render(<Navbar />)

        await waitFor(() => expect(navMocks.changeLanguage).toHaveBeenCalledWith("en"))
        expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument()
    })
})
