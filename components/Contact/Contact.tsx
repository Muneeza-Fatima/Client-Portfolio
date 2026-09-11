"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const countries = [
  { name: "United Arab Emirates", code: "AE", dialCode: "+971" },
  { name: "Saudi Arabia", code: "SA", dialCode: "+966" },
  { name: "United Kingdom", code: "GB", dialCode: "+44" },
  { name: "United States", code: "US", dialCode: "+1" },
  { name: "Pakistan", code: "PK", dialCode: "+92" },
  { name: "Germany", code: "DE", dialCode: "+49" },
  { name: "France", code: "FR", dialCode: "+33" },
  { name: "Estonia", code: "EE", dialCode: "+372" },
  { name: "Denmark", code: "DK", dialCode: "+45" },
  { name: "Ukraine", code: "UA", dialCode: "+380" },
  { name: "Other", code: "OT", dialCode: "" },
];

const reasons = [
  "Business Opportunity",
  "Strategic Partnership",
  "Investment / Venture",
  "Professional Collaboration",
  "General Inquiry",
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/badarulhaq838/",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/971559466820",
  },
  {
    label: "Telegram",
    href: "https://t.me/bderr_04",
  },
];

const inputClass = `
  h-11
  w-full
  rounded-[13px]
  border
  border-[#D8D8D2]/70
  bg-[#F7F5EF]
  px-[17px]
  font-sans
  text-[12px]
  font-medium
  text-[#173247]
  outline-none
  placeholder:text-[#7A858A]
  transition-[border-color,background-color,box-shadow]
  duration-200
  hover:border-[#BFCACD]
  focus:border-[#55CDE8]
  focus:bg-[#FFFEFB]
  focus:shadow-[0_0_0_3px_rgba(85,205,232,0.10)]
`;

function CountryFlag({
  code,
  size = 20,
}: {
  code: string;
  size?: number;
}) {
  if (code === "OT") {
    return (
      <span
        className="flex shrink-0 items-center justify-center rounded-[3px] bg-[#E8E8E3] text-[#657780]"
        style={{
          width: `${size}px`,
          height: `${Math.round(size * 0.7)}px`,
        }}
        aria-hidden="true"
      >
        <Globe
          size={Math.round(size * 0.72)}
          strokeWidth={1.6}
        />
      </span>
    );
  }

  return (
    <span
      className="flex shrink-0 items-center justify-center overflow-hidden rounded-[3px] bg-[#E8E8E3]"
      style={{
        width: `${size}px`,
        height: `${Math.round(size * 0.7)}px`,
      }}
    >
      <span
        aria-hidden="true"
        className="block h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(https://flagcdn.com/${code.toLowerCase()}.svg)`,
        }}
      />
    </span>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[17px] w-[17px]"
      aria-hidden="true"
    >
      <path
        fill="#0A66C2"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path
        fill="#25D366"
        d="M17.47 14.33c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.76.94-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.71-.7 1.95-1.38.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.35ZM12.02 2a9.98 9.98 0 0 0-8.56 15.11L2 22l5.03-1.32A10 10 0 1 0 12.02 2Zm0 18.17c-1.6 0-3.17-.43-4.53-1.25l-.32-.19-2.99.78.8-2.91-.21-.32a8.16 8.16 0 1 1 7.25 3.89Z"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path
        fill="#229ED9"
        d="M21.92 3.05 18.6 20.6c-.25 1.24-.91 1.55-1.84.97l-5.1-3.76-2.46 2.37c-.27.27-.5.5-1.03.5l.37-5.19 9.45-8.54c.41-.37-.09-.57-.64-.2L5.67 13.9.63 12.32c-1.1-.35-1.12-1.1.23-1.63L20.57 2.98c.91-.34 1.71.22 1.35.07Z"
      />
    </svg>
  );
}

export default function ContactPage() {
  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<
    (typeof countries)[number] | null
  >(null);

  const [reasonOpen, setReasonOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [countryError, setCountryError] = useState("");
  const [reasonError, setReasonError] = useState("");

  const countryRef = useRef<HTMLDivElement>(null);
  const reasonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (
        countryRef.current &&
        !countryRef.current.contains(target)
      ) {
        setCountryOpen(false);
      }

      if (
        reasonRef.current &&
        !reasonRef.current.contains(target)
      ) {
        setReasonOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setCountryOpen(false);
        setReasonOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  function handleCountrySelect(
    country: (typeof countries)[number],
  ) {
    setSelectedCountry(country);
    setCountryOpen(false);
    setCountryError("");
    setSubmitError("");
  }

  function handleReasonSelect(reason: string) {
    setSelectedReason(reason);
    setReasonOpen(false);
    setReasonError("");
    setSubmitError("");
  }

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault();

    if (submitting) return;

    let hasError = false;

    if (!selectedCountry) {
      setCountryError("Please select your country.");
      hasError = true;
    }

    if (!selectedReason) {
      setReasonError("Please select a reason for contact.");
      hasError = true;
    }

    if (hasError || !selectedCountry) return;

    setSubmitError("");
    setSubmitting(true);

    const controller = new AbortController();

    const timeoutId = window.setTimeout(() => {
      controller.abort();
    }, 12000);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      formData.append("country", selectedCountry.name);
      formData.append(
        "country_code",
        selectedCountry.code,
      );
      formData.append(
        "phone_full",
        `${selectedCountry.dialCode} ${String(
          formData.get("phone") ?? "",
        ).trim()}`,
      );
      formData.append("reason", selectedReason);

      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error(
          "Web3Forms is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local and restart the dev server.",
        );
      }

      formData.append("access_key", accessKey);
      formData.append(
        "subject",
        `New Website Inquiry — ${selectedReason || "General Inquiry"}`,
      );
      formData.append("from_name", "Badar Ul Haq Website");
      formData.append("replyto", String(formData.get("email") ?? ""));
      formData.append("botcheck", "");

      const payload = Object.fromEntries(formData.entries());

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        },
      );

      const rawResponse = await response.text();

      let result: {
        success?: boolean;
        message?: string;
      } = {};

      try {
        result = JSON.parse(rawResponse);
      } catch {
        console.error("Web3Forms raw response:", rawResponse);
        throw new Error(
          "Web3Forms returned an invalid response. Please try again.",
        );
      }

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Something went wrong while sending your inquiry.",
        );
      }

      setSubmitted(true);
      setSubmitError("");

      form.reset();
      setSelectedCountry(null);
      setSelectedReason("");
      setCountryError("");
      setReasonError("");

      window.setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error(
        "Contact form submission error:",
        error,
      );

      setSubmitted(false);

      if (
        error instanceof DOMException &&
        error.name === "AbortError"
      ) {
        setSubmitError(
          "The request took too long. Please check your connection and try again.",
        );
      } else {
        setSubmitError(
          error instanceof Error
            ? error.message
            : "Unable to send your inquiry. Please try again.",
        );
      }
    } finally {
      window.clearTimeout(timeoutId);
      setSubmitting(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#061A2A] text-[#F4F7F9]">
      {/* PREMIUM STATIC BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(54,145,185,0.055),transparent_32%),radial-gradient(circle_at_90%_25%,rgba(45,77,180,0.025),transparent_29%),radial-gradient(circle_at_5%_62%,rgba(18,122,137,0.022),transparent_28%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(190,220,235,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(190,220,235,0.7)_1px,transparent_1px)] bg-[size:92px_92px] opacity-[0.006] [mask-image:linear-gradient(to_bottom,black_0%,black_52%,transparent_100%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_14%,rgba(91,143,180,0.008)_42%,transparent_68%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,transparent_0%,rgba(5,20,34,0.12)_42%,rgba(3,13,24,0.76)_100%)]" />

        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#051726] via-[#081D2D]/80 to-transparent" />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-36 xl:px-12">
        {/* SECTION LABEL */}

        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-[#64748B]/60 via-[#6F89D8]/50 to-[#9AAEFF]/40 sm:w-10" />

          <span className="text-[9px] font-medium uppercase tracking-[0.34em] text-[#AAB8C3] sm:text-[10px]">
            Start a Conversation
          </span>

          <span className="h-1 w-1 rounded-full bg-[#79DDF0]/55 shadow-[0_0_7px_rgba(121,221,240,0.40)]" />
        </div>

        {/* HERO */}

        <div className="relative mt-7 max-w-[1080px] sm:mt-8">
          <h1 className="relative font-serif text-[clamp(2.7rem,5.5vw,5.6rem)] font-normal leading-[0.98] tracking-[-0.055em]">
            <span className="block text-[#F8FAFC]">
              Let&apos;s build
            </span>

            <span className="mt-0.5 block bg-gradient-to-r from-[#8DEBFF] via-[#42D5F5] to-[#168BD1] bg-clip-text pb-2 text-transparent sm:mt-4">
              something meaningful.
            </span>
          </h1>

          <p className="mt-7 max-w-[690px] text-[14px] leading-[1.85] text-[#94A7B1] sm:mt-8 sm:text-[15px] lg:text-[16px]">
            Strategic opportunities, new ventures, and meaningful
            collaborations often begin with one thoughtful conversation.
          </p>
        </div>

        {/* MAIN GRID */}

        <div className="mt-9 grid gap-5 sm:mt-10 lg:mt-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-6">
          {/* DIRECT CONTACT CARD */}

          <div className="group relative overflow-hidden rounded-[24px] border border-[#78DFF2]/[0.13] bg-[#0F3046]/[0.985] p-5 font-sans text-[#F4F7F9] shadow-[0_18px_42px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.045)] transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#72DDF2]/[0.20] hover:bg-[#12374D]/[0.99] sm:p-5 lg:p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.018),transparent_40%,rgba(66,213,245,0.010)_100%)]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[7%] right-[7%] top-0 h-px bg-gradient-to-r from-transparent via-[#72DDF2]/[0.22] to-transparent"
            />

            <div className="relative z-10">
              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#A9C0CA] sm:text-[10px]">
                Direct Contact
              </span>

              <h2 className="mt-3 font-sans text-[1.9rem] font-semibold leading-[1.05] tracking-[-0.045em] text-[#F8FAFC] sm:text-[2.2rem]">
                Let&apos;s talk
                <span className="text-[#79DDF0]">.</span>
              </h2>

              <div className="mt-6 space-y-4">
                <a
                  href="mailto:lynisbadar838@outlook.com"
                  className="group/item flex items-center gap-4 rounded-[15px] border border-white/[0.065] bg-[#0B273A]/[0.78] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition-[border-color,background-color] duration-200 hover:border-[#72DDF2]/[0.17] hover:bg-[#0D2E43]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-[#79DDF0]/[0.14] bg-[#79DDF0]/[0.05] text-[#79DDF0]">
                    <Mail size={14} strokeWidth={1.45} />
                  </span>

                  <span className="min-w-0">
                    <span className="block truncate text-[12px] font-medium text-[#EAF4F7]">
                      lynisbadar838@outlook.com
                    </span>

                    <span className="mt-1 block text-[8px] uppercase tracking-[0.15em] text-[#718A96]">
                      Email
                    </span>
                  </span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="ml-auto shrink-0 text-[#8CA4AF] transition-colors duration-200 group-hover/item:text-[#79DDF0]"
                  />
                </a>

                <div className="flex items-center gap-4 rounded-[15px] border border-white/[0.065] bg-[#0B273A]/[0.78] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-[#7C9BFF]/[0.14] bg-[#7C9BFF]/[0.05] text-[#9DB2FF]">
                    <MapPin size={14} strokeWidth={1.45} />
                  </span>

                  <span>
                    <span className="block text-[12px] font-medium text-[#EAF4F7]">
                      Dubai, United Arab Emirates
                    </span>

                    <span className="mt-1 block text-[8px] uppercase tracking-[0.15em] text-[#718A96]">
                      Based in
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-7 border-t border-white/[0.065] pt-5">
                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8EA8B4]">
                  Professional Focus
                </span>

                <p className="mt-2 font-sans text-[12px] font-medium leading-[1.65] text-[#E8F2F5] sm:text-[13px]">
                  CEO &amp; Business Leader
                </p>

                <div className="mt-3.5 flex flex-wrap gap-2">
                  {[
                    "Business Development",
                    "Strategic Partnerships",
                    "Real Estate",
                    "Cyber Security",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.065] bg-[#0B273A]/[0.78] px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.10em] text-[#AEC0C8] transition-colors duration-200 hover:border-[#79DDF0]/[0.16] hover:bg-[#79DDF0]/[0.035] hover:text-[#C8F5FC] sm:text-[9px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 border-t border-white/[0.065] pt-5">
                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8EA8B4]">
                  Connect
                </span>

                <div className="mt-3.5 flex items-center gap-3">
                  <Link
                    href={socials[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="group/social flex h-[36px] w-[36px] items-center justify-center rounded-[11px] border border-white/[0.075] bg-[#0B273A]/[0.78] transition-[border-color,background-color] duration-200 hover:border-[#0A66C2]/[0.34] hover:bg-[#0A66C2]/[0.08]"
                  >
                    <LinkedInIcon />
                  </Link>

                  <Link
                    href={socials[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="group/social flex h-[36px] w-[36px] items-center justify-center rounded-[11px] border border-white/[0.075] bg-[#0B273A]/[0.78] transition-[border-color,background-color] duration-200 hover:border-[#25D366]/[0.34] hover:bg-[#25D366]/[0.08]"
                  >
                    <WhatsAppIcon />
                  </Link>

                  <Link
                    href={socials[2].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="group/social flex h-[36px] w-[36px] items-center justify-center rounded-[11px] border border-white/[0.075] bg-[#0B273A]/[0.78] transition-[border-color,background-color] duration-200 hover:border-[#229ED9]/[0.34] hover:bg-[#229ED9]/[0.08]"
                  >
                    <TelegramIcon />
                  </Link>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-[7%] right-[7%] h-px bg-gradient-to-r from-transparent via-[#6FB6CA]/[0.13] to-transparent"
            />
          </div>

          {/* PRIVATE INQUIRY CARD */}

          <div className="group relative overflow-visible rounded-[24px] border border-[#78DFF2]/[0.13] bg-[#0F3046]/[0.985] p-5 font-sans text-[#F4F7F9] shadow-[0_18px_42px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.045)] transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#72DDF2]/[0.20] hover:bg-[#12374D]/[0.99] sm:p-5 lg:p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 rounded-[24px] bg-[linear-gradient(135deg,rgba(255,255,255,0.018),transparent_40%,rgba(66,213,245,0.010)_100%)]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[6%] right-[6%] top-0 h-px bg-gradient-to-r from-transparent via-[#55D1EA]/[0.24] to-transparent"
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#A9C0CA] sm:text-[10px]">
                    Private Inquiry
                  </span>

                  <h2 className="mt-3 font-sans text-[1.9rem] font-semibold leading-[1.05] tracking-[-0.045em] text-[#F8FAFC] sm:text-[2.2rem]">
                    Tell me about
                    <span className="text-[#79DDF0]"> it.</span>
                  </h2>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
              >
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </div>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company or organization"
                  className={inputClass}
                />

                <div className="flex h-11 w-full overflow-hidden rounded-[13px] border border-[#D8D8D2]/70 bg-[#F7F5EF] transition-[border-color,background-color,box-shadow] duration-200 hover:border-[#BFCACD] focus-within:border-[#55CDE8] focus-within:bg-[#FFFEFB] focus-within:shadow-[0_0_0_3px_rgba(85,205,232,0.10)]">
                  <div className="flex shrink-0 items-center gap-2 border-r border-[#D8D8D2]/70 px-3.5 text-[12px] font-medium text-[#173247]">
                    {selectedCountry ? (
                      <>
                        <CountryFlag
                          code={selectedCountry.code}
                          size={19}
                        />
                        <span>{selectedCountry.dialCode}</span>
                      </>
                    ) : (
                      <span className="text-[#7A858A]">+ Code</span>
                    )}
                  </div>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder={
                      selectedCountry
                        ? "Phone number"
                        : "Select country first"
                    }
                    className="h-full min-w-0 flex-1 bg-transparent px-[14px] font-sans text-[12px] font-medium text-[#173247] outline-none placeholder:text-[#7A858A]"
                  />
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div
                    ref={countryRef}
                    className="relative"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setCountryOpen((value) => !value);
                        setReasonOpen(false);
                      }}
                      className={`flex h-11 w-full items-center gap-3 rounded-[13px] border bg-[#F7F5EF] px-[17px] font-sans text-left outline-none transition-[border-color,background-color,box-shadow] duration-200 ${
                        countryError
                          ? "border-[#F87171]/70"
                          : "border-[#D8D8D2]/70 hover:border-[#BFCACD]"
                      } ${
                        countryOpen
                          ? "border-[#55CDE8] bg-[#FFFEFB] shadow-[0_0_0_3px_rgba(85,205,232,0.10)]"
                          : ""
                      }`}
                    >
                      {selectedCountry ? (
                        <>
                          <CountryFlag
                            code={selectedCountry.code}
                            size={21}
                          />

                          <span className="truncate text-[12px] font-medium text-[#173247]">
                            {selectedCountry.name}
                          </span>
                        </>
                      ) : (
                        <span className="text-[12px] font-medium text-[#7A858A]">
                          Select country
                        </span>
                      )}

                      <ChevronDown
                        size={15}
                        strokeWidth={1.5}
                        className={`ml-auto shrink-0 text-[#657780] transition-transform duration-150 ${
                          countryOpen
                            ? "rotate-180 text-[#168BD1]"
                            : ""
                        }`}
                      />
                    </button>

                    {countryError && (
                      <p className="mt-1.5 font-sans text-[9px] text-[#FF8A8A]">
                        {countryError}
                      </p>
                    )}

                    {countryOpen && (
                      <div className="absolute left-0 right-0 top-[50px] z-50 max-h-[230px] overflow-y-auto rounded-[15px] border border-[#345263] bg-[#0C2535] p-1.5 font-sans shadow-[0_18px_40px_rgba(0,0,0,0.38)]">
                        {countries.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() =>
                              handleCountrySelect(country)
                            }
                            className="flex w-full items-center gap-3 rounded-[10px] px-3 py-2.5 text-left transition-colors duration-150 hover:bg-[#15394D]"
                          >
                            <CountryFlag
                              code={country.code}
                              size={20}
                            />

                            <span className="text-[11px] font-medium text-[#E5F0F4]">
                              {country.name}
                            </span>

                            {selectedCountry?.code ===
                              country.code && (
                              <Check
                                size={13}
                                className="ml-auto text-[#58D6F1]"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div
                    ref={reasonRef}
                    className="relative"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setReasonOpen((value) => !value);
                        setCountryOpen(false);
                      }}
                      className={`flex h-11 w-full items-center gap-3 rounded-[13px] border bg-[#F7F5EF] px-[17px] font-sans text-left outline-none transition-[border-color,background-color,box-shadow] duration-200 ${
                        reasonError
                          ? "border-[#F87171]/70"
                          : "border-[#D8D8D2]/70 hover:border-[#BFCACD]"
                      } ${
                        reasonOpen
                          ? "border-[#55CDE8] bg-[#FFFEFB] shadow-[0_0_0_3px_rgba(85,205,232,0.10)]"
                          : ""
                      }`}
                    >
                      <span
                        className={`truncate text-[12px] font-medium ${
                          selectedReason
                            ? "text-[#173247]"
                            : "text-[#7A858A]"
                        }`}
                      >
                        {selectedReason || "Select reason"}
                      </span>

                      <ChevronDown
                        size={15}
                        strokeWidth={1.5}
                        className={`ml-auto shrink-0 text-[#657780] transition-transform duration-150 ${
                          reasonOpen
                            ? "rotate-180 text-[#168BD1]"
                            : ""
                        }`}
                      />
                    </button>

                    {reasonError && (
                      <p className="mt-1.5 font-sans text-[9px] text-[#FF8A8A]">
                        {reasonError}
                      </p>
                    )}

                    {reasonOpen && (
                      <div className="absolute left-0 right-0 top-[50px] z-50 rounded-[15px] border border-[#345263] bg-[#0C2535] p-1.5 font-sans shadow-[0_18px_40px_rgba(0,0,0,0.38)]">
                        {reasons.map((reason) => (
                          <button
                            key={reason}
                            type="button"
                            onClick={() =>
                              handleReasonSelect(reason)
                            }
                            className="flex w-full items-center rounded-[10px] px-3 py-2.5 text-left text-[11px] font-medium text-[#E5F0F4] transition-colors duration-150 hover:bg-[#15394D]"
                          >
                            {reason}

                            {selectedReason === reason && (
                              <Check
                                size={13}
                                className="ml-auto text-[#58D6F1]"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me a little about your opportunity or idea..."
                  className="min-h-[145px] w-full resize-none rounded-[13px] border border-[#D8D8D2]/70 bg-[#F7F5EF] px-[17px] py-3.5 font-sans text-[12px] font-medium leading-[1.65] text-[#173247] outline-none placeholder:text-[#7A858A] transition-[border-color,background-color,box-shadow] duration-200 hover:border-[#BFCACD] focus:border-[#55CDE8] focus:bg-[#FFFEFB] focus:shadow-[0_0_0_3px_rgba(85,205,232,0.10)]"
                />

                <div className="flex flex-col gap-3.5 border-t border-white/[0.06] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-[330px]">
                    <p className="font-sans text-[9px] leading-[1.6] text-[#8EA8B4]">
                      Your information is used only to understand
                      your inquiry and continue the conversation.
                    </p>

                    {submitError && (
                      <p className="mt-2 font-sans text-[9px] leading-[1.5] text-[#FF8A8A]">
                        {submitError}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting || submitted}
                    className="group/button relative inline-flex h-[48px] shrink-0 items-center justify-center gap-3 overflow-hidden rounded-full border border-[#8DEBFF]/[0.38] bg-gradient-to-r from-[#1289AA] via-[#16A8C9] to-[#147FBE] px-7 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_22px_rgba(22,184,220,0.13),inset_0_1px_0_rgba(255,255,255,0.15)] transition-[border-color,box-shadow,background-color] duration-200 hover:border-[#A8ECF8]/[0.58] hover:shadow-[0_10px_24px_rgba(22,184,220,0.15)] active:translate-y-0 disabled:cursor-default disabled:opacity-75"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {submitted ? (
                        <>
                          <Check
                            size={14}
                            strokeWidth={1.8}
                            className="text-white"
                          />
                          Sent Successfully
                        </>
                      ) : submitting ? (
                        <>
                          <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Inquiry

                          <ArrowUpRight
                            size={14}
                            strokeWidth={1.6}
                            className="text-white"
                          />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* BOTTOM STATEMENT */}

        <div className="mt-8 border-t border-white/[0.06] pt-5 sm:mt-10 sm:pt-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[920px] font-serif text-[1.4rem] font-normal leading-[1.13] tracking-[-0.045em] text-[#F8FAFC] sm:text-[1.7rem] lg:text-[2.15rem]">
              Every meaningful opportunity starts with a
              <span className="ml-2 bg-gradient-to-r from-[#8DEBFF] via-[#42D5F5] to-[#168BD1] bg-clip-text text-transparent">
                conversation.
              </span>
            </p>

            <span className="shrink-0 text-[8px] font-medium uppercase tracking-[0.22em] text-[#607783] sm:pb-1">
              Dubai · UAE
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}