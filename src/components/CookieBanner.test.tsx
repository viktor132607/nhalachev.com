import React from "react"
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import {
    COOKIE_CONSENT_EVENT,
    COOKIE_CONSENT_KEY,
} from "../lib/cookies"

const bannerState = vi.hoisted(() => ({
    locale: "bg" as "bg" | "en",
}))

vi.mock("../context/SitePreferencesContext", () => ({
    useSitePreferences: () => ({
        locale: bannerState.locale,
        isDark: false,
        themeReady: true,
        toggleTheme: vi.fn(),
        setLocale: vi.fn(),
    }),
}))

import CookieBanner from "./CookieBanner"

describe("CookieBanner", () => {
    beforeEach(() => {
        bannerState.locale = "bg"
        localStorage.clear()
    })

    it("shows without consent and accepts cookies", async () => {
        render(<CookieBanner />)

        expect(await screen.findByText("Бисквитки")).toBeInTheDocument()
        const dialog = screen.getByRole("dialog", { name: "Бисквитки" })
        expect(dialog).toHaveAttribute("aria-modal", "false")
        fireEvent.click(screen.getByRole("button", { name: "Приемам" }))

        await waitFor(() => expect(screen.queryByText("Бисквитки")).not.toBeInTheDocument())
        expect(localStorage.getItem(COOKIE_CONSENT_KEY)).toBe("accepted")
    })

    it("rejects cookies", async () => {
        render(<CookieBanner />)

        expect(await screen.findByText("Бисквитки")).toBeInTheDocument()
        fireEvent.click(screen.getByRole("button", { name: "Откажи" }))

        await waitFor(() => expect(screen.queryByText("Бисквитки")).not.toBeInTheDocument())
        expect(localStorage.getItem(COOKIE_CONSENT_KEY)).toBe("rejected")
    })

    it("renders English controls from centralized locale", async () => {
        bannerState.locale = "en"
        render(<CookieBanner />)

        expect(await screen.findByText("Cookies")).toBeInTheDocument()
        expect(screen.getByRole("button", { name: "Reject" })).toBeInTheDocument()
        expect(screen.getByRole("button", { name: "Accept" })).toBeInTheDocument()
    })

    it("stays hidden when consent already exists", async () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, "accepted")
        render(<CookieBanner />)

        await waitFor(() => expect(screen.queryByText("Бисквитки")).not.toBeInTheDocument())
    })

    it("synchronizes external consent changes and removes its listener", async () => {
        const remove = vi.spyOn(window, "removeEventListener")
        const { unmount } = render(<CookieBanner />)

        expect(await screen.findByText("Бисквитки")).toBeInTheDocument()

        localStorage.setItem(COOKIE_CONSENT_KEY, "accepted")
        act(() => {
            window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT))
        })

        await waitFor(() => expect(screen.queryByText("Бисквитки")).not.toBeInTheDocument())
        unmount()

        expect(remove).toHaveBeenCalledWith(COOKIE_CONSENT_EVENT, expect.any(Function))
    })
})
