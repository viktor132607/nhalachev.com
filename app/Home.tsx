"use client"

import { useTranslation } from "react-i18next"

export default function Home() {
    const { i18n } = useTranslation()
    const lang = i18n.language

    const pageWrap =
        "mx-auto w-full max-w-[1600px] px-4 py-4 sm:px-6 sm:py-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16"

    const heroClass =
        "relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:rounded-[28px]"

    const heroInnerClass =
        "px-4 py-10 text-center sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20 xl:px-16 xl:py-24 2xl:px-20 2xl:py-28"

    const heroTitleClass =
        "mx-auto max-w-4xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl"

    const heroTextClass =
        "mx-auto mt-4 max-w-xs text-sm leading-7 text-slate-700 sm:mt-6 sm:max-w-2xl sm:text-[15px] sm:leading-8 md:max-w-3xl md:text-base lg:text-lg lg:leading-9"

    const heroButtonsClass =
        "mt-6 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center"

    const primaryButtonClass =
        "inline-flex min-h-[48px] items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:px-6"

    const secondaryButtonClass =
        "inline-flex min-h-[48px] items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:px-6"

    const containerClass =
        "mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:mt-8 sm:rounded-[28px] lg:mt-10"

    const titleWrapClass =
        "border-b border-slate-200 px-4 py-6 sm:px-8 sm:py-8 md:px-10 lg:px-12"

    const titleClass =
        "text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"

    const contentClass =
        "divide-y divide-slate-200"

    const sectionClass =
        "scroll-mt-24 px-4 py-6 sm:px-8 sm:py-8 md:px-10 lg:px-12 xl:px-14"

    const headingClass =
        "mb-3 text-xl font-bold text-slate-900 sm:mb-4 sm:text-2xl md:text-[28px]"

    const textClass =
        "text-sm leading-7 text-slate-700 whitespace-pre-line sm:text-[15px] sm:leading-8 md:text-base"

    const listClass =
        "mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:pl-6 sm:text-[15px] sm:leading-8 md:text-base"

    return lang === "bg" ? (
        <div className={"scroll-smooth " + pageWrap}>
            <section id="home" className={heroClass}>
                <div className={heroInnerClass}>
                    <h1 className={heroTitleClass}>Никола Халачев Акаунтинг</h1>
                    <p className={heroTextClass}>
                        Професионално счетоводно обслужване, данъчни консултации, ТРЗ, правни и
                        партньорски услуги за български и чуждестранни клиенти.
                    </p>

                    <div className={heroButtonsClass}>
                        <a href="#services" className={primaryButtonClass}>
                            Виж услуги
                        </a>
                        <a href="#foreign-clients" className={secondaryButtonClass}>
                            За чуждестранни клиенти
                        </a>
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
{`За да спестим Вашите усилия да поддържате специфична компетентност и да гарантираме конфиденциалността на възнагражденията, ние осигуряваме възможно най-пълния сервиз по обслужване възнагражденията на Вашия персонал.`}
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
{`Акаунтинг Груп Бг може да Ви осигури правно обслужване в следните обалсти:`}
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
{`Като утвърдена счетоводна кантора Акаунтинг Груп Бг има изградени партньорства с водещи фирми от следни области, които нашите клиенти могат да използват при преференциални условия.`}
                        </p>
                        <ul className={listClass}>
                            <li>Правно обслужване</li>
                            <li>Трудова медица и ел.измервания</li>
                            <li>Преводи и легализация</li>
                            <li>Счетоводен софтуер Питагор</li>
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
                    <h1 className={heroTitleClass}>Nikola Halachev Accounting</h1>
                    <p className={heroTextClass}>
                        Professional accounting support, tax consultations, staff and payroll,
                        legal and partnership services for Bulgarian and foreign clients.
                    </p>

                    <div className={heroButtonsClass}>
                        <a href="#services" className={primaryButtonClass}>
                            View services
                        </a>
                        <a href="#foreign-clients" className={secondaryButtonClass}>
                            For foreign clients
                        </a>
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
{`In order to save your efforts to maintain specific competencies and ensure the confidentiality of wages, we provide the most complete service for your employees ‘ remuneration.`}
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
{`Accounting group BG can provide you with legal services in the following:`}
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
{`As an established accounting company “Accounting Group BG” has built partnerships with leading companies from the following areas, which our clients can use on preferential terms.`}
                        </p>
                        <ul className={listClass}>
                            <li>Legal Services</li>
                            <li>Occupational Media and electrical measurements</li>
                            <li>Translation and legalization</li>
                            <li>Pythagoras Accounting software</li>
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