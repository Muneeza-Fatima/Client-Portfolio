"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ShieldCheck,
  Building2,
  Users,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const experiences = [
  {
    role: "Cyber Security Analyst",
    company: "Credant Technologies — Now Dell Data Protection",
    period: "January 2026 — Present",
    progress: 92,
    accent: "cyber",
    icon: ShieldCheck,
  },
  {
    role: "Real Estate Consultant",
    company: "Object1.uae",
    period: "November 2025 — Present",
    progress: 78,
    accent: "realestate",
    icon: Building2,
  },
  {
    role: "Customer Service Team Lead",
    company: "Galadari Real Estate",
    period: "July 2023 — October 2024",
    progress: 68,
    accent: "leadership",
    icon: Users,
  },
  {
    role: "Business Development Specialist",
    company: "Honda",
    period: "January 2021 — March 2022",
    progress: 86,
    accent: "business",
    icon: BriefcaseBusiness,
  },
];

const accentStyles = {
  cyber: {
    icon: "text-[#7DD3FC]",
    iconBg: "bg-[#0EA5E9]/[0.045]",
    glow: "bg-[#0EA5E9]/[0.035]",
    progress: "from-[#075985] via-[#0EA5E9] to-[#7DD3FC]",
    percentage: "text-[#93DDF8]",
    dot: "bg-[#67D4F5]",
  },

  realestate: {
    icon: "text-[#A8B7F5]",
    iconBg: "bg-[#4169E1]/[0.045]",
    glow: "bg-[#4169E1]/[0.035]",
    progress: "from-[#273E91] via-[#4169E1] to-[#9DB4FF]",
    percentage: "text-[#AEBBEB]",
    dot: "bg-[#91A5F0]",
  },

  leadership: {
    icon: "text-[#C0A9F4]",
    iconBg: "bg-[#7C3AED]/[0.04]",
    glow: "bg-[#8B5CF6]/[0.03]",
    progress: "from-[#4C268F] via-[#8B5CF6] to-[#C4B5FD]",
    percentage: "text-[#C7B8EC]",
    dot: "bg-[#AD94EA]",
  },

  business: {
    icon: "text-[#7BE2D5]",
    iconBg: "bg-[#0F766E]/[0.045]",
    glow: "bg-[#14B8A6]/[0.03]",
    progress: "from-[#155E59] via-[#14B8A6] to-[#6EE7D8]",
    percentage: "text-[#83D9CF]",
    dot: "bg-[#6BD4C9]",
  },
};

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    const updatePointer = () => {
      setFinePointer(mediaQuery.matches);
    };

    updatePointer();

    mediaQuery.addEventListener("change", updatePointer);

    return () => {
      mediaQuery.removeEventListener("change", updatePointer);
    };
  }, []);

  /*
   * Continuous / hover-heavy motion is only enabled on
   * fine-pointer devices such as desktop/laptop.
   *
   * Touch devices get lightweight reveal animations only.
   */
  const motionEnabled = !shouldReduceMotion && finePointer;

  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-[#081722]
        py-12
        pb-20
        sm:py-16
        sm:pb-24
        lg:py-20
        lg:pb-28
      "
    >
      {/* =========================================================
          PREMIUM LIGHTWEIGHT BACKGROUND
          Static only — no continuous animation / no large blur.
          ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Very subtle vertical depth */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#0B1F2D]/35
            via-transparent
            to-[#040D15]/55
          "
        />

        {/* Fine architectural grid */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(190,220,235,0.75)_1px,transparent_1px),linear-gradient(90deg,rgba(190,220,235,0.75)_1px,transparent_1px)]
            bg-[size:92px_92px]
            opacity-[0.012]
            [mask-image:linear-gradient(to_bottom,black_0%,black_52%,transparent_100%)]
            sm:opacity-[0.018]
          "
        />

        {/* Subtle diagonal light */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(115deg,transparent_15%,rgba(91,143,180,0.018)_42%,transparent_68%)]
            opacity-[0.18]
            sm:opacity-[0.28]
          "
        />

        {/* Premium vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_28%,transparent_0%,rgba(8,23,34,0.08)_42%,rgba(2,10,17,0.72)_100%)]
            sm:bg-[radial-gradient(circle_at_50%_28%,transparent_0%,rgba(8,23,34,0.04)_42%,rgba(2,10,17,0.62)_100%)]
          "
        />

        {/* Bottom depth */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-64
            bg-gradient-to-t
            from-[#040D15]
            via-[#071722]/70
            to-transparent
          "
        />
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1380px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* SECTION LABEL */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 8,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-3"
        >
          <span
            className="
              h-px
              w-8
              bg-gradient-to-r
              from-[#64748B]/80
              via-[#6F89D8]/70
              to-[#9AAEFF]/60
              sm:w-10
            "
          />

          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.32em]
              text-[#AAB8C3]
              sm:text-[10px]
            "
          >
            Professional Journey
          </span>
        </motion.div>

        {/* MAIN HEADING */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 10,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.4,
            delay: 0.02,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-7 max-w-[1000px] sm:mt-8"
        >
          <h2
            className="
              font-serif
              text-[clamp(2.45rem,4.8vw,5.15rem)]
              font-normal
              leading-[1.02]
              tracking-[-0.055em]
            "
          >
            <span className="block text-[#F8FAFC]">
              Experience shaped by
            </span>

            <span
              className="
                mt-3
                block
                bg-gradient-to-r
                from-[#B8F3FF]
                via-[#78E5F7]
                to-[#45BCE8]
                bg-clip-text
                pb-2
                font-normal
                text-transparent
                sm:mt-4
              "
            >
              different perspectives.
            </span>
          </h2>
        </motion.div>

        {/* EXPERIENCE LIST */}

        <div className="mt-12 sm:mt-14 lg:mt-16">
          {experiences.map((experience, index) => {
            const style =
              accentStyles[
                experience.accent as keyof typeof accentStyles
              ];

            const Icon = experience.icon;

            return (
              <motion.article
                key={experience.role}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 12,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.08,
                }}
                transition={{
                  duration: 0.35,
                  delay: shouldReduceMotion ? 0 : index * 0.025,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  mb-4
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-white/[0.085]
                  bg-white/[0.035]
                  px-5
                  py-6
                  shadow-[0_14px_36px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.06)]
                  transition-[border-color,background-color]
                  duration-200
                  ease-out
                  hover:border-white/[0.14]
                  hover:bg-white/[0.05]
                  sm:mb-5
                  sm:px-6
                  sm:py-7
                  lg:px-7
                  lg:py-8
                "
              >
                {/* LIGHTWEIGHT CARD BACKGROUND */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[20px]
                    bg-white/[0.018]
                  "
                />

                {/* Very subtle glass gradient */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[20px]
                    bg-gradient-to-br
                    from-white/[0.03]
                    via-white/[0.008]
                    to-transparent
                  "
                />

                {/* Subtle accent atmosphere */}

                <div
                  aria-hidden="true"
                  className={`
                    pointer-events-none
                    absolute
                    -right-[4%]
                    -top-[12%]
                    h-[120px]
                    w-[180px]
                    rounded-full
                    opacity-20
                    ${style.glow}
                  `}
                />

                {/* Top glass highlight */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-[6%]
                    right-[6%]
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.14]
                    to-transparent
                    opacity-60
                  "
                />

                {/* SHARP CONTENT */}

                <div
                  className="
                    relative
                    z-20
                    grid
                    gap-5
                    lg:grid-cols-[52px_minmax(260px,1.05fr)_210px]
                    lg:items-center
                    lg:gap-8
                  "
                >
                  {/* ICON */}

                  <div
                    className={`
                      relative
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-[12px]
                      border
                      border-white/[0.09]
                      bg-white/[0.035]
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]
                      transition-[border-color,background-color]
                      duration-200
                      group-hover:border-white/[0.16]
                      group-hover:bg-white/[0.055]
                      ${style.iconBg}
                    `}
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.3}
                      className={style.icon}
                    />
                  </div>

                  {/* ROLE / COMPANY */}

                  <div className="min-w-0">
                    <h3
                      className="
                        max-w-[620px]
                        font-sans
                        text-[17px]
                        font-medium
                        leading-[1.25]
                        tracking-[-0.02em]
                        text-[#FFFFFF]
                        sm:text-[18px]
                        lg:text-[20px]
                      "
                    >
                      {experience.role}
                    </h3>

                    <div
                      className="
                        mt-2.5
                        flex
                        flex-wrap
                        items-center
                        gap-x-2.5
                        gap-y-1.5
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.12em]
                        text-[#7F929E]
                        sm:text-[9px]
                      "
                    >
                      <span>{experience.company}</span>

                      <span
                        className={`
                          h-1
                          w-1
                          shrink-0
                          rounded-full
                          ${style.dot}
                          opacity-60
                        `}
                      />

                      <span className="text-[#617582]">
                        {experience.period}
                      </span>
                    </div>
                  </div>

                  {/* IMPACT */}

                  <div
                    className="
                      w-full
                      lg:max-w-[210px]
                      lg:justify-self-end
                    "
                  >
                    <div className="mb-2.5 flex items-center justify-between">
                      <span
                        className="
                          text-[8px]
                          font-medium
                          uppercase
                          tracking-[0.16em]
                          text-[#718590]
                          sm:text-[9px]
                        "
                      >
                        Growth / Impact
                      </span>

                      <span
                        className={`
                          text-[10px]
                          font-medium
                          tracking-[0.04em]
                          ${style.percentage}
                        `}
                      >
                        {String(experience.progress).padStart(2, "0")}%
                      </span>
                    </div>

                    <div
                      className="
                        relative
                        h-[5px]
                        w-full
                        overflow-hidden
                        rounded-full
                        bg-[#102536]/90
                        shadow-[inset_0_1px_2px_rgba(0,0,0,0.48)]
                      "
                    >
                      <motion.div
                        initial={
                          shouldReduceMotion
                            ? {
                                scaleX: 1,
                              }
                            : {
                                scaleX: 0,
                              }
                        }
                        whileInView={{
                          scaleX: 1,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.5,
                        }}
                        transition={{
                          duration: 0.55,
                          delay: 0.05 + index * 0.035,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{
                          width: `${experience.progress}%`,
                          transformOrigin: "left",
                          willChange: shouldReduceMotion
                            ? "auto"
                            : "transform",
                        }}
                        className={`
                          absolute
                          inset-y-0
                          left-0
                          rounded-full
                          bg-gradient-to-r
                          ${style.progress}
                        `}
                      />

                      <div
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          inset-x-0
                          top-0
                          h-px
                          bg-white/[0.12]
                        "
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom glass shine */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-[7%]
                    right-[7%]
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.06]
                    to-transparent
                    opacity-60
                  "
                />
              </motion.article>
            );
          })}
        </div>

        {/* EXPLORE MORE */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 8,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.35,
            delay: 0.02,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            justify-end
            border-t
            border-white/[0.065]
            pt-6
            sm:pt-7
          "
        >
          <Link
            href="/experience"
            className="
              group/explore
              inline-flex
              items-center
              gap-2
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#FFFFFF]
              transition-colors
              duration-200
              hover:text-[#42D5F5]
              sm:text-[11px]
            "
          >
            <span
              className="
                relative
                text-[#FFFFFF]
                after:absolute
                after:-bottom-1
                after:left-0
                after:h-px
                after:w-full
                after:origin-right
                after:scale-x-0
                after:bg-current
                after:transition-transform
                after:duration-200
                group-hover/explore:after:origin-left
                group-hover/explore:after:scale-x-100
              "
            >
              Explore More
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
              className="
                text-[#FFFFFF]
                transition-[transform,color]
                duration-200
                group-hover/explore:-translate-y-0.5
                group-hover/explore:translate-x-0.5
                group-hover/explore:text-[#42D5F5]
              "
            />
          </Link>
        </motion.div>

        {/* BOTTOM STATEMENT */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 8,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-9
            border-t
            border-white/[0.065]
            pt-7
            sm:mt-10
            sm:pt-9
          "
        >
          <p
            className="
              max-w-[1000px]
              font-serif
              text-[1.5rem]
              font-normal
              leading-[1.12]
              tracking-[-0.045em]
              text-[#FFFFFF]
              sm:text-[1.85rem]
              lg:text-[2.3rem]
            "
          >
            <span className="text-[#FFFFFF]">
              Different industries.
            </span>

            <span className="ml-2 text-[#FFFFFF]">
              One evolving professional perspective.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}