import Label from '../components/Label';
import PageHero from '../components/PageHero';
import TagList from '../components/TagList';
import CtaBanner from '../components/CtaBanner';
import ByqTag from '../components/ByqTag';

function Recovery() {
  return (
    <>
      {/* byq: koda-hero-2 (PageHero) */}
      <PageHero
        label="Alpha Recovery"
        title={<>An oasis <span className="text-[color:var(--cream-64)]">off the floor.</span></>}
        description="The Illawarra's premium recovery facility — an escape from day-to-day stress, built for health, wellness and self-improvement. Bookings essential."
        image="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Recovery services — byq: modulabs-value-features-5 (card grid pattern) */}
      <section className="relative py-20 px-8 bg-[color:var(--bg)]">
        <ByqTag>modulabs-value-features-5</ByqTag>
        <div className="max-w-[1800px] mx-auto grid md:grid-cols-3 gap-4">
          {[
            [
              'PlusLife Ice Bath',
              'Scientifically proven to reduce DOMS so you recover faster and stay sore for less time. Cold immersion also lifts serotonin, sharpens stress tolerance and helps regulate inflammation — feel good inside and out.',
              'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?q=80&w=1200&auto=format&fit=crop',
            ],
            [
              'Infrared Sauna',
              'Escape the winter cold, enhance your recovery, boost your immune system and improve your skin — an oasis of relaxation and self-improvement.',
              'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
            ],
            [
              'Fitactiv Skin & Beauty Bar',
              "Skin care by Brightwood using Australia's most favoured bush botanicals — a holistic approach marked by self-care and movement in nature.",
              'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
            ],
          ].map(([title, desc, img]) => (
            <div key={title} className="flex flex-col rounded-lg overflow-hidden border border-[color:var(--cream-16)] bg-[color:var(--lift)]">
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url('${img}')` }} />
              <div className="flex flex-col gap-3 p-8">
                <div className="text-[color:var(--cream)] text-xl font-medium">{title}</div>
                <p className="text-[color:var(--cream-64)] text-sm leading-6 m-0">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Also on the menu — byq: jake-carter-list-2 tag cloud */}
      <section className="py-20 px-8 bg-[color:var(--lift)] border-t border-[color:var(--cream-16)]">
        <div className="max-w-[1800px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6 max-w-[680px]">
            <Label>More Recovery</Label>
            <h2 className="m-0 text-[color:var(--cream)] font-normal text-[48px] leading-[48px] tracking-[-2px]">
              Also on the menu
            </h2>
          </div>
          <TagList
            tags={['Normatec Recovery', 'Massage', 'IV Drip', 'Teeth Whitening', 'Spray Tan', 'Showers & Towel Service']}
          />
        </div>
      </section>

      {/* byq: offthegrid-cta-1 / sound-stories-cta-1 (CtaBanner) */}
      <CtaBanner
        label="Ready to recover?"
        title="Rest, reset, repeat."
        description="Book your ice bath, sauna or Normatec session — bookings essential."
        actions={[
          { label: 'Follow @alpharecovery_woonona on Instagram', href: 'https://www.instagram.com/alpharecovery_woonona/?hl=en' },
          { label: 'Sign up for Recovery Membership', href: 'https://myaccount.clubfit.net.au/onlineoffers/membership/177?code=ALPHAGYM&accountId=1%20&sidebar=true&single=true', primary: true },
        ]}
      />
    </>
  );
}

export default Recovery;
