"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutHero() {
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

  // Continuous animations are reserved for desktop/fine-pointer devices.
  // Phones/tablets keep the same visual design without expensive infinite animations.
  const motionEnabled = !reduceMotion && finePointer;

  return (
    <section className="relative isolate min-h-0 overflow-hidden bg-[#061522] text-white sm:min-h-[92vh]">
      {/* PREMIUM CINEMATIC BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Ambient top glow */}
        <motion.div
          animate={
            motionEnabled
              ? {
                  scale: [1, 1.04, 1],
                  opacity: [0.55, 0.8, 0.55],
                }
              : undefined
          }
          transition={
            motionEnabled
              ? {
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined
          }
          className="
            absolute left-1/2 top-[-25%] h-[520px] w-[850px]
            -translate-x-1/2 rounded-[50%]
            bg-[radial-gradient(ellipse_at_center,rgba(40,174,224,0.15)_0%,rgba(16,104,151,0.08)_35%,transparent_70%)]
            sm:top-[-28%] sm:h-[680px] sm:w-[1050px]
            lg:h-[850px] lg:w-[1300px]
          "
        />

        {/* Inner atmosphere */}
        <motion.div
          animate={
            motionEnabled
              ? {
                  scale: [1, 1.08, 1],
                  opacity: [0.35, 0.6, 0.35],
                }
              : undefined
          }
          transition={
            motionEnabled
              ? {
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined
          }
          className="
            absolute left-1/2 top-[-7%] h-[380px] w-[620px]
            -translate-x-1/2 rounded-[50%]
            bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12)_0%,rgba(14,116,144,0.04)_45%,transparent_72%)]
            sm:h-[470px] sm:w-[760px]
            lg:h-[560px] lg:w-[900px]
          "
        />

        {/* Orbital ring */}
        <motion.div
          animate={
            motionEnabled
              ? {
                  rotate: 360,
                }
              : undefined
          }
          transition={
            motionEnabled
              ? {
                  duration: 32,
                  repeat: Infinity,
                  ease: "linear",
                }
              : undefined
          }
          className="
            absolute left-1/2 top-[2%]
            h-[400px] w-[720px]
            -translate-x-1/2 rounded-[50%]
            border border-[#38CFF4]/[0.06]
            sm:h-[500px] sm:w-[900px]
            lg:h-[580px] lg:w-[1050px]
          "
        >
          <motion.div
            animate={
              motionEnabled
                ? {
                    scale: [0.75, 1.15, 0.75],
                    opacity: [0.15, 0.5, 0.15],
                  }
                : undefined
            }
            transition={
              motionEnabled
                ? {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : undefined
            }
            className="
              absolute left-[10%] top-[8%]
              h-16 w-16 rounded-full
              bg-[#38CFF4]/10 blur-2xl
              sm:h-20 sm:w-20 sm:blur-3xl
              lg:h-24 lg:w-24
            "
          />
        </motion.div>

        {/* Moving highlight */}
        <motion.div
          initial={{ x: "-120%", opacity: 0 }}
          animate={
            motionEnabled
              ? {
                  x: ["-120%", "120%"],
                  opacity: [0, 0.5, 0],
                }
              : {
                  x: "-120%",
                  opacity: 0,
                }
          }
          transition={
            motionEnabled
              ? {
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined
          }
          className="
            absolute left-1/2 top-[25%]
            hidden h-px w-[600px]
            -translate-x-1/2
            bg-gradient-to-r from-transparent via-[#67D9F0]/40 to-transparent
            blur-[1px]
            sm:block
          "
        />

        {/* Left depth light */}
        <div
          className="
            absolute -left-[15%] top-[30%]
            h-[300px] w-[300px] rounded-full
            bg-[#087EA4]/10 blur-[100px]
            sm:h-[370px] sm:w-[370px] sm:blur-[125px]
            lg:h-[430px] lg:w-[430px] lg:blur-[150px]
          "
        />

        {/* Right depth light */}
        <div
          className="
            absolute -right-[15%] bottom-[4%]
            h-[330px] w-[330px] rounded-full
            bg-[#075B9A]/10 blur-[105px]
            sm:h-[410px] sm:w-[410px] sm:blur-[135px]
            lg:h-[480px] lg:w-[480px] lg:blur-[160px]
          "
        />

        {/* Subtle grid */}
        <motion.div
          animate={
            motionEnabled
              ? {
                  backgroundPosition: ["0px 0px", "100px 100px"],
                }
              : undefined
          }
          transition={
            motionEnabled
              ? {
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }
              : undefined
          }
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,transparent_0%,rgba(6,21,34,0.35)_48%,rgba(6,21,34,0.92)_100%)]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#061522] via-[#061522]/80 to-transparent sm:h-60" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto flex min-h-0 max-w-7xl items-start px-5 pb-24 pt-32 sm:min-h-[92vh] sm:items-end sm:px-8 sm:pb-18 sm:pt-32 lg:px-12 lg:pb-20">
        <div className="w-full">
          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="mb-6 flex items-center gap-3 sm:mb-8"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 38 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="h-px bg-[#42D5F5]"
            />

            <span className="text-[9px] font-semibold uppercase tracking-[0.34em] text-[#67D9F0]">
              About the Founder
            </span>

            <span className="h-1 w-1 rounded-full bg-[#42D5F5]/60" />
          </motion.div>

          {/* MAIN GRID */}
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_280px] lg:gap-20">
            {/* HEADING */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.18,
                  ease: "easeOut",
                }}
                className="max-w-5xl text-[clamp(3.5rem,9vw,8.6rem)] font-semibold leading-[0.83] tracking-[-0.07em] lg:text-[clamp(3rem,6vw,6.8rem)]"
              >
                <span className="block text-white">Beyond</span>

                <span className="mt-2 block text-[#DCE7F5]">
                  the{" "}
                  <span className="bg-gradient-to-r from-[#8DEBFF] via-[#42D5F5] to-[#168BD1] bg-clip-text text-transparent">
                    Title.
                  </span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.42,
                  ease: "easeOut",
                }}
                className="mt-7 max-w-2xl text-[15px] leading-8 text-white/80 sm:mt-9 sm:text-[17px]"
              >
                A deeper look at the person behind the professional title —
                shaped by cybersecurity, business, leadership and real-world
                experience.
              </motion.p>

              {/* Mobile professional focus */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.6,
                }}
                className="mt-7 flex items-center gap-4 lg:hidden"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#42D5F5]/20 bg-[#42D5F5]/[0.06]">
                  <ShieldCheck
                    size={19}
                    strokeWidth={1.3}
                    className="text-[#67D9F0]"
                  />
                </div>

                <div>
                  <p className="text-[8px] uppercase tracking-[0.24em] text-white/70">
                    Professional Focus
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Cybersecurity Analyst
                  </p>
                </div>
              </motion.div>
            </div>

            {/* PROFESSIONAL FOCUS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="relative hidden overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 backdrop-blur-md lg:block lg:backdrop-blur-xl"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#42D5F5] via-[#168BD1] to-transparent" />

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#42D5F5]/20 bg-[#42D5F5]/[0.06]">
                <ShieldCheck
                  size={21}
                  strokeWidth={1.3}
                  className="text-[#67D9F0]"
                />
              </div>

              <p className="mt-6 text-[8px] font-semibold uppercase tracking-[0.26em] text-white/70">
                Professional Focus
              </p>

              <p className="mt-2 text-sm font-medium text-white">
                Cybersecurity Analyst
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#42D5F5] shadow-[0_0_10px_rgba(66,213,245,0.7)]" />

                <p className="text-[10px] text-white/70">
                  Dubai, United Arab Emirates
                </p>
              </div>

              <Sparkles
                size={14}
                strokeWidth={1}
                className="absolute right-5 top-5 text-[#42D5F5]/25"
              />
            </motion.div>
          </div>

          {/* BOTTOM NAV / SCROLL CUE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.85,
            }}
            className="mt-9 flex items-center justify-between border-t border-white/[0.07] pt-5 sm:mt-14 sm:pt-6"
          >
            <div className="flex items-center gap-4">
              <motion.div
                animate={
                  motionEnabled
                    ? {
                        y: [0, 5, 0],
                      }
                    : undefined
                }
                transition={
                  motionEnabled
                    ? {
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : undefined
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-[#67D9F0] transition-[border-color,background-color,transform] duration-300 hover:border-[#42D5F5]/30 hover:bg-[#42D5F5]/[0.06]"
              >
                <ArrowDownRight size={17} strokeWidth={1.3} />
              </motion.div>

              <div>
                <span className="block text-[9px] font-medium uppercase tracking-[0.3em] text-white/70">
                  Explore
                </span>

                <span className="mt-1 block text-[10px] text-white/65">
                  Discover the journey
                </span>
              </div>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <span className="text-[8px] uppercase tracking-[0.25em] text-white/65">
                Scroll to explore
              </span>

              <span className="h-px w-12 bg-gradient-to-r from-[#42D5F5]/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}