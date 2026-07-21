// Visible dev-only label showing which BYQ section a block is sourced from
function ByqTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute top-3 left-3 z-20 px-2 py-1 rounded-md bg-[#0a0a0bcc] border border-[color:var(--accent)] text-[color:var(--accent)] text-[10px] font-mono tracking-wide pointer-events-none">
      byq: {children}
    </span>
  );
}

export default ByqTag;
