"use client"

import Image from "next/image"
import Link from "next/link"
import mainLogo from "../../public/images/mainlogo.png"
import facebookIcon from "../../public/images/facebook.png"
import instagramIcon from "../../public/images/black_15047119.png"
import messengerIcon from "../../public/images/messenger.png"
import tiktokIcon from "../../public/images/tik-tok_4817846.png"
import whatsappIcon from "../../public/images/1384007.png"
import viberIcon from "../../public/images/viber.png"
import revolutIcon from "../../public/images/revolut.png"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { getLocaleFromPathname, localizePath } from "../lib/locale"

const THEME_KEY = "theme"

export default function Footer() {
    const { i18n } = useTranslation()
    const pathname = usePathname()
    const [mounted, setMounted] = useState(false)
    const [isDark, setIsDark] = useState(false)
    const routeLocale = getLocaleFromPathname(pathname)
    const fallbackLocale = i18n.language?.toLowerCase().startsWith("en") ? "en" : "bg"
    const locale = routeLocale ?? fallbackLocale
    const isBg = locale === "bg"

    useEffect(() => {
        const syncInitialTheme = window.setTimeout(() => {
            const savedTheme = localStorage.getItem(THEME_KEY)
            const dark = savedTheme === "dark"

            document.documentElement.classList.toggle("dark", dark)
            setMounted(true)
            setIsDark(dark)
        }, 0)

        const handleThemeChange = () => {
            const nextDark = document.documentElement.classList.contains("dark")
            setIsDark(nextDark)
        }

        window.addEventListener("themechange", handleThemeChange)

        return () => {
            window.clearTimeout(syncInitialTheme)
            window.removeEventListener("themechange", handleThemeChange)
        }
    }, [])

    const t = isBg
        ? {
              description: "Професионално счетоводно обслужване и консултации. Налични 24/7.",
              company: "Страници",
              info: "Информация",
              home: "Начало",
              about: "За мен",
              contact: "Контакти",
              privacy: "Политика за поверителност",
              terms: "Общи условия",
              cookies: "Политика за бисквитките",
              rights: "Всички права запазени.",
              phone: "Тел:",
              createdBy: "Created by",
          }
        : {
              description: "Professional accounting & consulting services. Available 24/7.",
              company: "Pages",
              info: "Legal",
              home: "Home",
              about: "About Me",
              contact: "Contact",
              privacy: "Privacy Policy",
              terms: "Terms of Service",
              cookies: "Cookie Policy",
              rights: "All rights reserved.",
              phone: "Phone:",
              createdBy: "Created by",
          }

    const footerClass =
    "border-t border-slate-200 bg-white dark:border-[#111111] dark:bg-[#000000]"

    const wrapperClass =
        "mx-auto max-w-[1600px] px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 xl:px-12 2xl:px-16"

    const topGridClass =
        "grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-start md:gap-12 lg:gap-16 xl:grid-cols-[minmax(320px,460px)_minmax(0,1fr)]"

    const brandBlockClass =
        "min-w-0 max-w-none md:max-w-md"

    const logoClass =
        `h-10 w-auto object-contain sm:h-11 md:h-12 xl:h-14 ${mounted && isDark ? "invert" : ""}`

    const descriptionClass =
        "mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-white/80 sm:text-[15px] sm:leading-7"

    const socialsWrapClass =
        "mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3"

    const socialClass =
        "inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white transition hover:scale-105 hover:border-slate-300 dark:border-[#111111] dark:bg-[#111111] dark:hover:border-white/20 sm:h-11 sm:w-11"

    const fullIconClass =
        `h-full w-full rounded-full object-contain p-[1px] ${mounted && isDark ? "invert" : ""}`

    const tikTokIconClass =
        `h-full w-full rounded-full object-contain ${mounted && isDark ? "invert" : ""}`

    const linksGridClass =
        "grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:justify-self-end xl:gap-14"

    const sectionTitleClass =
        "mb-3 text-sm font-semibold text-slate-900 dark:text-white sm:text-[15px]"

    const linksWrapClass =
        "flex flex-col gap-2 text-sm text-slate-600 dark:text-white/80 sm:text-[15px]"

    const bottomBarClass =
        "mt-8 flex flex-col gap-5 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-[#111111] dark:text-white/70 lg:flex-row lg:items-center lg:justify-between lg:gap-6"

    const copyrightClass =
        "text-sm leading-6"

    const contactsClass =
        "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 lg:justify-end"

    const contactLinkClass =
        "inline-flex min-w-0 items-center gap-2 text-sm leading-6 transition hover:text-slate-900 dark:hover:text-white"

    const createdByClass =
        "mt-4 text-sm leading-6 text-slate-500 dark:text-white/70"

    return (
        <footer className={footerClass}>
            <div className={wrapperClass}>
                <div className={topGridClass}>
                    <div className={brandBlockClass}>
                        <Link href={localizePath(locale)} className="inline-flex items-center">
                            <Image
                                    src={mainLogo}
                                    alt="Halachev Accounting"
                                    className={logoClass}
                                    sizes="(max-width: 640px) 160px, 220px"
                                />
                        </Link>

                        <p className={descriptionClass}>{t.description}</p>

                        <div className={socialsWrapClass}>
                            <a
                                href="https://www.facebook.com/profile.php?id=61565641385893"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className={socialClass}
                            >
                                <Image
                                    src={facebookIcon}
                                    alt="Facebook"
                                    className={fullIconClass}
                                    sizes="44px"
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/halachev_accounting/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className={socialClass}
                            >
                                <Image
                                    src={instagramIcon}
                                    alt="Instagram"
                                    className={fullIconClass}
                                    sizes="44px"
                                />
                            </a>

                            <a
                                href="https://m.me/halachev_accounting"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Messenger"
                                className={socialClass}
                            >
                                <Image
                                    src={messengerIcon}
                                    alt="Messenger"
                                    className={fullIconClass}
                                    sizes="44px"
                                />
                            </a>

                            <a
                                href="https://www.tiktok.com/@halachev_accounting"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                                className={socialClass}
                            >
                                <Image
                                    src={tiktokIcon}
                                    alt="TikTok"
                                    className={tikTokIconClass}
                                    sizes="44px"
                                />
                            </a>

                            <a
                                href="https://wa.me/359887764200"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className={socialClass}
                            >
                                <Image
                                    src={whatsappIcon}
                                    alt="WhatsApp"
                                    className={fullIconClass}
                                    sizes="44px"
                                />
                            </a>

                            <a
                                href="viber://chat?number=%2B359887764200"
                                aria-label="Viber"
                                className={socialClass}
                            >
                                <Image
                                    src={viberIcon}
                                    alt="Viber"
                                    className={fullIconClass}
                                    sizes="44px"
                                />
                            </a>

                            <a
                                href="https://revolut.me/halachev"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Revolut"
                                className={socialClass}
                            >
                                <Image
                                    src={revolutIcon}
                                    alt="Revolut"
                                    className={fullIconClass}
                                    sizes="44px"
                                />
                            </a>
                        </div>

                        <p className={createdByClass}>
                            {t.createdBy}{" "}
                            <a
                                href="https://github.com/viktor132607"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold transition hover:text-slate-900 dark:hover:text-white"
                            >
                                viktor132607
                            </a>
                        </p>
                    </div>

                    <div className={linksGridClass}>
                        <div className="min-w-0">
                            <h4 className={sectionTitleClass}>{t.company}</h4>

                            <div className={linksWrapClass}>
                                <Link href={localizePath(locale)} className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.home}
                                </Link>
                                <Link href={localizePath(locale, "/about")} className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.about}
                                </Link>
                                <Link href={localizePath(locale, "/contact")} className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.contact}
                                </Link>
                            </div>
                        </div>

                        <div className="min-w-0">
                            <h4 className={sectionTitleClass}>{t.info}</h4>

                            <div className={linksWrapClass}>
                                <Link href={localizePath(locale, "/privacy")} className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.privacy}
                                </Link>
                                <Link href={localizePath(locale, "/terms")} className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.terms}
                                </Link>
                                <Link href={localizePath(locale, "/cookies")} className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.cookies}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={bottomBarClass}>
                    <p className={copyrightClass}>
                        © {new Date().getFullYear()} Halachev Accounting. {t.rights}
                    </p>

                    <div className={contactsClass}>
                        <a
                            href="tel:+359887764200"
                            className={contactLinkClass}
                        >
                            <span>{t.phone}</span>
                            <span className="truncate">088 776 4200</span>
                        </a>

                        <a
                            href="mailto:nthalachev@gmail.com"
                            className={contactLinkClass}
                        >
                            <span>Email:</span>
                            <span className="break-all sm:break-normal">
                                nthalachev@gmail.com
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}