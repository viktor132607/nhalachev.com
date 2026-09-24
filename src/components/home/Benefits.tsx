import type { BenefitCardContent } from "../../content/home"

export default function Benefits({ cards }: { cards: BenefitCardContent[] }) {
    const wrapClass = "mt-4 grid gap-4 lg:grid-cols-3 sm:mt-5 lg:mt-6"
    const cardClass =
        "rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] dark:border-zinc-700 dark:bg-zinc-800 sm:rounded-[28px] sm:p-5 lg:p-6"
    const titleClass = "text-2xl font-bold text-slate-950 dark:text-white sm:text-[28px]"
    const textClass =
        "mt-2 text-base leading-8 text-slate-600 dark:text-zinc-300 sm:text-[16px] sm:leading-9"
    const listClass =
        "mt-3 space-y-2 text-base leading-8 text-slate-700 dark:text-zinc-200 sm:text-[16px] sm:leading-9"
    const itemClass = "flex items-start gap-3"
    const dotClass = "mt-[12px] h-2.5 w-2.5 shrink-0 rounded-full bg-slate-950 dark:bg-white"

    return (
        <section className={wrapClass}>
            {cards.map((card) => (
                <div key={card.title} className={cardClass}>
                    <h2 className={titleClass}>{card.title}</h2>
                    <p className={textClass}>{card.description}</p>
                    <div className={listClass}>
                        {card.bullets.map((bullet) => (
                            <div key={bullet} className={itemClass}>
                                <span className={dotClass} />
                                <span>{bullet}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}
