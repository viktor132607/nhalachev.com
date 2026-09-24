import Privacy from "../Privacy"
import { createPageMetadata } from "../../src/lib/seo"

export const metadata = createPageMetadata({
    title: "Политика за поверителност",
    description:
        "Политика за поверителност на nhalachev.com и информация за обработването и защитата на лични данни.",
    path: "/privacy",
    index: false,
})

export default function Page() {
    return <Privacy />
}
