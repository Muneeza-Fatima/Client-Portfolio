"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  Rocket,
  Globe2,
  Building2,
} from "lucide-react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

import HeroImage from "@/components/hero/HeroImage";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const [finePointer, setFinePointer] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const updateQueries = () => {
      setFinePointer(pointerQuery.matches);
      setIsDesktop(desktopQuery.matches);
    };

    updateQueries();

    pointerQuery.addEventListener("change", updateQueries);
    desktopQuery.addEventListener("change", updateQueries);

    return () => {
      pointerQuery.removeEventListener("change", updateQueries);
      desktopQuery.removeEventListener("change", updateQueries);
    };
  }, []);

  const motionEnabled = !shouldReduceMotion && finePointer;

  const heroRef = useRef<HTMLElement>(null);

  const isInView = useInView(heroRef, {
    once: true,
    margin: "120px 0px 120px 0px",
  });

  /*
   * Heavy background / HeroImage motion is intentionally
   * desktop-only. Mobile receives a static version.
   */
  const animateBg =
    motionEnabled &&
    isDesktop &&
    isInView;

  /*
   * HeroImage can contain its own visual motion.
   * Do not allow that motion to activate on phones.
   */
  const heroImageInView =
    isDesktop &&
    isInView;

  return (
    <section
      id="home"
      ref={heroRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#0B1F33]
        text-[#F5F5F2]
      "
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_48%_34%,rgba(143,199,216,0.09),transparent_34%),radial-gradient(circle_at_82%_22%,rgba(99,102,241,0.07),transparent_30%),radial-gradient(circle_at_15%_70%,rgba(45,212,191,0.045),transparent_28%)]
          "
        />

        {/* LEFT ATMOSPHERE */}
        <motion.div
          animate={
            animateBg
              ? {
                  x: [0, 30, 0],
                  y: [0, -15, 0],
                  opacity: [0.2, 0.32, 0.2],
                }
              : undefined
          }
          transition={
            animateBg
              ? {
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined
          }
          className="
            absolute
            -left-[220px]
            top-[15%]
            h-[340px]
            w-[340px]
            rounded-full
            bg-[#244B67]/20
            blur-[90px]
            sm:h-[480px]
            sm:w-[480px]
            sm:bg-[#244B67]/30
            sm:blur-[130px]
            lg:h-[480px]
            lg:w-[480px]
            lg:blur-[130px]
            will-change-transform
          "
        />

        {/* RIGHT ATMOSPHERE */}
        <motion.div
          animate={
            animateBg
              ? {
                  x: [0, -25, 0],
                  y: [0, 20, 0],
                  opacity: [0.15, 0.25, 0.15],
                }
              : undefined
          }
          transition={
            animateBg
              ? {
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined
          }
          className="
            absolute
            -right-[220px]
            top-[8%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#6366F1]/[0.045]
            blur-[90px]
            sm:h-[520px]
            sm:w-[520px]
            sm:bg-[#6366F1]/[0.065]
            sm:blur-[140px]
            lg:h-[520px]
            lg:w-[520px]
            lg:blur-[140px]
            will-change-transform
          "
        />

        {/* CENTER ATMOSPHERE */}
        <motion.div
          animate={
            animateBg
              ? {
                  scale: [1, 1.07, 1],
                  opacity: [0.06, 0.13, 0.06],
                }
              : undefined
          }
          transition={
            animateBg
              ? {
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined
          }
          className="
            absolute
            left-1/2
            top-[40%]
            h-[300px]
            w-[300px]
            -translate-x-1/2
            rounded-full
            bg-[#A78BFA]/[0.02]
            blur-[90px]
            sm:h-[420px]
            sm:w-[420px]
            sm:bg-[#A78BFA]/[0.03]
            sm:blur-[130px]
            lg:h-[420px]
            lg:w-[420px]
            lg:blur-[130px]
            will-change-transform
          "
        />

        {/* GRID */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(255,255,255,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.65)_1px,transparent_1px)]
            bg-[size:76px_76px]
            opacity-[0.014]
            sm:opacity-[0.022]
            [mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_100%)]
          "
        />

        {/* VIGNETTE */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(11,31,51,0.05)_48%,rgba(4,15,27,0.78)_100%)]
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1440px]
          items-center
          px-5
          pb-16
          pt-[135px]
          sm:px-8
          sm:pt-[146px]
          lg:px-10
          xl:px-12
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-12
            lg:grid-cols-[1.03fr_0.97fr]
            lg:gap-8
            xl:gap-12
          "
        >
          {/* LEFT CONTENT */}
          <div className="relative z-20 max-w-[760px]">
            {/* LABEL */}
            <motion.div
              initial={
                motionEnabled
                  ? {
                      opacity: 0,
                      y: 10,
                    }
                  : false
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                ease: smoothEase,
              }}
              className="mb-6 flex items-center gap-3"
            >
              <span
                className="
                  relative
                  h-px
                  w-10
                  overflow-hidden
                  bg-[#CBD5E1]/30
                  sm:w-12
                "
              >
                {animateBg && (
                  <motion.span
                    animate={{
                      x: ["-120%", "120%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      inset-y-0
                      left-0
                      w-full
                      bg-gradient-to-r
                      from-transparent
                      via-[#8FA8C7]
                      to-transparent
                    "
                  />
                )}
              </span>

              <span
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#A9D8E8]
                  sm:text-[10px]
                "
              >
                Founder & CEO of BH Ventures
              </span>

              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-[#7C9CC2]
                  shadow-[0_0_10px_rgba(124,156,194,0.35)]
                "
              />
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={
                motionEnabled
                  ? {
                      opacity: 0,
                      y: 22,
                    }
                  : false
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.06,
                ease: smoothEase,
              }}
              className="
                max-w-[820px]
                overflow-visible
                pb-3
                font-serif
                text-[clamp(3.15rem,6.35vw,6.25rem)]
                font-medium
                leading-[1.02]
                tracking-[-0.055em]
              "
            >
              <span
                className="
                  block
                  pb-[0.08em]
                  text-[#F8FAFC]
                "
              >
                Building
              </span>

              <span
                className="
                  block
                  pb-[0.08em]
                  text-[#F8FAFC]
                "
              >
                Businesses.
              </span>

              <span
                className="
                  block
                  pb-[0.08em]
                  text-[#F8FAFC]
                "
              >
                Shaping the{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-[#8DEBFF]
                    via-[#42D5F5]
                    to-[#168BD1]
                    bg-clip-text
                    text-transparent
                    drop-shadow-[0_0_24px_rgba(66,213,245,0.16)]
                  "
                >
                  Future.
                </span>
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={
                motionEnabled
                  ? {
                      opacity: 0,
                      y: 12,
                    }
                  : false
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.14,
                ease: smoothEase,
              }}
              className="
                mt-7
                max-w-[610px]
                text-[13px]
                leading-7
                text-[#CBD5E1]/60
                sm:text-[15px]
                sm:leading-7
                lg:text-[16px]
              "
            >
              BADAR UL HAQ is a founder and business leader focused on
              building ventures at the intersection of technology,
              innovation, international business, and long-term growth.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={
                motionEnabled
                  ? {
                      opacity: 0,
                      y: 12,
                    }
                  : false
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.22,
                ease: smoothEase,
              }}
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <Link
                href="/about"
                className="
                  group
                  relative
                  inline-flex
                  h-[54px]
                  min-w-[200px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-[#8FA8C7]/70
                  bg-[#0B1F33]
                  px-7
                  text-[13px]
                  font-semibold
                  !text-[#F5F5F2]
                  shadow-[0_0_0_1px_rgba(143,168,199,0.08),0_12px_35px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.10)]
                  transition-[border-color,background-color,box-shadow,transform]
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:border-[#9CB7D8]/70
                  hover:bg-[#102D48]
                  hover:shadow-[0_16px_42px_rgba(67,101,148,0.18)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#8FA8C7]/25
                  sm:border-[#8FA8C7]/45
                  sm:shadow-[0_12px_35px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-5
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#D5DFEA]/55
                    to-transparent
                  "
                />

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-[80%]
                    top-[-30%]
                    h-[160%]
                    w-[30%]
                    rotate-[18deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.10]
                    to-transparent
                    transition-[left]
                    duration-700
                    group-hover:left-[130%]
                  "
                />

                <span className="relative z-10 !text-[#F5F5F2]">
                  Explore What&apos;s Ahead
                </span>
              </Link>

              <Link
                href="/contact"
                className="
                  group
                  relative
                  inline-flex
                  h-[54px]
                  min-w-[190px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-[#8FA8C7]/65
                  bg-[#0B1F33]
                  px-7
                  text-[13px]
                  font-semibold
                  !text-[#F5F5F2]
                  shadow-[0_0_0_1px_rgba(143,168,199,0.07),0_12px_35px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.09)]
                  transition-[border-color,background-color,box-shadow,transform]
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:border-[#8FA8C7]/60
                  hover:bg-[#102D48]
                  hover:shadow-[0_16px_42px_rgba(67,101,148,0.15)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#8FA8C7]/20
                  sm:border-[#8FA8C7]/30
                  sm:shadow-[0_12px_35px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.07)]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-5
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#D5DFEA]/45
                    to-transparent
                  "
                />

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-[80%]
                    top-[-30%]
                    h-[160%]
                    w-[30%]
                    rotate-[18deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.08]
                    to-transparent
                    transition-[left]
                    duration-700
                    group-hover:left-[130%]
                  "
                />

                <span className="relative z-10 !text-[#F5F5F2]">
                  Start a Conversation
                </span>
              </Link>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={
                motionEnabled
                  ? {
                      opacity: 0,
                      y: 10,
                    }
                  : false
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.3,
                ease: smoothEase,
              }}
              className="
                mt-9
                grid
                w-full
                max-w-[640px]
                grid-cols-3
                gap-2
                sm:gap-2.5
              "
            >
              <PremiumStat
                icon={Rocket}
                value="10+"
                label="Ventures & Projects"
                accent="cyan"
                motionEnabled={motionEnabled}
                isInView={animateBg}
              />

              <PremiumStat
                icon={Globe2}
                value="30+"
                label="Global Markets"
                accent="blue"
                motionEnabled={motionEnabled}
                isInView={animateBg}
              />

              <PremiumStat
                icon={Building2}
                value="UAE"
                label="Business Base"
                accent="silver"
                motionEnabled={motionEnabled}
                isInView={animateBg}
              />
            </motion.div>
          </div>

          {/* HERO IMAGE */}
          <motion.div
            initial={
              motionEnabled
                ? {
                    opacity: 0,
                    x: 20,
                  }
                : false
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: smoothEase,
            }}
            className="
              relative
              z-10
              flex
              w-full
              items-center
              justify-center
              pt-2
              lg:min-h-[560px]
              lg:justify-end
              lg:-translate-y-3
              lg:pt-0
            "
          >
            {/* IMAGE ATMOSPHERE */}
            <div
              className="
                pointer-events-none
                absolute
                right-[5%]
                top-1/2
                h-[260px]
                w-[260px]
                -translate-y-1/2
                rounded-full
                bg-[#31558A]/[0.07]
                blur-[80px]
                sm:h-[430px]
                sm:w-[430px]
                sm:bg-[#31558A]/[0.10]
                sm:blur-[110px]
              "
            />

            <div className="relative z-20 w-full">
              <HeroImage isInView={heroImageInView} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={
          motionEnabled
            ? {
                opacity: 0,
              }
            : false
        }
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.9,
          ease: smoothEase,
        }}
        className="
          absolute
          bottom-5
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-1.5
          text-white/25
          sm:flex
        "
      >
        <span
          className="
            text-[7px]
            font-medium
            uppercase
            tracking-[0.32em]
          "
        >
          Scroll
        </span>

        <ArrowDown
          size={12}
          strokeWidth={1.5}
        />
      </motion.div>
    </section>
  );
}

function PremiumStat({
  icon: Icon,
  value,
  label,
  accent,
  motionEnabled,
  isInView,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  accent: "cyan" | "blue" | "silver";
  motionEnabled: boolean;
  isInView: boolean;
}) {
  const styles = {
    cyan: {
      icon: "text-[#8FA8C7]",
      glow: "bg-[#587DB2]/[0.10]",
      border: "hover:border-[#8FA8C7]/40",
      value: "text-[#DCE6F0]",
    },
    blue: {
      icon: "text-[#7895BC]",
      glow: "bg-[#31558A]/[0.12]",
      border: "hover:border-[#7895BC]/40",
      value: "text-[#DCE5F0]",
    },
    silver: {
      icon: "text-[#CBD5E1]",
      glow: "bg-[#CBD5E1]/[0.08]",
      border: "hover:border-[#CBD5E1]/30",
      value: "text-[#F1F5F9]",
    },
  };

  const style = styles[accent];

  return (
    <motion.div
      whileHover={
        motionEnabled
          ? {
              y: -4,
            }
          : undefined
      }
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[18px]
        border
        border-white/[0.10]
        bg-gradient-to-br
        from-white/[0.075]
        via-white/[0.035]
        to-white/[0.015]
        px-3
        py-3.5
        backdrop-blur-none
        shadow-[0_10px_28px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.07)]
        transition-[border-color,background-color,box-shadow,transform]
        duration-300
        ${style.border}
        hover:bg-white/[0.07]
        hover:shadow-[0_18px_42px_rgba(0,0,0,0.28)]
        sm:px-4
        sm:py-4
        sm:backdrop-blur-md
        lg:backdrop-blur-xl
      `}
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-4
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
      />

      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -right-8
          -top-8
          h-24
          w-24
          rounded-full
          ${style.glow}
          blur-2xl
          transition-transform
          duration-500
          lg:blur-3xl
          lg:group-hover:scale-150
        `}
      />

      <div className="relative z-10 flex items-center gap-3">
        <div
          className="
            relative
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-[11px]
            border
            border-white/[0.10]
            bg-black/20
            shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
            transition-transform
            duration-300
            ease-out
            group-hover:scale-[1.03]
          "
        >
          <div
            className={`
              absolute
              inset-1
              rounded-lg
              ${style.glow}
              blur-md
            `}
          />

          <Icon
            size={15}
            strokeWidth={1.7}
            className={`
              relative
              z-10
              ${style.icon}
              transition-transform
              duration-300
              ease-out
              group-hover:scale-105
            `}
          />
        </div>

        <div className="min-w-0">
          <p
            className={`
              font-serif
              text-[1.45rem]
              font-medium
              leading-none
              tracking-[-0.045em]
              ${style.value}
            `}
          >
            {value}
          </p>

          <p
            className="
              mt-1.5
              truncate
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.13em]
              text-white/45
              transition-opacity
              duration-300
              group-hover:text-white/55
              sm:text-[7.5px]
            "
          >
            {label}
          </p>
        </div>
      </div>

      {/* DESKTOP-ONLY CONTINUOUS SHINE */}
      {motionEnabled && isInView && (
        <motion.div
          aria-hidden="true"
          animate={{
            x: ["-180%", "220%"],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-0
            top-[-100%]
            h-[300%]
            w-[18%]
            rotate-[22deg]
            bg-gradient-to-r
            from-transparent
            via-white/[0.06]
            to-transparent
            will-change-transform
          "
        />
      )}
    </motion.div>
  );
}