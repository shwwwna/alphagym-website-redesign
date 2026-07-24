import { useState } from 'react';
import { isByqLabelsVisible, setByqLabelsVisible } from './ByqTag';

// Floating dev control: show/hide the "byq: <section>" source labels site-wide
function ByqLabelsToggle() {
  const [visible, setVisible] = useState(() => isByqLabelsVisible());

  function toggle() {
    const next = !visible;
    setByqLabelsVisible(next);
    setVisible(next);
  }

  return (
    <div className="fixed bottom-20 left-4 z-[100] font-sans">
      <button
        type="button"
        onClick={toggle}
        className={`px-3 py-2 rounded-md text-xs font-medium border ${
          visible
            ? 'bg-[color:var(--accent)] text-[#0a0a0b] border-[color:var(--accent)]'
            : 'bg-[#0a0a0bcc] text-[color:var(--cream)] border-[color:var(--cream-16)]'
        }`}
      >
        {visible ? 'BYQ labels: ON' : 'BYQ labels'}
      </button>
    </div>
  );
}

export default ByqLabelsToggle;
