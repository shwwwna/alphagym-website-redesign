import PageHero from '../components/PageHero';
import ByqTag from '../components/ByqTag';

function Contact() {
  return (
    <>
      {/* byq: koda-hero-2 (PageHero) */}
      <PageHero
        label="Contact"
        title={<>Start <span className="text-[color:var(--cream-64)]">today.</span></>}
        description="1/417–421 Princes Hwy, Woonona NSW 2517 · Open 24/7, 365 days a year."
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Contact — byq: modulabs-contact-1 */}
      <section className="relative py-20 px-8 bg-[color:var(--bg)]">
        <ByqTag>modulabs-contact-1</ByqTag>
        <div className="max-w-[1144px] mx-auto grid md:grid-cols-[1.5fr_1fr] border border-[color:var(--cream-16)] rounded-lg bg-[color:var(--lift)] overflow-hidden">
          <div className="p-8 border-r border-[color:var(--cream-16)] flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="text-[color:var(--cream)] text-xl font-medium">Get in touch</div>
              <div className="text-[color:var(--cream-64)] text-sm">We'll get back to you within one business day.</div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input placeholder="Name" className="py-3 px-4 rounded-lg bg-[color:var(--cream-08)] border border-[color:var(--cream-08)] text-[color:var(--cream)] placeholder-[color:var(--cream-64)]" />
              <input placeholder="Email" className="py-3 px-4 rounded-lg bg-[color:var(--cream-08)] border border-[color:var(--cream-08)] text-[color:var(--cream)] placeholder-[color:var(--cream-64)]" />
            </div>
            <textarea placeholder="Message" rows={4} className="py-3 px-4 rounded-lg bg-[color:var(--cream-08)] border border-[color:var(--cream-08)] text-[color:var(--cream)] placeholder-[color:var(--cream-64)]" />
            <a href="#" className="self-start relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]">
              <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />
              Send request
            </a>
          </div>
          <div className="flex flex-col">
            {[
              ['Phone', '+61 2 4285 5591'],
              ['Email', 'woonona@alphagymfitness.com.au'],
              ['Address', '1/417–421 Princes Hwy, Woonona NSW'],
              ['Hours', 'Open 24/7 · 365 days a year'],
            ].map(([label, val], i, arr) => (
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

      {/* Follow us — byq: sound-stories-cta-1 (social row) */}
      <section className="relative py-16 px-8 bg-[color:var(--bg)] border-t border-[color:var(--cream-16)]">
        <ByqTag>sound-stories-cta-1</ByqTag>
        <div className="max-w-[1144px] mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="font-mono-label text-[color:var(--cream-64)]">Follow Alpha Gym</div>
          <div className="flex flex-wrap gap-3">
            {[
              ['Instagram', 'https://www.instagram.com/alphagym_woonona/'],
              ['Facebook', 'https://www.facebook.com/alphagymwoonona'],
              ['TikTok', 'https://www.tiktok.com/@alphagymwoonona'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-[color:var(--cream)] border border-[color:var(--cream-16)] hover:bg-[color:var(--cream)] hover:text-[#0a0a0b] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map — byq: modulabs-contact-1 (embed variant) */}
      <section className="relative px-8 pb-20 bg-[color:var(--bg)]">
        <div className="max-w-[1144px] mx-auto rounded-lg overflow-hidden border border-[color:var(--cream-16)]">
          <iframe
            title="Alpha Gym Woonona location"
            src="https://www.google.com/maps?q=1%2F417-421+Princes+Hwy%2C+Woonona+NSW+2517&output=embed"
            className="w-full h-[420px] border-0 grayscale invert-[0.92] contrast-[1.1]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

export default Contact;
