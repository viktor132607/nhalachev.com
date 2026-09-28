import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

vi.mock("../src/context/SitePreferencesContext", () => ({
    useSitePreferences: () => ({
        locale: "bg",
        isDark: false,
        themeReady: true,
        toggleTheme: vi.fn(),
        setLocale: vi.fn(),
    }),
}))

import Home from "./Home"

describe("Home heading hierarchy", () => {
    it("uses one H1 and nested service headings in Bulgarian", () => {
        render(<Home locale="bg" />)

        expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1)
        expect(screen.getByRole("heading", { level: 1, name: /Счетоводство без излишен хаос/ })).toBeInTheDocument()
        expect(screen.getByRole("heading", { level: 2, name: "Услуги & Дейности" })).toBeInTheDocument()

        for (const name of [
            "Счетоводни услуги",
            "Консултации",
            "ТРЗ",
            "Правни услуги",
            "Партньорски услуги",
            "За чуждестранни клиенти и партньори",
        ]) {
            expect(screen.getByRole("heading", { level: 3, name })).toBeInTheDocument()
        }
    })

    it("uses one H1 and nested service headings in English", () => {
        render(<Home locale="en" />)

        expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1)
        expect(screen.getByRole("heading", { level: 1, name: /Accounting without the extra chaos/ })).toBeInTheDocument()
        expect(screen.getByRole("heading", { level: 2, name: "Services & Activities" })).toBeInTheDocument()

        for (const name of [
            "Accounting Services",
            "Consultations",
            "Staff, wages and salaries",
            "Law consultations",
            "Partnership Level Services",
            "For foreign clients and partners",
        ]) {
            expect(screen.getByRole("heading", { level: 3, name })).toBeInTheDocument()
        }
    })
})
