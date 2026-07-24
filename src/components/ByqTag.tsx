import { useEffect, useState } from 'react';

// Visible dev-only label showing which BYQ section a block is sourced from
const STORAGE_KEY = 'alphagym:show-byq-labels';
const EVENT_NAME = 'alphagym:byq-labels-changed';

export function isByqLabelsVisible() {
  return localStorage.getItem(STORAGE_KEY) === 'true';
}

export function setByqLabelsVisible(visible: boolean) {
  localStorage.setItem(STORAGE_KEY, String(visible));
  window.dispatchEvent(new Event(EVENT_NAME));
}

export function onByqLabelsChanged(callback: () => void) {
  window.addEventListener(EVENT_NAME, callback);
  return () => window.removeEventListener(EVENT_NAME, callback);
}

function ByqTag({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(() => isByqLabelsVisible());

  useEffect(() => onByqLabelsChanged(() => setVisible(isByqLabelsVisible())), []);

  if (!visible) return null;

  return (
    <span className="absolute top-3 left-3 z-20 px-2 py-1 rounded-md bg-[#0a0a0bcc] border border-[color:var(--accent)] text-[color:var(--accent)] text-[10px] font-mono tracking-wide pointer-events-none">
      byq: {children}
    </span>
  );
}

export default ByqTag;
