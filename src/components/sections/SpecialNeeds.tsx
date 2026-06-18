import Image from "next/image";
import { images } from "@/lib/constants";
import { GlassCard, SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const highlights = [
  "Compassionate care for all abilities",
  "Clinical faculty expertise in special needs dentistry",
  "Inclusive treatment for every age",
  "Family-centered support and guidance",
  "Sensory-friendly, patient-paced appointments",
];

export function SpecialNeeds() {
  return (
    <section className="section-padding wellness-gradient relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <SectionHeader
              eyebrow="A Signature Differentiator"
              title="Special Needs Excellence"
              description="Ever since Dr. Betts was a dental assistant, she has been passionate about caring for patients with special needs and their families. Our entire team is fully prepared to provide compassionate dentistry for patients of all ages with unique physical, medical, developmental, or cognitive conditions."
              align="left"
            />

            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage text-xs">
                    ♥
                  </span>
                  <span className="text-charcoal-soft">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-sage/10" />
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={images.team}
                  alt="Integrative Dental Wellness team"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <GlassCard className="absolute -bottom-6 -left-6 max-w-xs !p-5 hidden md:block">
                <p className="font-display text-lg text-sage-dark">
                  University of Maryland
                </p>
                <p className="text-xs text-charcoal-soft mt-1">
                  Special Needs & Geriatrics Clinical Faculty
                </p>
              </GlassCard>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
