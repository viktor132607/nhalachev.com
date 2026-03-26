"use client"

import Link from "next/link"

export default function Footer() {
    const isBg = true

    const t = isBg
        ? {
              description: "Професионално счетоводно обслужване и консултации. Налични 24/7.",
              company: "Фирма",
              info: "Информация",
              home: "Начало",
              about: "За мен",
              contact: "Контакти",
              privacy: "Политика за поверителност",
              terms: "Общи условия",
              cookies: "Политика за бисквитките",
              rights: "Всички права запазени.",
          }
        : {
              description: "Professional accounting & consulting services. Available 24/7.",
              company: "Company",
              info: "Legal",
              home: "Home",
              about: "About Me",
              contact: "Contact",
              privacy: "Privacy Policy",
              terms: "Terms of Service",
              cookies: "Cookie Policy",
              rights: "All rights reserved.",
          }

    const footerClass =
        "mt-10 border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950"

    const wrapperClass =
        "mx-auto max-w-[1600px] px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 xl:px-12 2xl:px-16"

    const topGridClass =
        "grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-start md:gap-12 lg:gap-16 xl:grid-cols-[minmax(320px,460px)_minmax(0,1fr)]"

    const brandBlockClass =
        "min-w-0 max-w-none md:max-w-md"

    const logoClass =
        "h-10 w-auto object-contain sm:h-11 md:h-12 xl:h-14"

    const descriptionClass =
        "mt-4 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-[15px] sm:leading-7"

    const socialsWrapClass =
        "mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3"

    const socialClass =
        "inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white transition hover:scale-105 hover:border-slate-300 dark:border-white/10 dark:bg-slate-900 dark:hover:border-white/20 sm:h-11 sm:w-11"

    const fullIconClass =
        "h-full w-full rounded-full object-contain p-[1px]"

    const linksGridClass =
        "grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:justify-self-end xl:gap-14"

    const sectionTitleClass =
        "mb-3 text-sm font-semibold text-slate-900 dark:text-white sm:text-[15px]"

    const linksWrapClass =
        "flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300 sm:text-[15px]"

    const bottomBarClass =
        "mt-8 flex flex-col gap-5 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:gap-6"

    const copyrightClass =
        "text-sm leading-6"

    const contactsClass =
        "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 lg:justify-end"

    const contactLinkClass =
        "inline-flex min-w-0 items-center gap-2 text-sm leading-6 transition hover:text-slate-900 dark:hover:text-white"

    return (
        <footer className={footerClass}>
            <div className={wrapperClass}>
                <div className={topGridClass}>
                    <div className={brandBlockClass}>
                        <Link href="/" className="inline-flex items-center">
                            <img
                                src="/images/mainlogo.png"
                                alt="Halachev Accounting"
                                className={logoClass}
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
                                <img
                                    src="/images/facebook.png"
                                    alt="Facebook"
                                    className={fullIconClass}
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/halachev_accounting/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className={socialClass}
                            >
                                <img
                                    src="/images/black_15047119.png"
                                    alt="Instagram"
                                    className={fullIconClass}
                                />
                            </a>

                            <a
                                href="https://m.me/halachev_accounting"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Messenger"
                                className={socialClass}
                            >
                                <img
                                    src="/images/messenger.png"
                                    alt="Messenger"
                                    className={fullIconClass}
                                />
                            </a>

                            <a
                                href="https://www.tiktok.com/@halachev_accounting"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                                className={socialClass}
                            >
                                <img
                                    src="/images/tik-tok_4817846.png"
                                    alt="TikTok"
                                    className="h-full w-full rounded-full object-contain"
                                />
                            </a>

                            <a
                                href="https://wa.me/359887764200"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className={socialClass}
                            >
                                <img
                                    src="/images/1384007.png"
                                    alt="WhatsApp"
                                    className={fullIconClass}
                                />
                            </a>

                            <a
                                href="viber://chat?number=%2B359887764200"
                                aria-label="Viber"
                                className={socialClass}
                            >
                                <img
                                    src="/images/viber.png"
                                    alt="Viber"
                                    className={fullIconClass}
                                />
                            </a>

                            <a
                                href="https://revolut.me/halachev"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Revolut"
                                className={socialClass}
                            >
                                <img
                                    src="/images/revolut.png"
                                    alt="Revolut"
                                    className={fullIconClass}
                                />
                            </a>
                        </div>
                    </div>

                    <div className={linksGridClass}>
                        <div className="min-w-0">
                            <h4 className={sectionTitleClass}>{t.company}</h4>

                            <div className={linksWrapClass}>
                                <Link href="/" className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.home}
                                </Link>
                                <Link href="/about" className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.about}
                                </Link>
                                <Link href="/contact" className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.contact}
                                </Link>
                            </div>
                        </div>

                        <div className="min-w-0">
                            <h4 className={sectionTitleClass}>{t.info}</h4>

                            <div className={linksWrapClass}>
                                <Link href="/privacy" className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.privacy}
                                </Link>
                                <Link href="/terms" className="transition hover:text-slate-950 dark:hover:text-white">
                                    {t.terms}
                                </Link>
                                <Link href="/cookies" className="transition hover:text-slate-950 dark:hover:text-white">
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
                            <span>Тел:</span>
                            <span className="truncate">088 776 4200</span>
                        </a>

                        <a
                            href="mailto:contact@halachevaccounting.com"
                            className={contactLinkClass}
                        >
                            <span>Email:</span>
                            <span className="break-all sm:break-normal">
                                contact@halachevaccounting.com
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}