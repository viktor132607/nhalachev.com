import type { ServiceSectionContent } from "../../content/home"
import ForeignClients from "./ForeignClients"
import ServiceSection from "./ServiceSection"

type ServicesProps = {
    title: string
    sections: ServiceSectionContent[]
    foreignClients: ServiceSectionContent
}

export default function Services({ title, sections, foreignClients }: ServicesProps) {
    const containerClass =
        "mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] dark:border-zinc-700 dark:bg-zinc-800 sm:mt-5 sm:rounded-[28px] lg:mt-6"
    const titleWrapClass =
        "border-b border-slate-200 px-4 py-5 dark:border-zinc-700 sm:px-6 sm:py-6 md:px-8 lg:px-10"
    const titleClass =
        "text-center text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl"
    const contentClass = "divide-y divide-slate-200 dark:divide-zinc-700"

    return (
        <div id="services" className={containerClass}>
            <div className={titleWrapClass}>
                <h2 className={titleClass}>{title}</h2>
            </div>
            <div className={contentClass}>
                {sections.map((section) => (
                    <ServiceSection key={section.id} section={section} />
                ))}
                <ForeignClients content={foreignClients} />
            </div>
        </div>
    )
}
