import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-gold text-charcoal hover:bg-gold-light shadow-lg shadow-gold/20",
  secondary:
    "bg-sage text-white hover:bg-sage-dark shadow-lg shadow-sage/20",
  outline:
    "border-2 border-white/80 text-white hover:bg-white/10 backdrop-blur-sm",
  ghost:
    "border border-sage/30 text-sage-dark hover:bg-sage/10",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
