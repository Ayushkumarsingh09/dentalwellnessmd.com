import Image from "next/image";
import { images, site } from "@/lib/constants";

export function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src={images.logo}
              alt={site.name}
              width={220}
              height={63}
              className="mb-6 h-12 w-auto brightness-0 invert"
            />
            <p className="max-w-md text-white/70 leading-relaxed">
              {site.tagline}. Experience integrative dentistry in Eldersburg,
              Maryland — where oral health meets overall wellness.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-gold">
              Visit Us
            </h3>
            <address className="not-italic text-white/70 leading-relaxed">
              {site.address}
              <br />
              <a
                href={`tel:${site.phone.replace(/\D/g, "")}`}
                className="mt-2 inline-block text-white hover:text-gold transition-colors"
              >
                {site.phone}
              </a>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
          <p className="text-xs tracking-wide uppercase">
            Eldersburg, Maryland
          </p>
        </div>
      </div>
    </footer>
  );
}
