"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"

export default function ContactBubble() {
    const { i18n } = useTranslation()
    const pathname = usePathname()
    const isBg = i18n.language?.toLowerCase().startsWith("bg")
    const contactBubbleLabel = isBg ? "Свържете се" : "Contact us"

    if (pathname === "/contact") return null

    return (
        <Link
            href="/contact"
            aria-label={contactBubbleLabel}
            title={contactBubbleLabel}
            className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-0 z-50 inline-flex h-12 w-12 items-center justify-center rounded-l-full rounded-r-none bg-slate-950 text-white shadow-2xl shadow-black/30 ring-1 ring-white/20 transition hover:bg-slate-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200 xl:bottom-8 xl:h-14 xl:w-14"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 xl:h-6 xl:w-6"
                aria-hidden="true"
            >
                <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
            </svg>
        </Link>
    )
}
