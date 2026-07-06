import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionSection from "@/components/about/MissionSection";
import ValuesSection from "@/components/about/ValuesSection";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import CTASection from "@/components/about/CTASection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <MissionSection />
      <ValuesSection />
      <WhyChooseUs />
      <CTASection />
    </main>
  );
}