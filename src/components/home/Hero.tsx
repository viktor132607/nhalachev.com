import Image from "next/image"
import heroImage from "../../../public/images/fuckinghell.png"
import type { HomeLocaleContent } from "../../content/home"

type HeroProps = {
    content: HomeLocaleContent["hero"]
    onScrollTo: (id: string, event: React.MouseEvent<HTMLAnchorElement>) => void
    locale: "bg" | "en"
}

export default function Hero({ content, onScrollTo, locale }: HeroProps) {
    return (
        <section id="home" className="relative isolate flex min-h-[480px] scroll-mt-20 flex-col overflow-hidden bg-[#f5f6f4] dark:bg-[#1b1b1b] sm:min-h-[440px] lg:min-h-[420px]">
            <div className="absolute inset-y-0 right-0 w-full sm:w-[85%]">
                <Image src={heroImage} alt="Nikola Halachev working at a laptop" fill priority sizes="(max-width: 640px) 100vw, 85vw" className="object-cover object-center max-sm:opacity-40 dark:opacity-70" />
            </div>
            <div className="absolute inset-0 home-hero-overlay" />
            <div className="relative z-10 flex w-full flex-1 flex-col justify-center px-6 py-12 sm:px-8 lg:px-9">
                <p className="text-xs font-medium uppercase tracking-[0.025em] text-neutral-700 dark:text-neutral-200 sm:text-sm">
                    {locale === "bg" ? "Счетоводство • Консултации • Подкрепа" : "Accounting • Consulting • Support"}
                </p>
                <h1 className="home-display mt-5 max-w-[590px] text-[clamp(2.7rem,4.25vw,4.25rem)] leading-[0.98] text-[#292929] dark:text-white">
                    {content.titleLines.map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}
                </h1>
                <p className="mt-5 max-w-[460px] whitespace-pre-line text-[15px] leading-[1.45] text-[#333] dark:text-neutral-100 sm:text-base">{content.description}</p>
                <a href="#services" onClick={(event) => onScrollTo("services", event)} className="mt-9 inline-flex w-fit items-center gap-4 rounded-full bg-black px-8 py-3.5 text-base text-white transition hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
                    {content.ctas[0].label} <span aria-hidden="true" className="text-xl leading-none">→</span>
                </a>
            </div>
        </section>
    )
}
