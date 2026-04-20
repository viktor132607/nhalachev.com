"use client"

import { useTranslation } from "react-i18next"

export default function Home() {
    const { i18n } = useTranslation()
    const lang = i18n.language

    const pageWrap =
        "mx-auto w-full max-w-[1600px] px-2 py-2 sm:px-3 sm:py-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8"

    const heroClass =
        "relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] dark:border-zinc-700 dark:bg-zinc-800 sm:rounded-[28px]"

    const heroInnerClass =
        "px-3 py-4 sm:px-4 sm:py-5 md:px-5 md:py-6 lg:px-6 lg:py-6 xl:px-7 xl:py-7 2xl:px-8 2xl:py-8"

    const heroGridClass =
        "grid items-start gap-4 lg:grid-cols-[0.6fr_0.4fr] lg:gap-5"

    const heroTitleClass =
        "max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl xl:text-7xl"

    const heroTextClass =
        "mt-3 max-w-3xl text-base leading-8 text-slate-600 dark:text-zinc-300 sm:mt-4 sm:text-[17px] sm:leading-9 md:text-lg lg:text-[20px] lg:leading-10"

    const heroButtonsClass =
        "flex flex-col items-stretch gap-2 sm:grid sm:grid-cols-2 sm:items-stretch"

    const primaryButtonClass =
        "inline-flex h-[52px] w-full items-center justify-center rounded-xl border border-slate-950 bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-slate-200"

    const secondaryButtonClass =
        "inline-flex h-[52px] w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"

    const quickStripClass =
<<<<<<< HEAD
        "mt-4 grid gap-2 sm:grid-cols-2"

    const quickItemClass =
        "overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-zinc-700 dark:bg-zinc-900"

    const quickItemImageClass =
        "h-[120px] w-full object-cover"

    const quickItemTextClass =
        "px-4 py-3 text-[15px] font-medium text-slate-700 dark:text-zinc-200"
=======
        "mt-4 grid gap-3 sm:grid-cols-2"

    const quickItemClass =
        "group overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"

    const quickItemImageWrapClass =
        "flex h-[120px] items-center justify-center overflow-hidden rounded-xl bg-slate-50 dark:bg-zinc-800 sm:h-[128px]"

    const quickItemImageClass =
        "max-h-[92px] w-auto object-contain transition duration-300 group-hover:scale-105 sm:max-h-[100px]"

    const quickItemTextClass =
        "flex min-h-[72px] items-center justify-center px-2 pt-3 text-center text-[16px] font-semibold leading-7 text-slate-800 dark:text-zinc-100"
>>>>>>> becd9f5 (nav bar fix)

    const preServicesWrapClass =
        "mt-4 grid gap-4 lg:grid-cols-3 sm:mt-5 lg:mt-6"

    const preServicesCardClass =
        "rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] dark:border-zinc-700 dark:bg-zinc-800 sm:rounded-[28px] sm:p-5 lg:p-6"

    const preServicesTitleClass =
        "text-2xl font-bold text-slate-950 dark:text-white sm:text-[28px]"

    const preServicesTextClass =
        "mt-2 text-base leading-8 text-slate-600 dark:text-zinc-300 sm:text-[16px] sm:leading-9"

    const bulletListClass =
        "mt-3 space-y-2 text-base leading-8 text-slate-700 dark:text-zinc-200 sm:text-[16px] sm:leading-9"

    const bulletItemClass = "flex items-start gap-3"

    const bulletDotClass =
        "mt-[12px] h-2.5 w-2.5 shrink-0 rounded-full bg-slate-950 dark:bg-white"

    const bulletCheckClass =
        "mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white dark:bg-white dark:text-black"
<<<<<<< HEAD

    const heroGalleryClass =
        "mt-4 grid grid-cols-2 gap-2"

    const heroGalleryCardClass =
        "overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-zinc-700 dark:bg-zinc-900"

    const heroGalleryImageClass =
        "h-[132px] w-full object-cover sm:h-[150px] lg:h-[138px] xl:h-[150px]"
=======
>>>>>>> becd9f5 (nav bar fix)

    const containerClass =
        "mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] dark:border-zinc-700 dark:bg-zinc-800 sm:mt-5 sm:rounded-[28px] lg:mt-6"

    const titleWrapClass =
        "border-b border-slate-200 px-4 py-5 dark:border-zinc-700 sm:px-6 sm:py-6 md:px-8 lg:px-10"

    const titleClass =
        "text-center text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl"

    const contentClass =
        "divide-y divide-slate-200 dark:divide-zinc-700"

    const sectionClass =
        "scroll-mt-24 px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:px-10 xl:px-12"

    const headingClass =
        "mb-3 text-2xl font-bold text-slate-950 dark:text-white sm:mb-4 sm:text-3xl md:text-[32px]"

    const textClass =
        "whitespace-pre-line text-base leading-8 text-slate-700 dark:text-zinc-200 sm:text-[16px] sm:leading-9 md:text-lg"

    const listClass =
        "mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-slate-700 dark:text-zinc-200 sm:pl-6 sm:text-[16px] sm:leading-9 md:text-lg"

    return lang === "bg" ? (
        <div className={"scroll-smooth " + pageWrap}>
            <section id="home" className={heroClass}>
                <div className={heroInnerClass}>
                    <div className={heroGridClass}>
                        <div>
                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                                <img
                                    src="/images/fuckinghell.png"
                                    alt="Nikola Halachev Accounting"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="mt-4 lg:mt-5">
                                <h1 className={heroTitleClass}>
                                    Счетоводство без
                                    <br />
                                    излишен хаос
                                </h1>

                                <p className={heroTextClass}>
                                    Текущо счетоводно обслужване, ТРЗ, данъчни консултации и съдействие
                                    за български и чуждестранни клиенти. Ясен процес, подредена
                                    комуникация и навременна информация за важните срокове и решения.
                                </p>
                            </div>
                        </div>

                        <div className="flex h-full flex-col">
                            <div>
                                <div className={heroButtonsClass}>
                                    <a href="#services" className={primaryButtonClass}>
                                        Виж услуги
                                    </a>
                                    <a href="#foreign-clients" className={secondaryButtonClass}>
                                        За чуждестранни клиенти
                                    </a>
                                </div>

                                <div className={quickStripClass}>
                                    <div className={quickItemClass}>
<<<<<<< HEAD
                                        <img
                                            src="/images/service-accounting.jpg"
                                            alt="Текущо счетоводно обслужване"
                                            className={quickItemImageClass}
                                        />
=======
                                        <div className={quickItemImageWrapClass}>
                                            <img
                                                src="/images/top_left_centered.png"
                                                alt="Текущо счетоводно обслужване"
                                                className={quickItemImageClass}
                                            />
                                        </div>
>>>>>>> becd9f5 (nav bar fix)
                                        <div className={quickItemTextClass}>
                                            Текущо счетоводно обслужване
                                        </div>
                                    </div>

                                    <div className={quickItemClass}>
<<<<<<< HEAD
                                        <img
                                            src="/images/service-payroll.jpg"
                                            alt="ТРЗ и администриране на персонал"
                                            className={quickItemImageClass}
                                        />
=======
                                        <div className={quickItemImageWrapClass}>
                                            <img
                                                src="/images/top_right_centered.png"
                                                alt="ТРЗ и администриране на персонал"
                                                className={quickItemImageClass}
                                            />
                                        </div>
>>>>>>> becd9f5 (nav bar fix)
                                        <div className={quickItemTextClass}>
                                            ТРЗ и администриране на персонал
                                        </div>
                                    </div>

                                    <div className={quickItemClass}>
<<<<<<< HEAD
                                        <img
                                            src="/images/service-consulting.jpg"
                                            alt="Данъчни и правни консултации"
                                            className={quickItemImageClass}
                                        />
=======
                                        <div className={quickItemImageWrapClass}>
                                            <img
                                                src="/images/bottom_left_centered.png"
                                                alt="Данъчни и правни консултации"
                                                className={quickItemImageClass}
                                            />
                                        </div>
>>>>>>> becd9f5 (nav bar fix)
                                        <div className={quickItemTextClass}>
                                            Данъчни и правни консултации
                                        </div>
                                    </div>

                                    <div className={quickItemClass}>
<<<<<<< HEAD
                                        <img
                                            src="/images/service-startup.jpg"
                                            alt="Съдействие за нови фирми"
                                            className={quickItemImageClass}
                                        />
=======
                                        <div className={quickItemImageWrapClass}>
                                            <img
                                                src="/images/bottom_right_centered.png"
                                                alt="Съдействие за нови фирми"
                                                className={quickItemImageClass}
                                            />
                                        </div>
>>>>>>> becd9f5 (nav bar fix)
                                        <div className={quickItemTextClass}>
                                            Съдействие за нови фирми
                                        </div>
                                    </div>
                                </div>
<<<<<<< HEAD

                                <div className={heroGalleryClass}>
                                    <div className={heroGalleryCardClass}>
                                        <img
                                            src="/images/placeholder-1.jpg"
                                            alt="Placeholder 1"
                                            className={heroGalleryImageClass}
                                        />
                                    </div>

                                    <div className={heroGalleryCardClass}>
                                        <img
                                            src="/images/placeholder-2.jpg"
                                            alt="Placeholder 2"
                                            className={heroGalleryImageClass}
                                        />
                                    </div>

                                    <div className={heroGalleryCardClass}>
                                        <img
                                            src="/images/placeholder-3.jpg"
                                            alt="Placeholder 3"
                                            className={heroGalleryImageClass}
                                        />
                                    </div>

                                    <div className={heroGalleryCardClass}>
                                        <img
                                            src="/images/placeholder-4.jpg"
                                            alt="Placeholder 4"
                                            className={heroGalleryImageClass}
                                        />
                                    </div>
                                </div>
=======
>>>>>>> becd9f5 (nav bar fix)
                            </div>

                            <div className="mt-5 lg:mt-auto lg:pt-6">
                                <div className="space-y-3">
                                    <div className={bulletItemClass}>
                                        <span className={bulletCheckClass}>✓</span>
                                        <span className="text-base leading-8 text-slate-700 dark:text-zinc-200 sm:text-[16px] sm:leading-9">
                                            Навременна реакция по срокове и задължения
                                        </span>
                                    </div>

                                    <div className={bulletItemClass}>
                                        <span className={bulletCheckClass}>✓</span>
                                        <span className="text-base leading-8 text-slate-700 dark:text-zinc-200 sm:text-[16px] sm:leading-9">
                                            Ясна и разбираема комуникация без излишно усложняване
                                        </span>
                                    </div>

                                    <div className={bulletItemClass}>
                                        <span className={bulletCheckClass}>✓</span>
                                        <span className="text-base leading-8 text-slate-700 dark:text-zinc-200 sm:text-[16px] sm:leading-9">
                                            Практични решения според реалните нужди на бизнеса
                                        </span>
                                    </div>

                                    <div className={bulletItemClass}>
                                        <span className={bulletCheckClass}>✓</span>
                                        <span className="text-base leading-8 text-slate-700 dark:text-zinc-200 sm:text-[16px] sm:leading-9">
                                            Подходящо за малък и среден бизнес, нови фирми, свободни
                                            професии и чуждестранни клиенти
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={preServicesWrapClass}>
                <div className={preServicesCardClass}>
                    <h2 className={preServicesTitleClass}>Какво печелите</h2>
                    <p className={preServicesTextClass}>
                        Целта не е просто да се подадат документи, а да имате по-подреден процес и
                        по-малко губене на време.
                    </p>
                    <div className={bulletListClass}>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>По-ясна картина за текущите задължения</span>
                        </div>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>Навременни действия по срокове и документи</span>
                        </div>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>По-малко хаос в ежедневната административна работа</span>
                        </div>
                    </div>
                </div>

                <div className={preServicesCardClass}>
                    <h2 className={preServicesTitleClass}>С какво мога да помогна</h2>
                    <p className={preServicesTextClass}>
                        Подходът е практичен и ориентиран към реалната работа на фирмата.
                    </p>
                    <div className={bulletListClass}>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>Текущо счетоводно обслужване</span>
                        </div>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>ТРЗ и обслужване на персонал</span>
                        </div>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>Консултации за развитие, оптимизация и организация</span>
                        </div>
                    </div>
                </div>

                <div className={preServicesCardClass}>
                    <h2 className={preServicesTitleClass}>За кого е подходящо</h2>
                    <p className={preServicesTextClass}>
                        Услугите са насочени към хора и компании, които искат подреденост,
                        предвидимост и нормална комуникация.
                    </p>
                    <div className={bulletListClass}>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>Собственици на фирми, които искат яснота</span>
                        </div>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>Хора, които стартират нова дейност</span>
                        </div>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>Чуждестранни клиенти, работещи в България</span>
                        </div>
                    </div>
                </div>
            </section>

            <div id="services" className={containerClass}>
                <div className={titleWrapClass}>
                    <h1 className={titleClass}>Услуги & Дейности</h1>
                </div>

                <div className={contentClass}>
                    <section className={sectionClass} id="accounting">
                        <h2 className={headingClass}>Счетоводни услуги</h2>
                        <ul className={listClass}>
                            <li>Оперативна счетоводна отчетност на текущите документи, в съответствие с изискванията на българското счетоводно законодателство и Националните или Международните Счетоводни Стандарти</li>
                            <li>Изготвяне на счетоводна политика и индивидуален сметкоплан</li>
                            <li>Изготвяне и подаване на месечни справки декларации по Закона за данък върху добавената стойност (ЗДДС)</li>
                            <li>Изготвяне и подаване на месечни VIES декларации, съгласно изискванията на ЗДДС</li>
                            <li>Изчисляване на дължимите месечни данъци,и подготвяне на платежни документи за превода им</li>
                            <li>Изготвяне на периодични отчети, отразяващи текущия финансов резултат според нуждите на клиента</li>
                            <li>Изготвяне на месечни и периодични справки за дейността на клиента, отразяващи складови наличности, движения по определени счетоводни сметки, разчети с търговски контрагенти и финансови институции</li>
                            <li>Изготвяне на калкулации и себестойности в зависимост от дейността на клиента</li>
                            <li>Своевременна информация за настъпили промени в данъчно-осигурителното или трудово законодателства</li>
                            <li>Допълнителни счетоводни услуги, на база специфичните изисквания на клиента.</li>
                            <li>Представителство пред осигурителните и данъчни органи във връзка с назначени проверки или ревизии</li>
                        </ul>
                    </section>

                    <section className={sectionClass} id="consulting">
                        <h2 className={headingClass}>Консултации</h2>
                        <p className={textClass}>
{`Постоянните изменения на съществуващите и приемането на нови нормативни актове винаги води до риска от данъчни грешки, които понякога струват твърде скъпо.`}
                        </p>
                        <ul className={listClass}>
                            <li>Счетоводната политика на предприятието</li>
                            <li>Данъчно планиране на дейността и данъчна оптимизация</li>
                            <li>Организиране документооборота на предприятието</li>
                            <li>Консултации по трудови и осигурителни въпроси</li>
                            <li>Консултации относно прилагане на спогодби за избягване двойното данъчно облагане</li>
                        </ul>
                    </section>

                    <section className={sectionClass} id="payroll">
                        <h2 className={headingClass}>ТРЗ</h2>
                        <p className={textClass}>
{`За да спестя Вашите усилия да поддържате специфична компетентност и да гарантирам конфиденциалността на възнагражденията, предлагам възможно най-пълния сервиз по обслужване възнагражденията на Вашия персонал.`}
                        </p>
                        <ul className={listClass}>
                            <li>Изготвяне на трудови договори, граждански договори и договори за управление и контрол</li>
                            <li>Изготвяне и подаване на необходимите уведомления в НАП</li>
                            <li>Поддържане на трудови досиета на служители</li>
                            <li>Изготвяне на ведомости за заплати и фишове към тях</li>
                            <li>Изготвяне на платежни документи за превод на дължими месечни осигуровки и данък върху доходите на физически лица</li>
                            <li>Обработка на болнични листове и подаване в НОИ</li>
                            <li>Представяне на информация за осигурените лица в Персонален регистър – Декларации Образец 1 и 6</li>
                            <li>Изготвяне на справка за разходите на фирмата за трудови възнаграждения и осигуровки по отдели</li>
                            <li>Представителство пред осигурителните и данъчни органи във връзка с назначени проверки или ревизии</li>
                        </ul>
                    </section>

                    <section className={sectionClass} id="legal">
                        <h2 className={headingClass}>Правни услуги</h2>
                        <p className={textClass}>
{`Предлагам правно обслужване в следните области:`}
                        </p>
                        <ul className={listClass}>
                            <li>Регистрация и преобразуване на търговски дружества</li>
                            <li>Изготвяне на всички видове договори</li>
                            <li>Недвижима собственост и вещно право</li>
                            <li>Търговско и облигационно право</li>
                            <li>Право на интелектуалната собственост</li>
                            <li>Корпоративно право Сливания и придобивания</li>
                            <li>Дю Дилиджънс на компании или проекти</li>
                        </ul>
                    </section>

                    <section className={sectionClass} id="partners">
                        <h2 className={headingClass}>Партньорски услуги</h2>
                        <p className={textClass}>
{`Предлагам достъп и до партньорски услуги в различни области, които могат да бъдат полезни според конкретните нужди на клиента.`}
                        </p>
                        <ul className={listClass}>
                            <li>Правно обслужване</li>
                            <li>Трудова медица и ел.измервания</li>
                            <li>Преводи и легализация</li>
                            <li>Счетоводен софтуер</li>
                        </ul>
                    </section>

                    <section className={sectionClass} id="foreign-clients">
                        <h2 className={headingClass}>За чуждестранни клиенти и партньори</h2>
                        <p className={textClass}>
{`Защо България е толкова атрактивна бизнес дестинация
България отдавна е атрактивна дестинация за създаване на нов бизнес или преместване на компании от чужбина поради редица причини. Страната предлага идеални условия за съчетаване на работа и по-приятен живот от много други държави в Европа.`}
                        </p>
                        <ul className={listClass}>
                            <li>Най-ниски данъци в ЕС</li>
                            <li>Нисък корпоративен данък от 10%</li>
                            <li>5% данък за дивиденти</li>
                            <li>20% ДДС</li>
                            <li>Професионалисти и работна ръка на много конкурентно заплащане</li>
                            <li>Много университети и добро образование</li>
                            <li>Изгодна инфраструктура</li>
                            <li>4 летища с много дестинации към и от Европа</li>
                            <li>Сред най-бързите интернет връзки в Европа</li>
                            <li>Варна е най-добър град за живеене в България и една от най-желаните дестинации за дигитални номади в Европа</li>
                        </ul>

                        <p className={textClass + " mt-6"}>
{`Регистрация на български компании за чужденци
Вие имате компания в чужбина и желаета да преместите бизнеса си в България? Или имате на мерението да стартирате нов бизнес тук?`}
                        </p>
                        <ul className={listClass}>
                            <li>Регистрация на фирми</li>
                            <li>Адресна регистрация</li>
                            <li>Организационна помощ при преместване и остановяване във Варна и София</li>
                            <li>Мрежа от парньори в сферите на недвижими имоти, адвокати, банки, телекоммуникация, софтуер, маркетинг, почивки и развлечения</li>
                            <li>Данъчна консултация за оптимизация</li>
                            <li>Цялостно обслужване</li>
                        </ul>

                        <p className={textClass + " mt-6"}>
{`Данъчна оптимизация на компании от Европа
Последните няколко години има голям ръст на международни компании, които се преместват в България поради няколко причини`}
                        </p>
                        <ul className={listClass}>
                            <li>Значими данъчни предимства</li>
                            <li>Член на ЕС от 2007 и преминаване към Еврозона 2024</li>
                            <li>Все още ниски цени на недвижими имоти</li>
                            <li>Висококачествен и по-свободен живот</li>
                            <li>Уникална природа с визможности за туризъм, спорт и отдих през всичките четири сезона</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    ) : (
        <div className={"scroll-smooth " + pageWrap}>
            <section id="home" className={heroClass}>
                <div className={heroInnerClass}>
                    <div className={heroGridClass}>
                        <div>
                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
                                <img
                                    src="/images/fuckinghell.png"
                                    alt="Nikola Halachev Accounting"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="mt-4 lg:mt-5">
                                <h1 className={heroTitleClass}>
                                    Accounting without
                                    <br />
                                    the extra chaos
                                </h1>

                                <p className={heroTextClass}>
                                    Ongoing accounting, payroll, tax consultations and support for
                                    Bulgarian and foreign clients. A clear process, organized
                                    communication and timely information when deadlines and decisions
                                    matter.
                                </p>
                            </div>
                        </div>

                        <div className="flex h-full flex-col">
                            <div>
                                <div className={heroButtonsClass}>
                                    <a href="#services" className={primaryButtonClass}>
                                        View services
                                    </a>
                                    <a href="#foreign-clients" className={secondaryButtonClass}>
                                        For foreign clients
                                    </a>
                                </div>

                                <div className={quickStripClass}>
                                    <div className={quickItemClass}>
<<<<<<< HEAD
                                        <img
                                            src="/images/service-accounting.jpg"
                                            alt="Ongoing accounting support"
                                            className={quickItemImageClass}
                                        />
=======
                                        <div className={quickItemImageWrapClass}>
                                            <img
                                                src="/images/top_left_centered.png"
                                                alt="Ongoing accounting support"
                                                className={quickItemImageClass}
                                            />
                                        </div>
>>>>>>> becd9f5 (nav bar fix)
                                        <div className={quickItemTextClass}>
                                            Ongoing accounting support
                                        </div>
                                    </div>

                                    <div className={quickItemClass}>
<<<<<<< HEAD
                                        <img
                                            src="/images/service-payroll.jpg"
                                            alt="Payroll and staff administration"
                                            className={quickItemImageClass}
                                        />
=======
                                        <div className={quickItemImageWrapClass}>
                                            <img
                                                src="/images/top_right_centered.png"
                                                alt="Payroll and staff administration"
                                                className={quickItemImageClass}
                                            />
                                        </div>
>>>>>>> becd9f5 (nav bar fix)
                                        <div className={quickItemTextClass}>
                                            Payroll and staff administration
                                        </div>
                                    </div>

                                    <div className={quickItemClass}>
<<<<<<< HEAD
                                        <img
                                            src="/images/service-consulting.jpg"
                                            alt="Tax and legal consultations"
                                            className={quickItemImageClass}
                                        />
=======
                                        <div className={quickItemImageWrapClass}>
                                            <img
                                                src="/images/bottom_left_centered.png"
                                                alt="Tax and legal consultations"
                                                className={quickItemImageClass}
                                            />
                                        </div>
>>>>>>> becd9f5 (nav bar fix)
                                        <div className={quickItemTextClass}>
                                            Tax and legal consultations
                                        </div>
                                    </div>

                                    <div className={quickItemClass}>
<<<<<<< HEAD
                                        <img
                                            src="/images/service-startup.jpg"
                                            alt="Support for new companies"
                                            className={quickItemImageClass}
                                        />
=======
                                        <div className={quickItemImageWrapClass}>
                                            <img
                                                src="/images/bottom_right_centered.png"
                                                alt="Support for new companies"
                                                className={quickItemImageClass}
                                            />
                                        </div>
>>>>>>> becd9f5 (nav bar fix)
                                        <div className={quickItemTextClass}>
                                            Support for new companies
                                        </div>
                                    </div>
                                </div>
<<<<<<< HEAD

                                <div className={heroGalleryClass}>
                                    <div className={heroGalleryCardClass}>
                                        <img
                                            src="/images/placeholder-1.jpg"
                                            alt="Placeholder 1"
                                            className={heroGalleryImageClass}
                                        />
                                    </div>

                                    <div className={heroGalleryCardClass}>
                                        <img
                                            src="/images/placeholder-2.jpg"
                                            alt="Placeholder 2"
                                            className={heroGalleryImageClass}
                                        />
                                    </div>

                                    <div className={heroGalleryCardClass}>
                                        <img
                                            src="/images/placeholder-3.jpg"
                                            alt="Placeholder 3"
                                            className={heroGalleryImageClass}
                                        />
                                    </div>

                                    <div className={heroGalleryCardClass}>
                                        <img
                                            src="/images/placeholder-4.jpg"
                                            alt="Placeholder 4"
                                            className={heroGalleryImageClass}
                                        />
                                    </div>
                                </div>
=======
>>>>>>> becd9f5 (nav bar fix)
                            </div>

                            <div className="mt-5 lg:mt-auto lg:pt-6">
                                <div className="space-y-3">
                                    <div className={bulletItemClass}>
                                        <span className={bulletCheckClass}>✓</span>
                                        <span className="text-base leading-8 text-slate-700 dark:text-zinc-200 sm:text-[16px] sm:leading-9">
                                            Timely action on deadlines and obligations
                                        </span>
                                    </div>

                                    <div className={bulletItemClass}>
                                        <span className={bulletCheckClass}>✓</span>
                                        <span className="text-base leading-8 text-slate-700 dark:text-zinc-200 sm:text-[16px] sm:leading-9">
                                            Clear communication without unnecessary complexity
                                        </span>
                                    </div>

                                    <div className={bulletItemClass}>
                                        <span className={bulletCheckClass}>✓</span>
                                        <span className="text-base leading-8 text-slate-700 dark:text-zinc-200 sm:text-[16px] sm:leading-9">
                                            Practical solutions based on real business needs
                                        </span>
                                    </div>

                                    <div className={bulletItemClass}>
                                        <span className={bulletCheckClass}>✓</span>
                                        <span className="text-base leading-8 text-slate-700 dark:text-zinc-200 sm:text-[16px] sm:leading-9">
                                            Suitable for small and medium business, new companies,
                                            freelancers and foreign clients
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={preServicesWrapClass}>
                <div className={preServicesCardClass}>
                    <h2 className={preServicesTitleClass}>What you gain</h2>
                    <p className={preServicesTextClass}>
                        The goal is not just filing documents. It is having a cleaner process and
                        wasting less time.
                    </p>
                    <div className={bulletListClass}>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>Clearer view of current obligations</span>
                        </div>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>Timely action on deadlines and documentation</span>
                        </div>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>Less chaos in daily administrative work</span>
                        </div>
                    </div>
                </div>

                <div className={preServicesCardClass}>
                    <h2 className={preServicesTitleClass}>How I can help</h2>
                    <p className={preServicesTextClass}>
                        The approach is practical and focused on the actual day-to-day work of the
                        business.
                    </p>
                    <div className={bulletListClass}>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>Ongoing accounting support</span>
                        </div>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>Payroll and staff administration</span>
                        </div>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>Consultations for growth, optimization and structure</span>
                        </div>
                    </div>
                </div>

                <div className={preServicesCardClass}>
                    <h2 className={preServicesTitleClass}>Who it is for</h2>
                    <p className={preServicesTextClass}>
                        The service is aimed at people and companies that want order, predictability
                        and normal communication.
                    </p>
                    <div className={bulletListClass}>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>Business owners who want clarity</span>
                        </div>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>People starting a new activity</span>
                        </div>
                        <div className={bulletItemClass}>
                            <span className={bulletDotClass}></span>
                            <span>Foreign clients operating in Bulgaria</span>
                        </div>
                    </div>
                </div>
            </section>

            <div id="services" className={containerClass}>
                <div className={titleWrapClass}>
                    <h1 className={titleClass}>Services & Activities</h1>
                </div>

                <div className={contentClass}>
                    <section className={sectionClass} id="accounting">
                        <h2 className={headingClass}>Accounting Services</h2>
                        <ul className={listClass}>
                            <li>Operational accounting of the current documents in accordance with the requirements of the Bulgarian accounting legislation and national or international accounting standards</li>
                            <li>Preparation of accounting policy and individual chart of accounts</li>
                            <li>Preparation and submission of monthly statements under the value Added Tax Act (VAT)</li>
                            <li>Preparation and submission of monthly VIES declarations, as required by the VAT ACT</li>
                            <li>Calculation of monthly taxes due, and preparation of payment documents for their translation</li>
                            <li>Preparation of periodic reports reflecting the current financial result according to the client’s needs</li>
                            <li>Preparation of monthly and periodic reports on the client’s activity, reflecting stocks, movements in certain accounting accounts, settlements with commercial counterparties and financial institutions</li>
                            <li>Preparation of calculations and costs depending on the client’s activity</li>
                            <li>Timely information about changes in the tax-insurance or labour legislation</li>
                            <li>Additional accounting services, based on the specific requirements of the client.</li>
                            <li>Representation before insurance and tax authorities in relation to appointed inspections or revisions</li>
                        </ul>
                    </section>

                    <section className={sectionClass} id="consulting">
                        <h2 className={headingClass}>Consultations</h2>
                        <p className={textClass}>
{`The constant changes in the existing and adoption of new regulations always lead to the risk of tax errors, which sometimes cost too expensive.`}
                        </p>
                        <ul className={listClass}>
                            <li>The accounting policy of the Enterprise</li>
                            <li>Business tax planning and tax optimization</li>
                            <li>Organizing the company’s document turnover</li>
                            <li>Consultations on labour and social security issues</li>
                            <li>Consultations on the application of agreements to avoid double taxation</li>
                        </ul>
                    </section>

                    <section className={sectionClass} id="payroll">
                        <h2 className={headingClass}>Staff, wages and salaries</h2>
                        <p className={textClass}>
{`To save you the effort of maintaining specific expertise and to ensure payroll confidentiality, I offer a complete service for managing employee remuneration.`}
                        </p>
                        <ul className={listClass}>
                            <li>Drafting of employment contracts, civil contracts and contracts for management and control</li>
                            <li>Preparation and submission of necessary notices to the NRA</li>
                            <li>Maintenance of Labour records of employees</li>
                            <li>Preparation of payrolls for salaries and fiches</li>
                            <li>Preparation of payment documents for transfer of due monthly insurance and income tax of natural persons</li>
                            <li>Processing of hospital papers and filing in NSSI</li>
                            <li>Presentation of information about insured persons in personal register-declarations model 1 and 6</li>
                            <li>Preparation of a report on the costs of the company for salaries and contributions by department</li>
                            <li>Representation before insurance and tax authorities in relation to appointed inspections or revisions</li>
                        </ul>
                    </section>

                    <section className={sectionClass} id="legal">
                        <h2 className={headingClass}>Law consultations</h2>
                        <p className={textClass}>
{`I offer legal support in the following areas:`}
                        </p>
                        <ul className={listClass}>
                            <li>Registration and transformation of commercial companies</li>
                            <li>Preparation of all types of contracts</li>
                            <li>Immovable property and real estate law</li>
                            <li>Commercial and contract law</li>
                            <li>Intellectual property Law</li>
                            <li>Corporate law mergers and acquisitions</li>
                            <li>Due diligence of companies or projects</li>
                        </ul>
                    </section>

                    <section className={sectionClass} id="partners">
                        <h2 className={headingClass}>Partnership Level Services</h2>
                        <p className={textClass}>
{`I also provide access to partner services across different areas that may be useful depending on the client’s specific needs.`}
                        </p>
                        <ul className={listClass}>
                            <li>Legal Services</li>
                            <li>Occupational Media and electrical measurements</li>
                            <li>Translation and legalization</li>
                            <li>Accounting software</li>
                        </ul>
                    </section>

                    <section className={sectionClass} id="foreign-clients">
                        <h2 className={headingClass}>For foreign clients and partners</h2>
                        <p className={textClass}>
{`Why Bulgaria is such an attractive business destination
Bulgaria has long been an attractive destination for setting up a new business or moving companies from abroad for a number of reasons. The country offers ideal conditions for combining work and a more pleasant life than many other countries in Europe.`}
                        </p>
                        <ul className={listClass}>
                            <li>Lowest taxes in the EU</li>
                            <li>Low corporation tax of 10%</li>
                            <li>5% dividend tax</li>
                            <li>20% VAT</li>
                            <li>Professionals and labour at very competitive pay</li>
                            <li>Many universities and good education</li>
                            <li>Advantageous infrastructure</li>
                            <li>4 airports with many destinations to and from Europe</li>
                            <li>Among the fastest internet connections in Europe</li>
                            <li>Varna is the best city to live in Bulgaria and one of the most desirable destinations for digital nomads in Europe</li>
                        </ul>

                        <p className={textClass + " mt-6"}>
{`Registration of Bulgarian companies for foreigners
You have a company abroad and want to move your business to Bulgaria? Or do you have the measure to start a new business here?`}
                        </p>
                        <ul className={listClass}>
                            <li>Registration of companies</li>
                            <li>Address registration</li>
                            <li>Organizational assistance in relocation and establishment in Varna and Sofia</li>
                            <li>Network of partners in real estate, lawyers, banks, telecoms, software, marketing, holidays and entertainment</li>
                            <li>Tax consultation for optimization</li>
                            <li>Comprehensive service</li>
                        </ul>

                        <p className={textClass + " mt-6"}>
{`Tax optimization of companies from Europe
The last few years there has been a large growth of international companies moving to Bulgaria for several reasons`}
                        </p>
                        <ul className={listClass}>
                            <li>Significant tax advantages</li>
                            <li>Member of the EU since 2007 and part of the EURO area 2024</li>
                            <li>Still low real estate prices</li>
                            <li>High quality and freer life</li>
                            <li>Unique nature with opportunities for tourism, sports and recreation throughout all four seasons</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}