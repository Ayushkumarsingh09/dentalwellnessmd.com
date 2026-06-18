"use client";

import { useState } from "react";
import { healthConnections } from "@/lib/constants";
import { GlassCard, SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  heart: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  pulse: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  moon: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  ),
  sparkle: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
  leaf: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
};

export function OralSystemicHealth() {
  const [active, setActive] = useState(0);

  return (
    <section id="philosophy" className="section-padding wellness-gradient relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 curve-bottom bg-white-soft -mt-1" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Our Signature Philosophy"
            title="Your Mouth Is Connected To Your Whole Body"
            description="Oral health concerns don't stay in the mouth. We view dental care as integrative and whole-body — explaining how your dental health affects your overall wellness."
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <Reveal delay={100}>
            <div className="relative mx-auto max-w-md">
              <div className="relative aspect-square">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-sage/30 animate-pulse-soft" />
                <div className="absolute inset-8 rounded-full border border-sage/20" />
                <div className="absolute inset-16 rounded-full bg-sage/10 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-display text-3xl text-sage-dark">Mouth</p>
                    <div className="my-2 h-8 w-px bg-gold mx-auto" />
                    <p className="font-display text-3xl text-sage-dark">Body</p>
                    <div className="my-2 h-8 w-px bg-gold mx-auto" />
                    <p className="font-display text-3xl text-gold">Health</p>
                  </div>
                </div>

                {healthConnections.map((item, i) => {
                  const angle = (i / healthConnections.length) * 360 - 90;
                  const rad = (angle * Math.PI) / 180;
                  const x = 50 + 42 * Math.cos(rad);
                  const y = 50 + 42 * Math.sin(rad);
                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActive(i)}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-3 transition-all duration-300 ${
                        active === i
                          ? "bg-sage text-white scale-110 shadow-lg shadow-sage/30"
                          : "glass-card text-sage hover:scale-105"
                      }`}
                      style={{ left: `${x}%`, top: `${y}%` }}
                      aria-label={item.title}
                    >
                      {icons[item.icon]}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <GlassCard className="!p-8 md:!p-10">
              <p className="text-xs font-medium uppercase tracking-widest text-sage mb-3">
                {healthConnections[active].title}
              </p>
              <h3 className="font-display text-3xl text-charcoal mb-4">
                The Oral-Systemic Connection
              </h3>
              <p className="text-charcoal-soft leading-relaxed text-lg">
                {healthConnections[active].description}
              </p>

              <div className="mt-8 flex gap-2">
                {healthConnections.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      active === i ? "w-8 bg-sage" : "w-4 bg-sage/20"
                    }`}
                    aria-label={`View connection ${i + 1}`}
                  />
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
