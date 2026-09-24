import React from "react"
import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

const bubbleState = vi.hoisted(() => ({
    pathname: "/bg",
    locale: "bg" as "bg" | "en",
}))

vi.mock("next/navigation", () => ({
    usePathname: () => bubbleState.pathname,
}))

vi.mock("../context/SitePreferencesContext", () => ({
    useSitePreferences: () => ({
        locale: bubbleState.locale,
        isDark: false,
        themeReady: true,
        toggleTheme: vi.fn(),
        setLocale: vi.fn(),
    }),
}))

vi.mock("next/link", () => ({
    default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a href={String(href)} {...props}>{children}</a>
    ),
}))

import ContactBubble from "./ContactBubble"

describe("ContactBubble", () => {
    beforeEach(() => {
        bubbleState.pathname = "/bg"
        bubbleState.locale = "bg"
    })

    it("renders the localized Bulgarian contact link", () => {
        render(<ContactBubble />)
        expect(screen.getByRole("link", { name: "Свържете се" })).toHaveAttribute("href", "/bg/contact")
    })

    it("renders the localized English contact link", () => {
        bubbleState.pathname = "/en/about"
        bubbleState.locale = "en"
        render(<ContactBubble />)
        expect(screen.getByRole("link", { name: "Contact us" })).toHaveAttribute("href", "/en/contact")
    })

    it("does not render on a localized contact page", () => {
        bubbleState.pathname = "/bg/contact"
        const { container } = render(<ContactBubble />)
        expect(container).toBeEmptyDOMElement()
    })

    it("also handles the legacy contact URL", () => {
        bubbleState.pathname = "/contact"
        const { container } = render(<ContactBubble />)
        expect(container).toBeEmptyDOMElement()
    })
})
