import { type ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-14 ${alignClass}`}>
      {eyebrow && (
        <p
          className={`text-xs font-medium uppercase tracking-[0.25em] mb-4 ${
            light ? "text-gold-light" : "text-sage"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <div className={`gold-accent-line mb-6 ${align === "center" ? "mx-auto" : ""}`} />
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? "text-white/80" : "text-charcoal-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function GlassCard({
  children,
  className = "",
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 md:p-8 ${dark ? "glass-card-dark" : "glass-card"} ${className}`}
    >
      {children}
    </div>
  );
}
