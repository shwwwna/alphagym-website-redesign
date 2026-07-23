import { useState } from 'react';
import ByqTag from './ByqTag';

const info: [string, string][] = [
  ['Phone', '+61 2 4285 5591'],
  ['Email', 'woonona@alphagymfitness.com.au'],
  ['Address', '1/417–421 Princes Hwy, Woonona NSW'],
  ['24/7 Access', 'Open 24/7 · 365 days a year'],
  ['Staffed Hours', 'Mon–Thu 8am–12pm & 3pm–7pm · Fri–Sat 8am–12pm'],
];

// Shared two-column form card — byq: modulabs-contact-1
// Used on Contact (plain) and Classes (with checkbox choices) so both pages share one component.
function ContactFormCard({
  heading,
  subheading,
  checkboxes,
  submitLabel = 'Send request',
  messagePlaceholder = 'Message',
}: {
  heading: string;
  subheading: string;
  checkboxes?: string[];
  submitLabel?: string;
  messagePlaceholder?: string;
}) {
  const [checked, setChecked] = useState<Record<string, boolean>>(
    () => Object.fromEntries((checkboxes ?? []).map((c, i) => [c, i === 0]))
  );

  return (
    <section className="relative py-20 px-8 bg-[color:var(--bg)]">
      <ByqTag>modulabs-contact-1</ByqTag>
      <div className="max-w-[1144px] mx-auto grid md:grid-cols-[1.5fr_1fr] border border-[color:var(--cream-16)] rounded-lg bg-[color:var(--lift)] overflow-hidden">
        <div className="p-8 border-r border-[color:var(--cream-16)] flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-[color:var(--cream)] text-xl font-medium">{heading}</div>
            <div className="text-[color:var(--cream-64)] text-sm">{subheading}</div>
          </div>
          {checkboxes && checkboxes.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {checkboxes.map((label) => (
                <label
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[color:var(--cream-16)] text-[color:var(--cream-88)] text-sm font-medium cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={!!checked[label]}
                    onChange={(e) => setChecked((c) => ({ ...c, [label]: e.target.checked }))}
                    className="w-4 h-4 accent-[color:var(--accent)]"
                  />
                  {label}
                </label>
              ))}
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-4">
            <input placeholder="Name" className="py-3 px-4 rounded-lg bg-[color:var(--cream-08)] border border-[color:var(--cream-08)] text-[color:var(--cream)] placeholder-[color:var(--cream-64)]" />
            <input placeholder="Email" className="py-3 px-4 rounded-lg bg-[color:var(--cream-08)] border border-[color:var(--cream-08)] text-[color:var(--cream)] placeholder-[color:var(--cream-64)]" />
          </div>
          <textarea placeholder={messagePlaceholder} rows={4} className="py-3 px-4 rounded-lg bg-[color:var(--cream-08)] border border-[color:var(--cream-08)] text-[color:var(--cream)] placeholder-[color:var(--cream-64)]" />
          <a href="#" className="self-start relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]">
            <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />
            {submitLabel}
          </a>
        </div>
        <div className="flex flex-col">
          {info.map(([label, val], i, arr) => (
            <div key={label} className={`p-12 flex flex-col gap-4 ${i !== arr.length - 1 ? 'border-b border-[color:var(--cream-16)]' : ''}`}>
              <span className="text-[color:var(--accent)] text-xl">•</span>
              <div>
                <div className="text-[color:var(--cream)] text-base font-medium">{val}</div>
                <div className="text-[color:var(--cream-64)] text-sm">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactFormCard;
