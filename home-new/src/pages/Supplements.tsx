import PageHero from '../components/PageHero';
import TagList from '../components/TagList';
import CtaBanner from '../components/CtaBanner';
import ByqTag from '../components/ByqTag';

function Supplements() {
  return (
    <>
      {/* byq: koda-hero-2 (PageHero) */}
      <PageHero
        label="Alpha Supps"
        title={<>Fuel <span className="text-[color:var(--cream-64)]">the work.</span></>}
        description="The widest variety of pre-workouts, proteins and health supplements from the industry's most popular brands — at extremely competitive prices."
        image="https://images.unsplash.com/photo-1579722820258-8d4b3e2e5b1e?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Stocked for every goal + hours — byq: modulabs-value-features-5 two-block layout */}
      <section className="relative py-20 px-8 bg-[color:var(--bg)]">
        <ByqTag>modulabs-value-features-5</ByqTag>
        <div className="max-w-[1800px] mx-auto grid md:grid-cols-[1.4fr_1fr] gap-8 items-start">
          <div className="flex flex-col gap-8">
            <h2 className="m-0 text-[color:var(--cream)] font-normal text-[48px] leading-[48px] tracking-[-2px]">
              Stocked for every goal
            </h2>
            {/* byq: jake-carter-list-2 (TagList, restyled as modulabs bordered chips) */}
            <TagList tags={['Pre-Workouts', 'Protein Powders', 'Health Supplements', 'Drinks & Meals']} />
            <p className="text-[color:var(--cream-64)] text-base leading-6 max-w-[520px] m-0">
              Grab what you need on the way in or out — the store is right inside the gym. Our staff can point you to the right product for your training and nutrition plan.
            </p>
            <a
              href="https://www.instagram.com/alphasupps_woonona/?hl=en"
              className="self-start relative flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]"
            >
              <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />
              @alphasupps_woonona
            </a>
          </div>
          <div className="flex flex-col gap-4 rounded-lg border border-[color:var(--cream-16)] bg-[color:var(--lift)] p-8">
            <div className="text-[color:var(--cream)] text-xl font-medium">Open Hours</div>
            <div className="flex flex-col gap-3 text-sm">
              {[
                ['Mon – Thu', '8am–12pm & 3pm–7pm'],
                ['Friday', '8am–12pm'],
                ['Saturday', '8am–12pm'],
              ].map(([day, hours]) => (
                <div key={day} className="flex justify-between gap-4">
                  <span className="text-[color:var(--cream-64)]">{day}</span>
                  <span className="text-[color:var(--cream-88)]">{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product shots — byq: modulabs-stats-3 (image grid variant of the stat-block layout) */}
      <section className="relative pb-20 px-8 bg-[color:var(--bg)]">
        <ByqTag>modulabs-stats-3</ByqTag>
        <div className="max-w-[1800px] mx-auto grid md:grid-cols-3 gap-4 min-h-[320px]">
          {[
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop',
          ].map((img) => (
            <div
              key={img}
              className="rounded-lg bg-cover bg-center min-h-[280px] border border-[color:var(--cream-16)]"
              style={{ backgroundImage: `url('${img}')` }}
            />
          ))}
        </div>
      </section>

      {/* byq: modulabs-hero-2 (CtaBanner, trimmed to heading + button) */}
      <CtaBanner
        title="Come see what's in stock."
        actions={[{ label: 'Visit the Store', href: '/#contact', primary: true }]}
      />
    </>
  );
}

export default Supplements;
