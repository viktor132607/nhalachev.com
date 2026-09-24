import Image, { type StaticImageData } from "next/image"
import facebookIcon from "../../../public/images/facebook.png"
import messengerIcon from "../../../public/images/messenger.png"
import instagramIcon from "../../../public/images/black_15047119.png"
import tiktokIcon from "../../../public/images/tik-tok_4817846.png"
import whatsappIcon from "../../../public/images/1384007.png"
import viberIcon from "../../../public/images/viber.png"
import revolutIcon from "../../../public/images/revolut.png"

type SocialLink = {
    label: string
    href: string
    icon: StaticImageData
    external: boolean
    tiktok?: boolean
}

const socialLinks: SocialLink[] = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61565641385893",
        icon: facebookIcon,
        external: true,
    },
    {
        label: "Messenger",
        href: "https://m.me/halachev_accounting",
        icon: messengerIcon,
        external: true,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/halachev_accounting/",
        icon: instagramIcon,
        external: true,
    },
    {
        label: "TikTok",
        href: "https://www.tiktok.com/@halachev_accounting",
        icon: tiktokIcon,
        external: true,
        tiktok: true,
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/359887764200",
        icon: whatsappIcon,
        external: true,
    },
    {
        label: "Viber",
        href: "viber://chat?number=%2B359887764200",
        icon: viberIcon,
        external: false,
    },
    {
        label: "Revolut",
        href: "https://revolut.me/halachev",
        icon: revolutIcon,
        external: true,
    },
]

export default function SocialLinks({
    title,
    isDark,
}: {
    title: string
    isDark: boolean
}) {
    const socialChipClass =
        "inline-flex min-h-[52px] items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-100 hover:shadow-md dark:border-[#111111] dark:bg-[#000000] dark:text-white dark:hover:border-[#222222] dark:hover:bg-[#111111]"
    const socialIconBoxClass =
        "inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-transparent"
    const iconClass = `h-full w-full rounded-full object-contain p-[1px]${isDark ? " invert" : ""}`
    const tiktokIconClass = `h-full w-full rounded-full object-contain${isDark ? " invert" : ""}`

    return (
        <>
            <h2 className="text-[22px] font-bold text-slate-950 dark:text-white sm:text-[26px] lg:text-[30px]">
                {title}
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                    <a
                        key={item.label}
                        className={socialChipClass}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                    >
                        <span className={socialIconBoxClass}>
                            <Image
                                src={item.icon}
                                alt={item.label}
                                className={item.tiktok ? tiktokIconClass : iconClass}
                                sizes="32px"
                            />
                        </span>
                        {item.label}
                    </a>
                ))}
            </div>
        </>
    )
}
