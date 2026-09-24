import type { Locale } from "../lib/locale"

export type QuickImageKey = "accounting" | "payroll" | "consulting" | "companySetup"

export type HomeCta = {
    id: string
    label: string
    variant: "primary" | "secondary"
}

export type HomeQuickItem = {
    id: string
    label: string
    alt: string
    image: QuickImageKey
}

export type BenefitCardContent = {
    title: string
    description: string
    bullets: string[]
}

export type ServiceBlock =
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] }

export type ServiceSectionContent = {
    id: string
    title: string
    blocks: ServiceBlock[]
}

export type HomeLocaleContent = {
    hero: {
        titleLines: string[]
        description: string
        ctas: HomeCta[]
        quickItems: HomeQuickItem[]
        highlights: string[]
    }
    benefits: BenefitCardContent[]
    servicesTitle: string
    serviceSections: ServiceSectionContent[]
    foreignClients: ServiceSectionContent
}

export const homeContent: Record<Locale, HomeLocaleContent> = {
    "bg": {
        "hero": {
            "titleLines": [
                "Счетоводство без",
                "излишен хаос"
            ],
            "description": "Текущо счетоводно обслужване, ТРЗ, данъчни консултации и съдействие\nза български и чуждестранни клиенти. Ясен процес, подредена\nкомуникация и навременна информация за важните срокове и решения.",
            "ctas": [
                {
                    "id": "services",
                    "label": "Виж услуги",
                    "variant": "primary"
                },
                {
                    "id": "foreign-clients",
                    "label": "За чуждестранни клиенти",
                    "variant": "secondary"
                }
            ],
            "quickItems": [
                {
                    "id": "accounting",
                    "label": "Текущо счетоводно обслужване",
                    "alt": "Текущо счетоводно обслужване",
                    "image": "accounting"
                },
                {
                    "id": "payroll",
                    "label": "ТРЗ и администриране на персонал",
                    "alt": "ТРЗ и администриране на персонал",
                    "image": "payroll"
                },
                {
                    "id": "consulting",
                    "label": "Данъчни и правни консултации",
                    "alt": "Данъчни и правни консултации",
                    "image": "consulting"
                },
                {
                    "id": "partners",
                    "label": "Съдействие за нови фирми",
                    "alt": "Съдействие за нови фирми",
                    "image": "companySetup"
                }
            ],
            "highlights": [
                "Навременна реакция по срокове и задължения",
                "Ясна и разбираема комуникация без излишно усложняване",
                "Практични решения според реалните нужди на бизнеса",
                "Подходящо за малък и среден бизнес, нови фирми, свободни\nпрофесии и чуждестранни клиенти"
            ]
        },
        "benefits": [
            {
                "title": "Какво печелите",
                "description": "Целта не е просто да се подадат документи, а да имате по-подреден процес и\nпо-малко губене на време.",
                "bullets": [
                    "По-ясна картина за текущите задължения",
                    "Навременни действия по срокове и документи",
                    "По-малко хаос в ежедневната административна работа"
                ]
            },
            {
                "title": "С какво мога да помогна",
                "description": "Подходът е практичен и ориентиран към реалната работа на фирмата.",
                "bullets": [
                    "Текущо счетоводно обслужване",
                    "ТРЗ и обслужване на персонал",
                    "Консултации за развитие, оптимизация и организация"
                ]
            },
            {
                "title": "За кого е подходящо",
                "description": "Услугите са насочени към хора и компании, които искат подреденост,\nпредвидимост и нормална комуникация.",
                "bullets": [
                    "Собственици на фирми, които искат яснота",
                    "Хора, които стартират нова дейност",
                    "Чуждестранни клиенти, работещи в България"
                ]
            }
        ],
        "servicesTitle": "Услуги & Дейности",
        "serviceSections": [
            {
                "id": "accounting",
                "title": "Счетоводни услуги",
                "blocks": [
                    {
                        "type": "list",
                        "items": [
                            "Оперативна счетоводна отчетност на текущите документи, в съответствие с изискванията на българското счетоводно законодателство и Националните или Международните Счетоводни Стандарти",
                            "Изготвяне на счетоводна политика и индивидуален сметкоплан",
                            "Изготвяне и подаване на месечни справки декларации по Закона за данък върху добавената стойност (ЗДДС)",
                            "Изготвяне и подаване на месечни VIES декларации, съгласно изискванията на ЗДДС",
                            "Изчисляване на дължимите месечни данъци,и подготвяне на платежни документи за превода им",
                            "Изготвяне на периодични отчети, отразяващи текущия финансов резултат според нуждите на клиента",
                            "Изготвяне на месечни и периодични справки за дейността на клиента, отразяващи складови наличности, движения по определени счетоводни сметки, разчети с търговски контрагенти и финансови институции",
                            "Изготвяне на калкулации и себестойности в зависимост от дейността на клиента",
                            "Своевременна информация за настъпили промени в данъчно-осигурителното или трудово законодателства",
                            "Допълнителни счетоводни услуги, на база специфичните изисквания на клиента.",
                            "Представителство пред осигурителните и данъчни органи във връзка с назначени проверки или ревизии"
                        ]
                    }
                ]
            },
            {
                "id": "consulting",
                "title": "Консултации",
                "blocks": [
                    {
                        "type": "paragraph",
                        "text": "Постоянните изменения на съществуващите и приемането на нови нормативни актове винаги води до риска от данъчни грешки, които понякога струват твърде скъпо."
                    },
                    {
                        "type": "list",
                        "items": [
                            "Счетоводната политика на предприятието",
                            "Данъчно планиране на дейността и данъчна оптимизация",
                            "Организиране документооборота на предприятието",
                            "Консултации по трудови и осигурителни въпроси",
                            "Консултации относно прилагане на спогодби за избягване двойното данъчно облагане"
                        ]
                    }
                ]
            },
            {
                "id": "payroll",
                "title": "ТРЗ",
                "blocks": [
                    {
                        "type": "paragraph",
                        "text": "За да спестя Вашите усилия да поддържате специфична компетентност и да гарантирам конфиденциалността на възнагражденията, предлагам възможно най-пълния сервиз по обслужване възнагражденията на Вашия персонал."
                    },
                    {
                        "type": "list",
                        "items": [
                            "Изготвяне на трудови договори, граждански договори и договори за управление и контрол",
                            "Изготвяне и подаване на необходимите уведомления в НАП",
                            "Поддържане на трудови досиета на служители",
                            "Изготвяне на ведомости за заплати и фишове към тях",
                            "Изготвяне на платежни документи за превод на дължими месечни осигуровки и данък върху доходите на физически лица",
                            "Обработка на болнични листове и подаване в НОИ",
                            "Представяне на информация за осигурените лица в Персонален регистър – Декларации Образец 1 и 6",
                            "Изготвяне на справка за разходите на фирмата за трудови възнаграждения и осигуровки по отдели",
                            "Представителство пред осигурителните и данъчни органи във връзка с назначени проверки или ревизии"
                        ]
                    }
                ]
            },
            {
                "id": "legal",
                "title": "Правни услуги",
                "blocks": [
                    {
                        "type": "paragraph",
                        "text": "Предлагам правно обслужване в следните области:"
                    },
                    {
                        "type": "list",
                        "items": [
                            "Регистрация и преобразуване на търговски дружества",
                            "Изготвяне на всички видове договори",
                            "Недвижима собственост и вещно право",
                            "Търговско и облигационно право",
                            "Право на интелектуалната собственост",
                            "Корпоративно право Сливания и придобивания",
                            "Дю Дилиджънс на компании или проекти"
                        ]
                    }
                ]
            },
            {
                "id": "partners",
                "title": "Партньорски услуги",
                "blocks": [
                    {
                        "type": "paragraph",
                        "text": "Предлагам достъп и до партньорски услуги в различни области, които могат да бъдат полезни според конкретните нужди на клиента."
                    },
                    {
                        "type": "list",
                        "items": [
                            "Правно обслужване",
                            "Трудова медица и ел.измервания",
                            "Преводи и легализация",
                            "Счетоводен софтуер"
                        ]
                    }
                ]
            }
        ],
        "foreignClients": {
            "id": "foreign-clients",
            "title": "За чуждестранни клиенти и партньори",
            "blocks": [
                {
                    "type": "paragraph",
                    "text": "Защо България е толкова атрактивна бизнес дестинация\nБългария отдавна е атрактивна дестинация за създаване на нов бизнес или преместване на компании от чужбина поради редица причини. Страната предлага идеални условия за съчетаване на работа и по-приятен живот от много други държави в Европа."
                },
                {
                    "type": "list",
                    "items": [
                        "Най-ниски данъци в ЕС",
                        "Нисък корпоративен данък от 10%",
                        "5% данък за дивиденти",
                        "20% ДДС",
                        "Професионалисти и работна ръка на много конкурентно заплащане",
                        "Много университети и добро образование",
                        "Изгодна инфраструктура",
                        "4 летища с много дестинации към и от Европа",
                        "Сред най-бързите интернет връзки в Европа",
                        "Варна е най-добър град за живеене в България и една от най-желаните дестинации за дигитални номади в Европа"
                    ]
                },
                {
                    "type": "paragraph",
                    "text": "Регистрация на български компании за чужденци\nВие имате компания в чужбина и желаета да преместите бизнеса си в България? Или имате на мерението да стартирате нов бизнес тук?"
                },
                {
                    "type": "list",
                    "items": [
                        "Регистрация на фирми",
                        "Адресна регистрация",
                        "Организационна помощ при преместване и остановяване във Варна и София",
                        "Мрежа от парньори в сферите на недвижими имоти, адвокати, банки, телекоммуникация, софтуер, маркетинг, почивки и развлечения",
                        "Данъчна консултация за оптимизация",
                        "Цялостно обслужване"
                    ]
                },
                {
                    "type": "paragraph",
                    "text": "Данъчна оптимизация на компании от Европа\nПоследните няколко години има голям ръст на международни компании, които се преместват в България поради няколко причини"
                },
                {
                    "type": "list",
                    "items": [
                        "Значими данъчни предимства",
                        "Член на ЕС от 2007 и преминаване към Еврозона 2024",
                        "Все още ниски цени на недвижими имоти",
                        "Висококачествен и по-свободен живот",
                        "Уникална природа с визможности за туризъм, спорт и отдих през всичките четири сезона"
                    ]
                }
            ]
        }
    },
    "en": {
        "hero": {
            "titleLines": [
                "Accounting without",
                "the extra chaos"
            ],
            "description": "Ongoing accounting, payroll, tax consultations and support for\nBulgarian and foreign clients. A clear process, organized\ncommunication and timely information when deadlines and decisions\nmatter.",
            "ctas": [
                {
                    "id": "services",
                    "label": "View services",
                    "variant": "primary"
                },
                {
                    "id": "foreign-clients",
                    "label": "For foreign clients",
                    "variant": "secondary"
                }
            ],
            "quickItems": [
                {
                    "id": "accounting",
                    "label": "Ongoing accounting support",
                    "alt": "Ongoing accounting support",
                    "image": "accounting"
                },
                {
                    "id": "payroll",
                    "label": "Payroll and staff administration",
                    "alt": "Payroll and staff administration",
                    "image": "payroll"
                },
                {
                    "id": "consulting",
                    "label": "Tax and legal consultations",
                    "alt": "Tax and legal consultations",
                    "image": "consulting"
                },
                {
                    "id": "partners",
                    "label": "Support for new companies",
                    "alt": "Support for new companies",
                    "image": "companySetup"
                }
            ],
            "highlights": [
                "Timely action on deadlines and obligations",
                "Clear communication without unnecessary complexity",
                "Practical solutions based on real business needs",
                "Suitable for small and medium business, new companies,\nfreelancers and foreign clients"
            ]
        },
        "benefits": [
            {
                "title": "What you gain",
                "description": "The goal is not just filing documents. It is having a cleaner process and\nwasting less time.",
                "bullets": [
                    "Clearer view of current obligations",
                    "Timely action on deadlines and documentation",
                    "Less chaos in daily administrative work"
                ]
            },
            {
                "title": "How I can help",
                "description": "The approach is practical and focused on the actual day-to-day work of the\nbusiness.",
                "bullets": [
                    "Ongoing accounting support",
                    "Payroll and staff administration",
                    "Consultations for growth, optimization and structure"
                ]
            },
            {
                "title": "Who it is for",
                "description": "The service is aimed at people and companies that want order, predictability\nand normal communication.",
                "bullets": [
                    "Business owners who want clarity",
                    "People starting a new activity",
                    "Foreign clients operating in Bulgaria"
                ]
            }
        ],
        "servicesTitle": "Services & Activities",
        "serviceSections": [
            {
                "id": "accounting",
                "title": "Accounting Services",
                "blocks": [
                    {
                        "type": "list",
                        "items": [
                            "Operational accounting of the current documents in accordance with the requirements of the Bulgarian accounting legislation and national or international accounting standards",
                            "Preparation of accounting policy and individual chart of accounts",
                            "Preparation and submission of monthly statements under the value Added Tax Act (VAT)",
                            "Preparation and submission of monthly VIES declarations, as required by the VAT ACT",
                            "Calculation of monthly taxes due, and preparation of payment documents for their translation",
                            "Preparation of periodic reports reflecting the current financial result according to the client’s needs",
                            "Preparation of monthly and periodic reports on the client’s activity, reflecting stocks, movements in certain accounting accounts, settlements with commercial counterparties and financial institutions",
                            "Preparation of calculations and costs depending on the client’s activity",
                            "Timely information about changes in the tax-insurance or labour legislation",
                            "Additional accounting services, based on the specific requirements of the client.",
                            "Representation before insurance and tax authorities in relation to appointed inspections or revisions"
                        ]
                    }
                ]
            },
            {
                "id": "consulting",
                "title": "Consultations",
                "blocks": [
                    {
                        "type": "paragraph",
                        "text": "The constant changes in the existing and adoption of new regulations always lead to the risk of tax errors, which sometimes cost too expensive."
                    },
                    {
                        "type": "list",
                        "items": [
                            "The accounting policy of the Enterprise",
                            "Business tax planning and tax optimization",
                            "Organizing the company’s document turnover",
                            "Consultations on labour and social security issues",
                            "Consultations on the application of agreements to avoid double taxation"
                        ]
                    }
                ]
            },
            {
                "id": "payroll",
                "title": "Staff, wages and salaries",
                "blocks": [
                    {
                        "type": "paragraph",
                        "text": "To save you the effort of maintaining specific expertise and to ensure payroll confidentiality, I offer a complete service for managing employee remuneration."
                    },
                    {
                        "type": "list",
                        "items": [
                            "Drafting of employment contracts, civil contracts and contracts for management and control",
                            "Preparation and submission of necessary notices to the NRA",
                            "Maintenance of Labour records of employees",
                            "Preparation of payrolls for salaries and fiches",
                            "Preparation of payment documents for transfer of due monthly insurance and income tax of natural persons",
                            "Processing of hospital papers and filing in NSSI",
                            "Presentation of information about insured persons in personal register-declarations model 1 and 6",
                            "Preparation of a report on the costs of the company for salaries and contributions by department",
                            "Representation before insurance and tax authorities in relation to appointed inspections or revisions"
                        ]
                    }
                ]
            },
            {
                "id": "legal",
                "title": "Law consultations",
                "blocks": [
                    {
                        "type": "paragraph",
                        "text": "I offer legal support in the following areas:"
                    },
                    {
                        "type": "list",
                        "items": [
                            "Registration and transformation of commercial companies",
                            "Preparation of all types of contracts",
                            "Immovable property and real estate law",
                            "Commercial and contract law",
                            "Intellectual property Law",
                            "Corporate law mergers and acquisitions",
                            "Due diligence of companies or projects"
                        ]
                    }
                ]
            },
            {
                "id": "partners",
                "title": "Partnership Level Services",
                "blocks": [
                    {
                        "type": "paragraph",
                        "text": "I also provide access to partner services across different areas that may be useful depending on the client’s specific needs."
                    },
                    {
                        "type": "list",
                        "items": [
                            "Legal Services",
                            "Occupational Media and electrical measurements",
                            "Translation and legalization",
                            "Accounting software"
                        ]
                    }
                ]
            }
        ],
        "foreignClients": {
            "id": "foreign-clients",
            "title": "For foreign clients and partners",
            "blocks": [
                {
                    "type": "paragraph",
                    "text": "Why Bulgaria is such an attractive business destination\nBulgaria has long been an attractive destination for setting up a new business or moving companies from abroad for a number of reasons. The country offers ideal conditions for combining work and a more pleasant life than many other countries in Europe."
                },
                {
                    "type": "list",
                    "items": [
                        "Lowest taxes in the EU",
                        "Low corporation tax of 10%",
                        "5% dividend tax",
                        "20% VAT",
                        "Professionals and labour at very competitive pay",
                        "Many universities and good education",
                        "Advantageous infrastructure",
                        "4 airports with many destinations to and from Europe",
                        "Among the fastest internet connections in Europe",
                        "Varna is the best city to live in Bulgaria and one of the most desirable destinations for digital nomads in Europe"
                    ]
                },
                {
                    "type": "paragraph",
                    "text": "Registration of Bulgarian companies for foreigners\nYou have a company abroad and want to move your business to Bulgaria? Or do you have the measure to start a new business here?"
                },
                {
                    "type": "list",
                    "items": [
                        "Registration of companies",
                        "Address registration",
                        "Organizational assistance in relocation and establishment in Varna and Sofia",
                        "Network of partners in real estate, lawyers, banks, telecoms, software, marketing, holidays and entertainment",
                        "Tax consultation for optimization",
                        "Comprehensive service"
                    ]
                },
                {
                    "type": "paragraph",
                    "text": "Tax optimization of companies from Europe\nThe last few years there has been a large growth of international companies moving to Bulgaria for several reasons"
                },
                {
                    "type": "list",
                    "items": [
                        "Significant tax advantages",
                        "Member of the EU since 2007 and part of the EURO area 2024",
                        "Still low real estate prices",
                        "High quality and freer life",
                        "Unique nature with opportunities for tourism, sports and recreation throughout all four seasons"
                    ]
                }
            ]
        }
    }
}
