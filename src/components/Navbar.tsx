"use client"

import Image from "next/image"
import Link from "next/link"
import mainLogo from "../../public/images/mainlogo.png"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useSitePreferences } from "../context/SitePreferencesContext"
import { localizePath } from "../lib/locale"

export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter()
    const { locale, isDark, toggleTheme, setLocale } = useSitePreferences()
    const [servicesActive, setServicesActive] = useState(false)
    const homePath = localizePath(locale)
    const isHome = pathname === homePath || pathname === "/"

    useEffect(() => {
        if (!isHome) {
            return
        }

        const updateServicesActive = () => {
            const section = document.getElementById("services")
            if (!section) {
                setServicesActive(false)
                return
            }

            const rect = section.getBoundingClientRect()
            const triggerOffset = 140
            const isActive = rect.top <= triggerOffset && rect.bottom > triggerOffset
            setServicesActive(isActive)
        }

        updateServicesActive()
        window.addEventListener("scroll", updateServicesActive, { passive: true })
        window.addEventListener("resize", updateServicesActive)

        return () => {
            window.removeEventListener("scroll", updateServicesActive)
            window.removeEventListener("resize", updateServicesActive)
        }
    }, [isHome])

    const isBg = locale === "bg"

    const goToServices = () => {
        if (isHome) {
            const section = document.getElementById("services")
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" })
            }
        } else {
            router.push(homePath)
            setTimeout(() => {
                const section = document.getElementById("services")
                if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" })
                }
            }, 120)
        }
    }

    const goToHome = () => {
        if (isHome) {
            window.scrollTo({ top: 0, behavior: "smooth" })
        } else {
            router.push(homePath)
        }
    }

    const leftItems = isBg
        ? [
              { key: "home", label: "Начало", action: goToHome },
              { key: "services", label: "Услуги", action: goToServices },
          ]
        : [
              { key: "home", label: "Home", action: goToHome },
              { key: "services", label: "Services", action: goToServices },
          ]

    const rightItems = isBg
        ? [
              { to: localizePath(locale, "/about"), label: "За мен" },
              { to: localizePath(locale, "/contact"), label: "Контакти" },
          ]
        : [
              { to: localizePath(locale, "/about"), label: "About Me" },
              { to: localizePath(locale, "/contact"), label: "Contact" },
          ]

    const linkClass = (active: boolean) =>
        `relative inline-flex items-center justify-center whitespace-nowrap bg-transparent text-[13px] font-semibold tracking-[0.01em] transition sm:text-sm ${
            active
                ? "text-slate-950 dark:text-white lg:after:absolute lg:after:-bottom-[14px] lg:after:left-0 lg:after:h-[2px] lg:after:w-full lg:after:bg-slate-950 dark:lg:after:bg-white"
                : "text-slate-600 hover:text-slate-950 dark:text-zinc-300 dark:hover:text-white"
        }`

    const navButtonClass = (active: boolean) =>
        `relative inline-flex items-center justify-center whitespace-nowrap bg-transparent text-[13px] font-semibold tracking-[0.01em] transition sm:text-sm ${
            active
                ? "text-slate-950 dark:text-white lg:after:absolute lg:after:-bottom-[14px] lg:after:left-0 lg:after:h-[2px] lg:after:w-full lg:after:bg-slate-950 dark:lg:after:bg-white"
                : "text-slate-600 hover:text-slate-950 dark:text-zinc-300 dark:hover:text-white"
        }`

    const langButtonClass = (active: boolean) =>
        `text-[10px] font-bold uppercase tracking-[0.14em] transition sm:text-[11px] ${
            active
                ? "text-slate-950 dark:text-white"
                : "text-slate-400 hover:text-slate-700 dark:text-zinc-500 dark:hover:text-zinc-200"
        }`

    const effectiveServicesActive = isHome && servicesActive
    const homeActive = isHome && !effectiveServicesActive

    return (
        <header className="sticky top-0 z-50 border-b border-[#e5e7eb] bg-[#ffffff] backdrop-blur dark:border-[#111111] dark:bg-[#000000]">
            <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
                <div className="grid min-h-[72px] grid-cols-[1fr_auto] items-center gap-x-3 gap-y-3 py-3 sm:min-h-[80px] sm:grid-cols-[1fr_auto_1fr] sm:gap-x-4 sm:py-4 lg:min-h-[72px] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-12 lg:gap-y-0 lg:py-0 xl:gap-x-10 2xl:gap-x-12">
                    <nav
                        aria-label={isBg ? "Основна навигация" : "Main navigation"}
                        className="order-2 col-span-2 sm:order-3 sm:col-span-3 lg:order-2 lg:col-span-1"
                    >
                        <div className="grid grid-cols-4 items-center justify-items-center gap-x-2 whitespace-nowrap lg:flex lg:justify-center lg:gap-8">
                            {leftItems.map((item) => {
                                const active =
                                    item.key === "home" ? homeActive : effectiveServicesActive

                                return (
                                    <button
                                        key={item.key}
                                        type="button"
                                        onClick={item.action}
                                        aria-current={active ? (item.key === "home" ? "page" : "location") : undefined}
                                        className={navButtonClass(active)}
                                    >
                                        {item.label}
                                    </button>
                                )
                            })}

                            {rightItems.map((item) => (
                                <Link
                                    key={item.to}
                                    href={item.to}
                                    aria-current={pathname === item.to ? "page" : undefined}
                                    className={linkClass(pathname === item.to)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </nav>

                    <div className="order-1 col-start-1 row-start-1 justify-self-start sm:col-start-2 sm:justify-self-center lg:order-1 lg:col-start-auto lg:row-start-auto">
                        <button
                            type="button"
                            onClick={goToHome}
                            className="inline-flex items-center justify-center"
                        >
                            <Image
                                src={mainLogo}
                                alt="Halachev Accounting"
                                className={`block h-10 w-auto object-contain transition sm:h-11 md:h-12 lg:h-14 xl:h-16 ${
                                    isDark ? "invert" : ""
                                }`}
                                sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 240px"
                                priority
                            />
                        </button>
                    </div>

                    <div className="order-1 col-start-2 row-start-1 flex items-center justify-end gap-3 sm:col-start-3 sm:justify-self-end lg:order-3 lg:col-start-auto lg:row-start-auto lg:gap-4">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-pressed={isDark}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-transparent transition hover:border-neutral-200 hover:bg-neutral-100 dark:hover:border-[#111111] dark:hover:bg-[#111111]"
                            aria-label={isBg ? "Смени тема" : "Toggle theme"}
                        >
                            <Image
                                src="/images/light-mode.svg"
                                alt=""
                                width={15}
                                height={15}
                                unoptimized
                                className={`h-[15px] w-[15px] object-contain transition duration-200 ${
                                    isDark ? "invert" : ""
                                }`}
                            />
                        </button>

                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <button
                                type="button"
                                onClick={() => void setLocale("bg")}
                                aria-pressed={isBg}
                                className={langButtonClass(isBg)}
                            >
                                BG
                            </button>

                            <span className="text-slate-300 dark:text-zinc-600">|</span>

                            <button
                                type="button"
                                onClick={() => void setLocale("en")}
                                aria-pressed={!isBg}
                                className={langButtonClass(!isBg)}
                            >
                                EN
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}