import Label from '../components/Label';
import PageHero from '../components/PageHero';
import CtaBanner from '../components/CtaBanner';
import ByqTag from '../components/ByqTag';

function Classes() {
  return (
    <>
      {/* byq: koda-hero-2 (PageHero) */}
      <PageHero
        label="Group Classes & Coaching"
        title={<>Every level. <span className="text-[color:var(--cream-64)]">Every goal.</span></>}
        description="Classes for all ages and abilities, or individual training at your own pace — we can help."
        image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Timetable — byq: modulabs-value-features-5 (header row pattern) */}
      <section className="relative py-20 px-8 bg-[color:var(--bg)]">
        <ByqTag>modulabs-value-features-5</ByqTag>
        <div className="max-w-[1800px] mx-auto flex flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="m-0 text-[color:var(--cream)] font-normal text-[48px] leading-[48px] tracking-[-2px]">
              This Week's Timetable
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://myaccount.clubfit.net.au/onlineoffers/membership/127?code=ALPHAGYM&accountId=1&sidebar=true&single=true"
                className="relative flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]"
              >
                <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />
                Join a Class
              </a>
              <a
                href="https://classpass.com/studios/alpha-gym-woonona"
                className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-[color:var(--cream)] border border-[color:var(--cream-16)]"
              >
                Book via ClassPass
              </a>
            </div>
          </div>
          <img
            src="https://www.alphagymfitness.com.au/wp-content/uploads/2025/02/Alpha-Gym-Group-Class-Timetable.png"
            alt="Alpha Gym group class timetable"
            className="w-full block rounded-lg border border-[color:var(--cream-16)]"
          />
        </div>
      </section>

      {/* Personal Training / Nutrition — byq: modulabs-value-features-5 (card grid pattern reused from home Classes & Coaching section) */}
      <section className="relative py-20 px-8 bg-[color:var(--lift)] border-t border-[color:var(--cream-16)]">
        <ByqTag>modulabs-value-features-5</ByqTag>
        <div className="max-w-[1800px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-6 max-w-[680px]">
            <Label>Go Further</Label>
            <h2 className="m-0 text-[color:var(--cream)] font-normal text-[48px] leading-[48px] tracking-[-2px]">
              One-on-One Support
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              [
                'Personal Training',
                "Ready to turn your training up a gear? Your trainer builds a personalised program around your goals, teaches correct technique and pushes you to your best every session.",
                'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop',
              ],
              [
                'Nutritional Guidance',
                "Nutrition accounts for around 80% of your results. Book a consultation and our trainers will build a strategic, personalised nutrition plan just for you.",
                'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',
              ],
            ].map(([title, desc, img]) => (
              <div key={title} className="flex flex-col rounded-lg overflow-hidden border border-[color:var(--cream-16)] bg-[color:var(--bg)]">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url('${img}')` }}
                />
                <div className="flex flex-col gap-4 p-8">
                  <div className="text-[color:var(--cream)] text-xl font-medium">{title}</div>
                  <p className="text-[color:var(--cream-64)] text-base leading-6 m-0">{desc}</p>
                  <a href="/#contact" className="text-[color:var(--accent)] text-sm font-medium">Book a Session →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* byq: modulabs-hero-2 (CtaBanner, trimmed to heading + button) */}
      <CtaBanner
        title="First class is on us."
        actions={[{ label: 'Book an Intro', href: '/#contact', primary: true }]}
      />
    </>
  );
}

export default Classes;
