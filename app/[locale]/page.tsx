import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Home from "../Home"
import { createLocalizedPageMetadata } from "../../src/lib/seo"
import { isLocale } from "../../src/lib/locale"

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
                  title: "Счетоводни услуги във Варна",
                  description:
                      "Счетоводни услуги във Варна за фирми и свободни професии: текущо счетоводно обслужване, ТРЗ, данъчни консултации и съдействие за чуждестранни клиенти.",
              }
            : {
                  title: "Accounting services in Varna",
                  description:
                      "Accounting services in Varna for companies and professionals: bookkeeping, payroll, tax consulting and support for Bulgarian and international clients.",
              }

    return createLocalizedPageMetadata({
        locale,
        title: content.title,
        description: content.description,
        path: "/",
    })
}

export default async function Page({ params }: PageProps) {
    const { locale } = await params

    if (!isLocale(locale)) {
        notFound()
    }

    return <Home locale={locale} />
}
