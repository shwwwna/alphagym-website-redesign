import Label from './Label';
import ByqTag from './ByqTag';

type Action = { label: string; href: string; primary?: boolean };

// Value Features Grid — byq: modulabs-value-features-10
// Image column + content (label/heading/body/CTAs) with a feature list below.
// Used on Home for the Facility and Recovery sections.
function ValueFeaturesGrid({
  id,
  eyebrow,
  heading,
  text,
  note,
  items,
  actions,
  imageSide = 'left',
}: {
  id?: string;
  eyebrow: string;
  heading: React.ReactNode;
  text: string;
  note?: string;
  items: string[];
  actions: Action[];
  imageSide?: 'left' | 'right';
}) {
  const imageOrder = imageSide === 'left' ? 'md:order-1' : 'md:order-2';
  const contentOrder = imageSide === 'left' ? 'md:order-2' : 'md:order-1';

  return (
    <section id={id} className="relative py-20 px-8 bg-[color:var(--bg)] border-t border-[color:var(--cream-16)]">
      <ByqTag>modulabs-value-features-10</ByqTag>
      <div className="max-w-[1800px] mx-auto">
        <div className="grid md:grid-cols-[1fr_1.5fr] rounded-lg overflow-hidden border border-[color:var(--cream-16)] bg-[color:var(--lift)]">
          {/* Image slot (empty depth block) */}
          <div className={`relative min-h-[280px] md:min-h-[560px] bg-[color:var(--depth)] ${imageOrder}`} />

          {/* Content */}
          <div className={`flex flex-col justify-between ${contentOrder}`}>
            <div className="flex flex-col items-start gap-6 p-8 md:p-12">
              <Label>{eyebrow}</Label>
              <h2 className="m-0 text-[color:var(--cream)] font-normal text-[40px] leading-[40px] tracking-[-1px]">
                {heading}
              </h2>
              <p className="m-0 text-[color:var(--cream-64)] text-base leading-6">{text}</p>
              {note && <p className="m-0 text-[color:var(--accent)] text-sm">{note}</p>}
              {actions.length > 0 && (
                <div className="flex flex-wrap items-center gap-3">
                  {actions.map((a) => (
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
              )}
            </div>

            {/* Feature list */}
            <div className="grid grid-cols-2 md:grid-cols-3 border-t border-[color:var(--cream-16)] divide-x divide-y divide-[color:var(--cream-16)]">
              {items.map((item) => (
                <div key={item} className="flex items-center gap-3 p-6">
                  <span className="flex-none w-2 h-2 rounded-sm bg-[color:var(--accent)]" />
                  <span className="text-[color:var(--cream-88)] text-sm leading-5">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueFeaturesGrid;
