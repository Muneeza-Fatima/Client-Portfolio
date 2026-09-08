"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Globe2,
  Lightbulb,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useState } from "react";

const HEADING_WHITE = "#F8FAFC";
const SKY_BLUE = "#7FA9FF";
const ACCENT_BLUE = "#8CB0FF";
const ROYAL_BLUE = "#4F8CFF";

const HEADING_GRADIENT =
  "linear-gradient(90deg, #8DEBFF 0%, #42D5F5 52%, #168BD1 100%)";

const perspectives = [
  {
    category: "Strategy",
    title: "Think Beyond the Immediate Opportunity",
    description:
      "Sustainable growth comes from decisions that create stronger possibilities for tomorrow.",
    icon: Lightbulb,
  },
  {
    category: "Technology",
    title: "Technology Should Serve the Business",
    description:
      "The real value of technology lies in turning meaningful ideas into measurable impact.",
    icon: Sparkles,
  },
  {
    category: "Global Perspective",
    title: "Think Globally, Execute Intentionally",
    description:
      "Global growth requires understanding markets, people, context, and the opportunities between them.",
    icon: Globe2,
  },
];

const boardPoints = [
  { left: "18%", top: "25%" },
  { left: "76%", top: "22%" },
  { left: "88%", top: "57%" },
  { left: "68%", top: "82%" },
  { left: "18%", top: "69%" },
  { left: "10%", top: "47%" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Insights() {
  const reduceMotion = useReducedMotion();
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

  const canAnimate = !reduceMotion;
  const hoverEnabled = canAnimate && finePointer;

  return (
    <section
      id="insights"
      className="
        relative
        overflow-hidden
        bg-[#0B1624]
        pt-32
        pb-24
        sm:py-28
        lg:py-32
      "
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[8%]
            top-[10%]
            h-40
            w-40
            rounded-full
            blur-[90px]
            sm:h-56
            sm:w-56
            sm:blur-[115px]
            lg:h-64
            lg:w-64
            lg:blur-[130px]
          "
          style={{
            backgroundColor: "rgba(127,169,255,0.035)",
          }}
        />

        <div
          className="
            absolute
            bottom-[8%]
            right-[5%]
            h-44
            w-44
            rounded-full
            blur-[95px]
            sm:h-60
            sm:w-60
            sm:blur-[120px]
            lg:h-72
            lg:w-72
            lg:blur-[140px]
          "
          style={{
            backgroundColor: "rgba(140,176,255,0.028)",
          }}
        />

        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 50% 18%, rgba(127,169,255,0.045), transparent 36%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={canAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={
            canAnimate
              ? {
                  opacity: 1,
                  y: 0,
                }
              : undefined
          }
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.5,
            ease,
          }}
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <div>
            <motion.div
              initial={canAnimate ? { opacity: 0, x: -14 } : false}
              whileInView={
                canAnimate
                  ? {
                      opacity: 1,
                      x: 0,
                    }
                  : undefined
              }
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                ease,
              }}
              className="mb-5 flex items-center gap-3"
            >
              <motion.span
                initial={canAnimate ? { width: 0 } : false}
                whileInView={
                  canAnimate
                    ? {
                        width: 32,
                      }
                    : undefined
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease,
                }}
                className="h-px"
                style={{
                  backgroundColor: `${SKY_BLUE}85`,
                }}
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                "
                style={{
                  color: SKY_BLUE,
                }}
              >
                Insights
              </span>
            </motion.div>

            <motion.h1
              initial={canAnimate ? { opacity: 0, y: 20 } : false}
              whileInView={
                canAnimate
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : undefined
              }
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: canAnimate ? 0.04 : 0,
                ease,
              }}
              className="
                max-w-2xl
                text-[3rem]
                font-semibold
                leading-[1.08]
                tracking-[-0.04em]
                sm:text-[3.7rem]
                sm:leading-[1.04]
                lg:text-[4.3rem]
                lg:leading-[1.04]
              "
            >
              <span style={{ color: HEADING_WHITE }}>
                Ideas.
              </span>
              <br />
              <span style={{ color: HEADING_WHITE }}>
                Perspectives.
              </span>
              <br />

              <motion.span
                initial={canAnimate ? { opacity: 0, x: -10 } : false}
                whileInView={
                  canAnimate
                    ? {
                        opacity: 1,
                        x: 0,
                      }
                    : undefined
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: canAnimate ? 0.16 : 0,
                  ease,
                }}
                style={{
                  backgroundImage: HEADING_GRADIENT,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Direction.
              </motion.span>
            </motion.h1>
          </div>

          <motion.div
            initial={canAnimate ? { opacity: 0, x: 18 } : false}
            whileInView={
              canAnimate
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : undefined
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: canAnimate ? 0.06 : 0,
              ease,
            }}
            className="max-w-xl pt-2 lg:justify-self-end lg:pt-0"
          >
            <p className="text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
              Perspectives shaped by experience, curiosity, and a constant
              focus on what comes next.
            </p>

            <p className="mt-6 text-xs leading-6 text-slate-400 sm:mt-4 sm:text-sm">
              A closer look at the ideas and principles that influence
              leadership, strategy, technology, and global thinking.
            </p>
          </motion.div>
        </motion.div>

        {/* Featured Perspective */}
        <motion.article
          initial={canAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={
            canAnimate
              ? {
                  opacity: 1,
                  y: 0,
                }
              : undefined
          }
          viewport={{
            once: true,
            amount: 0.12,
          }}
          whileHover={
            hoverEnabled
              ? {
                  y: -4,
                }
              : undefined
          }
          transition={{
            duration: 0.5,
            ease,
          }}
          className="
            group
            relative
            mt-16
            overflow-hidden
            rounded-[2rem]
            border
            border-white/[0.13]
            bg-[#122236]
            transition-[border-color,box-shadow,transform]
            duration-300
            ease-out
            hover:border-white/[0.2]
            hover:shadow-[0_20px_55px_rgba(0,0,0,0.20)]
            sm:mt-20
            sm:backdrop-blur-md
            lg:backdrop-blur-xl
          "
        >
          {/* Mobile Stable Border */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-30
              rounded-[2rem]
              lg:hidden
            "
            style={{
              padding: "1.5px",
              background:
                "linear-gradient(90deg, transparent 0%, transparent 35%, rgba(127,169,255,0.72) 47%, rgba(255,255,255,0.92) 50%, rgba(127,169,255,0.72) 53%, transparent 65%, transparent 100%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          {/* Desktop Hover Shine */}
          {hoverEnabled && (
            <motion.div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <motion.div
                initial={{ x: "-120%", opacity: 0 }}
                whileHover={{
                  x: "120%",
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  ease,
                }}
                className="
                  absolute
                  top-0
                  h-full
                  w-[38%]
                  -skew-x-12
                  blur-[24px]
                "
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.045), transparent)",
                }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 72% 40%, rgba(127,169,255,0.045), transparent 48%)",
                }}
              />

              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(127,169,255,0.3), transparent)",
                }}
              />
            </motion.div>
          )}

          {/* Static Atmosphere */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              blur-[90px]
              sm:-right-28
              sm:-top-28
              sm:h-64
              sm:w-64
              sm:blur-[110px]
              lg:-right-32
              lg:-top-32
              lg:h-72
              lg:w-72
              lg:blur-[120px]
            "
            style={{
              backgroundColor: "rgba(127,169,255,0.04)",
            }}
          />

          <div className="relative grid lg:grid-cols-[1fr_0.65fr]">
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:min-h-[440px] lg:p-14">
              <div>
                <motion.span
                  initial={canAnimate ? { opacity: 0, y: 8 } : false}
                  whileInView={
                    canAnimate
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : undefined
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                  style={{ color: SKY_BLUE }}
                >
                  Featured Perspective
                </motion.span>

                <motion.h2
                  initial={canAnimate ? { opacity: 0, y: 18 } : false}
                  whileInView={
                    canAnimate
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : undefined
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: canAnimate ? 0.05 : 0,
                    ease,
                  }}
                  className="
                    mt-8
                    max-w-2xl
                    text-[2.4rem]
                    font-semibold
                    leading-[1.08]
                    tracking-[-0.035em]
                    sm:text-[2.8rem]
                    sm:leading-[1.05]
                    lg:text-[3.25rem]
                    lg:leading-[1.06]
                  "
                >
                  <span style={{ color: HEADING_WHITE }}>
                    Leadership Is About
                  </span>

                  <motion.span
                    initial={canAnimate ? { opacity: 0, x: -10 } : false}
                    whileInView={
                      canAnimate
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : undefined
                    }
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: canAnimate ? 0.12 : 0,
                    }}
                    className="block"
                    style={{ color: HEADING_WHITE }}
                  >
                    Creating Clarity
                  </motion.span>
                </motion.h2>

                <motion.p
                  initial={canAnimate ? { opacity: 0, y: 12 } : false}
                  whileInView={
                    canAnimate
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : undefined
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: canAnimate ? 0.16 : 0,
                  }}
                  className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:leading-7"
                >
                  Strong leadership is not about having every answer. It is
                  about creating clarity when the path forward is not always
                  obvious.
                </motion.p>
              </div>

              <motion.div
                initial={canAnimate ? { opacity: 0, y: 10 } : false}
                whileInView={
                  canAnimate
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : undefined
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: canAnimate ? 0.22 : 0,
                }}
                className="mt-10 flex items-center gap-4"
              >
                <span
                  className="text-[9px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: SKY_BLUE }}
                >
                  Leadership
                </span>

                <span className="h-px w-7 bg-white/15" />

                <span className="text-[11px] text-slate-400">
                  Leadership & decision making
                </span>
              </motion.div>
            </div>

            {/* Strategic Board */}
            <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden border-t border-white/[0.09] lg:min-h-[440px] lg:border-l lg:border-t-0">
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-48
                  w-48
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  blur-[75px]
                  sm:h-60
                  sm:w-60
                  sm:blur-[90px]
                  lg:h-64
                  lg:w-64
                  lg:blur-[100px]
                "
                style={{
                  backgroundColor: "rgba(127,169,255,0.045)",
                }}
              />

              <motion.div
                initial={
                  canAnimate
                    ? {
                        opacity: 0,
                        scale: 0.9,
                      }
                    : false
                }
                whileInView={
                  canAnimate
                    ? {
                        opacity: 1,
                        scale: 1,
                      }
                    : undefined
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease,
                }}
                className="relative h-[250px] w-[250px] shrink-0 sm:h-[310px] sm:w-[310px]"
              >
                {/* Outer Ring */}
                {canAnimate ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 34,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: `1px solid ${SKY_BLUE}30`,
                      boxShadow: `
                        0 0 0 10px rgba(127,169,255,0.018),
                        0 0 0 11px rgba(127,169,255,0.035),
                        0 0 35px rgba(127,169,255,0.05)
                      `,
                      willChange: "transform",
                    }}
                  />
                ) : (
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: `1px solid ${SKY_BLUE}30`,
                    }}
                  />
                )}

                {/* Inner Ring */}
                {canAnimate ? (
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 28,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-[22px] rounded-full sm:inset-[27px]"
                    style={{
                      border: `1px solid ${SKY_BLUE}22`,
                      willChange: "transform",
                    }}
                  />
                ) : (
                  <div
                    className="absolute inset-[22px] rounded-full sm:inset-[27px]"
                    style={{
                      border: `1px solid ${SKY_BLUE}22`,
                    }}
                  />
                )}

                <div
                  className="absolute inset-[52px] rounded-full sm:inset-[67px]"
                  style={{
                    border: `1px solid ${SKY_BLUE}28`,
                    background:
                      "radial-gradient(circle, rgba(127,169,255,0.045), rgba(12,29,48,0.35) 65%, transparent 72%)",
                  }}
                />

                {/* Radial Lines */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map(
                  (rotation) => (
                    <div
                      key={rotation}
                      className="absolute left-1/2 top-1/2 h-px w-[115px] origin-left sm:w-[145px]"
                      style={{
                        transform: `rotate(${rotation}deg)`,
                        background: `linear-gradient(to right, ${SKY_BLUE}16, transparent)`,
                      }}
                    />
                  ),
                )}

                {/* Board Nodes */}
                {boardPoints.map((point) => (
                  <div
                    key={`${point.left}-${point.top}`}
                    className="absolute"
                    style={{
                      left: point.left,
                      top: point.top,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="relative h-2.5 w-2.5 rounded-full border sm:h-3 sm:w-3"
                      style={{
                        borderColor: `${ROYAL_BLUE}90`,
                        backgroundColor: "#122236",
                        boxShadow: `0 0 9px ${ROYAL_BLUE}35`,
                      }}
                    >
                      <div
                        className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{
                          backgroundColor: ROYAL_BLUE,
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* Direction Arrows — Mobile + Desktop */}
                {canAnimate &&
                  [0, 1, 2, 3].map((index) => {
                    const positions = [
                      {
                        left: "18%",
                        top: "25%",
                        rotate: 45,
                        delay: 0,
                      },
                      {
                        left: "76%",
                        top: "22%",
                        rotate: 135,
                        delay: 0.6,
                      },
                      {
                        left: "88%",
                        top: "57%",
                        rotate: 225,
                        delay: 1.2,
                      },
                      {
                        left: "68%",
                        top: "82%",
                        rotate: 315,
                        delay: 1.8,
                      },
                    ];

                    const point = positions[index];

                    return (
                      <motion.div
                        key={index}
                        initial={{
                          left: point.left,
                          top: point.top,
                          opacity: 0,
                          scale: 0.7,
                        }}
                        animate={{
                          left: [point.left, "50%"],
                          top: [point.top, "50%"],
                          opacity: [0, 1, 0],
                          scale: [0.7, 1, 0.75],
                        }}
                        transition={{
                          duration: 2.7,
                          delay: point.delay,
                          repeat: Infinity,
                          repeatDelay: 0.2,
                          ease: "easeOut",
                          times: [0, 0.8, 1],
                        }}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{
                          willChange: "transform, opacity",
                        }}
                      >
                        <ArrowUpRight
                          size={18}
                          strokeWidth={2}
                          className="sm:h-5 sm:w-5"
                          style={{
                            color: ROYAL_BLUE,
                            filter: `drop-shadow(0 0 6px ${ROYAL_BLUE}A0)`,
                            transform: `rotate(${point.rotate}deg)`,
                          }}
                        />
                      </motion.div>
                    );
                  })}

                {/* Center */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[48px]
                    w-[48px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    sm:h-[58px]
                    sm:w-[58px]
                  "
                  style={{
                    borderColor: `${SKY_BLUE}70`,
                    background:
                      "radial-gradient(circle, rgba(127,169,255,0.11), rgba(18,34,54,0.98) 62%)",
                    boxShadow: `
                      0 0 0 8px rgba(127,169,255,0.015),
                      0 0 24px rgba(127,169,255,0.09)
                    `,
                  }}
                >
                  <div
                    className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      backgroundColor: SKY_BLUE,
                      boxShadow: `0 0 10px ${SKY_BLUE}75`,
                    }}
                  />

                  <span
                    className="
                      absolute
                      left-1/2
                      top-[calc(100%+12px)]
                      -translate-x-1/2
                      whitespace-nowrap
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.28em]
                    "
                    style={{
                      color: `${SKY_BLUE}A0`,
                    }}
                  >
                    Clarity
                  </span>
                </div>

                {/* Center Pulse */}
                {canAnimate && (
                  <motion.div
                    animate={{
                      scale: [0.7, 1.45],
                      opacity: [0.18, 0],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[48px]
                      w-[48px]
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      border
                      sm:h-[58px]
                      sm:w-[58px]
                    "
                    style={{
                      borderColor: `${SKY_BLUE}28`,
                      willChange: "transform, opacity",
                    }}
                  />
                )}
              </motion.div>

              <motion.div
                initial={canAnimate ? { opacity: 0, y: 8 } : false}
                whileInView={
                  canAnimate
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : undefined
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                }}
                className="absolute bottom-5 right-6 text-right sm:bottom-7 sm:right-8"
              >
                <span className="block text-[8px] uppercase tracking-[0.2em] text-slate-400 sm:text-[9px]">
                  Strategic Board
                </span>

                <span className="mt-1 block text-[10px] text-slate-300 sm:text-[11px]">
                  Ideas → Clarity → Direction
                </span>
              </motion.div>
            </div>
          </div>
        </motion.article>

        {/* Perspectives */}
        <motion.div
          initial={canAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={
            canAnimate
              ? {
                  opacity: 1,
                  y: 0,
                }
              : undefined
          }
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.5,
            ease,
          }}
          className="mt-16 sm:mt-20"
        >
          <motion.div
            initial={canAnimate ? { opacity: 0, y: 14 } : false}
            whileInView={
              canAnimate
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : undefined
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            className="mb-8"
          >
            <span
              className="text-[9px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: SKY_BLUE }}
            >
              Perspectives
            </span>

            <h2 className="mt-2 text-[2.25rem] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[2.45rem] sm:leading-[1.08] lg:text-[2.7rem] lg:leading-[1.08]">
              <span style={{ color: HEADING_WHITE }}>
                Thinking beyond the{" "}
              </span>

              <span
                style={{
                  backgroundImage: HEADING_GRADIENT,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                obvious.
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-9 md:grid-cols-3">
            {perspectives.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.category}
                  initial={canAnimate ? { opacity: 0, y: 20 } : false}
                  whileInView={
                    canAnimate
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : undefined
                  }
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: canAnimate ? index * 0.06 : 0,
                    ease,
                  }}
                  whileHover={
                    hoverEnabled
                      ? {
                          y: -5,
                          scale: 1.01,
                        }
                      : undefined
                  }
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.35rem]
                    border
                    border-white/[0.22]
                    bg-[#1A3550]
                    p-6
                    transition-[border-color,box-shadow,transform,background-color]
                    duration-300
                    ease-out
                    hover:border-white/[0.4]
                    hover:bg-[#1D3B59]
                    hover:shadow-[0_16px_42px_rgba(79,140,255,0.12)]
                    sm:p-7
                  "
                >
                  <motion.div
                    initial={
                      canAnimate
                        ? {
                            opacity: 0,
                            scale: 0.8,
                            rotate: -5,
                          }
                        : false
                    }
                    whileInView={
                      canAnimate
                        ? {
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                          }
                        : undefined
                    }
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: canAnimate
                        ? 0.08 + index * 0.05
                        : 0,
                    }}
                    whileHover={
                      hoverEnabled
                        ? {
                            scale: 1.05,
                            rotate: 3,
                          }
                        : undefined
                    }
                    className="
                      relative
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      border
                      bg-white/[0.08]
                      transition-[background-color,border-color]
                      duration-300
                      group-hover:bg-white/[0.14]
                    "
                    style={{
                      borderColor: `${SKY_BLUE}55`,
                    }}
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.4}
                      style={{
                        color: SKY_BLUE,
                      }}
                    />
                  </motion.div>

                  <div className="relative mt-7">
                    <span
                      className="text-[9px] font-medium uppercase tracking-[0.2em]"
                      style={{
                        color: `${SKY_BLUE}E5`,
                      }}
                    >
                      {item.category}
                    </span>

                    <h3 className="mt-3 max-w-[280px] text-[1.35rem] font-medium leading-[1.25] tracking-[-0.02em] text-white sm:text-[1.5rem] sm:leading-[1.3]">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-[320px] text-[12px] leading-6 text-slate-200">
                      {item.description}
                    </p>
                  </div>

                  <motion.div
                    initial={{ width: 32 }}
                    whileHover={
                      hoverEnabled
                        ? {
                            width: 58,
                          }
                        : undefined
                    }
                    transition={{
                      duration: 0.25,
                    }}
                    className="relative mt-7 h-px"
                    style={{
                      backgroundColor: `${SKY_BLUE}65`,
                    }}
                  />

                  {hoverEnabled && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 5,
                        y: 5,
                      }}
                      whileHover={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="absolute bottom-6 right-6"
                    >
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.4}
                        style={{
                          color: `${SKY_BLUE}D5`,
                        }}
                      />
                    </motion.div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        {/* CEO Perspective */}
        <motion.div
          initial={canAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={
            canAnimate
              ? {
                  opacity: 1,
                  y: 0,
                }
              : undefined
          }
          viewport={{
            once: true,
            amount: 0.12,
          }}
          whileHover={
            hoverEnabled
              ? {
                  y: -4,
                }
              : undefined
          }
          transition={{
            duration: 0.5,
            ease,
          }}
          className="
            relative
            mx-auto
            mt-12
            max-w-4xl
            overflow-hidden
            rounded-[2rem]
            border
            border-slate-300/60
            bg-[#F1F2EE]
            px-7
            py-7
            transition-[border-color,box-shadow,transform]
            duration-300
            ease-out
            hover:border-slate-400/70
            hover:shadow-[0_20px_55px_rgba(0,0,0,0.12)]
            sm:px-10
            sm:py-9
            lg:px-16
            lg:py-11
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-28
              w-56
              -translate-x-1/2
              rounded-full
              blur-[80px]
              sm:h-36
              sm:w-72
              sm:blur-[95px]
            "
            style={{
              backgroundColor: "rgba(127,169,255,0.08)",
            }}
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <motion.span
              initial={canAnimate ? { opacity: 0, y: 8 } : false}
              whileInView={
                canAnimate
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : undefined
              }
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
              }}
              className="text-[9px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: ROYAL_BLUE }}
            >
              CEO Perspective
            </motion.span>

            <motion.blockquote
              initial={canAnimate ? { opacity: 0, y: 16 } : false}
              whileInView={
                canAnimate
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : undefined
              }
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: canAnimate ? 0.06 : 0,
              }}
              className="
                mt-5
                text-[1.8rem]
                font-medium
                leading-[1.25]
                tracking-[-0.025em]
                sm:text-[2.15rem]
                sm:leading-[1.3]
                lg:text-[2.5rem]
                lg:leading-[1.3]
              "
            >
              <span className="text-slate-900">
                “The best opportunities are often found where{" "}
              </span>

              <span style={{ color: ROYAL_BLUE }}>
                technology, people, and purposeful execution
              </span>

              <span className="text-slate-900">
                {" "}meet.”
              </span>
            </motion.blockquote>

            <motion.div
              initial={canAnimate ? { width: 0, opacity: 0 } : false}
              whileInView={
                canAnimate
                  ? {
                      width: 36,
                      opacity: 1,
                    }
                  : undefined
              }
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: canAnimate ? 0.15 : 0,
              }}
              className="mx-auto mt-5 h-px"
              style={{
                backgroundColor: `${ROYAL_BLUE}70`,
              }}
            />
          </div>
        </motion.div>

        {/* Continue Exploring */}
        <motion.div
          initial={canAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={
            canAnimate
              ? {
                  opacity: 1,
                  y: 0,
                }
              : undefined
          }
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.5,
            ease,
          }}
          className="mt-12 border-t border-white/[0.1] pt-8"
        >
          <motion.div
            initial={canAnimate ? { opacity: 0, y: 12 } : false}
            whileInView={
              canAnimate
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : undefined
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
            }}
          >
            <span
              className="text-[9px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: SKY_BLUE }}
            >
              Continue Exploring
            </span>

            <h2 className="mt-2 text-[2.25rem] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[2.45rem] sm:leading-[1.08] lg:text-[2.7rem] lg:leading-[1.08]">
              <span style={{ color: HEADING_WHITE }}>
                More perspectives,{" "}
              </span>

              <span style={{ color: HEADING_WHITE }}>
                deeper
              </span>{" "}

              <span
                style={{
                  backgroundImage: HEADING_GRADIENT,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                thinking.
              </span>
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}