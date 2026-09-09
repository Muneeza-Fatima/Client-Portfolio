"use client";

import Image from "next/image";

export default function HeroImage({
  isInView = true,
}: {
  isInView?: boolean;
}) {
  return (
    <div className="relative w-full max-w-[570px] lg:ml-[24px] lg:mr-auto lg:mt-[12px]">
      {/* FRAME */}
      <div
        className="
          relative
          overflow-visible
          rounded-[30px]
          p-[1.5px]
          sm:rounded-[34px]
        "
      >
        {/* INNER SURFACE */}
        <div
          className="
            relative
            z-10
            aspect-[4/5]
            w-full
            overflow-hidden
            rounded-[29px]
            bg-[#24272B]
            shadow-[0_24px_60px_rgba(0,0,0,0.32)]
            sm:rounded-[33px]
          "
        >
          <Image
            src="/images/ceo/badar-ul-haq.jpeg"
            alt="Badar Ul Haq — Founder & CEO"
            fill
            priority
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 72vw, 570px"
            className="object-cover object-top scale-[1.12] -translate-y-[2px]"
          />

          {/* IMAGE OVERLAY */}
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

          {/* INNER BORDER SHINE */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[29px]
              ring-1
              ring-inset
              ring-[#FFFFFF]/[0.18]
              sm:rounded-[33px]
            "
          />

          {/* CYAN EDGE HIGHLIGHT */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[29px]
              border
              border-[#67E8F9]/[0.24]
              shadow-[inset_0_0_14px_rgba(103,232,249,0.09)]
              sm:rounded-[33px]
            "
          />
        </div>

        {/* BACKGROUND-BLENDED EDGE */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-20
            rounded-[30px]
            ring-1
            ring-inset
            ring-[#24272B]/70
            sm:rounded-[34px]
          "
        />

        {/* OUTER LIGHT SHINE */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -inset-[1px]
            z-30
            rounded-[31px]
            ring-1
            ring-inset
            ring-[#67E8F9]/[0.18]
            shadow-[0_0_18px_rgba(103,232,249,0.09)]
            sm:rounded-[35px]
          "
        />
      </div>

      {/* SMALL BOTTOM ACCENT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-3
          right-7
          h-px
          w-16
          bg-gradient-to-r
          from-transparent
          via-[#67E8F9]/35
          to-transparent
          opacity-60
          shadow-[0_0_5px_rgba(103,232,249,0.20)]
        "
      />
    </div>
  );
}