"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Experience", href: "/experience" },
  { label: "Ventures", href: "/ventures" },
  { label: "Leadership", href: "/leadership" },
  { label: "Insights", href: "/insights" },
  { label: "Connect", href: "/contact" },
];

const focusAreas = [
  "Cybersecurity",
  "Real Estate",
  "Business Development",
  "Strategic Leadership",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-[#111827]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="
            absolute
            -right-[220px]
            -top-[260px]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#4169E1]/[0.035]
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            -left-[260px]
            bottom-[-300px]
            h-[580px]
            w-[580px]
            rounded-full
            bg-[#3157D5]/[0.025]
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.012]
            bg-[linear-gradient(rgba(15,23,42,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.8)_1px,transparent_1px)]
            bg-[size:110px_110px]
            [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_75%,transparent)]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        <div
          className="
            grid
            gap-12
            border-t
            border-[#0F172A]/[0.09]
            py-14
            sm:py-16
            lg:grid-cols-[1.45fr_0.75fr_0.85fr_0.8fr]
            lg:gap-14
            lg:py-20
          "
        >
          <div className="min-w-0">
            <Link
              href="/"
              className="
                inline-flex
                items-baseline
                text-[23px]
                font-semibold
                uppercase
                tracking-[0.025em]
                text-[#17212B]
                transition-transform
                duration-300
                hover:translate-x-0.5
              "
            >
              BADAR UL HAQ
              <span className="ml-1 text-[#4169E1]">.</span>
            </Link>

            <div
              className="
                mt-3
                h-px
                w-12
                bg-gradient-to-r
                from-[#4169E1]
                to-transparent
              "
            />

            <p
              className="
                mt-5
                max-w-[390px]
                text-[12px]
                leading-6
                text-[#64748B]
              "
            >
              CEO and business leader focused on technology,
              cybersecurity, real estate and strategic growth.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/badarulhaq838/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#0F172A]/[0.09]
                  bg-white
                  shadow-[0_5px_18px_rgba(15,23,42,0.045)]
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.04]
                  focus:outline-none
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-[#0A66C2]"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.98H3.56v11.47ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z" />
                </svg>
              </a>

              <a
                href="https://wa.me/971559466820"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#0F172A]/[0.09]
                  bg-white
                  shadow-[0_5px_18px_rgba(15,23,42,0.045)]
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.04]
                  focus:outline-none
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[19px] w-[19px] fill-[#25D366]"
                  aria-hidden="true"
                >
                  <path d="M12.04 2a9.94 9.94 0 0 0-8.52 15.06L2 22l5.08-1.49A9.96 9.96 0 1 0 12.04 2Zm0 17.98a8 8 0 0 1-4.08-1.12l-.29-.17-3.02.89.9-2.94-.19-.3a7.97 7.97 0 1 1 6.68 3.64Zm4.38-5.99c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
                </svg>
              </a>

              <a
                href="https://t.me/bderr_04"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#0F172A]/[0.09]
                  bg-white
                  shadow-[0_5px_18px_rgba(15,23,42,0.045)]
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.04]
                  focus:outline-none
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-[#229ED9]"
                  aria-hidden="true"
                >
                  <path d="M21.94 3.1c.27-1.12-.43-1.56-1.4-1.2L2.44 8.85c-1.06.41-1.05.98-.18 1.23l4.62 1.44 1.77 5.52c.22.61.11.86.74.86.49 0 .7-.22.97-.48l2.24-2.18 4.66 3.44c.86.47 1.48.23 1.69-.8L21.94 3.1ZM8.04 11.2l10.13-6.39c.5-.3.96-.14.58.18l-8.2 7.4-.32 3.48-1.77 3.48-1.77-5.52c-.13-.41-.26-.48-.42-.55Z" />
                </svg>
              </a>

              <a
                href="mailto:lynisbadar838@outlook.com"
                aria-label="Email"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#0F172A]/[0.09]
                  bg-white
                  text-[#4169E1]
                  shadow-[0_5px_18px_rgba(15,23,42,0.045)]
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                  hover:scale-[1.04]
                  focus:outline-none
                "
              >
                <Mail size={17} strokeWidth={1.55} />
              </a>
            </div>

            <p
              className="
                mt-3
                text-[8px]
                font-medium
                uppercase
                tracking-[0.19em]
                text-[#A0AEC0]
              "
            >
              Connect professionally
            </p>
          </div>

          <div>
            <h3
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#64748B]
              "
            >
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {navigation.map((item) =>
                item.label === "Insights" ? (
                  <a
                    key={item.label}
                    href="/insights"
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-1.5
                      text-[12px]
                      font-medium
                      text-[#475569]
                      transition-colors
                      duration-300
                      hover:text-[#111827]
                    "
                  >
                    {item.label}

                    <ArrowUpRight
                      size={11}
                      strokeWidth={1.5}
                      className="
                        -translate-x-1
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    />
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-1.5
                      text-[12px]
                      font-medium
                      text-[#475569]
                      transition-colors
                      duration-300
                      hover:text-[#111827]
                    "
                  >
                    {item.label}

                    <ArrowUpRight
                      size={11}
                      strokeWidth={1.5}
                      className="
                        -translate-x-1
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <h3
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#64748B]
              "
            >
              Focus
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="
                    w-fit
                    text-[12px]
                    font-medium
                    text-[#475569]
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#64748B]
              "
            >
              Contact
            </h3>

            <div className="mt-5 flex flex-col gap-4">
              <a
                href="mailto:lynisbadar838@outlook.com"
                className="
                  group
                  flex
                  w-fit
                  flex-col
                  gap-1
                  text-[12px]
                  font-medium
                  text-[#334155]
                "
              >
                <span className="transition-colors duration-300 group-hover:text-[#4169E1]">
                  lynisbadar838@outlook.com
                </span>

                <span
                  className="
                    h-px
                    w-0
                    bg-[#4169E1]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>

              <a
                href="https://t.me/bderr_04"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-fit
                  text-[11px]
                  font-medium
                  text-[#64748B]
                  transition-colors
                  duration-300
                  hover:text-[#229ED9]
                "
              >
                @bderr_04
              </a>

              <a
                href="https://wa.me/971559466820"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-fit
                  text-[11px]
                  font-medium
                  text-[#64748B]
                  transition-colors
                  duration-300
                  hover:text-[#25D366]
                "
              >
                +971 55 946 6820
              </a>

              <span
                className="
                  max-w-[190px]
                  text-[11px]
                  leading-5
                  text-[#94A3B8]
                "
              >
                Strategic opportunities,
                <br />
                partnerships &amp; ventures.
              </span>
            </div>
          </div>
        </div>

        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-[#0F172A]/[0.08]
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-[#94A3B8]
            "
          >
            © {new Date().getFullYear()} BADAR UL HAQ
          </span>

          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#A0AEC0]
            "
          >
            Leadership · Technology · Business · Ventures
          </span>
        </div>
      </div>
    </footer>
  );
}