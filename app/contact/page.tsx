import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Badar Ul Haq for business, cybersecurity, or partnership inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Contact />
      </main>

      <Footer />
    </>
  );
}
