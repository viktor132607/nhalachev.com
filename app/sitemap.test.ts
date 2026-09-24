// @vitest-environment node
import { describe, expect, it } from "vitest"
import sitemap from "./sitemap"

describe("sitemap", () => {
    it("lists localized indexable pages with hreflang alternates", () => {
        expect(sitemap()).toEqual([
            {
                url: "https://nhalachev.com/bg",
                changeFrequency: "weekly",
                priority: 1,
                alternates: {
                    languages: {
                        bg: "https://nhalachev.com/bg",
                        en: "https://nhalachev.com/en",
                    },
                },
            },
            {
                url: "https://nhalachev.com/en",
                changeFrequency: "weekly",
                priority: 1,
                alternates: {
                    languages: {
                        bg: "https://nhalachev.com/bg",
                        en: "https://nhalachev.com/en",
                    },
                },
            },
            {
                url: "https://nhalachev.com/bg/about",
                changeFrequency: "monthly",
                priority: 0.8,
                alternates: {
                    languages: {
                        bg: "https://nhalachev.com/bg/about",
                        en: "https://nhalachev.com/en/about",
                    },
                },
            },
            {
                url: "https://nhalachev.com/en/about",
                changeFrequency: "monthly",
                priority: 0.8,
                alternates: {
                    languages: {
                        bg: "https://nhalachev.com/bg/about",
                        en: "https://nhalachev.com/en/about",
                    },
                },
            },
            {
                url: "https://nhalachev.com/bg/contact",
                changeFrequency: "monthly",
                priority: 0.7,
                alternates: {
                    languages: {
                        bg: "https://nhalachev.com/bg/contact",
                        en: "https://nhalachev.com/en/contact",
                    },
                },
            },
            {
                url: "https://nhalachev.com/en/contact",
                changeFrequency: "monthly",
                priority: 0.7,
                alternates: {
                    languages: {
                        bg: "https://nhalachev.com/bg/contact",
                        en: "https://nhalachev.com/en/contact",
                    },
                },
            },
        ])
    })
})
