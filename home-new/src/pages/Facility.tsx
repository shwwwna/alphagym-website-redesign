import Label from '../components/Label';
import PageHero from '../components/PageHero';
import CtaBanner from '../components/CtaBanner';
import ByqTag from '../components/ByqTag';

const columns: [string, string[]][] = [
  [
    'Train',
    [
      'Pin-loaded & plate-loaded machines',
      'Cardiovascular equipment',
      'Functional training area',
      '6 squat racks',
      'Unique specialty equipment',
      'Outdoor training area',
    ],
  ],
  [
    'Improve',
    [
      'Personal training',
      'Exercise programs',
      'Nutritional guidance',
      'Group classes',
      'Evolt body scan machine',
    ],
  ],
  [
    'Comfort',
    [
      'Showers, lockers & towel service',
      'Fully equipped kitchenette',
      'Social area for study & downtime',
      'Fully air conditioned, free wifi',
      'Underground parking & lift access',
      'Child change room, disabled access',
    ],
  ],
];

function Facility() {
  return (
    <>
      {/* byq: koda-hero-2 (PageHero) */}
      <PageHero
        label="The Facility"
        title={<>650m² of <span className="text-[color:var(--cream-64)]">serious kit.</span></>}
        description="Open 24/7, 365 days a year. Everything you need to train, and plenty you won't find anywhere else in the Illawarra."
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Stats — byq: modulabs-stats-3 */}
      <section className="py-20 px-8 bg-[color:var(--bg)]">
        <div className="max-w-[1800px] mx-auto flex flex-col gap-16">
          <div className="relative grid grid-cols-2 md:grid-cols-4 rounded-lg overflow-hidden border border-[color:var(--cream-16)] bg-[color:var(--lift)] divide-x divide-y md:divide-y-0 divide-[color:var(--cream-16)]">
            <ByqTag>modulabs-stats-3</ByqTag>
            {[
              ['24/7', '365 Access'],
              ['650m²', 'Gym Floor'],
              ['6', 'Squat Racks'],
              ['1', 'Evolt Body Scanner'],
            ].map(([n, l]) => (
              <div key={l} className="flex flex-col items-center justify-center text-center gap-4 py-16 px-8">
                <div className="text-[color:var(--accent)] text-[64px] leading-[60px] tracking-[-2.5px]">{n}</div>
                <div className="text-[color:var(--cream-64)] text-sm">{l}</div>
              </div>
            ))}
          </div>

          {/* Amenities — byq: modulabs-value-features-5 */}
          <div className="relative grid md:grid-cols-3 gap-4">
            <ByqTag>modulabs-value-features-5</ByqTag>
            {columns.map(([title, items]) => (
              <div key={title} className="flex flex-col gap-6 rounded-lg border border-[color:var(--cream-16)] bg-[color:var(--lift)] p-8">
                <div className="text-[color:var(--accent)] text-xl font-medium">{title}</div>
                <ul className="flex flex-col gap-3 m-0 p-0 list-none">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[color:var(--cream-64)] text-sm leading-6">
                      <span className="text-[color:var(--accent)]">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* byq: modulabs-stats-3 (image grid variant of the stat-block layout) */}
          <div className="relative grid md:grid-cols-2 gap-4 min-h-[420px]">
            <ByqTag>modulabs-stats-3</ByqTag>
            <div
              className="rounded-lg bg-cover bg-center min-h-[280px]"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop')" }}
            />
            <div
              className="rounded-lg bg-cover bg-center min-h-[280px]"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop')" }}
            />
          </div>
        </div>
      </section>

      {/* Gallery — byq: modulabs-stats-3 (wide image grid variant) */}
      <section className="relative py-20 px-8 bg-[color:var(--lift)] border-t border-[color:var(--cream-16)]">
        <div className="max-w-[1800px] mx-auto flex flex-col gap-8">
          <ByqTag>modulabs-stats-3</ByqTag>
          <div className="flex flex-col gap-6 max-w-[680px]">
            <Label>Gallery</Label>
            <h2 className="m-0 text-[color:var(--cream)] font-normal text-[48px] leading-[48px] tracking-[-2px]">
              Around the floor
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1800&auto=format&fit=crop',
            ].map((img) => (
              <div
                key={img}
                className="w-full aspect-[21/9] rounded-lg bg-cover bg-center border border-[color:var(--cream-16)]"
                style={{ backgroundImage: `url('${img}')` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* byq: offthegrid-cta-1 / sound-stories-cta-1 (CtaBanner) */}
      <CtaBanner
        title="See it for yourself."
        actions={[
          { label: 'Book an Intro', href: '/#contact' },
          { label: 'Get Started', href: 'https://myaccount.clubfit.net.au/onlineoffers/membership/176?code=ALPHAGYM&accountId=1&sidebar=true&single=true', primary: true },
        ]}
      />
    </>
  );
}

export default Facility;
