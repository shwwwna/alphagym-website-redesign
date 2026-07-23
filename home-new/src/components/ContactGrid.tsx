import Label from './Label';
import ByqTag from './ByqTag';

type Card = { label: string; value: React.ReactNode };

const cards: Card[] = [
  { label: 'Phone', value: <a href="tel:+61242855591" className="hover:text-[color:var(--cream)]">+61 2 4285 5591</a> },
  {
    label: 'Instagram',
    value: (
      <a href="https://www.instagram.com/alphagym.au/" className="hover:text-[color:var(--cream)]">
        @alphagym.au
      </a>
    ),
  },
  {
    label: 'Email',
    value: (
      <a href="mailto:woonona@alphagymfitness.com.au" className="hover:text-[color:var(--cream)] break-all">
        woonona@alphagymfitness.com.au
      </a>
    ),
  },
  { label: 'Address', value: <>1/417–421 Princes Hwy,<br />Woonona NSW 2517</> },
  { label: '24/7 Access', value: <>Open 24/7 · 365 days a year</> },
  {
    label: 'Staffed Hours',
    value: (
      <>
        Mon–Thu 8am–12pm & 3pm–7pm
        <br />
        Fri–Sat 8am–12pm
      </>
    ),
  },
];

function InfoCard({ card }: { card: Card }) {
  return (
    <div className="flex flex-col justify-between items-start gap-12 rounded-lg border border-[color:var(--cream-16)] bg-[color:var(--lift)] p-6 min-h-[200px]">
      <div className="flex items-center justify-center w-14 h-14 rounded-lg border border-[color:var(--cream-16)] bg-[color:var(--depth)]">
        <span className="w-3 h-3 rounded-sm bg-[color:var(--accent)]" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-[color:var(--cream)] text-base font-medium">{card.label}</div>
        <div className="text-[color:var(--cream-64)] text-base">{card.value}</div>
      </div>
    </div>
  );
}

// Contact Grid with Info Cards — byq: forerunner-contact-2 (adapted to dark theme)
// Centered header + 4-column grid of contact cards with a tall image slot.
function ContactGrid({ id }: { id?: string }) {
  const [phone, instagram, email, address, access, staffedHours] = cards;

  return (
    <section id={id} className="relative py-24 px-8 bg-[color:var(--bg)] border-t border-[color:var(--cream-16)]">
      <ByqTag>forerunner-contact-2</ByqTag>
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-[540px] mx-auto mb-16">
          <Label>Contact</Label>
          <h2 className="m-0 text-[color:var(--cream)] font-normal text-[48px] md:text-[56px] leading-[1.05] tracking-[-2px]">
            Get in touch
          </h2>
          <p className="m-0 text-[color:var(--cream-64)] text-base leading-6">
            Questions about membership, recovery bookings or Elevate access? Reach out — or just turn up and train.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          <InfoCard card={phone} />
          {/* Tall image slot (empty depth block) */}
          <div className="hidden lg:block lg:row-span-2 rounded-lg bg-[color:var(--depth)] min-h-[200px]" />
          <InfoCard card={instagram} />
          <InfoCard card={email} />
          <InfoCard card={address} />
          <InfoCard card={access} />
          <InfoCard card={staffedHours} />
        </div>
      </div>
    </section>
  );
}

export default ContactGrid;
