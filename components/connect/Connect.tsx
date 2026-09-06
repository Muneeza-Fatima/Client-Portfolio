"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

export default function Connect() {
  const shouldReduceMotion = useReducedMotion();
  const motionEnabled = !shouldReduceMotion;

  return (
    <section
      id="connect"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#111C27]
        pt-10
        pb-20
        text-[#F5F5F2]
        sm:pt-12
        sm:pb-24
        lg:pt-14
        lg:pb-28
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="
            ambient-blob
            absolute
            -right-[240px]
            -top-[240px]
            h-[560px]
            w-[560px]
            rounded-full
            bg-[#38BDF8]/[0.045]
            blur-[160px]
          "
          style={
            motionEnabled
              ? ({
                  "--drift-x": "25px",
                  "--drift-y": "-15px",
                  "--drift-opacity-from": 0.12,
                  "--drift-opacity-to": 0.2,
                  "--drift-duration": "22s",
                } as CSSProperties)
              : undefined
          }
        />

        <div
          className="
            absolute
            -left-[280px]
            bottom-[-300px]
            h-[580px]
            w-[580px]
            rounded-full
            bg-[#6366F1]/[0.025]
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.009]
            bg-[linear-gradient(rgba(255,255,255,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.65)_1px,transparent_1px)]
            bg-[size:110px_110px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(17,28,39,0.18)_45%,rgba(4,15,27,0.72)_100%)]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        <div className="h-px w-full bg-white/[0.07]" />

        <div
          className="
            grid
            gap-12
            pt-10
            lg:grid-cols-[1fr_auto]
            lg:items-end
            lg:gap-16
            lg:pt-14
          "
        >
          <div className="max-w-[920px]">
            <motion.div
              initial={
                motionEnabled
                  ? {
                      opacity: 0,
                      y: 10,
                    }
                  : false
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-3"
            >
              <span
                className="
                  h-px
                  w-9
                  bg-gradient-to-r
                  from-[#64748B]
                  via-[#67E8F9]
                  to-[#60A5FA]
                  sm:w-11
                "
              />

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#A9D8E8]
                  sm:text-[10px]
                "
              >
                Connect
              </span>
            </motion.div>

            <motion.h2
              initial={
                motionEnabled
                  ? {
                      opacity: 0,
                      y: 22,
                    }
                  : false
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.75,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-7
                max-w-[920px]
                overflow-visible
                pb-3
                font-serif
                text-[clamp(2.45rem,6vw,6.2rem)]
                font-medium
                leading-[1]
                tracking-[-0.055em]
                sm:text-[clamp(2.7rem,6vw,6.2rem)]
                lg:text-[clamp(2.7rem,5.5vw,5.5rem)]
              "
            >
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#F8FAFC]
                  via-[#D7E5EF]
                  to-[#9DB8CA]
                  bg-clip-text
                  pb-[0.06em]
                  text-transparent
                "
              >
                Open to meaningful
              </span>

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-[#B9D7E8]
                  via-[#5FB8D4]
                  to-[#3B82B6]
                  bg-clip-text
                  pb-2
                  text-transparent
                  drop-shadow-[0_0_26px_rgba(95,184,212,0.10)]
                "
              >
                conversations.
              </span>
            </motion.h2>

            <motion.p
              initial={
                motionEnabled
                  ? {
                      opacity: 0,
                      y: 12,
                    }
                  : false
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: 0.12,
              }}
              className="
                mt-6
                max-w-[650px]
                text-[13px]
                leading-7
                text-[#CBD5E1]
                sm:text-[15px]
                sm:leading-8
              "
            >
              Whether you have an idea, an opportunity or simply want to
              start a conversation, I&apos;m open to exploring what we can
              build together.
            </motion.p>
          </div>

          <motion.div
            initial={
              motionEnabled
                ? {
                    opacity: 0,
                    y: 18,
                  }
                : false
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.65,
              delay: 0.18,
            }}
            className="flex -translate-y-1"
          >
            <Link
              href="/contact"
              className="
                group
                relative
                inline-flex
                h-[64px]
                min-w-[250px]
                items-center
                justify-center
                gap-3
                overflow-visible
                rounded-full
                border
                border-[#67E8F9]/55
                bg-[#0B1F33]
                px-8
                text-[12px]
                font-bold
                uppercase
                tracking-[0.15em]
                !text-[#F8FAFC]
                shadow-[0_14px_40px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.08)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#67E8F9]/85
                hover:bg-[#102D48]
                hover:shadow-[0_18px_48px_rgba(56,189,248,0.18),inset_0_1px_0_rgba(255,255,255,0.10)]
                focus:outline-none
                focus:ring-2
                focus:ring-[#67E8F9]/30
                max-sm:shadow-[0_0_14px_rgba(103,232,249,0.10),0_14px_40px_rgba(0,0,0,0.30)]
              "
            >
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -inset-[2px]
                  rounded-full
                  border
                  border-[#67E8F9]/[0.18]
                  shadow-[0_0_12px_rgba(103,232,249,0.14)]
                  max-sm:border-[#67E8F9]/[0.30]
                  max-sm:shadow-[0_0_16px_rgba(103,232,249,0.20)]
                "
              />

              <span className="relative z-10 !text-[#F8FAFC]">
                Start a Conversation
              </span>

              <span
                className="
                  relative
                  z-10
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.12]
                  bg-white/[0.05]
                  text-[#67E8F9]
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:border-[#67E8F9]/30
                "
              >
                <MessageCircle size={15} strokeWidth={1.7} />
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={
            motionEnabled
              ? {
                  opacity: 0,
                  y: 10,
                }
              : false
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
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.06]
            pt-6
            sm:mt-14
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.10]
                bg-white/[0.025]
                text-[#67E8F9]
              "
            >
              <Mail size={13} strokeWidth={1.4} />
            </span>

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-white
              "
            >
              Open for selected opportunities
            </span>
          </div>

          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-white
            "
          >
            Technology · Business · Ventures
          </span>
        </motion.div>
      </div>
    </section>
  );
}