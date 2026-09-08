"use client";

import Image from "next/image";

export default function HeroImage({
  isInView = true,
}: {
  isInView?: boolean;
}) {
  return (
    <div className="relative w-full max-w-[570px] lg:ml-[24px] lg:mr-auto lg:mt-[12px]">
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -inset-5
          rounded-[40px]
          bg-[#67E8F9]/[0.055]
          blur-[50px]
        "
      />

      <div className="relative rounded-[30px] p-[1.5px] sm:rounded-[34px]">
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -inset-[2px]
            overflow-hidden
            rounded-[31px]
            bg-[conic-gradient(from_210deg,rgba(103,232,249,0.12),rgba(103,232,249,0.95),rgba(255,255,255,1),rgba(103,232,249,0.55),rgba(167,139,250,0.7),rgba(255,255,255,0.95),rgba(103,232,249,0.18),rgba(103,232,249,0.12))]
            sm:rounded-[35px]
          "
        />

        <div
          className="
            relative
            aspect-[4/5]
            w-full
            overflow-hidden
            rounded-[29px]
            bg-[#24272B]
            shadow-[0_24px_60px_rgba(0,0,0,0.32),0_0_30px_rgba(103,232,249,0.10)]
            sm:rounded-[33px]
          "
        >
          <Image
            src="/images/ceo/badar-ul-haq.jpeg"
            alt="Badar Ul Haq — Founder & CEO"
            fill
            priority
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 72vw, 570px"
            className="object-cover object-top scale-[1.12]"
          />

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

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-7
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/60
              to-transparent
              shadow-[0_0_10px_rgba(255,255,255,0.55)]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[29px]
              ring-1
              ring-inset
              ring-white/[0.22]
              shadow-[inset_0_0_18px_rgba(103,232,249,0.08)]
              sm:rounded-[33px]
            "
          />
        </div>

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[30px]
            border
            border-white/[0.30]
            shadow-[0_0_14px_rgba(103,232,249,0.16)]
            sm:rounded-[34px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[30px]
            ring-1
            ring-inset
            ring-[#67E8F9]/[0.32]
            shadow-[inset_0_0_20px_rgba(103,232,249,0.09)]
            sm:rounded-[34px]
          "
        />
      </div>

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
          via-[#67E8F9]/70
          to-transparent
          opacity-90
          shadow-[0_0_8px_rgba(103,232,249,0.55)]
        "
      />
    </div>
  );
}