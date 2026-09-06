"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import {
  ShieldCheck,
  Activity,
  Network,
  BriefcaseBusiness,
  UsersRound,
} from "lucide-react";

const expertise = [
  {
    title: "Cybersecurity",
    label: "Threat / Risk / Defense",
    description:
      "Focused on threat detection, risk analysis, incident response, and practical security solutions that protect enterprise environments.",
    skills: ["Threat Analysis", "Risk", "Incident Response"],
    icon: ShieldCheck,
  },
  {
    title: "Security Operations",
    label: "Monitoring / Vulnerability",
    description:
      "Monitoring security events, investigating incidents, assessing vulnerabilities, and strengthening overall security posture.",
    skills: ["SIEM", "IDS", "Vulnerability"],
    icon: Activity,
  },
  {
    title: "Technology",
    label: "Network / Systems / DNS",
    description:
      "Applying knowledge of network and system security, DNS, intrusion detection, and enterprise technologies to solve security challenges.",
    skills: ["Network", "Systems", "DNS"],
    icon: Network,
  },
  {
    title: "Business Strategy",
    label: "Markets / Growth / Opportunity",
    description:
      "Combining market research, business development, real-estate insight, and investment guidance to identify meaningful opportunities.",
    skills: ["Markets", "Development", "Growth"],
    icon: BriefcaseBusiness,
  },
  {
    title: "Leadership",
    label: "People / Clients / Communication",
    description:
      "Leading teams, building stakeholder relationships, and communicating across cultures with a client-first and results-driven approach.",
    skills: ["Leadership", "Clients", "Collaboration"],
    icon: UsersRound,
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
    level: "Professional",
    code: "AR",
  },
  {
    name: "French",
    level: "Language",
    code: "FR",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Expertise() {
  const [active, setActive] = useState(0);
  const [profileHovered, setProfileHovered] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  const reduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 50,
    damping: 38,
    mass: 0.7,
  });

  const springY = useSpring(mouseY, {
    stiffness: 50,
    damping: 38,
    mass: 0.7,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;

    const rect = sectionRef.current?.getBoundingClientRect();

    if (!rect) return;

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
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
            h-[460px]
            w-[460px]
            rounded-full
            bg-[#31577A]/[0.035]
            blur-[125px]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[480px]
            bg-[radial-gradient(ellipse_at_50%_0%,rgba(92,137,190,0.055),transparent_68%)]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[38%]
            h-[580px]
            w-[580px]
            -translate-x-1/2
            rounded-full
            bg-[#35638A]/[0.022]
            blur-[135px]
          "
        />

        <div
          className="
            absolute
            right-[-12%]
            top-[12%]
            h-[480px]
            w-[480px]
            rounded-full
            bg-[#315E83]/[0.025]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[-18%]
            left-[-8%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#315B76]/[0.025]
            blur-[125px]
          "
        />

        {!reduceMotion && (
          <motion.div
            style={{
              left: springX,
              top: springY,
            }}
            className="
              absolute
              h-[320px]
              w-[320px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[radial-gradient(circle,rgba(79,140,255,0.035),transparent_68%)]
              blur-[60px]
            "
          />
        )}

        <div
          className="
            absolute
            inset-0
            opacity-[0.006]
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
            border-white/[0.022]
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
            from-[#4F8CFF]/[0.38]
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
            from-[#829CB5]/[0.20]
            to-transparent
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[200px]
            bg-gradient-to-t
            from-[#03070C]
            via-[#03070C]/35
            to-transparent
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
              ? undefined
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
            duration: 0.6,
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
                text-[clamp(2.8rem,5.8vw,5.8rem)]
                font-normal
                leading-[0.94]
                tracking-[-0.06em]
              "
            >
              <span className="text-[#F8FAFC]">
                Many disciplines.
              </span>

              <br />

              <span className="text-[#F8FAFC]">
                One{" "}
              </span>

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
                Cybersecurity, technology, strategy and
                leadership working from one executive perspective.
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
                ? undefined
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
              duration: 0.65,
              ease,
            }}
            onMouseEnter={() => setProfileHovered(true)}
            onMouseLeave={() => setProfileHovered(false)}
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
            <motion.div
              aria-hidden="true"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: profileHovered ? 1 : 0.5,
                      scale: profileHovered ? 1.08 : 1,
                    }
              }
              transition={{
                duration: 0.5,
                ease,
              }}
              className="
                absolute
                inset-[-42px]
                rounded-full
                bg-[#4F8CFF]/[0.035]
                blur-[75px]
              "
            />

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: profileHovered ? 1.035 : 1,
                      y: profileHovered ? -4 : 0,
                    }
              }
              transition={{
                duration: 0.45,
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
                shadow-[0_35px_100px_rgba(0,0,0,0.52),0_0_55px_rgba(79,140,255,0.045)]
                transition-[border-color,box-shadow]
                duration-500
                hover:border-[#6F9FFF]/[0.48]
              "
            >
              <motion.div
                aria-hidden="true"
                animate={{
                  opacity: profileHovered ? 1 : 0,
                }}
                transition={{
                  duration: 0.35,
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
                  duration: 0.8,
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

              <motion.div
                animate={{
                  scale: profileHovered ? 1.35 : 1,
                  opacity: profileHovered ? 0.95 : 0.55,
                }}
                transition={{
                  duration: 0.3,
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
                  shadow-[0_0_16px_rgba(79,140,255,0.45)]
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
                      font-serif
                      text-[36px]
                      leading-[0.86]
                      tracking-[-0.06em]
                      bg-gradient-to-r
                      from-[#8DEBFF]
                      via-[#42D5F5]
                      to-[#168BD1]
                      bg-clip-text
                      text-transparent
                      xl:text-[38px]
                    "
                  >
                    BADAR
                    <br />
                    <span className="inline-block mt-1">UL HAQ</span>
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
              const Icon = item.icon;
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
                      ? undefined
                      : {
                          opacity: 0,
                          y: 24,
                          scale: 0.985,
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
                    duration: 0.58,
                    delay: reduceMotion ? 0 : index * 0.09,
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
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    hover:-translate-y-[6px]
                    hover:scale-[1.018]
                    hover:border-[#709AFF]/[0.48]
                    hover:bg-[linear-gradient(145deg,#213A4A_0%,#1C3040_52%,#152733_100%)]
                    hover:shadow-[0_30px_75px_rgba(0,0,0,0.43),0_0_42px_rgba(79,140,255,0.075),inset_0_1px_0_rgba(255,255,255,0.075)]
                    focus-visible:-translate-y-[6px]
                    focus-visible:scale-[1.018]
                    focus-visible:border-[#709AFF]/[0.50]
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
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[radial-gradient(circle_at_92%_0%,rgba(79,140,255,0.13),transparent_34%),radial-gradient(circle_at_0%_100%,rgba(125,155,180,0.05),transparent_42%)]
                    "
                  />

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
                      duration: 0.8,
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
                      via-white/[0.065]
                      to-transparent
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-[1px]
                      rounded-[12px]
                      border
                      border-white/[0.035]
                      transition-colors
                      duration-500
                      group-hover:border-[#AFC6FF]/[0.10]
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
                      transition-all
                      duration-500
                      group-hover:via-[#AFC6FF]/[0.55]
                    "
                  />

                  <motion.div
                    aria-hidden="true"
                    animate={{
                      width: isActive ? 68 : 22,
                      opacity: isActive ? 0.95 : 0.22,
                    }}
                    transition={{
                      duration: 0.35,
                      ease,
                    }}
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-7
                      h-[2px]
                      bg-gradient-to-r
                      from-[#4F8CFF]
                      via-[#759DFF]
                      to-transparent
                    "
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <motion.div
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                scale: isActive ? 1.055 : 1,
                                y: isActive ? -2 : 0,
                              }
                        }
                        transition={{
                          duration: 0.3,
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
                          text-[#B9D0DF]
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_25px_rgba(0,0,0,0.18)]
                          transition-[border-color,color,box-shadow,background]
                          duration-500
                          group-hover:border-[#7EA2FF]/[0.52]
                          group-hover:bg-[linear-gradient(145deg,#294968,#223D51)]
                          group-hover:text-[#D9E8FF]
                          group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_0_28px_rgba(79,140,255,0.12)]
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

                        <Icon size={18} strokeWidth={1.15} />
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
                        animate={{
                          x: isActive ? 2 : 0,
                        }}
                        transition={{
                          duration: 0.25,
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
                          duration-500
                          group-hover:text-white/[0.72]
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
                                group-hover:text-[#C9D9FF]/[0.88]
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
                  ? undefined
                  : {
                      opacity: 0,
                      scale: 0.88,
                      y: -12,
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
                duration: 0.7,
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
                  inset-[-36px]
                  rounded-full
                  bg-[#4F8CFF]/[0.035]
                  blur-[65px]
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
                  shadow-[0_32px_90px_rgba(0,0,0,0.48),0_0_50px_rgba(79,140,255,0.045)]
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
                  shadow-[0_0_15px_rgba(79,140,255,0.50)]
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
                    font-serif
                    text-[34px]
                    leading-[0.88]
                    tracking-[-0.055em]
                    bg-gradient-to-r
                    from-[#8DEBFF]
                    via-[#42D5F5]
                    to-[#168BD1]
                    bg-clip-text
                    text-transparent
                    sm:mt-6
                    sm:text-[40px]
                  "
                >
                  BADAR
                  <br />
                  <span className="inline-block mt-1">UL HAQ</span>
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
                shadow-[0_0_12px_rgba(79,140,255,0.45)]
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
                const Icon = item.icon;
                const isActive = active === index;

                return (
                  <motion.article
                    key={item.title}
                    initial={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            y: 35,
                            scale: 0.96,
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
                      amount: 0.12,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: reduceMotion ? 0 : index * 0.12,
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
                      duration-500
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
                        duration: 0.35,
                      }}
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_92%_0%,rgba(79,140,255,0.13),transparent_34%),radial-gradient(circle_at_0%_100%,rgba(125,155,180,0.05),transparent_42%)]
                      "
                    />

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
                        duration: 0.8,
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
                        via-white/[0.065]
                        to-transparent
                      "
                    />

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

                    <motion.div
                      aria-hidden="true"
                      animate={{
                        width: isActive ? 82 : 26,
                        opacity: isActive ? 0.95 : 0.22,
                      }}
                      transition={{
                        duration: 0.35,
                        ease,
                      }}
                      className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-8
                        h-[2px]
                        bg-gradient-to-r
                        from-[#4F8CFF]
                        via-[#759DFF]
                        to-transparent
                      "
                    />

                    <div className="relative z-10">
                      <div className="flex items-start gap-5">
                        <motion.div
                          animate={
                            reduceMotion
                              ? undefined
                              : {
                                  scale: isActive ? 1.06 : 1,
                                  y: isActive ? -2 : 0,
                                }
                          }
                          transition={{
                            duration: 0.3,
                            ease,
                          }}
                          className="
                            relative
                            flex
                            h-14
                            w-14
                            shrink-0
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-[10px]
                            border
                            border-[#9CB4C7]/[0.25]
                            bg-[linear-gradient(145deg,#294352,#203642)]
                            text-[#B9D0DF]
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

                          <Icon size={21} strokeWidth={1.15} />
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
                            animate={{
                              x: isActive ? 2 : 0,
                            }}
                            transition={{
                              duration: 0.25,
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
                          duration-500
                          group-hover:text-white/[0.72]
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
              ? undefined
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
            duration: 0.55,
            ease,
          }}
          className="
            group
            relative
            mt-10
            overflow-hidden
            rounded-[13px]
            border
            border-[#D9D3C7]
            bg-[#F3F0E8]
            px-5
            py-8
            shadow-[0_25px_70px_rgba(0,0,0,0.20),inset_0_1px_0_rgba(255,255,255,0.75)]
            transition-[border-color,box-shadow,transform]
            duration-500
            hover:-translate-y-[3px]
            hover:border-[#C9C1B2]
            hover:shadow-[0_32px_82px_rgba(0,0,0,0.26),0_0_40px_rgba(79,140,255,0.045)]
            sm:px-8
            sm:py-9
            lg:mt-24
            lg:px-14
            lg:py-14
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              right-[-8%]
              top-[-35%]
              h-[340px]
              w-[340px]
              rounded-full
              bg-[#D8D0C1]/[0.45]
              blur-[90px]
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
              bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.52),transparent_58%)]
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
              duration-500
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
              transition-all
              duration-500
              group-hover:w-[230px]
            "
          />

          <div
            className="
              relative
              grid
              gap-7
              lg:grid-cols-[150px_1fr]
              lg:gap-16
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
                  transition-all
                  duration-500
                  group-hover:w-20
                "
              />
            </div>

            <p
              className="
                max-w-5xl
                font-serif
                text-[clamp(1.5rem,2.8vw,2.9rem)]
                leading-[1.12]
                tracking-[-0.04em]
                text-[#26313A]
              "
            >
              Turning complexity into clarity, capability into opportunity,
              and opportunity into{" "}
              <span className="text-[#168BD1]">
                measurable impact.
              </span>
            </p>
          </div>
        </motion.div>

        {/* GLOBAL COMMUNICATION */}
        <motion.div
          initial={
            reduceMotion
              ? undefined
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.55,
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
                  backdrop-blur-2xl
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
                    -right-20
                    -top-24
                    h-72
                    w-72
                    rounded-full
                    bg-[#4F8CFF]/[0.055]
                    blur-[80px]
                  "
                />

                <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4">
                  {languages.map((language, index) => (
                    <motion.div
                      key={language.name}
                      initial={
                        reduceMotion
                          ? undefined
                          : {
                              opacity: 0,
                              y: 8,
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
                        duration: 0.45,
                        delay: reduceMotion ? 0 : index * 0.05,
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
                      <div
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-[radial-gradient(circle_at_50%_0%,rgba(130,160,200,0.12),transparent_64%)]
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover/language:opacity-100
                        "
                      />

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