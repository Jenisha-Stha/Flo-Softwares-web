import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";

import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ServicesSection from "@/components/ServicesSection";
import PartnershipSection from "@/components/PartnershipSection";
import TestimonialSection from "@/components/TestimonialSection";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PartnershipSection />
      <ProjectsSection />
      <TestimonialSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
