import Cookies from "../Cookies"
import { createPageMetadata } from "../../src/lib/seo"

export const metadata = createPageMetadata({
    title: "Политика за бисквитките",
    description:
        "Информация за използваните бисквитки и свързаните технологии в nhalachev.com.",
    path: "/cookies",
    index: false,
})

export default function Page() {
    return <Cookies />
}
