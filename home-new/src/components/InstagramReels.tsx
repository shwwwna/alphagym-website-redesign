import { useEffect } from 'react';
import Label from './Label';
import ByqTag from './ByqTag';

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

// Instagram Reels — byq: modulabs-video-1 (adapted)
// Paste the permalink of each Reel you want to feature below, e.g.
// 'https://www.instagram.com/reel/Cxxxxxxxxxxx/'. Add or remove entries
// as you post new content — there is no live auto-sync, this is a
// hand-picked list using Instagram's official embed.
const REEL_URLS: string[] = [
  // 'https://www.instagram.com/reel/REPLACE_ME_1/',
  // 'https://www.instagram.com/reel/REPLACE_ME_2/',
  // 'https://www.instagram.com/reel/REPLACE_ME_3/',
];

function InstagramReels({
  id,
  eyebrow = 'On Instagram',
  heading,
  profileUrl,
}: {
  id?: string;
  eyebrow?: string;
  heading: React.ReactNode;
  profileUrl: string;
}) {
  useEffect(() => {
    if (REEL_URLS.length === 0) return;

    const existing = document.querySelector<HTMLScriptElement>('script[src="https://www.instagram.com/embed.js"]');
    if (existing) {
      window.instgrm?.Embeds.process();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id={id} className="relative py-20 px-8 bg-[color:var(--bg)] border-t border-[color:var(--cream-16)]">
      <ByqTag>modulabs-video-1</ByqTag>
      <div className="max-w-[1800px] mx-auto flex flex-col gap-8">
        <div className="flex flex-col items-start gap-6 max-w-[680px]">
          <Label>{eyebrow}</Label>
          <h2 className="m-0 text-[color:var(--cream)] font-normal text-[40px] md:text-[48px] leading-[1.05] tracking-[-1.5px]">
            {heading}
          </h2>
        </div>

        {REEL_URLS.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REEL_URLS.map((url) => (
              <div key={url} className="rounded-lg overflow-hidden border border-[color:var(--cream-16)] bg-[color:var(--depth)]">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{ margin: 0, width: '100%' }}
                />
              </div>
            ))}
          </div>
        ) : (
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-[color:var(--cream-16)] bg-[color:var(--depth)] px-8 py-6 text-[color:var(--cream)] font-mono-label"
          >
            Follow us on Instagram
          </a>
        )}
      </div>
    </section>
  );
}

export default InstagramReels;
