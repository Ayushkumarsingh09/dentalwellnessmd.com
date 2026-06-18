import { membershipFeatures, site } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GlassCard, SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Membership() {
  return (
    <section className="section-padding bg-white-soft relative overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="No Insurance? No Problem."
            title="Your Wellness Membership"
            description="See how simple and affordable better oral health can be. Our membership plan is designed like a premium wellness subscription — not a discount program."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto max-w-lg">
            <GlassCard className="!p-0 overflow-hidden border-2 border-gold/20">
              <div className="sage-gradient px-8 py-6 text-center">
                <p className="text-xs uppercase tracking-widest text-white/70">
                  Integrative Dental Wellness
                </p>
                <h3 className="font-display text-3xl text-white mt-2">
                  Membership Plan
                </h3>
              </div>

              <div className="p-8">
                <ul className="space-y-4">
                  {membershipFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-charcoal-soft text-sm"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage text-xs">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 text-center">
                  <Button href={site.bookingUrl} className="w-full">
                    Learn More & Enroll
                  </Button>
                  <p className="mt-4 text-xs text-charcoal-soft">
                    Transparent pricing. No insurance hassles.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
