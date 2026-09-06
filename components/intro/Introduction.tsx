"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Introduction() {
  const shouldReduceMotion = useReducedMotion();
  const motionEnabled = !shouldReduceMotion;

  return (
    <section
      id="introduction"
      className="relative overflow-hidden bg-[#F4F6F5] py-14 text-[#0B1F33] sm:py-18 lg:py-20"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-[180px] top-[8%] h-[360px] w-[360px] rounded-full bg-[#8FC7D8]/[0.055] blur-[110px]" />

        <div className="absolute -right-[180px] bottom-[5%] h-[360px] w-[360px] rounded-full bg-[#0B1F33]/[0.035] blur-[110px]" />

        <div className="absolute inset-0 opacity-[0.018] bg-[linear-gradient(rgba(11,31,51,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(11,31,51,0.55)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_78%,transparent)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(244,246,245,0.12)_45%,rgba(244,246,245,0.72)_100%)]" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* =======================================================
            SECTION LABEL
        ======================================================= */}

        <motion.div
          initial={motionEnabled ? { opacity: 0, y: 10 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-9 bg-[#0B1F33]/20 sm:w-11" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#0B1F33]/55 sm:text-[10px]">
            02 — Introduction
          </span>
        </motion.div>

        {/* =======================================================
            MAIN HEADING
        ======================================================= */}

        <motion.div
          initial={motionEnabled ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-7 max-w-[1200px] sm:mt-9 lg:mt-10"
        >
          <h2 className="m-0 overflow-visible pb-2 font-serif text-[clamp(2.45rem,5.5vw,6rem)] font-medium leading-[1.02] tracking-[-0.052em]">
            <span className="block">
              Building businesses with
            </span>

            <span className="block pb-1 text-[#0B1F33]">
              a long-term perspective.
            </span>
          </h2>
        </motion.div>

        {/* =======================================================
            CONTENT GRID
        ======================================================= */}

        <div className="mt-8 grid gap-8 border-t border-[#0B1F33]/10 pt-8 sm:mt-10 sm:pt-9 lg:mt-11 lg:grid-cols-[1fr_0.72fr] lg:gap-16 lg:pt-10">

          {/* LEFT CONTENT */}

          <motion.div
            initial={motionEnabled ? { opacity: 0, y: 15 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.1,
            }}
          >
            <p className="max-w-[760px] text-[16px] leading-7 tracking-[-0.015em] text-[#0B1F33]/75 sm:text-[19px] sm:leading-8">
              BADAR UL HAQ is a founder and business leader focused on
              building ventures where technology, innovation and
              international business come together.
            </p>

            <p className="mt-5 max-w-[720px] text-[13px] leading-6.5 text-[#0B1F33]/48 sm:text-[14px] sm:leading-7">
              His perspective has been shaped by experiences across
              technology, security, business development and leadership —
              bringing together different disciplines to approach complex
              opportunities with clarity and purpose.
            </p>

            <Link
              href="/about"
              className="group mt-7 inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.17em] text-[#0B1F33]"
            >
              <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-100 after:bg-[#0B1F33]/25 after:transition-transform after:duration-300 group-hover:after:scale-x-0">
                More About the Founder
              </span>
            </Link>
          </motion.div>

          {/* =====================================================
              LEADERSHIP CARD
          ===================================================== */}

          <motion.div
            initial={motionEnabled ? { opacity: 0, y: 15 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: 0.16,
            }}
            whileHover={motionEnabled ? { y: -5 } : undefined}
            className="group/card relative rounded-[22px] border border-[#0B1F33]/15 bg-white/60 p-5 shadow-[0_10px_35px_rgba(11,31,51,0.04)] backdrop-blur-sm transition-all duration-500 hover:border-[#0B1F33]/35 hover:shadow-[0_18px_48px_rgba(11,31,51,0.09)] sm:rounded-[24px] sm:p-7"
          >

            {/* Header */}

            <div className="flex items-center justify-between">
              <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#0B1F33]/50">
                Leadership Perspective
              </p>
            </div>

            {/* Divider */}

            <div className="mt-5 h-px w-full bg-[#0B1F33]/10" />

            {/* Principles */}

            <div className="mt-6 space-y-6">

              <Principle
                number="01"
                title="Think Long Term"
                description="Build decisions and relationships around sustainable value rather than short-term noise."
                motionEnabled={motionEnabled}
              />

              <Principle
                number="02"
                title="Stay Curious"
                description="Technology and markets evolve quickly. Continuous learning creates better opportunities."
                motionEnabled={motionEnabled}
              />

              <Principle
                number="03"
                title="Build With Purpose"
                description="The strongest ventures connect commercial opportunity with meaningful real-world impact."
                motionEnabled={motionEnabled}
              />

            </div>
          </motion.div>
        </div>

        {/* =======================================================
            CLOSING STATEMENT
        ======================================================= */}

        <motion.div
          initial={motionEnabled ? { opacity: 0, y: 14 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            delay: 0.12,
          }}
          className="mt-8 border-t border-[#0B1F33]/10 pt-6 sm:mt-10 sm:pt-7"
        >
          <p className="max-w-4xl font-serif text-[1.4rem] leading-[1.12] tracking-[-0.035em] text-[#0B1F33]/75 sm:text-[1.85rem] lg:text-[2.25rem]">
            Different experiences.
            <span className="text-[#0B1F33]/30">
              {" "}
              One long-term vision.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================================================
   PRINCIPLE
================================================================ */

function Principle({
  number,
  title,
  description,
  motionEnabled,
}: {
  number: string;
  title: string;
  description: string;
  motionEnabled: boolean;
}) {
  return (
    <div className="group flex gap-4">

      {/* =========================================================
          NAVY / CYAN MOVING RING
      ========================================================= */}

      <div className="relative mt-0.5 h-7 w-7 shrink-0">

        {/* Soft ambient glow */}

        {motionEnabled && (
          <motion.div
            aria-hidden="true"
            className="absolute -inset-[5px] rounded-full bg-[#0B1F33]/20 blur-[7px]"
            animate={{
              opacity: [0.25, 0.65, 0.25],
              scale: [0.9, 1.12, 0.9],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Moving navy/cyan circular shine */}

        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #0B1F33 0deg, #173B59 55deg, #67E8F9 105deg, #8FC7D8 145deg, #6366F1 195deg, #173B59 255deg, #0B1F33 320deg, #0B1F33 360deg)",
          }}
          animate={
            motionEnabled
              ? {
                  rotate: [0, 360],
                }
              : undefined
          }
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner background mask */}

        <div className="absolute inset-[2px] z-[1] rounded-full bg-[#F4F6F5]" />

        {/* Number */}

        <span className="absolute inset-0 z-[2] flex items-center justify-center text-[8px] font-semibold tracking-[0.08em] text-[#0B1F33]">
          {number}
        </span>
      </div>

      {/* =========================================================
          TEXT
      ========================================================= */}

      <div className="min-w-0">
        <h3 className="text-[15px] font-semibold tracking-[-0.025em] text-[#0B1F33] transition-transform duration-300 group-hover:translate-x-1 sm:text-[16px]">
          {title}
        </h3>

        <p className="mt-1.5 max-w-[430px] text-[11px] leading-5.5 text-[#0B1F33]/45 transition-colors duration-300 group-hover:text-[#0B1F33]/65">
          {description}
        </p>
      </div>
    </div>
  );
}