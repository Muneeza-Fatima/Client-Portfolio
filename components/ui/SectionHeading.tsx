interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p
          className={`mb-5 text-xs font-medium uppercase tracking-[0.2em] ${
            dark ? "text-white/50" : "text-[var(--muted)]"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl ${
          dark ? "text-white" : "text-[var(--foreground)]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg ${
            dark ? "text-white/60" : "text-[var(--muted)]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}