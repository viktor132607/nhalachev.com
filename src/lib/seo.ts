import type { Metadata } from "next"

export const SITE_URL = "https://nhalachev.com"
export const SITE_NAME = "Halachev Accounting"
export const DEFAULT_TITLE = "Счетоводни услуги във Варна | Halachev Accounting"
export const DEFAULT_DESCRIPTION =
    "Счетоводни услуги във Варна: текущо счетоводно обслужване, ТРЗ, данъчни консултации, регистрация на фирми и съдействие за български и чуждестранни клиенти."
export const SOCIAL_IMAGE = "/images/mainlogo1000.png"

type PageMetadataOptions = {
    title: string
    description: string
    path: string
    index?: boolean
}

export function createPageMetadata({
    title,
    description,
    path,
    index = true,
}: PageMetadataOptions): Metadata {
    const canonical = path === "/" ? "/" : path.replace(/\/+$/, "")
    const socialTitle = `${title} | ${SITE_NAME}`

    return {
        title,
        description,
        alternates: {
            canonical,
        },
        openGraph: {
            type: "website",
            locale: "bg_BG",
            url: canonical,
            siteName: SITE_NAME,
            title: socialTitle,
            description,
            images: [
                {
                    url: SOCIAL_IMAGE,
                    alt: SITE_NAME,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: socialTitle,
            description,
            images: [SOCIAL_IMAGE],
        },
        robots: index
            ? {
                  index: true,
                  follow: true,
              }
            : {
                  index: false,
                  follow: true,
              },
    }
}

export const accountingServiceStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: SITE_NAME,
            inLanguage: ["bg", "en"],
            publisher: {
                "@id": `${SITE_URL}/#accounting-service`,
            },
        },
        {
            "@type": "AccountingService",
            "@id": `${SITE_URL}/#accounting-service`,
            name: SITE_NAME,
            alternateName: "Никола Халачев Акаунтинг",
            legalName: "ЕТ „Никола Халачев“",
            url: SITE_URL,
            logo: `${SITE_URL}/images/mainlogo1000.png`,
            image: `${SITE_URL}/images/fuckinghell.png`,
            description: DEFAULT_DESCRIPTION,
            telephone: "+359887764200",
            email: "nthalachev@gmail.com",
            address: {
                "@type": "PostalAddress",
                streetAddress: "ул. Архитект Петко Момчилов 24",
                addressLocality: "Варна",
                postalCode: "9000",
                addressCountry: "BG",
            },
            areaServed: [
                {
                    "@type": "City",
                    name: "Варна",
                },
                {
                    "@type": "Country",
                    name: "България",
                },
            ],
            founder: {
                "@type": "Person",
                name: "Никола Халачев",
                url: `${SITE_URL}/about`,
            },
            knowsLanguage: ["bg", "en"],
            sameAs: [
                "https://www.facebook.com/profile.php?id=61565641385893",
                "https://www.instagram.com/halachev_accounting/",
                "https://www.tiktok.com/@halachev_accounting",
            ],
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Счетоводни услуги",
                itemListElement: [
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Текущо счетоводно обслужване",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "ТРЗ и администриране на персонал",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Данъчни и счетоводни консултации",
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Съдействие при регистрация на фирми",
                        },
                    },
                ],
            },
        },
    ],
}

export function serializeStructuredData(data: unknown) {
    return JSON.stringify(data).replace(/</g, "\\u003c")
}
