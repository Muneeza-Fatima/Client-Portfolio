import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import AboutHero from "@/components/about/AboutHero";
import FounderStory from "@/components/about/FounderStory";
import Mindset from "@/components/about/Mindset";
import Leadership from "@/components/about/Leadership";
import Principles from "@/components/about/Principles";
import BeyondBusiness from "@/components/about/BeyondBusiness";
import Vision from "@/components/about/Vision";
import AboutCTA from "@/components/about/AboutCTA";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Badar Ul Haq's founder story, mindset, principles and vision as a cybersecurity professional and business leader.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#071522]">
        <AboutHero />
        <FounderStory />
        <Mindset />
        <Leadership />
        <Principles />
        <BeyondBusiness />
        <Vision />
        <AboutCTA />
        <Footer />
      </main>
    </>
  );
}
