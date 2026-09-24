import React from "react"
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

const contactState = vi.hoisted(() => ({
    language: "bg" as string | undefined,
    consent: false,
}))

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        i18n: { language: contactState.language },
    }),
}))

vi.mock("../src/lib/cookies", () => ({
    COOKIE_CONSENT_EVENT: "cookieconsentchange",
    hasAcceptedOptionalCookies: () => contactState.consent,
}))

import Contact from "./Contact"

function field(container: HTMLElement, name: string) {
    return container.querySelector('[name="' + name + '"]') as HTMLInputElement | HTMLTextAreaElement
}

function fillForm(container: HTMLElement, values = {
    website: " honeypot ",
    name: " Nikola ",
    email: " nikola@example.com ",
    phone: " 0888123456 ",
    subject: " Consultation ",
    message: " I need accounting consultation and support. ",
}) {
    for (const [name, value] of Object.entries(values)) {
        fireEvent.change(field(container, name), { target: { value } })
    }
}

describe("Contact", () => {
    beforeEach(() => {
        contactState.language = "bg"
        contactState.consent = false
        localStorage.clear()
        document.documentElement.classList.remove("dark")
    })

    it("submits the Bulgarian form, shows loading/success and resets every field", async () => {
        let resolveFetch!: (value: unknown) => void
        const fetchMock = vi.fn(
            () => new Promise((resolve) => {
                resolveFetch = resolve
            })
        )
        vi.stubGlobal("fetch", fetchMock)

        const { container } = render(<Contact />)
        fillForm(container)

        const form = container.querySelector("form")!
        fireEvent.submit(form)

        expect(screen.getByRole("button", { name: "Изпращане..." })).toBeDisabled()

        await act(async () => {
            resolveFetch({
                ok: true,
                json: vi.fn().mockResolvedValue({ code: "success" }),
            })
        })

        expect(await screen.findByText("Съобщението беше изпратено успешно.")).toBeInTheDocument()
        expect(fetchMock).toHaveBeenCalledTimes(1)

        const [url, options] = fetchMock.mock.calls[0]
        expect(url).toBe("/api/contact")
        expect(options).toMatchObject({
            method: "POST",
            headers: { "Content-Type": "application/json" },
        })
        expect(JSON.parse(String(options.body))).toEqual({
            name: "Nikola",
            email: "nikola@example.com",
            phone: "0888123456",
            subject: "Consultation",
            company: "",
            message: "I need accounting consultation and support.",
            website: "honeypot",
        })

        for (const name of ["website", "name", "email", "phone", "subject", "message"]) {
            expect(field(container, name)).toHaveValue("")
        }
        expect(screen.getByRole("button", { name: "Изпрати" })).not.toBeDisabled()
    })

    it("submits every English field and shows the English error on a failed HTTP response", async () => {
        contactState.language = "en"
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
            ok: false,
            json: vi.fn().mockResolvedValue({ code: "success" }),
        }))

        const { container } = render(<Contact />)
        fillForm(container, {
            website: "",
            name: " John ",
            email: " john@example.com ",
            phone: " 123 ",
            subject: " Help ",
            message: " Please help with accounting services. ",
        })

        fireEvent.submit(container.querySelector("form")!)

        expect(await screen.findByText("An error occurred while sending your message.")).toBeInTheDocument()
        expect(screen.getByText("To load Google Maps, accept optional cookies from the cookie banner.")).toBeInTheDocument()
        expect(screen.getByRole("button", { name: "Send" })).not.toBeDisabled()
    })

    it("handles an application-level error response", async () => {
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
            ok: true,
            json: vi.fn().mockResolvedValue({ code: "error" }),
        }))

        const { container } = render(<Contact />)
        fillForm(container)
        fireEvent.submit(container.querySelector("form")!)

        expect(await screen.findByText("Възникна грешка при изпращането.")).toBeInTheDocument()
    })

    it("handles an unreadable JSON response", async () => {
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
            ok: true,
            json: vi.fn().mockRejectedValue(new Error("invalid json")),
        }))

        const { container } = render(<Contact />)
        fillForm(container)
        fireEvent.submit(container.querySelector("form")!)

        expect(await screen.findByText("Възникна грешка при изпращането.")).toBeInTheDocument()
    })

    it("handles a rejected network request", async () => {
        vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network")))
        const { container } = render(<Contact />)
        fillForm(container)
        fireEvent.submit(container.querySelector("form")!)

        expect(await screen.findByText("Възникна грешка при изпращането.")).toBeInTheDocument()
    })

    it("synchronizes theme and optional-cookie state and cleans up listeners", async () => {
        localStorage.setItem("theme", "dark")
        const remove = vi.spyOn(window, "removeEventListener")
        const { container, unmount } = render(<Contact />)

        expect(screen.getByText("За да заредите Google Maps, приемете optional cookies от банера за бисквитки.")).toBeInTheDocument()
        expect(screen.getByAltText("Facebook").className).toContain("invert")

        contactState.consent = true
        act(() => {
            window.dispatchEvent(new Event("cookieconsentchange"))
        })
        await waitFor(() => expect(container.querySelector("iframe")).toBeInTheDocument())

        localStorage.setItem("theme", "light")
        document.documentElement.classList.add("dark")
        act(() => {
            window.dispatchEvent(new Event("themechange"))
        })
        expect(screen.getByAltText("Facebook").className).toContain("invert")

        document.documentElement.classList.remove("dark")
        act(() => {
            window.dispatchEvent(new Event("themechange"))
        })
        expect(screen.getByAltText("Facebook").className).not.toContain("invert")

        unmount()
        expect(remove).toHaveBeenCalledWith("themechange", expect.any(Function))
        expect(remove).toHaveBeenCalledWith("cookieconsentchange", expect.any(Function))
    })

    it("falls back to Bulgarian when the language is missing", () => {
        contactState.language = undefined

        render(<Contact />)

        expect(screen.getByText("Никола Халачев")).toBeInTheDocument()
    })
})
