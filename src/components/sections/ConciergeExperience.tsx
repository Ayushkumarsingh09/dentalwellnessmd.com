import { conciergeSteps } from "@/lib/constants";
import { GlassCard, SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function ConciergeExperience() {
  return (
    <section className="section-padding sage-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Concierge Dental Experience"
            title="You Never Navigate Dentistry Alone"
            description="Rather than getting lost in the patient shuffle, our team treats you like an individual from the moment you walk through our doors — guiding you step-by-step like your own dental concierge."
            light
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {conciergeSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <GlassCard dark className="h-full !text-white">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold text-sm font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-2xl text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-white/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
