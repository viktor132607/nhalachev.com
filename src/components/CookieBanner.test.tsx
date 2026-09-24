import React from "react"
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import {
    COOKIE_CONSENT_EVENT,
    COOKIE_CONSENT_KEY,
} from "../lib/cookies"
import CookieBanner from "./CookieBanner"

describe("CookieBanner", () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it("shows without consent and accepts cookies", async () => {
        render(<CookieBanner />)

        expect(await screen.findByText("Бисквитки")).toBeInTheDocument()
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
