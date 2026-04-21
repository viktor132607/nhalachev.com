"use client"

import { useEffect, useState } from "react"
import {
    COOKIE_CONSENT_EVENT,
    getCookieConsent,
    setCookieConsent,
} from "../lib/cookies"

export default function CookieBanner() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const saved = getCookieConsent()
        setVisible(!saved)
    }, [])

    const acceptCookies = () => {
        setCookieConsent("accepted")
        setVisible(false)
    }

    const rejectCookies = () => {
        setCookieConsent("rejected")
        setVisible(false)
    }

    useEffect(() => {
        const syncBanner = () => {
            const saved = getCookieConsent()
            setVisible(!saved)
        }

        window.addEventListener(COOKIE_CONSENT_EVENT, syncBanner)
        return () => window.removeEventListener(COOKIE_CONSENT_EVENT, syncBanner)
    }, [])

    if (!visible) return null

    return (
        <div className="fixed inset-x-0 bottom-4 z-[100] px-4">
            <div className="mx-auto flex max-w-[1100px] flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.16)] dark:border-[#111111] dark:bg-[#000000] sm:p-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="min-w-0">
                    <h3 className="text-base font-semibold text-slate-950 dark:text-white">
                        Бисквитки
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-white/80">
                        Този сайт използва задължителни бисквитки за правилна работа и optional
                        бисквитки за външно съдържание и по-добро потребителско изживяване.
                    </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                    <button
                        type="button"
                        onClick={rejectCookies}
                        className="inline-flex h-[46px] items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-zinc-700 dark:bg-[#111111] dark:text-white dark:hover:bg-[#1a1a1a]"
                    >
                        Откажи
                    </button>

                    <button
                        type="button"
                        onClick={acceptCookies}
                        className="inline-flex h-[46px] items-center justify-center rounded-xl border border-slate-950 bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-slate-200"
                    >
                        Приемам
                    </button>
                </div>
            </div>
        </div>
    )
}