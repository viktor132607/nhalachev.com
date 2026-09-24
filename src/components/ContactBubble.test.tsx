import React from "react"
import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

const bubbleState = vi.hoisted(() => ({
    pathname: "/",
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
        bubbleState.pathname = "/"
        bubbleState.language = "bg"
    })

    it("renders the Bulgarian contact link outside the contact page", () => {
        render(<ContactBubble />)

        expect(screen.getByRole("link", { name: "Свържете се" })).toHaveAttribute(
            "href",
            "/contact"
        )
    })

    it("renders the English label", () => {
        bubbleState.language = "en"
        render(<ContactBubble />)

        expect(screen.getByRole("link", { name: "Contact us" })).toBeInTheDocument()
    })

    it("handles an undefined language", () => {
        bubbleState.language = undefined
        render(<ContactBubble />)

        expect(screen.getByRole("link", { name: "Contact us" })).toBeInTheDocument()
    })

    it("does not render on the contact page", () => {
        bubbleState.pathname = "/contact"
        const { container } = render(<ContactBubble />)

        expect(container).toBeEmptyDOMElement()
    })
})
