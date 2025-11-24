import { HeroSection } from "@/components/hero/HeroSection";
import { BentoGrid } from "@/components/features/BentoGrid";
import { AudienceSegmenter } from "@/components/features/AudienceSegmenter";
import { TrustedBy } from "@/components/features/TrustedBy";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-rich-black min-h-screen selection:bg-electric-blue/30">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <BentoGrid />
      <AudienceSegmenter />
      <Footer />
    </main>
  );
}
