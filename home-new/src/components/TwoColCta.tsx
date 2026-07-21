import Label from './Label';
import ByqTag from './ByqTag';

type Action = { label: string; href: string; primary?: boolean };

export type CtaCard = {
  label: string;
  title: React.ReactNode;
  description: string;
  action: Action;
};

// Two Column CTA Cards Section — byq: halden-miller-cta-3
// Two dark spotlight CTA cards side by side under a shared headline.
function TwoColCta({
  id,
  heading,
  cards,
  note,
}: {
  id?: string;
  heading?: React.ReactNode;
  cards: [CtaCard, CtaCard];
  note?: string;
}) {
  return (
    <section id={id} className="relative py-20 px-8 bg-[color:var(--bg)] border-t border-[color:var(--cream-16)]">
      <ByqTag>halden-miller-cta-3</ByqTag>
      <div className="max-w-[1800px] mx-auto flex flex-col gap-12">
        {heading && (
          <h2 className="m-0 max-w-[760px] text-[color:var(--cream)] font-normal text-[40px] md:text-[48px] leading-[1.05] tracking-[-1.5px]">
            {heading}
          </h2>
        )}
        <div className="grid md:grid-cols-2 gap-4">
          {cards.map((card) => (
            <div
              key={card.action.label}
              className="relative overflow-hidden flex flex-col justify-between gap-8 rounded-lg border border-[color:var(--cream-16)] bg-[color:var(--depth)] p-8 md:p-12"
            >
              <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[color:var(--accent)] blur-[160px] opacity-20 pointer-events-none" />
              <div className="relative z-10 flex flex-col gap-4">
                <Label>{card.label}</Label>
                <h3 className="m-0 text-[color:var(--cream)] font-normal text-[32px] md:text-[36px] leading-[1.1] tracking-[-1px]">
                  {card.title}
                </h3>
                <p className="m-0 text-[color:var(--cream-64)] text-base leading-6">{card.description}</p>
              </div>
              <a
                href={card.action.href}
                className={
                  card.action.primary
                    ? 'relative z-10 self-start flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]'
                    : 'relative z-10 self-start flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-[color:var(--cream)] border border-[color:var(--cream-16)] hover:bg-[color:var(--cream)] hover:text-[#0a0a0b] transition-colors'
                }
              >
                {card.action.primary && <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />}
                {card.action.label}
              </a>
            </div>
          ))}
        </div>
        {note && <p className="m-0 text-[color:var(--cream-64)] text-xs">{note}</p>}
      </div>
    </section>
  );
}

export default TwoColCta;
