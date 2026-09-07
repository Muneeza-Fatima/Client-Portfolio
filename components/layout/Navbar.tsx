"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Experience", href: "/experience" },
  { label: "Ventures", href: "/ventures" },
  { label: "Leadership", href: "/leadership" },
  { label: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] w-full">
      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <nav
        className="
          relative
          z-[9999]
          h-[56px]
          w-full
          border-b
          border-[#0B1F33]/[0.08]
          bg-[#F5F3EE]/[0.97]
          shadow-[0_6px_24px_rgba(11,31,51,0.07)]
          backdrop-blur-md
        "
      >
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            w-full
            items-center
            px-4
            sm:px-6
            lg:px-8
            xl:px-10
          "
        >
          {/* =====================================================
              BRAND
          ===================================================== */}

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            aria-label="Badar Ul Haq"
            className="group flex shrink-0 items-center gap-2.5"
          >
            <span
              className="
                relative
                flex
                h-[32px]
                w-[32px]
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-[8px]
                bg-[#0B1F33]
                text-[#F5F3EE]
                shadow-[0_4px_16px_rgba(11,31,51,0.16)]
                transition-all
                duration-300
                group-hover:-translate-y-px
                group-hover:shadow-[0_7px_20px_rgba(11,31,51,0.20)]
              "
            >
              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-[4px]
                  rounded-[5px]
                  border
                  border-[#F5F3EE]/[0.16]
                "
              />

              <span
                className="
                  relative
                  z-10
                  select-none
                  font-sans
                  text-[9px]
                  font-bold
                  tracking-[-0.08em]
                  text-[#F5F3EE]
                  antialiased
                "
              >
                BH
              </span>

              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-[4px]
                  left-1/2
                  h-px
                  w-3
                  -translate-x-1/2
                  bg-[#8FC7D8]/70
                "
              />
            </span>

            <span
              className="
                whitespace-nowrap
                font-sans
                text-[11px]
                font-semibold
                tracking-[0.115em]
                text-[#0B1F33]
                antialiased
                transition-colors
                duration-300
                group-hover:text-[#315C6D]
                sm:text-[12px]
                sm:tracking-[0.13em]
              "
            >
              BADAR UL HAQ
            </span>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <div className="ml-auto hidden items-center gap-2.5 md:flex">
            <div
              className="
                flex
                items-center
                rounded-full
                border
                border-[#0B1F33]/[0.08]
                bg-white/55
                p-0.5
                shadow-[0_3px_14px_rgba(11,31,51,0.045)]
              "
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    group
                    relative
                    z-10
                    rounded-full
                    px-2
                    py-1.5
                    font-sans
                    text-[8px]
                    font-medium
                    tracking-[0.015em]
                    !text-[#0B1F33]
                    antialiased
                    transition-all
                    duration-200
                    hover:bg-[#0B1F33]/[0.05]
                    hover:!text-[#315C6D]
                    lg:px-2.5
                    lg:text-[9px]
                    xl:px-3
                  "
                >
                  <span>{item.label}</span>

                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-x-2
                      bottom-0.5
                      h-px
                      origin-center
                      scale-x-0
                      rounded-full
                      bg-[#5E8D9D]
                      opacity-0
                      transition-all
                      duration-200
                      group-hover:scale-x-100
                      group-hover:opacity-100
                    "
                  />
                </Link>
              ))}
            </div>

            {/* =================================================
                DESKTOP CTA
            ================================================= */}

            <Link
              href="/contact"
              className="
                group
                relative
                z-10
                flex
                h-9
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[#0B1F33]/20
                bg-[#0B1F33]
                px-4
                font-sans
                text-[9px]
                font-semibold
                tracking-[0.02em]
                !text-[#F5F3EE]
                shadow-[0_5px_18px_rgba(11,31,51,0.13)]
                transition-all
                duration-200
                hover:-translate-y-px
                hover:bg-[#102D48]
                hover:shadow-[0_7px_22px_rgba(11,31,51,0.17)]
                lg:px-4.5
                lg:text-[9px]
              "
            >
              <span className="!text-[#F5F3EE]">
                Start a Conversation
              </span>

              <span
                aria-hidden="true"
                className="text-[12px] leading-none"
              >
                💬
              </span>
            </Link>
          </div>

          {/* =====================================================
              MOBILE CTA + MENU BUTTON
          ===================================================== */}

          <div className="ml-auto flex items-center gap-2 md:hidden">
            {/* MOBILE START CONVERSATION */}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="
                group
                relative
                z-10
                flex
                h-9
                items-center
                justify-center
                gap-1.5
                rounded-full
                border
                border-[#0B1F33]/20
                bg-[#0B1F33]
                px-3.5
                font-sans
                text-[9px]
                font-semibold
                tracking-[0.01em]
                !text-[#F5F3EE]
                shadow-[0_5px_18px_rgba(11,31,51,0.13)]
                transition-all
                duration-200
                active:scale-[0.98]
                hover:bg-[#102D48]
              "
            >
              <span className="!text-[#F5F3EE]">
                Start a Conversation
              </span>

              <span
                aria-hidden="true"
                className="text-[12px] leading-none"
              >
                💬
              </span>
            </Link>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
              className="
                relative
                z-[10000]
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#0B1F33]/15
                bg-white/70
                text-[#0B1F33]
                shadow-[0_3px_12px_rgba(11,31,51,0.07)]
                transition-all
                duration-200
                active:scale-[0.96]
                hover:border-[#5E8D9D]/50
                hover:bg-[#5E8D9D]/10
                hover:text-[#315C6D]
              "
            >
              {menuOpen ? (
                <X size={15} strokeWidth={1.8} />
              ) : (
                <Menu size={15} strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}

      <div
        className={`
          relative
          z-[9998]
          overflow-hidden
          border-b
          border-[#0B1F33]/10
          bg-[#F5F3EE]/[0.98]
          shadow-[0_16px_40px_rgba(11,31,51,0.10)]
          backdrop-blur-md
          transition-[max-height,opacity]
          duration-200
          md:hidden
          ${
            menuOpen
              ? "pointer-events-auto max-h-[760px] opacity-100"
              : "pointer-events-none max-h-0 border-b-0 opacity-0"
          }
        `}
      >
        <div className="px-5 pb-5 pt-3">
          <div
            className="
              mb-1
              flex
              items-center
              gap-2
              border-b
              border-[#0B1F33]/[0.08]
              pb-2.5
            "
          >
            <span className="h-px w-6 bg-[#5E8D9D]/70" />

            <span
              className="
                font-sans
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#477889]
              "
            >
              Navigation
            </span>
          </div>

          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`
                group
                relative
                z-10
                flex
                items-center
                justify-between
                py-3
                font-sans
                text-[12px]
                font-semibold
                !text-[#0B1F33]
                transition-colors
                duration-200
                hover:!text-[#315C6D]
                ${
                  index !== navigation.length - 1
                    ? "border-b border-[#0B1F33]/[0.07]"
                    : ""
                }
              `}
            >
              <span>{item.label}</span>
            </Link>
          ))}

          {/* MOBILE MENU CTA */}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              group
              relative
              z-10
              mt-4
              flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[#0B1F33]/20
              bg-[#0B1F33]
              px-4
              font-sans
              text-[12px]
              font-semibold
              !text-[#F5F3EE]
              shadow-[0_7px_22px_rgba(11,31,51,0.14)]
              transition-all
              duration-200
              hover:bg-[#102D48]
            "
          >
            <span className="!text-[#F5F3EE]">
              Start a Conversation
            </span>

            <span
              aria-hidden="true"
              className="text-[12px] leading-none"
            >
              💬
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}