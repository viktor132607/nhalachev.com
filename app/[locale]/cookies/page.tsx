import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Cookies from "../../Cookies"
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
                  title: "Политика за бисквитките",
                  description: "Информация за използваните бисквитки и свързаните технологии в nhalachev.com.",
              }
            : {
                  title: "Cookie Policy",
                  description: "Information about cookies and related technologies used by nhalachev.com.",
              }

    return createLocalizedPageMetadata({
        locale,
        title: content.title,
        description: content.description,
        path: "/cookies",
        index: false,
    })
}

export default async function Page({ params }: PageProps) {
    const { locale } = await params

    if (!isLocale(locale)) {
        notFound()
    }

    return <Cookies locale={locale} />
}
