"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const expertise = [
  {
    number: "01",
    icon: "🔑",
    title: "Cyber Security",
    description:
      "Protecting critical infrastructure through intelligent security, resilient systems, and proactive risk management.",
    accent: "from-cyan-300/20 via-cyan-300/5 to-transparent",
    border: "border-cyan-300/[0.16]",
    hoverBorder: "hover:border-cyan-200/50",
    hoverGlow:
      "hover:shadow-[0_0_0_1px_rgba(103,232,249,0.16),0_25px_70px_rgba(34,211,238,0.14)]",
    mobileGlow:
      "shadow-[0_0_24px_rgba(34,211,238,0.08),0_18px_45px_rgba(34,211,238,0.06)]",
    shine: "via-cyan-200/35",
    mobileShine: "via-cyan-200/70",
  },
  {
    number: "02",
    icon: "🤖",
    title: "Artificial Intelligence",
    description:
      "Turning complex information into intelligent automation, practical insights, and scalable digital solutions.",
    accent: "from-teal-300/20 via-teal-300/5 to-transparent",
    border: "border-teal-300/[0.16]",
    hoverBorder: "hover:border-teal-200/50",
    hoverGlow:
      "hover:shadow-[0_0_0_1px_rgba(94,234,212,0.16),0_25px_70px_rgba(20,184,166,0.14)]",
    mobileGlow:
      "shadow-[0_0_24px_rgba(20,184,166,0.08),0_18px_45px_rgba(20,184,166,0.06)]",
    shine: "via-teal-200/35",
    mobileShine: "via-teal-200/70",
  },
  {
    number: "03",
    icon: "🔎",
    title: "Digital Analytics",
    description:
      "Transforming business data into clear intelligence that enables smarter decisions and sustainable growth.",
    accent: "from-blue-300/20 via-blue-300/5 to-transparent",
    border: "border-blue-300/[0.16]",
    hoverBorder: "hover:border-blue-200/50",
    hoverGlow:
      "hover:shadow-[0_0_0_1px_rgba(147,197,253,0.16),0_25px_70px_rgba(59,130,246,0.14)]",
    mobileGlow:
      "shadow-[0_0_24px_rgba(59,130,246,0.08),0_18px_45px_rgba(59,130,246,0.06)]",
    shine: "via-blue-200/35",
    mobileShine: "via-blue-200/70",
  },
  {
    number: "04",
    icon: "🎯",
    title: "Digital Marketing",
    description:
      "Creating strategic digital experiences that strengthen visibility, engagement, and measurable performance.",
    accent: "from-violet-300/20 via-violet-300/5 to-transparent",
    border: "border-violet-300/[0.16]",
    hoverBorder: "hover:border-violet-200/50",
    hoverGlow:
      "hover:shadow-[0_0_0_1px_rgba(196,181,253,0.16),0_25px_70px_rgba(139,92,246,0.14)]",
    mobileGlow:
      "shadow-[0_0_24px_rgba(139,92,246,0.08),0_18px_45px_rgba(139,92,246,0.06)]",
    shine: "via-violet-200/35",
    mobileShine: "via-violet-200/70",
  },
];

function RoboticHandIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="drop-shadow-[0_0_10px_rgba(45,212,191,0.18)]"
    >
      <circle cx="48" cy="10" r="2.5" fill="#67E8F9" />
      <circle cx="55" cy="17" r="1.7" fill="#5EEAD4" />
      <circle cx="43" cy="18" r="1.6" fill="#A5F3FC" />

      <path
        d="M48 10L55 17L43 18L48 10Z"
        stroke="#5EEAD4"
        strokeWidth="1"
        strokeOpacity="0.5"
      />

      <path
        d="M25 55C20.5 52.5 18 48.5 18 44V32.5C18 30.8 19.3 29.5 21 29.5C22.7 29.5 24 30.8 24 32.5V25.5C24 23.8 25.3 22.5 27 22.5C28.7 22.5 30 23.8 30 25.5V20C30 18.3 31.3 17 33 17C34.7 17 36 18.3 36 20V25.5"
        stroke="#B8F3FF"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M36 25.5V14C36 12.3 37.3 11 39 11C40.7 11 42 12.3 42 14V29"
        stroke="#78E5F7"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M30 25.5V12.5C30 10.8 31.3 9.5 33 9.5C34.7 9.5 36 10.8 36 12.5V25.5"
        stroke="#A5F3FC"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M24 31V17C24 15.3 25.3 14 27 14C28.7 14 30 15.3 30 17V28"
        stroke="#5EEAD4"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      <path
        d="M24 39L14.5 34.5C13 33.8 11.2 34.4 10.5 35.9C9.8 37.4 10.4 39.2 11.9 40L21 45.5"
        stroke="#78E5F7"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M24 31.5C29 30 35 30.5 40 33.5L47 37.5C49 38.7 49.7 41.3 48.5 43.3C47.3 45.3 44.7 46 42.7 44.8L35 40.5"
        stroke="#B8F3FF"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="27" cy="28" r="1.5" fill="#67E8F9" />
      <circle cx="33" cy="27" r="1.5" fill="#5EEAD4" />
      <circle cx="39" cy="28" r="1.5" fill="#67E8F9" />

      <path
        d="M27 36H34M29 40H37M23 44H29"
        stroke="#5EEAD4"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.65"
      />

      <path
        d="M40 29L48 10"
        stroke="#67E8F9"
        strokeWidth="1"
        strokeDasharray="2 3"
        strokeOpacity="0.45"
      />
    </svg>
  );
}

export default function Expertise() {
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

  const motionEnabled = !shouldReduceMotion && finePointer;

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="
        relative
        overflow-hidden
        bg-[#10243A]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* Background */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute
            -left-36
            top-[-90px]
            h-[360px]
            w-[360px]
            rounded-full
            bg-cyan-400/[0.045]
            blur-[110px]
            sm:-left-48
            sm:top-[-120px]
            sm:h-[460px]
            sm:w-[460px]
            sm:blur-[140px]
            lg:h-[520px]
            lg:w-[520px]
            lg:blur-[170px]
          "
        />

        <div
          className="
            absolute
            -right-36
            bottom-[-90px]
            h-[360px]
            w-[360px]
            rounded-full
            bg-blue-500/[0.04]
            blur-[110px]
            sm:-right-48
            sm:bottom-[-120px]
            sm:h-[460px]
            sm:w-[460px]
            sm:blur-[140px]
            lg:h-[520px]
            lg:w-[520px]
            lg:blur-[170px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[45%]
            h-[220px]
            w-[220px]
            -translate-x-1/2
            rounded-full
            bg-violet-500/[0.018]
            blur-[100px]
            sm:h-[260px]
            sm:w-[260px]
            sm:blur-[125px]
            lg:h-[300px]
            lg:w-[300px]
            lg:blur-[150px]
          "
        />
      </div>

      <div
        className="
          relative
          mx-auto
          max-w-[1480px]
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* Heading */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 14,
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
            lg:mb-16
          "
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#4169E1]/40"
            />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.34em]
                text-[#9BAEDC]
                sm:text-[10px]
              "
            >
              Our Expertise
            </span>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#4169E1]/40"
            />
          </div>

          <h2
            id="expertise-heading"
            className="
              font-serif
              text-[40px]
              font-normal
              leading-[1.04]
              tracking-[-0.045em]
              text-[#F8FAFC]
              sm:text-5xl
              lg:text-[62px]
            "
          >
            <span className="block text-[#F8FAFC]">
              Expertise built for
            </span>

            <span
              className="
                mt-2
                block
                bg-gradient-to-r
                from-[#B8F3FF]
                via-[#78E5F7]
                to-[#45BCE8]
                bg-clip-text
                text-transparent
                sm:mt-3
              "
            >
              what comes next.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[650px]
              text-[13px]
              font-normal
              leading-7
              text-slate-300/65
              sm:text-[14px]
              sm:leading-7
            "
          >
            Where technology, intelligence, security, and strategy come
            together to create meaningful business impact.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {expertise.map((item, index) => {
            return (
              <motion.article
                key={item.number}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: -45,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.18,
                }}
                transition={{
                  duration: 0.55,
                  delay: shouldReduceMotion
                    ? 0
                    : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group
                  relative
                  min-h-[430px]
                  transform-gpu
                  overflow-hidden
                  rounded-[22px]
                  border
                  ${item.border}
                  bg-[#081A2B]/95
                  ${item.mobileGlow}
                  shadow-[0_20px_50px_rgba(0,0,0,0.14)]
                  transition-[transform,border-color,box-shadow,background-color]
                  duration-300
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  sm:shadow-[0_24px_60px_rgba(0,0,0,0.16)]
                  ${
                    motionEnabled
                      ? item.hoverBorder
                      : ""
                  }
                  ${
                    motionEnabled
                      ? item.hoverGlow
                      : ""
                  }
                  lg:group-hover:-translate-y-1.5
                `}
              >
                {/* Card Accent */}

                <div
                  aria-hidden="true"
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    ${item.accent}
                  `}
                />

                {/* Card Highlight */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-white/[0.025]
                    via-transparent
                    to-transparent
                  "
                />

                {/* Subtle Border Shine */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[22px]
                  "
                >
                  {/* Top Shine */}

                  <div
                    className={`
                      absolute
                      left-[7%]
                      right-[7%]
                      top-[-1px]
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      ${item.shine}
                      to-transparent
                      opacity-60
                    `}
                  />

                  {/* Mobile Top Shine */}

                  <div
                    className={`
                      absolute
                      left-[4%]
                      right-[4%]
                      top-[-1px]
                      h-[2px]
                      bg-gradient-to-r
                      from-transparent
                      ${item.mobileShine}
                      to-transparent
                      opacity-80
                      sm:hidden
                    `}
                  />

                  {/* Bottom Shine */}

                  <div
                    className={`
                      absolute
                      bottom-[-1px]
                      left-[10%]
                      right-[10%]
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      ${item.shine}
                      to-transparent
                      opacity-45
                    `}
                  />

                  {/* Mobile Bottom Shine */}

                  <div
                    className={`
                      absolute
                      bottom-[-1px]
                      left-[4%]
                      right-[4%]
                      h-[2px]
                      bg-gradient-to-r
                      from-transparent
                      ${item.mobileShine}
                      to-transparent
                      opacity-70
                      sm:hidden
                    `}
                  />

                  {/* Left Shine */}

                  <div
                    className={`
                      absolute
                      bottom-[10%]
                      left-[-1px]
                      top-[10%]
                      w-px
                      bg-gradient-to-b
                      from-transparent
                      ${item.shine}
                      to-transparent
                      opacity-40
                    `}
                  />

                  {/* Mobile Left Shine */}

                  <div
                    className={`
                      absolute
                      bottom-[7%]
                      left-[-1px]
                      top-[7%]
                      w-[2px]
                      bg-gradient-to-b
                      from-transparent
                      ${item.mobileShine}
                      to-transparent
                      opacity-65
                      sm:hidden
                    `}
                  />

                  {/* Right Shine */}

                  <div
                    className={`
                      absolute
                      bottom-[10%]
                      right-[-1px]
                      top-[10%]
                      w-px
                      bg-gradient-to-b
                      from-transparent
                      ${item.shine}
                      to-transparent
                      opacity-40
                    `}
                  />

                  {/* Mobile Right Shine */}

                  <div
                    className={`
                      absolute
                      bottom-[7%]
                      right-[-1px]
                      top-[7%]
                      w-[2px]
                      bg-gradient-to-b
                      from-transparent
                      ${item.mobileShine}
                      to-transparent
                      opacity-65
                      sm:hidden
                    `}
                  />

                  {/* Desktop Soft Outer Glow */}

                  {motionEnabled && (
                    <div
                      className={`
                        absolute
                        -inset-[1px]
                        rounded-[23px]
                        border
                        ${item.border}
                        opacity-25
                        blur-[1.5px]
                        transition-[opacity,filter]
                        duration-300
                        ease-out
                        group-hover:opacity-55
                        group-hover:blur-[3px]
                      `}
                    />
                  )}

                  {/* Mobile Outer Shine */}

                  <div
                    className={`
                      absolute
                      -inset-[1px]
                      rounded-[23px]
                      border
                      ${item.border}
                      opacity-35
                      sm:hidden
                    `}
                  />

                  {/* Fine Border */}

                  <div
                    className={`
                      absolute
                      inset-0
                      rounded-[22px]
                      border
                      ${item.border}
                    `}
                  />
                </div>

                {/* Card Content */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    min-h-[430px]
                    flex-col
                    p-7
                  "
                >
                  {/* Number */}

                  <div className="flex items-start justify-between">
                    <span
                      className={`
                        select-none
                        text-[54px]
                        font-light
                        leading-none
                        tracking-[-0.08em]
                        text-white/[0.055]
                        ${
                          motionEnabled
                            ? "transition-colors duration-300 group-hover:text-cyan-200/[0.11]"
                            : ""
                        }
                      `}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Visual Symbol */}

                  <div className="mt-7">
                    <div
                      className={`
                        relative
                        flex
                        h-[52px]
                        w-[52px]
                        transform-gpu
                        items-center
                        justify-center
                        rounded-[15px]
                        border
                        border-white/[0.10]
                        bg-gradient-to-br
                        from-white/[0.08]
                        to-white/[0.025]
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                        ${
                          motionEnabled
                            ? "transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out group-hover:-translate-y-1 group-hover:border-cyan-200/25 group-hover:bg-cyan-200/[0.07] group-hover:shadow-[0_0_24px_rgba(34,211,238,0.07),inset_0_1px_0_rgba(255,255,255,0.10)]"
                            : ""
                        }
                      `}
                    >
                      {item.icon === "robotic-hand" ? (
                        <RoboticHandIcon />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="
                            select-none
                            text-[23px]
                            leading-none
                            drop-shadow-[0_4px_12px_rgba(255,255,255,0.10)]
                          "
                        >
                          {item.icon}
                        </span>
                      )}

                      {motionEnabled && (
                        <div
                          aria-hidden="true"
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            rounded-[15px]
                            shadow-[0_0_24px_rgba(34,211,238,0.025)]
                            transition-shadow
                            duration-300
                            group-hover:shadow-[0_0_30px_rgba(34,211,238,0.07)]
                          "
                        />
                      )}
                    </div>
                  </div>

                  {/* Text */}

                  <div className="mt-9">
                    <h3
                      className="
                        max-w-[230px]
                        font-serif
                        text-[25px]
                        font-normal
                        leading-[1.10]
                        tracking-[-0.035em]
                        text-[#F8FAFC]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`
                        mt-6
                        max-w-[255px]
                        text-[13px]
                        font-normal
                        leading-[1.9]
                        text-slate-400/75
                        ${
                          motionEnabled
                            ? "transition-colors duration-300 group-hover:text-slate-300/80"
                            : ""
                        }
                      `}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}

                <div
                  aria-hidden="true"
                  className={`
                    pointer-events-none
                    absolute
                    bottom-0
                    left-[10%]
                    right-[10%]
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-200/35
                    to-transparent
                    opacity-50
                    ${
                      motionEnabled
                        ? "transition-[left,right,opacity] duration-300 ease-out group-hover:left-0 group-hover:right-0 group-hover:opacity-80"
                        : ""
                    }
                  `}
                />
              </motion.article>
            );
          })}
        </div>

        {/* Explore More */}

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
          className="mt-7 flex justify-end"
        >
          <Link
            href="/expertise"
            aria-label="Explore all expertise"
            className="
              group/explore
              inline-flex
              items-center
              gap-2.5
              border-b
              border-white/20
              pb-2.5
              text-[11px]
              font-medium
              uppercase
              tracking-[0.22em]
              !text-[#F8FAFC]
              transition-[color,border-color]
              duration-200
              hover:border-[#42D5F5]/70
              hover:!text-[#42D5F5]
            "
          >
            <span
              className="
                !text-[#F8FAFC]
                transition-colors
                duration-200
                group-hover/explore:!text-[#42D5F5]
              "
            >
              Explore More
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="
                !text-[#F8FAFC]
                transition-[transform,color]
                duration-200
                ease-out
                group-hover/explore:translate-x-1
                group-hover/explore:-translate-y-0.5
                group-hover/explore:!text-[#42D5F5]
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}