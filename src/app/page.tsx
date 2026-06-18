import { Hero } from "@/components/sections/Hero";
import { OralSystemicHealth } from "@/components/sections/OralSystemicHealth";
import { DrBetts } from "@/components/sections/DrBetts";
import { ConciergeExperience } from "@/components/sections/ConciergeExperience";
import { Specialists } from "@/components/sections/Specialists";
import { Services } from "@/components/sections/Services";
import { SurgeryCenter } from "@/components/sections/SurgeryCenter";
import { SpecialNeeds } from "@/components/sections/SpecialNeeds";
import { PatientStories } from "@/components/sections/PatientStories";
import { Membership } from "@/components/sections/Membership";
import { AnxietyCenter } from "@/components/sections/AnxietyCenter";
import { OfficeTour } from "@/components/sections/OfficeTour";
import { Payment } from "@/components/sections/Payment";
import { PatientJourney } from "@/components/sections/PatientJourney";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <OralSystemicHealth />
      <DrBetts />
      <ConciergeExperience />
      <Specialists />
      <Services />
      <SurgeryCenter />
      <SpecialNeeds />
      <PatientStories />
      <Membership />
      <AnxietyCenter />
      <OfficeTour />
      <Payment />
      <PatientJourney />
      <FinalCTA />
    </>
  );
}
