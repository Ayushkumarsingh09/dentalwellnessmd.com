"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { images, site } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Dr. Betts", href: "#dr-betts" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src={images.logo}
            alt={site.name}
            width={200}
            height={57}
            className={`h-10 w-auto transition-all duration-300 md:h-12 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                scrolled
                  ? "text-charcoal-soft hover:text-sage"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href={site.bookingUrl}
            variant={scrolled ? "primary" : "outline"}
            className="!px-6 !py-2.5 !text-xs"
          >
            Book Appointment
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className={`relative z-10 flex flex-col gap-1.5 p-2 lg:hidden ${
            scrolled || menuOpen ? "text-charcoal" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 lg:hidden">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-display text-charcoal"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href={site.bookingUrl} className="mt-4 w-full">
              Book Appointment
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
