// @vitest-environment node
import { describe, expect, it } from "vitest"
import nextConfig, { securityHeaders } from "../next.config"

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


describe("security headers", () => {
    it("applies the security policy to every route", async () => {
        const headers = await nextConfig.headers?.()

        expect(headers).toEqual([
            {
                source: "/(.*)",
                headers: securityHeaders,
            },
        ])
    })

    it("locks down framing, MIME sniffing, permissions and external sources", () => {
        const headerMap = Object.fromEntries(
            securityHeaders.map(({ key, value }) => [key, value])
        )

        expect(headerMap["X-Content-Type-Options"]).toBe("nosniff")
        expect(headerMap["Referrer-Policy"]).toBe("strict-origin-when-cross-origin")
        expect(headerMap["Permissions-Policy"]).toBe(
            "camera=(), microphone=(), geolocation=(), payment=(), usb=()"
        )
        expect(headerMap["X-Frame-Options"]).toBe("DENY")

        const csp = headerMap["Content-Security-Policy"]
        expect(csp).toContain("default-src 'self'")
        expect(csp).toContain("script-src 'self' 'unsafe-inline'")
        expect(csp).not.toContain("'unsafe-eval'")
        expect(csp).toContain("frame-src https://www.google.com")
        expect(csp).toContain("object-src 'none'")
        expect(csp).toContain("base-uri 'self'")
        expect(csp).toContain("form-action 'self'")
        expect(csp).toContain("frame-ancestors 'none'")
        expect(csp).toContain("upgrade-insecure-requests")
    })

    it("disables the Next.js powered-by header", () => {
        expect(nextConfig.poweredByHeader).toBe(false)
    })
})
