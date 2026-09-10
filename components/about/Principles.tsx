"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Integrity",
    description:
      "Trust is built through consistency, transparency and actions that stand behind the words.",
    icon: "🤝",
    keyword: "Trust",
  },
  {
    number: "02",
    title: "Continuous Learning",
    description:
      "Technology changes quickly. Staying curious and continuously improving is part of the process.",
    icon: "🌱",
    keyword: "Evolution",
  },
  {
    number: "03",
    title: "Clear Communication",
    description:
      "Good solutions become effective when complex ideas can be understood by the people who need to act on them.",
    icon: "💬",
    keyword: "Clarity",
  },
  {
    number: "04",
    title: "Real-World Impact",
    description:
      "The objective is practical value — stronger security, better decisions and meaningful outcomes.",
    icon: "🌐",
    keyword: "Impact",
  },
];

export default function Principles() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const active = principles[activeIndex];

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
            h-[380px]
            w-[380px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[rgba(20,120,175,0.05)]
            blur-[90px]
            sm:h-[470px]
            sm:w-[470px]
            sm:blur-[110px]
            lg:h-[560px]
            lg:w-[560px]
            lg:blur-[130px]
          "
        />

        <div
          className="
            absolute
            right-[-12%]
            top-[8%]
            h-[260px]
            w-[260px]
            rounded-full
            bg-[rgba(45,212,191,0.022)]
            blur-[80px]
            sm:h-[310px]
            sm:w-[310px]
            sm:blur-[100px]
            lg:h-[360px]
            lg:w-[360px]
            lg:blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-18%]
            left-[8%]
            h-[280px]
            w-[340px]
            rounded-full
            bg-[rgba(37,99,235,0.028)]
            blur-[90px]
            sm:h-[340px]
            sm:w-[400px]
            sm:blur-[110px]
            lg:h-[380px]
            lg:w-[460px]
            lg:blur-[130px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.014]
            sm:opacity-[0.018]
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
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.55,
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
                          x: -18,
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
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    motionEnabled
                      ? {
                          x: 3,
                        }
                      : undefined
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
                    transition-[border-color,background-color,transform]
                    duration-300
                    sm:py-5
                    ${
                      isActive
                        ? "border-[#42D5F5]/25 bg-[#0D2A40]"
                        : `border-white/[0.085] bg-[#0A2438] ${
                            motionEnabled
                              ? "hover:border-white/[0.14] hover:bg-[#0D2940]"
                              : ""
                          }`
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
                          : motionEnabled
                            ? "opacity-0 group-hover:opacity-50"
                            : "opacity-0"
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
                      h-24
                      w-24
                      rounded-full
                      bg-[#42D5F5]/[0.04]
                      blur-2xl
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
                        transition-[border-color,background-color,box-shadow,transform]
                        duration-300
                        ${
                          isActive
                            ? "border-[#42D5F5]/30 bg-[#42D5F5]/[0.08] shadow-[0_0_18px_rgba(66,213,245,0.08)]"
                            : `border-white/[0.09] bg-white/[0.025] ${
                                motionEnabled
                                  ? "group-hover:border-[#42D5F5]/25 group-hover:shadow-[0_0_16px_rgba(66,213,245,0.06)]"
                                  : ""
                              }`
                        }
                      `}
                    >
                      <span
                        aria-hidden="true"
                        className="
                          block
                          select-none
                          text-[21px]
                          leading-none
                          drop-shadow-[0_3px_10px_rgba(255,255,255,0.10)]
                        "
                      >
                        {item.icon}
                      </span>
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
                              : `text-[#718997] ${
                                  motionEnabled
                                    ? "group-hover:text-[#86A4B4]"
                                    : ""
                                }`
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
                              : `text-[#C8D5DE] ${
                                  motionEnabled
                                    ? "group-hover:text-white"
                                    : ""
                                }`
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
                -inset-3
                rounded-[2rem]
                bg-[radial-gradient(circle_at_50%_45%,rgba(45,212,191,0.045),transparent_58%)]
                blur-xl
                sm:-inset-4
                sm:blur-2xl
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
                shadow-[0_20px_55px_rgba(0,0,0,0.18)]
                sm:shadow-[0_24px_65px_rgba(0,0,0,0.22)]
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
                  h-[250px]
                  w-[250px]
                  rounded-full
                  bg-[#26C9E8]/[0.028]
                  blur-[80px]
                  sm:h-[300px]
                  sm:w-[300px]
                  sm:blur-[95px]
                  lg:h-[340px]
                  lg:w-[340px]
                  lg:blur-[110px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-22%]
                  left-[8%]
                  h-[220px]
                  w-[320px]
                  rounded-full
                  bg-[#2563EB]/[0.028]
                  blur-[85px]
                  sm:h-[240px]
                  sm:w-[360px]
                  sm:blur-[95px]
                  lg:h-[260px]
                  lg:w-[400px]
                  lg:blur-[110px]
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
                          y: 10,
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
                          y: -8,
                        }
                  }
                  transition={{
                    duration: 0.28,
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
                          border-[#42D5F5]/25
                          bg-gradient-to-br
                          from-[#42D5F5]/[0.10]
                          via-[#1E9FC2]/[0.05]
                          to-[#168BD1]/[0.025]
                          shadow-[0_0_24px_rgba(66,213,245,0.07),inset_0_1px_0_rgba(255,255,255,0.08)]
                        "
                      >
                        <span
                          aria-hidden="true"
                          className="
                            select-none
                            text-[30px]
                            leading-none
                            drop-shadow-[0_4px_14px_rgba(255,255,255,0.12)]
                          "
                        >
                          {active.icon}
                        </span>
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
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full bg-gradient-to-r from-[#42D5F5] via-[#2DD4BF] to-[#168BD1]"
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