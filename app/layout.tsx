
import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://badarulhaq-portfolio.vercel.app";

const siteDescription =
  "Official professional portfolio of Badar Ul Haq — cybersecurity professional, business leader and Founder & CEO, sharing his expertise, experience and ventures.";

// Use favicon/logo instead of CEO photo for link previews
const ogImage = `${siteUrl}/icon.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Badar Ul Haq | Founder & CEO",
    template: "%s | Badar Ul Haq",
  },

  description: siteDescription,

  keywords: [
    "Badar Ul Haq",
    "Founder & CEO",
    "Cyber Security",
    "Artificial Intelligence",
    "Digital Analytics",
    "Digital Marketing",
    "Business Leader",
    "Entrepreneur Portfolio",
  ],

  authors: [
    {
      name: "Badar Ul Haq",
    },
  ],

  creator: "Badar Ul Haq",

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Badar Ul Haq",
    title: "Badar Ul Haq | Founder & CEO",
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 512,
        height: 512,
        alt: "Badar Ul Haq — BUH",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Badar Ul Haq | Founder & CEO",
    description: siteDescription,
    images: [ogImage],
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#081722",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Badar Ul Haq",
    jobTitle: "Founder & CEO",
    url: siteUrl,
    image: ogImage,
    description: siteDescription,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteUrl,
    },

    knowsAbout: [
      "Cyber Security",
      "Artificial Intelligence",
      "Digital Analytics",
      "Digital Marketing",
      "Real Estate",
      "International Trading",
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
