"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Contact() {
    const { i18n } = useTranslation()
    const lang = i18n.language?.toLowerCase() ?? "bg"
    const isBg = lang.startsWith("bg")

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [website, setWebsite] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState("")

    const pageClass =
        "mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 xl:px-12 2xl:px-16"

    const heroClass =
        "mb-6 rounded-[24px] border border-slate-200 bg-white px-5 py-8 text-center shadow-[0_12px_35px_rgba(15,23,42,0.04)] dark:border-zinc-700 dark:bg-zinc-800 sm:mb-8 sm:rounded-[28px] sm:px-8 sm:py-10 lg:mb-10 lg:rounded-[32px] lg:px-10 lg:py-12 xl:px-12"

    const cardClass =
        "rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.04)] dark:border-zinc-700 dark:bg-zinc-800 sm:rounded-[24px] sm:p-6 lg:rounded-[28px] lg:p-8"

    const sectionTitleClass =
        "text-[24px] font-bold text-slate-950 dark:text-white sm:text-[28px] lg:text-[30px]"

    const textClass =
        "text-[15px] leading-8 text-slate-700 dark:text-zinc-200 sm:text-base lg:text-[17px]"

    const linkClass =
        "block text-[15px] leading-8 font-semibold text-slate-700 transition hover:text-slate-950 dark:text-zinc-200 dark:hover:text-white sm:text-base"

    const inputClass =
        "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-0 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-zinc-400"

    const textareaClass = `${inputClass} min-h-[180px] resize-y`

    const submitButtonClass =
        "inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-950 bg-slate-950 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white dark:bg-white dark:text-black dark:hover:bg-slate-200"

    const secondaryButtonClass =
        "inline-flex min-h-[46px] items-center justify-center rounded-full border border-slate-950 bg-slate-950 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-slate-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-slate-200"

    const socialChipClass =
        "inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitMessage("")

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    phone: phone.trim(),
                    subject: subject.trim(),
                    company: "",
                    message: message.trim(),
                    website: website.trim(),
                }),
            })

            const data = await response.json().catch(() => null)

            if (!response.ok || data?.code !== "success") {
                throw new Error("Request failed")
            }

            setName("")
            setEmail("")
            setPhone("")
            setSubject("")
            setMessage("")
            setWebsite("")
            setSubmitMessage(
                isBg
                    ? "Съобщението беше изпратено успешно."
                    : "Your message was sent successfully."
            )
        } catch {
            setSubmitMessage(
                isBg
                    ? "Възникна грешка при изпращането."
                    : "An error occurred while sending your message."
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    return isBg ? (
        <div className={pageClass}>
            <section className={heroClass}>
                <h1 className="mb-4 text-[32px] font-bold tracking-tight text-slate-950 dark:text-white sm:text-[42px] lg:text-[52px]">
                    Никола Халачев
                </h1>
                <p className="mx-auto max-w-3xl text-[15px] leading-7 text-slate-600 dark:text-zinc-300 sm:text-[17px] sm:leading-8 lg:text-[18px]">
                    Счетоводни услуги. Свържете се с мен за въпроси и консултации.
                </p>
            </section>

            <section>
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="flex flex-col gap-8">
                        <div className={cardClass}>
                            <h2 className={sectionTitleClass}>Форма за контакт</h2>

                            <form className="mt-5 space-y-4" onSubmit={submitForm}>
                                <input
                                    type="text"
                                    name="website"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                    className="hidden"
                                    aria-hidden="true"
                                />

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-950 dark:text-white">
                                            Име *
                                        </label>
                                        <input
                                            className={inputClass}
                                            type="text"
                                            name="name"
                                            placeholder="Вашето име"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            minLength={2}
                                            maxLength={80}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-950 dark:text-white">
                                            Имейл *
                                        </label>
                                        <input
                                            className={inputClass}
                                            type="email"
                                            name="email"
                                            placeholder="Вашият имейл"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            maxLength={120}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-950 dark:text-white">
                                            Телефон
                                        </label>
                                        <input
                                            className={inputClass}
                                            type="text"
                                            name="phone"
                                            placeholder="Вашият телефон"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            maxLength={120}
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-950 dark:text-white">
                                            Тема
                                        </label>
                                        <input
                                            className={inputClass}
                                            type="text"
                                            name="subject"
                                            placeholder="Тема на запитването"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            maxLength={120}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-950 dark:text-white">
                                        Съобщение *
                                    </label>
                                    <textarea
                                        className={textareaClass}
                                        name="message"
                                        rows={6}
                                        placeholder="Опишете какво ви е нужно"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        minLength={24}
                                        maxLength={2400}
                                        required
                                    />
                                </div>

                                {submitMessage && (
                                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                                        {submitMessage}
                                    </div>
                                )}

                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={submitButtonClass}
                                    >
                                        {isSubmitting ? "Изпращане..." : "Изпрати"}
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className={cardClass}>
                            <h2 className={sectionTitleClass}>Социални мрежи</h2>

                            <div className="mt-5 flex flex-wrap gap-3">
                                <a
                                    className={socialChipClass}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.facebook.com/profile.php?id=61565641385893"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                                        <img className="h-5 w-5 object-contain" src="/images/facebook.png" alt="" />
                                    </span>
                                    Facebook
                                </a>

                                <a
                                    className={socialChipClass}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://m.me/halachev_accounting"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                                        <img className="h-5 w-5 object-contain" src="/images/messenger.webp" alt="" />
                                    </span>
                                    Messenger
                                </a>

                                <a
                                    className={socialChipClass}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.instagram.com/halachev_accounting/"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                                        <img className="h-5 w-5 object-contain" src="/images/instagram.png" alt="" />
                                    </span>
                                    Instagram
                                </a>

                                <a
                                    className={socialChipClass}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.tiktok.com/@halachev_accounting"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                                        <img className="h-5 w-5 object-contain" src="/images/tiktok.png" alt="" />
                                    </span>
                                    TikTok
                                </a>

                                <a
                                    className={socialChipClass}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://wa.me/359887764200"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                                        <img className="h-5 w-5 object-contain" src="/images/whatsapp.jpg" alt="" />
                                    </span>
                                    WhatsApp
                                </a>

                                <a className={socialChipClass} href="viber://chat?number=%2B359887764200">
                                    <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                                        <img className="h-5 w-5 object-contain" src="/images/viber1.png" alt="" />
                                    </span>
                                    Viber
                                </a>

                                <a
                                    className={socialChipClass}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://revolut.me/halachev"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                                        <img className="h-5 w-5 object-contain" src="/images/revolut.png" alt="" />
                                    </span>
                                    Revolut
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className={cardClass}>
                            <h2 className={sectionTitleClass}>Имейл</h2>
                            <div className="mt-5 space-y-3">
                                <a className={`${linkClass} break-all`} href="mailto:nthalachev@gmail.com">
                                    nthalachev@gmail.com
                                </a>
                                <a
                                    className={`${linkClass} break-all`}
                                    href="mailto:nikolahalachev2811@gmail.com"
                                >
                                    nikolahalachev2811@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className={cardClass}>
                            <h2 className={sectionTitleClass}>Телефон</h2>
                            <div className="mt-5 space-y-3">
                                <a className={linkClass} href="tel:+359887764200">
                                    088 776 4200
                                </a>
                            </div>
                        </div>

                        <div className={`${cardClass} overflow-hidden`}>
                            <h2 className={sectionTitleClass}>Адрес</h2>

                            <div className="mt-5">
                                <p className={textClass}>
                                    ул. Архитект Петко Момчилов 24, Варна 9000, България
                                </p>
                            </div>

                            <div className="mt-5 overflow-hidden rounded-[20px] border border-slate-200 dark:border-zinc-700 sm:rounded-[22px] lg:rounded-[24px]">
                                <iframe
                                    className="h-[300px] w-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps?hl=bg&q=ул.%20Архитект%20Петко%20Момчилов%2024,%20Варна%209000&z=17&output=embed"
                                />
                            </div>

                            <div className="mt-5">
                                <a
                                    className={secondaryButtonClass}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.google.com/maps/search/?api=1&query=ул.%20Архитект%20Петко%20Момчилов%2024,%20Варна%209000"
                                >
                                    Отвори в Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    ) : (
        <div className={pageClass}>
            <section className={heroClass}>
                <h1 className="mb-4 text-[32px] font-bold tracking-tight text-slate-950 dark:text-white sm:text-[42px] lg:text-[52px]">
                    Nikola Halachev
                </h1>
                <p className="mx-auto max-w-3xl text-[15px] leading-7 text-slate-600 dark:text-zinc-300 sm:text-[17px] sm:leading-8 lg:text-[18px]">
                    Accounting services. Contact me for inquiries and consultations.
                </p>
            </section>

            <section>
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="flex flex-col gap-8">
                        <div className={cardClass}>
                            <h2 className={sectionTitleClass}>Contact form</h2>

                            <form className="mt-5 space-y-4" onSubmit={submitForm}>
                                <input
                                    type="text"
                                    name="website"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                    className="hidden"
                                    aria-hidden="true"
                                />

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-950 dark:text-white">
                                            Name *
                                        </label>
                                        <input
                                            className={inputClass}
                                            type="text"
                                            name="name"
                                            placeholder="Your name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            minLength={2}
                                            maxLength={80}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-950 dark:text-white">
                                            Email *
                                        </label>
                                        <input
                                            className={inputClass}
                                            type="email"
                                            name="email"
                                            placeholder="Your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            maxLength={120}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-950 dark:text-white">
                                            Phone
                                        </label>
                                        <input
                                            className={inputClass}
                                            type="text"
                                            name="phone"
                                            placeholder="Your phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            maxLength={120}
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-950 dark:text-white">
                                            Subject
                                        </label>
                                        <input
                                            className={inputClass}
                                            type="text"
                                            name="subject"
                                            placeholder="Inquiry subject"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            maxLength={120}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-950 dark:text-white">
                                        Message *
                                    </label>
                                    <textarea
                                        className={textareaClass}
                                        name="message"
                                        rows={6}
                                        placeholder="Tell me what you need"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        minLength={24}
                                        maxLength={2400}
                                        required
                                    />
                                </div>

                                {submitMessage && (
                                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                                        {submitMessage}
                                    </div>
                                )}

                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={submitButtonClass}
                                    >
                                        {isSubmitting ? "Sending..." : "Send"}
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className={cardClass}>
                            <h2 className={sectionTitleClass}>Social links</h2>

                            <div className="mt-5 flex flex-wrap gap-3">
                                <a
                                    className={socialChipClass}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.facebook.com/profile.php?id=61565641385893"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                                        <img className="h-5 w-5 object-contain" src="/images/facebook.png" alt="" />
                                    </span>
                                    Facebook
                                </a>

                                <a
                                    className={socialChipClass}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://m.me/halachev_accounting"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                                        <img className="h-5 w-5 object-contain" src="/images/messenger.webp" alt="" />
                                    </span>
                                    Messenger
                                </a>

                                <a
                                    className={socialChipClass}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.instagram.com/halachev_accounting/"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                                        <img className="h-5 w-5 object-contain" src="/images/instagram.png" alt="" />
                                    </span>
                                    Instagram
                                </a>

                                <a
                                    className={socialChipClass}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.tiktok.com/@halachev_accounting"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                                        <img className="h-5 w-5 object-contain" src="/images/tiktok.png" alt="" />
                                    </span>
                                    TikTok
                                </a>

                                <a
                                    className={socialChipClass}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://wa.me/359887764200"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                                        <img className="h-5 w-5 object-contain" src="/images/whatsapp.jpg" alt="" />
                                    </span>
                                    WhatsApp
                                </a>

                                <a className={socialChipClass} href="viber://chat?number=%2B359887764200">
                                    <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                                        <img className="h-5 w-5 object-contain" src="/images/viber1.png" alt="" />
                                    </span>
                                    Viber
                                </a>

                                <a
                                    className={socialChipClass}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://revolut.me/halachev"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
                                        <img className="h-5 w-5 object-contain" src="/images/revolut.png" alt="" />
                                    </span>
                                    Revolut
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className={cardClass}>
                            <h2 className={sectionTitleClass}>Email</h2>
                            <div className="mt-5 space-y-3">
                                <a className={`${linkClass} break-all`} href="mailto:nthalachev@gmail.com">
                                    nthalachev@gmail.com
                                </a>
                                <a
                                    className={`${linkClass} break-all`}
                                    href="mailto:nikolahalachev2811@gmail.com"
                                >
                                    nikolahalachev2811@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className={cardClass}>
                            <h2 className={sectionTitleClass}>Phone</h2>
                            <div className="mt-5 space-y-3">
                                <a className={linkClass} href="tel:+359887764200">
                                    088 776 4200
                                </a>
                            </div>
                        </div>

                        <div className={`${cardClass} overflow-hidden`}>
                            <h2 className={sectionTitleClass}>Address</h2>

                            <div className="mt-5">
                                <p className={textClass}>
                                    24 Architect Petko Momchilov St, Varna 9000, Bulgaria
                                </p>
                            </div>

                            <div className="mt-5 overflow-hidden rounded-[20px] border border-slate-200 dark:border-zinc-700 sm:rounded-[22px] lg:rounded-[24px]">
                                <iframe
                                    className="h-[300px] w-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src="https://www.google.com/maps?hl=bg&q=ул.%20Архитект%20Петко%20Момчилов%2024,%20Варна%209000&z=17&output=embed"
                                />
                            </div>

                            <div className="mt-5">
                                <a
                                    className={secondaryButtonClass}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.google.com/maps/search/?api=1&query=ул.%20Архитект%20Петко%20Момчилов%2024,%20Варна%209000"
                                >
                                    Open in Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}