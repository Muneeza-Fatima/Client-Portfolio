import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Leadership from "@/components/leadership/Leadership";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Badar Ul Haq's leadership philosophy and track record across teams and ventures.",
  alternates: { canonical: "/leadership" },
};

export default function LeadershipPage() {
  return (
    <>
      <Navbar />

      <main>
        <Leadership />
      </main>

      <Footer />
    </>
  );
}
