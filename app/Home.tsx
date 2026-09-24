"use client"

import { useTranslation } from "react-i18next"
import Benefits from "../src/components/home/Benefits"
import Hero from "../src/components/home/Hero"
import Services from "../src/components/home/Services"
import { homeContent } from "../src/content/home"
import type { Locale } from "../src/lib/locale"

export default function Home({ locale }: { locale?: Locale } = {}) {
    const { i18n } = useTranslation()
    const resolvedLocale: Locale =
        locale ?? (i18n.language?.toLowerCase().startsWith("bg") ? "bg" : "en")
    const content = homeContent[resolvedLocale]

    const scrollToId = (id: string, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className="mx-auto w-full max-w-[1600px] scroll-smooth px-2 py-2 sm:px-3 sm:py-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8">
            <Hero content={content.hero} onScrollTo={scrollToId} />
            <Benefits cards={content.benefits} />
            <Services
                title={content.servicesTitle}
                sections={content.serviceSections}
                foreignClients={content.foreignClients}
            />
        </div>
    )
}
