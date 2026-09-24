import React from "react"
import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import StructuredData from "./StructuredData"

describe("StructuredData", () => {
    it("renders valid AccountingService JSON-LD", () => {
        const { container } = render(<StructuredData />)
        const script = container.querySelector(
            'script#accounting-service-schema[type="application/ld+json"]'
        )

        expect(script).toBeInTheDocument()

        const data = JSON.parse(script?.textContent ?? "{}")
        const service = data["@graph"].find(
            (item: { "@type"?: string }) => item["@type"] === "AccountingService"
        )

        expect(service).toMatchObject({
            name: "Halachev Accounting",
            legalName: "ЕТ „Никола Халачев“",
            telephone: "+359887764200",
            email: "nthalachev@gmail.com",
        })
    })
})
