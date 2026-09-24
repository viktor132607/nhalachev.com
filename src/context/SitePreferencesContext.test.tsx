import React from "react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

const state = vi.hoisted(() => ({
    pathname: "/bg",
}))

const mocks = vi.hoisted(() => {
    const changeLanguage = vi.fn()

    return {
        push: vi.fn(),
        changeLanguage,
        i18n: {
            language: "bg" as string | undefined,
            changeLanguage,
        },
    }
})

vi.mock("next/navigation", () => ({
    usePathname: () => state.pathname,
    useRouter: () => ({ push: mocks.push }),
}))

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        i18n: mocks.i18n,
    }),
}))

import {
    SitePreferencesProvider,
    useSitePreferences,
} from "./SitePreferencesContext"

function Probe() {
    const preferences = useSitePreferences()

    return (
        <div>
            <span data-testid="locale">{preferences.locale}</span>
            <span data-testid="theme">{preferences.isDark ? "dark" : "light"}</span>
            <span data-testid="ready">{preferences.themeReady ? "ready" : "pending"}</span>
            <button type="button" onClick={preferences.toggleTheme}>
                toggle
            </button>
            <button type="button" onClick={() => void preferences.setLocale("en")}>
                en
            </button>
        </div>
    )
}

function renderProvider() {
    return render(
        <SitePreferencesProvider>
            <Probe />
        </SitePreferencesProvider>
    )
}

describe("SitePreferencesProvider", () => {
    beforeEach(() => {
        state.pathname = "/bg"
        mocks.i18n.language = "bg"
        mocks.push.mockReset()
        mocks.changeLanguage.mockReset()
        mocks.changeLanguage.mockResolvedValue(undefined)
        localStorage.clear()
        document.documentElement.classList.remove("dark")
        document.documentElement.lang = ""
    })

    it("requires consumers to be inside the provider", () => {
        expect(() => render(<Probe />)).toThrow(
            "useSitePreferences must be used within SitePreferencesProvider"
        )
    })

    it("syncs route language and restores a saved dark theme", async () => {
        state.pathname = "/en/about"
        mocks.i18n.language = "bg"
        localStorage.setItem("theme", "dark")

        renderProvider()

        expect(screen.getByTestId("locale")).toHaveTextContent("en")
        await waitFor(() => {
            expect(screen.getByTestId("ready")).toHaveTextContent("ready")
            expect(screen.getByTestId("theme")).toHaveTextContent("dark")
        })

        expect(document.documentElement).toHaveClass("dark")
        expect(document.documentElement.lang).toBe("en")
        expect(localStorage.getItem("lang")).toBe("en")
        expect(mocks.changeLanguage).toHaveBeenCalledWith("en")

        fireEvent.click(screen.getByRole("button", { name: "toggle" }))

        expect(screen.getByTestId("theme")).toHaveTextContent("light")
        expect(document.documentElement).not.toHaveClass("dark")
        expect(localStorage.getItem("theme")).toBe("light")
    })

    it("uses the document theme and can toggle from light to dark", async () => {
        document.documentElement.classList.add("dark")
        renderProvider()

        await waitFor(() => expect(screen.getByTestId("theme")).toHaveTextContent("dark"))
        expect(mocks.changeLanguage).not.toHaveBeenCalled()

        fireEvent.click(screen.getByRole("button", { name: "toggle" }))
        fireEvent.click(screen.getByRole("button", { name: "toggle" }))

        expect(screen.getByTestId("theme")).toHaveTextContent("dark")
        expect(localStorage.getItem("theme")).toBe("dark")
    })

    it("starts light when no dark preference exists", async () => {
        renderProvider()

        await waitFor(() => {
            expect(screen.getByTestId("ready")).toHaveTextContent("ready")
            expect(screen.getByTestId("theme")).toHaveTextContent("light")
        })
        expect(document.documentElement).not.toHaveClass("dark")
    })

    it("switches locale centrally while preserving the current route", async () => {
        state.pathname = "/bg/about"
        renderProvider()

        await waitFor(() => expect(localStorage.getItem("lang")).toBe("bg"))
        fireEvent.click(screen.getByRole("button", { name: "en" }))

        await waitFor(() => {
            expect(mocks.changeLanguage).toHaveBeenCalledWith("en")
            expect(mocks.push).toHaveBeenCalledWith("/en/about")
        })
        expect(localStorage.getItem("lang")).toBe("en")
    })

    it("falls back to i18n language on an unprefixed path", () => {
        state.pathname = "/legacy"
        mocks.i18n.language = "en-US"

        renderProvider()

        expect(screen.getByTestId("locale")).toHaveTextContent("en")
        expect(document.documentElement.lang).toBe("en")
    })

    it("falls back to Bulgarian when i18n language is missing", () => {
        state.pathname = "/legacy"
        mocks.i18n.language = undefined

        renderProvider()

        expect(screen.getByTestId("locale")).toHaveTextContent("bg")
        expect(document.documentElement.lang).toBe("bg")
        expect(mocks.changeLanguage).toHaveBeenCalledWith("bg")
    })
})
