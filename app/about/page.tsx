import About from "../About"
import { createPageMetadata } from "../../src/lib/seo"

export const metadata = createPageMetadata({
    title: "Никола Халачев – счетоводител във Варна",
    description:
        "Научете повече за Никола Халачев, професионалния му опит, квалификация и подход към счетоводното обслужване и консултациите.",
    path: "/about",
})

export default function Page() {
    return <About />
}
