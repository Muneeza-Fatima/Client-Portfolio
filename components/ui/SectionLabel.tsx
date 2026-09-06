interface SectionLabelProps {
  number?: string;
  children: React.ReactNode;
}

export default function SectionLabel({
  number,
  children,
}: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
      {number && (
        <span className="text-[var(--accent)]">
          {number}
        </span>
      )}

      <span className="h-px w-8 bg-[var(--border)]" />

      <span>{children}</span>
    </div>
  );
}