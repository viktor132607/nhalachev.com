import { describe, expect, it } from "vitest"
import {
    DEFAULT_DESCRIPTION,
    SITE_NAME,
    SOCIAL_IMAGE,
    accountingServiceStructuredData,
    createPageMetadata,
    serializeStructuredData,
} from "./seo"

describe("SEO helpers", () => {
    it("creates indexable home metadata", () => {
        const metadata = createPageMetadata({
            title: "Home title",
            description: "Home description",
            path: "/",
        })

        expect(metadata.title).toBe("Home title")
        expect(metadata.description).toBe("Home description")
        expect(metadata.alternates).toEqual({ canonical: "/" })
        expect(metadata.openGraph).toMatchObject({
            type: "website",
            locale: "bg_BG",
            url: "/",
            siteName: SITE_NAME,
            title: `Home title | ${SITE_NAME}`,
            description: "Home description",
            images: [{ url: SOCIAL_IMAGE, alt: SITE_NAME }],
        })
        expect(metadata.twitter).toMatchObject({
            card: "summary_large_image",
            title: `Home title | ${SITE_NAME}`,
            description: "Home description",
            images: [SOCIAL_IMAGE],
        })
        expect(metadata.robots).toEqual({ index: true, follow: true })
    })

    it("normalizes a trailing slash and creates noindex metadata", () => {
        const metadata = createPageMetadata({
            title: "Legal",
            description: "Legal description",
            path: "/privacy/",
            index: false,
        })

        expect(metadata.alternates).toEqual({ canonical: "/privacy" })
        expect(metadata.robots).toEqual({ index: false, follow: true })
    })

    it("contains AccountingService structured data", () => {
        const graph = accountingServiceStructuredData["@graph"]

        expect(graph[0]).toMatchObject({
            "@type": "WebSite",
            name: SITE_NAME,
        })
        expect(graph[1]).toMatchObject({
            "@type": "AccountingService",
            name: SITE_NAME,
            description: DEFAULT_DESCRIPTION,
            telephone: "+359887764200",
        })
    })

    it("serializes JSON-LD safely", () => {
        const serialized = serializeStructuredData({
            value: "</script><script>alert(1)</script>",
        })

        expect(serialized).not.toContain("<")
        expect(serialized).toContain("\\u003c/script>")
        expect(JSON.parse(serialized)).toEqual({
            value: "</script><script>alert(1)</script>",
        })
    })
})
