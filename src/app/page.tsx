import { Header } from "@/components/layout/header";
import { Hero } from "@/components/landing/hero";
import { CrisisSection } from "@/components/landing/crisis-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <CrisisSection />
        <HowItWorksSection />
      </main>
    </div>
  );
}
