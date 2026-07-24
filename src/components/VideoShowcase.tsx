import Label from "./Label";
import ByqTag from "./ByqTag";

// Video Section — byq: birkform-video-1
// Single contained video showcase. Placeholder poster + play button.
// To go live: replace the poster block below with a <video> (or lightbox
// iframe) and set VIDEO_SRC to the hosted mp4 / embed URL.
const VIDEO_SRC = `${import.meta.env.BASE_URL}images/alpha-gym.mp4`;

function VideoShowcase({
  id,
  eyebrow = "Take a look",
  heading,
}: {
  id?: string;
  eyebrow?: string;
  heading: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative py-20 px-8 bg-[color:var(--bg)] border-t border-[color:var(--cream-16)]"
    >
      <ByqTag>birkform-video-1</ByqTag>
      <div className="max-w-[1800px] mx-auto flex flex-col gap-8">
        <div className="flex flex-col items-start gap-6 max-w-[680px]">
          <Label>{eyebrow}</Label>
          <h2 className="m-0 text-[color:var(--cream)] font-normal text-[40px] md:text-[48px] leading-[1.05] tracking-[-1.5px]">
            {heading}
          </h2>
        </div>

        {/* Video / poster slot */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-[color:var(--cream-16)] bg-[color:var(--depth)]">
          {VIDEO_SRC ? (
            <video
              className="w-full h-full object-cover"
              src={VIDEO_SRC}
              controls
              playsInline
              preload="metadata"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                aria-label="Play video"
                className="flex items-center justify-center w-20 h-20 rounded-full bg-[color:var(--cream)] text-[#0a0a0b]"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default VideoShowcase;
