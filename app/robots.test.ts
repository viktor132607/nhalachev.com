// @vitest-environment node
import { describe, expect, it } from "vitest"
import robots from "./robots"

describe("robots", () => {
    it("allows public pages, blocks API crawling and exposes the sitemap", () => {
        expect(robots()).toEqual({
            rules: {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/"],
            },
            sitemap: "https://nhalachev.com/sitemap.xml",
            host: "https://nhalachev.com",
        })
    })
})
