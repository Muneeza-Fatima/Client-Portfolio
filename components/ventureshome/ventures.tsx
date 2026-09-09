"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Globe2,
  Brain,
  Building2,
  TrendingUp,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

const ventures = [
  {
    number: "01",
    icon: TrendingUp,
    category: "TRADE",
    title: "International Trading",
    subtitle: "Cross-Border Commerce",
    description:
      "Creating pathways between markets through strategic sourcing, partnerships and international business.",
  },
  {
    number: "02",
    icon: Brain,
    category: "TECHNOLOGY",
    title: "Technology & AI",
    subtitle: "Digital Innovation",
    description:
      "Exploring technology-driven solutions that improve efficiency, unlock new opportunities and shape future businesses.",
  },
  {
    number: "03",
    icon: Building2,
    category: "REAL ESTATE",
    title: "Real Estate",
    subtitle: "Property & Market Opportunities",
    description:
      "Identifying promising property opportunities through market awareness, relationships and long-term thinking.",
  },
];

export default function Ventures() {
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

  // Lightweight ring animation works on all devices.
  // Heavy section/card motion remains limited to fine-pointer devices.
  const ringAnimated = !shouldReduceMotion;

  return (
    <section
      id="ventures"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#0B1F33]
        py-16
        text-[#F8FAFC]
        sm:py-20
        lg:py-24
      "
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_12%_8%,rgba(96,165,250,0.10),transparent_27%),radial-gradient(circle_at_88%_38%,rgba(45,212,191,0.07),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.05),transparent_34%)]
          "
        />

        <div
          className="
            absolute
            -left-[190px]
            -top-[190px]
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#38BDF8]/[0.055]
            blur-[90px]
            sm:-left-[250px]
            sm:-top-[250px]
            sm:h-[500px]
            sm:w-[500px]
            sm:blur-[150px]
            lg:-left-[320px]
            lg:-top-[320px]
            lg:h-[620px]
            lg:w-[620px]
            lg:blur-[180px]
          "
        />

        <div
          className="
            absolute
            -right-[190px]
            top-[20%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#6366F1]/[0.04]
            blur-[90px]
            sm:-right-[250px]
            sm:h-[480px]
            sm:w-[480px]
            sm:blur-[150px]
            lg:-right-[320px]
            lg:h-[600px]
            lg:w-[600px]
            lg:blur-[180px]
          "
        />

        <div
          className="
            absolute
            bottom-[-260px]
            left-1/2
            h-[420px]
            w-[520px]
            -translate-x-1/2
            rounded-full
            bg-[#14B8A6]/[0.025]
            blur-[100px]
            sm:bottom-[-320px]
            sm:h-[540px]
            sm:w-[660px]
            sm:blur-[150px]
            lg:bottom-[-360px]
            lg:h-[620px]
            lg:w-[760px]
            lg:blur-[190px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(255,255,255,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.65)_1px,transparent_1px)]
            bg-[size:120px_120px]
            opacity-[0.009]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_30%,transparent_0%,rgba(255,255,255,0.015)_42%,rgba(4,15,27,0.35)_100%)]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-44
            bg-gradient-to-t
            from-[#071725]/[0.30]
            to-transparent
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1380px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* SECTION LABEL */}
        <motion.div
          initial={motionEnabled ? { opacity: 0, y: 8 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.45,
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
              via-[#0F9DB5]
              to-[#168BD1]
              sm:w-11
            "
          />

          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.32em]
              text-[#8FB5C5]
              sm:text-[10px]
            "
          >
            Ventures
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.div
          initial={motionEnabled ? { opacity: 0, y: 14 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.55,
            delay: 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 max-w-[920px] sm:mt-7"
        >
          <h2
            className="
              font-serif
              text-[clamp(2.35rem,4.8vw,4.9rem)]
              font-normal
              leading-[1.03]
              tracking-[-0.055em]
            "
          >
            <span className="block text-[#F8FAFC]">
              Ventures
            </span>

            <span
              className="
                mt-2
                block
                bg-gradient-to-r
                from-[#8DEBFF]
                via-[#42D5F5]
                to-[#168BD1]
                bg-clip-text
                pb-2
                text-transparent
                drop-shadow-[0_0_22px_rgba(21,155,180,0.14)]
              "
            >
              built for what comes next.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-[650px]
              text-[13px]
              leading-7
              text-[#D4E2EA]/70
              sm:text-[14px]
            "
          >
            A connected ecosystem where international business, technology,
            innovation and real estate create new possibilities.
          </p>
        </motion.div>

        {/* PLATFORM */}
        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          <div
            aria-hidden="true"
            className="
              absolute
              left-[7%]
              right-[7%]
              top-[55px]
              hidden
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#168BD1]/[0.25]
              to-transparent
              lg:block
            "
          />

          <motion.div
            initial={
              motionEnabled
                ? {
                    opacity: 0,
                    scale: 0.97,
                  }
                : false
            }
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mx-auto
              flex
              max-w-[250px]
              flex-col
              items-center
              text-center
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -inset-5
                rounded-full
                border
                border-[#159BB4]/[0.20]
                shadow-[0_0_22px_rgba(21,155,180,0.09)]
              "
            />

            <div
              className="
                relative
                flex
                h-[110px]
                w-[110px]
                items-center
                justify-center
                rounded-full
                border
                border-[#159BB4]/[0.32]
                bg-[#0B1F33]
                shadow-[0_0_55px_rgba(21,155,180,0.11),inset_0_1px_0_rgba(255,255,255,0.08)]
              "
            >
              <div>
                <Globe2
                  size={25}
                  strokeWidth={1.1}
                  className="mx-auto text-[#67E8F9]"
                />

                <span
                  className="
                    mt-2
                    block
                    text-[11px]
                    font-medium
                    tracking-[-0.02em]
                    text-[#F1F5F9]
                  "
                >
                  BH Ventures
                </span>
              </div>

              {/* ROTATING RING — ALL DEVICES */}
              {ringAnimated && (
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -inset-5
                    rounded-full
                    border
                    border-transparent
                    border-t-[#14B8A6]
                    border-r-[#14B8A6]/50
                    shadow-[0_0_14px_rgba(20,184,166,0.40)]
                    transform-gpu
                  "
                />
              )}

              {!ringAnimated && (
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -inset-5
                    rounded-full
                    border
                    border-transparent
                    border-t-[#14B8A6]
                    border-r-[#14B8A6]/50
                  "
                />
              )}
            </div>

            <span
              className="
                mt-7
                text-[8px]
                font-medium
                uppercase
                tracking-[0.30em]
                text-[#8AA9B8]
              "
            >
              Strategic Platform
            </span>
          </motion.div>

          {/* CARDS */}
          <div
            className="
              mt-14
              grid
              gap-6
              sm:mt-16
              sm:gap-8
              lg:grid-cols-3
              lg:gap-10
            "
          >
            {ventures.map((venture, index) => {
              const Icon = venture.icon;

              return (
                <motion.div
                  key={venture.title}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 22,
                          scale: 0.985,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.18,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    motionEnabled
                      ? {
                          y: -7,
                          scale: 1.012,
                          transition: {
                            duration: 0.28,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }
                      : undefined
                  }
                  whileTap={
                    !shouldReduceMotion
                      ? {
                          scale: 0.985,
                          transition: {
                            duration: 0.14,
                            ease: "easeOut",
                          },
                        }
                      : undefined
                  }
                  className="group relative"
                >
                  <div
                    className="
                      relative
                      min-h-[300px]
                      overflow-hidden
                      rounded-[24px]
                      border
                      border-white/[0.14]
                      bg-[linear-gradient(145deg,rgba(255,255,255,0.095),rgba(255,255,255,0.052)_48%,rgba(9,30,48,0.55))]
                      p-5
                      shadow-[0_20px_45px_rgba(1,12,24,0.22),inset_0_1px_0_rgba(255,255,255,0.10)]
                      backdrop-blur-none
                      transition-[border-color,background-color,box-shadow,transform]
                      duration-300
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      sm:min-h-[310px]
                      sm:backdrop-blur-md
                      sm:p-6
                      lg:backdrop-blur-xl
                      lg:p-7
                      lg:group-hover:border-[#14B8A6]/35
                      lg:group-hover:shadow-[0_28px_60px_rgba(1,12,24,0.30),0_0_28px_rgba(20,184,166,0.08),inset_0_1px_0_rgba(255,255,255,0.12)]
                    "
                  >
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-[24px]
                        bg-[radial-gradient(circle_at_85%_10%,rgba(56,189,248,0.07),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(20,184,166,0.035),transparent_30%)]
                        opacity-100
                        transition-opacity
                        duration-300
                        ease-out
                      "
                    />

                    {motionEnabled && (
                      <div
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          -right-16
                          -top-16
                          h-32
                          w-32
                          rounded-full
                          bg-[#14B8A6]/[0.06]
                          blur-2xl
                          opacity-0
                          transition-opacity
                          duration-300
                          ease-out
                          group-hover:opacity-100
                        "
                      />
                    )}

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="
                            text-[9px]
                            font-semibold
                            tracking-[0.24em]
                            text-[#67E8F9]
                            transition-[color,transform]
                            duration-300
                            ease-out
                            lg:group-hover:-translate-y-0.5
                            lg:group-hover:text-[#8DEBFF]
                          "
                        >
                          {venture.number}
                        </span>
                      </div>

                      <span
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#67E8F9]/25
                          bg-[#071725]/75
                          text-[#67E8F9]
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                          transition-[border-color,background-color,box-shadow,transform]
                          duration-300
                          ease-out
                          lg:group-hover:-translate-y-1
                          lg:group-hover:border-[#67E8F9]/45
                          lg:group-hover:bg-[#0B2638]
                          lg:group-hover:shadow-[0_0_20px_rgba(103,232,249,0.12),inset_0_1px_0_rgba(255,255,255,0.10)]
                        "
                      >
                        <Icon
                          size={17}
                          strokeWidth={1.25}
                          className="
                            transition-transform
                            duration-300
                            ease-out
                            lg:group-hover:scale-110
                          "
                        />
                      </span>
                    </div>

                    <div
                      className="
                        relative
                        z-10
                        mt-8
                        flex
                        items-center
                        gap-2.5
                      "
                    >
                      <span
                        className="
                          h-px
                          w-7
                          bg-[#14B8A6]/70
                          transition-[width,opacity]
                          duration-300
                          ease-out
                          lg:group-hover:w-10
                          lg:group-hover:bg-[#14B8A6]
                        "
                      />

                      <span
                        className="
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.25em]
                          text-[#B5E4EC]
                          transition-colors
                          duration-300
                          ease-out
                          lg:group-hover:text-[#C8F3F7]
                        "
                      >
                        {venture.category}
                      </span>
                    </div>

                    <h3
                      className="
                        relative
                        z-10
                        mt-3
                        text-[22px]
                        font-normal
                        leading-[1.18]
                        tracking-[-0.04em]
                        text-[#F8FAFC]
                        transition-[transform,color]
                        duration-300
                        ease-out
                        sm:text-[23px]
                        lg:group-hover:-translate-y-0.5
                      "
                    >
                      {venture.title}
                    </h3>

                    <p
                      className="
                        relative
                        z-10
                        mt-2
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.17em]
                        text-[#A9D2DE]
                        transition-colors
                        duration-300
                        ease-out
                        lg:group-hover:text-[#C0E7EE]
                      "
                    >
                      {venture.subtitle}
                    </p>

                    <p
                      className="
                        relative
                        z-10
                        mt-5
                        max-w-[370px]
                        text-[11px]
                        leading-[1.85]
                        text-[#E3F0F4]/80
                        transition-[color,transform]
                        duration-300
                        ease-out
                        lg:group-hover:-translate-y-px
                        lg:group-hover:text-[#E8F5F7]/90
                      "
                    >
                      {venture.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* FOOTER CTA */}
        <motion.div
          initial={motionEnabled ? { opacity: 0, y: 10 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: 0.05,
          }}
          className="
            mt-10
            border-t
            border-white/[0.10]
            pt-7
            sm:mt-12
            sm:pt-8
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div className="max-w-[700px]">
              <p
                className="
                  text-[12px]
                  leading-6
                  text-[#D4E2EA]/65
                  sm:text-[13px]
                "
              >
                Building a venture platform focused on technology, innovation,
                digital solutions and international business.
              </p>
            </div>

            <Link
              href="/ventures"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-3
                self-start
                text-[8px]
                font-medium
                uppercase
                tracking-[0.20em]
                text-[#C3D7E0]/70
                transition-colors
                duration-200
                hover:text-[#67E8F9]
                sm:self-auto
              "
            >
              <span>Explore Ventures</span>

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.16]
                  bg-white/[0.025]
                  transition-[border-color,background-color,transform,box-shadow]
                  duration-200
                  group-hover:-translate-y-1
                  group-hover:translate-x-0.5
                  group-hover:border-[#14B8A6]/50
                  group-hover:bg-[#14B8A6]/[0.08]
                  group-hover:shadow-[0_0_18px_rgba(20,184,166,0.15)]
                "
              >
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.3}
                  className="
                    transition-transform
                    duration-150
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}