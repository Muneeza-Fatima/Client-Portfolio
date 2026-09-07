"use client";

import { useState, useEffect } from "react";
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
            h-[380px]
            w-[380px]
            -translate-x-1/2
            rounded-full
            bg-[#176FA3]/[0.038]
            blur-[90px]
            sm:h-[470px]
            sm:w-[470px]
            sm:blur-[120px]
            lg:h-[560px]
            lg:w-[560px]
            lg:blur-[150px]
          "
        />

        {/* Static left atmosphere — no continuous animation */}
        <div
          className="
            absolute
            left-[-18%]
            top-[8%]
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#21A9C4]/[0.035]
            blur-[90px]
            sm:h-[340px]
            sm:w-[340px]
            sm:blur-[110px]
            lg:h-[400px]
            lg:w-[400px]
            lg:blur-[130px]
          "
        />

        {/* Static right atmosphere — no continuous animation */}
        <div
          className="
            absolute
            bottom-[-8%]
            right-[-15%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#176FA3]/[0.032]
            blur-[95px]
            sm:h-[390px]
            sm:w-[390px]
            sm:blur-[115px]
            lg:h-[460px]
            lg:w-[460px]
            lg:blur-[140px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_35%,rgba(45,212,191,0.025),transparent_42%)]
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
                    x: -14,
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
              duration: 0.55,
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
                    y: 18,
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
              duration: 0.6,
              delay: 0.04,
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
                        y: 18,
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
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  motionEnabled
                    ? {
                        y: -4,
                      }
                    : undefined
                }
                onMouseEnter={
                  motionEnabled
                    ? () => {
                        setHovered(index);
                        setActiveIndex(index);
                      }
                    : undefined
                }
                onMouseLeave={
                  motionEnabled
                    ? () => {
                        setHovered(null);
                        setActiveIndex(null);
                      }
                    : undefined
                }
                onFocus={
                  motionEnabled
                    ? () => {
                        setHovered(index);
                        setActiveIndex(index);
                      }
                    : undefined
                }
                onBlur={
                  motionEnabled
                    ? () => {
                        setHovered(null);
                        setActiveIndex(null);
                      }
                    : undefined
                }
                className={`
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
                  sm:min-h-[260px]
                  sm:p-7
                  ${
                    motionEnabled
                      ? "hover:border-[#4FD8EF]/[0.34] hover:bg-[#11344A]"
                      : ""
                  }
                `}
              >
                {/* SUBTLE HOVER EDGE */}
                <span
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-2xl
                    border
                    border-transparent
                    transition-[border-color]
                    duration-300
                    ${
                      motionEnabled
                        ? "group-hover:border-[#5DE5F5]/[0.10]"
                        : ""
                    }
                  `}
                />

                {/* CONTENT */}
                <div className="relative z-10 flex h-full flex-col">
                  {/* ICON */}
                  <motion.div
                    animate={
                      motionEnabled
                        ? {
                            scale: isHovered ? 1.02 : 1,
                          }
                        : undefined
                    }
                    transition={{
                      duration: 0.18,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`
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
                      ${
                        motionEnabled
                          ? "group-hover:border-[#6FE7F5]/[0.32] group-hover:bg-[#4FD8EF]/[0.075]"
                          : ""
                      }
                    `}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.3}
                      className={`
                        text-[#8BEAF4]
                        ${
                          motionEnabled
                            ? "transition-colors duration-300 group-hover:text-white"
                            : ""
                        }
                      `}
                    />
                  </motion.div>

                  {/* TITLE */}
                  <motion.h3
                    animate={
                      motionEnabled
                        ? {
                            x: isActive ? 1 : 0,
                          }
                        : undefined
                    }
                    transition={{
                      duration: 0.18,
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
                      motionEnabled
                        ? {
                            x: isActive ? 1 : 0,
                          }
                        : undefined
                    }
                    transition={{
                      duration: 0.18,
                      ease: "easeOut",
                    }}
                    className={`
                      mt-3
                      max-w-[280px]
                      text-[12px]
                      leading-6
                      text-[#A9BAC6]
                      ${
                        motionEnabled
                          ? "transition-colors duration-300 group-hover:text-[#C3D2DB]"
                          : ""
                      }
                    `}
                  >
                    {item.text}
                  </motion.p>

                  {/* BOTTOM INDEX */}
                  <div className="mt-auto pt-7">
                    <span
                      className={`
                        font-mono
                        text-[8px]
                        tracking-[0.25em]
                        text-[#78D8E8]/40
                        ${
                          motionEnabled
                            ? "transition-colors duration-300 group-hover:text-[#5ED9EA]/60"
                            : ""
                        }
                      `}
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