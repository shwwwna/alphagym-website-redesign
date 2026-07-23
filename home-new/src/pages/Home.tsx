import { Link } from 'react-router-dom';
import Label from '../components/Label';
import ByqTag from '../components/ByqTag';
import ValueFeaturesGrid from '../components/ValueFeaturesGrid';
import InsightsCards from '../components/InsightsCards';
import VideoShowcase from '../components/VideoShowcase';
import InstagramReels from '../components/InstagramReels';
import TwoColCta from '../components/TwoColCta';
import ContactGrid from '../components/ContactGrid';
import EditableImage from '../components/EditableImage';
import type { ImageKey } from '../lib/editableImages';

const MEMBERSHIP_URL = 'https://myaccount.clubfit.net.au/onlineoffers?code=ALPHAGYM&accountId=1&showall=true';
const INSTAGRAM_URL = 'https://www.instagram.com/alphagym.au/';

const COACHING: { title: string; hook: string; body: string; cta: string; imageKey: ImageKey }[] = [
  {
    title: 'Personal Training',
    hook: 'Ready to turn it up a gear?',
    body: 'One-on-one. Your trainer. Your program. Built around your goals from day one — correct technique, real accountability, every session pushed to your best.',
    cta: 'Book a session',
    imageKey: 'home.coaching.personalTraining',
  },
  {
    title: 'Group Classes',
    hook: "Everyone's training for something different.",
    body: "That's why we run a full range of classes to suit every level and skill. Check the timetable to see what's on.",
    cta: 'Join a class',
    imageKey: 'home.coaching.groupClasses',
  },
  {
    title: 'Nutritional Guidance',
    hook: 'Training is only half the job.',
    body: "Nutrition accounts for around 80% of your results — it's not an exaggeration, it's the numbers. If you're serious about your goals, book a consultation and your trainer will build a strategic, personalised nutrition plan around you.",
    cta: 'Book In',
    imageKey: 'home.coaching.nutrition',
  },
];

function Home() {
  return (
    <>
      {/* Hero — byq: modulabs-hero-4 */}
      <header
        id="top"
        className="relative flex min-h-screen flex-col items-start justify-end pt-[200px] pb-16 px-8 overflow-hidden"
      >
        <EditableImage imageKey="home.hero" className="absolute inset-0 z-0" />
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'linear-gradient(0deg, #0a0a0b, rgba(10,10,11,0))' }} />
        <ByqTag>modulabs-hero-4</ByqTag>
        <div className="relative z-10 max-w-[1800px] mx-auto w-full">
          <div className="max-w-[680px] flex flex-col gap-6">
            <Label>Open 24/7 · 365 — Woonona NSW</Label>
            <h1 className="m-0 text-[color:var(--cream)] font-normal text-[64px] leading-[60px] tracking-[-2.5px]">
              Train. Recover. <span className="text-[color:var(--cream-64)]">Repeat.</span>
            </h1>
            <p className="text-[color:var(--cream-64)] text-base leading-6 max-w-[520px]">
              The Illawarra's only train-recover-and-reset facility — gym, ice bath &amp; sauna, supplements and a barbershop under one roof in Woonona. 650m² of floor, open 24/7.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={MEMBERSHIP_URL}
                  className="self-start relative flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]"
                >
                  <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />
                  Start today — train tonight
                </a>
                <a
                  href="https://classpass.com/studios/alpha-gym-woonona"
                  className="self-start relative flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-[color:var(--cream)] border border-[color:var(--cream-16)]"
                >
                  ClassPass
                </a>
              </div>
              <p className="text-[color:var(--cream-64)] text-xs">No lock-in · cancel anytime</p>
            </div>
            <p className="text-[color:var(--cream-64)] text-sm">
              Join today, train tonight — staffed hours plus 24/7 swipe access, the gym floor is open around the clock.
            </p>
          </div>
        </div>
      </header>

      {/* Facility — byq: modulabs-value-features-10 */}
      <ValueFeaturesGrid
        id="facility"
        eyebrow="The Facility"
        heading="Built for serious training"
        text="Every piece of kit you need and plenty you won't find anywhere else in the Illawarra — plus personal training, exercise programs and nutritional guidance from highly trained staff."
        items={[
          'Cardio & functional zones',
          'Showers, lockers & towel service',
          'Underground parking & lift',
          'Evolt body scan machine',
          'Kitchenette & social area',
          'Child change room, disabled access',
        ]}
        actions={[{ label: 'Read more', href: '/facility', primary: true }]}
        imageSide="left"
        imageKey="home.facility"
      />

      {/* Classes & Coaching — byq: modulabs-cms-grid-3 (insights blog grid, 3-col) */}
      <section id="classes" className="relative py-20 px-8 bg-[color:var(--bg)] border-t border-[color:var(--cream-16)]">
        <ByqTag>modulabs-cms-grid-3</ByqTag>
        <div className="max-w-[1800px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-6 max-w-[680px]">
            <Label>Train Your Way</Label>
            <h2 className="m-0 text-[color:var(--cream)] font-normal text-[48px] leading-[48px] tracking-[-2px]">
              Classes &amp; Coaching
            </h2>
            <p className="m-0 text-[color:var(--cream-64)] text-base leading-6">
              Classes for all ages and abilities, or one-on-one sessions at your own pace — whatever gets you to your goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {COACHING.map((c) => (
              <div
                key={c.title}
                className="flex flex-col rounded-lg overflow-hidden border border-[color:var(--cream-16)] bg-[color:var(--lift)]"
              >
                <EditableImage imageKey={c.imageKey} className="h-52 bg-[color:var(--depth)]" />
                <div className="flex flex-col gap-3 p-8 grow">
                  <div className="text-[color:var(--cream)] text-xl font-medium">{c.title}</div>
                  <div className="text-[color:var(--cream-88)] text-base font-medium">{c.hook}</div>
                  <p className="m-0 text-[color:var(--cream-64)] text-base leading-6">{c.body}</p>
                  <Link
                    to="/classes"
                    className="mt-auto self-start flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[color:var(--cream)] border border-[color:var(--cream-16)] hover:bg-[color:var(--cream)] hover:text-[#0a0a0b] transition-colors"
                  >
                    {c.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery — byq: modulabs-value-features-10 */}
      <ValueFeaturesGrid
        eyebrow="Recover Harder"
        heading="Alpha Recovery"
        text="The Illawarra's premium recovery facility — an oasis of relaxation and self-improvement, right next to the gym floor."
        note="Bookings essential."
        items={[
          'PlusLife ice bath',
          'Normatec recovery',
          'Spray tan & teeth whitening',
          'Infrared sauna',
          'Massage & IV drip',
          'Beauty bar, showers & towels',
        ]}
        actions={[
          { label: 'Read more', href: '/recovery', primary: true },
          { label: 'Follow on Instagram', href: 'https://www.instagram.com/alpharecovery_woonona/?hl=en' },
        ]}
        imageSide="right"
        imageKey="home.recovery"
      />

      {/* Supplements & Barbershop — byq: modulabs-cms-grid-3 */}
      <InsightsCards
        cards={[
          {
            eyebrow: 'Fuel',
            title: 'Alpha Supplements',
            body: "The widest range of pre-workouts, proteins and health supplements from the industry's biggest brands — at seriously competitive prices.",
            meta: ['Mon–Thu 8am–12pm & 3–7pm', 'Fri–Sat 8am–12pm'],
            actions: [
              { label: 'Read more', href: '/supplements', primary: true },
              { label: 'Follow on Instagram', href: 'https://www.instagram.com/alphasupps_woonona/?hl=en' },
            ],
            imageSide: 'left',
            imageKey: 'home.supplements',
          },
          {
            eyebrow: 'Look sharp',
            title: 'Alpha Barbershop',
            body: "The Northern Illawarra's premium men's barbershop — the finest tools and products, service second to none. Walk-ins welcome.",
            actions: [
              { label: 'Go to website', href: 'https://alphabarbershopwoonona.com/', primary: true },
              { label: 'Follow on Instagram', href: 'https://www.instagram.com/alphabarbershopwoonona/' },
            ],
            imageSide: 'right',
            imageKey: 'home.barbershop',
          },
        ]}
      />

      {/* Video — byq: birkform-video-1 (placeholder) */}
      <VideoShowcase heading="See inside Alpha Gym Woonona" />

      
      {/* Day Pass + Argo Elevate — byq: halden-miller-cta-3 (2-col CTA) */}
      <TwoColCta
        cards={[
          {
            label: 'Not ready to commit?',
            title: (
              <>
                Try a 1 Day Pass — <span className="text-[color:var(--accent)]">$15</span>
              </>
            ),
            description:
              'Staffed-hours access to the full gym floor, one visit at a time. $0 joining fee, $0 access tag fee — just turn up and train.',
            action: { label: 'Claim your $15 day pass', href: MEMBERSHIP_URL, primary: true },
          },
          {
            label: 'Partner Access',
            title: (
              <>
                Argo Pilates Elevate member? <span className="text-[color:var(--accent)]">You're already in.</span>
              </>
            ),
            description:
              "Complimentary 24/7 Alpha Gym access for active Argo Pilates 'Elevate' members. No fees, no contract — access stays valid while your Elevate membership is active.",
            action: { label: 'Ask About Elevate Access', href: '/contact', primary: true },
          },
        ]}
        note="No lock-in · cancel anytime"
      />

      {/* Pricing teaser — byq: modulabs-pricing-1 */}
      <section id="pricing" className="relative py-20 px-8 bg-[color:var(--bg)] border-t border-[color:var(--cream-16)]">
        <ByqTag>modulabs-pricing-1</ByqTag>
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col items-center text-center gap-4 max-w-[540px] mx-auto mb-20">
            <Label>Pricing</Label>
            <h1 className="m-0 text-[color:var(--cream)] font-normal text-[64px] leading-[60px] tracking-[-2.5px]">
              Simple pricing. <span className="text-[color:var(--cream-64)]">No lock-in.</span>
            </h1>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ['Recovery', '$25', '/week', false, 'Full access to Alpha Recovery — ice bath, infrared sauna, Normatec and more.', null],
              ['24/7 Gym Access', '$20.95', '/week', true, 'Unlimited 24/7 access to the full 650m² floor, functional zone and outdoor training.', null],
              ['Alpha Annual', '$750', '/year', false, '12 months of 24/7 access upfront — works out under $14.50/week.', 'Save ~$339/yr vs. weekly'],
            ].map(([title, price, per, popular, desc, save]) => (
              <div
                key={title as string}
                className={`flex flex-col gap-8 rounded-lg p-8 ${popular ? 'bg-[color:var(--depth)] border-2 border-[color:var(--accent)] md:scale-[1.03]' : 'bg-[color:var(--lift)] border border-[color:var(--cream-16)]'}`}
              >
                <div className="flex justify-between items-center gap-2">
                  <div className="text-[color:var(--cream-88)] text-xl font-medium">{title}</div>
                  <div className="px-2 py-2 border border-[color:var(--cream-16)] rounded-lg font-mono-label">
                    {popular ? 'Most Popular' : 'Standard'}
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-end gap-2">
                    <div className="text-[color:var(--cream)] text-[40px] leading-[40px] tracking-[-1px]">{price}</div>
                    <div className="text-[color:var(--cream-64)] text-sm">{per}</div>
                  </div>
                  <div className="text-[color:var(--cream-88)] text-base leading-6">{desc}</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="self-start px-2 py-1 rounded-md border border-[color:var(--cream-16)] text-[color:var(--cream-64)] text-xs">
                      No lock-in / cancel anytime
                    </span>
                    {save && (
                      <span className="self-start px-2 py-1 rounded-md border border-[color:var(--accent)] text-[color:var(--accent)] text-xs">
                        {save}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href={MEMBERSHIP_URL}
                    className="relative flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]"
                  >
                    <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />
                    Choose Plan
                  </a>
                  <p className="text-[color:var(--cream-64)] text-xs text-center m-0">No lock-in · cancel anytime</p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="font-mono-label text-[color:var(--cream-88)]">Includes</div>
                  <ul className="flex flex-col gap-4 m-0 p-0 list-none">
                    {['24/7 access', 'No lock-in', 'Member app'].map((f) => (
                      <li key={f} className="flex items-center gap-4 text-[color:var(--cream-88)] text-base">
                        <span className="flex-none w-6 h-6 rounded-lg bg-[color:var(--cream)] text-[#0a0a0b] flex items-center justify-center text-xs">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 mt-12 text-center">
            <p className="text-[color:var(--cream-64)] text-sm m-0">
              Sign up online in 2 minutes, get your tag, start today.
            </p>
            <Link to="/pricing" className="text-[color:var(--cream)] text-sm font-medium underline">
              View full pricing &amp; plans →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials — byq: modulabs-testimonials-1 */}
      <section className="relative py-20 px-8 bg-[color:var(--bg)] overflow-hidden">
        <ByqTag>modulabs-testimonials-1</ByqTag>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-72 h-72 rounded-full bg-[color:var(--accent)] blur-[200px] opacity-30" />
        </div>
        <div className="relative z-10 max-w-[1800px] mx-auto">
          <div className="flex flex-col items-center text-center gap-8 mb-20">
            <Label>Testimonials</Label>
            <div className="flex flex-col items-center gap-4">
              <h2 className="m-0 text-[color:var(--cream)] font-normal text-5xl leading-[48px] tracking-[-2px]">
                What members <span className="text-[color:var(--cream-64)]">say</span>
              </h2>
              <p className="text-[color:var(--cream-64)] text-base">Real reviews from the Alpha Gym community.</p>
            </div>
          </div>
          <div className="max-w-[680px] mx-auto rounded-lg border border-[color:var(--cream-16)] bg-[color:var(--lift)] p-8 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[color:var(--accent)] tracking-[0.2em]">★★★★★</span>
              <p className="m-0 text-[color:var(--cream-88)] text-xl leading-7">
                "Best equipped gym in the Illawarra by far. 24/7 access, never overcrowded, and the recovery centre is a game changer."
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-[color:var(--cream-88)]">Alpha Gym Member</span>
              <span className="text-sm text-[color:var(--cream-64)]">Google Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — byq: modulabs-faq-1 */}
      <section id="faq" className="relative py-24 px-8 border-y border-[color:var(--cream-16)] bg-[color:var(--lift)]">
        <ByqTag>modulabs-faq-1</ByqTag>
        <div className="max-w-[1800px] mx-auto grid md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-6 max-w-[452px]">
            <Label>FAQ</Label>
            <h3 className="m-0 text-[color:var(--cream)] font-normal text-[40px] leading-[40px] tracking-[-1px]">
              Good to know
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            {[
              ['Am I locked into a contract?', 'No. Our fortnightly memberships are no lock-in — cancel anytime with no exit fees.'],
              ['Is there parking?', 'Yes — secure underground parking with lift access straight to the gym floor.'],
              ['What does it cost to join?', '24/7 gym access is $20.95/week with a one-off $49 joining fee and $0 access tag fee.'],
              ['What happens after I join?', 'Sign up online in 2 minutes, get your tag, start today.'],
            ].map(([q, a]) => (
              <details key={q} className="rounded-lg bg-[color:var(--depth)] p-6 cursor-pointer">
                <summary className="flex items-center justify-between gap-8 text-[color:var(--cream-88)] text-base font-medium list-none">
                  {q}
                  <span className="flex-none flex items-center justify-center w-8 h-8 rounded-lg bg-[color:var(--cream-08)] border border-[color:var(--cream-08)] text-[color:var(--accent)]">+</span>
                </summary>
                <p className="mt-4 text-[color:var(--cream-64)] text-base leading-6">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Start today + Follow along — byq: halden-miller-cta-3, stacked 1-col per offthegrid-cta-1 */}
      <TwoColCta
        cards={[
          {
            label: 'Get in touch',
            title: 'Start today.',
            description: '1/417–421 Princes Hwy, Woonona NSW 2517 · Open 24/7, 365 days a year.',
            action: { label: 'Get in Touch', href: '/contact', primary: true },
          },
          {
            label: 'Follow along',
            title: 'Promos, events & community — straight from the floor.',
            description: 'Fresh promos and events weekly — follow along on Instagram.',
            action: { label: '@alphagym.au on Instagram', href: INSTAGRAM_URL, primary: true },
          },
        ]}
      />

      {/* Contact grid — byq: forerunner-contact-2 */}
      <ContactGrid id="contact" />
    </>
  );
}

export default Home;
