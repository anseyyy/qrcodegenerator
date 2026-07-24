import AboutHero from "@/components/about/AboutHero";
import FeatureCards from "@/components/about/FeatureCards";
import TeamSection from "@/components/about/TeamSection";
import FooterCTA from "@/components/about/FooterCTA";

export const metadata = {
  title: "About Us - Adeogram",
  description: "Meet the team behind Adeogram and explore our mission to build simple, useful, and free open-source tools for the world.",
};

export default function About() {
  return (
    <div className="flex-grow flex flex-col bg-white">
      {/* Hero Section */}
      <AboutHero />

      {/* Feature Value Cards Grid */}
      <FeatureCards />

      {/* Meet the Team Grid */}
      <TeamSection />

      {/* Dark Footer Call To Action */}
      <FooterCTA />
    </div>
  );
}
