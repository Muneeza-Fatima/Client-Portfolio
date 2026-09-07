"use client";

import Image from "next/image";

export default function HeroImage({
  isInView = true,
}: {
  isInView?: boolean;
}) {
  return (
    <div className="relative w-full max-w-[520px] lg:ml-auto">
      {/* =====================================================
          BACKGROUND DEPTH
          Static blur only — no animation/repaint loop
      ===================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -inset-6
          rounded-[44px]
          bg-[#A78BFA]/[0.028]
          blur-[55px]
        "
      />

      {/* =====================================================
          PREMIUM IMAGE FRAME
      ===================================================== */}
      <div className="relative rounded-[32px] p-[1.5px] sm:rounded-[38px]">
        {/* ---------------------------------------------------
            STATIC BORDER LIGHT
            Replaces rotating conic-gradient animation
        --------------------------------------------------- */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -inset-[1px]
            overflow-hidden
            rounded-[33px]
            bg-[conic-gradient(from_210deg,rgba(103,232,249,0.05),rgba(103,232,249,0.65),rgba(255,255,255,0.82),rgba(167,139,250,0.45),rgba(255,255,255,0.08),rgba(103,232,249,0.05))]
            sm:rounded-[39px]
          "
        />

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
            shadow-[0_28px_70px_rgba(0,0,0,0.32)]
            sm:rounded-[37px]
          "
        >
          <Image
            src="/images/ceo/badar-ul-haq.jpeg"
            alt="Badar Ul Haq — Founder & CEO"
            fill
            priority
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 75vw, 520px"
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
            STATIC EDGE LIGHT
            No infinite animation
        ================================================= */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[32px]
            ring-1
            ring-inset
            ring-[#C4B5FD]/[0.16]
            sm:rounded-[38px]
          "
        />
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
          opacity-80
        "
      />
    </div>
  );
}