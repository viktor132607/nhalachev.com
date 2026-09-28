import Image, { type StaticImageData } from "next/image"
import heroImage from "../../../public/images/fuckinghell.png"
import accountingImage from "../../../public/images/top_left_centered.png"
import payrollImage from "../../../public/images/top_right_centered.png"
import consultingImage from "../../../public/images/bottom_left_centered.png"
import companySetupImage from "../../../public/images/bottom_right_centered.png"
import type { HomeLocaleContent, QuickImageKey } from "../../content/home"

type HeroProps = {
    content: HomeLocaleContent["hero"]
    onScrollTo: (id: string, event: React.MouseEvent<HTMLAnchorElement>) => void
}

const quickImages: Record<QuickImageKey, StaticImageData> = {
    accounting: accountingImage,
    payroll: payrollImage,
    consulting: consultingImage,
    companySetup: companySetupImage,
}

export default function Hero({ content, onScrollTo }: HeroProps) {
    const heroClass =
        "relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] dark:border-zinc-700 dark:bg-zinc-800 sm:rounded-[28px]"
    const heroInnerClass =
        "px-3 py-4 sm:px-4 sm:py-5 md:px-5 md:py-6 lg:px-6 lg:py-6 xl:px-7 xl:py-7 2xl:px-8 2xl:py-8"
    const heroGridClass = "grid items-start gap-4 lg:grid-cols-[0.6fr_0.4fr] lg:gap-5"
    const heroTitleClass =
        "max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl xl:text-7xl"
    const heroTextClass =
        "mt-3 max-w-3xl text-base leading-8 text-slate-600 dark:text-zinc-300 sm:mt-4 sm:text-[17px] sm:leading-9 md:text-lg lg:text-[20px] lg:leading-10"
    const heroButtonsClass = "flex flex-col items-stretch gap-2 sm:grid sm:grid-cols-2 sm:items-stretch"
    const primaryButtonClass =
        "inline-flex h-[52px] w-full items-center justify-center rounded-xl border border-slate-950 bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-slate-200"
    const secondaryButtonClass =
        "inline-flex h-[52px] w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
    const quickStripClass = "mt-4 grid gap-3 sm:grid-cols-2"
    const quickItemClass =
        "group block overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
    const quickItemImageWrapClass =
        "flex h-[120px] items-center justify-center overflow-hidden rounded-xl bg-transparent dark:bg-transparent sm:h-[128px]"
    const quickItemImageClass =
        "max-h-[110px] w-auto object-contain transition duration-300 group-hover:scale-125 sm:max-h-[120px]"
    const quickItemTextClass =
        "flex min-h-[72px] items-center justify-center px-2 pt-3 text-center text-[16px] font-semibold leading-7 text-slate-800 dark:text-zinc-100"
    const bulletItemClass = "flex items-start gap-3"
    const bulletCheckClass =
        "mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white dark:bg-white dark:text-black"

    return (
        <section id="home" className={heroClass}>
            <div className={heroInnerClass}>
                <div className={heroGridClass}>
                    <div>
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                            <Image
                                src={heroImage}
                                alt="Nikola Halachev Accounting"
                                className="h-auto w-full object-cover"
                                sizes="(max-width: 1024px) 100vw, 60vw"
                                priority
                            />
                        </div>

                        <div className="mt-4 lg:mt-5">
                            <h1 className={heroTitleClass}>
                                {content.titleLines.map((line, index) => (
                                    <span key={line}>
                                        {index > 0 && <br />}
                                        {line}
                                    </span>
                                ))}
                            </h1>
                            <p className={heroTextClass}>{content.description}</p>
                        </div>
                    </div>

                    <div className="flex h-full flex-col">
                        <div>
                            <div className={heroButtonsClass}>
                                {content.ctas.map((cta) => (
                                    <a
                                        key={cta.id}
                                        href={`#${cta.id}`}
                                        onClick={(event) => onScrollTo(cta.id, event)}
                                        className={cta.variant === "primary" ? primaryButtonClass : secondaryButtonClass}
                                    >
                                        {cta.label}
                                    </a>
                                ))}
                            </div>

                            <div className={quickStripClass}>
                                {content.quickItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={(event) => onScrollTo(item.id, event)}
                                        className={quickItemClass}
                                    >
                                        <div className={quickItemImageWrapClass}>
                                            <Image
                                                src={quickImages[item.image]}
                                                alt={item.alt}
                                                className={quickItemImageClass}
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                                            />
                                        </div>
                                        <div className={quickItemTextClass}>{item.label}</div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="mt-5 lg:mt-auto lg:pt-6">
                            <div className="space-y-3">
                                {content.highlights.map((highlight) => (
                                    <div key={highlight} className={bulletItemClass}>
                                        <span className={bulletCheckClass}>✓</span>
                                        <span className="text-base leading-8 text-slate-700 dark:text-zinc-200 sm:text-[16px] sm:leading-9">
                                            {highlight}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
