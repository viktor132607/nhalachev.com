// @vitest-environment node
import { describe, expect, it } from "vitest"
import nextConfig from "../next.config"

describe("legacy locale redirects", () => {
    it("permanently redirects unprefixed routes to Bulgarian canonical URLs", async () => {
        const redirects = await nextConfig.redirects?.()

        expect(redirects).toEqual([
            { source: "/", destination: "/bg", permanent: true },
            { source: "/about", destination: "/bg/about", permanent: true },
            { source: "/contact", destination: "/bg/contact", permanent: true },
            { source: "/privacy", destination: "/bg/privacy", permanent: true },
            { source: "/terms", destination: "/bg/terms", permanent: true },
            { source: "/cookies", destination: "/bg/cookies", permanent: true },
        ])
    })
})
