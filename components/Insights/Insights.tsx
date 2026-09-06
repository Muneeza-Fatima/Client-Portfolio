"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Globe2,
  Lightbulb,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

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

export default function Insights() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.12,
    },
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };

  return (
    <section
      id="insights"
      className="relative overflow-hidden bg-[#0B1624] pt-32 pb-24 sm:py-28 lg:py-32"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="ambient-blob absolute left-[8%] top-[10%] h-64 w-64 rounded-full blur-[130px]"
          style={
            {
              backgroundColor: "rgba(127,169,255,0.045)",
              ...(reduceMotion
                ? {}
                : {
                    "--drift-x": "18px",
                    "--drift-y": "-10px",
                    "--drift-scale-from": 1,
                    "--drift-scale-to": 1.03,
                    "--drift-duration": "16s",
                  }),
            } as any
          }
        />

        <div
          className="ambient-blob absolute bottom-[8%] right-[5%] h-72 w-72 rounded-full blur-[140px]"
          style={
            {
              backgroundColor: "rgba(140,176,255,0.035)",
              ...(reduceMotion
                ? {}
                : {
                    "--drift-x": "-15px",
                    "--drift-y": "15px",
                    "--drift-scale-from": 1,
                    "--drift-scale-to": 1.03,
                    "--drift-duration": "18s",
                  }),
            } as any
          }
        />

        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 50% 18%, rgba(127,169,255,0.045), transparent 36%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          {...reveal}
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <div>
            <motion.div
              initial={
                reduceMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -20 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-5 flex items-center gap-3"
            >
              <motion.span
                initial={reduceMotion ? undefined : { width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: reduceMotion ? 0 : 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-px"
                style={{
                  backgroundColor: `${SKY_BLUE}85`,
                }}
              />

              <span
                className="text-[10px] font-semibold uppercase tracking-[0.28em]"
                style={{
                  color: SKY_BLUE,
                }}
              >
                Insights
              </span>
            </motion.div>

            <motion.h1
              initial={
                reduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 28 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: reduceMotion ? 0 : 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-2xl text-[3rem] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[3.7rem] sm:leading-[1.04] lg:text-[4.3rem] lg:leading-[1.04]"
            >
              <span style={{ color: HEADING_WHITE }}>Ideas.</span>
              <br />
              <span style={{ color: HEADING_WHITE }}>Perspectives.</span>
              <br />

              <motion.span
                initial={
                  reduceMotion
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -14 }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: reduceMotion ? 0 : 0.35,
                  ease: [0.22, 1, 0.36, 1],
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
            initial={
              reduceMotion
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 28 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: reduceMotion ? 0 : 0.18,
              ease: [0.22, 1, 0.36, 1],
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
          {...reveal}
          whileHover={
            reduceMotion
              ? undefined
              : {
                  y: -7,
                  scale: 1.003,
                }
          }
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative mt-16 overflow-hidden rounded-[2rem] border border-white/[0.13] bg-[#122236] backdrop-blur-xl transition-[border-color,box-shadow,background-color] duration-700 ease-out hover:border-white/[0.2] hover:bg-[#122236] hover:shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:mt-20"
        >
          {/* Mobile Outer Border Shine Only — Stable */}
          <div
            className="pointer-events-none absolute inset-0 z-30 rounded-[2rem] lg:hidden"
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

          <motion.div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            <motion.div
              initial={{ x: "-120%", opacity: 0 }}
              whileHover={{
                x: "120%",
                opacity: 1,
              }}
              transition={{
                duration: 1.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute top-0 h-full w-[38%] -skew-x-12 blur-[28px]"
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

          <div
            className="ambient-blob pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full blur-[120px]"
            style={
              {
                backgroundColor: "rgba(127,169,255,0.055)",
                ...(reduceMotion
                  ? {}
                  : {
                      "--drift-x": "18px",
                      "--drift-y": "-14px",
                      "--drift-duration": "14s",
                    }),
              } as any
            }
          />

          <div className="relative grid lg:grid-cols-[1fr_0.65fr]">
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:min-h-[440px] lg:p-14">
              <div>
                <motion.span
                  initial={
                    reduceMotion
                      ? undefined
                      : { opacity: 0, y: 10 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                  style={{ color: SKY_BLUE }}
                >
                  Featured Perspective
                </motion.span>

                <motion.h2
                  initial={
                    reduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 22 }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: reduceMotion ? 0 : 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-8 max-w-2xl text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[2.8rem] sm:leading-[1.05] lg:text-[3.25rem] lg:leading-[1.06]"
                >
                  <span style={{ color: HEADING_WHITE }}>
                    Leadership Is About
                  </span>

                  <motion.span
                    initial={
                      reduceMotion
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -16 }
                    }
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: reduceMotion ? 0 : 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block"
                    style={{ color: HEADING_WHITE }}
                  >
                    Creating Clarity
                  </motion.span>
                </motion.h2>

                <motion.p
                  initial={
                    reduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 15 }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.75,
                    delay: reduceMotion ? 0 : 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:leading-7"
                >
                  Strong leadership is not about having every answer. It is
                  about creating clarity when the path forward is not always
                  obvious.
                </motion.p>
              </div>

              <motion.div
                initial={
                  reduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 12 }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: reduceMotion ? 0 : 0.4,
                  ease: [0.22, 1, 0.36, 1],
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

            {/* Strategic Board — Centered on Mobile */}
            <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden border-t border-white/[0.09] lg:min-h-[440px] lg:border-l lg:border-t-0">
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.05, 1],
                        opacity: [0.06, 0.12, 0.06],
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
                style={{
                  backgroundColor: "rgba(127,169,255,0.065)",
                }}
              />

              <motion.div
                initial={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        scale: 0.82,
                        rotate: -3,
                      }
                }
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.1,
                  delay: reduceMotion ? 0 : 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative h-[250px] w-[250px] shrink-0 sm:h-[310px] sm:w-[310px]"
              >
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          rotate: 360,
                        }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 30,
                          repeat: Infinity,
                          ease: "linear",
                        }
                  }
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: `1px solid ${SKY_BLUE}30`,
                    boxShadow: `
                      0 0 0 10px rgba(127,169,255,0.018),
                      0 0 0 11px rgba(127,169,255,0.035),
                      0 0 35px rgba(127,169,255,0.05)
                    `,
                  }}
                />

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          rotate: -360,
                        }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 24,
                          repeat: Infinity,
                          ease: "linear",
                        }
                  }
                  className="absolute inset-[22px] rounded-full sm:inset-[27px]"
                  style={{
                    border: `1px solid ${SKY_BLUE}22`,
                  }}
                />

                <div
                  className="absolute inset-[52px] rounded-full sm:inset-[67px]"
                  style={{
                    border: `1px solid ${SKY_BLUE}28`,
                    background:
                      "radial-gradient(circle, rgba(127,169,255,0.045), rgba(12,29,48,0.35) 65%, transparent 72%)",
                  }}
                />

                {[0, 45, 90, 135, 180, 225, 270, 315].map(
                  (rotation) => (
                    <motion.div
                      key={rotation}
                      initial={
                        reduceMotion
                          ? undefined
                          : {
                              opacity: 0,
                              scaleX: 0,
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        scaleX: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: reduceMotion
                          ? 0
                          : 0.35 + rotation / 720,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute left-1/2 top-1/2 h-px w-[115px] origin-left sm:w-[145px]"
                      style={{
                        transform: `rotate(${rotation}deg)`,
                        background: `linear-gradient(to right, ${SKY_BLUE}16, transparent)`,
                      }}
                    />
                  ),
                )}

                {boardPoints.map((point, index) => (
                  <motion.div
                    key={`${point.left}-${point.top}`}
                    initial={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            scale: 0.3,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      delay: reduceMotion ? 0 : 0.5 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute"
                    style={{
                      left: point.left,
                      top: point.top,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <motion.div
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              scale: [1, 1.1, 1],
                              opacity: [0.45, 0.78, 0.45],
                            }
                      }
                      transition={
                        reduceMotion
                          ? undefined
                          : {
                              duration: 3,
                              delay: index * 0.25,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }
                      }
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
                    </motion.div>
                  </motion.div>
                ))}

                {[0, 1, 2, 3].map((index) => {
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
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              left: [point.left, "50%"],
                              top: [point.top, "50%"],
                              opacity: [0, 1, 0],
                              scale: [0.7, 1, 0.75],
                            }
                      }
                      transition={
                        reduceMotion
                          ? undefined
                          : {
                              duration: 2.5,
                              delay: point.delay,
                              repeat: Infinity,
                              repeatDelay: 0.15,
                              ease: "easeOut",
                              times: [0, 0.82, 1],
                            }
                      }
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                    >
                      <ArrowUpRight
                        size={18}
                        strokeWidth={2}
                        className="sm:h-5 sm:w-5"
                        style={{
                          color: ROYAL_BLUE,
                          filter: `drop-shadow(0 0 6px ${ROYAL_BLUE}A0) drop-shadow(0 0 13px ${ROYAL_BLUE}55)`,
                          transform: `rotate(${point.rotate}deg)`,
                        }}
                      />
                    </motion.div>
                  );
                })}

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.05, 1],
                        }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 3.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                  className="absolute left-1/2 top-1/2 h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 rounded-full border sm:h-[58px] sm:w-[58px]"
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
                    className="absolute left-1/2 top-[calc(100%+12px)] -translate-x-1/2 whitespace-nowrap text-[7px] font-semibold uppercase tracking-[0.28em]"
                    style={{
                      color: `${SKY_BLUE}A0`,
                    }}
                  >
                    Clarity
                  </span>
                </motion.div>

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [0.7, 1.55],
                          opacity: [0.2, 0],
                        }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeOut",
                        }
                  }
                  className="absolute left-1/2 top-1/2 h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 rounded-full border sm:h-[58px] sm:w-[58px]"
                  style={{
                    borderColor: `${SKY_BLUE}28`,
                  }}
                />
              </motion.div>

              <motion.div
                initial={
                  reduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 10 }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: reduceMotion ? 0 : 0.7,
                  ease: [0.22, 1, 0.36, 1],
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
          {...reveal}
          className="mt-16 sm:mt-20"
        >
          <motion.div
            initial={
              reduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 18 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-8"
          >
            <span
              className="text-[9px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: SKY_BLUE }}
            >
              Perspectives
            </span>

            <h2 className="mt-2 text-[2.25rem] font-medium leading-[1.1] tracking-[-0.03em] transition-all duration-500 sm:text-[2.45rem] sm:leading-[1.08] lg:text-[2.7rem] lg:leading-[1.08]">
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
                  initial={
                    reduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: reduceMotion ? 0 : index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -9,
                          scale: 1.015,
                        }
                  }
                  className="group relative overflow-hidden rounded-[1.35rem] border border-white/[0.22] bg-[#1A3550] p-6 transition-[border-color,box-shadow,transform,background-color] duration-700 ease-out hover:border-white/[0.4] hover:bg-[#1D3B59] hover:shadow-[0_18px_50px_rgba(79,140,255,0.14)] sm:p-7"
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.6,
                      rotate: -8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: reduceMotion
                        ? 0
                        : 0.18 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.1,
                            rotate: 5,
                          }
                    }
                    className="relative flex h-10 w-10 items-center justify-center rounded-lg border bg-white/[0.08] transition-[background-color,border-color,box-shadow] duration-500 group-hover:bg-white/[0.14]"
                    style={{
                      borderColor: `${SKY_BLUE}55`,
                      boxShadow: `0 0 18px rgba(127,169,255,0.06)`,
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

                    <h3 className="mt-3 max-w-[280px] text-[1.35rem] font-medium leading-[1.25] tracking-[-0.02em] text-white transition-colors duration-500 sm:text-[1.5rem] sm:leading-[1.3]">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-[320px] text-[12px] leading-6 text-slate-200 transition-colors duration-500 group-hover:text-white">
                      {item.description}
                    </p>
                  </div>

                  <motion.div
                    initial={{ width: 32 }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { width: 58 }
                    }
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative mt-7 h-px"
                    style={{
                      backgroundColor: `${SKY_BLUE}65`,
                    }}
                  />

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 5,
                      y: 5,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 1,
                            x: 0,
                            y: 0,
                          }
                    }
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
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
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        {/* CEO Perspective */}
        <motion.div
          {...reveal}
          whileHover={
            reduceMotion
              ? undefined
              : {
                  y: -5,
                }
          }
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-slate-300/60 bg-[#F1F2EE] px-7 py-7 transition-[border-color,box-shadow,background-color] duration-700 ease-out hover:border-slate-400/70 hover:bg-[#F1F2EE] hover:shadow-[0_24px_75px_rgba(0,0,0,0.14)] sm:px-10 sm:py-9 lg:px-16 lg:py-11"
        >
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    x: ["-8%", "8%", "-8%"],
                    opacity: [0.18, 0.28, 0.18],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full blur-[110px]"
            style={{
              backgroundColor: "rgba(127,169,255,0.12)",
            }}
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <motion.span
              initial={
                reduceMotion
                  ? undefined
                  : { opacity: 0, y: 8 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[9px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: ROYAL_BLUE }}
            >
              CEO Perspective
            </motion.span>

            <motion.blockquote
              initial={
                reduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.95,
                delay: reduceMotion ? 0 : 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 text-[1.8rem] font-medium leading-[1.25] tracking-[-0.025em] sm:text-[2.15rem] sm:leading-[1.3] lg:text-[2.5rem] lg:leading-[1.3]"
            >
              <span className="text-slate-900">
                “The best opportunities are often found where{" "}
              </span>

              <motion.span
                initial={
                  reduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0.2 }
                }
                whileInView={{
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: reduceMotion ? 0 : 0.35,
                }}
                style={{ color: ROYAL_BLUE }}
              >
                technology, people, and purposeful execution
              </motion.span>

              <span className="text-slate-900"> meet.”</span>
            </motion.blockquote>

            <motion.div
              initial={
                reduceMotion
                  ? undefined
                  : {
                      width: 0,
                      opacity: 0,
                    }
              }
              whileInView={{
                width: 36,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: reduceMotion ? 0 : 0.45,
                ease: [0.22, 1, 0.36, 1],
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
          {...reveal}
          className="mt-12 border-t border-white/[0.1] pt-8"
        >
          <motion.div
            initial={
              reduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 15 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span
              className="text-[9px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: SKY_BLUE }}
            >
              Continue Exploring
            </span>

            <h2 className="mt-2 text-[2.25rem] font-medium leading-[1.1] tracking-[-0.03em] transition-colors duration-500 sm:text-[2.45rem] sm:leading-[1.08] lg:text-[2.7rem] lg:leading-[1.08]">
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