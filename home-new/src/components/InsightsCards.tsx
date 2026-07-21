import Label from './Label';
import ByqTag from './ByqTag';

type Action = { label: string; href: string; primary?: boolean };

export type InsightCard = {
  eyebrow?: string;
  title: string;
  body: string;
  meta?: string[];
  actions: Action[];
  imageSide?: 'left' | 'right';
};

// Insights Grid Blog Layout — byq: modulabs-cms-grid-3
// A stack of full-width cards, each a 2-column image + content block with
// alternating image side. Used on Home for Alpha Supplements & Alpha Barbershop.
function InsightsCards({ id, cards }: { id?: string; cards: InsightCard[] }) {
  return (
    <section id={id} className="relative py-20 px-8 bg-[color:var(--bg)] border-t border-[color:var(--cream-16)]">
      <ByqTag>modulabs-cms-grid-3</ByqTag>
      <div className="max-w-[1800px] mx-auto flex flex-col gap-12">
        {cards.map((card) => {
          const imageOrder = card.imageSide === 'right' ? 'md:order-2' : 'md:order-1';
          const contentOrder = card.imageSide === 'right' ? 'md:order-1' : 'md:order-2';
          return (
            <div
              key={card.title}
              className="grid md:grid-cols-2 rounded-lg overflow-hidden border border-[color:var(--cream-16)] bg-[color:var(--lift)]"
            >
              {/* Image slot (empty depth block) */}
              <div className={`relative min-h-[240px] md:min-h-[420px] bg-[color:var(--depth)] ${imageOrder}`} />

              {/* Content */}
              <div className={`flex flex-col justify-between gap-12 p-8 md:p-12 ${contentOrder}`}>
                <div className="flex flex-col items-start gap-4">
                  {card.eyebrow && <Label>{card.eyebrow}</Label>}
                  <h3 className="m-0 text-[color:var(--cream)] font-normal text-[40px] leading-[40px] tracking-[-1px]">
                    {card.title}
                  </h3>
                  <p className="m-0 text-[color:var(--cream-64)] text-base leading-6">{card.body}</p>
                </div>
                <div className="flex flex-col gap-6">
                  {card.meta && card.meta.length > 0 && (
                    <div className="flex flex-col gap-1">
                      {card.meta.map((m) => (
                        <span key={m} className="text-[color:var(--cream-88)] text-sm">{m}</span>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap items-center gap-3">
                    {card.actions.map((a) => (
                      <a
                        key={a.label}
                        href={a.href}
                        className={
                          a.primary
                            ? 'relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]'
                            : 'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[color:var(--cream)] border border-[color:var(--cream-16)] hover:bg-[color:var(--cream)] hover:text-[#0a0a0b] transition-colors'
                        }
                      >
                        {a.primary && <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />}
                        {a.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default InsightsCards;
