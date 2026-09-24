import Home from "./Home"
import { createPageMetadata } from "../src/lib/seo"

export const metadata = createPageMetadata({
    title: "Счетоводни услуги във Варна",
    description:
        "Счетоводни услуги във Варна за фирми и свободни професии: текущо счетоводно обслужване, ТРЗ, данъчни консултации и съдействие за чуждестранни клиенти.",
    path: "/",
})

export default function Page() {
    return <Home />
}
