import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Terms from "../../Terms"
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
                  title: "Общи условия",
                  description: "Общи условия за използване на nhalachev.com и информация относно предоставяните услуги.",
              }
            : {
                  title: "Terms of Service",
                  description: "Terms for using nhalachev.com and information about the services provided.",
              }

    return createLocalizedPageMetadata({
        locale,
        title: content.title,
        description: content.description,
        path: "/terms",
        index: false,
    })
}

export default async function Page({ params }: PageProps) {
    const { locale } = await params

    if (!isLocale(locale)) {
        notFound()
    }

    return <Terms locale={locale} />
}
