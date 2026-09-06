"use client";

import { MotionConfig } from "framer-motion";
import { useSyncExternalStore } from "react";

const getServerSnapshot = () => null;

const subscribe = () => {
  return () => {};
};

/**
 * Kept for compatibility with existing components.
 *
 * Scrolling is intentionally handled by the browser's
 * native scroll engine instead of Lenis.
 *
 * This prevents scroll locking, wheel lag, and conflicts
 * with Framer Motion on Vercel and mobile devices.
 */
export function useLenisInstance() {
  return useSyncExternalStore(
    subscribe,
    () => null,
    getServerSnapshot,
  );
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}