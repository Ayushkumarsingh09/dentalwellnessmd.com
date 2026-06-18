import Image from "next/image";
import { images } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const credentials = [
  { value: "1,200+", label: "Hours of Advanced Education" },
  { value: "25+", label: "Years of Clinical Excellence" },
  { value: "1,000+", label: "Invisalign Patients Treated" },
  { value: "National", label: "Faculty Teaching Dentists" },
];

export function DrBetts() {
  return (
    <section id="dr-betts" className="section-padding bg-white-soft relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sage/20 to-gold/10" />
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={images.drBetts}
                  alt="Dr. Kelly Betts, DDS"
                  width={819}
                  height={1024}
                  className="w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 max-w-[200px] hidden md:block">
                <p className="font-display text-2xl text-sage-dark">MS, DDS, FAGD</p>
                <p className="text-xs text-charcoal-soft mt-1">Owner & General Dentist</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="order-1 lg:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-sage mb-4">
              Meet Your Doctor
            </p>
            <div className="gold-accent-line mb-6" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight">
              Dr. Kelly Betts
            </h2>
            <p className="mt-2 text-gold font-medium tracking-wide">
              The Heart of Integrative Dental Wellness
            </p>

            <p className="mt-6 text-charcoal-soft leading-relaxed text-lg">
              Dr. Betts brings a rare combination of surgical expertise, integrative
              philosophy, and genuine compassion. With over 1,200 hours of advanced
              education beyond her dental degree, she teaches dentists across North
              America advanced techniques in implants, sinus surgery, bone grafts,
              and IV sedation.
            </p>

            <p className="mt-4 text-charcoal-soft leading-relaxed">
              As Clinical Faculty at the University of Maryland School of Dentistry
              Special Needs & Geriatrics Clinic, she advocates for patients of all
              abilities. Her mission: empower every patient with education, comfort,
              and care that honors the connection between oral and whole-body health.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {credentials.map((cred) => (
                <div key={cred.label} className="glass-card rounded-xl p-4 text-center">
                  <p className="font-display text-2xl md:text-3xl text-sage-dark">
                    {cred.value}
                  </p>
                  <p className="text-xs text-charcoal-soft mt-1">{cred.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="#team" variant="ghost">
                Meet the Full Team →
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
