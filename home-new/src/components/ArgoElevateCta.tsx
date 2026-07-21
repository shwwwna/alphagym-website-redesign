import Label from './Label';
import ByqTag from './ByqTag';

// Shared "Argo Elevate members" CTA — used on Home and Pricing
// byq: halden-miller-cta-3 (spotlight card, single-offer callout)
function ArgoElevateCta() {
  return (
    <section className="relative py-20 px-8 bg-[color:var(--bg)] border-t border-[color:var(--cream-16)]">
      <ByqTag>halden-miller-cta-3</ByqTag>
      <div className="relative overflow-hidden max-w-[1800px] mx-auto flex flex-wrap items-center justify-between gap-8 rounded-lg border border-[color:var(--cream-16)] bg-[color:var(--depth)] p-8 md:p-16">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[color:var(--accent)] blur-[160px] opacity-25 pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-4 max-w-[600px]">
          <Label>Partner Access</Label>
          <h2 className="m-0 text-[color:var(--cream)] font-normal text-[40px] md:text-[48px] leading-[1.05] tracking-[-1.5px]">
            Argo Pilates Elevate member? <span className="text-[color:var(--accent)]">You're already in.</span>
          </h2>
          <p className="text-[color:var(--cream-64)] text-base leading-6 m-0">
            Complimentary 24/7 Alpha Gym access for active Argo Pilates 'Elevate' members. No fees, no contract — access stays valid while your Elevate membership is active.
          </p>
        </div>
        <a
          href="/contact"
          className="relative z-10 flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]"
        >
          <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />
          Ask About Elevate Access
        </a>
      </div>
    </section>
  );
}

export default ArgoElevateCta;
