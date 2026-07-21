import { Link } from 'react-router-dom';
import Label from '../components/Label';
import ArgoElevateCta from '../components/ArgoElevateCta';
import ByqTag from '../components/ByqTag';

const MEMBERSHIP_URL = 'https://myaccount.clubfit.net.au/onlineoffers?code=ALPHAGYM&accountId=1&showall=true';

function Home() {
  return (
    <>
      {/* Hero — byq: modulabs-hero-4 */}
      <header
        id="top"
        className="relative flex min-h-screen flex-col items-start justify-end bg-cover bg-center pt-[200px] pb-16 px-8"
        style={{
          backgroundImage:
            "linear-gradient(0deg, #0a0a0b, rgba(10,10,11,0)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop')",
          backgroundBlendMode: 'normal',
        }}
      >
        <ByqTag>modulabs-hero-4</ByqTag>
        <div className="relative z-10 max-w-[1800px] mx-auto w-full">
          <div className="max-w-[680px] flex flex-col gap-6">
            <Label>Open 24/7 · 365 — Woonona NSW</Label>
            <h1 className="m-0 text-[color:var(--cream)] font-normal text-[64px] leading-[60px] tracking-[-2.5px]">
              Train. Recover. <span className="text-[color:var(--cream-64)]">Repeat.</span>
            </h1>
            <p className="text-[color:var(--cream-64)] text-base leading-6 max-w-[520px]">
              650m² of state-of-the-art training space, group classes, recovery, supplements and a barbershop — all under one roof in the Northern Illawarra.
            </p>
            <a
              href="#pricing"
              className="self-start relative flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]"
            >
              <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />
              See Membership Plans
            </a>
            <p className="text-[color:var(--cream-64)] text-sm">
              Staffed hours plus 24/7 swipe access — the gym floor is open around the clock.
            </p>
          </div>
        </div>
      </header>

      {/* Stats — byq: modulabs-stats-3 */}
      <section id="facility" className="relative py-20 px-8 bg-[color:var(--bg)]">
        <ByqTag>modulabs-stats-3</ByqTag>
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-16">
            <div className="flex flex-col gap-6">
              <Label>Facility</Label>
              <h2 className="m-0 text-[color:var(--cream)] font-normal text-[48px] leading-[48px] tracking-[-2px]">
                Built for serious training
              </h2>
            </div>
            <p className="max-w-[448px] text-[color:var(--cream-64)] text-base leading-6">
              Every piece of kit you need and plenty you won't find anywhere else in the Illawarra.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 rounded-lg overflow-hidden border border-[color:var(--cream-16)] bg-[color:var(--lift)] divide-x divide-y md:divide-y-0 divide-[color:var(--cream-16)]">
            {[
              ['650m²', 'Gym Floor'],
              ['24/7', '365 Access'],
              ['6', 'Squat Racks'],
              ['5', 'Ways to level up'],
            ].map(([n, l]) => (
              <div key={l} className="flex flex-col items-center justify-center text-center gap-4 py-20 px-8">
                <div className="text-[color:var(--accent)] text-[64px] leading-[60px] tracking-[-2.5px]">{n}</div>
                <div className="text-[color:var(--cream-64)] text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes / Services — byq: modulabs-value-features-5 */}
      <section id="classes" className="relative py-20 px-8 bg-[color:var(--bg)]">
        <ByqTag>modulabs-value-features-5</ByqTag>
        <div className="max-w-[1800px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-6 max-w-[680px]">
            <Label>Train Your Way</Label>
            <h2 className="m-0 text-[color:var(--cream)] font-normal text-[48px] leading-[48px] tracking-[-2px]">
              Classes &amp; Coaching
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ['Personal Training', 'A personalised program built around your goals, with a trainer pushing you to your best every session.'],
              ['Group Classes', 'A big range of classes for every fitness level and skill set.'],
              ['Nutrition', 'Nutrition is 80% of your results. Book a consult and get a strategic, personalised plan.'],
            ].map(([title, desc]) => (
              <div key={title} className="flex flex-col gap-8 rounded-lg border border-[color:var(--cream-16)] bg-[color:var(--lift)] p-8">
                <div className="h-52 rounded-lg bg-[color:var(--depth)]" />
                <div className="flex flex-col gap-3">
                  <div className="text-[color:var(--cream)] text-xl font-medium">{title}</div>
                  <p className="text-[color:var(--cream-64)] text-base leading-6">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day Pass — byq: halden-miller-cta-3 (spotlight card, single-offer callout) */}
      <section className="relative py-20 px-8 bg-[color:var(--bg)] border-t border-[color:var(--cream-16)]">
        <ByqTag>halden-miller-cta-3</ByqTag>
        <div className="relative overflow-hidden max-w-[1800px] mx-auto flex flex-wrap items-center justify-between gap-8 rounded-lg border border-[color:var(--cream-16)] bg-[color:var(--depth)] p-8 md:p-16">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[color:var(--accent)] blur-[160px] opacity-25 pointer-events-none" />
          <div className="relative z-10 flex flex-col gap-4 max-w-[600px]">
            <Label>Not ready to commit?</Label>
            <h2 className="m-0 text-[color:var(--cream)] font-normal text-[48px] md:text-[56px] leading-[1.05] tracking-[-1.5px]">
              Try a 1 Day Pass — <span className="text-[color:var(--accent)]">$15</span>
            </h2>
            <p className="text-[color:var(--cream-64)] text-base leading-6 m-0">
              Staffed-hours access to the full gym floor, one visit at a time. $0 joining fee, $0 access tag fee — just turn up and train.
            </p>
          </div>
          <a
            href={MEMBERSHIP_URL}
            className="relative z-10 flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]"
          >
            <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />
            Get a Day Pass
          </a>
        </div>
      </section>

      {/* Argo Elevate — byq: offthegrid-cta-1 / sound-stories-cta-1 (CtaBanner) */}
      <ArgoElevateCta />

      {/* Pricing teaser — byq: modulabs-pricing-1 */}
      <section id="pricing" className="relative py-20 px-8 bg-[color:var(--bg)]">
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
              ['Recovery', '$25', '/week', false, 'Full access to Alpha Recovery — ice bath, infrared sauna, Normatec and more.'],
              ['24/7 Gym Access', '$20.95', '/week', true, 'Unlimited 24/7 access to the full 650m² floor, functional zone and outdoor training.'],
              ['Alpha Annual', '$750', '/year', false, '12 months of 24/7 access upfront — works out under $14.50/week.'],
            ].map(([title, price, per, popular, desc]) => (
              <div
                key={title as string}
                className={`flex flex-col gap-8 rounded-lg border border-[color:var(--cream-16)] p-8 ${popular ? 'bg-[color:var(--depth)]' : 'bg-[color:var(--lift)]'}`}
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
                  <span className="self-start px-2 py-1 rounded-md border border-[color:var(--cream-16)] text-[color:var(--cream-64)] text-xs">
                    No lock-in / cancel anytime
                  </span>
                </div>
                <a
                  href="#"
                  className="relative flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]"
                >
                  <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />
                  Choose Plan
                </a>
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

      {/* Contact teaser — byq: modulabs-contact-1 */}
      <section id="contact" className="relative py-20 px-8 bg-[color:var(--bg)]">
        <ByqTag>modulabs-contact-1</ByqTag>
        <div className="max-w-[1800px] mx-auto flex flex-wrap items-center justify-between gap-8 rounded-lg border border-[color:var(--cream-16)] bg-[color:var(--lift)] p-8 md:p-12">
          <div className="flex flex-col gap-2 max-w-[600px]">
            <h2 className="m-0 text-[color:var(--cream)] font-normal text-[40px] leading-[40px] tracking-[-1px]">
              Start today.
            </h2>
            <p className="text-[color:var(--cream-64)] text-base m-0">
              1/417–421 Princes Hwy, Woonona NSW 2517 · Open 24/7, 365 days a year.
            </p>
          </div>
          <Link
            to="/contact"
            className="relative flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]"
          >
            <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Follow along — byq: sound-stories-cta-1 (inverted pill-CTA social banner) */}
      <section className="relative py-24 px-8 bg-[color:var(--cream)] border-t border-[color:var(--cream-16)]">
        <ByqTag>sound-stories-cta-1</ByqTag>
        <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center gap-8">
          <div className="flex items-center gap-3 text-[#0a0a0b]">
            <span className="w-2 h-2 rounded-sm bg-[color:var(--accent-dark)]" />
            <span className="font-mono-label">Follow along</span>
          </div>
          <h2 className="m-0 text-[#0a0a0b] font-normal text-[40px] md:text-[48px] leading-[1.1] tracking-[-1.5px]">
            Promos, events &amp; community announcements — straight from the floor.
          </h2>
          <a
            href="https://www.instagram.com/alphagym.au/"
            className="relative flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-[color:var(--cream)] bg-[#0a0a0b]"
          >
            @alphagym.au on Instagram
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
