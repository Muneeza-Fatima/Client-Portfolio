import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Experience from "@/components/Experiences/Experience";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Badar Ul Haq's professional experience across cybersecurity, real estate, leadership and business development.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#061522]">
        <Experience />
        <Footer />
      </main>
    </>
  );
}
