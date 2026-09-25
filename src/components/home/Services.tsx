import Image, { type StaticImageData } from "next/image"
import accountingImage from "../../../public/images/top_left_centered.png"
import payrollImage from "../../../public/images/top_right_centered.png"
import consultingImage from "../../../public/images/bottom_left_centered.png"
import setupImage from "../../../public/images/bottom_right_centered.png"
import type { HomeLocaleContent, ServiceSectionContent } from "../../content/home"
import ForeignClients from "./ForeignClients"
import ServiceSection from "./ServiceSection"

type ServicesProps = {
    title: string
    sections: ServiceSectionContent[]
    foreignClients: ServiceSectionContent
    content: HomeLocaleContent["hero"]
    locale: "bg" | "en"
}

const images: Record<string, StaticImageData> = { accounting: accountingImage, payroll: payrollImage, consulting: consultingImage, companySetup: setupImage }

export default function Services({ title, sections, foreignClients, content, locale }: ServicesProps) {
    return (
        <section id="services" className="scroll-mt-20 bg-[#f7f8f9] px-5 py-12 dark:bg-[#191919] sm:px-10 lg:px-12 lg:py-16">
            <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
                <div>
                    <p className="flex items-center gap-5 text-sm uppercase tracking-wide text-neutral-700 dark:text-neutral-300">{title}<span className="h-px w-32 bg-neutral-500" /></p>
                    <h2 className="home-display mt-4 max-w-[630px] text-[clamp(2.6rem,4.1vw,4.5rem)] leading-[1.02] text-[#292929] dark:text-white">{locale === "bg" ? "Професионална подкрепа за вашия бизнес" : "Professional support for your business"}</h2>
                    <p className="mt-7 max-w-[580px] text-lg leading-7 text-[#333] dark:text-neutral-200">{locale === "bg" ? "Предлагам цялостни решения в областта на счетоводството, данъците, ТРЗ и правните услуги, адаптирани към вашите нужди" : "Comprehensive accounting, tax, payroll and legal services tailored to your needs"}</p>
                    <a href="#service-details" className="mt-9 inline-flex items-center gap-4 rounded-full bg-black px-8 py-3.5 text-base text-white transition hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200" onClick={() => document.getElementById("service-details")?.setAttribute("open", "")}>{locale === "bg" ? "Изберете услуга" : "Choose a service"}<span aria-hidden="true" className="text-xl leading-none">→</span></a>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {content.quickItems.map((item) => (
                        <a href={`#${item.id}`} key={item.id} className="flex min-h-[165px] flex-col items-center justify-center rounded-2xl bg-white p-4 text-center transition hover:shadow-lg dark:bg-[#292929] sm:min-h-[190px]" onClick={() => document.getElementById("service-details")?.setAttribute("open", "")}>
                            <Image src={images[item.image]} alt="" className="h-[90px] w-[110px] object-contain" sizes="110px" />
                            <span className="mt-2 max-w-[180px] text-xs font-bold leading-5 text-[#222] dark:text-white sm:text-sm">{item.label}</span>
                        </a>
                    ))}
                </div>
            </div>
            <details id="service-details" className="mx-auto mt-9 max-w-[1280px] scroll-mt-24 rounded-xl bg-white px-5 py-5 dark:bg-[#292929] sm:px-8">
                <summary className="cursor-pointer font-semibold text-[#222] dark:text-white">{locale === "bg" ? "Всички услуги и дейности" : "All services and activities"}</summary>
                <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
                    {sections.map((section) => <ServiceSection key={section.id} section={section} />)}
                    <ForeignClients content={foreignClients} />
                </div>
            </details>
        </section>
    )
}
