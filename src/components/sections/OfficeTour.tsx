"use client";

import Image from "next/image";
import { useState } from "react";
import { images } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function OfficeTour() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Luxury Office Experience"
            title="A Wellness Retreat, Not A Clinic"
            description="Step inside a space designed for calm, comfort, and premium care. Every detail reflects our commitment to your wellness experience."
            light
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl">
            <Image
              src={images.office[active]}
              alt={`Integrative Dental Wellness office view ${active + 1}`}
              fill
              className="object-cover transition-opacity duration-700"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-3">
          {images.office.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              className={`relative aspect-[4/3] overflow-hidden rounded-lg transition-all duration-300 ${
                active === i
                  ? "ring-2 ring-gold scale-105"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Office thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="150px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
