import React from "react"
import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

const bubbleState = vi.hoisted(() => ({
    pathname: "/bg",
    language: "bg" as string | undefined,
}))

vi.mock("next/navigation", () => ({
    usePathname: () => bubbleState.pathname,
}))

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        i18n: { language: bubbleState.language },
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
        bubbleState.language = "bg"
    })

    it("renders the localized Bulgarian contact link", () => {
        render(<ContactBubble />)

        expect(screen.getByRole("link", { name: "Свържете се" })).toHaveAttribute(
            "href",
            "/bg/contact"
        )
    })

    it("uses the English route as the language source", () => {
        bubbleState.pathname = "/en/about"
        render(<ContactBubble />)

        expect(screen.getByRole("link", { name: "Contact us" })).toHaveAttribute(
            "href",
            "/en/contact"
        )
    })

    it("uses i18n fallback on an unprefixed route", () => {
        bubbleState.pathname = "/about"
        bubbleState.language = undefined
        render(<ContactBubble />)

        expect(screen.getByRole("link", { name: "Contact us" })).toHaveAttribute(
            "href",
            "/en/contact"
        )
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
