import type { BenefitCardContent } from "../../content/home"

const icons = [
    <svg key="growth" viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M6 53V36l13-13 11 9 24-24M43 8h11v11M9 55h47M13 47v8m11-18v18m11-12v12m11-25v25" /></svg>,
    <svg key="help" viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 49 9 57V42a24 24 0 1 1 12 13" /><path d="M25 24a8 8 0 1 1 13 7c-4 3-6 5-6 9m0 7h.1" strokeWidth="3" strokeLinecap="round" /></svg>,
    <svg key="people" viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="32" cy="16" r="9" /><path d="M16 51v-6a16 16 0 0 1 32 0v6H16Zm-5-23a7 7 0 1 0 0-14m42 14a7 7 0 1 1 0-14M4 50v-9a12 12 0 0 1 12-12m44 21v-9a12 12 0 0 0-12-12" /></svg>,
]

export default function Benefits({ cards }: { cards: BenefitCardContent[] }) {
    return (
        <section className="bg-white px-5 py-10 dark:bg-[#111] sm:px-8 lg:px-9 lg:py-12">
            <div className="mx-auto grid w-full max-w-[1320px] gap-5 lg:grid-cols-3 lg:gap-6">
                {cards.map((card, index) => (
                    <article key={card.title} className="relative pt-10">
                        <div className="absolute left-5 top-1 flex h-14 w-14 items-center justify-center rounded-xl bg-[#ececeb] p-2.5 text-black dark:bg-[#333] dark:text-white">{icons[index]}</div>
                        <div className="h-full min-h-[245px] rounded-2xl border border-[#ececec] bg-white px-6 pb-7 pt-8 shadow-[0_8px_28px_rgba(0,0,0,0.045)] dark:border-[#383838] dark:bg-[#202020] sm:px-7">
                            <h2 className="text-lg font-bold text-[#151515] dark:text-white">{card.title}</h2>
                            <p className="mt-2 whitespace-pre-line text-sm leading-6 text-neutral-600 dark:text-neutral-300">{card.description}</p>
                            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#303030] dark:text-neutral-200">
                                {card.bullets.map((bullet) => <li key={bullet} className="flex gap-2"><span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-black dark:bg-white" /><span>{bullet}</span></li>)}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
