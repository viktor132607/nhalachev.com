import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ClientProviders from "../src/components/ClientProviders"
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import CookieBanner from "../src/components/CookieBanner"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Halachev Accounting",
    description: "Accounting services by Nikola Halachev",
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
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ClientProviders>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <CookieBanner />
                </ClientProviders>
            </body>
        </html>
    )
}