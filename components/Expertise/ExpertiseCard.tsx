
"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ExpertiseCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
  index: number;
  reduceMotion: boolean;
}

export default function ExpertiseCard({
  number,
  icon: Icon,
  title,
  description,
  skills,
  index,
  reduceMotion,
}: ExpertiseCardProps) {
  const featured = index === 0;

  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -7,
            }
      }
      tabIndex={0}
      className={`
        group
        relative
        isolate
        min-h-[300px]
        overflow-hidden
        rounded-[26px]
        border
        border-white/[0.09]
        bg-[#0B1A2A]
        p-7
        outline-none
        shadow-[0_24px_70px_rgba(0,0,0,0.20)]
        transition-all
        duration-500
        hover:border-[#A8D7FF]/[0.22]
        hover:shadow-[0_35px_90px_rgba(0,0,0,0.32)]
        focus-visible:border-[#A8D7FF]/[0.38]
        sm:p-8
        ${
          featured
            ? "lg:row-span-2 lg:min-h-[620px]"
            : "lg:min-h-[300px]"
        }
      `}
    >
      {/* =========================================================
          BACKGROUND STRUCTURE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(135deg,rgba(255,255,255,0.045),transparent_32%,rgba(62,91,180,0.035))]
        "
      />

      {/* Large editorial number */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-4
          -top-8
          select-none
          font-serif
          text-[150px]
          font-normal
          leading-none
          tracking-[-0.11em]
          text-white/[0.025]
          transition-all
          duration-700
          group-hover:-translate-x-2
          group-hover:text-[#A8D8FF]/[0.055]
          sm:text-[175px]
        "
      >
        {number}
      </div>

      {/* Soft royal-blue atmosphere */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-28
          -top-28
          h-72
          w-72
          rounded-full
          bg-[#4568E8]/[0.045]
          blur-[100px]
          transition-all
          duration-700
          group-hover:scale-125
          group-hover:bg-[#4568E8]/[0.085]
        "
      />

      {/* Ice-blue atmosphere */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-20
          h-64
          w-64
          rounded-full
          bg-[#8CE6FF]/[0.025]
          blur-[100px]
          transition-all
          duration-700
          group-hover:bg-[#8CE6FF]/[0.055]
        "
      />

      {/* =========================================================
          TOP ARCHITECTURAL LINE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-8
          right-8
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/[0.16]
          to-transparent
          transition-all
          duration-500
          group-hover:via-[#BDEBFF]/[0.48]
        "
      />

      {/* Active left edge */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-8
          left-0
          h-12
          w-px
          bg-gradient-to-b
          from-transparent
          via-[#A7E4FF]/[0.25]
          to-transparent
          transition-all
          duration-500
          group-hover:h-24
          group-hover:via-[#A7E4FF]/[0.65]
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}

        <div className="flex items-start justify-between">
          {/* Icon */}

          <div
            className="
              relative
              flex
              h-12
              w-12
              items-center
              justify-center
              overflow-hidden
              rounded-[15px]
              border
              border-[#A9C7E2]/[0.14]
              bg-[#12273B]
              text-[#BFEAFF]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
              transition-all
              duration-500
              group-hover:border-[#B9E7FF]/[0.34]
              group-hover:bg-[#183650]
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-white/[0.07]
                to-transparent
              "
            />

            <Icon
              size={19}
              strokeWidth={1.15}
              className="
                relative
                transition-transform
                duration-500
                group-hover:scale-[1.12]
              "
            />
          </div>

          {/* Number label */}

          <div className="flex items-center gap-3">
            <span
              className="
                h-px
                w-8
                bg-white/[0.10]
                transition-all
                duration-500
                group-hover:w-12
                group-hover:bg-[#BDEBFF]/[0.35]
              "
            />

            <span
              className="
                font-serif
                text-[11px]
                tracking-[0.16em]
                text-white/[0.34]
                transition-colors
                duration-500
                group-hover:text-[#BFE7FF]/[0.75]
              "
            >
              {number}
            </span>
          </div>
        </div>

        {/* Main information */}

        <div className="mt-auto pt-14">
          <p
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.30em]
              text-[#AFCBE1]/[0.70]
            "
          >
            Executive Expertise
          </p>

          <h3
            className={`
              mt-3
              max-w-[470px]
              font-serif
              font-normal
              leading-[0.92]
              tracking-[-0.055em]
              text-[#F7F9FC]
              transition-all
              duration-500
              group-hover:text-white
              ${
                featured
                  ? "text-[clamp(2.5rem,4vw,4.2rem)]"
                  : "text-[clamp(2rem,3vw,2.8rem)]"
              }
            `}
          >
            {title}
          </h3>

          <p
            className="
              mt-5
              max-w-[500px]
              text-[12px]
              leading-[1.85]
              text-white/[0.48]
              transition-colors
              duration-500
              group-hover:text-white/[0.68]
              sm:text-[13px]
            "
          >
            {description}
          </p>
        </div>

        {/* =======================================================
            SKILLS
        ======================================================= */}

        <div
          className="
            mt-7
            flex
            flex-wrap
            gap-x-2
            gap-y-2
          "
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                border
                border-white/[0.09]
                bg-white/[0.025]
                px-3
                py-1.5
                text-[7px]
                font-medium
                uppercase
                tracking-[0.13em]
                text-white/[0.38]
                transition-all
                duration-300
                group-hover:border-[#B4DDF5]/[0.17]
                group-hover:bg-[#B4DDF5]/[0.035]
                group-hover:text-[#C4E5F7]/[0.65]
              "
            >
              {skill}
            </span>
          ))}
        </div>

        {/* =======================================================
            BOTTOM META
        ======================================================= */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            border-t
            border-white/[0.07]
            pt-5
          "
        >
          <span
            className="
              text-[7px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-white/[0.25]
              transition-colors
              duration-300
              group-hover:text-[#BFE4F8]/[0.48]
            "
          >
            Strategic Capability
          </span>

          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              border
              border-white/[0.09]
              bg-white/[0.02]
              text-white/[0.30]
              transition-all
              duration-500
              group-hover:border-[#B7E6FF]/[0.30]
              group-hover:bg-[#B7E6FF]/[0.06]
              group-hover:text-[#D9F5FF]
            "
          >
            <span
              className="
                block
                transition-transform
                duration-500
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            >
              ↗
            </span>
          </span>
        </div>
      </div>

      {/* =========================================================
          PREMIUM SHINE
      ========================================================= */}

      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          initial={{
            x: "-160%",
          }}
          whileHover={{
            x: "180%",
          }}
          transition={{
            duration: 1.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            pointer-events-none
            absolute
            -top-[80%]
            left-0
            h-[260%]
            w-[14%]
            rotate-[24deg]
            bg-gradient-to-r
            from-transparent
            via-white/[0.055]
            to-transparent
          "
        />
      )}
    </motion.article>
  );
}
