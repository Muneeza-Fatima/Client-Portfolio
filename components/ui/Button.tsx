import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "navy" | "outline";
}

export default function Button({
  children,
  href,
  variant = "navy",
}: ButtonProps) {
  const styles =
    variant === "navy"
      ? "bg-[var(--navy)] text-white hover:bg-[var(--navy-soft)]"
      : "border border-[var(--border)] bg-white text-[var(--navy)] hover:border-[var(--navy)]";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-4 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${styles}`}
    >
      <span>{children}</span>

      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}