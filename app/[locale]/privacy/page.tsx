import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Privacy from "../../Privacy"
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
                  title: "Политика за поверителност",
                  description: "Политика за поверителност на nhalachev.com и информация за обработването и защитата на лични данни.",
              }
            : {
                  title: "Privacy Policy",
                  description: "Privacy policy for nhalachev.com and information about how personal data is processed and protected.",
              }

    return createLocalizedPageMetadata({
        locale,
        title: content.title,
        description: content.description,
        path: "/privacy",
        index: false,
    })
}

export default async function Page({ params }: PageProps) {
    const { locale } = await params

    if (!isLocale(locale)) {
        notFound()
    }

    return <Privacy locale={locale} />
}
