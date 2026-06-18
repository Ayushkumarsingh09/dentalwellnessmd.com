import { patientJourney } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function PatientJourney() {
  return (
    <section className="section-padding wellness-gradient relative">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="Your New Patient Journey"
            title="From First Visit To Lifelong Wellness"
            description="A beautiful, guided path designed around you — not around a dental template."
          />
        </Reveal>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-sage/20 md:-translate-x-px hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {patientJourney.map((step, i) => (
              <Reveal key={step.step} delay={i * 100}>
                <div
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ${i > 0 ? "md:mt-12" : ""}`}
                >
                  <div className="hidden md:block md:w-1/2" />

                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-sage text-white font-display text-lg z-10">
                    {step.step}
                  </div>

                  <div className="md:w-1/2 pl-20 md:pl-0">
                    <div className="glass-card rounded-2xl p-6 md:p-8">
                      <h3 className="font-display text-2xl text-charcoal">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-charcoal-soft text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
