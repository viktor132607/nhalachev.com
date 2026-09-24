import Terms from "../Terms"
import { createPageMetadata } from "../../src/lib/seo"

export const metadata = createPageMetadata({
    title: "Общи условия",
    description:
        "Общи условия за използване на nhalachev.com и информация относно предоставяните услуги.",
    path: "/terms",
    index: false,
})

export default function Page() {
    return <Terms />
}
