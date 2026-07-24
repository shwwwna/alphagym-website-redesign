import ByqTag from './ByqTag';

// byq: modulabs-navigation-bar1, adapted into a persistent bottom join bar (mobile-first)
function StickyCta() {
  return (
    <div className="fixed left-0 right-0 bottom-0 z-[998] px-4 pb-4 md:hidden">
      <ByqTag>modulabs-navigation-bar1</ByqTag>
      <a
        href="https://myaccount.clubfit.net.au/onlineoffers?code=ALPHAGYM&accountId=1&showall=true"
        className="relative flex items-center justify-between gap-3 px-5 py-4 rounded-lg border border-[color:var(--cream-16)] bg-[#181818f2] backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
      >
        <span className="text-sm font-medium text-[color:var(--cream)]">
          Join from <span className="text-[color:var(--accent)]">$20.95/wk</span> · No lock-in
        </span>
        <span className="flex-none flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#0a0a0b] bg-[color:var(--cream)]">
          <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />
          Get Started
        </span>
      </a>
    </div>
  );
}

export default StickyCta;
