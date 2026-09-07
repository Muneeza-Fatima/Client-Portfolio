"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Vision() {
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
    <section className="relative flex min-h-0 items-center overflow-hidden bg-[#E9E9E5] py-14 text-[#0B1F33] sm:min-h-[68vh] sm:py-28 lg:py-32">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        {/* Center glow — static for better performance */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[340px]
            w-[340px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#168BD1]/[0.035]
            blur-[90px]
            sm:h-[460px]
            sm:w-[460px]
            sm:blur-[120px]
            lg:h-[620px]
            lg:w-[620px]
            lg:blur-[160px]
          "
        />

        {/* Right atmosphere */}
        <div
          className="
            absolute
            -right-24
            top-[15%]
            h-[220px]
            w-[220px]
            rounded-full
            bg-[#42D5F5]/[0.028]
            blur-[80px]
            sm:-right-32
            sm:h-[280px]
            sm:w-[280px]
            sm:blur-[110px]
            lg:h-[320px]
            lg:w-[320px]
            lg:blur-[130px]
          "
        />

        {/* Left atmosphere */}
        <div
          className="
            absolute
            -left-28
            bottom-[5%]
            h-[240px]
            w-[240px]
            rounded-full
            bg-[#168BD1]/[0.025]
            blur-[90px]
            sm:-left-40
            sm:h-[300px]
            sm:w-[300px]
            sm:blur-[120px]
            lg:h-[340px]
            lg:w-[340px]
            lg:blur-[140px]
          "
        />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(7,24,39,0.035)_100%)]" />

        {/* Static grid — no animation */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.012]
            sm:opacity-[0.018]
          "
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(11,31,51,.8) 1px, transparent 1px), linear-gradient(rgba(11,31,51,.8) 1px, transparent 1px)",
            backgroundSize: "160px 160px",
          }}
        />

        {/* Section borders */}
        <div className="absolute inset-x-0 top-0 h-px bg-[#0B1F33]/[0.08]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#0B1F33]/[0.06]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 14,
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
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-7 bg-[#168BD1]/50" />

            <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-[#168BD1] sm:text-[9px]">
              07 — The Vision
            </span>

            <span className="h-px w-7 bg-[#168BD1]/50" />
          </div>

          {/* Heading */}
          <motion.h2
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
              duration: 0.65,
              delay: 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-5
              max-w-4xl
              text-[clamp(2.7rem,6.2vw,5.8rem)]
              font-medium
              leading-[0.91]
              tracking-[-0.07em]
              antialiased
              lg:text-[clamp(2.4rem,5vw,5rem)]
            "
          >
            <span className="block text-[#0B1F33]">
              Protect what matters.
            </span>

            <span
              className="
                mt-2
                block
                bg-gradient-to-r
                from-[#0B1F33]
                via-[#168BD1]
                to-[#42BFD5]
                bg-clip-text
                text-transparent
              "
            >
              Build what comes next.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 12,
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
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-6
              max-w-[620px]
              text-[12px]
              leading-6
              text-[#536776]
              sm:mt-8
              sm:text-[14px]
              sm:leading-7
            "
          >
            The goal is to keep developing at the intersection of
            cybersecurity, technology, communication and business —
            creating solutions that are practical, reliable and built
            for a changing world.
          </motion.p>

          {/* Minimal closing accent */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scaleX: 0,
                  }
            }
            whileInView={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    scaleX: 1,
                  }
            }
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.55,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-7
              h-px
              w-16
              origin-center
              bg-gradient-to-r
              from-transparent
              via-[#168BD1]/60
              to-transparent
              sm:mt-10
            "
          />
        </motion.div>
      </div>
    </section>
  );
}