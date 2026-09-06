import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Portfolio",
  robots: { index: false, follow: true },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 pb-20 pt-40">
        <h1 className="text-6xl font-medium tracking-tight">
          Experience
        </h1>
      </main>
    </>
  );
}
