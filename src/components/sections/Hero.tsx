import Image from "next/image";
import { heroServices, images, site } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Integrative Dental Wellness office"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold-light animate-fade-up">
            Integrative Dental Wellness · Eldersburg, MD
          </p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white animate-fade-up">
            Beautiful Smiles.
            <br />
            <span className="text-gold-light">Better Health.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/85 leading-relaxed animate-fade-up">
            Dentistry designed around whole-body wellness. Experience
            integrative care, personalized treatment, and concierge-level
            service — because your mouth is connected to your whole body.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up">
            <Button href={site.bookingUrl}>Book Appointment</Button>
            <Button href="#dr-betts" variant="outline">
              Meet Dr. Betts
            </Button>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          {heroServices.map((service) => (
            <span
              key={service}
              className="glass-card rounded-full px-5 py-2.5 text-xs font-medium tracking-wide text-charcoal"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
