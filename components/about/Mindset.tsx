"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Brain, Compass, Target } from "lucide-react";
import { useEffect, useState } from "react";

const mindset = [
  {
    number: "01",
    title: "Understand Before Acting",
    text: "Complex problems require context. The first step is understanding the environment, the risk and the real objective.",
  },
  {
    number: "02",
    title: "Turn Complexity Into Clarity",
    text: "Technical challenges become more valuable when they can be translated into clear, actionable decisions.",
  },
  {
    number: "03",
    title: "Stay Adaptable",
    text: "Cybersecurity, technology and business constantly evolve. Continuous learning is part of staying effective.",
  },
  {
    number: "04",
    title: "Focus on Real Outcomes",
    text: "Whether protecting systems or helping clients make decisions, the goal is practical value rather than complexity for its own sake.",
  },
];

const flow = [
  {
    icon: Brain,
    label: "Input",
    title: "Understand",
    text: "Context, environment, risk and objectives.",
  },
  {
    icon: Compass,
    label: "Process",
    title: "Decide",
    text: "Translate complexity into clear action.",
  },
  {
    icon: Target,
    label: "Outcome",
    title: "Deliver",
    text: "Focus on practical and measurable value.",
  },
];

export default function Mindset() {
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

  // Continuous / hover-heavy motion is limited to fine-pointer devices.
  // Phones and tablets keep the same visual appearance without unnecessary
  // animation/compositing work.
  const motionEnabled = !reduceMotion && finePointer;

  return (
    <section className="relative overflow-hidden bg-[#0A1D2C] pt-12 pb-24 text-white sm:py-28 lg:pt-20 lg:pb-32">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.012] sm:opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "110px 110px",
          }}
        />

        {/* Static ambient glow — avoids continuous mobile animation */}
        <div
          className="
            absolute right-[-12%] top-[-18%]
            h-[340px] w-[340px]
            rounded-full
            bg-[#21A9C4]/[0.055]
            blur-[90px]
            sm:h-[420px] sm:w-[420px]
            sm:blur-[110px]
            lg:h-[500px] lg:w-[500px]
            lg:blur-[130px]
          "
        />

        <div
          className="
            absolute bottom-[-20%] left-[-15%]
            h-[300px] w-[300px]
            rounded-full
            bg-[#176FA3]/[0.055]
            blur-[90px]
            sm:h-[360px] sm:w-[360px]
            sm:blur-[110px]
            lg:h-[420px] lg:w-[420px]
            lg:blur-[130px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* INTRO */}
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#4FD8EF]" />

              <span className="text-[8px] font-semibold uppercase tracking-[0.36em] text-[#79E3F2]/80 sm:text-[9px]">
                02 — The Mindset
              </span>
            </div>

            <p className="mt-2 max-w-[210px] text-[9px] uppercase leading-6 tracking-[0.18em] text-white/65 max-sm:hidden sm:mt-8">
              A framework built around understanding, clarity, adaptability
              and meaningful outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.06 }}
          >
            <h2
              className="
                max-w-4xl
                text-[clamp(3.2rem,9vw,7rem)]
                font-medium
                leading-[0.94]
                tracking-[-0.065em]
                lg:text-[clamp(2.6rem,6vw,5.2rem)]
              "
            >
              <span className="text-white">Think clearly.</span>

              <span className="block text-[#67DDF2]">
                Move with purpose.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-[13px] leading-7 text-[#C3D1DA] sm:text-[14px]">
              Security is technical. Business is human. Effective work
              requires understanding both sides.
            </p>
          </motion.div>
        </div>

        {/* STRATEGIC FLOW */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 grid overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D2233]/75 backdrop-blur-sm sm:mt-14 sm:grid-cols-3 lg:mt-20"
        >
          {flow.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={
                  motionEnabled
                    ? {
                        y: -5,
                      }
                    : undefined
                }
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden border-b border-white/[0.07] p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:p-7 sm:last:border-r-0"
              >
                {/* BORDER SHINE */}
                <span
                  className="
                    pointer-events-none absolute inset-0 rounded-[inherit]
                    border border-[#72E7F5]/20
                    opacity-70
                    transition-[border-color,opacity]
                    duration-700
                    group-hover:border-[#72E7F5]/55
                    group-hover:opacity-100
                  "
                />

                {/* MOVING BORDER LIGHT */}
                <span
                  className={`
                    pointer-events-none absolute
                    left-[-30%] top-0
                    h-px w-[45%]
                    bg-gradient-to-r
                    from-transparent
                    via-[#8DF3FF]
                    to-transparent
                    blur-[1px]
                    opacity-40
                    transition-all
                    duration-[1400ms]
                    ease-out
                    ${
                      motionEnabled
                        ? "group-hover:left-[100%] group-hover:opacity-100"
                        : ""
                    }
                  `}
                />

                <span
                  className={`
                    pointer-events-none absolute
                    right-0 top-[-30%]
                    h-[45%] w-px
                    bg-gradient-to-b
                    from-transparent
                    via-[#8DF3FF]
                    to-transparent
                    blur-[1px]
                    opacity-30
                    transition-all
                    duration-[1400ms]
                    ease-out
                    ${
                      motionEnabled
                        ? "group-hover:top-[100%] group-hover:opacity-90"
                        : ""
                    }
                  `}
                />

                {/* ULTRA SUBTLE SHINE */}
                <span className="pointer-events-none absolute inset-0 overflow-hidden">
                  <span
                    className={`
                      absolute
                      -left-[70%]
                      top-[-100%]
                      h-[300%]
                      w-[18%]
                      rotate-[22deg]
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.065]
                      to-transparent
                      blur-[10px]
                      opacity-0
                      transition-all
                      duration-[1200ms]
                      ease-out
                      ${
                        motionEnabled
                          ? "group-hover:left-[125%] group-hover:opacity-100"
                          : ""
                      }
                    `}
                  />
                </span>

                {/* VERY SOFT CYAN LIGHT */}
                <span
                  className={`
                    pointer-events-none absolute
                    -left-[60%]
                    top-[-80%]
                    h-[260%]
                    w-[20%]
                    rotate-[22deg]
                    bg-[#4FD8EF]/[0.055]
                    blur-[30px]
                    opacity-0
                    transition-all
                    duration-[1250ms]
                    ease-out
                    ${
                      motionEnabled
                        ? "group-hover:left-[130%] group-hover:opacity-100"
                        : ""
                    }
                  `}
                />

                {/* SOFT HOVER GLOW */}
                <span
                  className={`
                    pointer-events-none absolute inset-0
                    bg-gradient-to-br
                    from-[#4FD8EF]/[0.035]
                    via-transparent
                    to-[#168BD1]/[0.018]
                    opacity-0
                    transition-opacity
                    duration-700
                    ${
                      motionEnabled
                        ? "group-hover:opacity-100"
                        : ""
                    }
                  `}
                />

                {/* SUBTLE TOP EDGE */}
                <span
                  className={`
                    pointer-events-none absolute
                    left-0 right-0 top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#7DECF8]
                    to-transparent
                    opacity-30
                    transition-opacity
                    duration-700
                    ${
                      motionEnabled
                        ? "group-hover:opacity-100"
                        : ""
                    }
                  `}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={
                        motionEnabled
                          ? {
                              scale: 1.05,
                              rotate: -2,
                            }
                          : undefined
                      }
                      transition={{ duration: 0.3 }}
                      className="
                        flex h-10 w-10 items-center justify-center
                        rounded-xl
                        border border-[#4FD8EF]/20
                        bg-[#4FD8EF]/[0.06]
                        transition-[border-color,background-color,box-shadow]
                        duration-500
                        group-hover:border-[#6FE7F5]/40
                        group-hover:bg-[#4FD8EF]/[0.09]
                        group-hover:shadow-[0_0_18px_rgba(79,216,239,0.09)]
                      "
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.25}
                        className="text-[#79E3F2] transition-colors duration-300 group-hover:text-white"
                      />
                    </motion.div>

                    <span className="text-[7px] font-medium uppercase tracking-[0.28em] text-white/65 transition-colors duration-300 group-hover:text-[#79E3F2]">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="mt-6 text-[17px] font-medium tracking-[-0.025em] text-white/90 transition-transform duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-[230px] text-[11px] leading-6 text-[#B8C8D3] transition-colors duration-300 group-hover:text-[#D5E2E8]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* WORKING PRINCIPLES */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 sm:mt-24"
        >
          <p className="text-[8px] font-semibold uppercase tracking-[0.34em] text-[#63DDEC]/80">
            Working Principles
          </p>

          <h3 className="mt-2 text-[22px] font-medium tracking-[-0.045em] text-white sm:text-[26px]">
            How the work gets done.
          </h3>
        </motion.div>

        {/* PRINCIPLES */}
        <div className="mt-7 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0C2132]/80">
          {mindset.map((item, index) => (
            <motion.article
              key={item.number}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={
                motionEnabled
                  ? {
                      x: 4,
                    }
                  : undefined
              }
              className="group relative overflow-hidden border-b border-white/[0.06] last:border-b-0"
            >
              {/* ULTRA SUBTLE SHINE */}
              <span className="pointer-events-none absolute inset-0 overflow-hidden">
                <span
                  className={`
                    absolute
                    -left-[55%]
                    top-[-120%]
                    h-[340%]
                    w-[15%]
                    rotate-[18deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.05]
                    to-transparent
                    blur-[11px]
                    opacity-0
                    transition-all
                    duration-[1350ms]
                    ease-out
                    ${
                      motionEnabled
                        ? "group-hover:left-[125%] group-hover:opacity-100"
                        : ""
                    }
                  `}
                />
              </span>

              {/* VERY SOFT CYAN LIGHT */}
              <span
                className={`
                  pointer-events-none absolute
                  -left-[45%]
                  top-[-100%]
                  h-[320%]
                  w-[14%]
                  rotate-[18deg]
                  bg-[#4FD8EF]/[0.045]
                  blur-[28px]
                  opacity-0
                  transition-all
                  duration-[1400ms]
                  ease-out
                  ${
                    motionEnabled
                      ? "group-hover:left-[125%] group-hover:opacity-100"
                      : ""
                  }
                `}
              />

              {/* SOFT BACKGROUND LIGHT */}
              <span
                className={`
                  pointer-events-none absolute inset-0
                  bg-gradient-to-r
                  from-[#4FD8EF]/[0.035]
                  via-[#4FD8EF]/[0.012]
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-700
                  ${
                    motionEnabled
                      ? "group-hover:opacity-100"
                      : ""
                  }
                `}
              />

              {/* SUBTLE LEFT EDGE — ALL DEVICES */}
              <span
                className="
                  pointer-events-none absolute
                  bottom-0 left-0 top-0
                  w-px
                  origin-bottom
                  scale-y-100
                  bg-[#5DE5F5]
                  opacity-100
                  shadow-[0_0_12px_rgba(93,229,245,0.65)]
                "
              />

              <div className="relative z-10 grid gap-4 px-5 py-6 sm:px-8 sm:py-7 lg:grid-cols-[60px_0.9fr_1.1fr] lg:items-center lg:gap-10">
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#5ED9EA]/65">
                  {item.number}
                </span>

                <h4 className="text-[1.15rem] font-medium leading-[1.2] tracking-[-0.035em] text-white/90 transition-[transform,color] duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-[1.3rem]">
                  {item.title}
                </h4>

                <p className="max-w-xl text-[12px] leading-6 text-[#B8C8D3] transition-colors duration-300 group-hover:text-[#D5E2E8] sm:text-[13px]">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CLOSING */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-[12px] leading-6 text-[#B8C8D3]">
            Understand deeply, decide intelligently and create meaningful
            outcomes.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#55DCEE] shadow-[0_0_7px_rgba(85,220,238,0.3)]" />

            <span className="text-[7px] font-semibold uppercase tracking-[0.28em] text-[#55DCEE]/70">
              Continuously evolving
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}