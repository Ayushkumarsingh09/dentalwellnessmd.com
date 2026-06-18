import Image from "next/image";
import { images } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const surgeryFeatures = [
  "Dental implants & full mouth rehabilitation",
  "Wisdom teeth & complex extractions",
  "Bone grafting & sinus surgery",
  "Biopsies & oral pathology",
  "IV sedation for surgical comfort",
  "Board-certified OMFS surgeon on staff",
];

export function SurgeryCenter() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <Image
          src={images.office[1]}
          alt="Advanced surgery center"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </div>

      <div className="section-padding relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold mb-4">
              Surgical Excellence
            </p>
            <div className="gold-accent-line mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight">
              The Implant &amp; Surgical
              <br />
              <span className="text-gold-light">Excellence Center</span>
            </h2>
            <p className="mt-6 text-white/75 leading-relaxed text-lg max-w-lg">
              State-of-the-art technology and techniques that maximize outcomes
              and make your recovery seamless. From single implants to full mouth
              rehabilitations — your experience will be the best it can be.
            </p>

            <ul className="mt-8 space-y-3">
              {surgeryFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-white/80 text-sm"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold text-xs">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="#team" variant="primary">
                Meet Our Surgery Team
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={images.drStanhope}
                  alt="Dr. Colin J. Stanhope, Oral Surgeon"
                  fill
                  className="object-cover object-top"
                  sizes="25vw"
                />
              </div>
              <div className="flex flex-col gap-4 pt-8">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={images.drBetts}
                    alt="Dr. Kelly Betts, surgical dentistry"
                    fill
                    className="object-cover object-top"
                    sizes="25vw"
                  />
                </div>
                <div className="glass-card-dark rounded-2xl p-5">
                  <p className="font-display text-2xl text-gold-light">DDS, MD</p>
                  <p className="text-white/70 text-sm mt-1">
                    Board-certified Oral & Maxillofacial Surgeon
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
