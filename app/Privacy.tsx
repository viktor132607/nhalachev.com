"use client"

import { useTranslation } from "react-i18next"

export default function Privacy() {
    const { i18n } = useTranslation()
    const isBg = i18n.language?.toLowerCase().startsWith("bg")

    const pageWrap =
        "mx-auto w-full max-w-[1280px] px-4 pb-0 pt-0 sm:px-5 md:px-6 lg:px-8 xl:px-10"

    const contentWrapClass =
        "overflow-hidden border-x border-b border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,0.04)] dark:border-[#111111] dark:bg-[#2a2a2e] sm:p-6 lg:p-8 xl:p-10"

    const titleClass =
        "mb-3 text-[30px] font-bold tracking-tight text-[#1f2937] dark:text-white sm:text-[36px] lg:text-[42px]"

    const updatedClass =
        "mb-8 text-sm font-medium text-slate-500 dark:text-white/70"

    const headingClass =
        "mb-4 mt-8 text-[22px] font-bold text-[#1f2937] dark:text-white first:mt-0 sm:text-[24px]"

    const textClass =
        "text-[15px] leading-[2] text-[#4b5563] dark:text-white"

    const groupClass = "space-y-4"

    const boxClass =
        "my-5 rounded-[22px] border border-slate-200 bg-slate-50 p-5 text-[15px] leading-[2] text-[#4b5563] dark:border-[#111111] dark:bg-[#1c1c1f] dark:text-white"

    const listClass =
        "mt-4 list-disc space-y-3 pl-5 text-[15px] leading-[2] text-[#4b5563] marker:text-red-500 dark:text-white"

    return (
        <div className={pageWrap}>
            <div className={contentWrapClass}>
                <div className="mx-auto w-full max-w-[980px]">
                    {isBg ? (
                        <>
                            <h1 className={titleClass}>Политика за поверителност</h1>
                            <p className={updatedClass}>
                                Последна актуализация:{" "}
                                <span className="font-semibold text-slate-700 dark:text-white">
                                    21.04.2026 г.
                                </span>
                            </p>

                            <h2 className={headingClass}>Въведение</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    Настоящата политика за поверителност описва как ЕТ „Никола
                                    Халачев“ („Никола Халачев Акаунтинг“, „ние“) обработва лични
                                    данни при използване на уебсайта nhalachev.com и свързаните
                                    канали за комуникация.
                                </p>
                                <p className={textClass}>
                                    Поддържаме прозрачност и прилагаме мерки, съобразени с Общия
                                    регламент относно защитата на данните (GDPR) и приложимото
                                    българско законодателство.
                                </p>
                            </div>

                            <h2 className={headingClass}>Администратор на лични данни</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    ЕТ „Никола Халачев“ е администратор на личните данни, когато
                                    използвате нашия уебсайт, изпращате запитване чрез контактната
                                    форма или комуникирате с нас по телефон, имейл или други
                                    канали.
                                </p>
                            </div>

                            <div className={boxClass}>
                                <p>
                                    <strong>Юридическо лице:</strong> ЕТ „Никола Халачев“
                                </p>
                                <p>
                                    <strong>Имейл:</strong> nthalachev@gmail.com
                                </p>
                                <p>
                                    <strong>Допълнителен имейл:</strong>{" "}
                                    nikolahalachev2811@gmail.com
                                </p>
                                <p>
                                    <strong>Телефон:</strong> +359 887 764 200
                                </p>
                                <p>
                                    <strong>Адрес:</strong> ул. „Архитект Петко Момчилов“ 24, Варна
                                    9000, България
                                </p>
                            </div>

                            <h2 className={headingClass}>
                                Какви лични данни обработваме
                            </h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    Обработваме ограничен обем лични данни, които са необходими за
                                    комуникация, предоставяне на услуги и спазване на законовите ни
                                    задължения.
                                </p>
                            </div>

                            <ul className={listClass}>
                                <li>
                                    <strong>Данни за контакт:</strong> име, телефонен номер,
                                    имейл адрес и съдържание на съобщението, изпратено чрез
                                    контактната форма.
                                </li>
                                <li>
                                    <strong>Данни от комуникация:</strong> информация, която
                                    доброволно ни предоставяте при запитвания, консултации и
                                    последваща кореспонденция.
                                </li>
                                <li>
                                    <strong>Финансови и счетоводни данни:</strong> данни,
                                    необходими за издаване на документи, счетоводно обслужване и
                                    изпълнение на законови задължения, когато това е приложимо.
                                </li>
                                <li>
                                    <strong>Технически данни:</strong> ограничена техническа
                                    информация, свързана с използването на сайта, както и избора ви
                                    относно бисквитките.
                                </li>
                            </ul>

                            <h2 className={headingClass}>Как използваме данните</h2>
                            <ul className={listClass}>
                                <li>За да отговорим на ваше запитване или искане за контакт.</li>
                                <li>За да предоставим заявена услуга или консултация.</li>
                                <li>За да поддържаме нормалната работа и сигурността на сайта.</li>
                                <li>
                                    За да спазим законови, счетоводни и административни
                                    задължения.
                                </li>
                            </ul>

                            <h2 className={headingClass}>Правни основания за обработване</h2>
                            <ul className={listClass}>
                                <li>
                                    <strong>Изпълнение на договор</strong> или действия по ваше
                                    искане преди сключване на договор.
                                </li>
                                <li>
                                    <strong>Законово задължение</strong>, когато сме длъжни да
                                    съхраняваме или предоставяме определени данни.
                                </li>
                                <li>
                                    <strong>Легитимен интерес</strong>, свързан със сигурността,
                                    защитата и нормалното функциониране на сайта и комуникацията.
                                </li>
                                <li>
                                    <strong>Съгласие</strong>, когато е необходимо, включително за
                                    незадължителни бисквитки и външно съдържание.
                                </li>
                            </ul>

                            <h2 className={headingClass}>Бисквитки и външни услуги</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    Сайтът използва задължителни локални настройки и съхранява
                                    избора ви от банера за бисквитки в браузъра.
                                </p>
                                <p className={textClass}>
                                    Google Maps в страницата за контакти се зарежда само ако сте
                                    приели незадължителните бисквитки. При зареждането на тази
                                    услуга е възможно трета страна да обработва технически данни
                                    съгласно собствената си политика.
                                </p>
                                <p className={textClass}>
                                    Повече информация ще откриете в Политиката за бисквитките.
                                </p>
                            </div>

                            <h2 className={headingClass}>Споделяне на лични данни</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    Не продаваме лични данни и не ги предоставяме на трети лица,
                                    освен когато това е необходимо за предоставяне на услуга,
                                    техническа поддръжка, външно съдържание по ваш избор или когато
                                    се изисква по закон.
                                </p>
                                <p className={textClass}>
                                    Когато използваме външни доставчици, това се извършва само в
                                    обема, необходим за съответната функция или услуга.
                                </p>
                            </div>

                            <h2 className={headingClass}>Срок за съхранение</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    Съхраняваме личните данни само за периода, необходим за целите,
                                    за които са събрани, както и за сроковете, изисквани от
                                    приложимото законодателство.
                                </p>
                                <p className={textClass}>
                                    Данните от контактната форма и комуникацията се пазят за
                                    разумен срок, необходим за обработка на запитването и
                                    последваща комуникация, освен ако законът не изисква друго.
                                </p>
                            </div>

                            <h2 className={headingClass}>Вашите права</h2>
                            <ul className={listClass}>
                                <li>Право на достъп до вашите лични данни.</li>
                                <li>Право на коригиране на неточни или непълни данни.</li>
                                <li>Право на изтриване, когато е приложимо.</li>
                                <li>Право на ограничаване на обработването.</li>
                                <li>Право на възражение срещу определени видове обработване.</li>
                                <li>Право на преносимост на данните, когато е приложимо.</li>
                                <li>
                                    Право да подадете жалба до Комисията за защита на личните данни.
                                </li>
                            </ul>

                            <p className={`${textClass} mt-4`}>
                                За упражняване на правата си можете да се свържете с нас на:
                                nthalachev@gmail.com
                            </p>

                            <h2 className={headingClass}>Промени в политиката</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    Настоящата политика може да бъде актуализирана при промени в
                                    сайта, използваните технологии, начина на работа или
                                    приложимите правни изисквания.
                                </p>
                                <p className={textClass}>
                                    Актуализираната версия влиза в сила от момента на публикуването
                                    ѝ на тази страница.
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className={titleClass}>Privacy Policy</h1>
                            <p className={updatedClass}>
                                Last updated:{" "}
                                <span className="font-semibold text-slate-700 dark:text-white">
                                    21.04.2026
                                </span>
                            </p>

                            <h2 className={headingClass}>Introduction</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    This Privacy Policy explains how ET “Nikola Halachev”
                                    (“Nikola Halachev Accounting”, “we”) processes personal data
                                    when you use nhalachev.com and the related communication
                                    channels.
                                </p>
                                <p className={textClass}>
                                    We maintain transparency and apply measures consistent with the
                                    General Data Protection Regulation (GDPR) and applicable
                                    Bulgarian legislation.
                                </p>
                            </div>

                            <h2 className={headingClass}>Data Controller</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    ET “Nikola Halachev” acts as the data controller when you use
                                    our website, submit an enquiry through the contact form, or
                                    communicate with us by phone, email, or other channels.
                                </p>
                            </div>

                            <div className={boxClass}>
                                <p>
                                    <strong>Legal entity:</strong> ET “Nikola Halachev”
                                </p>
                                <p>
                                    <strong>Email:</strong> nthalachev@gmail.com
                                </p>
                                <p>
                                    <strong>Additional email:</strong>{" "}
                                    nikolahalachev2811@gmail.com
                                </p>
                                <p>
                                    <strong>Phone:</strong> +359 887 764 200
                                </p>
                                <p>
                                    <strong>Address:</strong> 24 Architect Petko Momchilov St,
                                    Varna 9000, Bulgaria
                                </p>
                            </div>

                            <h2 className={headingClass}>What personal data we process</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    We process a limited amount of personal data necessary for
                                    communication, service delivery, and compliance with our legal
                                    obligations.
                                </p>
                            </div>

                            <ul className={listClass}>
                                <li>
                                    <strong>Contact data:</strong> name, phone number, email
                                    address, and the content of the message sent through the contact
                                    form.
                                </li>
                                <li>
                                    <strong>Communication data:</strong> information you voluntarily
                                    provide in enquiries, consultations, and follow-up
                                    correspondence.
                                </li>
                                <li>
                                    <strong>Financial and accounting data:</strong> data required
                                    for issuing documents, accounting services, and legal
                                    compliance, where applicable.
                                </li>
                                <li>
                                    <strong>Technical data:</strong> limited technical information
                                    related to the use of the website, as well as your cookie
                                    preferences.
                                </li>
                            </ul>

                            <h2 className={headingClass}>How we use the data</h2>
                            <ul className={listClass}>
                                <li>To respond to your enquiry or contact request.</li>
                                <li>To provide a requested service or consultation.</li>
                                <li>To maintain the normal operation and security of the site.</li>
                                <li>
                                    To comply with legal, accounting, and administrative
                                    obligations.
                                </li>
                            </ul>

                            <h2 className={headingClass}>Legal grounds for processing</h2>
                            <ul className={listClass}>
                                <li>
                                    <strong>Performance of a contract</strong> or steps taken at
                                    your request before entering into a contract.
                                </li>
                                <li>
                                    <strong>Legal obligation</strong> when we are required to store
                                    or provide specific data.
                                </li>
                                <li>
                                    <strong>Legitimate interest</strong> related to security,
                                    protection, and the proper functioning of the website and
                                    communication.
                                </li>
                                <li>
                                    <strong>Consent</strong> where required, including for optional
                                    cookies and external content.
                                </li>
                            </ul>

                            <h2 className={headingClass}>Cookies and external services</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    The website uses essential local settings and stores your choice
                                    from the cookie banner in the browser.
                                </p>
                                <p className={textClass}>
                                    Google Maps on the contact page loads only if you have accepted
                                    optional cookies. When this service loads, a third party may
                                    process technical data according to its own policy.
                                </p>
                                <p className={textClass}>
                                    More details are available in the Cookies Policy.
                                </p>
                            </div>

                            <h2 className={headingClass}>Sharing personal data</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    We do not sell personal data and do not disclose it to third
                                    parties except where this is necessary for service delivery,
                                    technical support, external content requested by you, or where
                                    required by law.
                                </p>
                                <p className={textClass}>
                                    When we use external providers, this is done only to the extent
                                    necessary for the relevant function or service.
                                </p>
                            </div>

                            <h2 className={headingClass}>Retention period</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    We keep personal data only for as long as necessary for the
                                    purposes for which it was collected and for any period required
                                    by applicable law.
                                </p>
                                <p className={textClass}>
                                    Contact form data and communication records are retained for a
                                    reasonable period necessary to process the enquiry and any
                                    follow-up communication, unless a longer period is required by
                                    law.
                                </p>
                            </div>

                            <h2 className={headingClass}>Your rights</h2>
                            <ul className={listClass}>
                                <li>Right of access to your personal data.</li>
                                <li>Right to correct inaccurate or incomplete data.</li>
                                <li>Right to erasure where applicable.</li>
                                <li>Right to restriction of processing.</li>
                                <li>Right to object to certain processing activities.</li>
                                <li>Right to data portability where applicable.</li>
                                <li>Right to lodge a complaint with the competent authority.</li>
                            </ul>

                            <p className={`${textClass} mt-4`}>
                                To exercise your rights, you can contact us at:
                                nthalachev@gmail.com
                            </p>

                            <h2 className={headingClass}>Changes to this policy</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    This policy may be updated when the website, the technologies
                                    used, the way we operate, or the applicable legal requirements
                                    change.
                                </p>
                                <p className={textClass}>
                                    The updated version takes effect from the moment it is published
                                    on this page.
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}