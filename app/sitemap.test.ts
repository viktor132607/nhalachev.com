// @vitest-environment node
import { describe, expect, it } from "vitest"
import sitemap from "./sitemap"

describe("sitemap", () => {
    it("lists only indexable public pages", () => {
        expect(sitemap()).toEqual([
            {
                url: "https://nhalachev.com/",
                changeFrequency: "weekly",
                priority: 1,
            },
            {
                url: "https://nhalachev.com/about",
                changeFrequency: "monthly",
                priority: 0.8,
            },
            {
                url: "https://nhalachev.com/contact",
                changeFrequency: "monthly",
                priority: 0.7,
            },
        ])
    })
})
