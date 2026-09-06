"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroImage({
  isInView = true,
}: {
  // Whether the parent Hero section is currently visible. The two
  // infinitely-repeating animations below (the rotating border shine and
  // the pulsing ring) are paused while the hero is scrolled off-screen so
  // they stop competing with scroll rendering for no visible benefit.
  isInView?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const motionEnabled = !shouldReduceMotion && isInView;

  return (
    <div className="relative w-full max-w-[520px] lg:ml-auto">
      {/* =====================================================
          BACKGROUND DEPTH
      ===================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -inset-8
          rounded-[44px]
          bg-[#A78BFA]/[0.035]
          blur-[70px]
        "
      />

      {/* =====================================================
          PREMIUM IMAGE FRAME
      ===================================================== */}
      <div className="relative rounded-[32px] p-[1.5px] sm:rounded-[38px]">
        {/* ---------------------------------------------------
            CONTINUOUS BORDER SHINE
            ONLY THE BORDER — NEVER OVER THE IMAGE
        --------------------------------------------------- */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -inset-[1px]
            overflow-hidden
            rounded-[33px]
            sm:rounded-[39px]
          "
        >
          {motionEnabled ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[190%]
                w-[190%]
                -translate-x-1/2
                -translate-y-1/2
                bg-[conic-gradient(from_0deg,transparent_0deg,transparent_305deg,rgba(103,232,249,0.15)_320deg,#67E8F9_333deg,#FFFFFF_342deg,#A78BFA_350deg,transparent_360deg)]
              "
            />
          ) : (
            <div
              className="
                absolute
                inset-0
                rounded-[33px]
                border
                border-white/20
                sm:rounded-[39px]
              "
            />
          )}
        </div>

        {/* =================================================
            IMAGE
        ================================================= */}
        <div
          className="
            relative
            aspect-[4/5]
            w-full
            overflow-hidden
            rounded-[31px]
            bg-[#24272B]
            shadow-[0_35px_90px_rgba(0,0,0,0.38)]
            sm:rounded-[37px]
          "
        >
          <Image
            src="/images/ceo/badar-ul-haq.jpeg"
            alt="Badar Ul Haq — Founder & CEO"
            fill
            priority
            className="object-cover object-center"
          />

          {/* -------------------------------------------------
              EDITORIAL CONTRAST
          ------------------------------------------------- */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#101216]/35
              via-transparent
              to-[#FFFFFF]/[0.025]
            "
          />

          {/* -------------------------------------------------
              SUBTLE TOP REFLECTION
          ------------------------------------------------- */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-8
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/25
              to-transparent
            "
          />

          {/* -------------------------------------------------
              INNER EDGE
          ------------------------------------------------- */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[31px]
              ring-1
              ring-inset
              ring-white/[0.11]
              sm:rounded-[37px]
            "
          />
        </div>

        {/* =================================================
            STATIC LUXURY FRAME
        ================================================= */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[32px]
            border
            border-white/[0.15]
            sm:rounded-[38px]
          "
        />

        {/* =================================================
            SOFT EDGE LIGHT
            ONLY AROUND BORDER
        ================================================= */}
        {motionEnabled && (
          <motion.div
            aria-hidden="true"
            animate={{
              opacity: [0.25, 0.6, 0.25],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[32px]
              ring-1
              ring-inset
              ring-[#C4B5FD]/20
              sm:rounded-[38px]
            "
          />
        )}
      </div>

      {/* =====================================================
          SMALL EXECUTIVE ACCENT
      ===================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-3
          right-8
          h-px
          w-20
          bg-gradient-to-r
          from-transparent
          via-[#67E8F9]/50
          to-transparent
          blur-[0.5px]
        "
      />
    </div>
  );
}