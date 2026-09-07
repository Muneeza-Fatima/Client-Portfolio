"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export default function AboutCTA() {
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
    <section className="relative overflow-hidden bg-[#071522] py-20 sm:py-28 lg:py-32">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        {/* Static primary atmosphere */}
        <div
          className="
            absolute
            left-[70%]
            top-1/2
            h-[340px]
            w-[340px]
            -translate-y-1/2
            rounded-full
            bg-[#168BD1]/[0.04]
            blur-[90px]
            sm:h-[450px]
            sm:w-[450px]
            sm:blur-[120px]
            lg:h-[560px]
            lg:w-[560px]
            lg:blur-[160px]
          "
        />

        {/* Static secondary atmosphere */}
        <div
          className="
            absolute
            -left-28
            bottom-0
            h-[220px]
            w-[220px]
            rounded-full
            bg-[#2DD4BF]/[0.02]
            blur-[90px]
            sm:-left-40
            sm:h-[280px]
            sm:w-[280px]
            sm:blur-[120px]
            lg:h-[320px]
            lg:w-[320px]
            lg:blur-[140px]
          "
        />

        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.06]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
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
            shadow-[0_35px_90px_rgba(0,0,0,0.22)]
            sm:px-10
            sm:py-14
            lg:px-14
            lg:py-16
          "
        >
          {/* Internal light */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="
                absolute
                right-[-12%]
                top-[-40%]
                h-[300px]
                w-[300px]
                rounded-full
                bg-[#2DD4BF]/[0.04]
                blur-[90px]
                sm:h-[380px]
                sm:w-[380px]
                sm:blur-[110px]
                lg:h-[460px]
                lg:w-[460px]
                lg:blur-[130px]
              "
            />

            <div
              className="
                absolute
                bottom-[-45%]
                left-[32%]
                h-[240px]
                w-[240px]
                rounded-full
                bg-[#168BD1]/[0.025]
                blur-[90px]
                sm:h-[290px]
                sm:w-[290px]
                sm:blur-[105px]
                lg:h-[340px]
                lg:w-[340px]
                lg:blur-[120px]
              "
            />
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
                whileHover={
                  motionEnabled
                    ? {
                        y: -3,
                      }
                    : undefined
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
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
                  transition-[border-color,box-shadow,transform]
                  duration-300
                  ease-out
                  hover:border-[#42D5F5]/70
                  hover:shadow-[0_18px_44px_rgba(22,139,209,0.28)]
                "
              >
                {/* Hover surface — desktop only */}
                {motionEnabled && (
                  <span className="pointer-events-none absolute inset-0 bg-white/[0.08] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                )}

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
                  className={`
                    relative
                    text-white
                    ${
                      motionEnabled
                        ? "transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        : ""
                    }
                  `}
                />
              </motion.a>

              {/* LINKEDIN — SECONDARY */}
              <motion.a
                href="https://www.linkedin.com/in/badarulhaq838"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={
                  motionEnabled
                    ? {
                        y: -3,
                      }
                    : undefined
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
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
                  transition-[border-color,background-color,box-shadow,transform]
                  duration-300
                  ease-out
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
                  className={`
                    text-white/80
                    ${
                      motionEnabled
                        ? "transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#67E8F9]"
                        : ""
                    }
                  `}
                />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}