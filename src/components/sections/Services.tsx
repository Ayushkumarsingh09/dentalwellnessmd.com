import { services } from "@/lib/constants";
import { GlassCard, SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section id="services" className="section-padding bg-white-soft">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Smile & Wellness Services"
            title="Life Outcomes, Not Procedures"
            description="We don't sell cleanings and crowns. We deliver smile confidence, better function, comfortable care, and total wellness."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.outcome} delay={i * 80}>
              <GlassCard className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <p className="text-xs font-medium uppercase tracking-widest text-sage">
                  {service.category}
                </p>
                <h3 className="mt-3 font-display text-2xl md:text-3xl text-charcoal group-hover:text-sage-dark transition-colors">
                  {service.outcome}
                </h3>
                <p className="mt-4 text-charcoal-soft leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-sage/30 to-transparent" />
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
