import type { Locale } from "../lib/locale"

export type ContactLocaleContent = {
    hero: {
        title: string
        description: string
    }
    form: {
        title: string
        nameLabel: string
        namePlaceholder: string
        emailLabel: string
        emailPlaceholder: string
        phoneLabel: string
        phonePlaceholder: string
        subjectLabel: string
        subjectPlaceholder: string
        messageLabel: string
        messagePlaceholder: string
        submit: string
        submitting: string
        success: string
        error: string
    }
    socialTitle: string
    details: {
        emailTitle: string
        phoneTitle: string
        addressTitle: string
        address: string
        mapPlaceholder: string
        openMap: string
    }
}

export const contactContent: Record<Locale, ContactLocaleContent> = {
    bg: {
        hero: {
            title: "Никола Халачев",
            description: "Счетоводни услуги. Свържете се с мен за въпроси и консултации.",
        },
        form: {
            title: "Форма за контакт",
            nameLabel: "Име *",
            namePlaceholder: "Вашето име",
            emailLabel: "Имейл *",
            emailPlaceholder: "Вашият имейл",
            phoneLabel: "Телефон",
            phonePlaceholder: "Вашият телефон",
            subjectLabel: "Тема *",
            subjectPlaceholder: "Тема на запитването",
            messageLabel: "Съобщение *",
            messagePlaceholder: "Опишете какво ви е нужно",
            submit: "Изпрати",
            submitting: "Изпращане...",
            success: "Съобщението беше изпратено успешно.",
            error: "Възникна грешка при изпращането.",
        },
        socialTitle: "Социални мрежи",
        details: {
            emailTitle: "Имейл",
            phoneTitle: "Телефон",
            addressTitle: "Адрес",
            address: "ул. Архитект Петко Момчилов 24, Варна 9000, България",
            mapPlaceholder:
                "За да заредите Google Maps, приемете optional cookies от банера за бисквитки.",
            openMap: "Отвори в Google Maps",
        },
    },
    en: {
        hero: {
            title: "Nikola Halachev",
            description: "Accounting services. Contact me for inquiries and consultations.",
        },
        form: {
            title: "Contact form",
            nameLabel: "Name *",
            namePlaceholder: "Your name",
            emailLabel: "Email *",
            emailPlaceholder: "Your email",
            phoneLabel: "Phone",
            phonePlaceholder: "Your phone",
            subjectLabel: "Subject *",
            subjectPlaceholder: "Inquiry subject",
            messageLabel: "Message *",
            messagePlaceholder: "Tell me what you need",
            submit: "Send",
            submitting: "Sending...",
            success: "Your message was sent successfully.",
            error: "An error occurred while sending your message.",
        },
        socialTitle: "Social links",
        details: {
            emailTitle: "Email",
            phoneTitle: "Phone",
            addressTitle: "Address",
            address: "24 Architect Petko Momchilov St, Varna 9000, Bulgaria",
            mapPlaceholder: "To load Google Maps, accept optional cookies from the cookie banner.",
            openMap: "Open in Google Maps",
        },
    },
}
