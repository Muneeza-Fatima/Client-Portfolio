"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  BookOpen,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Integrity",
    description:
      "Trust is built through consistency, transparency and actions that stand behind the words.",
    icon: ShieldCheck,
    keyword: "Trust",
  },
  {
    number: "02",
    title: "Continuous Learning",
    description:
      "Technology changes quickly. Staying curious and continuously improving is part of the process.",
    icon: BookOpen,
    keyword: "Evolution",
  },
  {
    number: "03",
    title: "Clear Communication",
    description:
      "Good solutions become effective when complex ideas can be understood by the people who need to act on them.",
    icon: MessageCircle,
    keyword: "Clarity",
  },
  {
    number: "04",
    title: "Real-World Impact",
    description:
      "The objective is practical value — stronger security, better decisions and meaningful outcomes.",
    icon: Sparkles,
    keyword: "Impact",
  },
];

export default function Principles() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const active = principles[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section
      id="principles"
      className="
        relative
        overflow-hidden
        bg-[#0A1F30]
        pt-14
        pb-20
        text-white
        sm:pt-20
        sm:pb-28
        lg:pt-24
        lg:pb-32
      "
    >
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[560px]
            w-[560px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[rgba(20,120,175,0.065)]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            right-[-12%]
            top-[8%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-[rgba(45,212,191,0.028)]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-18%]
            left-[8%]
            h-[380px]
            w-[460px]
            rounded-full
            bg-[rgba(37,99,235,0.035)]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />

        <div className="absolute left-0 right-0 top-0 h-px bg-white/[0.06]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.045]" />
      </div>

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={
            reduceMotion ? undefined : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-11 max-w-4xl sm:mb-16 lg:mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#42D5F5]/55" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.24em]
                text-[#73D8EA]
                sm:text-[11px]
              "
            >
              04 — Principles
            </span>
          </div>

          <h2
            className="
              max-w-3xl
              font-sans
              text-[clamp(3.2rem,8vw,7rem)]
              font-semibold
              leading-[0.94]
              tracking-[-0.065em]
              text-white
              lg:text-[clamp(2.6rem,6vw,5.2rem)]
            "
          >
            What stays
            <span className="block text-[#67DDF2]">constant.</span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-[14px]
              leading-7
              text-[#B1C0CA]
              sm:mt-6
              sm:text-[16px]
            "
          >
            The principles remain steady even when technology, environments
            and responsibilities change.
          </p>
        </motion.div>

        {/* Principles */}
        <div className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-8">
          {/* Selection cards */}
          <div className="flex flex-col gap-3">
            {principles.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={item.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: -22,
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
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          x: 3,
                        }
                  }
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[1.15rem]
                    border
                    px-5
                    py-4
                    text-left
                    transition-all
                    duration-300
                    sm:py-5
                    ${
                      isActive
                        ? "border-[#42D5F5]/25 bg-[#0D2A40]"
                        : "border-white/[0.085] bg-[#0A2438] hover:border-white/[0.14] hover:bg-[#0D2940]"
                    }
                  `}
                >
                  {/* Active edge */}
                  <span
                    className={`
                      pointer-events-none
                      absolute
                      bottom-3
                      left-0
                      top-3
                      w-px
                      bg-gradient-to-b
                      from-transparent
                      via-[#42D5F5]
                      to-transparent
                      transition-opacity
                      duration-300
                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-50"
                      }
                    `}
                  />

                  {/* Very subtle active light */}
                  <span
                    className={`
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      h-28
                      w-28
                      rounded-full
                      bg-[#42D5F5]/[0.045]
                      blur-3xl
                      transition-opacity
                      duration-300
                      ${isActive ? "opacity-100" : "opacity-0"}
                    `}
                  />

                  <div className="relative flex items-center gap-4">
                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "border-[#42D5F5]/25 bg-[#42D5F5]/[0.07] text-[#70E4F5]"
                            : "border-white/[0.09] bg-white/[0.025] text-[#9FB4C1] group-hover:border-[#42D5F5]/20 group-hover:text-[#CBEAF2]"
                        }
                      `}
                    >
                      <Icon size={17} strokeWidth={1.65} />
                    </div>

                    <div className="min-w-0">
                      <span
                        className={`
                          block
                          text-[9px]
                          font-medium
                          uppercase
                          tracking-[0.18em]
                          transition-colors
                          duration-200
                          ${
                            isActive
                              ? "text-[#69DDF0]"
                              : "text-[#718997] group-hover:text-[#86A4B4]"
                          }
                        `}
                      >
                        {item.number}
                      </span>

                      <span
                        className={`
                          mt-1
                          block
                          text-[13px]
                          font-normal
                          leading-[1.35]
                          tracking-[-0.012em]
                          transition-colors
                          duration-200
                          ${
                            isActive
                              ? "text-[#F4F8FB]"
                              : "text-[#C8D5DE] group-hover:text-white"
                          }
                        `}
                      >
                        {item.title}
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Big information card */}
          <div className="relative min-h-[390px]">
            {/* Soft atmospheric glow */}
            <div
              className="
                pointer-events-none
                absolute
                -inset-4
                rounded-[2rem]
                bg-[radial-gradient(circle_at_50%_45%,rgba(45,212,191,0.055),transparent_58%)]
                blur-2xl
              "
            />

            <div
              className="
                relative
                h-full
                overflow-hidden
                rounded-[1.65rem]
                border
                border-white/[0.10]
                bg-[#0A2032]
                shadow-[0_24px_65px_rgba(0,0,0,0.22)]
              "
            >
              {/* Top architectural accent */}
              <div
                className="
                  absolute
                  left-8
                  right-8
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#42D5F5]/35
                  to-transparent
                "
              />

              {/* Inner frame */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-4
                  rounded-[1.3rem]
                  border
                  border-white/[0.035]
                "
              />

              {/* Card atmosphere */}
              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-14%]
                  top-[-20%]
                  h-[340px]
                  w-[340px]
                  rounded-full
                  bg-[#26C9E8]/[0.035]
                  blur-[110px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-22%]
                  left-[8%]
                  h-[260px]
                  w-[400px]
                  rounded-full
                  bg-[#2563EB]/[0.035]
                  blur-[110px]
                "
              />

              {/* Background number */}
              <div
                className="
                  pointer-events-none
                  absolute
                  right-7
                  top-4
                  font-sans
                  text-[clamp(8rem,17vw,15rem)]
                  font-semibold
                  leading-none
                  tracking-[-0.08em]
                  text-white/[0.028]
                "
              >
                {active.number}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 14,
                        }
                  }
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: -10,
                        }
                  }
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    flex
                    h-full
                    min-h-[390px]
                    flex-col
                    justify-between
                    p-6
                    sm:p-9
                    lg:p-11
                  "
                >
                  <div>
                    {/* Icon */}
                    <div className="mb-9 flex items-center">
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-[#42D5F5]/22
                          bg-[#42D5F5]/[0.06]
                          text-[#71E2F3]
                        "
                      >
                        <ActiveIcon size={19} strokeWidth={1.65} />
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="h-px w-7 bg-[#42D5F5]/45" />

                      <span
                        className="
                          text-[9px]
                          font-medium
                          uppercase
                          tracking-[0.2em]
                          text-[#6ED9EA]
                        "
                      >
                        {active.keyword}
                      </span>
                    </div>

                    {/* Main heading */}
                    <h3
                      className="
                        max-w-2xl
                        font-sans
                        text-[clamp(1.7rem,3vw,2.8rem)]
                        font-medium
                        leading-[1.05]
                        tracking-[-0.045em]
                        text-white
                      "
                    >
                      {active.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        max-w-2xl
                        text-[14px]
                        leading-7
                        text-[#AEC0CB]
                        sm:text-[15px]
                      "
                    >
                      {active.description}
                    </p>
                  </div>

                  {/* Bottom progress */}
                  <div className="mt-10">
                    <div className="mb-3 flex items-center justify-between">
                      <span
                        className="
                          text-[9px]
                          font-medium
                          uppercase
                          tracking-[0.18em]
                          text-[#718A99]
                        "
                      >
                        Core principle
                      </span>

                      <span
                        className="
                          text-[9px]
                          font-medium
                          tracking-[0.12em]
                          text-[#8FA8B6]
                        "
                      >
                        {active.number} / 04
                      </span>
                    </div>

                    <div className="h-px w-full overflow-hidden bg-white/[0.07]">
                      <motion.div
                        initial={false}
                        animate={{
                          width: `${
                            ((activeIndex + 1) /
                              principles.length) *
                            100
                          }%`,
                        }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full bg-gradient-to-r from-[#42D5F5] to-[#2DD4BF]"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}