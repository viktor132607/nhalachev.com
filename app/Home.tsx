"use client"

import Closing from "../src/components/home/Closing"
import Benefits from "../src/components/home/Benefits"
import Hero from "../src/components/home/Hero"
import Services from "../src/components/home/Services"
import { homeContent } from "../src/content/home"
import { useSitePreferences } from "../src/context/SitePreferencesContext"
import type { Locale } from "../src/lib/locale"

export default function Home({ locale }: { locale?: Locale } = {}) {
    const { locale: contextLocale } = useSitePreferences()
    const resolvedLocale: Locale = locale ?? contextLocale
    const content = homeContent[resolvedLocale]

    const scrollToId = (id: string, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className="mx-auto w-full max-w-[1600px] scroll-smooth">
            <Hero content={content.hero} onScrollTo={scrollToId} locale={resolvedLocale} />
            <Benefits cards={content.benefits} />
            <Services
                title={content.servicesTitle}
                sections={content.serviceSections}
                foreignClients={content.foreignClients}
                content={content.hero}
                locale={resolvedLocale}
            />
            <Closing highlights={content.hero.highlights} locale={resolvedLocale} />
        </div>
    )
}
