"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const PRIMARY_BLUE = "#4F8CFF";
const LIGHT_BLUE = "#7FA9FF";
const PROFILE_BLUE = "#8CB0FF";
const ICE_BLUE = "#C9D9FF";
const WHITE = "#F8FAFC";
const CYAN_START = "#8DEBFF";
const CYAN_MID = "#42D5F5";
const CYAN_END = "#168BD1";

const ease = [0.22, 1, 0.36, 1] as const;

const principles = [
  {
    number: "01",
    title: "Vision",
    text: "Seeing beyond the immediate and defining a direction people can believe in.",
  },
  {
    number: "02",
    title: "Trust",
    text: "Creating relationships where communication is clear, responsibility is shared and people feel valued.",
  },
  {
    number: "03",
    title: "Judgement",
    text: "Making thoughtful decisions when complexity demands clarity rather than reaction.",
  },
  {
    number: "04",
    title: "Execution",
    text: "Turning strategic intent into consistent action, accountability and measurable progress.",
  },
  {
    number: "05",
    title: "Impact",
    text: "Leaving teams, relationships and organisations stronger than they were before.",
  },
];

const dimensions = [
  {
    title: "People",
    description:
      "Trust, communication and collaboration create the environment where people perform at their best.",
  },
  {
    title: "Perspective",
    description:
      "Strong leadership connects people, markets and situations through a wider view of what matters.",
  },
  {
    title: "Performance",
    description:
      "Direction becomes meaningful when it translates into disciplined action and measurable outcomes.",
  },
];

function Reveal({
  children,
  reduceMotion,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: React.ReactNode;
  reduceMotion: boolean;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: reduceMotion ? 0 : 0.8,
        delay: reduceMotion ? 0 : delay,
        ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ImpactMetric({ reduceMotion }: { reduceMotion: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const number = useMotionValue(0);

  const roundedNumber = useTransform(number, (latest) =>
    Math.round(latest).toString()
  );

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (reduceMotion) {
      number.set(25);
      return;
    }

    let controls: { stop: () => void } | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        controls = animate(number, 25, {
          duration: 1.7,
          ease,
        });

        observer.disconnect();
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      controls?.stop();
    };
  }, [number, reduceMotion]);

  return (
    <div ref={ref} className="mt-7">
      <div className="flex items-baseline">
        <motion.span
          className="text-[clamp(4.5rem,9vw,7.5rem)] font-medium leading-none tracking-[-0.1em]"
          style={{
            color: LIGHT_BLUE,
          }}
        >
          {roundedNumber}
        </motion.span>

        <motion.span
          initial={reduceMotion ? false : { opacity: 0, x: -8 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.9,
            ease,
          }}
          className="ml-2 text-[clamp(2.75rem,5vw,4.25rem)] font-medium leading-none tracking-[-0.08em]"
          style={{
            color: ICE_BLUE,
          }}
        >
          %
        </motion.span>
      </div>
    </div>
  );
}

export default function Leadership() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion === true;

  return (
    <section className="relative isolate overflow-hidden bg-[#06182A] text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#06182A_0%,#081D32_52%,#04111F_100%)]" />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 1.5,
            ease,
          }}
          className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.028),transparent_68%)]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(1,7,16,0.48)_100%)]" />

        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "96px 96px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 25%, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 25%, transparent 75%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-[30rem] bg-gradient-to-t from-[#020B15] via-[#020B15]/35 to-transparent" />
      </div>

      <div className="mx-auto max-w-[1480px] px-5 pt-30 pb-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        {/* HERO */}
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <Reveal reduceMotion={reduceMotion} y={24}>
            <div className="mb-6 flex items-center gap-3">
              <motion.span
                initial={reduceMotion ? false : { width: 0, opacity: 0 }}
                whileInView={
                  reduceMotion ? undefined : { width: 36, opacity: 1 }
                }
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  ease,
                }}
                className="h-px"
                style={{
                  background: `linear-gradient(90deg, ${PRIMARY_BLUE}, ${CYAN_START})`,
                }}
              />

              <motion.span
                initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                whileInView={
                  reduceMotion ? undefined : { opacity: 1, x: 0 }
                }
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : 0.15,
                  ease,
                }}
                className="text-[9px] font-bold uppercase tracking-[0.3em]"
                style={{
                  color: LIGHT_BLUE,
                }}
              >
                Leadership & Influence
              </motion.span>
            </div>

            <motion.h1
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 32,
                      filter: "blur(8px)",
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
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: reduceMotion ? 0 : 1,
                ease,
              }}
              className="max-w-4xl text-[clamp(2.75rem,5.5vw,5.25rem)] font-medium leading-[0.9] tracking-[-0.07em]"
              style={{ color: WHITE }}
            >
              <span className="block transition-colors duration-500 hover:text-[#C9D9FF]">
                Leading
              </span>

              <span className="mt-2 block">
                <span
                  className="transition-colors duration-500"
                  style={{ color: WHITE }}
                >
                  With{" "}
                </span>

                <span className="bg-gradient-to-r from-[#8DEBFF] via-[#42D5F5] to-[#168BD1] bg-clip-text text-transparent transition-opacity duration-500">
                  Purpose.
                </span>
              </span>
            </motion.h1>
          </Reveal>

          <Reveal
            reduceMotion={reduceMotion}
            delay={0.12}
            y={20}
            className="flex flex-col justify-end lg:pb-1"
          >
            <p className="max-w-md text-[14px] font-medium leading-7 text-white/90 transition-colors duration-500 hover:text-white sm:text-[15px] sm:leading-8">
              Leadership is the ability to create clarity when things are
              complex, build trust across people and turn direction into
              meaningful progress.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              {["Clarity", "Trust", "Execution"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: -10,
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
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.55,
                    delay: reduceMotion ? 0 : 0.25 + index * 0.12,
                    ease,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -3,
                          scale: 1.04,
                        }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 0.96,
                        }
                  }
                  className="group relative flex cursor-pointer items-center gap-4 rounded-full px-2 py-1 transition-all duration-500 focus-visible:outline-none"
                  tabIndex={0}
                >
                  <span
                    className="pointer-events-none absolute -inset-3 rounded-full opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100"
                    style={{
                      background: `radial-gradient(circle, ${PRIMARY_BLUE}70 0%, ${PRIMARY_BLUE}25 42%, transparent 75%)`,
                    }}
                  />

                  <span
                    className="relative z-10 text-[9px] font-bold uppercase tracking-[0.22em] transition-all duration-500 group-hover:scale-105 group-hover:text-white group-focus-visible:text-white group-active:text-white"
                    style={{
                      color: ICE_BLUE,
                    }}
                  >
                    {item}
                  </span>

                  {index < 2 && (
                    <span
                      className="relative z-10 h-px w-5 transition-all duration-500 group-hover:w-8 group-focus-visible:w-8 group-active:w-8"
                      style={{
                        background: `linear-gradient(90deg, ${PRIMARY_BLUE}, ${CYAN_START})`,
                        boxShadow: `0 0 10px ${PRIMARY_BLUE}99`,
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* PHILOSOPHY */}
        <Reveal
          reduceMotion={reduceMotion}
          delay={0.05}
          y={26}
          className="mt-18 sm:mt-22"
        >
          <div className="grid gap-9 lg:grid-cols-[0.24fr_1fr] lg:gap-16">
            <div className="pt-1">
              <motion.span
                initial={reduceMotion ? false : { opacity: 0 }}
                whileInView={reduceMotion ? undefined : { opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  ease,
                }}
                className="text-[9px] font-bold uppercase tracking-[0.28em]"
                style={{ color: LIGHT_BLUE }}
              >
                01 — Philosophy
              </motion.span>
            </div>

            <div className="rounded-[32px] border border-[#06182A]/15 bg-[#E9E8E3] px-6 py-10 text-[#06182A] sm:rounded-[40px] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
              <div className="relative max-w-5xl pl-1 sm:pl-3">
                <motion.span
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.8,
                          x: -8,
                        }
                  }
                  whileInView={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          scale: 1,
                          x: 0,
                        }
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.8,
                    delay: reduceMotion ? 0 : 0.1,
                    ease,
                  }}
                  className="pointer-events-none absolute -left-4 -top-7 font-serif text-5xl leading-none sm:-left-7 sm:-top-9 sm:text-6xl"
                  style={{ color: `${PRIMARY_BLUE}B3` }}
                >
                  “
                </motion.span>

                <motion.p
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
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.8,
                    delay: reduceMotion ? 0 : 0.14,
                    ease,
                  }}
                  className="max-w-4xl font-serif text-[clamp(1.5rem,2.8vw,3rem)] font-normal leading-[1.14] tracking-[-0.035em] text-[#06182A]"
                >
                  Leadership is not about being at the{" "}
                  <span
                    className="font-medium transition-colors duration-500 hover:text-[#8DEBFF]"
                    style={{ color: PRIMARY_BLUE }}
                  >
                    center.
                  </span>
                  <span
                    className="ml-1 inline-block"
                    style={{ color: `${PRIMARY_BLUE}B3` }}
                    aria-hidden="true"
                  >
                    ”
                  </span>
                </motion.p>

                <motion.p
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
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.8,
                    delay: reduceMotion ? 0 : 0.28,
                    ease,
                  }}
                  className="mt-4 max-w-4xl font-serif text-[clamp(1.35rem,2.4vw,2.55rem)] font-normal italic leading-[1.17] tracking-[-0.025em] text-[#1D3042]"
                >
                  It is about creating{" "}
                  <span
                    className="not-italic font-medium transition-colors duration-500 hover:text-[#8DEBFF]"
                    style={{ color: PRIMARY_BLUE }}
                  >
                    direction
                  </span>{" "}
                  for everyone around you.
                </motion.p>
              </div>

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: -15,
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
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : 0.4,
                  ease,
                }}
                className="mt-8 flex items-center gap-4"
              >
                <span
                  className="h-px w-11"
                  style={{
                    background: `linear-gradient(90deg, ${PRIMARY_BLUE}, ${LIGHT_BLUE})`,
                  }}
                />

                <span
                  className="text-[9px] font-semibold uppercase tracking-[0.26em]"
                  style={{ color: "#27415A" }}
                >
                  Leadership principle
                </span>
              </motion.div>
            </div>
          </div>
        </Reveal>

        {/* MEASURABLE IMPACT */}
        <Reveal
          reduceMotion={reduceMotion}
          className="mt-20 sm:mt-24"
          y={26}
        >
          <div className="grid items-stretch gap-6 lg:grid-cols-[0.7fr_1fr] lg:gap-8">
            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -6,
                    }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                ease,
              }}
              className="group relative overflow-hidden rounded-[28px] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.38)] transition-all duration-700 hover:shadow-[0_32px_90px_rgba(0,0,0,0.52)] sm:p-9 lg:p-10"
              style={{
                backgroundColor: "#19384F",
                border: `1px solid ${PRIMARY_BLUE}88`,
              }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.11] to-transparent transition-opacity duration-700 group-hover:opacity-75" />

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
                whileInView={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        scale: 1,
                      }
                }
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 1,
                  delay: reduceMotion ? 0 : 0.15,
                  ease,
                }}
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  backgroundColor: `${PRIMARY_BLUE}18`,
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <motion.span
                    initial={reduceMotion ? false : { width: 0 }}
                    whileInView={
                      reduceMotion ? undefined : { width: 36 }
                    }
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.7,
                      ease,
                    }}
                    className="h-px"
                    style={{
                      backgroundColor: PRIMARY_BLUE,
                    }}
                  />

                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.3em]"
                    style={{
                      color: ICE_BLUE,
                    }}
                  >
                    02 — Measurable Impact
                  </span>
                </div>

                <ImpactMetric reduceMotion={reduceMotion} />

                <motion.p
                  initial={reduceMotion ? false : { opacity: 0 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    delay: reduceMotion ? 0 : 0.7,
                    ease,
                  }}
                  className="mt-5 text-[11px] font-bold uppercase tracking-[0.22em] text-white"
                >
                  Team sales performance
                </motion.p>

                <div className="mt-8 h-px w-full bg-white/[0.18] transition-colors duration-500 group-hover:bg-white/[0.28]" />

                <p className="mt-5 max-w-md text-[13px] font-medium leading-7 text-white/90 transition-colors duration-500 group-hover:text-white">
                  A measurable improvement achieved through stronger
                  coordination, client focus and strategic execution.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -5,
                    }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                ease,
              }}
              className="group flex min-h-[350px] flex-col justify-end rounded-[28px] border border-white/[0.15] bg-[#0E2434] p-7 shadow-[0_20px_55px_rgba(0,0,0,0.28)] transition-all duration-700 hover:border-white/[0.25] hover:bg-[#112A3D] hover:shadow-[0_30px_70px_rgba(0,0,0,0.40)] sm:p-9 lg:p-10"
            >
              <span
                className="text-[10px] font-bold uppercase tracking-[0.3em]"
                style={{
                  color: LIGHT_BLUE,
                }}
              >
                The First Quarter
              </span>

              <h3
                className="mt-5 max-w-xl text-[clamp(1.75rem,2.8vw,2.8rem)] font-semibold leading-[1.06] tracking-[-0.05em] text-white transition-colors duration-500"
              >
                Performance follows when people have{" "}
                <span className="bg-gradient-to-r from-[#8DEBFF] via-[#42D5F5] to-[#168BD1] bg-clip-text text-transparent transition-colors duration-500">
                  clarity.
                </span>
              </h3>

              <p className="mt-6 max-w-xl text-[14px] font-medium leading-8 text-white/88 transition-colors duration-500 group-hover:text-white">
                The result came from bringing stronger coordination, sharper
                client focus and strategic execution into the everyday rhythm
                of the team.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <motion.span
                  initial={reduceMotion ? false : { width: 0 }}
                  whileInView={
                    reduceMotion ? undefined : { width: 48 }
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion ? 0 : 0.25,
                    ease,
                  }}
                  className="h-px"
                  style={{
                    backgroundColor: PRIMARY_BLUE,
                  }}
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/80 transition-colors duration-300 group-hover:text-white">
                  Strategic execution
                </span>
              </div>
            </motion.div>
          </div>
        </Reveal>

        {/* THREE DIMENSIONS */}
        <Reveal
          reduceMotion={reduceMotion}
          className="mt-22 sm:mt-26"
          y={26}
        >
          <div className="mb-9">
            <span
              className="text-[9px] font-bold uppercase tracking-[0.28em]"
              style={{
                color: LIGHT_BLUE,
              }}
            >
              03 — Leadership Lens
            </span>

            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={
                reduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.1,
                ease,
              }}
              className="mt-3 text-3xl font-semibold tracking-[-0.045em]"
              style={{ color: WHITE }}
            >
              Three{" "}
              <span className="bg-gradient-to-r from-[#8DEBFF] via-[#42D5F5] to-[#168BD1] bg-clip-text text-transparent transition-colors duration-500 sm:text-4xl">
                dimensions.
              </span>
            </motion.h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {dimensions.map((item, index) => (
              <motion.div
                key={item.title}
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
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : index * 0.1,
                  ease,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -7,
                      }
                }
                whileTap={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 0.985,
                      }
                }
                tabIndex={0}
                className="group relative min-h-[270px] cursor-pointer overflow-hidden rounded-[24px] border border-white/[0.18] bg-[#142D40] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.34)] outline-none transition-all duration-700 hover:border-white/[0.30] hover:bg-[#19364B] hover:shadow-[0_30px_70px_rgba(0,0,0,0.46)] focus-visible:border-white/[0.30] sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[24px] opacity-60 transition-opacity duration-700 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100"
                  style={{
                    padding: "1px",
                    backgroundImage: `linear-gradient(
                      115deg,
                      transparent 15%,
                      ${PRIMARY_BLUE}00 35%,
                      ${PRIMARY_BLUE}CC 50%,
                      ${CYAN_START} 55%,
                      ${PRIMARY_BLUE}00 70%,
                      transparent 85%
                    )`,
                    backgroundSize: "250% 100%",
                    animation: "dimensionBorderShine 2.8s linear infinite",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.075] to-transparent transition-opacity duration-500 group-hover:opacity-100" />

                <div
                  className="absolute left-0 top-0 h-px w-0 transition-all duration-700 group-hover:w-24 group-focus-visible:w-24 group-active:w-24"
                  style={{
                    background: `linear-gradient(90deg, ${PRIMARY_BLUE}, ${CYAN_START}, transparent)`,
                  }}
                />

                <div className="relative">
                  <span
                    className="text-[10px] font-bold tracking-[0.22em] transition-colors duration-300"
                    style={{
                      color: LIGHT_BLUE,
                    }}
                  >
                    0{index + 1}
                  </span>

                  <h3 className="mt-12 text-[28px] font-semibold tracking-[-0.045em] text-white transition-all duration-500 group-hover:translate-x-1 sm:text-[30px]">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-[13px] font-medium leading-7 text-white/86 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white group-focus-visible:translate-x-1 group-focus-visible:text-white">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <style jsx>{`
            @keyframes dimensionBorderShine {
              0% {
                background-position: 200% 0;
              }

              100% {
                background-position: -50% 0;
              }
            }
          `}</style>
        </Reveal>

        {/* PRINCIPLES */}
        <Reveal
          reduceMotion={reduceMotion}
          className="mt-22 sm:mt-26"
          y={26}
        >
          <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr] lg:gap-16">
            <div>
              <span
                className="text-[9px] font-bold uppercase tracking-[0.28em]"
                style={{
                  color: LIGHT_BLUE,
                }}
              >
                04 — Principles
              </span>

              <h2
                className="mt-3 max-w-xs text-2xl font-semibold leading-tight tracking-[-0.04em]"
                style={{ color: WHITE }}
              >
                What leadership{" "}
                <span className="bg-gradient-to-r from-[#8DEBFF] via-[#42D5F5] to-[#168BD1] bg-clip-text text-transparent transition-colors duration-500">
                  stands on.
                </span>
              </h2>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-white/[0.17] bg-[#122A3D] shadow-[0_20px_50px_rgba(0,0,0,0.30)] transition-all duration-700 hover:border-white/[0.25] hover:shadow-[0_28px_65px_rgba(0,0,0,0.4)]">
              <motion.div
                aria-hidden="true"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scaleY: 0,
                      }
                }
                whileInView={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 1,
                        scaleY: 1,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.18,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 1.45,
                  delay: reduceMotion ? 0 : 0.12,
                  ease,
                }}
                className="pointer-events-none absolute bottom-5 left-0 top-5 z-20 w-px origin-top"
                style={{
                  background: `
                    linear-gradient(
                      180deg,
                      transparent 0%,
                      ${PRIMARY_BLUE}45 8%,
                      ${PRIMARY_BLUE}CC 18%,
                      ${CYAN_START} 31%,
                      ${PRIMARY_BLUE}65 43%,
                      transparent 52%,
                      ${PRIMARY_BLUE}75 62%,
                      ${CYAN_START} 74%,
                      ${PRIMARY_BLUE}55 87%,
                      transparent 100%
                    )
                  `,
                  boxShadow: `
                    0 0 8px ${PRIMARY_BLUE}99,
                    0 0 18px ${PRIMARY_BLUE}55
                  `,
                }}
              />

              {[12, 29, 47, 66, 83].map((position, index) => (
                <motion.span
                  key={position}
                  aria-hidden="true"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0,
                          x: -2,
                        }
                  }
                  whileInView={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: [0, 1, 0.35, 0.8],
                          scale: [0, 0.8, 1.15, 0.7],
                          x: [-2, 1, 3, 0],
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.18,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.9,
                    delay: reduceMotion ? 0 : 0.28 + index * 0.13,
                    ease,
                  }}
                  className="pointer-events-none absolute left-[-2px] z-30 h-[3px] w-[3px] rounded-full"
                  style={{
                    top: `${position}%`,
                    backgroundColor: CYAN_START,
                    boxShadow: `
                      0 0 8px ${CYAN_START},
                      0 0 16px ${PRIMARY_BLUE}
                    `,
                  }}
                />
              ))}

              {[18, 37, 58, 78, 91].map((position, index) => (
                <motion.span
                  key={`fragment-${position}`}
                  aria-hidden="true"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          width: 0,
                        }
                  }
                  whileInView={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: [0, 0.95, 0.3],
                          width: [0, 10 + index * 2, 5 + index],
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.18,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.85,
                    delay: reduceMotion ? 0 : 0.42 + index * 0.12,
                    ease,
                  }}
                  className="pointer-events-none absolute left-0 z-20 h-px"
                  style={{
                    top: `${position}%`,
                    background: `linear-gradient(90deg, ${CYAN_START}, ${PRIMARY_BLUE}88, transparent)`,
                    boxShadow: `0 0 8px ${PRIMARY_BLUE}88`,
                  }}
                />
              ))}

              {principles.map((principle, index) => (
                <motion.div
                  key={principle.number}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: -15,
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
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    delay: reduceMotion ? 0 : index * 0.08,
                    ease,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          x: 5,
                        }
                  }
                  className={`group relative grid grid-cols-[42px_0.5fr_1fr] items-center gap-4 px-5 py-6 transition-colors duration-500 hover:bg-[#19364B] sm:grid-cols-[55px_0.45fr_1fr] sm:gap-8 sm:px-7 sm:py-7 ${
                    index !== principles.length - 1
                      ? "border-b border-white/[0.11]"
                      : ""
                  }`}
                >
                  <span
                    className="text-[10px] font-bold tracking-[0.2em] transition-colors duration-300 group-hover:text-white"
                    style={{
                      color: LIGHT_BLUE,
                    }}
                  >
                    {principle.number}
                  </span>

                  <h3 className="text-[16px] font-semibold tracking-[-0.025em] text-white transition-all duration-400 group-hover:translate-x-1 sm:text-lg">
                    {principle.title}
                  </h3>

                  <p className="text-[11px] font-medium leading-6 text-white/82 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white sm:text-xs">
                    {principle.text}
                  </p>

                  <div
                    className="absolute bottom-0 left-0 h-px w-0 transition-all duration-700 group-hover:w-20"
                    style={{
                      background: `linear-gradient(90deg, ${PRIMARY_BLUE}, transparent)`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CLOSING */}
        <Reveal
          reduceMotion={reduceMotion}
          className="mx-auto mt-26 max-w-4xl border-t border-white/[0.14] pt-14 text-center sm:mt-30 sm:pt-18"
          y={25}
        >
          <span
            className="text-[9px] font-bold uppercase tracking-[0.3em]"
            style={{
              color: LIGHT_BLUE,
            }}
          >
            The Result
          </span>

          <motion.h2
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
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.08,
              ease,
            }}
            className="mt-6 text-[clamp(1.9rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.06em]"
            style={{ color: WHITE }}
          >
            <span className="transition-colors duration-500 hover:text-[#C9D9FF]">
              Create clarity.
            </span>{" "}
            <span className="bg-gradient-to-r from-[#8DEBFF] via-[#42D5F5] to-[#168BD1] bg-clip-text text-transparent transition-colors duration-500">
              Build trust.
            </span>
            <br />
            <span>
              Move people{" "}
              <span className="bg-gradient-to-r from-[#8DEBFF] via-[#42D5F5] to-[#168BD1] bg-clip-text text-transparent transition-colors duration-500">
                forward.
              </span>
            </span>
          </motion.h2>

          <p className="mx-auto mt-6 max-w-xl text-xs font-medium leading-6 text-white/78 transition-colors duration-500 hover:text-white/90 sm:text-sm sm:leading-7">
            The strongest leadership leaves teams, relationships and
            organisations better positioned for what comes next.
          </p>

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    width: 0,
                    opacity: 0,
                  }
            }
            whileInView={
              reduceMotion
                ? undefined
                : {
                    width: 64,
                    opacity: 1,
                  }
            }
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.25,
              ease,
            }}
            className="mx-auto mt-8 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${PRIMARY_BLUE}, transparent)`,
            }}
          />
        </Reveal>
      </div>
    </section>
  );
}