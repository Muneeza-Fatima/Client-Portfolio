import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Insights from "@/components/Insights/Insights";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Insights and perspectives from Badar Ul Haq on cybersecurity, technology and business.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Insights />
      </main>
      <Footer />
    </>
  );
}
