"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  BriefcaseBusiness,
  Users,
  Globe2,
  GraduationCap,
  MessageCircle,
} from "lucide-react";

const dimensions = [
  {
    icon: ShieldCheck,
    title: "Security",
    text: "Protecting systems, data and businesses through practical cybersecurity.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business",
    text: "Understanding markets, opportunities and the commercial side of decisions.",
  },
  {
    icon: Users,
    title: "People",
    text: "Building relationships and creating productive environments for collaboration.",
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    text: "Working across diverse professional and cultural environments in Dubai.",
  },
  {
    icon: GraduationCap,
    title: "Learning",
    text: "Continuously developing technical, analytical and professional capabilities.",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    text: "Connecting technical thinking with clear communication across stakeholders.",
  },
];

export default function BeyondBusiness() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#0A1B2B]
        pt-8
        pb-20
        text-white
        sm:pt-20
        sm:pb-28
        lg:pt-16
        lg:pb-32
      "
    >
      {/* =========================
          AMBIENT BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-[30%]
            h-[560px]
            w-[560px]
            -translate-x-1/2
            rounded-full
            bg-[#176FA3]/[0.045]
            blur-[150px]
          "
        />

        <div
          className="
            ambient-blob
            absolute
            left-[-18%]
            top-[8%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#21A9C4]/[0.045]
            blur-[130px]
          "
          style={
            reduceMotion
              ? undefined
              : ({
                  "--drift-opacity-from": 0.25,
                  "--drift-opacity-to": 0.38,
                  "--drift-scale-from": 1,
                  "--drift-scale-to": 1.04,
                  "--drift-duration": "12s",
                } as any)
          }
        />

        <div
          className="
            ambient-blob
            absolute
            right-[-15%]
            bottom-[-8%]
            h-[460px]
            w-[460px]
            rounded-full
            bg-[#176FA3]/[0.04]
            blur-[140px]
          "
          style={
            reduceMotion
              ? undefined
              : ({
                  "--drift-opacity-from": 0.22,
                  "--drift-opacity-to": 0.34,
                  "--drift-scale-from": 1,
                  "--drift-scale-to": 1.03,
                  "--drift-duration": "14s",
                } as any)
          }
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_35%,rgba(45,212,191,0.03),transparent_42%)]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* =========================
            HEADER
        ========================== */}
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#4FD8EF]/80" />

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.36em]
                  text-[#79E3F2]/80
                  sm:text-[9px]
                "
              >
                06 — Beyond Business
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2
              className="
                max-w-4xl
                text-[clamp(2.65rem,11vw,5rem)]
                font-medium
                leading-[0.94]
                tracking-[-0.065em]
                sm:text-[clamp(2.45rem,5vw,5rem)]
              "
            >
              <span className="text-white">More than one</span>

              <span
                className="
                  block
                  pb-2
                  text-[#67DDF2]
                "
              >
                professional dimension.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-[13px]
                leading-7
                text-[#AEBEC9]
                sm:mt-6
                sm:text-[14px]
              "
            >
              Cybersecurity remains the primary professional focus, but
              effective work is shaped by a broader understanding of business,
              people, communication, learning and global environments.
            </p>
          </motion.div>
        </div>

        {/* =========================
            DIMENSIONS
        ========================== */}
        <div
          className="
            mt-10
            grid
            gap-3
            sm:mt-14
            sm:grid-cols-2
            lg:mt-20
            lg:grid-cols-3
          "
        >
          {dimensions.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hovered === index;
            const isActive = activeIndex === index;

            return (
              <motion.article
                key={item.title}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
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
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                      }
                }
                onMouseEnter={() => {
                  setHovered(index);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => {
                  setHovered(null);
                  setActiveIndex(null);
                }}
                onFocus={() => {
                  setHovered(index);
                  setActiveIndex(index);
                }}
                onBlur={() => {
                  setHovered(null);
                  setActiveIndex(null);
                }}
                className="
                  group
                  relative
                  min-h-[235px]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#3A7182]/[0.24]
                  bg-[#103047]
                  p-5
                  shadow-none
                  transition-[border-color,background-color]
                  duration-300
                  ease-out
                  hover:border-[#4FD8EF]/[0.34]
                  hover:bg-[#11344A]
                  sm:min-h-[260px]
                  sm:p-7
                "
              >
                {/* SUBTLE HOVER EDGE */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-2xl
                    border
                    border-transparent
                    transition-colors
                    duration-300
                    group-hover:border-[#5DE5F5]/[0.10]
                  "
                />

                {/* CONTENT */}
                <div className="relative z-10 flex h-full flex-col">
                  {/* ICON */}
                  <motion.div
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            scale: isHovered ? 1.02 : 1,
                          }
                    }
                    transition={{
                      duration: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#4FD8EF]/[0.22]
                      bg-[#4FD8EF]/[0.055]
                      transition-[border-color,background-color]
                      duration-300
                      group-hover:border-[#6FE7F5]/[0.32]
                      group-hover:bg-[#4FD8EF]/[0.075]
                    "
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.3}
                      className="
                        text-[#8BEAF4]
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    />
                  </motion.div>

                  {/* TITLE */}
                  <motion.h3
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            x: isActive ? 1 : 0,
                          }
                    }
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="
                      mt-7
                      text-[17px]
                      font-medium
                      tracking-[-0.035em]
                      text-white
                    "
                  >
                    {item.title}
                  </motion.h3>

                  {/* DESCRIPTION */}
                  <motion.p
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            x: isActive ? 1 : 0,
                          }
                    }
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="
                      mt-3
                      max-w-[280px]
                      text-[12px]
                      leading-6
                      text-[#A9BAC6]
                      transition-colors
                      duration-300
                      group-hover:text-[#C3D2DB]
                    "
                  >
                    {item.text}
                  </motion.p>

                  {/* BOTTOM INDEX */}
                  <div className="mt-auto pt-7">
                    <span
                      className="
                        font-mono
                        text-[8px]
                        tracking-[0.25em]
                        text-[#78D8E8]/40
                        transition-colors
                        duration-300
                        group-hover:text-[#5ED9EA]/60
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}