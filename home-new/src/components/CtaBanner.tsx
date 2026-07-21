import ByqTag from './ByqTag';

// byq: modulabs-hero-2, trimmed to a CTA banner
function CtaBanner({
  title,
  actions,
}: {
  title: string;
  actions: { label: string; href: string; primary?: boolean }[];
}) {
  return (
    <section className="relative py-20 px-8 bg-[color:var(--bg)] border-t border-[color:var(--cream-16)]">
      <ByqTag>modulabs-hero-2</ByqTag>
      <div className="max-w-[1800px] mx-auto flex flex-wrap items-center justify-between gap-8">
        <h2 className="m-0 text-[color:var(--cream)] font-normal text-[48px] leading-[48px] tracking-[-2px]">
          {title}
        </h2>
        <div className="flex flex-wrap gap-4">
          {actions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              className={
                a.primary
                  ? 'relative flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]'
                  : 'flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-[color:var(--cream)] border border-[color:var(--cream-16)]'
              }
            >
              {a.primary && <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />}
              {a.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
