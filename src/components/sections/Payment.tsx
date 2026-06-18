import { paymentFeatures, site } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GlassCard, SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Payment() {
  return (
    <section className="section-padding bg-white-soft">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Flexible Payment Experience"
              title="Stress-Free Smiles"
              description="We believe cost should never stand between you and the care you deserve. Cherry financing gives you simple, transparent payment options so you can start treatment right away."
              align="left"
            />

            <ul className="space-y-3">
              {paymentFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-charcoal-soft"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold text-xs">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <GlassCard className="!p-8 md:!p-10 text-center border border-gold/10">
              <p className="text-xs uppercase tracking-widest text-sage">
                Primary Financing Partner
              </p>
              <h3 className="font-display text-4xl text-charcoal mt-3">
                Cherry
              </h3>
              <p className="mt-4 text-charcoal-soft leading-relaxed">
                Apply in seconds. Get an instant decision. Choose a payment plan
                that fits your budget — whether you&apos;re planning cosmetic,
                restorative, or comprehensive dental care.
              </p>
              <p className="mt-6 font-display text-xl text-sage-dark italic">
                Apply in Seconds. Smile for Years.
              </p>
              <Button href={site.bookingUrl} className="mt-8">
                Get Started
              </Button>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
