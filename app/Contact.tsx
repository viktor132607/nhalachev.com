"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import ContactDetails from "../src/components/contact/ContactDetails"
import ContactForm from "../src/components/contact/ContactForm"
import SocialLinks from "../src/components/contact/SocialLinks"
import { contactContent } from "../src/content/contact"
import {
    COOKIE_CONSENT_EVENT,
    hasAcceptedOptionalCookies,
} from "../src/lib/cookies"
import type { Locale } from "../src/lib/locale"

const THEME_KEY = "theme"

export default function Contact({ locale }: { locale?: Locale } = {}) {
    const { i18n } = useTranslation()
    const resolvedLocale: Locale =
        locale ??
        (i18n.language
            ? i18n.language.toLowerCase().startsWith("bg")
                ? "bg"
                : "en"
            : "bg")
    const content = contactContent[resolvedLocale]
    const [isDark, setIsDark] = useState(false)
    const [hasOptionalCookies, setHasOptionalCookies] = useState(false)

    useEffect(() => {
        const syncTheme = () => {
            const dark =
                document.documentElement.classList.contains("dark") ||
                localStorage.getItem(THEME_KEY) === "dark"
            setIsDark(dark)
        }

        syncTheme()
        window.addEventListener("themechange", syncTheme)

        return () => {
            window.removeEventListener("themechange", syncTheme)
        }
    }, [])

    useEffect(() => {
        const syncConsent = () => {
            setHasOptionalCookies(hasAcceptedOptionalCookies())
        }

        syncConsent()
        window.addEventListener(COOKIE_CONSENT_EVENT, syncConsent)

        return () => {
            window.removeEventListener(COOKIE_CONSENT_EVENT, syncConsent)
        }
    }, [])

    const pageClass =
        "mx-auto w-full max-w-[1400px] px-4 py-4 sm:px-5 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 xl:px-10"
    const heroClass =
        "mb-5 rounded-[22px] border border-slate-200 bg-white px-5 py-7 text-center shadow-[0_12px_35px_rgba(15,23,42,0.04)] dark:border-[#111111] dark:bg-[#2a2a2e] sm:mb-6 sm:rounded-[26px] sm:px-7 sm:py-9 lg:mb-8 lg:rounded-[30px] lg:px-10 lg:py-10"
    const cardClass =
        "rounded-[20px] border border-slate-200 bg-white p-4 shadow-[0_12px_35px_rgba(15,23,42,0.04)] dark:border-[#111111] dark:bg-[#2a2a2e] sm:rounded-[24px] sm:p-5 lg:rounded-[28px] lg:p-7"
    const sectionTitleClass =
        "text-[22px] font-bold text-slate-950 dark:text-white sm:text-[26px] lg:text-[30px]"

    return (
        <div className={pageClass}>
            <section className={heroClass}>
                <h1 className="mb-4 text-[30px] font-bold tracking-tight text-slate-950 dark:text-white sm:text-[40px] lg:text-[50px]">
                    {content.hero.title}
                </h1>
                <p className="mx-auto max-w-3xl text-[15px] leading-7 text-slate-600 dark:text-zinc-300 sm:text-[17px] sm:leading-8 lg:text-[18px]">
                    {content.hero.description}
                </p>
            </section>

            <section>
                <div className="grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] xl:gap-8">
                    <div className="flex flex-col gap-6 xl:gap-8">
                        <div className={cardClass}>
                            <h2 className={sectionTitleClass}>{content.form.title}</h2>
                            <ContactForm content={content.form} />
                        </div>

                        <div className={cardClass}>
                            <SocialLinks title={content.socialTitle} isDark={isDark} />
                        </div>
                    </div>

                    <ContactDetails
                        content={content.details}
                        hasOptionalCookies={hasOptionalCookies}
                    />
                </div>
            </section>
        </div>
    )
}
