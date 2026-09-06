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
    const resetScroll = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    const frame = requestAnimationFrame(resetScroll);

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return <div className="min-h-screen">{children}</div>;
}