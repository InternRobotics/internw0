import {
  BenchmarksSection,
  BibtexSection,
  DataSection,
  ExperimentsSection,
  IntroductionSection,
  ModelSection,
} from "@/components/research-page/project-sections";
import { HeroSection } from "@/components/research-page/hero-section";
import { SiteHeader } from "@/components/site/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <IntroductionSection />
        <ModelSection />
        <DataSection />
        <BenchmarksSection />
        <ExperimentsSection />
        <BibtexSection />
      </main>
    </>
  );
}
