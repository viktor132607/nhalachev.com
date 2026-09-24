// @vitest-environment node
import { describe, expect, it } from "vitest"
import HomePage, { generateMetadata as homeMetadata } from "./[locale]/page"
import AboutPage, { generateMetadata as aboutMetadata } from "./[locale]/about/page"
import ContactPage, { generateMetadata as contactMetadata } from "./[locale]/contact/page"
import PrivacyPage, { generateMetadata as privacyMetadata } from "./[locale]/privacy/page"
import TermsPage, { generateMetadata as termsMetadata } from "./[locale]/terms/page"
import CookiesPage, { generateMetadata as cookiesMetadata } from "./[locale]/cookies/page"

describe("localized route smoke tests", () => {
    it("builds Bulgarian and English home route metadata and page props", async () => {
        const bgMeta = await homeMetadata({ params: Promise.resolve({ locale: "bg" }) })
        const enMeta = await homeMetadata({ params: Promise.resolve({ locale: "en" }) })
        const bgPage = await HomePage({ params: Promise.resolve({ locale: "bg" }) })
        const enPage = await HomePage({ params: Promise.resolve({ locale: "en" }) })

        expect(bgMeta.alternates).toMatchObject({ canonical: "/bg" })
        expect(enMeta.alternates).toMatchObject({ canonical: "/en" })
        expect(bgPage.props.locale).toBe("bg")
        expect(enPage.props.locale).toBe("en")
    })

    it("builds localized metadata and props for every public route", async () => {
        const cases = [
            [AboutPage, aboutMetadata, "/about", true],
            [ContactPage, contactMetadata, "/contact", true],
            [PrivacyPage, privacyMetadata, "/privacy", false],
            [TermsPage, termsMetadata, "/terms", false],
            [CookiesPage, cookiesMetadata, "/cookies", false],
        ] as const

        for (const [Page, metadataFactory, path, shouldIndex] of cases) {
            const metadata = await metadataFactory({
                params: Promise.resolve({ locale: "en" }),
            })
            const page = await Page({
                params: Promise.resolve({ locale: "en" }),
            })

            expect(metadata.alternates).toMatchObject({
                canonical: `/en${path}`,
                languages: {
                    bg: `/bg${path}`,
                    en: `/en${path}`,
                },
            })
            expect(metadata.robots).toMatchObject({
                index: shouldIndex,
                follow: true,
            })
            expect(page.props.locale).toBe("en")
        }
    })
})
