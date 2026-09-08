"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const journey = [
  {
    number: "01",
    title: "Computer Science",
    text: "A technical foundation built around analytical thinking, problem solving and technology.",
  },
  {
    number: "02",
    title: "Cybersecurity",
    text: "Real-world experience across threat analysis, vulnerability management and incident response.",
  },
  {
    number: "03",
    title: "Leadership",
    text: "Team and client-facing experience shaped communication, ownership and decision-making.",
  },
  {
    number: "04",
    title: "Business",
    text: "Dubai's commercial environment added market awareness, investment perspective and strategic thinking.",
  },
];

export default function FounderStory() {
  const reduceMotion = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");

    const update = () => {
      setFinePointer(media.matches);
    };

    update();

    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  const motionEnabled = !reduceMotion && finePointer;

  return (
    <section className="relative overflow-hidden bg-[#061522] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.018] sm:opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#67D9F0 1px, transparent 1px), linear-gradient(90deg, #67D9F0 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-[#0B8DB8]/10 blur-[80px] sm:-right-48 sm:-top-48 sm:h-[500px] sm:w-[500px] sm:blur-[100px] lg:h-[600px] lg:w-[600px] lg:blur-[120px]" />

        <div className="absolute -bottom-48 -left-40 h-[360px] w-[360px] rounded-full bg-[#075B9A]/10 blur-[85px] sm:-bottom-64 sm:-left-48 sm:h-[440px] sm:w-[440px] sm:blur-[105px] lg:h-[520px] lg:w-[520px] lg:blur-[125px]" />

        {motionEnabled ? (
          <motion.div
            animate={{
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-[300px] -top-[280px] h-[650px] w-[650px] rounded-full border border-[#38CFF4]/[0.07] sm:-right-[340px] sm:-top-[310px] sm:h-[760px] sm:w-[760px] lg:-right-[360px] lg:-top-[330px] lg:h-[850px] lg:w-[850px] lg:border-[#38CFF4]/[0.09]"
          />
        ) : (
          <div className="absolute -right-[300px] -top-[280px] h-[650px] w-[650px] rounded-full border border-[#38CFF4]/[0.07] sm:-right-[340px] sm:-top-[310px] sm:h-[760px] sm:w-[760px] lg:-right-[360px] lg:-top-[330px] lg:h-[850px] lg:w-[850px] lg:border-[#38CFF4]/[0.09]" />
        )}

        <div className="absolute -right-[210px] -top-[190px] h-[480px] w-[480px] rounded-full border border-[#38CFF4]/[0.045] sm:-right-[230px] sm:-top-[205px] sm:h-[550px] sm:w-[550px] lg:-right-[245px] lg:-top-[215px] lg:h-[620px] lg:w-[620px] lg:border-[#38CFF4]/[0.055]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={motionEnabled ? { opacity: 0, y: 30 } : false}
            whileInView={motionEnabled ? { opacity: 1, y: 0 } : undefined}
            viewport={
              motionEnabled ? { once: true, amount: 0.25 } : undefined
            }
            transition={
              motionEnabled
                ? {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }
                : undefined
            }
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#42D5F5]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#42D5F5]">
                Founder Story
              </span>
            </div>

            <h2 className="max-w-2xl overflow-visible font-sans text-[clamp(3rem,7vw,6.6rem)] font-semibold leading-[1.02] tracking-[-0.065em] lg:text-[clamp(2.8rem,5.8vw,6rem)]">
              <span className="block whitespace-nowrap">
                Built across
              </span>

              <span className="mt-3 block pb-[0.08em] bg-gradient-to-r from-white via-[#7DE6FF] to-[#21BCE8] bg-clip-text text-transparent">
                disciplines.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={motionEnabled ? { opacity: 0, y: 25 } : false}
            whileInView={motionEnabled ? { opacity: 1, y: 0 } : undefined}
            viewport={
              motionEnabled ? { once: true, amount: 0.25 } : undefined
            }
            transition={
              motionEnabled
                ? {
                    duration: 0.8,
                    delay: 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }
                : undefined
            }
            className="flex items-end"
          >
            <div className="relative max-w-xl overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 sm:p-8">
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#42D5F5] via-[#168BD1] to-transparent" />

              <p className="text-base leading-8 text-white/80 sm:text-lg">
                A career shaped by technology, cybersecurity, leadership and
                business — each discipline adding a new perspective to the
                next.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/65">
                <span>Technology</span>
                <span className="text-[#42D5F5]">/</span>
                <span>Security</span>
                <span className="text-[#42D5F5]">/</span>
                <span>Leadership</span>
                <span className="text-[#42D5F5]">/</span>
                <span>Business</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          {/* Image */}
          <motion.div
            initial={motionEnabled ? { opacity: 0, scale: 0.97 } : false}
            whileInView={
              motionEnabled ? { opacity: 1, scale: 1 } : undefined
            }
            viewport={motionEnabled ? { once: true, amount: 0.2 } : undefined}
            transition={
              motionEnabled
                ? {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }
                : undefined
            }
            className="group relative z-0 min-h-[520px] overflow-hidden rounded-[2rem] border border-white/[0.1] bg-[#03101C] shadow-2xl sm:min-h-[590px]"
          >
            <Image
              src="/images/about/about.jpeg"
              alt="Dubai architecture at night"
              fill
              priority
              quality={82}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="z-0 object-cover object-center brightness-[1.08] contrast-[1.05] saturate-[1.08] transform-gpu transition-transform duration-[1.2s] ease-out group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020A11]/45 via-transparent to-transparent" />

            <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#0A73B7]/[0.06] via-transparent to-[#20C7E8]/[0.035]" />

            <div className="absolute inset-5 z-20 rounded-[1.5rem] border border-white/[0.15]" />

            <div className="absolute left-9 top-9 z-30 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#67D9F0]/30 bg-[#061522]/30">
                <Sparkles
                  size={12}
                  className="text-[#67D9F0]"
                />
              </span>

              <span className="text-[9px] uppercase tracking-[0.3em] text-white/85">
                Dubai · Perspective
              </span>
            </div>

            <div className="absolute bottom-8 left-8 right-8 z-30">
              <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.28em] text-[#67D9F0]">
                The environment
              </p>

              <h3 className="max-w-lg text-3xl font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl">
                Where ideas meet opportunity.
              </h3>

              <div className="mt-6 border-t border-white/[0.14] pt-5">
                <p className="max-w-sm text-sm leading-6 text-white/70">
                  Dubai reflects the pace, ambition and international outlook
                  behind the journey.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Journey */}
          <div className="relative">
            {motionEnabled ? (
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-5 left-[11px] top-5 w-px origin-top bg-gradient-to-b from-[#42D5F5]/50 via-white/10 to-transparent"
              />
            ) : (
              <div className="absolute bottom-5 left-[11px] top-5 w-px bg-gradient-to-b from-[#42D5F5]/50 via-white/10 to-transparent" />
            )}

            <div className="space-y-3">
              {journey.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.48,
                    delay: index * 0.10,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative pl-10 sm:pl-12"
                >
                  <div className="absolute left-0 top-7 flex h-6 w-6 items-center justify-center rounded-full bg-[#061522]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#42D5F5] shadow-[0_0_0_5px_rgba(66,213,245,0.08)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_0_7px_rgba(66,213,245,0.12)]" />
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-6 transition-[border-color,background-color,transform,box-shadow] duration-500 group-hover:-translate-y-1 group-hover:border-[#42D5F5]/20 group-hover:bg-white/[0.045] sm:px-7 sm:py-7 max-sm:border-[#42D5F5]/25 max-sm:shadow-[0_0_18px_rgba(66,213,245,0.08),inset_0_0_18px_rgba(66,213,245,0.025)]">
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#42D5F5] to-transparent opacity-100" />

                    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-[#67D9F0]/0 max-sm:border-[#67D9F0]/10" />

                    <div className="flex items-center gap-4">
                      <span className="text-[9px] font-semibold tracking-[0.28em] text-[#42D5F5]/65">
                        {item.number}
                      </span>

                      <span className="h-px flex-1 bg-white/[0.07]" />
                    </div>

                    <h3 className="mt-5 text-[1.45rem] font-semibold leading-[1.2] tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-[#7DE6FF] sm:text-[1.65rem]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-white/70 sm:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={motionEnabled ? { opacity: 0, y: 20 } : false}
          whileInView={motionEnabled ? { opacity: 1, y: 0 } : undefined}
          viewport={
            motionEnabled ? { once: true, amount: 0.3 } : undefined
          }
          transition={
            motionEnabled
              ? {
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }
              : undefined
          }
          className="mt-14 border-t border-white/[0.08] pt-7 sm:mt-20"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-white/65">
              One career. Multiple disciplines. A broader way of thinking.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#42D5F5] shadow-[0_0_12px_rgba(66,213,245,0.7)]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#42D5F5]">
                Continuously evolving
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}