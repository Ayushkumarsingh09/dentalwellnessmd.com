import { reviews } from "@/lib/constants";
import { GlassCard, SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function PatientStories() {
  return (
    <section id="reviews" className="section-padding bg-beige-light">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Patient Success Stories"
            title="Trusted By Many"
            description="Real stories from patients who found comfort, confidence, and life-changing care at Integrative Dental Wellness."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 100}>
              <GlassCard className="h-full flex flex-col">
                <span className="inline-block self-start rounded-full bg-sage/10 px-4 py-1 text-xs font-medium text-sage-dark">
                  {review.highlight}
                </span>
                <blockquote className="mt-5 flex-1">
                  <p className="font-display text-xl md:text-2xl text-charcoal leading-relaxed italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </blockquote>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-sage/20 flex items-center justify-center text-sage-dark font-medium text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-charcoal text-sm">{review.name}</p>
                    <p className="text-xs text-charcoal-soft">Verified Patient</p>
                  </div>
                </footer>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
