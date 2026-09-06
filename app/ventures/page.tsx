import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Ventures from "@/components/ventures/ventures";
import Connect from "@/components/connect/Connect";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Discover Badar Ul Haq's ventures spanning international trading, technology & AI, and real estate.",
  alternates: { canonical: "/ventures" },
};

export default function VenturesPage() {
  return (
    <>
      <Navbar />
      <Ventures />
      <Connect />
      <Footer />
    </>
  );
}
