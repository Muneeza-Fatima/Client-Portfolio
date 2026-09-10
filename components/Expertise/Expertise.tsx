"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const expertise = [
  {
    title: "Cybersecurity",
    label: "Threat / Risk / Defense",
    description:
      "Focused on threat detection, risk analysis, incident response, and practical security solutions that protect enterprise environments.",
    skills: ["Threat Analysis", "Risk", "Incident Response"],
    icon: "🛡️",
  },
  {
    title: "Security Operations",
    label: "Monitoring / Vulnerability",
    description:
      "Monitoring security events, investigating incidents, assessing vulnerabilities, and strengthening overall security posture.",
    skills: ["SIEM", "IDS", "Vulnerability"],
    icon: "⛓️",
  },
  {
    title: "Technology",
    label: "Network / Systems / DNS",
    description:
      "Applying knowledge of network and system security, DNS, intrusion detection, and enterprise technologies to solve security challenges.",
    skills: ["Network", "Systems", "DNS"],
    icon: "🧬",
  },
  {
    title: "Business Strategy",
    label: "Markets / Growth / Opportunity",
    description:
      "Combining market research, business development, real-estate insight, and investment guidance to identify meaningful opportunities.",
    skills: ["Markets", "Development", "Growth"],
    icon: "🧭",
  },
  {
    title: "Leadership",
    label: "People / Clients / Communication",
    description:
      "Leading teams, building stakeholder relationships, and communicating across cultures with a client-first and results-driven approach.",
    skills: ["Leadership", "Clients", "Collaboration"],
    icon: "🌐",
  },
];

const languages = [
  {
    name: "English",
    level: "Professional",
    code: "EN",
  },
  {
    name: "Urdu",
    level: "Native / Bilingual",
    code: "UR",
  },
  {
    name: "Arabic",
    level: "Conversational",
    code: "AR",
  },
  {
    name: "French",
    level: "Beginner",
    code: "FR",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Expertise() {
  const [active, setActive] = useState(0);
  const [profileHovered, setProfileHovered] = useState(false);
  const [finePointer, setFinePointer] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const mouseFrame = useRef<number | null>(null);
  const pendingMouse = useRef<{ x: number; y: number } | null>(null);

  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 45,
    damping: 40,
    mass: 0.8,
  });

  const springY = useSpring(mouseY, {
    stiffness: 45,
    damping: 40,
    mass: 0.8,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    const updatePointer = () => {
      setFinePointer(mediaQuery.matches);
    };

    updatePointer();

    mediaQuery.addEventListener("change", updatePointer);

    return () => {
      mediaQuery.removeEventListener("change", updatePointer);

      if (mouseFrame.current !== null) {
        cancelAnimationFrame(mouseFrame.current);
      }
    };
  }, []);

  const motionEnabled = !reduceMotion && finePointer;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!motionEnabled) return;

    pendingMouse.current = {
      x: e.clientX,
      y: e.clientY,
    };

    if (mouseFrame.current !== null) return;

    mouseFrame.current = requestAnimationFrame(() => {
      const rect = sectionRef.current?.getBoundingClientRect();

      if (rect && pendingMouse.current) {
        mouseX.set(pendingMouse.current.x - rect.left);
        mouseY.set(pendingMouse.current.y - rect.top);
      }

      mouseFrame.current = null;
    });
  };

  return (
    <section
      ref={sectionRef}
      id="expertise"
      onMouseMove={handleMouseMove}
      className="
        relative
        isolate
        overflow-hidden
        bg-[#09121B]
        pt-[120px]
        pb-16
        text-white
        sm:pt-24
        sm:pb-20
        md:pt-28
        md:pb-24
        lg:pt-36
        lg:pb-32
      "
    >
      {/* PREMIUM BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(135deg,#081019_0%,#0D1924_44%,#111E29_72%,#070D13_100%)]
          "
        />

        <div
          className="
            absolute
            left-[4%]
            top-[8%]
            h-[220px]
            w-[220px]
            rounded-full
            bg-[#31577A]/[0.024]
            blur-[60px]
            sm:h-[360px]
            sm:w-[360px]
            sm:blur-[95px]
            lg:h-[460px]
            lg:w-[460px]
            lg:blur-[125px]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[300px]
            bg-[radial-gradient(ellipse_at_50%_0%,rgba(92,137,190,0.045),transparent_68%)]
            sm:h-[420px]
            lg:h-[480px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[38%]
            h-[280px]
            w-[280px]
            -translate-x-1/2
            rounded-full
            bg-[#35638A]/[0.014]
            blur-[70px]
            sm:h-[460px]
            sm:w-[460px]
            sm:blur-[105px]
            lg:h-[580px]
            lg:w-[580px]
            lg:blur-[135px]
          "
        />

        <div
          className="
            absolute
            right-[-12%]
            top-[12%]
            h-[240px]
            w-[240px]
            rounded-full
            bg-[#315E83]/[0.018]
            blur-[65px]
            sm:h-[400px]
            sm:w-[400px]
            sm:blur-[100px]
            lg:h-[480px]
            lg:w-[480px]
            lg:blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[-18%]
            left-[-8%]
            h-[240px]
            w-[240px]
            rounded-full
            bg-[#315B76]/[0.018]
            blur-[65px]
            sm:h-[400px]
            sm:w-[400px]
            sm:blur-[100px]
            lg:h-[500px]
            lg:w-[500px]
            lg:blur-[125px]
          "
        />

        {motionEnabled && (
          <motion.div
            style={{
              left: springX,
              top: springY,
            }}
            className="
              absolute
              h-[260px]
              w-[260px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[radial-gradient(circle,rgba(79,140,255,0.026),transparent_68%)]
              blur-[45px]
            "
          />
        )}

        <div
          className="
            absolute
            inset-0
            opacity-[0.004]
            sm:opacity-[0.006]
            [background-image:linear-gradient(rgba(190,205,215,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(190,205,215,.6)_1px,transparent_1px)]
            [background-size:140px_140px]
            [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]
          "
        />

        <div
          className="
            absolute
            left-[3%]
            right-[3%]
            top-[6%]
            bottom-[6%]
            border
            border-white/[0.018]
          "
        />

        <div
          className="
            absolute
            left-[3%]
            top-[6%]
            h-px
            w-[140px]
            bg-gradient-to-r
            from-[#4F8CFF]/[0.30]
            to-transparent
          "
        />

        <div
          className="
            absolute
            bottom-[6%]
            right-[3%]
            h-px
            w-[140px]
            bg-gradient-to-l
            from-[#829CB5]/[0.16]
            to-transparent
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[140px]
            bg-gradient-to-t
            from-[#03070C]
            via-[#03070C]/25
            to-transparent
            sm:h-[180px]
            lg:h-[200px]
          "
        />
      </div>

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
        "
      >
        {/* HEADER */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 16,
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
            duration: 0.5,
            ease,
          }}
          className="relative mb-12 sm:mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <span
              className="
                h-px
                w-9
                bg-gradient-to-r
                from-[#4F8CFF]/70
                to-transparent
                sm:w-14
              "
            />

            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.27em]
                text-white/55
                sm:text-[9px]
                sm:tracking-[0.34em]
              "
            >
              Executive Expertise
            </span>
          </div>

          <div
            className="
              mt-6
              grid
              gap-8
              sm:mt-7
              lg:mt-8
              lg:grid-cols-[minmax(0,1fr)_300px]
              lg:items-end
              lg:gap-12
            "
          >
            <h2
              className="
                max-w-[900px]
                font-serif
                text-[clamp(2.6rem,5.2vw,5.2rem)]
                font-normal
                leading-[0.94]
                tracking-[-0.06em]
              "
            >
              <span className="text-[#F8FAFC]">Many disciplines.</span>

              <br />

              <span className="text-[#F8FAFC]">One </span>

              <span
                className="
                  bg-gradient-to-r
                  from-[#8DEBFF]
                  via-[#42D5F5]
                  to-[#168BD1]
                  bg-clip-text
                  text-transparent
                "
              >
                direction.
              </span>
            </h2>

            <div
              className="
                border-l
                border-[#4F8CFF]/[0.34]
                pl-5
                lg:mb-1
              "
            >
              <span
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.30em]
                  text-[#7FA9FF]
                "
              >
                Executive capability
              </span>

              <p
                className="
                  mt-3
                  max-w-[285px]
                  text-[11px]
                  leading-6
                  text-white/50
                  sm:text-[12px]
                  sm:leading-7
                "
              >
                Cybersecurity, technology, strategy and leadership working
                from one executive perspective.
              </p>
            </div>
          </div>
        </motion.div>

        {/* EXECUTIVE MATRIX */}

        <div className="relative lg:min-h-[850px]">
          {/* DESKTOP CENTER PROFILE */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.97,
                  }
            }
            whileInView={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    scale: 1,
                  }
            }
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.55,
              ease,
            }}
            onMouseEnter={
              motionEnabled ? () => setProfileHovered(true) : undefined
            }
            onMouseLeave={
              motionEnabled ? () => setProfileHovered(false) : undefined
            }
            className="
              absolute
              left-1/2
              top-1/2
              z-30
              hidden
              h-[300px]
              w-[300px]
              -translate-x-1/2
              -translate-y-1/2
              lg:flex
              lg:items-center
              lg:justify-center
              xl:h-[320px]
              xl:w-[320px]
            "
          >
            {motionEnabled && (
              <motion.div
                aria-hidden="true"
                animate={{
                  opacity: profileHovered ? 1 : 0.5,
                  scale: profileHovered ? 1.08 : 1,
                }}
                transition={{
                  duration: 0.4,
                  ease,
                }}
                className="
                  absolute
                  inset-[-42px]
                  rounded-full
                  bg-[#4F8CFF]/[0.035]
                  blur-[60px]
                "
              />
            )}

            <motion.div
              animate={
                motionEnabled
                  ? {
                      scale: profileHovered ? 1.025 : 1,
                      y: profileHovered ? -3 : 0,
                    }
                  : undefined
              }
              transition={{
                duration: 0.35,
                ease,
              }}
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-full
                border
                border-[#8CA8C2]/[0.20]
                bg-[radial-gradient(circle_at_50%_25%,#203543_0%,#142531_52%,#09131D_100%)]
                shadow-[0_35px_90px_rgba(0,0,0,0.48),0_0_45px_rgba(79,140,255,0.04)]
                transition-[border-color,box-shadow]
                duration-500
                lg:hover:border-[#6F9FFF]/[0.48]
              "
            >
              {motionEnabled && (
                <>
                  <motion.div
                    aria-hidden="true"
                    animate={{
                      opacity: profileHovered ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-[radial-gradient(circle_at_70%_20%,rgba(79,140,255,0.13),transparent_42%)]
                    "
                  />

                  <motion.div
                    aria-hidden="true"
                    initial={{
                      x: "-120%",
                      opacity: 0,
                    }}
                    animate={
                      profileHovered
                        ? {
                            x: "120%",
                            opacity: 1,
                          }
                        : {
                            x: "-120%",
                            opacity: 0,
                          }
                    }
                    transition={{
                      duration: 0.7,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      inset-y-0
                      w-[45%]
                      rotate-[18deg]
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.075]
                      to-transparent
                    "
                  />
                </>
              )}

              <div
                className="
                  absolute
                  inset-[12px]
                  rounded-full
                  border
                  border-white/[0.05]
                "
              />

              <div
                className="
                  absolute
                  inset-[24px]
                  rounded-full
                  border
                  border-[#7D9CAF]/[0.045]
                "
              />

              {motionEnabled ? (
                <motion.div
                  animate={{
                    scale: profileHovered ? 1.25 : 1,
                    opacity: profileHovered ? 0.9 : 0.55,
                  }}
                  transition={{
                    duration: 0.25,
                    ease,
                  }}
                  className="
                    absolute
                    right-[26%]
                    top-[10%]
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#6E9EFF]
                    shadow-[0_0_14px_rgba(79,140,255,0.42)]
                  "
                />
              ) : (
                <div
                  className="
                    absolute
                    right-[26%]
                    top-[10%]
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#6E9EFF]/80
                  "
                />
              )}

              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-px
                  w-20
                  -translate-x-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-[#8FB5FF]/[0.60]
                  to-transparent
                "
              />

              <div className="relative z-10 flex h-full items-center justify-center text-center">
                <div>
                  <span
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.38em]
                      text-[#8CB0FF]
                    "
                  >
                    Executive Profile
                  </span>

                  <p
                    className="
                      mt-5
                      bg-gradient-to-r
                      from-[#8DEBFF]
                      via-[#42D5F5]
                      to-[#168BD1]
                      bg-clip-text
                      font-serif
                      text-[36px]
                      leading-[0.86]
                      tracking-[-0.06em]
                      text-transparent
                      xl:text-[38px]
                    "
                  >
                    BADAR
                    <br />
                    <span className="mt-1 inline-block">UL HAQ</span>
                  </p>

                  <div
                    className="
                      mx-auto
                      mt-7
                      h-px
                      w-14
                      bg-gradient-to-r
                      from-transparent
                      via-[#5E91FF]/80
                      to-transparent
                    "
                  />

                  <p
                    className="
                      mt-5
                      text-[7px]
                      uppercase
                      tracking-[0.25em]
                      text-white/40
                    "
                  >
                    Cybersecurity · Strategy · Leadership
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* DESKTOP AXIS */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[10%]
              right-[10%]
              top-1/2
              hidden
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/[0.055]
              to-transparent
              lg:block
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-[9%]
              left-1/2
              top-[7%]
              hidden
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-white/[0.045]
              to-transparent
              lg:block
            "
          />

          {/* DESKTOP EXPERTISE CARDS */}

          <div className="hidden lg:block">
            {expertise.map((item, index) => {
              const isActive = active === index;

              const positions = [
                "lg:left-[1%] lg:top-[1%]",
                "lg:right-[1%] lg:top-[1%]",
                "lg:left-[1%] lg:bottom-[1%]",
                "lg:right-[1%] lg:bottom-[1%]",
                "lg:left-1/2 lg:bottom-[-5%] lg:-translate-x-1/2",
              ];

              return (
                <motion.article
                  key={item.title}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 20,
                          scale: 0.99,
                        }
                  }
                  whileInView={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.08,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : index * 0.05,
                    ease,
                  }}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  tabIndex={0}
                  className={`
                    group
                    relative
                    min-h-[235px]
                    overflow-hidden
                    rounded-[13px]
                    border
                    border-white/[0.15]
                    bg-[linear-gradient(145deg,#1A2D3A_0%,#172733_52%,#12212C_100%)]
                    p-5
                    outline-none
                    shadow-[0_18px_55px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.045)]
                    transition-[transform,border-color,box-shadow,background]
                    duration-400
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:-translate-y-[5px]
                    hover:scale-[1.012]
                    hover:border-[#709AFF]/[0.44]
                    hover:bg-[linear-gradient(145deg,#213A4A_0%,#1C3040_52%,#152733_100%)]
                    hover:shadow-[0_28px_70px_rgba(0,0,0,0.40),0_0_38px_rgba(79,140,255,0.06),inset_0_1px_0_rgba(255,255,255,0.07)]
                    focus-visible:-translate-y-[5px]
                    focus-visible:scale-[1.012]
                    focus-visible:border-[#709AFF]/[0.46]
                    sm:min-h-[245px]
                    sm:p-6
                    lg:absolute
                    lg:w-[365px]
                    lg:p-7
                    ${positions[index]}
                  `}
                >
                  <motion.div
                    aria-hidden="true"
                    animate={{
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: "easeOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[radial-gradient(circle_at_92%_0%,rgba(79,140,255,0.11),transparent_34%),radial-gradient(circle_at_0%_100%,rgba(125,155,180,0.04),transparent_42%)]
                    "
                  />

                  {motionEnabled && (
                    <motion.div
                      aria-hidden="true"
                      initial={{
                        x: "-130%",
                        opacity: 0,
                      }}
                      animate={
                        isActive
                          ? {
                              x: "130%",
                              opacity: 1,
                            }
                          : {
                              x: "-130%",
                              opacity: 0,
                            }
                      }
                      transition={{
                        duration: 0.7,
                        ease: "easeInOut",
                      }}
                      className="
                        pointer-events-none
                        absolute
                        inset-y-0
                        left-[-10%]
                        w-[42%]
                        rotate-[18deg]
                        bg-gradient-to-r
                        from-transparent
                        via-white/[0.055]
                        to-transparent
                      "
                    />
                  )}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-[1px]
                      rounded-[12px]
                      border
                      border-white/[0.035]
                      transition-[border-color]
                      duration-400
                      lg:group-hover:border-[#AFC6FF]/[0.10]
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-8
                      right-8
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-white/[0.18]
                      to-transparent
                      transition-[opacity]
                      duration-400
                      lg:group-hover:via-[#AFC6FF]/[0.50]
                    "
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <motion.div
                        animate={
                          motionEnabled
                            ? {
                                scale: isActive ? 1.045 : 1,
                                y: isActive ? -1 : 0,
                              }
                            : undefined
                        }
                        transition={{
                          duration: 0.25,
                          ease,
                        }}
                        className="
                          relative
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-[8px]
                          border
                          border-[#9CB4C7]/[0.25]
                          bg-[linear-gradient(145deg,#294352,#203642)]
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_25px_rgba(0,0,0,0.18)]
                          transition-[border-color,box-shadow,background,transform]
                          duration-400
                          group-hover:border-[#7EA2FF]/[0.50]
                          group-hover:bg-[linear-gradient(145deg,#294968,#223D51)]
                          group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_0_25px_rgba(79,140,255,0.10)]
                        "
                      >
                        <span
                          aria-hidden="true"
                          className="
                            absolute
                            inset-x-2
                            top-0
                            h-px
                            bg-gradient-to-r
                            from-transparent
                            via-white/[0.30]
                            to-transparent
                          "
                        />

                        <span
                          aria-hidden="true"
                          className="
                            select-none
                            text-[25px]
                            leading-none
                            drop-shadow-[0_3px_12px_rgba(255,255,255,0.10)]
                            transition-transform
                            duration-300
                            ease-out
                            group-hover:scale-110
                          "
                        >
                          {item.icon}
                        </span>
                      </motion.div>
                    </div>

                    <div className="mt-auto pt-8">
                      <p
                        className="
                          text-[7px]
                          font-semibold
                          uppercase
                          tracking-[0.30em]
                          text-[#91B1CC]
                        "
                      >
                        {item.label}
                      </p>

                      <motion.h3
                        animate={
                          motionEnabled
                            ? {
                                x: isActive ? 2 : 0,
                              }
                            : undefined
                        }
                        transition={{
                          duration: 0.2,
                          ease,
                        }}
                        className="
                          mt-2
                          font-serif
                          text-[24px]
                          font-normal
                          leading-[1.04]
                          tracking-[-0.045em]
                          text-white
                          sm:text-[26px]
                        "
                      >
                        {item.title}
                      </motion.h3>

                      <p
                        className="
                          mt-4
                          max-w-[310px]
                          text-[10px]
                          leading-5
                          text-white/[0.53]
                          transition-colors
                          duration-400
                          group-hover:text-white/[0.70]
                        "
                      >
                        {item.description}
                      </p>

                      <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                        {item.skills.map((skill, skillIndex) => (
                          <div
                            key={skill}
                            className="flex items-center gap-2"
                          >
                            {skillIndex > 0 && (
                              <span
                                aria-hidden="true"
                                className="text-[7px] text-[#B5C4CF]/[0.20]"
                              >
                                /
                              </span>
                            )}

                            <span
                              className="
                                text-[6px]
                                font-medium
                                uppercase
                                tracking-[0.14em]
                                text-[#D1DCE3]/[0.46]
                                transition-colors
                                duration-300
                                group-hover:text-[#C9D9FF]/[0.84]
                              "
                            >
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* MOBILE PROFILE + CARDS */}

          <div className="relative mt-6 lg:hidden">
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.94,
                      y: -8,
                    }
              }
              whileInView={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.5,
                ease,
              }}
              className="
                relative
                z-20
                mx-auto
                flex
                h-[250px]
                w-[250px]
                items-center
                justify-center
                sm:h-[280px]
                sm:w-[280px]
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-[-25px]
                  rounded-full
                  bg-[#4F8CFF]/[0.024]
                  blur-[42px]
                  sm:inset-[-36px]
                  sm:blur-[58px]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-[#8CA8C2]/[0.22]
                  bg-[radial-gradient(circle_at_50%_25%,#203543_0%,#142531_52%,#09131D_100%)]
                  shadow-[0_28px_70px_rgba(0,0,0,0.42),0_0_38px_rgba(79,140,255,0.035)]
                "
              />

              <div
                className="
                  absolute
                  inset-[13px]
                  rounded-full
                  border
                  border-white/[0.055]
                "
              />

              <div
                className="
                  absolute
                  inset-[27px]
                  rounded-full
                  border
                  border-[#7D9CAF]/[0.05]
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-px
                  w-20
                  -translate-x-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-[#8FB5FF]/[0.65]
                  to-transparent
                  sm:w-24
                "
              />

              <div
                className="
                  absolute
                  right-[23%]
                  top-[10%]
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#6E9EFF]
                  shadow-[0_0_12px_rgba(79,140,255,0.42)]
                "
              />

              <div className="relative z-10 text-center">
                <span
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.34em]
                    text-[#8CB0FF]
                    sm:text-[8px]
                  "
                >
                  Executive Profile
                </span>

                <p
                  className="
                    mt-5
                    bg-gradient-to-r
                    from-[#8DEBFF]
                    via-[#42D5F5]
                    to-[#168BD1]
                    bg-clip-text
                    font-serif
                    text-[34px]
                    leading-[0.88]
                    tracking-[-0.055em]
                    text-transparent
                    sm:mt-6
                    sm:text-[40px]
                  "
                >
                  BADAR
                  <br />
                  <span className="mt-1 inline-block">UL HAQ</span>
                </p>

                <div
                  className="
                    mx-auto
                    mt-6
                    h-px
                    w-14
                    bg-gradient-to-r
                    from-transparent
                    via-[#5E91FF]/80
                    to-transparent
                    sm:mt-7
                    sm:w-16
                  "
                />

                <p
                  className="
                    mt-5
                    px-5
                    text-[6px]
                    uppercase
                    tracking-[0.19em]
                    text-white/40
                    sm:mt-6
                    sm:text-[7px]
                  "
                >
                  Cybersecurity · Strategy · Leadership
                </p>
              </div>
            </motion.div>

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[250px]
                bottom-[55px]
                z-0
                w-px
                -translate-x-1/2
                bg-gradient-to-b
                from-[#759DFF]/[0.55]
                via-[#759DFF]/[0.20]
                to-transparent
                sm:top-[280px]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                left-1/2
                top-[247px]
                z-10
                h-1.5
                w-1.5
                -translate-x-1/2
                rounded-full
                bg-[#7FA5FF]
                shadow-[0_0_10px_rgba(79,140,255,0.40)]
                sm:top-[277px]
              "
            />

            <div
              className="
                relative
                z-10
                mt-16
                flex
                flex-col
                items-center
                gap-5
                sm:mt-20
                sm:gap-6
              "
            >
              {expertise.map((item, index) => {
                const isActive = active === index;

                return (
                  <motion.article
                    key={item.title}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 18,
                            scale: 0.99,
                          }
                    }
                    whileInView={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }
                    }
                    viewport={{
                      once: true,
                      amount: 0.08,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: reduceMotion ? 0 : index * 0.05,
                      ease,
                    }}
                    onTouchStart={() => setActive(index)}
                    onClick={() => setActive(index)}
                    className="
                      group
                      relative
                      min-h-[280px]
                      w-full
                      max-w-[620px]
                      overflow-hidden
                      rounded-[15px]
                      border
                      border-white/[0.15]
                      bg-[linear-gradient(145deg,#1A2D3A_0%,#172733_52%,#12212C_100%)]
                      p-7
                      shadow-[0_20px_60px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.045)]
                      transition-[transform,border-color,box-shadow,background]
                      duration-300
                      active:scale-[0.985]
                      sm:min-h-[300px]
                      sm:p-8
                    "
                  >
                    <motion.div
                      aria-hidden="true"
                      animate={{
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_92%_0%,rgba(79,140,255,0.12),transparent_34%),radial-gradient(circle_at_0%_100%,rgba(125,155,180,0.04),transparent_42%)]
                      "
                    />

                    {motionEnabled && (
                      <motion.div
                        aria-hidden="true"
                        initial={{
                          x: "-130%",
                          opacity: 0,
                        }}
                        animate={
                          isActive
                            ? {
                                x: "130%",
                                opacity: 1,
                              }
                            : {
                                x: "-130%",
                                opacity: 0,
                              }
                        }
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                        }}
                        className="
                          pointer-events-none
                          absolute
                          inset-y-0
                          left-[-10%]
                          w-[42%]
                          rotate-[18deg]
                          bg-gradient-to-r
                          from-transparent
                          via-white/[0.055]
                          to-transparent
                        "
                      />
                    )}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-[1px]
                        rounded-[14px]
                        border
                        border-white/[0.035]
                      "
                    />

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        left-8
                        right-8
                        top-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-white/[0.18]
                        to-transparent
                      "
                    />

                    <div className="relative z-10">
                      <div className="flex items-start gap-5">
                        <motion.div
                          animate={
                            motionEnabled
                              ? {
                                  scale: isActive ? 1.03 : 1,
                                  y: isActive ? -1 : 0,
                                }
                              : undefined
                          }
                          transition={{
                            duration: 0.22,
                            ease,
                          }}
                          className="
                            relative
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-[8px]
                            border
                            border-[#9CB4C7]/[0.25]
                            bg-[linear-gradient(145deg,#294352,#203642)]
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_25px_rgba(0,0,0,0.18)]
                          "
                        >
                          <span
                            aria-hidden="true"
                            className="
                              absolute
                              inset-x-2
                              top-0
                              h-px
                              bg-gradient-to-r
                              from-transparent
                              via-white/[0.30]
                              to-transparent
                            "
                          />

                          {/* SAME 25PX ICON SIZE ON MOBILE */}
                          <span
                            aria-hidden="true"
                            className="
                              select-none
                              text-[25px]
                              leading-none
                              drop-shadow-[0_3px_12px_rgba(255,255,255,0.10)]
                              transition-transform
                              duration-300
                              ease-out
                              group-hover:scale-110
                            "
                          >
                            {item.icon}
                          </span>
                        </motion.div>

                        <div className="min-w-0 flex-1">
                          <p
                            className="
                              text-[8px]
                              font-semibold
                              uppercase
                              tracking-[0.30em]
                              text-[#91B1CC]
                              sm:text-[9px]
                            "
                          >
                            {item.label}
                          </p>

                          <motion.h3
                            animate={
                              motionEnabled
                                ? {
                                    x: isActive ? 2 : 0,
                                  }
                                : undefined
                            }
                            transition={{
                              duration: 0.18,
                              ease,
                            }}
                            className="
                              mt-2
                              font-serif
                              text-[27px]
                              font-normal
                              leading-[1.04]
                              tracking-[-0.045em]
                              text-white
                              sm:text-[30px]
                            "
                          >
                            {item.title}
                          </motion.h3>
                        </div>
                      </div>

                      <p
                        className="
                          mt-7
                          max-w-[560px]
                          text-[11px]
                          leading-6
                          text-white/[0.53]
                          transition-colors
                          duration-300
                          group-hover:text-white/[0.70]
                          sm:text-[12px]
                          sm:leading-7
                        "
                      >
                        {item.description}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                        {item.skills.map((skill, skillIndex) => (
                          <div
                            key={skill}
                            className="flex items-center gap-2"
                          >
                            {skillIndex > 0 && (
                              <span
                                aria-hidden="true"
                                className="text-[8px] text-[#B5C4CF]/[0.20]"
                              >
                                /
                              </span>
                            )}

                            <span
                              className="
                                text-[7px]
                                font-medium
                                uppercase
                                tracking-[0.14em]
                                text-[#D1DCE3]/[0.46]
                              "
                            >
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        {/* EXECUTIVE APPROACH */}

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
            duration: 0.5,
            ease,
          }}
          className="
            group
            relative
            mt-10
            min-h-[195px]
            overflow-hidden
            rounded-[13px]
            border
            border-[#D9D3C7]
            bg-[#F3F0E8]
            px-5
            py-4
            shadow-[0_25px_70px_rgba(0,0,0,0.20),inset_0_1px_0_rgba(255,255,255,0.75)]
            transition-[border-color,box-shadow,transform]
            duration-400
            hover:-translate-y-[3px]
            hover:border-[#C9C1B2]
            hover:shadow-[0_30px_78px_rgba(0,0,0,0.24),0_0_36px_rgba(79,140,255,0.04)]
            sm:min-h-[220px]
            sm:px-8
            sm:py-5
            lg:mt-24
            lg:min-h-[235px]
            lg:px-14
            lg:py-[25px]
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              right-[-8%]
              top-[-35%]
              h-[240px]
              w-[240px]
              rounded-full
              bg-[#D8D0C1]/[0.32]
              blur-[60px]
              sm:h-[340px]
              sm:w-[340px]
              sm:blur-[85px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-full
              w-[55%]
              bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.48),transparent_58%)]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#6F91FF]/[0.42]
              to-transparent
              opacity-80
              transition-opacity
              duration-400
              group-hover:opacity-100
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              h-[2px]
              w-[165px]
              bg-gradient-to-r
              from-[#4F8CFF]/[0.82]
              via-[#759DFF]/[0.38]
              to-transparent
              transition-[width]
              duration-400
              group-hover:w-[230px]
            "
          />

          <div
            className="
              relative
              flex
              min-h-[155px]
              items-center
              lg:min-h-[175px]
            "
          >
            <div
              className="
                grid
                w-full
                gap-6
                lg:grid-cols-[150px_1fr]
                lg:gap-16
                lg:items-center
              "
            >
              <div>
                <span
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.34em]
                    text-[#58708A]
                  "
                >
                  Approach
                </span>

                <div
                  className="
                    mt-5
                    h-px
                    w-14
                    bg-gradient-to-r
                    from-[#4F8CFF]/80
                    via-[#7D9FFF]/40
                    to-transparent
                    transition-[width]
                    duration-400
                    group-hover:w-20
                  "
                />
              </div>

              <p
                className="
                  mt-0
                  max-w-5xl
                  font-serif
                  text-[clamp(1.5rem,2.8vw,2.9rem)]
                  leading-[1.12]
                  tracking-[-0.04em]
                  text-[#26313A]
                  sm:mt-0
                "
              >
                Turning complexity into clarity, capability into opportunity,
                and opportunity into{" "}
                <span className="text-[#168BD1]">
                  measurable impact.
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* GLOBAL COMMUNICATION */}

        <motion.div
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
            duration: 0.5,
            ease,
          }}
          className="
            relative
            mt-10
            border-t
            border-white/[0.075]
            pt-8
            sm:mt-12
            sm:pt-9
            lg:mt-20
            lg:pt-10
          "
        >
          <div
            className="
              absolute
              left-0
              top-[-1px]
              h-[2px]
              w-20
              bg-gradient-to-r
              from-[#4F8CFF]/[0.78]
              via-[#769BFF]/[0.30]
              to-transparent
              sm:w-28
            "
          />

          <div
            className="
              grid
              gap-8
              lg:grid-cols-[0.68fr_2.32fr]
              lg:items-center
              lg:gap-16
            "
          >
            <div className="flex items-center gap-4">
              <div>
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.30em]
                    text-white/[0.82]
                  "
                >
                  Global Communication
                </p>

                <p className="mt-1 text-[10px] text-white/[0.40]">
                  Across diverse environments.
                </p>
              </div>
            </div>

            <div className="relative">
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-white/[0.15]
                  bg-[linear-gradient(135deg,rgba(255,255,255,0.085),rgba(255,255,255,0.035)_42%,rgba(100,135,170,0.045)_100%)]
                  shadow-[0_22px_75px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(255,255,255,0.025)]
                  backdrop-blur-none
                  sm:backdrop-blur-md
                  lg:backdrop-blur-xl
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-[5%]
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.55]
                    to-transparent
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#4F8CFF]/[0.035]
                    blur-[45px]
                    sm:-right-20
                    sm:-top-24
                    sm:h-72
                    sm:w-72
                    sm:blur-[75px]
                  "
                />

                <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4">
                  {languages.map((language, index) => (
                    <motion.div
                      key={language.name}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 7,
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
                      transition={{
                        duration: 0.35,
                        delay: reduceMotion ? 0 : index * 0.035,
                        ease,
                      }}
                      className={`
                        group/language
                        relative
                        min-h-[118px]
                        px-5
                        py-5
                        sm:min-h-[140px]
                        sm:px-6
                        sm:py-6
                        lg:px-7
                        lg:py-7
                        ${
                          index !== 0
                            ? "border-l border-white/[0.08]"
                            : ""
                        }
                        ${
                          index >= 2
                            ? "border-t border-white/[0.08] sm:border-t-0"
                            : ""
                        }
                      `}
                    >
                      {motionEnabled && (
                        <div
                          aria-hidden="true"
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-[radial-gradient(circle_at_50%_0%,rgba(130,160,200,0.10),transparent_64%)]
                            opacity-0
                            transition-opacity
                            duration-300
                            group-hover/language:opacity-100
                          "
                        />
                      )}

                      <div className="relative mt-1">
                        <p
                          className="
                            font-serif
                            text-[20px]
                            leading-none
                            tracking-[-0.04em]
                            text-white/[0.93]
                            sm:text-[22px]
                          "
                        >
                          {language.name}
                        </p>

                        <p
                          className="
                            mt-3
                            text-[7px]
                            font-medium
                            uppercase
                            tracking-[0.16em]
                            text-white/[0.40]
                          "
                        >
                          {language.level}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}