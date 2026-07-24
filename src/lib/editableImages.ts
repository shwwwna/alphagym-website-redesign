// Registry of every editable image on the site, keyed by a stable id.
// Edit mode (see EditModeToggle) lets you click an image, upload a
// replacement, and preview it instantly — previews are stored in
// localStorage so they survive a refresh, but they never touch this file.
// Use "Export changes" in edit mode to get the renamed files + the exact
// code edits to make here to publish a change for real.

export const DEFAULT_IMAGES = {
  "home.hero": `${import.meta.env.BASE_URL}images/home-hero.webp`,
  "home.facility": `${import.meta.env.BASE_URL}images/home-facility.webp`,
  "home.supplements": `${import.meta.env.BASE_URL}images/supplements.png`,
  "home.barbershop": `${import.meta.env.BASE_URL}images/barbershop.png`,
  "home.coaching.personalTraining": `${import.meta.env.BASE_URL}images/home-coaching-personalTraining.png`,
  "home.coaching.groupClasses": `${import.meta.env.BASE_URL}images/home-coaching-groupClasses.png`,
  "home.coaching.nutrition": `${import.meta.env.BASE_URL}images/home-coaching-nutrition.png`,
  "home.recovery": `${import.meta.env.BASE_URL}images/home-hero.webp`,

  "facility.hero": `${import.meta.env.BASE_URL}images/facility-hero.webp`,
  "facility.gallery.1": `${import.meta.env.BASE_URL}images/facility/facility-1.webp`,
  "facility.gallery.2": `${import.meta.env.BASE_URL}images/facility/facility-2.webp`,
  "facility.gallery.3": `${import.meta.env.BASE_URL}images/facility/facility-3.webp`,
  "facility.gallery.4": `${import.meta.env.BASE_URL}images/facility/facility-4.webp`,
  "facility.gallery.5": `${import.meta.env.BASE_URL}images/facility/facility-5.webp`,
  "facility.gallery.6": `${import.meta.env.BASE_URL}images/facility/facility-6.webp`,
  "facility.gallery.7": `${import.meta.env.BASE_URL}images/facility/facility-7.webp`,
  "facility.gallery.8": `${import.meta.env.BASE_URL}images/facility/facility-8.webp`,
  "facility.gallery.9": `${import.meta.env.BASE_URL}images/facility/facility-9.webp`,
  "facility.gallery.10": `${import.meta.env.BASE_URL}images/facility/facility-10.webp`,

  "classes.hero": `${import.meta.env.BASE_URL}images/facility/facility-3.webp`,
  "classes.personalTraining": `${import.meta.env.BASE_URL}images/home-coaching-personalTraining.png`,
  "classes.nutrition": `${import.meta.env.BASE_URL}images/home-coaching-nutrition.png`,

  "recovery.hero": `${import.meta.env.BASE_URL}images/facility/facility-4.webp`,
  "recovery.iceBath": `${import.meta.env.BASE_URL}images/ice-bath.png`,
  "recovery.sauna": `${import.meta.env.BASE_URL}images/sauna.png`,
  "recovery.beautyBar": `${import.meta.env.BASE_URL}images/fitactiv.png`,

  "supplements.hero": `${import.meta.env.BASE_URL}images/facility/facility-10.webp`,
  "supplements.product.1": `${import.meta.env.BASE_URL}images/supplements.png`,
  "supplements.product.2": `${import.meta.env.BASE_URL}images/supplements-2.png`,
  "supplements.product.3": `${import.meta.env.BASE_URL}images/supplements-3.png`,

  "pricing.hero": `${import.meta.env.BASE_URL}images/facility/facility-7.webp`,

  "contact.hero": `${import.meta.env.BASE_URL}images/facility/facility-9.webp`,
} as const;

export type ImageKey = keyof typeof DEFAULT_IMAGES;

const STORAGE_KEY = "alphagym.editableImages.v1";
const EDIT_MODE_KEY = "alphagym.editMode";

type Overrides = Partial<
  Record<ImageKey, { dataUrl: string; fileName: string }>
>;

function readOverrides(): Overrides {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeOverrides(overrides: Overrides) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
  window.dispatchEvent(new Event("alphagym:images-changed"));
}

export function getImageSrc(key: ImageKey): string {
  const overrides = readOverrides();
  return overrides[key]?.dataUrl || DEFAULT_IMAGES[key];
}

export function setImageOverride(
  key: ImageKey,
  dataUrl: string,
  fileName: string,
) {
  const overrides = readOverrides();
  overrides[key] = { dataUrl, fileName };
  writeOverrides(overrides);
}

export function clearImageOverride(key: ImageKey) {
  const overrides = readOverrides();
  delete overrides[key];
  writeOverrides(overrides);
}

export function clearAllOverrides() {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event("alphagym:images-changed"));
}

export function getAllOverrides(): Overrides {
  return readOverrides();
}

export function isEditMode(): boolean {
  return localStorage.getItem(EDIT_MODE_KEY) === "1";
}

export function setEditMode(on: boolean) {
  if (on) localStorage.setItem(EDIT_MODE_KEY, "1");
  else localStorage.removeItem(EDIT_MODE_KEY);
  window.dispatchEvent(new Event("alphagym:edit-mode-changed"));
}

function extFromMime(mime: string): string {
  if (mime === "image/png") return "png";
  if (mime === "image/webp") return "webp";
  if (mime === "image/svg+xml") return "svg";
  if (mime === "image/gif") return "gif";
  return "jpg";
}

function slugFromKey(key: string): string {
  return key.replace(/\./g, "-").replace(/[^a-zA-Z0-9-]/g, "");
}

// Downloads every overridden image as a renamed file, and returns the
// images.ts snippet to paste in so the change becomes permanent.
export async function exportOverrides(): Promise<{
  fileCount: number;
  snippet: string;
}> {
  const overrides = readOverrides();
  const entries = Object.entries(overrides) as [
    ImageKey,
    { dataUrl: string; fileName: string },
  ][];

  const snippetLines: string[] = [];

  for (const [key, { dataUrl, fileName }] of entries) {
    const mimeMatch = /^data:([^;]+);base64,/.exec(dataUrl);
    const mime = mimeMatch?.[1] ?? "image/jpeg";
    const ext = fileName.includes(".")
      ? fileName.split(".").pop()!
      : extFromMime(mime);
    const outName = `${slugFromKey(key)}.${ext}`;

    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = outName;
    document.body.appendChild(a);
    a.click();
    a.remove();

    snippetLines.push(`  '${key}': '/images/${outName}',`);
  }

  const snippet = entries.length
    ? `Drop the downloaded files into public/images/, then update src/lib/editableImages.ts:\n\n${snippetLines.join("\n")}`
    : "No changed images to export yet.";

  return { fileCount: entries.length, snippet };
}
