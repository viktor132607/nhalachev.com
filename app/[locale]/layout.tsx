import { notFound } from "next/navigation"
import { isLocale, LOCALES } from "../../src/lib/locale"

export function generateStaticParams() {
    return LOCALES.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
}>) {
    const { locale } = await params

    if (!isLocale(locale)) {
        notFound()
    }

    return children
}
