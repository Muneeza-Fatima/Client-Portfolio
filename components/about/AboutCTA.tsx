"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export default function AboutCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#071522] py-20 sm:py-28 lg:py-32">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="ambient-blob absolute left-[70%] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-[#168BD1]/[0.055] blur-[180px]"
          style={
            reduceMotion
              ? undefined
              : ({
                  "--drift-scale-from": 1,
                  "--drift-scale-to": 1.06,
                  "--drift-opacity-from": 0.45,
                  "--drift-opacity-to": 0.65,
                  "--drift-duration": "18s",
                } as any)
          }
        />

        <div className="absolute -left-40 bottom-0 h-[320px] w-[320px] rounded-full bg-[#2DD4BF]/[0.025] blur-[150px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.06]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
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
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-white/[0.1]
            bg-[#0B1F33]
            px-7
            py-10
            shadow-[0_35px_110px_rgba(0,0,0,0.24)]
            sm:px-10
            sm:py-14
            lg:px-14
            lg:py-16
          "
        >
          {/* Internal light */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-5%] top-[-45%] h-[460px] w-[460px] rounded-full bg-[#2DD4BF]/[0.055] blur-[130px]" />

            <div className="absolute bottom-[-50%] left-[32%] h-[340px] w-[340px] rounded-full bg-[#168BD1]/[0.035] blur-[120px]" />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center lg:gap-20">
            {/* LEFT */}
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#42D5F5]" />

                <span className="text-[8px] font-medium uppercase tracking-[0.36em] text-[#67D9F0] sm:text-[9px]">
                  Start a Conversation
                </span>
              </div>

              <h2
                className="
                  mt-5
                  max-w-3xl
                  font-sans
                  text-[clamp(1.95rem,4vw,4rem)]
                  font-semibold
                  leading-[1.08]
                  tracking-[-0.045em]
                  text-white
                  antialiased
                "
              >
                Open to opportunities,
                <span
                  className="
                    mt-1
                    block
                    bg-gradient-to-r
                    from-[#F1F6FA]
                    via-[#82E2F3]
                    to-[#168BD1]
                    bg-clip-text
                    pb-2
                    text-transparent
                  "
                >
                  collaborations and meaningful work.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-[13px] leading-7 text-white/45 sm:mt-6 sm:text-[14px]">
                Whether it is a professional opportunity, collaboration or
                simply a thoughtful conversation, the door is open.
              </p>
            </div>

            {/* RIGHT — HIGH VISIBILITY CTA */}
            <div className="relative z-20 flex w-full flex-col gap-4 lg:w-[280px]">
              {/* EMAIL — PRIMARY */}
              <motion.a
                href="mailto:lynisbadar838@outlook.com?subject=Hello%20Badar%20Ul%20Haq&body=Hi%20Badar%2C%0A%0AI%20would%20like%20to%20get%20in%20touch."
                whileHover={reduceMotion ? undefined : { y: -4 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                className="
                  group
                  relative
                  flex
                  min-h-[64px]
                  w-full
                  items-center
                  justify-between
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#42D5F5]/55
                  bg-gradient-to-r
                  from-[#1FAFA3]
                  to-[#168BD1]
                  px-5
                  text-white
                  shadow-[0_15px_40px_rgba(22,139,209,0.22)]
                  transition-all
                  duration-300
                  hover:shadow-[0_20px_48px_rgba(22,139,209,0.32)]
                "
              >
                <span className="absolute inset-0 bg-white/[0.08] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="relative flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/10">
                    <Mail
                      size={18}
                      strokeWidth={1.5}
                      className="text-white"
                    />
                  </span>

                  <span className="text-[14px] font-semibold text-white">
                    Email
                  </span>
                </span>

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.5}
                  className="
                    relative
                    text-white
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </motion.a>

              {/* LINKEDIN — SECONDARY */}
              <motion.a
                href="https://www.linkedin.com/in/badarulhaq838"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduceMotion ? undefined : { y: -4 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                className="
                  group
                  flex
                  min-h-[64px]
                  w-full
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-white/[0.22]
                  bg-[#19364A]
                  px-5
                  text-white
                  shadow-[0_12px_35px_rgba(0,0,0,0.2)]
                  transition-all
                  duration-300
                  hover:border-white/[0.34]
                  hover:bg-[#204157]
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.24)]
                "
              >
                <span className="flex items-center gap-3">
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/[0.1]
                      text-[11px]
                      font-bold
                      text-white
                    "
                  >
                    in
                  </span>

                  <span className="text-[14px] font-semibold text-white">
                    LinkedIn
                  </span>
                </span>

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.5}
                  className="
                    text-white/80
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-[#67E8F9]
                  "
                />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}