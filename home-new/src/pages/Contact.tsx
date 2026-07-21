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
            ].map(([label, val], i) => (
              <div key={label} className={`p-12 flex flex-col gap-4 ${i !== 2 ? 'border-b border-[color:var(--cream-16)]' : ''}`}>
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
    </>
  );
}

export default Contact;
