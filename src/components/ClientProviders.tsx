"use client"

import "../i18n/i18n"
import { SitePreferencesProvider } from "../context/SitePreferencesContext"

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return <SitePreferencesProvider>{children}</SitePreferencesProvider>
}
