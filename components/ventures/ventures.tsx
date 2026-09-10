"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  CarFront,
  Wheat,
  Cuboid,
  BarChart3,
  Megaphone,
  BrainCircuit,
  Presentation,
  ClipboardCheck,
  Building2,
  Globe2,
  ChevronDown,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";

const activities = [
  {
    number: "01",
    title: "New Automobile Trading For Export (Outside UAE)",
    description:
      "Trading of new automobiles for export outside the UAE, connecting automotive supply with international markets.",
    icon: CarFront,
    tag: "AUTOMOTIVE EXPORT",
    image: "/images/ventures/01.jpeg",
    accent:
      "from-sky-400/[0.14] via-blue-500/[0.04] to-transparent",
  },
  {
    number: "02",
    title: "Foodstuff Trading Import & Export",
    description:
      "Trading and managing the import and export of foodstuff products across different seasons, crops and agricultural cycles, connecting regional supply with international markets according to seasonal availability and demand.",
    icon: Wheat,
    tag: "FOODSTUFF TRADING",
    image: "/images/ventures/02.jpeg",
    accent:
      "from-emerald-400/[0.14] via-teal-500/[0.04] to-transparent",
  },
  {
    number: "03",
    title: "Web3 Venture Studio",
    description:
      "Building, supporting and exploring innovative ventures across Web3, emerging technologies and digital ecosystems.",
    icon: Cuboid,
    tag: "WEB3 VENTURE STUDIO",
    image: "/images/ventures/03.jpeg",
    accent:
      "from-violet-400/[0.14] via-indigo-500/[0.04] to-transparent",
  },
  {
    number: "04",
    title: "Digital Analytics Services",
    description:
      "Transforming business data into meaningful intelligence, measurable insights and smarter decisions.",
    icon: BarChart3,
    tag: "DIGITAL ANALYTICS",
    image: "/images/ventures/04.jpeg",
    accent:
      "from-cyan-400/[0.14] via-sky-500/[0.04] to-transparent",
  },
  {
    number: "05",
    title: "Marketing Services Via Social Media",
    description:
      "Developing digital marketing initiatives and social media strategies that connect brands with their audiences.",
    icon: Megaphone,
    tag: "SOCIAL MEDIA MARKETING",
    image: "/images/ventures/05.jpeg",
    accent:
      "from-pink-400/[0.14] via-fuchsia-500/[0.04] to-transparent",
  },
  {
    number: "06",
    title:
      "Innovation And Artificial Intelligence Research And Consultancies",
    description:
      "Exploring emerging technologies and delivering research-driven consultancy across innovation and artificial intelligence.",
    icon: BrainCircuit,
    tag: "AI & INNOVATION",
    image: "/images/ventures/06.jpeg",
    accent:
      "from-blue-400/[0.14] via-cyan-500/[0.04] to-transparent",
  },
  {
    number: "07",
    title: "Advertising",
    description:
      "Supporting brands and organizations through strategic advertising solutions designed to strengthen visibility and market presence.",
    icon: Megaphone,
    tag: "ADVERTISING",
    image: "/images/ventures/07.jpeg",
    accent:
      "from-orange-400/[0.14] via-amber-500/[0.04] to-transparent",
  },
  {
    number: "08",
    title: "Marketing Management",
    description:
      "Managing marketing strategies, campaigns and initiatives to support sustainable business growth.",
    icon: Presentation,
    tag: "MARKETING MANAGEMENT",
    image: "/images/ventures/08.jpeg",
    accent:
      "from-indigo-400/[0.14] via-blue-500/[0.04] to-transparent",
  },
  {
    number: "09",
    title: "Surveying & Evaluating Services",
    description:
      "Providing structured surveying, assessment and evaluation services to support informed commercial decisions.",
    icon: ClipboardCheck,
    tag: "SURVEYING & EVALUATING",
    image: "/images/ventures/09.jpeg",
    accent:
      "from-teal-400/[0.14] via-emerald-500/[0.04] to-transparent",
  },
  {
    number: "10",
    title: "Exhibition Organizing",
    description:
      "Organizing exhibitions and business events that create opportunities for networking, visibility and commercial growth.",
    icon: Building2,
    tag: "EXHIBITION ORGANIZING",
    image: "/images/ventures/10.jpeg",
    accent:
      "from-sky-400/[0.14] via-cyan-500/[0.04] to-transparent",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const hoverLift = {
  y: -5,
  transition: {
    duration: 0.35,
    ease,
  },
};

/*
|--------------------------------------------------------------------------
| IMAGE PRELOADER
|--------------------------------------------------------------------------
| All venture images are requested in the background after the page loads.
| This means when the user selects another category, the image is much more
| likely to already be available in browser cache.
*/
function VentureImagePreloader() {
  useEffect(() => {
    let cancelled = false;

    const preloadImages = () => {
      if (cancelled) return;

      activities.forEach((activity) => {
        const img = new window.Image();

        img.decoding = "async";
        img.src = activity.image;
      });
    };

    /*
     * Don't block the initial render.
     * Give the browser a moment to render the page first, then preload.
     */
    if (
      "requestIdleCallback" in window &&
      typeof window.requestIdleCallback === "function"
    ) {
      const idleId = window.requestIdleCallback(
        () => preloadImages(),
        { timeout: 1500 }
      );

      return () => {
        cancelled = true;

        if (
          "cancelIdleCallback" in window &&
          typeof window.cancelIdleCallback === "function"
        ) {
          window.cancelIdleCallback(idleId);
        }
      };
    }

    const timeoutId = setTimeout(preloadImages, 300);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
}

export default function Ventures() {
  const reduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [platformActive, setPlatformActive] = useState(false);
  const [activeStat, setActiveStat] = useState<number | null>(null);
  const [finePointer, setFinePointer] = useState(false);

  const categoryRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const desktopCategoryRefs = useRef<
    (HTMLButtonElement | null)[]
  >([]);
  const desktopCategoryScrollRef =
    useRef<HTMLDivElement | null>(null);

  const activeHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const shouldScrollHeadingRef = useRef(false);

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

  const motionEnabled = !reduceMotion;
  const hoverEnabled = motionEnabled && finePointer;

  const active = activities[activeIndex];

  const reveal = reduceMotion
    ? undefined
    : {
        opacity: 1,
        y: 0,
      };

  const normalizeIndex = (index: number) =>
    ((index % activities.length) + activities.length) %
    activities.length;

  const scrollActiveHeading = () => {
    requestAnimationFrame(() => {
      activeHeadingRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "center",
      });
    });
  };

  const scrollDesktopCategoryIntoView = (index: number) => {
    const container = desktopCategoryScrollRef.current;
    const item = desktopCategoryRefs.current[index];

    if (!container || !item) return;

    const targetTop =
      item.offsetTop -
      container.clientHeight / 2 +
      item.offsetHeight / 2;

    const maxScroll =
      container.scrollHeight - container.clientHeight;

    container.scrollTo({
      top: Math.max(0, Math.min(targetTop, maxScroll)),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const selectActivity = (index: number) => {
    const normalized = normalizeIndex(index);

    setActiveIndex(normalized);

    requestAnimationFrame(() => {
      categoryRefs.current[normalized]?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "nearest",
        inline: "center",
      });

      scrollDesktopCategoryIntoView(normalized);
    });
  };

  const moveActivity = (direction: 1 | -1) => {
    const nextIndex = normalizeIndex(
      activeIndex + direction
    );

    shouldScrollHeadingRef.current = true;
    setActiveIndex(nextIndex);
  };

  const scrollDesktopCategories = () => {
    moveActivity(1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollDesktopCategoryIntoView(activeIndex);

      if (shouldScrollHeadingRef.current) {
        shouldScrollHeadingRef.current = false;
        scrollActiveHeading();
      }
    }, 80);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06131F] text-white">
      <Navbar />

      <VentureImagePreloader />

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* TOP AMBIENT GLOW */}
          <div
            className={`${hoverEnabled ? "ambient-blob" : ""} absolute left-1/2 top-[-220px] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#174EA6]/[0.13] blur-[95px] sm:top-[-280px] sm:h-[560px] sm:w-[560px] sm:blur-[135px] lg:h-[680px] lg:w-[680px] lg:blur-[150px]`}
            style={
              hoverEnabled
                ? ({
                    "--drift-scale-from": 1,
                    "--drift-scale-to": 1.06,
                    "--drift-opacity-from": 0.8,
                    "--drift-opacity-to": 1,
                    "--drift-duration": "12s",
                  } as CSSProperties)
                : undefined
            }
          />

          {/* LEFT AMBIENT GLOW */}
          <div
            className={`${hoverEnabled ? "ambient-blob" : ""} absolute -left-[160px] top-[28%] h-[300px] w-[300px] rounded-full bg-[#168BD1]/[0.055] blur-[90px] sm:-left-[260px] sm:h-[450px] sm:w-[450px] sm:blur-[140px] lg:h-[500px] lg:w-[500px] lg:blur-[150px]`}
            style={
              hoverEnabled
                ? ({
                    "--drift-x": "25px",
                    "--drift-y": "-18px",
                    "--drift-duration": "14s",
                  } as CSSProperties)
                : undefined
            }
          />

          {/* RIGHT AMBIENT GLOW */}
          <div
            className={`${hoverEnabled ? "ambient-blob" : ""} absolute -right-[170px] top-[58%] h-[300px] w-[300px] rounded-full bg-[#2DD4BF]/[0.04] blur-[90px] sm:-right-[280px] sm:h-[450px] sm:w-[450px] sm:blur-[140px] lg:h-[500px] lg:w-[500px] lg:blur-[150px]`}
            style={
              hoverEnabled
                ? ({
                    "--drift-x": "-20px",
                    "--drift-y": "20px",
                    "--drift-duration": "16s",
                  } as CSSProperties)
                : undefined
            }
          />

          <div className="absolute left-1/2 top-[42%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#2878D7]/[0.025] blur-[90px] sm:h-[420px] sm:w-[420px] sm:blur-[130px] lg:h-[460px] lg:w-[460px] lg:blur-[140px]" />

          <div
            className="absolute inset-0 opacity-[0.006]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "120px 120px",
            }}
          />

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(40,120,215,.06),transparent_30%),radial-gradient(circle_at_20%_40%,rgba(45,212,191,.018),transparent_25%),linear-gradient(to_bottom,rgba(6,19,31,.08),rgba(6,19,31,.35))]" />
        </div>

        {/* HERO */}
        <section className="relative px-5 pb-9 pt-32 sm:px-8 sm:pb-16 sm:pt-20 md:px-10 md:pb-20 md:pt-24 lg:px-16 lg:pb-24 lg:pt-28">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 16,
                    }
              }
              animate={reveal}
              transition={{
                duration: 0.6,
                ease,
              }}
              className="max-w-5xl min-w-0"
            >
              <motion.div
                whileHover={
                  hoverEnabled
                    ? {
                        x: 3,
                      }
                    : undefined
                }
                transition={{
                  duration: 0.3,
                  ease,
                }}
                className="flex w-fit cursor-default items-center gap-3"
              >
                {hoverEnabled ? (
                  <motion.span
                    animate={{
                      scale: [1, 1.35, 1],
                      opacity: [0.75, 1, 0.75],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-[#42D5F5] shadow-[0_0_10px_rgba(66,213,245,.45)]"
                  />
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#42D5F5] shadow-[0_0_10px_rgba(66,213,245,.45)]" />
                )}

                <span className="text-[8px] font-semibold uppercase tracking-[0.32em] text-[#42D5F5] sm:text-[9px] sm:tracking-[0.4em]">
                  BH Ventures
                </span>
              </motion.div>

              <motion.h1
                whileHover={
                  hoverEnabled
                    ? {
                        x: 2,
                      }
                    : undefined
                }
                transition={{
                  duration: 0.4,
                  ease,
                }}
                className="mt-8 w-full max-w-5xl cursor-default break-words text-[clamp(2.8rem,11.2vw,6.5rem)] font-medium leading-[0.91] tracking-[-0.065em] sm:mt-9 sm:text-[clamp(3rem,9vw,6.5rem)] sm:tracking-[-0.07em] lg:text-[clamp(3rem,5.3vw,5rem)]"
              >
                <span className="text-white">
                  Building across
                </span>

                <br />

                <span className="bg-gradient-to-r from-white via-[#72DFF1] to-[#2878D7] bg-clip-text text-transparent">
                  multiple frontiers.
                </span>
              </motion.h1>

              <motion.p
                whileHover={
                  hoverEnabled
                    ? {
                        x: 2,
                      }
                    : undefined
                }
                transition={{
                  duration: 0.35,
                  ease,
                }}
                className="mt-9 max-w-2xl text-[12.5px] leading-7 text-white sm:mt-11 sm:text-[16px] sm:leading-9"
              >
                BH Ventures operates across diverse industries and
                emerging opportunities — combining commerce,
                technology, innovation, marketing and strategic
                services under one forward-looking venture platform.
              </motion.p>

              <div className="mt-8 grid grid-cols-3 gap-2.5 sm:mt-12 sm:flex sm:flex-wrap sm:gap-3">
                {[
                  ["10", "Activities"],
                  ["UAE", "Based"],
                  ["Multi", "Industry"],
                ].map(([value, label], index) => {
                  const isActive = activeStat === index;

                  return (
                    <motion.button
                      key={label}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveStat(index)}
                      whileHover={
                        hoverEnabled
                          ? {
                              y: -6,
                              scale: 1.035,
                            }
                          : undefined
                      }
                      whileTap={
                        motionEnabled
                          ? {
                              scale: 0.96,
                            }
                          : undefined
                      }
                      transition={{
                        duration: 0.3,
                        ease,
                      }}
                      className={`group relative min-w-0 appearance-none overflow-hidden rounded-2xl border px-2.5 py-4.5 text-left transition-[border-color,background-color,box-shadow,transform] duration-500 sm:backdrop-blur-xl ${
                        isActive
                          ? "border-[#42D5F5]/[0.58] bg-[#42D5F5]/[0.09] shadow-[0_16px_45px_rgba(66,213,245,.16)]"
                          : index === 1
                            ? "border-[#42D5F5]/[0.18] bg-[#42D5F5]/[0.045] hover:border-[#42D5F5]/[0.38] hover:bg-[#42D5F5]/[0.07] hover:shadow-[0_14px_38px_rgba(66,213,245,.09)]"
                            : "border-white/[0.08] bg-white/[0.022] hover:border-white/[0.17] hover:bg-white/[0.04] hover:shadow-[0_14px_38px_rgba(0,0,0,.2)]"
                      }`}
                    >
                      {hoverEnabled ? (
                        <>
                          <motion.span
                            aria-hidden="true"
                            animate={{
                              opacity: isActive
                                ? [0.5, 1, 0.5]
                                : [0.18, 0.65, 0.18],
                              scaleX: [0.75, 1, 0.75],
                            }}
                            transition={{
                              duration: isActive ? 1.8 : 2.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.2,
                            }}
                            className={`pointer-events-none absolute left-3 right-3 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#72E2F5] to-transparent ${
                              isActive
                                ? "opacity-100"
                                : "opacity-60"
                            }`}
                          />

                          <motion.span
                            aria-hidden="true"
                            animate={{
                              opacity: isActive
                                ? [0.45, 1, 0.45]
                                : [0.15, 0.55, 0.15],
                              scaleX: [0.75, 1, 0.75],
                            }}
                            transition={{
                              duration: isActive ? 2 : 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.25 + 0.4,
                            }}
                            className={`pointer-events-none absolute bottom-0 left-3 right-3 z-10 h-px bg-gradient-to-r from-transparent via-[#42D5F5] to-transparent ${
                              isActive
                                ? "opacity-100"
                                : "opacity-50"
                            }`}
                          />

                          <motion.span
                            aria-hidden="true"
                            animate={{
                              opacity: isActive
                                ? [0.4, 0.9, 0.4]
                                : [0.12, 0.5, 0.12],
                              scaleY: [0.72, 1, 0.72],
                            }}
                            transition={{
                              duration: isActive ? 2.1 : 3.1,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.18,
                            }}
                            className={`pointer-events-none absolute bottom-3 left-0 top-3 z-10 w-px bg-gradient-to-b from-transparent via-[#72E2F5] to-transparent ${
                              isActive
                                ? "opacity-100"
                                : "opacity-50"
                            }`}
                          />

                          <motion.span
                            aria-hidden="true"
                            animate={{
                              opacity: isActive
                                ? [0.45, 1, 0.45]
                                : [0.14, 0.55, 0.14],
                              scaleY: [0.72, 1, 0.72],
                            }}
                            transition={{
                              duration: isActive ? 1.9 : 2.9,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.22 + 0.3,
                            }}
                            className={`pointer-events-none absolute bottom-3 right-0 top-3 z-10 w-px bg-gradient-to-b from-transparent via-[#42D5F5] to-transparent ${
                              isActive
                                ? "opacity-100"
                                : "opacity-50"
                            }`}
                          />
                        </>
                      ) : (
                        <>
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute left-3 right-3 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#72E2F5]/60 to-transparent"
                          />

                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute bottom-0 left-3 right-3 z-10 h-px bg-gradient-to-r from-transparent via-[#42D5F5]/50 to-transparent"
                          />
                        </>
                      )}

                      <div className="relative z-20 flex min-w-0 flex-col items-center justify-center gap-1.5 sm:flex-row sm:items-baseline sm:gap-2">
                        <span
                          className={
                            index === 1 || isActive
                              ? "text-base font-medium text-[#67D9F0] sm:text-lg"
                              : "text-base font-medium text-white sm:text-lg"
                          }
                        >
                          {value}
                        </span>

                        <span className="text-[7px] font-semibold uppercase tracking-[0.14em] text-white sm:text-[8px] sm:tracking-[0.2em]">
                          {label}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* VENTURE INTRO */}
        <section className="relative mt-6 px-5 pb-6 sm:mt-12 sm:px-8 sm:pb-10 md:mt-14 md:px-10 lg:mt-16 lg:px-16 lg:pb-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 14,
                    }
              }
              whileInView={reveal}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                ease,
              }}
              whileHover={
                hoverEnabled
                  ? hoverLift
                  : undefined
              }
              whileTap={
                motionEnabled
                  ? {
                      scale: 0.985,
                      y: -2,
                    }
                  : undefined
              }
              onClick={() =>
                setPlatformActive((prev) => !prev)
              }
              className={`group relative cursor-pointer overflow-hidden rounded-[22px] border bg-[#0C2434] shadow-[0_18px_55px_rgba(0,0,0,.22)] transition-[border-color,background-color,box-shadow,transform] duration-500 sm:rounded-[30px] sm:backdrop-blur-xl ${
                platformActive
                  ? "border-[#42D5F5]/[0.28] bg-[#103044] shadow-[0_28px_85px_rgba(66,213,245,.10)]"
                  : "border-white/[0.09] hover:border-[#42D5F5]/[0.18] hover:bg-[#103044] hover:shadow-[0_28px_85px_rgba(0,0,0,.3)]"
              }`}
            >
              <div
                className={`pointer-events-none absolute -right-24 -top-24 h-[240px] w-[240px] rounded-full bg-[#168BD1]/[0.07] blur-[80px] transition-all duration-700 sm:-right-32 sm:-top-32 sm:h-[300px] sm:w-[300px] sm:blur-[100px] group-hover:scale-125 group-hover:bg-[#168BD1]/[0.11] ${
                  platformActive
                    ? "scale-125 bg-[#168BD1]/[0.12]"
                    : ""
                }`}
              />

              <div className="pointer-events-none absolute bottom-[-130px] left-[-100px] h-[250px] w-[250px] rounded-full bg-[#2DD4BF]/[0.025] blur-[80px] sm:bottom-[-160px] sm:left-[-120px] sm:h-[300px] sm:w-[300px] sm:blur-[100px]" />

              <div
                className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#42D5F5]/[0.45] to-transparent transition-opacity duration-500 ${
                  platformActive
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />

              <div className="relative z-10 grid lg:grid-cols-[1fr_300px]">
                <div className="p-5.5 sm:p-10 lg:p-12">
                  <div className="flex items-start gap-3.5 sm:gap-5">
                    <motion.div
                      animate={
                        platformActive && motionEnabled
                          ? {
                              scale: 1.08,
                              rotate: 4,
                            }
                          : undefined
                      }
                      whileHover={
                        hoverEnabled
                          ? {
                              scale: 1.08,
                              rotate: 4,
                            }
                          : undefined
                      }
                      whileTap={
                        motionEnabled
                          ? {
                              scale: 0.94,
                            }
                          : undefined
                      }
                      transition={{
                        duration: 0.3,
                        ease,
                      }}
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] border bg-[#42D5F5]/[0.04] transition-[border-color,background-color,box-shadow] duration-500 sm:h-14 sm:w-14 sm:rounded-2xl ${
                        platformActive
                          ? "border-[#42D5F5]/[0.38] bg-[#42D5F5]/[0.085] shadow-[0_0_35px_rgba(66,213,245,.11)]"
                          : "border-[#42D5F5]/[0.18] group-hover:border-[#42D5F5]/[0.32] group-hover:bg-[#42D5F5]/[0.075] group-hover:shadow-[0_0_32px_rgba(66,213,245,.09)]"
                      }`}
                    >
                      <Globe2
                        size={19}
                        strokeWidth={1.25}
                        className="text-[#67D9F0] sm:h-[22px] sm:w-[22px]"
                      />
                    </motion.div>

                    <div className="min-w-0">
                      <span className="text-[6.5px] font-semibold uppercase tracking-[0.28em] text-[#42D5F5] sm:text-[8px] sm:tracking-[0.35em]">
                        Venture Platform
                      </span>

                      <h2 className="mt-1.5 text-[clamp(2.2rem,9vw,3.3rem)] font-medium leading-none tracking-[-0.055em] text-white transition-transform duration-500 group-hover:translate-x-1 sm:mt-2">
                        BH Ventures
                      </h2>
                    </div>
                  </div>

                  <p className="mt-6 max-w-2xl text-[12px] leading-7 text-white transition-colors duration-500 group-hover:text-white sm:mt-9 sm:text-[15px] sm:leading-9">
                    A diversified venture platform bringing together
                    ten strategic business activities across multiple
                    industries and emerging opportunities.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5 sm:mt-9 sm:gap-2">
                    {[
                      "10 Activities",
                      "Multi-Industry",
                      "Global Outlook",
                    ].map((item) => (
                      <motion.span
                        key={item}
                        whileHover={
                          hoverEnabled
                            ? {
                                y: -3,
                                scale: 1.02,
                              }
                            : undefined
                        }
                        whileTap={
                          motionEnabled
                            ? {
                                scale: 0.96,
                              }
                            : undefined
                        }
                        transition={{
                          duration: 0.25,
                          ease,
                        }}
                        className={`cursor-default rounded-full border px-3 py-2 text-[6.5px] font-semibold uppercase tracking-[0.16em] transition-[border-color,background-color,color,box-shadow,transform] duration-400 sm:px-4 sm:text-[8px] sm:tracking-[0.22em] ${
                          platformActive
                            ? "border-[#42D5F5]/[0.28] bg-[#42D5F5]/[0.065] text-white"
                            : "border-white/[0.1] bg-white/[0.035] text-white hover:border-[#42D5F5]/[0.3] hover:bg-[#42D5F5]/[0.07] hover:text-white hover:shadow-[0_0_22px_rgba(66,213,245,.06)]"
                        }`}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>

                  {hoverEnabled ? (
                    <motion.div
                      animate={{
                        opacity: [0.35, 0.7, 0.35],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="mt-5 flex items-center gap-2 text-[#67D9F0]"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#42D5F5]" />

                      <span className="text-[6.5px] font-semibold uppercase tracking-[0.2em]">
                        Tap to explore
                      </span>
                    </motion.div>
                  ) : (
                    <div className="mt-5 flex items-center gap-2 text-[#67D9F0]">
                      <span className="h-1 w-1 rounded-full bg-[#42D5F5]" />

                      <span className="text-[6.5px] font-semibold uppercase tracking-[0.2em]">
                        Tap to explore
                      </span>
                    </div>
                  )}
                </div>

                <div
                  className={`relative flex min-h-[135px] items-center border-t border-white/[0.08] p-5 transition-[border-color,background-color] duration-500 group-hover:border-white/[0.12] sm:min-h-[180px] sm:p-8 lg:border-l lg:border-t-0 lg:p-10 ${
                    platformActive
                      ? "bg-white/[0.018]"
                      : ""
                  }`}
                >
                  <div className="transition-transform duration-500 group-hover:translate-x-1">
                    <span className="text-[6.5px] font-semibold uppercase tracking-[0.28em] text-white sm:text-[8px] sm:tracking-[0.35em]">
                      Portfolio Scope
                    </span>

                    <div className="mt-2.5 flex min-w-0 items-center gap-3 overflow-visible sm:mt-3">
                      <motion.span
                        animate={
                          platformActive && motionEnabled
                            ? {
                                scale: [1, 1.08, 1],
                              }
                            : undefined
                        }
                        transition={{
                          duration: 0.5,
                          ease,
                        }}
                        className="inline-block shrink-0 whitespace-nowrap text-[3.6rem] font-medium leading-none tracking-normal text-white sm:text-7xl"
                      >
                        10
                      </motion.span>

                      <span className="min-w-0 text-[7px] font-semibold uppercase tracking-[0.16em] text-[#67D9F0] sm:text-[9px] sm:tracking-[0.22em]">
                        Activities
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 10 ACTIVITIES */}
        <section className="relative mt-7 px-5 pb-14 sm:mt-12 sm:px-8 sm:pb-20 md:mt-14 md:px-10 lg:mt-16 lg:px-16 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 14,
                    }
              }
              whileInView={reveal}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                ease,
              }}
              className="mb-6 flex flex-col gap-6 border-b border-white/[0.08] pb-6 sm:mb-10 sm:gap-8 sm:pb-9 lg:mb-12 lg:flex-row lg:items-end lg:justify-between"
            >
              <div className="min-w-0">
                <span className="text-[7px] font-semibold uppercase tracking-[0.28em] text-[#42D5F5] sm:text-[9px] sm:tracking-[0.35em]">
                  Our Activities
                </span>

                <motion.h2
                  whileHover={
                    hoverEnabled
                      ? {
                          x: 2,
                        }
                      : undefined
                  }
                  transition={{
                    duration: 0.35,
                    ease,
                  }}
                  className="mt-4 max-w-5xl cursor-default text-[clamp(2.75rem,12vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.07em] sm:mt-3 sm:text-[clamp(2.4rem,8vw,5.8rem)] lg:text-[clamp(2.35rem,5vw,4.7rem)]"
                >
                  <span className="text-white">
                    Ten activities.
                  </span>

                  <br />

                  <span className="bg-gradient-to-r from-white via-[#72DFF1] to-[#2878D7] bg-clip-text text-transparent">
                    One connected ecosystem.
                  </span>
                </motion.h2>
              </div>

              <p className="max-w-sm text-[9.5px] leading-5 text-white transition-colors duration-400 hover:text-white sm:text-[11px] sm:leading-6 lg:pb-2 lg:text-right">
                Explore the different business frontiers that form
                the BH Ventures portfolio.
              </p>
            </motion.div>

            {/* MOBILE SELECTOR */}
            <div className="mb-6 -mx-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden">
              <div className="flex min-w-max gap-2.5 pr-8">
                {activities.map((activity, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <motion.button
                      key={activity.number}
                      ref={(el) => {
                        categoryRefs.current[index] = el;
                      }}
                      type="button"
                      onClick={() => selectActivity(index)}
                      whileHover={
                        hoverEnabled
                          ? {
                              y: -2,
                            }
                          : undefined
                      }
                      whileTap={
                        motionEnabled
                          ? {
                              scale: 0.96,
                            }
                          : undefined
                      }
                      transition={{
                        duration: 0.25,
                        ease,
                      }}
                      className={`flex h-12 shrink-0 items-center gap-2.5 rounded-full border px-4.5 text-[9px] font-semibold uppercase tracking-[0.12em] transition-[border-color,background-color,color,box-shadow,transform] duration-400 sm:h-11 sm:px-4.5 sm:text-[9px] sm:tracking-[0.15em] ${
                        isActive
                          ? "border-[#42D5F5]/[0.42] bg-[#42D5F5]/[0.10] text-[#72E2F5] shadow-[0_9px_28px_rgba(66,213,245,.10)]"
                          : "border-white/[0.09] bg-white/[0.025] text-white hover:border-white/[0.17] hover:bg-white/[0.05] hover:text-white"
                      }`}
                    >
                      <span
                        className={`text-[9px] font-bold tracking-[0.12em] ${
                          isActive
                            ? "text-[#72E2F5]"
                            : "text-white"
                        }`}
                      >
                        {activity.number}
                      </span>

                      <span className="max-w-[125px] truncate text-[8.5px] font-semibold tracking-[0.13em] sm:max-w-[130px] sm:text-[9px] sm:tracking-[0.15em]">
                        {activity.tag}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* DESKTOP */}
            <div className="grid items-start gap-4 sm:gap-5 lg:grid-cols-[230px_1fr]">
              {/* CATEGORY CARD */}
              <div className="hidden lg:block lg:self-start">
                <motion.div
                  whileHover={
                    hoverEnabled
                      ? {
                          y: -2,
                        }
                      : undefined
                  }
                  transition={{
                    duration: 0.35,
                    ease,
                  }}
                  className="sticky top-28 flex h-[520px] flex-col overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#091C2B]/75 p-1.5 shadow-[0_18px_55px_rgba(0,0,0,.15)] backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-500 hover:border-white/[0.14] hover:bg-[#0A1F30] hover:shadow-[0_24px_65px_rgba(0,0,0,.2)]"
                >
                  {/* CATEGORY HEADER */}
                  <div className="shrink-0 px-4 pb-4 pt-5">
                    <div className="flex items-center gap-2.5">
                      <span className="h-px w-6 bg-gradient-to-r from-[#42D5F5]/70 to-transparent" />

                      <span className="text-[7px] font-semibold uppercase tracking-[0.28em] text-[#67D9F0]">
                        10 Activities
                      </span>
                    </div>

                    <div className="mt-2.5 text-[11px] font-medium tracking-[-0.01em] text-white/75">
                      Explore our business categories
                    </div>
                  </div>

                  {/* DESKTOP CATEGORY SCROLLER */}
                  <div className="relative min-h-0 flex-1">
                    {/* DOWN */}
                    <button
                      type="button"
                      aria-label="Next category"
                      title="Next category"
                      onClick={() =>
                        scrollDesktopCategories()
                      }
                      className="absolute bottom-1.5 right-1.5 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-[#42D5F5]/[0.18] bg-[#071A29]/95 text-[#67D9F0] shadow-[0_6px_20px_rgba(0,0,0,.28)] backdrop-blur-xl transition-[border-color,background-color,color,box-shadow,transform] duration-300 hover:border-[#42D5F5]/[0.45] hover:bg-[#0D2A3D] hover:text-[#8DEBFF] hover:shadow-[0_0_20px_rgba(66,213,245,.12)] active:scale-95"
                    >
                      <ChevronDown
                        size={15}
                        strokeWidth={1.7}
                      />
                    </button>

                    <div
                      ref={desktopCategoryScrollRef}
                      className="h-full w-full overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                      <div className="flex w-full flex-col pb-9 pt-2">
                        {activities.map(
                          (activity, index) => {
                            const isActive =
                              index === activeIndex;

                            return (
                              <motion.button
                                key={activity.number}
                                ref={(el) => {
                                  desktopCategoryRefs.current[
                                    index
                                  ] = el;
                                }}
                                type="button"
                                onClick={() =>
                                  selectActivity(index)
                                }
                                whileHover={
                                  hoverEnabled
                                    ? {
                                        x: 3,
                                      }
                                    : undefined
                                }
                                whileTap={
                                  motionEnabled
                                    ? {
                                        scale: 0.99,
                                      }
                                    : undefined
                                }
                                transition={{
                                  duration: 0.22,
                                  ease,
                                }}
                                className={`group relative flex h-[60px] w-full shrink-0 items-center gap-2.5 rounded-[13px] px-3 text-left transition-[background-color,color] duration-300 ${
                                  isActive
                                    ? "bg-white/[0.055]"
                                    : "hover:bg-white/[0.045]"
                                }`}
                              >
                                {isActive && (
                                  <motion.div
                                    layoutId="activeActivityIndicator"
                                    transition={{
                                      duration: 0.4,
                                      ease,
                                    }}
                                    className="absolute bottom-2 left-0 top-2 w-[2px] rounded-full bg-[#42D5F5] shadow-[0_0_12px_rgba(66,213,245,.45)]"
                                  />
                                )}

                                <span
                                  className={`shrink-0 text-[9px] font-semibold tracking-[0.16em] transition-colors duration-300 ${
                                    isActive
                                      ? "text-[#67D9F0]"
                                      : "text-white group-hover:text-white"
                                  }`}
                                >
                                  {activity.number}
                                </span>

                                <span
                                  className={`min-w-0 text-[10.5px] font-medium uppercase tracking-[0.065em] transition-colors duration-300 ${
                                    isActive
                                      ? "text-white"
                                      : "text-white group-hover:text-white"
                                  }`}
                                >
                                  {activity.tag}
                                </span>
                              </motion.button>
                            );
                          }
                        )}
                      </div>
                    </div>

                    {/* BOTTOM HINT */}
                    <div className="pointer-events-none absolute bottom-2 left-2 z-20 flex items-center gap-1.5 opacity-70">
                      <span className="h-px w-6 bg-gradient-to-r from-transparent via-[#42D5F5]/40 to-transparent" />

                      <span className="text-[5.5px] font-semibold uppercase tracking-[0.16em] text-white/45">
                        01 — 10
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* ACTIVE ACTIVITY CARD */}
              <motion.div
                whileHover={
                  hoverEnabled
                    ? {
                        y: -6,
                      }
                    : undefined
                }
                transition={{
                  duration: 0.4,
                  ease,
                }}
                className="group relative min-w-0 overflow-hidden rounded-[20px] border border-white/[0.09] bg-[#091C2B]/90 shadow-[0_22px_65px_rgba(0,0,0,.19)] transition-[border-color,box-shadow,background-color] duration-500 sm:rounded-[26px] sm:backdrop-blur-xl"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${active.accent} transition-opacity duration-700`}
                />

                <div className="pointer-events-none absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full bg-[#168BD1]/[0.055] blur-[80px] transition-all duration-700 sm:-right-28 sm:-top-28 sm:h-[340px] sm:w-[340px] sm:blur-[100px] group-hover:scale-125 group-hover:bg-[#168BD1]/[0.09]" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* OPTIMIZED ACTIVITY IMAGE */}
                <motion.div
                  key={`image-${active.number}`}
                  initial={false}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.2,
                    ease,
                  }}
                  className="relative aspect-[16/9] min-h-[240px] w-full overflow-hidden bg-[#071722] sm:min-h-[260px] lg:aspect-[16/8] lg:min-h-0"
                >
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 92vw, 900px"
                    quality={82}
                    priority={activeIndex === 0}
                    fetchPriority={
                      activeIndex === 0 ? "high" : "auto"
                    }
                    className="object-contain object-center"
                  />
                </motion.div>

                <div className="relative p-5.5 sm:p-8 lg:p-11">
                  <motion.div
                    key={`category-${active.number}`}
                    initial={
                      reduceMotion || !hoverEnabled
                        ? false
                        : {
                            opacity: 0,
                            y: 8,
                          }
                    }
                    animate={
                      reduceMotion || !hoverEnabled
                        ? undefined
                        : {
                            opacity: 1,
                            y: 0,
                          }
                    }
                    transition={{
                      duration: 0.4,
                      ease,
                    }}
                    className="mb-5 flex w-fit max-w-full items-center gap-2.5 rounded-full border border-[#42D5F5]/[0.22] bg-[#42D5F5]/[0.055] px-4 py-2.5 transition-[border-color,background-color,box-shadow] duration-500 group-hover:border-[#42D5F5]/[0.35] group-hover:bg-[#42D5F5]/[0.08] group-hover:shadow-[0_0_30px_rgba(66,213,245,.07)] sm:mb-7 sm:gap-3 sm:px-6 sm:py-3.5"
                  >
                    <span className="shrink-0 text-[9px] font-semibold tracking-[0.2em] text-[#67D9F0] sm:text-[10px] sm:tracking-[0.22em]">
                      {active.number}
                    </span>

                    <span className="h-3.5 w-px shrink-0 bg-[#42D5F5]/25 sm:h-4" />

                    <span className="truncate text-[8px] font-semibold uppercase tracking-[0.22em] text-white sm:text-[9px] sm:tracking-[0.3em]">
                      {active.tag}
                    </span>
                  </motion.div>

                  <motion.div
                    key={`content-${active.number}`}
                    initial={
                      reduceMotion || !hoverEnabled
                        ? false
                        : {
                            opacity: 0,
                            y: 12,
                          }
                    }
                    animate={
                      reduceMotion || !hoverEnabled
                        ? undefined
                        : {
                            opacity: 1,
                            y: 0,
                          }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.04,
                      ease,
                    }}
                  >
                    <h3
                      ref={activeHeadingRef}
                      className={`max-w-4xl font-medium leading-[1.05] tracking-[-0.045em] text-white ${
                        active.number === "06"
                          ? "text-[clamp(1.35rem,4.5vw,2.45rem)] sm:text-[clamp(1.5rem,5vw,2.45rem)]"
                          : "text-[clamp(1.5rem,4.7vw,3rem)] sm:text-[clamp(1.7rem,5.2vw,3rem)]"
                      }`}
                    >
                      {active.title}
                    </h3>

                    <p className="mt-4 max-w-4xl font-light leading-6.5 tracking-normal text-white/70 sm:mt-5 sm:text-[15px] sm:leading-7">
                      {active.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BEYOND ONE INDUSTRY */}
        <section className="relative -mt-7 px-5 pb-12 sm:-mt-12 sm:px-8 sm:pb-20 md:-mt-16 md:px-10 lg:px-16 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 16,
                    }
              }
              whileInView={reveal}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                ease,
              }}
              whileHover={
                hoverEnabled
                  ? {
                      y: -5,
                    }
                  : undefined
              }
              className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-[#D9D8D3] px-5 py-16 text-center shadow-[0_22px_70px_rgba(0,0,0,.12)] transition-[border-color,background-color,box-shadow] duration-500 sm:rounded-[30px] sm:px-12 sm:py-16 sm:backdrop-blur-xl hover:border-slate-300 hover:bg-[#D9D8D3] hover:shadow-[0_32px_95px_rgba(0,0,0,.16)]"
            >
              <div className="pointer-events-none absolute left-1/2 top-[-110px] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#42D5F5]/[0.08] blur-[90px] transition-all duration-700 sm:top-[-130px] sm:h-[400px] sm:w-[400px] sm:blur-[115px] group-hover:scale-125 group-hover:bg-[#42D5F5]/[0.12]" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-100/[0.8] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <span className="text-[7px] font-semibold uppercase tracking-[0.28em] text-[#168BD1] transition-colors duration-400 group-hover:text-[#0B6FA4] sm:text-[9px] sm:tracking-[0.36em]">
                  Beyond one industry
                </span>

                <motion.h2
                  whileHover={
                    hoverEnabled
                      ? {
                          y: -2,
                        }
                      : undefined
                  }
                  transition={{
                    duration: 0.3,
                    ease,
                  }}
                  className="mx-auto mt-4 max-w-4xl cursor-default text-[clamp(2.7rem,10vw,4.5rem)] font-medium leading-[0.92] tracking-[-0.065em] sm:mt-4 sm:text-[clamp(2.2rem,8vw,4.5rem)] lg:text-[clamp(2.25rem,4vw,4rem)]"
                >
                  <span className="text-[#06131F]">
                    One platform.
                  </span>{" "}
                  <span className="bg-gradient-to-r from-[#168BD1] to-[#2878D7] bg-clip-text text-transparent">
                    Multiple possibilities.
                  </span>
                </motion.h2>

                <p className="mx-auto mt-5 max-w-2xl text-[10.5px] leading-5.5 text-slate-700 transition-colors duration-500 group-hover:text-slate-700 sm:mt-5 sm:text-[13px] sm:leading-6">
                  BH Ventures continues to explore opportunities
                  where commerce, technology, innovation and
                  strategic thinking can create meaningful long-term
                  value.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}