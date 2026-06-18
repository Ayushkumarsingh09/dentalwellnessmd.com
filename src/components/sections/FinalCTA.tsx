import Image from "next/image";
import { images, site } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images.about}
          alt="Integrative Dental Wellness"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      <div className="section-padding relative mx-auto max-w-4xl text-center w-full">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-light mb-6">
            Begin Your Wellness Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            Invest In Your Health.
            <br />
            <span className="text-gold-light">Not Just Your Smile.</span>
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Experience integrative dentistry in Eldersburg, Maryland. Discover a
            better way to care for your health — where exceptional dentistry
            meets whole-body wellness.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={site.bookingUrl}>Book Appointment</Button>
            <Button href={`tel:${site.phone.replace(/\D/g, "")}`} variant="outline">
              Call {site.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
