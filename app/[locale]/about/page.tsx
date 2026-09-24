import type { Metadata } from "next"
import { notFound } from "next/navigation"
import About from "../../About"
import { createLocalizedPageMetadata } from "../../../src/lib/seo"
import { isLocale } from "../../../src/lib/locale"

type PageProps = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params

    if (!isLocale(locale)) {
        notFound()
    }

    const content =
        locale === "bg"
            ? {
                  title: "Никола Халачев – счетоводител във Варна",
                  description: "Научете повече за Никола Халачев, професионалния му опит, квалификация и подход към счетоводното обслужване и консултациите.",
              }
            : {
                  title: "Nikola Halachev – accountant in Varna",
                  description: "Learn more about Nikola Halachev, his professional experience, qualifications and approach to accounting and business consulting.",
              }

    return createLocalizedPageMetadata({
        locale,
        title: content.title,
        description: content.description,
        path: "/about",
        index: true,
    })
}

export default async function Page({ params }: PageProps) {
    const { locale } = await params

    if (!isLocale(locale)) {
        notFound()
    }

    return <About locale={locale} />
}
