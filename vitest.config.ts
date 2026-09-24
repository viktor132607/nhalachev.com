import { defineConfig } from "vitest/config"

export default defineConfig({
    test: {
        environment: "jsdom",
        setupFiles: ["./vitest.setup.ts"],
        coverage: {
            provider: "v8",
            reporter: ["text", "json-summary"],
            all: true,
            include: [
                "app/api/contact/route.ts",
                "src/lib/cookies.ts",
                "src/services/api.ts",
                "app/Contact.tsx",
                "src/components/contact/ContactForm.tsx",
                "src/components/contact/SocialLinks.tsx",
                "src/components/contact/ContactDetails.tsx",
                "src/components/Navbar.tsx",
                "src/components/CookieBanner.tsx",
                "src/i18n/i18n.ts",
                "src/components/ContactBubble.tsx",
                "src/components/Footer.tsx",
                "src/components/LanguageHtmlSync.tsx",
                "src/lib/locale.ts",
                "src/lib/seo.ts",
                "src/components/StructuredData.tsx",
                "app/robots.ts",
                "app/sitemap.ts",
            ],
            thresholds: {
                lines: 100,
                functions: 100,
                branches: 100,
                statements: 100,
            },
        },
    },
})
