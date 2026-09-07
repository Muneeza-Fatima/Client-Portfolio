"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Building2,
  UsersRound,
  BriefcaseBusiness,
  Terminal,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    year: "2026",
    period: "January 2026 — Present",
    role: "Cyber Security Analyst",
    company: "Credant Technologies — Now Dell Data Protection",
    location: "United Arab Emirates",
    category: "CYBERSECURITY",
    icon: ShieldCheck,
    image: "/images/experience/cybersecurity.png",
    description:
      "Monitor and analyze security events, investigate incidents, assess vulnerabilities, and support remediation across enterprise environments.",
    highlights: [
      "Threat detection and security event monitoring",
      "Incident investigation and response support",
      "Vulnerability assessment and risk analysis",
      "SIEM and enterprise security tooling",
    ],
  },
  {
    year: "2025",
    period: "November 2025 — Present",
    role: "Real Estate Consultant",
    company: "Object1.uae",
    location: "United Arab Emirates",
    category: "REAL ESTATE",
    icon: Building2,
    image: "/images/experience/real-estate.png",
    description:
      "Support buyers and investors across Dubai's dynamic real-estate market through research, market intelligence and tailored investment guidance.",
    highlights: [
      "Property research and market analysis",
      "Buyer and investor consultations",
      "Lead generation and opportunity identification",
      "Client guidance from inquiry to closing",
    ],
  },
  {
    year: "2023",
    period: "July 2023 — October 2024",
    role: "Customer Service Team Lead",
    company: "Galadari Real Estate",
    location: "Dubai, United Arab Emirates",
    category: "LEADERSHIP",
    icon: UsersRound,
    image: "/images/experience/leadership.png",
    description:
      "Led customer-focused operations across residential and commercial property environments while managing team performance and client relationships.",
    highlights: [
      "Managed and motivated a high-performing sales team",
      "Improved team sales performance by 25% within the first quarter",
      "Built relationships with clients, investors and stakeholders",
      "Led digital lead-generation initiatives",
    ],
  },
  {
    year: "2021",
    period: "January 2021 — March 2022",
    role: "Business Development Specialist",
    company: "Honda",
    location: "Islamabad, Pakistan",
    category: "BUSINESS DEVELOPMENT",
    icon: BriefcaseBusiness,
    image: "/images/experience/business.png",
    description:
      "Supported business growth through market research, opportunity identification, client relationship management and strategic business initiatives.",
    highlights: [
      "Conducted market and opportunity research",
      "Supported client relationship development",
      "Prepared business proposals and presentations",
      "Collaborated with cross-functional teams",
    ],
  },
  {
    year: "2017",
    period: "January 2017 — July 2019",
    role: "Cyber Operator",
    company: "Fiverr",
    location: "United States",
    category: "EARLY EXPERIENCE",
    icon: Terminal,
    image: "/images/experience/freelance-cyber.png",
    description:
      "Early professional experience delivering cybersecurity-related services to clients through freelance projects and digital platforms.",
    highlights: [
      "Delivered cybersecurity-related freelance services",
      "Worked directly with international clients",
      "Developed early technical problem-solving experience",
    ],
  },
];

export default function Experience() {
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

  const enableMotion = !reduceMotion;
  const enableHover = enableMotion && finePointer;

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#081724] pt-32 pb-24 text-white sm:pt-40 sm:pb-32 lg:pt-32 lg:pb-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main ambient glow
            Continuous animation only runs on fine-pointer devices.
            Mobile/touch devices use a static glow for smoother scrolling. */}
        {enableHover ? (
          <motion.div
            animate={{
              opacity: [0.22, 0.3, 0.22],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[48%] top-[5%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#164E8A]/[0.11] blur-[110px] sm:h-[520px] sm:w-[520px] sm:blur-[145px] lg:h-[680px] lg:w-[680px] lg:blur-[190px]"
          />
        ) : (
          <div className="absolute left-[48%] top-[5%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#164E8A]/[0.11] blur-[110px] sm:h-[520px] sm:w-[520px] sm:blur-[145px] lg:h-[680px] lg:w-[680px] lg:blur-[190px]" />
        )}

        <div className="absolute -left-40 top-[35%] h-[320px] w-[320px] rounded-full bg-[#168BD1]/[0.04] blur-[100px] sm:-left-52 sm:h-[400px] sm:w-[400px] sm:blur-[135px] lg:-left-60 lg:h-[500px] lg:w-[500px] lg:blur-[170px]" />

        <div className="absolute -right-40 bottom-[8%] h-[340px] w-[340px] rounded-full bg-[#2DD4BF]/[0.02] blur-[110px] sm:-right-52 sm:h-[420px] sm:w-[420px] sm:blur-[145px] lg:-right-60 lg:h-[520px] lg:w-[520px] lg:blur-[180px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.07]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
        {/* HEADER */}
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#42D5F5] shadow-[0_0_14px_rgba(66,213,245,0.7)]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.36em] text-[#5FE0F5]">
              Professional Experience
            </span>
          </div>

          <h2 className="mt-6 text-[clamp(3.4rem,5.5vw,5.4rem)] font-medium leading-[0.88] tracking-[-0.07em]">
            <span className="text-white">Experience that </span>

            <span className="bg-gradient-to-r from-white via-[#83E5F4] to-[#3184DF] bg-clip-text text-transparent">
              shaped the path.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-[13px] leading-7 text-white sm:text-[15px] sm:text-white/48">
            A multidisciplinary career spanning cybersecurity, business
            development, leadership and real estate — building a broader
            understanding of technology, people and opportunity.
          </p>
        </motion.header>

        {/* TIMELINE */}
        <div className="relative mt-20 sm:mt-24 lg:mt-28">
          {/* MOBILE TIMELINE LINE */}
          <div className="absolute bottom-10 left-[5px] top-10 w-px bg-gradient-to-b from-[#42D5F5]/80 via-[#168BD1]/45 to-transparent sm:left-[23px]" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={`${experience.year}-${experience.role}`}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 28,
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
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid gap-5 pl-4 sm:grid-cols-[100px_1fr] sm:gap-10 sm:pl-0"
                >
                  {/* YEAR */}
                  <div className="hidden pt-8 sm:block">
                    <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#67E8F9]">
                      {experience.year}
                    </span>

                    <div className="mt-3 h-px w-8 bg-[#42D5F5]/30" />
                  </div>

                  {/* TIMELINE NODE */}
                  <div className="absolute left-[-4px] top-8 flex h-5 w-5 items-center justify-center rounded-full border border-[#42D5F5]/45 bg-[#081724] shadow-[0_0_0_3px_rgba(8,23,36,0.98),0_0_16px_rgba(66,213,245,0.18)] sm:left-[5px] sm:h-10 sm:w-10 sm:shadow-[0_0_0_6px_rgba(8,23,36,0.95),0_0_20px_rgba(66,213,245,0.08)]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#42D5F5] shadow-[0_0_8px_rgba(66,213,245,0.8)]" />
                  </div>

                  {/* MOBILE YEAR */}
                  <div className="sm:hidden">
                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#67E8F9]">
                      {experience.year}
                    </span>
                  </div>

                  {/* PREMIUM CARD */}
                  <motion.div
                    whileHover={
                      enableHover
                        ? {
                            y: -4,
                          }
                        : undefined
                    }
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      group relative overflow-hidden rounded-[26px]
                      border border-white/[0.11]
                      bg-[#0D263B]
                      shadow-[0_24px_70px_rgba(0,0,0,0.24)]
                      transition-all duration-500
                      hover:border-[#42D5F5]/30
                      hover:bg-[#102B41]
                      hover:shadow-[0_32px_90px_rgba(0,0,0,0.34)]
                    "
                  >
                    {/* MOBILE LEFT SHINE — SUBTLE */}
                    <motion.div
                      aria-hidden="true"
                      initial={
                        reduceMotion
                          ? undefined
                          : {
                              opacity: 0.15,
                              scaleY: 0.7,
                            }
                      }
                      whileInView={
                        reduceMotion
                          ? undefined
                          : {
                              opacity: 0.5,
                              scaleY: 1,
                            }
                      }
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        pointer-events-none
                        absolute
                        bottom-8
                        left-0
                        top-8
                        z-30
                        w-px
                        origin-center
                        rounded-full
                        bg-gradient-to-b
                        from-transparent
                        via-[#42D5F5]/55
                        to-transparent
                        shadow-[0_0_5px_rgba(66,213,245,0.22)]
                        sm:hidden
                      "
                    />

                    {/* Premium top edge */}
                    <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#42D5F5]/50 to-transparent" />

                    {/* Very subtle ambient glow */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#168BD1]/[0.07] blur-[75px] sm:-right-32 sm:-top-32 sm:h-72 sm:w-72 sm:blur-[90px] lg:-right-36 lg:-top-36 lg:h-80 lg:w-80 lg:blur-[100px]" />

                    <div className="relative grid lg:grid-cols-[minmax(0,1fr)_340px]">
                      {/* CONTENT */}
                      <div className="order-2 flex flex-col p-6 sm:p-8 lg:order-1 lg:p-9">
                        {/* ROLE */}
                        <div className="flex items-start gap-5">
                          <div
                            className="
                              flex h-13 w-13 shrink-0 items-center
                              justify-center rounded-[14px]
                              border border-[#42D5F5]/25
                              bg-[#42D5F5]/[0.09]
                              shadow-[0_8px_24px_rgba(66,213,245,0.06)]
                              transition-all duration-500
                              group-hover:border-[#42D5F5]/40
                              group-hover:bg-[#42D5F5]/[0.13]
                            "
                          >
                            <Icon
                              size={21}
                              strokeWidth={1.3}
                              className="text-[#72E3F4]"
                            />
                          </div>

                          <div className="min-w-0">
                            <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#55DCF2]/80">
                              {experience.category}
                            </span>

                            <h3 className="mt-2 text-[25px] font-semibold leading-tight tracking-[-0.04em] text-[#F8FDFF] drop-shadow-[0_0_14px_rgba(255,255,255,0.22)] sm:text-[29px]">
                              {experience.role}
                            </h3>

                            <p className="mt-2 text-[13px] font-normal text-white sm:text-[13px]">
                              {experience.company}
                            </p>
                          </div>
                        </div>

                        {/* META */}
                        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                          {/* PROMINENT DATE BUTTON */}
                          <motion.div
                            whileHover={
                              enableHover
                                ? {
                                    y: -2,
                                    scale: 1.025,
                                  }
                                : undefined
                            }
                            transition={{
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                              relative inline-flex
                              rounded-full
                              border border-[#42D5F5]/55
                              bg-[#42D5F5]/[0.08]
                              px-4 py-2
                              shadow-[0_0_14px_rgba(66,213,245,0.16),inset_0_1px_0_rgba(255,255,255,0.07)]
                              transition-all duration-300
                              hover:border-[#67E8F9]/90
                              hover:bg-[#42D5F5]/[0.12]
                              hover:shadow-[0_0_24px_rgba(66,213,245,0.34),inset_0_1px_0_rgba(255,255,255,0.1)]
                            "
                          >
                            <span className="text-[10px] font-normal uppercase tracking-[0.16em] text-[#8BEAF8] sm:text-[11px]">
                              {experience.period}
                            </span>
                          </motion.div>

                          <span className="hidden h-3 w-px bg-white/20 sm:block" />

                          <span className="flex items-center gap-2 text-[9px] font-normal text-white sm:text-[10px]">
                            <MapPin
                              size={11}
                              strokeWidth={1.4}
                              className="text-[#42D5F5]"
                            />
                            {experience.location}
                          </span>
                        </div>

                        {/* DIVIDER */}
                        <div className="my-7 h-px bg-white/[0.10]" />

                        {/* DESCRIPTION */}
                        <p className="max-w-3xl text-[13px] font-normal leading-7 text-white sm:text-[14px]">
                          {experience.description}
                        </p>

                        {/* HIGHLIGHTS */}
                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                          {experience.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className="
                                rounded-[14px]
                                border border-white/[0.10]
                                bg-[#102B41]
                                px-4 py-3.5
                                shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]
                                transition-all duration-300
                                group-hover:border-white/[0.14]
                              "
                            >
                              <div className="flex items-start gap-3">
                                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#42D5F5] shadow-[0_0_8px_rgba(66,213,245,0.45)]" />

                                <span className="text-[11px] font-normal leading-5 text-white sm:text-[11px]">
                                  {highlight}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* CARD FOOTER */}
                        <div className="mt-8 flex items-center justify-between border-t border-white/[0.09] pt-5">
                          <span className="text-[8px] font-normal uppercase tracking-[0.3em] text-white/70 sm:text-[8px]">
                            Professional Experience
                          </span>

                          <span className="text-[8px] font-normal uppercase tracking-[0.25em] text-[#42D5F5]/80">
                            {experience.year}
                          </span>
                        </div>
                      </div>

                      {/* IMAGE */}
                      <div className="order-1 relative min-h-[380px] overflow-hidden border-b border-white/[0.07] lg:order-2 lg:min-h-full lg:border-b-0 lg:border-l lg:border-t-0">
                        <Image
                          src={experience.image}
                          alt={`${experience.role} — ${experience.company}`}
                          fill
                          priority={index === 0}
                          loading={index === 0 ? "eager" : "lazy"}
                          sizes="(max-width: 1024px) 100vw, 340px"
                          className="
                            object-cover
                            object-center
                            transition-transform duration-700
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            group-hover:scale-[1.035]
                          "
                        />

                        {/* CLEAN IMAGE — NO SHADE / NO TINT */}
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.08]" />

                        {/* Image label */}
                        <div className="absolute bottom-5 left-5 right-5">
                          <div className="flex items-end justify-between gap-4">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/90">
                                {experience.year}
                              </span>

                              <p className="mt-1 text-[10px] font-normal uppercase tracking-[0.12em] text-white">
                                {experience.category}
                              </p>
                            </div>

                            <div className="h-px flex-1 bg-white/30" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* CLOSING */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-t border-white/[0.07] pt-7 sm:mt-20"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-[11px] font-normal leading-6 text-white sm:text-[12px]">
              Each role added another perspective — from technical security
              and business development to leadership, client relationships and
              commercial strategy.
            </p>

            <span className="shrink-0 text-[8px] font-normal uppercase tracking-[0.3em] text-[#42D5F5]/55">
              Continuing forward
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}