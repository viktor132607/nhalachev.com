import Contact from "../Contact"
import { createPageMetadata } from "../../src/lib/seo"

export const metadata = createPageMetadata({
    title: "Контакти – счетоводни услуги във Варна",
    description:
        "Свържете се с Halachev Accounting за счетоводно обслужване, ТРЗ, данъчни консултации и съдействие за бизнес във Варна и България.",
    path: "/contact",
})

export default function Page() {
    return <Contact />
}
