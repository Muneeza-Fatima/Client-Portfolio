"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll position instantly on route change.
    // Avoid smooth scrolling here to prevent scroll animation
    // conflicts and mobile/Vercel scroll lag.
    const frame = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return <div className="min-h-screen">{children}</div>;
}