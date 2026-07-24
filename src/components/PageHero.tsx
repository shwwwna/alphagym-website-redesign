import Label from './Label';
import ByqTag from './ByqTag';
import EditableImage from './EditableImage';
import type { ImageKey } from '../lib/editableImages';

// byq: koda-hero-2, adapted with label + background image treatment from modulabs-hero-4
function PageHero({
  label,
  title,
  description,
  imageKey,
}: {
  label: string;
  title: React.ReactNode;
  description: string;
  imageKey: ImageKey;
}) {
  return (
    <header className="relative flex min-h-[56vh] min-h-[420px] flex-col items-start justify-end pt-[160px] pb-16 px-8 overflow-hidden">
      <EditableImage imageKey={imageKey} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'linear-gradient(0deg, #0a0a0b, rgba(10,10,11,0))' }} />
      <ByqTag>koda-hero-2</ByqTag>
      <div className="relative z-10 max-w-[1800px] mx-auto w-full">
        <div className="max-w-[680px] flex flex-col gap-6">
          <Label>{label}</Label>
          <h1 className="m-0 text-[color:var(--cream)] font-normal text-[64px] leading-[60px] tracking-[-2.5px]">
            {title}
          </h1>
          <p className="text-[color:var(--cream-64)] text-base leading-6 max-w-[520px]">
            {description}
          </p>
        </div>
      </div>
    </header>
  );
}

export default PageHero;
