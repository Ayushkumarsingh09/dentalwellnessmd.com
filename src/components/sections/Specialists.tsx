import Image from "next/image";
import { doctors } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Specialists() {
  return (
    <section id="team" className="section-padding bg-beige-light relative">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            eyebrow="World-Class Care Team"
            title="Meet The Specialists"
            description="A luxury medical team united by one philosophy — whole-body wellness through exceptional dentistry."
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, i) => (
            <Reveal key={doctor.name} delay={i * 80}>
              <article
                className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  doctor.featured ? "lg:row-span-1 ring-2 ring-gold/30" : ""
                }`}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-xl text-white">{doctor.name}</h3>
                    <p className="text-gold-light text-sm">{doctor.credentials}</p>
                    <p className="text-white/70 text-xs mt-1">{doctor.role}</p>
                  </div>
                </div>
                <div className="p-5">
                  <ul className="space-y-2">
                    {doctor.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-xs text-charcoal-soft"
                      >
                        <span className="mt-1 h-1 w-1 rounded-full bg-sage shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
