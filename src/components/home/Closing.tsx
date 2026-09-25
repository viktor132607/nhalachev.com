import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/images/mainlogo.png"
import { localizePath, type Locale } from "../../lib/locale"

export default function Closing({ highlights, locale }: { highlights: string[]; locale: Locale }) {
    const bg = locale === "bg"
    return (
        <section className="relative overflow-hidden bg-white dark:bg-[#151515] lg:grid lg:min-h-[570px] lg:grid-cols-[42%_58%]">
            <div className="relative z-10 flex flex-col justify-between bg-black px-7 py-12 text-white sm:px-12 lg:py-14 lg:pr-20 lg:[clip-path:polygon(0_0,100%_0,59%_100%,0_100%)]">
                <div className="max-w-[440px]">
                    <p className="text-sm uppercase tracking-wide">{bg ? "Готови сме да ви помогнем" : "Ready to help"}</p>
                    <h2 className="mt-6 font-serif text-[clamp(2.1rem,3vw,3.5rem)] leading-[1.12]">{bg ? "Нека изградим заедно по-сигурно бъдеще за вашия бизнес." : "Let’s build a more secure future for your business together."}</h2>
                </div>
                <Image src={logo} alt="Halachev Accounting" className="mt-12 h-auto w-44 invert sm:w-52" />
            </div>
            <div className="flex min-w-0 flex-col lg:-ml-[12%]">
                <div className="flex min-h-[220px] flex-1 items-center justify-center bg-gradient-to-br from-[#dddcd9] to-[#a6a5a2] text-center text-sm tracking-widest text-neutral-700 dark:from-[#444] dark:to-[#292929] dark:text-neutral-200 lg:min-h-[270px] lg:pl-[12%]" role="img" aria-label={bg ? "Място за снимка на работно пространство" : "Workspace image placeholder"}>
                    {bg ? "Снимка на работно пространство" : "Workspace image placeholder"}
                </div>
                <div className="bg-white px-7 py-7 dark:bg-[#1d1d1d] sm:px-12 lg:pl-[18%]">
                    <h3 className="home-display text-[clamp(1.45rem,2.25vw,2.2rem)] leading-tight text-[#292929] dark:text-white">{highlights[0]}</h3>
                    <ul className="mt-4 space-y-1 font-serif text-base leading-7 text-[#282828] dark:text-neutral-100 sm:text-lg">
                        {highlights.slice(1).map((item) => <li key={item} className="flex items-start gap-2"><span aria-hidden="true" className="pt-0.5 font-sans font-bold">☑</span><span>{item}</span></li>)}
                    </ul>
                </div>
                <div className="flex flex-wrap items-center gap-5 bg-[#eeecea] px-7 py-5 dark:bg-[#333] sm:px-12 lg:pl-[18%]">
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" className="h-14 w-14 shrink-0 text-black dark:text-white" aria-hidden="true"><rect x="5" y="12" width="54" height="47" rx="5" /><path d="M5 26h54M18 4v16M46 4v16M15 35h8m7 0h8m7 0h8m-38 10h8m7 0h8m7 0h8" /></svg>
                    <div className="min-w-0 flex-1 text-black dark:text-white"><p className="home-display text-[clamp(1.5rem,2.4vw,2.5rem)] leading-none">{bg ? "Свържете се с нас" : "Contact us"}</p><p className="home-display mt-1 text-xl">{bg ? "Налични сме 24/7." : "Available 24/7."}</p></div>
                    <Link href={localizePath(locale, "/contact")} className="inline-flex items-center gap-4 rounded-full bg-black px-7 py-3 text-white transition hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200">{bg ? "Контакти" : "Contact"}<span aria-hidden="true">→</span></Link>
                </div>
            </div>
        </section>
    )
}
