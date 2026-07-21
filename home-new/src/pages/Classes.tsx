import { useState } from 'react';
import Label from '../components/Label';
import PageHero from '../components/PageHero';
import CtaBanner from '../components/CtaBanner';
import ByqTag from '../components/ByqTag';

const timetable: { day: string; classes: { time: string; name: string }[] }[] = [
  { day: 'Mon', classes: [{ time: '6:00am', name: 'HIIT' }, { time: '9:30am', name: 'Boxing' }, { time: '5:30pm', name: 'Strength' }] },
  { day: 'Tue', classes: [{ time: '6:00am', name: 'Boxing' }, { time: '9:30am', name: 'Yoga' }, { time: '6:00pm', name: 'HIIT' }] },
  { day: 'Wed', classes: [{ time: '6:00am', name: 'Strength' }, { time: '9:30am', name: 'Boxing' }, { time: '5:30pm', name: 'HIIT' }] },
  { day: 'Thu', classes: [{ time: '6:00am', name: 'HIIT' }, { time: '9:30am', name: 'Yoga' }, { time: '6:00pm', name: 'Boxing' }] },
  { day: 'Fri', classes: [{ time: '6:00am', name: 'Boxing' }, { time: '9:30am', name: 'Strength' }, { time: '5:30pm', name: 'HIIT' }] },
  { day: 'Sat', classes: [{ time: '7:30am', name: 'Boxing' }, { time: '9:00am', name: 'Yoga' }] },
  { day: 'Sun', classes: [{ time: '8:00am', name: 'HIIT' }] },
];

function BookSessionForm() {
  const [wantsPT, setWantsPT] = useState(true);
  const [wantsNutrition, setWantsNutrition] = useState(false);

  return (
    <div className="max-w-[680px] rounded-lg border border-[color:var(--cream-16)] bg-[color:var(--bg)] p-8 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="text-[color:var(--cream)] text-xl font-medium">Book a Session</div>
        <div className="text-[color:var(--cream-64)] text-sm">Choose one or both — we'll get back to you within one business day.</div>
      </div>
      <div className="flex flex-wrap gap-3">
        <label className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[color:var(--cream-16)] text-[color:var(--cream-88)] text-sm font-medium cursor-pointer">
          <input
            type="checkbox"
            checked={wantsPT}
            onChange={(e) => setWantsPT(e.target.checked)}
            className="w-4 h-4 accent-[color:var(--accent)]"
          />
          Personal Training
        </label>
        <label className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[color:var(--cream-16)] text-[color:var(--cream-88)] text-sm font-medium cursor-pointer">
          <input
            type="checkbox"
            checked={wantsNutrition}
            onChange={(e) => setWantsNutrition(e.target.checked)}
            className="w-4 h-4 accent-[color:var(--accent)]"
          />
          Nutritional Guidance
        </label>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input placeholder="Name" className="py-3 px-4 rounded-lg bg-[color:var(--cream-08)] border border-[color:var(--cream-08)] text-[color:var(--cream)] placeholder-[color:var(--cream-64)]" />
        <input placeholder="Email" className="py-3 px-4 rounded-lg bg-[color:var(--cream-08)] border border-[color:var(--cream-08)] text-[color:var(--cream)] placeholder-[color:var(--cream-64)]" />
      </div>
      <textarea placeholder="Anything we should know?" rows={3} className="py-3 px-4 rounded-lg bg-[color:var(--cream-08)] border border-[color:var(--cream-08)] text-[color:var(--cream)] placeholder-[color:var(--cream-64)]" />
      <a
        href="#"
        className="self-start relative flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]"
      >
        <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />
        Request a Session
      </a>
    </div>
  );
}

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
          <div className="grid grid-cols-2 md:grid-cols-7 rounded-lg overflow-hidden border border-[color:var(--cream-16)] divide-x divide-[color:var(--cream-16)]">
            {timetable.map(({ day, classes }) => (
              <div key={day} className="flex flex-col bg-[color:var(--lift)]">
                <div className="py-3 text-center font-mono-label text-[color:var(--cream-88)] border-b border-[color:var(--cream-16)]">
                  {day}
                </div>
                <div className="flex flex-col divide-y divide-[color:var(--cream-16)]">
                  {classes.map(({ time, name }) => (
                    <div key={time} className="flex flex-col gap-1 px-3 py-4">
                      <span className="text-[color:var(--cream-64)] text-xs">{time}</span>
                      <span className="text-[color:var(--cream-88)] text-sm font-medium">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-[color:var(--cream-64)] text-sm m-0">Placeholder timetable — replace with the current week's schedule.</p>
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
                  <a href="#book-session" className="text-[color:var(--accent)] text-sm font-medium">Book a Session →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a session — byq: modulabs-contact-1 (form pattern, reused with a service toggle) */}
      <section id="book-session" className="relative py-20 px-8 bg-[color:var(--bg)]">
        <ByqTag>modulabs-contact-1</ByqTag>
        <div className="max-w-[1800px] mx-auto">
          <BookSessionForm />
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
