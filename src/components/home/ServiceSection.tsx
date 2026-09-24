import type { ServiceSectionContent } from "../../content/home"

export default function ServiceSection({ section }: { section: ServiceSectionContent }) {
    const sectionClass = "scroll-mt-24 px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:px-10 xl:px-12"
    const headingClass =
        "mb-3 text-2xl font-bold text-slate-950 dark:text-white sm:mb-4 sm:text-3xl md:text-[32px]"
    const textClass =
        "whitespace-pre-line text-base leading-8 text-slate-700 dark:text-zinc-200 sm:text-[16px] sm:leading-9 md:text-lg"
    const listClass =
        "mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-slate-700 dark:text-zinc-200 sm:pl-6 sm:text-[16px] sm:leading-9 md:text-lg"

    return (
        <section className={sectionClass} id={section.id}>
            <h3 className={headingClass}>{section.title}</h3>
            {section.blocks.map((block, index) =>
                block.type === "paragraph" ? (
                    <p
                        key={`paragraph-${index}`}
                        className={index === 0 ? textClass : `${textClass} mt-6`}
                    >
                        {block.text}
                    </p>
                ) : (
                    <ul key={`list-${index}`} className={listClass}>
                        {block.items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                )
            )}
        </section>
    )
}
