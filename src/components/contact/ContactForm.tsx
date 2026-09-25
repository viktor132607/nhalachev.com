"use client"

import { useState } from "react"
import type { ContactLocaleContent } from "../../content/contact"

type ContactFormProps = {
    content: ContactLocaleContent["form"]
}

export default function ContactForm({ content }: ContactFormProps) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [website, setWebsite] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState("")

    const inputClass =
        "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-slate-900 transition placeholder:text-slate-400 focus:border-slate-400 dark:border-zinc-600 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-zinc-400"
    const textareaClass = `${inputClass} min-h-[170px] resize-y sm:min-h-[190px]`
    const submitButtonClass =
        "inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-slate-950 bg-slate-950 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto dark:border-white dark:bg-white dark:text-black dark:hover:bg-slate-200"
    const labelClass = "mb-2 block text-sm font-semibold text-slate-950 dark:text-white"

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
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
            setSubmitMessage(content.success)
        } catch {
            setSubmitMessage(content.error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form className="mt-5 space-y-4" onSubmit={submitForm}>
            <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
                className="hidden"
                aria-hidden="true"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <label htmlFor="contact-name" className={labelClass}>{content.nameLabel}</label>
                    <input
                        id="contact-name"
                        className={inputClass}
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder={content.namePlaceholder}
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        minLength={2}
                        maxLength={80}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="contact-email" className={labelClass}>{content.emailLabel}</label>
                    <input
                        id="contact-email"
                        className={inputClass}
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder={content.emailPlaceholder}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        maxLength={120}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="contact-phone" className={labelClass}>{content.phoneLabel}</label>
                    <input
                        id="contact-phone"
                        className={inputClass}
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder={content.phonePlaceholder}
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        maxLength={40}
                    />
                </div>

                <div>
                    <label htmlFor="contact-subject" className={labelClass}>{content.subjectLabel}</label>
                    <input
                        id="contact-subject"
                        className={inputClass}
                        type="text"
                        name="subject"
                        placeholder={content.subjectPlaceholder}
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}
                        minLength={2}
                        maxLength={200}
                        required
                    />
                </div>
            </div>

            <div>
                <label htmlFor="contact-message" className={labelClass}>{content.messageLabel}</label>
                <textarea
                    id="contact-message"
                    className={textareaClass}
                    name="message"
                    rows={6}
                    placeholder={content.messagePlaceholder}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    minLength={24}
                    maxLength={2400}
                    required
                />
            </div>

            {submitMessage && (
                <div
                    role="status"
                    aria-live="polite"
                    className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300"
                >
                    {submitMessage}
                </div>
            )}

            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={submitButtonClass}
                >
                    {isSubmitting ? content.submitting : content.submit}
                </button>
            </div>
        </form>
    )
}
