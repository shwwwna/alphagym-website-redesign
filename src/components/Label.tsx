function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[color:var(--cream-88)]">
      <span className="w-2 h-2 rounded-sm bg-[color:var(--accent)]" />
      <span className="font-mono-label">{children}</span>
    </div>
  );
}

export default Label;
