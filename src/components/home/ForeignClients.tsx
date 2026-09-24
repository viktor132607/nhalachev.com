import type { ServiceSectionContent } from "../../content/home"
import ServiceSection from "./ServiceSection"

export default function ForeignClients({ content }: { content: ServiceSectionContent }) {
    return <ServiceSection section={content} />
}
