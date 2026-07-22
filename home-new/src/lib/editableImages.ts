// Registry of every editable image on the site, keyed by a stable id.
// Edit mode (see EditModeToggle) lets you click an image, upload a
// replacement, and preview it instantly — previews are stored in
// localStorage so they survive a refresh, but they never touch this file.
// Use "Export changes" in edit mode to get the renamed files + the exact
// code edits to make here to publish a change for real.

export const DEFAULT_IMAGES = {
  'home.hero': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop',
  'home.facility': '',
  'home.recovery': '',
  'home.supplements': '',
  'home.barbershop': '',
  'home.coaching.personalTraining': '',
  'home.coaching.groupClasses': '',
  'home.coaching.nutrition': '',

  'facility.hero': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop',
  'facility.statImage1': 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop',
  'facility.statImage2': 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
  'facility.gallery.1': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1800&auto=format&fit=crop',
  'facility.gallery.2': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1800&auto=format&fit=crop',
  'facility.gallery.3': 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1800&auto=format&fit=crop',
  'facility.gallery.4': 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1800&auto=format&fit=crop',
  'facility.gallery.5': 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1800&auto=format&fit=crop',

  'classes.hero': 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop',
  'classes.personalTraining': 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop',
  'classes.nutrition': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',

  'recovery.hero': 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1600&auto=format&fit=crop',
  'recovery.iceBath': 'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?q=80&w=1200&auto=format&fit=crop',
  'recovery.sauna': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
  'recovery.beautyBar': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',

  'supplements.hero': 'https://images.unsplash.com/photo-1579722820258-8d4b3e2e5b1e?q=80&w=1600&auto=format&fit=crop',
  'supplements.product.1': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop',
  'supplements.product.2': 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=1200&auto=format&fit=crop',
  'supplements.product.3': 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop',

  'pricing.hero': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop',

  'contact.hero': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop',
} as const;

export type ImageKey = keyof typeof DEFAULT_IMAGES;

const STORAGE_KEY = 'alphagym.editableImages.v1';
const EDIT_MODE_KEY = 'alphagym.editMode';

type Overrides = Partial<Record<ImageKey, { dataUrl: string; fileName: string }>>;

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
  window.dispatchEvent(new Event('alphagym:images-changed'));
}

export function getImageSrc(key: ImageKey): string {
  const overrides = readOverrides();
  return overrides[key]?.dataUrl || DEFAULT_IMAGES[key];
}

export function setImageOverride(key: ImageKey, dataUrl: string, fileName: string) {
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
  window.dispatchEvent(new Event('alphagym:images-changed'));
}

export function getAllOverrides(): Overrides {
  return readOverrides();
}

export function isEditMode(): boolean {
  return localStorage.getItem(EDIT_MODE_KEY) === '1';
}

export function setEditMode(on: boolean) {
  if (on) localStorage.setItem(EDIT_MODE_KEY, '1');
  else localStorage.removeItem(EDIT_MODE_KEY);
  window.dispatchEvent(new Event('alphagym:edit-mode-changed'));
}

function extFromMime(mime: string): string {
  if (mime === 'image/png') return 'png';
  if (mime === 'image/webp') return 'webp';
  if (mime === 'image/svg+xml') return 'svg';
  if (mime === 'image/gif') return 'gif';
  return 'jpg';
}

function slugFromKey(key: string): string {
  return key.replace(/\./g, '-').replace(/[^a-zA-Z0-9-]/g, '');
}

// Downloads every overridden image as a renamed file, and returns the
// images.ts snippet to paste in so the change becomes permanent.
export async function exportOverrides(): Promise<{ fileCount: number; snippet: string }> {
  const overrides = readOverrides();
  const entries = Object.entries(overrides) as [ImageKey, { dataUrl: string; fileName: string }][];

  const snippetLines: string[] = [];

  for (const [key, { dataUrl, fileName }] of entries) {
    const mimeMatch = /^data:([^;]+);base64,/.exec(dataUrl);
    const mime = mimeMatch?.[1] ?? 'image/jpeg';
    const ext = fileName.includes('.') ? fileName.split('.').pop()! : extFromMime(mime);
    const outName = `${slugFromKey(key)}.${ext}`;

    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = outName;
    document.body.appendChild(a);
    a.click();
    a.remove();

    snippetLines.push(`  '${key}': '/images/${outName}',`);
  }

  const snippet = entries.length
    ? `Drop the downloaded files into public/images/, then update src/lib/editableImages.ts:\n\n${snippetLines.join('\n')}`
    : 'No changed images to export yet.';

  return { fileCount: entries.length, snippet };
}
