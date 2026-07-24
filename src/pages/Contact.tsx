import PageHero from '../components/PageHero';
import ContactFormCard from '../components/ContactFormCard';
import ByqTag from '../components/ByqTag';

function Contact() {
  return (
    <>
      {/* byq: koda-hero-2 (PageHero) */}
      <PageHero
        label="Contact"
        title={<>Start <span className="text-[color:var(--cream-64)]">today.</span></>}
        description="1/417–421 Princes Hwy, Woonona NSW 2517 · Open 24/7, 365 days a year."
        imageKey="contact.hero"
      />

      {/* Contact — byq: modulabs-contact-1 */}
      <ContactFormCard
        heading="Get in touch"
        subheading="We'll get back to you within one business day."
      />

      {/* Follow us — byq: sound-stories-cta-1 (social row) */}
      <section className="relative py-16 px-8 bg-[color:var(--bg)] border-t border-[color:var(--cream-16)]">
        <ByqTag>sound-stories-cta-1</ByqTag>
        <div className="max-w-[1144px] mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="font-mono-label text-[color:var(--cream-64)]">Follow Alpha Gym</div>
          <div className="flex flex-wrap gap-3">
            {[
              ['Instagram', 'https://www.instagram.com/alphagym.au/'],
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
        <div className="max-w-[1144px] mx-auto flex flex-col gap-4">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=1/417-421+Princes+Hwy+Woonona+NSW+2517"
            className="self-start text-[color:var(--cream)] text-sm font-medium underline"
          >
            Get directions →
          </a>
          <div className="rounded-lg overflow-hidden border border-[color:var(--cream-16)]">
            <iframe
              title="Alpha Gym Woonona location"
              src="https://www.google.com/maps?q=1%2F417-421+Princes+Hwy%2C+Woonona+NSW+2517&output=embed"
              className="w-full h-[420px] border-0 grayscale invert-[0.92] contrast-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
