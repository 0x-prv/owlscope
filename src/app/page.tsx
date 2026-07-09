import Hero from "@/components/home/Hero";
import FeatureCards from "@/components/home/FeatureCards";
import MissionSection from "@/components/home/MissionSection";
import ResearchPreview from "@/components/home/ResearchPreview";
import RoadmapPreview from "@/components/home/RoadmapPreview";
import PlatformPreview from "@/components/home/PlatformPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <MissionSection />
      <ResearchPreview />
      <RoadmapPreview />
      <PlatformPreview />
    </>
  );
}