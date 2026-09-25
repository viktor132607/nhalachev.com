import type { ContactLocaleContent } from "../../content/contact"

const MAP_EMBED_URL =
    "https://www.google.com/maps?hl=bg&q=ул.%20Архитект%20Петко%20Момчилов%2024,%20Варна%209000&z=17&output=embed"
const MAP_SEARCH_URL =
    "https://www.google.com/maps/search/?api=1&query=ул.%20Архитект%20Петко%20Момчилов%2024,%20Варна%209000"

export default function ContactDetails({
    content,
    hasOptionalCookies,
}: {
    content: ContactLocaleContent["details"]
    hasOptionalCookies: boolean
}) {
    const cardClass =
        "rounded-[20px] border border-slate-200 bg-white p-4 shadow-[0_12px_35px_rgba(15,23,42,0.04)] dark:border-[#111111] dark:bg-[#2a2a2e] sm:rounded-[24px] sm:p-5 lg:rounded-[28px] lg:p-7"
    const sectionTitleClass =
        "text-[22px] font-bold text-slate-950 dark:text-white sm:text-[26px] lg:text-[30px]"
    const textClass =
        "text-[15px] leading-7 text-slate-700 dark:text-zinc-200 sm:text-base sm:leading-8"
    const linkClass =
        "block text-[15px] leading-7 font-semibold text-slate-700 transition hover:text-slate-950 dark:text-zinc-200 dark:hover:text-white sm:text-base sm:leading-8"
    const secondaryButtonClass =
        "inline-flex min-h-[46px] w-full items-center justify-center rounded-full border border-slate-950 bg-slate-950 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-slate-800 sm:w-auto dark:border-white dark:bg-white dark:text-black dark:hover:bg-slate-200"

    return (
        <div className="flex flex-col gap-6">
            <div className={cardClass}>
                <h2 className={sectionTitleClass}>{content.emailTitle}</h2>
                <div className="mt-5 space-y-3">
                    <a className={`${linkClass} break-all`} href="mailto:nthalachev@gmail.com">
                        nthalachev@gmail.com
                    </a>
                    <a
                        className={`${linkClass} break-all`}
                        href="mailto:nikolahalachev2811@gmail.com"
                    >
                        nikolahalachev2811@gmail.com
                    </a>
                </div>
            </div>

            <div className={cardClass}>
                <h2 className={sectionTitleClass}>{content.phoneTitle}</h2>
                <div className="mt-5 space-y-3">
                    <a className={linkClass} href="tel:+359887764200">
                        088 776 4200
                    </a>
                </div>
            </div>

            <div className={`${cardClass} overflow-hidden`}>
                <h2 className={sectionTitleClass}>{content.addressTitle}</h2>

                <div className="mt-5">
                    <p className={textClass}>{content.address}</p>
                </div>

                <div className="mt-5">
                    {hasOptionalCookies ? (
                        <div className="overflow-hidden rounded-[20px] border border-slate-200 dark:border-zinc-700 sm:rounded-[22px] lg:rounded-[24px]">
                            <iframe
                                title={content.addressTitle}
                                className="h-[300px] w-full border-0 sm:h-[340px] lg:h-[380px]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src={MAP_EMBED_URL}
                            />
                        </div>
                    ) : (
                        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-[20px] border border-slate-200 bg-slate-50 px-5 py-8 text-center dark:border-zinc-700 dark:bg-zinc-900 sm:rounded-[22px] lg:rounded-[24px]">
                            <p className="max-w-md text-sm leading-7 text-slate-700 dark:text-zinc-200 sm:text-[15px]">
                                {content.mapPlaceholder}
                            </p>
                        </div>
                    )}
                </div>

                <div className="mt-5">
                    <a
                        className={secondaryButtonClass}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={MAP_SEARCH_URL}
                    >
                        {content.openMap}
                    </a>
                </div>
            </div>
        </div>
    )
}
