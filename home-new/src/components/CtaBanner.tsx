import Label from './Label';
import ByqTag from './ByqTag';

// byq: offthegrid-cta-1 + sound-stories-cta-1, adapted into a full-bleed centered CTA
function CtaBanner({
  label,
  title,
  description,
  actions,
}: {
  label?: string;
  title: React.ReactNode;
  description?: string;
  actions: { label: string; href: string; primary?: boolean }[];
}) {
  return (
    <section className="relative overflow-hidden py-28 md:py-36 px-8 bg-[color:var(--lift)] border-t border-[color:var(--cream-16)]">
      <ByqTag>offthegrid-cta-1 / sound-stories-cta-1</ByqTag>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[560px] h-[560px] rounded-full bg-[color:var(--accent)] blur-[220px] opacity-20" />
      </div>
      <div className="relative z-10 max-w-[1000px] mx-auto flex flex-col items-center text-center gap-8">
        {label && <Label>{label}</Label>}
        <h2 className="m-0 text-[color:var(--cream)] font-normal text-[40px] md:text-[56px] leading-[1.05] tracking-[-2px]">
          {title}
        </h2>
        {description && (
          <p className="text-[color:var(--cream-64)] text-base leading-6 max-w-[560px] m-0">
            {description}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {actions.map((a) => (
            <a
              key={a.label}
              href={a.href}
              className={
                a.primary
                  ? 'relative flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]'
                  : 'flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-[color:var(--cream)] border border-[color:var(--cream-16)] hover:bg-[color:var(--cream)] hover:text-[#0a0a0b] transition-colors'
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
