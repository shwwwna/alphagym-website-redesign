import { useEffect, useRef, useState } from 'react';
import { getImageSrc, isEditMode, setImageOverride, type ImageKey } from '../lib/editableImages';

// Renders a background-image div for the given registry key. In edit mode,
// hovering shows an upload affordance; clicking opens a file picker and
// previews the picked image instantly (see lib/editableImages.ts for how
// previews get exported to real files).
function EditableImage({
  imageKey,
  className = '',
  style,
}: {
  imageKey: ImageKey;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [src, setSrc] = useState(() => getImageSrc(imageKey));
  const [editMode, setEditMode] = useState(() => isEditMode());
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const refresh = () => setSrc(getImageSrc(imageKey));
    const refreshEditMode = () => setEditMode(isEditMode());
    window.addEventListener('alphagym:images-changed', refresh);
    window.addEventListener('alphagym:edit-mode-changed', refreshEditMode);
    return () => {
      window.removeEventListener('alphagym:images-changed', refresh);
      window.removeEventListener('alphagym:edit-mode-changed', refreshEditMode);
    };
  }, [imageKey]);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImageOverride(imageKey, reader.result as string, file.name);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  }

  const hasPositioning = /\b(relative|absolute|fixed|sticky)\b/.test(className);

  return (
    <div
      className={`${hasPositioning ? '' : 'relative '}${className}`}
      style={{ ...style, backgroundImage: src ? `url('${src}')` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {editMode && (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="absolute inset-0 z-10 flex items-center justify-center gap-2 bg-black/0 opacity-0 hover:opacity-100 hover:bg-black/50 transition-all text-white text-sm font-medium cursor-pointer border-2 border-dashed border-transparent hover:border-[color:var(--accent)]"
        >
          <span className="px-3 py-2 rounded-md bg-black/70">Click to upload</span>
        </button>
      )}
      {editMode && (
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      )}
    </div>
  );
}

export default EditableImage;
