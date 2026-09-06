import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Expertise from "@/components/Expertise/Expertise";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Explore Badar Ul Haq's areas of expertise: cyber security, artificial intelligence, digital analytics and digital marketing.",
  alternates: { canonical: "/expertise" },
};

export default function ExpertisePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#071522]">
        <Expertise />
        <Footer />
      </main>
    </>
  );
}
