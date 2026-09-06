import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Introduction from "@/components/intro/Introduction";
import Expertise from "@/components/expertieshome/Experties";
import Experience from "@/components/experiencehome/Experience";
import Ventures from "@/components/ventureshome/ventures";
import Connect from "@/components/connect/Connect";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* =========================================================
            01 — HERO
        ========================================================= */}
        <Hero />

        {/* =========================================================
            02 — INTRODUCTION
        ========================================================= */}
        <Introduction />

        {/* =========================================================
            03 — EXPERTISE
        ========================================================= */}
        <Expertise />

        {/* =========================================================
            04 — EXPERIENCE
        ========================================================= */}
        <Experience />

        {/* =========================================================
            05 — VENTURES
        ========================================================= */}
        <Ventures />

        {/* =========================================================
            06 — CONNECT
        ========================================================= */}
        <Connect />

        {/* =========================================================
            07 — FOOTER
        ========================================================= */}
        <Footer />
      </main>
    </>
  );
}
