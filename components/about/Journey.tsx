"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Building2,
  BriefcaseBusiness,
  Activity,
} from "lucide-react";

const journey = [
  {
    year: "2017",
    title: "Early Cybersecurity Work",
    text: "Built practical experience through cybersecurity work and client projects.",
    tag: "FOUNDATION",
    icon: ShieldCheck,
  },
  {
    year: "2021",
    title: "Business Development",
    text: "Developed expertise in market research, client relations and business strategy.",
    tag: "BUSINESS",
    icon: TrendingUp,
  },
  {
    year: "2023",
    title: "Leadership in Dubai",
    text: "Led teams, clients and commercial operations in Dubai's real-estate sector.",
    tag: "LEADERSHIP",
    icon: Building2,
  },
  {
    year: "2025",
    title: "Real Estate & Technology",
    text: "Expanded into real-estate consulting alongside technology and cybersecurity.",
    tag: "EXPANSION",
    icon: BriefcaseBusiness,
  },
  {
    year: "2026",
    title: "Cybersecurity Analyst",
    text: "Focused on threat detection, risk analysis, vulnerability assessment and response.",
    tag: "PRESENT",
    icon: Activity,
  },
];

export default function Journey() {
  const [activeIndex, setActiveIndex] = useState(4);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [finePointer, setFinePointer] = useState(false);

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");

    const update = () => {
      setFinePointer(media.matches);
    };

    update();
    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  const motionEnabled = !reduceMotion && finePointer;

  return (
    <section className="relative overflow-hidden bg-[#0B1F33] py-24 sm:py-28 lg:py-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Static center atmosphere */}
        <div
          className="
            absolute
            left-[48%]
            top-[28%]
            h-[340px]
            w-[340px]
            rounded-full
            bg-[#168BD1]/[0.028]
            blur-[90px]
            sm:h-[440px]
            sm:w-[440px]
            sm:blur-[120px]
            lg:h-[520px]
            lg:w-[520px]
            lg:blur-[160px]
          "
        />

        {/* Static bottom-right atmosphere */}
        <div
          className="
            absolute
            -bottom-28
            -right-28
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#42D5F5]/[0.016]
            blur-[90px]
            sm:-bottom-36
            sm:-right-36
            sm:h-[360px]
            sm:w-[360px]
            sm:blur-[120px]
            lg:h-[420px]
            lg:w-[420px]
            lg:blur-[140px]
          "
        />

        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.04]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* HEADER */}
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 max-w-4xl sm:mb-20 lg:mb-24"
        >
          <div className="flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-[#42D5F5]" />

            <span className="text-[8px] font-semibold uppercase tracking-[0.34em] text-[#67D9F0]">
              05 — The Journey
            </span>
          </div>

          <h2
            className="
              mt-6
              max-w-3xl
              text-[clamp(2.25rem,4.5vw,4.2rem)]
              font-medium
              leading-[0.94]
              tracking-[-0.065em]
              antialiased
            "
          >
            <span className="text-white">
              A career built{" "}
            </span>

            <span className="bg-gradient-to-r from-[#E7EFF8] via-[#58D8F3] to-[#168BD1] bg-clip-text text-transparent">
              through experience.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-[13px] leading-7 text-white/40 sm:text-[14px]">
            Different environments, responsibilities and perspectives —
            gradually shaping a multidisciplinary professional path.
          </p>
        </motion.header>

        {/* JOURNEY */}
        <div className="relative">
          {/* Timeline line */}
          <div className="pointer-events-none absolute bottom-0 left-[7px] top-0 w-px bg-white/[0.07] md:left-[31px]" />

          <div>
            {journey.map((item, index) => {
              const Icon = item.icon;

              const active = activeIndex === index;
              const hovered = hoveredIndex === index;

              return (
                <motion.button
                  key={`${item.year}-${item.title}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={
                    motionEnabled
                      ? () => {
                          setHoveredIndex(index);
                        }
                      : undefined
                  }
                  onMouseLeave={
                    motionEnabled
                      ? () => {
                          setHoveredIndex(null);
                        }
                      : undefined
                  }
                  onFocus={
                    motionEnabled
                      ? () => {
                          setHoveredIndex(index);
                        }
                      : undefined
                  }
                  onBlur={
                    motionEnabled
                      ? () => {
                          setHoveredIndex(null);
                        }
                      : undefined
                  }
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 10,
                        }
                  }
                  whileInView={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.08,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    motionEnabled
                      ? {
                          x: 2,
                        }
                      : undefined
                  }
                  className="group relative block w-full text-left focus:outline-none"
                >
                  <div
                    className={`
                      relative
                      grid
                      gap-5
                      border-b
                      py-7
                      pl-12
                      transition-[border-color]
                      duration-300
                      md:grid-cols-[64px_105px_1fr]
                      md:gap-7
                      md:pl-0
                      ${
                        active
                          ? "border-white/[0.14]"
                          : "border-white/[0.075]"
                      }
                    `}
                  >
                    {/* Hover surface — desktop only */}
                    {motionEnabled && (
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: hovered ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.2,
                          ease: "easeOut",
                        }}
                        className="pointer-events-none absolute inset-y-2 left-0 right-0 rounded-xl bg-white/[0.018]"
                      />
                    )}

                    {/* TIMELINE */}
                    <div className="relative hidden md:block">
                      <motion.div
                        animate={
                          motionEnabled && hovered
                            ? {
                                scale: 1.06,
                              }
                            : {
                                scale: 1,
                              }
                        }
                        transition={{
                          duration: 0.18,
                          ease: "easeOut",
                        }}
                        className={`
                          absolute
                          left-[24px]
                          top-3
                          z-10
                          h-4
                          w-4
                          rounded-full
                          border
                          transition-[border-color,box-shadow]
                          duration-300
                          ${
                            active
                              ? "border-[#42D5F5]/75 bg-[#0B1F33] shadow-[0_0_16px_rgba(66,213,245,0.20)]"
                              : hovered && motionEnabled
                                ? "border-[#42D5F5]/45 bg-[#0B1F33]"
                                : "border-white/25 bg-[#0B1F33]"
                          }
                        `}
                      >
                        <span
                          className={`
                            absolute
                            left-1/2
                            top-1/2
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            ${
                              active
                                ? "h-1.5 w-1.5 bg-[#42D5F5]"
                                : hovered && motionEnabled
                                  ? "h-1.5 w-1.5 bg-[#67D9F0]/70"
                                  : "h-1 w-1 bg-white/35"
                            }
                          `}
                        />
                      </motion.div>
                    </div>

                    {/* YEAR */}
                    <div className="relative z-10 flex items-center md:justify-start">
                      {/* Mobile timeline point */}
                      <div className="absolute -left-12 top-3 md:hidden">
                        <div
                          className={`
                            h-4
                            w-4
                            rounded-full
                            border
                            transition-[border-color,box-shadow]
                            duration-300
                            ${
                              active
                                ? "border-[#42D5F5]/75 bg-[#0B1F33] shadow-[0_0_16px_rgba(66,213,245,0.18)]"
                                : "border-white/25 bg-[#0B1F33]"
                            }
                          `}
                        >
                          <span
                            className={`
                              absolute
                              left-1/2
                              top-1/2
                              -translate-x-1/2
                              -translate-y-1/2
                              rounded-full
                              ${
                                active
                                  ? "h-1.5 w-1.5 bg-[#42D5F5]"
                                  : "h-1 w-1 bg-white/35"
                              }
                            `}
                          />
                        </div>
                      </div>

                      <motion.span
                        animate={
                          motionEnabled
                            ? {
                                x: hovered ? 2 : 0,
                              }
                            : undefined
                        }
                        transition={{
                          duration: 0.18,
                          ease: "easeOut",
                        }}
                        className={`
                          text-[12px]
                          font-medium
                          tracking-[0.12em]
                          transition-colors
                          duration-300
                          ${
                            active
                              ? "text-[#DCE7F5]"
                              : "text-white/50"
                          }
                        `}
                      >
                        {item.year}
                      </motion.span>
                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10 grid gap-4 md:grid-cols-[0.65fr_1fr]">
                      {/* TITLE */}
                      <div>
                        <div className="flex items-center gap-3">
                          <motion.div
                            animate={
                              motionEnabled && hovered
                                ? {
                                    y: -1,
                                    rotate: -2,
                                  }
                                : {
                                    y: 0,
                                    rotate: 0,
                                  }
                            }
                            transition={{
                              duration: 0.18,
                              ease: "easeOut",
                            }}
                            className={`
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              border
                              transition-[border-color,background-color]
                              duration-300
                              ${
                                active
                                  ? "border-[#42D5F5]/25 bg-[#42D5F5]/[0.07]"
                                  : hovered && motionEnabled
                                    ? "border-[#42D5F5]/18 bg-[#42D5F5]/[0.045]"
                                    : "border-white/[0.10] bg-white/[0.025]"
                              }
                            `}
                          >
                            <Icon
                              size={14}
                              strokeWidth={1.25}
                              className={`
                                transition-colors
                                duration-300
                                ${
                                  active
                                    ? "text-[#67D9F0]"
                                    : hovered && motionEnabled
                                      ? "text-[#67D9F0]/80"
                                      : "text-white/55"
                                }
                              `}
                            />
                          </motion.div>

                          <motion.h3
                            animate={
                              motionEnabled
                                ? {
                                    x: hovered ? 2 : 0,
                                  }
                                : undefined
                            }
                            transition={{
                              duration: 0.18,
                              ease: "easeOut",
                            }}
                            className={`
                              text-[19px]
                              font-medium
                              leading-tight
                              tracking-[-0.045em]
                              antialiased
                              transition-colors
                              duration-300
                              sm:text-[21px]
                              ${
                                active
                                  ? "text-white"
                                  : "text-white/80"
                              }
                            `}
                          >
                            {item.title}
                          </motion.h3>
                        </div>

                        {/* Mobile description */}
                        <p
                          className={`
                            mt-3
                            pl-11
                            text-[11px]
                            leading-5
                            transition-colors
                            duration-300
                            lg:hidden
                            ${
                              active
                                ? "text-white/48"
                                : "text-white/38"
                            }
                          `}
                        >
                          {item.text}
                        </p>
                      </div>

                      {/* DESCRIPTION */}
                      <div>
                        <span
                          className={`
                            text-[7px]
                            font-semibold
                            uppercase
                            tracking-[0.3em]
                            transition-colors
                            duration-300
                            ${
                              active
                                ? "text-[#67D9F0]/70"
                                : "text-white/35"
                            }
                          `}
                        >
                          {item.tag}
                        </span>

                        <p
                          className={`
                            mt-1.5
                            max-w-lg
                            text-[12px]
                            leading-6
                            transition-colors
                            duration-300
                            sm:text-[13px]
                            ${
                              active
                                ? "text-white/52"
                                : "text-white/38"
                            }
                          `}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* CLOSING */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 max-w-3xl sm:mt-20"
        >
          <div className="flex gap-5">
            <span className="mt-1 h-5 w-px bg-white/15" />

            <p className="text-[15px] leading-7 tracking-[-0.01em] text-white/35 sm:text-[16px]">
              From early technical work to professional security,
              <span className="text-white/65">
                {" "}
                each experience added another dimension to the way
                challenges are understood and solved.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}