import { useEffect, useState } from 'react';
import { clearAllOverrides, exportOverrides, getAllOverrides, isEditMode, setEditMode } from '../lib/editableImages';

// Floating dev control: toggle edit mode, see how many images are pending
// export, and export them. Not gated behind an env check on purpose — this
// is an internal admin tool for whoever runs the site, not a visitor feature.
function EditModeToggle() {
  const [editMode, setEditModeState] = useState(() => isEditMode());
  const [pendingCount, setPendingCount] = useState(() => Object.keys(getAllOverrides()).length);
  const [exportMsg, setExportMsg] = useState<string | null>(null);

  useEffect(() => {
    const refreshCount = () => setPendingCount(Object.keys(getAllOverrides()).length);
    window.addEventListener('alphagym:images-changed', refreshCount);
    return () => window.removeEventListener('alphagym:images-changed', refreshCount);
  }, []);

  function toggle() {
    const next = !editMode;
    setEditMode(next);
    setEditModeState(next);
  }

  async function handleExport() {
    const { fileCount, snippet } = await exportOverrides();
    if (fileCount === 0) {
      setExportMsg('No changed images to export yet.');
      return;
    }
    try {
      await navigator.clipboard.writeText(snippet);
      setExportMsg(`Downloaded ${fileCount} file(s) and copied the images.ts snippet to your clipboard.`);
    } catch {
      setExportMsg(`Downloaded ${fileCount} file(s). Snippet:\n\n${snippet}`);
    }
  }

  function handleReset() {
    if (!confirm('Discard all unpublished image previews?')) return;
    clearAllOverrides();
    setExportMsg(null);
  }

  return (
    <div className="fixed bottom-4 left-4 z-[100] flex flex-col items-start gap-2 font-sans">
      {exportMsg && (
        <div className="max-w-sm whitespace-pre-wrap rounded-md bg-[#0a0a0b] border border-[color:var(--accent)] text-[color:var(--cream)] text-xs p-3">
          {exportMsg}
          <button type="button" onClick={() => setExportMsg(null)} className="block mt-2 underline text-[color:var(--accent)]">
            Dismiss
          </button>
        </div>
      )}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={toggle}
          className={`px-3 py-2 rounded-md text-xs font-medium border ${
            editMode
              ? 'bg-[color:var(--accent)] text-[#0a0a0b] border-[color:var(--accent)]'
              : 'bg-[#0a0a0bcc] text-[color:var(--cream)] border-[color:var(--cream-16)]'
          }`}
        >
          {editMode ? 'Editing images: ON' : 'Edit images'}
        </button>
        {editMode && (
          <>
            <button
              type="button"
              onClick={handleExport}
              className="px-3 py-2 rounded-md text-xs font-medium bg-[#0a0a0bcc] text-[color:var(--cream)] border border-[color:var(--cream-16)]"
            >
              Export changes{pendingCount > 0 ? ` (${pendingCount})` : ''}
            </button>
            {pendingCount > 0 && (
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-2 rounded-md text-xs font-medium bg-[#0a0a0bcc] text-[color:var(--cream-64)] border border-[color:var(--cream-16)]"
              >
                Reset
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default EditModeToggle;
