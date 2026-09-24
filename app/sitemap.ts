import type { MetadataRoute } from "next"
import { SITE_URL } from "../src/lib/seo"

const homeAlternates = {
    languages: {
        bg: `${SITE_URL}/bg`,
        en: `${SITE_URL}/en`,
    },
}

const aboutAlternates = {
    languages: {
        bg: `${SITE_URL}/bg/about`,
        en: `${SITE_URL}/en/about`,
    },
}

const contactAlternates = {
    languages: {
        bg: `${SITE_URL}/bg/contact`,
        en: `${SITE_URL}/en/contact`,
    },
}

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${SITE_URL}/bg`,
            changeFrequency: "weekly",
            priority: 1,
            alternates: homeAlternates,
        },
        {
            url: `${SITE_URL}/en`,
            changeFrequency: "weekly",
            priority: 1,
            alternates: homeAlternates,
        },
        {
            url: `${SITE_URL}/bg/about`,
            changeFrequency: "monthly",
            priority: 0.8,
            alternates: aboutAlternates,
        },
        {
            url: `${SITE_URL}/en/about`,
            changeFrequency: "monthly",
            priority: 0.8,
            alternates: aboutAlternates,
        },
        {
            url: `${SITE_URL}/bg/contact`,
            changeFrequency: "monthly",
            priority: 0.7,
            alternates: contactAlternates,
        },
        {
            url: `${SITE_URL}/en/contact`,
            changeFrequency: "monthly",
            priority: 0.7,
            alternates: contactAlternates,
        },
    ]
}
