import Label from '../components/Label';
import PageHero from '../components/PageHero';
import ArgoElevateCta from '../components/ArgoElevateCta';
import ByqTag from '../components/ByqTag';

const MEMBERSHIP_URL = 'https://myaccount.clubfit.net.au/onlineoffers?code=ALPHAGYM&accountId=1&showall=true';

const plans = [
  {
    title: '1 Day Pass',
    price: '$15',
    per: '/visit',
    popular: false,
    desc: 'Staffed-hours access to Alpha Gym Woonona — the low-commitment way to try us out.',
    fees: ['$0 joining fee', '$0 access tag fee', 'Paid in full per visit'],
    includes: ['Staffed-hours access', 'No sign-up required', 'No lock-in'],
    save: null as string | null,
  },
  {
    title: 'Fortnightly 24/7 Gym Access',
    price: '$20.95',
    per: '/wk',
    popular: true,
    desc: '24/7 access to the full 650m² floor, billed fortnightly at $41.90 with no locked-in contract.',
    fees: ['$49 joining fee', '$0 access tag fee', 'Billed $41.90/fortnight'],
    includes: ['24/7 access', 'No lock-in — cancel anytime', 'Member app'],
    save: null,
  },
  {
    title: 'Fortnightly Youth (13–15)',
    price: '$17.95',
    per: '/wk',
    popular: false,
    desc: 'Restricted, staffed-hours access for 13–15 year olds, billed fortnightly at $35.90. Parent consent required.',
    fees: ['$49 joining fee', '$0 access tag fee', 'Billed $35.90/fortnight'],
    includes: ['Staffed-hours access', 'No lock-in — cancel anytime', 'Parent consent form required'],
    save: null,
  },
  {
    title: 'Alpha Annual',
    price: '$750',
    per: '/year',
    popular: false,
    desc: '12 months of 24/7 access paid upfront — works out under $14.50/week.',
    fees: ['$0 joining fee', '$0 access tag fee', '$750 paid in full'],
    includes: ['24/7 access', 'No lock-in — cancel anytime', 'Valid for 52 weeks'],
    save: 'Save ~$339/yr vs. weekly',
  },
  {
    title: 'Recovery Membership',
    price: '$25',
    per: '/wk',
    popular: false,
    desc: 'Unlimited access (subject to availability) to Alpha Recovery — ice bath, infrared sauna, Normatec and more.',
    fees: ['$0 joining fee', '$0 access tag fee', 'Billed $50/fortnight'],
    includes: ['Ice bath, sauna & Normatec', 'No lock-in — cancel anytime', 'Health screening required'],
    save: null,
  },
];

function Pricing() {
  return (
    <>
      {/* byq: koda-hero-2 (PageHero) */}
      <PageHero
        label="Pricing"
        title={<>Simple pricing. <span className="text-[color:var(--cream-64)]">No lock-in.</span></>}
        description="Every plan is no lock-in, cancel anytime, no cancellation fee. Pick what fits — upgrade, downgrade or pause whenever you need to."
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Pricing — byq: modulabs-pricing-1 */}
      <section className="relative py-20 px-8 bg-[color:var(--bg)]">
        <ByqTag>modulabs-pricing-1</ByqTag>
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={`flex flex-col gap-8 rounded-lg p-8 ${plan.popular ? 'bg-[color:var(--depth)] border-2 border-[color:var(--accent)] md:scale-[1.03]' : 'bg-[color:var(--lift)] border border-[color:var(--cream-16)]'}`}
              >
                <div className="flex justify-between items-center gap-2">
                  <div className="text-[color:var(--cream-88)] text-xl font-medium">{plan.title}</div>
                  <div className="px-2 py-2 border border-[color:var(--cream-16)] rounded-lg font-mono-label">
                    {plan.popular ? 'Most Popular' : 'Standard'}
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex items-end gap-2">
                    <div className="text-[color:var(--cream)] text-[40px] leading-[40px] tracking-[-1px]">{plan.price}</div>
                    <div className="text-[color:var(--cream-64)] text-sm">{plan.per}</div>
                  </div>
                  <div className="text-[color:var(--cream-88)] text-base leading-6">{plan.desc}</div>
                  <div className="flex flex-wrap gap-2">
                    {plan.fees.map((f) => (
                      <span key={f} className="px-2 py-1 rounded-md border border-[color:var(--cream-16)] text-[color:var(--cream-64)] text-xs">
                        {f}
                      </span>
                    ))}
                    {plan.save && (
                      <span className="px-2 py-1 rounded-md border border-[color:var(--accent)] text-[color:var(--accent)] text-xs">
                        {plan.save}
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
                    {plan.includes.map((f) => (
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
        </div>
      </section>

      {/* Add-ons / partner access — byq: jake-carter-list-2 */}
      <section className="py-20 px-8 bg-[color:var(--lift)] border-t border-[color:var(--cream-16)]">
        <div className="max-w-[1800px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6 max-w-[680px]">
            <Label>Also available</Label>
            <h2 className="m-0 text-[color:var(--cream)] font-normal text-[40px] leading-[40px] tracking-[-1px]">
              Add-ons &amp; partner access
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-3 rounded-lg border border-[color:var(--cream-16)] bg-[color:var(--depth)] p-8">
              <div className="text-[color:var(--cream)] text-xl font-medium">Fitness Passport</div>
              <p className="text-[color:var(--cream-64)] text-base leading-6 m-0">
                24/7 access plus unlimited group classes via Fitness Passport, with a one-off $49 joining fee and a complimentary Evolt body scan + consult.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-lg border border-[color:var(--cream-16)] bg-[color:var(--depth)] p-8">
              <div className="text-[color:var(--cream)] text-xl font-medium">ClassPass</div>
              <p className="text-[color:var(--cream-64)] text-base leading-6 m-0">
                Book a visit to Alpha Gym Woonona through ClassPass. $0 joining fee, $0 access card fee — 1 visit per booking.
              </p>
              <a
                href="https://classpass.com/studios/alpha-gym-woonona"
                className="self-start relative flex items-center gap-2 px-4 py-2 mt-2 rounded-lg text-sm font-medium text-[color:var(--cream)] border border-[color:var(--cream-16)]"
              >
                Book on ClassPass
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Argo Elevate — byq: offthegrid-cta-1 / sound-stories-cta-1 (CtaBanner) */}
      <ArgoElevateCta />
    </>
  );
}

export default Pricing;
