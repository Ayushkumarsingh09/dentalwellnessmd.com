import { anxietyFeatures } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GlassCard, SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function AnxietyCenter() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-beige-light via-white-soft to-sage/5" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Dental Anxiety Center"
              title="You Deserve To Feel Comfortable"
              description="If you've avoided the dentist for years, you're not alone — and you're not judged here. Our patients consistently tell us they felt completely at ease from their first phone call to leaving with their treatment plan."
              align="left"
            />

            <div className="space-y-3">
              {anxietyFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl bg-white/60 px-4 py-3 backdrop-blur-sm"
                >
                  <span className="text-sage">◆</span>
                  <span className="text-charcoal-soft text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="#contact" variant="secondary">
                Talk to Our Concierge Team
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <GlassCard className="!p-8 md:!p-10 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sage/10">
                <svg
                  className="h-10 w-10 text-sage"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <p className="font-display text-2xl md:text-3xl text-charcoal italic leading-relaxed">
                &ldquo;It was like hanging out with friends. By the end of my
                visit, my anxiety was much lower.&rdquo;
              </p>
              <p className="mt-4 text-sm text-charcoal-soft">— J. Brock, Patient</p>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
