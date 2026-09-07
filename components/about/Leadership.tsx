"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Users,
  Target,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

const leadershipPoints = [
  {
    icon: Target,
    title: "Purpose",
    text: "Set clear objectives and connect daily execution to measurable outcomes.",
  },
  {
    icon: Users,
    title: "People",
    text: "Build trust, encourage accountability and help teams perform with confidence.",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    text: "Create clarity across different backgrounds, roles and stakeholder expectations.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    text: "Use experience, feedback and data to continuously improve performance.",
  },
];

export default function Leadership() {
  const reduceMotion = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

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
    <section className="relative overflow-hidden bg-[#E9E9E5] pt-12 pb-20 sm:py-24 lg:py-28">
      {/* Background */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-10%]
          top-1/2
          h-[320px]
          w-[320px]
          -translate-y-1/2
          rounded-full
          bg-[#168BD1]/[0.04]
          blur-[85px]
          sm:right-[-12%]
          sm:h-[410px]
          sm:w-[410px]
          sm:blur-[105px]
          lg:h-[500px]
          lg:w-[500px]
          lg:blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* SAME ORIGINAL ARCHITECTURE */}
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -16,
                  }
            }
            whileInView={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    x: 0,
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
          >
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#42D5F5]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#168BD1]">
                03 — Leadership
              </span>
            </div>

            {/* HEADING */}
            <h2 className="mt-6 max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em]">
              <span className="block text-[#0B1F33]">
                Lead with clarity.
              </span>

              <span className="mt-2 block text-[#33495A]">
                Communicate{" "}
                <span className="bg-gradient-to-r from-[#0B1F33] via-[#168BD1] to-[#42BFD5] bg-clip-text text-transparent">
                  with purpose.
                </span>
              </span>
            </h2>
          </motion.div>

          {/* RIGHT — BRIGHT NAVY 2 × 2 CARDS */}
          <div className="grid gap-px overflow-hidden rounded-2xl border border-[#0B1F33]/10 bg-[#0B1F33]/10 sm:grid-cols-2">
            {leadershipPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 16,
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
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    motionEnabled
                      ? {
                          y: -2,
                        }
                      : undefined
                  }
                  className="
                    group
                    relative
                    overflow-hidden
                    bg-[#164566]
                    p-7
                    transition-[background-color,transform]
                    duration-300
                    ease-out
                    hover:bg-[#1B5277]
                    sm:p-8
                    max-sm:bg-[#164566]
                  "
                >
                  {/* SUBTLE BORDER — desktop hover only */}
                  {motionEnabled && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-[inherit]
                        border
                        border-transparent
                        transition-[border-color]
                        duration-300
                        group-hover:border-[#42D5F5]/40
                      "
                    />
                  )}

                  {/* LEFT SHINE — desktop only */}
                  {motionEnabled && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-0
                        top-0
                        w-px
                        bg-gradient-to-b
                        from-[#B5F3FF]
                        via-[#42D5F5]
                        to-transparent
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />
                  )}

                  {/* TOP HIGHLIGHT — desktop only */}
                  {motionEnabled && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-0
                        right-0
                        top-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-[#8DEBFF]/45
                        to-transparent
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />
                  )}

                  {/* SUBTLE HOVER SURFACE — desktop only */}
                  {motionEnabled && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-[#42D5F5]/[0.07]
                        via-transparent
                        to-transparent
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />
                  )}

                  {/* SOFT LIGHT — desktop only */}
                  {motionEnabled && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-10
                        -top-10
                        h-24
                        w-24
                        rounded-full
                        bg-[#42D5F5]/[0.06]
                        blur-3xl
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />
                  )}

                  <Icon
                    size={23}
                    strokeWidth={1.4}
                    className={`
                      relative
                      text-[#67E3F7]
                      ${
                        motionEnabled
                          ? "transition-colors duration-300 group-hover:text-[#B5F3FF]"
                          : ""
                      }
                    `}
                  />

                  <h3
                    className={`
                      relative
                      mt-12
                      text-xl
                      font-medium
                      tracking-[-0.025em]
                      text-[#F8FAFC]
                      ${
                        motionEnabled
                          ? "transition-transform duration-300 group-hover:translate-x-1"
                          : ""
                      }
                    `}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`
                      relative
                      mt-3
                      text-sm
                      leading-7
                      text-[#D0E1E8]
                      ${
                        motionEnabled
                          ? "transition-colors duration-300 group-hover:text-white"
                          : ""
                      }
                    `}
                  >
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
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
          className="mt-12 border-t border-[#0B1F33]/10 pt-7 sm:mt-14 sm:pt-8"
        >
          <p className="max-w-3xl text-[15px] leading-8 text-[#536776] sm:text-base">
            Leadership experience in Dubai&apos;s real-estate environment
            developed a strong understanding of client relationships, team
            performance, communication and commercial decision-making —
            capabilities that continue to complement technical work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}