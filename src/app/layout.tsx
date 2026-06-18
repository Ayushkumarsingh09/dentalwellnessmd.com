import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/constants";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | Whole-Body Wellness Dentistry in Eldersburg, MD`,
  description:
    "Experience integrative dentistry designed around whole-body wellness. Dr. Kelly Betts and team offer implants, Invisalign, sedation dentistry, and concierge-level care in Eldersburg, Maryland.",
  keywords: [
    "integrative dentistry",
    "Eldersburg dentist",
    "Dr Kelly Betts",
    "dental implants Maryland",
    "Invisalign Eldersburg",
    "sedation dentistry",
    "whole body wellness dentistry",
  ],
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: "https://dentalwellnessmd.com",
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
