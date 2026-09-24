import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ClientProviders from "../src/components/ClientProviders"
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import CookieBanner from "../src/components/CookieBanner"
import ContactBubble from "../src/components/ContactBubble"
import StructuredData from "../src/components/StructuredData"
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, SITE_URL, SOCIAL_IMAGE } from "../src/lib/seo"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: DEFAULT_TITLE,
        template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    applicationName: SITE_NAME,
    authors: [{ name: "Никола Халачев", url: `${SITE_URL}/about` }],
    creator: "Никола Халачев",
    publisher: SITE_NAME,
    category: "business",
    keywords: [
        "счетоводни услуги Варна",
        "счетоводител Варна",
        "счетоводно обслужване",
        "ТРЗ Варна",
        "данъчни консултации",
        "регистрация на фирма",
        "accounting services Varna",
    ],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "bg_BG",
        url: "/",
        siteName: SITE_NAME,
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        images: [{ url: SOCIAL_IMAGE, alt: SITE_NAME }],
    },
    twitter: {
        card: "summary_large_image",
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        images: [SOCIAL_IMAGE],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/images/mainlogo.png",
    },
}

const themeScript = `
(function () {
  try {
    var savedTheme = localStorage.getItem("theme");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  } catch (e) {}
})();
`

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="bg" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
                <StructuredData />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ClientProviders>
                    <Navbar />
                    <main>{children}</main>
                    <ContactBubble />
                    <Footer />
                    <CookieBanner />
                </ClientProviders>
            </body>
        </html>
    )
}