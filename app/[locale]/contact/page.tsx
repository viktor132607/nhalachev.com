import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Contact from "../../Contact"
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
                  title: "Контакти – счетоводни услуги във Варна",
                  description: "Свържете се с Halachev Accounting за счетоводно обслужване, ТРЗ, данъчни консултации и съдействие за бизнес във Варна и България.",
              }
            : {
                  title: "Contact – accounting services in Varna",
                  description: "Contact Halachev Accounting for bookkeeping, payroll, tax consulting and business support in Varna and Bulgaria.",
              }

    return createLocalizedPageMetadata({
        locale,
        title: content.title,
        description: content.description,
        path: "/contact",
        index: true,
    })
}

export default async function Page({ params }: PageProps) {
    const { locale } = await params

    if (!isLocale(locale)) {
        notFound()
    }

    return <Contact locale={locale} />
}
