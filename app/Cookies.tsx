"use client"

import { useTranslation } from "react-i18next"

export default function Cookies() {
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

    const listClass =
        "mt-4 list-disc space-y-3 pl-5 text-[15px] leading-[2] text-[#4b5563] marker:text-red-500 dark:text-white"

    return (
        <div className={pageWrap}>
            <div className={contentWrapClass}>
                <div className="mx-auto w-full max-w-[980px]">
                    {isBg ? (
                        <>
                            <h1 className={titleClass}>Политика за бисквитките</h1>
                            <p className={updatedClass}>
                                Последна актуализация:{" "}
                                <span className="font-semibold text-slate-700 dark:text-white">
                                    21.04.2026 г.
                                </span>
                            </p>

                            <h2 className={headingClass}>Въведение</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    Настоящата политика за бисквитките описва как ЕТ „Никола
                                    Халачев“ („Никола Халачев Акаунтинг“, „ние“) използва
                                    бисквитки и сходни технологии в nhalachev.com и свързаните
                                    дигитални услуги.
                                </p>
                                <p className={textClass}>
                                    Стремим се да осигурим безпроблемно изживяване и да ви дадем
                                    прозрачност и контрол върху данните, които се съхраняват на
                                    вашето устройство.
                                </p>
                            </div>

                            <h2 className={headingClass}>Какво представляват бисквитките</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    Бисквитките са малки текстови файлове, които се записват на
                                    вашето устройство при посещение на уебсайта.
                                </p>
                                <p className={textClass}>
                                    Те ни помагат да предоставяме основни функции, да запомняме
                                    предпочитания и да разбираме как се използва сайтът.
                                </p>
                            </div>

                            <h2 className={headingClass}>
                                Какви бисквитки и технологии използваме
                            </h2>
                            <ul className={listClass}>
                                <li>
                                    <strong>Задължителни бисквитки:</strong> необходими са за
                                    правилната работа на сайта, сигурността, езиковите настройки и
                                    изпращането на формуляри.
                                </li>
                                <li>
                                    <strong>Бисквитка за избор:</strong> записваме решението ви от
                                    банера за бисквитки, за да не го показваме отново при всяко
                                    посещение.
                                </li>
                                <li>
                                    <strong>Локални настройки:</strong> сайтът може да запазва
                                    настройки като тема или език в браузъра, за да ви осигури
                                    по-добро потребителско изживяване.
                                </li>
                                <li>
                                    <strong>Външно съдържание:</strong> Google Maps в страницата за
                                    контакти се зарежда само ако приемете незадължителните
                                    бисквитки.
                                </li>
                            </ul>

                            <h2 className={headingClass}>Съгласие</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    При първо посещение на сайта се показва банер за бисквитки.
                                    Чрез него можете да приемете или да откажете
                                    незадължителните бисквитки.
                                </p>
                                <p className={textClass}>
                                    Вашият избор се записва в браузъра, за да бъде спазван при
                                    следващи посещения.
                                </p>
                                <p className={textClass}>
                                    <strong>„Приемам“:</strong> разрешавате зареждането на
                                    незадължително външно съдържание, като Google Maps.
                                </p>
                                <p className={textClass}>
                                    <strong>„Откажи“:</strong> незадължителните бисквитки и
                                    външното съдържание остават изключени.
                                </p>
                            </div>

                            <h2 className={headingClass}>Управление на бисквитките</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    Можете да промените или оттеглите избора си по всяко време,
                                    като изтриете данните на браузъра си или local storage за
                                    сайта.
                                </p>
                                <p className={textClass}>
                                    Повечето браузъри позволяват да блокирате, ограничавате или
                                    изтривате бисквитки чрез настройките за поверителност.
                                </p>
                            </div>

                            <h2 className={headingClass}>Трети страни</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    В момента сайтът използва външна услуга като Google Maps,
                                    когато сте дали съгласие за незадължителни бисквитки.
                                </p>
                                <p className={textClass}>
                                    Възможно е тези услуги да обработват технически данни съгласно
                                    собствените си политики за поверителност и бисквитки.
                                </p>
                            </div>

                            <h2 className={headingClass}>Промени в политиката</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    Настоящата политика може да бъде актуализирана при промени в
                                    сайта, използваните технологии или приложимото законодателство.
                                </p>
                                <p className={textClass}>
                                    Актуализираната версия влиза в сила от момента на
                                    публикуването ѝ на тази страница.
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className={titleClass}>Cookies Policy</h1>
                            <p className={updatedClass}>
                                Last updated:{" "}
                                <span className="font-semibold text-slate-700 dark:text-white">
                                    21.04.2026
                                </span>
                            </p>

                            <h2 className={headingClass}>Introduction</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    This Cookies Policy explains how ET “Nikola Halachev”
                                    (“Nikola Halachev Accounting”, “we”) uses cookies and similar
                                    technologies on nhalachev.com and related digital services.
                                </p>
                                <p className={textClass}>
                                    We aim to provide a smooth experience while giving you
                                    transparency and control over the data stored on your device.
                                </p>
                            </div>

                            <h2 className={headingClass}>What cookies are</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    Cookies are small text files stored on your device when you
                                    visit a website.
                                </p>
                                <p className={textClass}>
                                    They help us provide core functionality, remember preferences,
                                    and understand how the site is used.
                                </p>
                            </div>

                            <h2 className={headingClass}>
                                What cookies and technologies we use
                            </h2>
                            <ul className={listClass}>
                                <li>
                                    <strong>Essential cookies:</strong> required for the correct
                                    functioning of the website, security, language settings, and
                                    form submission.
                                </li>
                                <li>
                                    <strong>Choice cookie:</strong> we store your decision from the
                                    cookie banner so it is not shown on every visit.
                                </li>
                                <li>
                                    <strong>Local preferences:</strong> the website may store
                                    settings such as theme or language in the browser to improve
                                    the user experience.
                                </li>
                                <li>
                                    <strong>External content:</strong> Google Maps on the contact
                                    page loads only if you accept optional cookies.
                                </li>
                            </ul>

                            <h2 className={headingClass}>Consent</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    On your first visit, a cookie banner is displayed. Through it,
                                    you can accept or decline optional cookies.
                                </p>
                                <p className={textClass}>
                                    Your choice is stored in the browser so it can be respected on
                                    future visits.
                                </p>
                                <p className={textClass}>
                                    <strong>“Accept”:</strong> you allow optional external content
                                    such as Google Maps to load.
                                </p>
                                <p className={textClass}>
                                    <strong>“Decline”:</strong> optional cookies and external
                                    content remain disabled.
                                </p>
                            </div>

                            <h2 className={headingClass}>Managing cookies</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    You can change or withdraw your choice at any time by clearing
                                    your browser data or the site’s local storage.
                                </p>
                                <p className={textClass}>
                                    Most browsers allow you to block, limit, or delete cookies
                                    through their privacy settings.
                                </p>
                            </div>

                            <h2 className={headingClass}>Third parties</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    The website currently uses an external service such as Google
                                    Maps when you have given consent for optional cookies.
                                </p>
                                <p className={textClass}>
                                    These services may process technical data in accordance with
                                    their own privacy and cookies policies.
                                </p>
                            </div>

                            <h2 className={headingClass}>Changes to this policy</h2>
                            <div className={groupClass}>
                                <p className={textClass}>
                                    This policy may be updated when the website, the technologies
                                    used, or the applicable legal requirements change.
                                </p>
                                <p className={textClass}>
                                    The updated version takes effect from the moment it is
                                    published on this page.
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}