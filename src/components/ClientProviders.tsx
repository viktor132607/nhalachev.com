"use client"

import "../i18n/i18n"
import LanguageHtmlSync from "./LanguageHtmlSync"

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return <><LanguageHtmlSync />{children}</>
}