"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Vision() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-0 items-center overflow-hidden bg-[#E9E9E5] py-14 text-[#0B1F33] sm:min-h-[68vh] sm:py-28 lg:py-32">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            ambient-blob
            absolute left-1/2 top-1/2
            h-[620px] w-[620px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[#168BD1]/[0.045]
            blur-[180px]
          "
          style={
            reduceMotion
              ? undefined
              : ({
                  "--drift-scale-from": 1,
                  "--drift-scale-to": 1.05,
                  "--drift-opacity-from": 0.3,
                  "--drift-opacity-to": 0.45,
                  "--drift-duration": "20s",
                } as any)
          }
        />

        <div className="absolute -right-32 top-[15%] h-[320px] w-[320px] rounded-full bg-[#42D5F5]/[0.035] blur-[140px]" />

        <div className="absolute -left-40 bottom-[5%] h-[340px] w-[340px] rounded-full bg-[#168BD1]/[0.03] blur-[150px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(7,24,39,0.035)_100%)]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(11,31,51,.8) 1px, transparent 1px), linear-gradient(rgba(11,31,51,.8) 1px, transparent 1px)",
            backgroundSize: "160px 160px",
          }}
        />

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
            amount: 0.3,
          }}
          transition={{ duration: 0.8 }}
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
                    y: 24,
                    filter: "blur(6px)",
                  }
            }
            whileInView={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
            }
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.95,
              delay: 0.05,
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
              duration: 0.8,
              delay: 0.2,
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
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.35,
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