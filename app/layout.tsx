import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const nevera = localFont({
  src: "../public/fonts/Nevera-Regular.otf",
  variable: "--font-nevera",
  display: "swap",
  weight: "400",
});

const glitchGoblin = localFont({
  src: "../public/fonts/GlitchGoblin-2O87v.ttf",
  variable: "--font-glitch",
  display: "swap",
  weight: "400",
});

const hydrogen = localFont({
  src: "../public/fonts/hydrogen.ttf",
  variable: "--font-hydrogen",
  display: "swap",
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://teepin.com";
const siteName = "Teepin";
const siteTitle = "Teepin | Cloud and AI Infrastructure Without the Lock-In";
const siteDescription =
  "Teepin builds cloud and AI services on portable storage and idle compute — inference, storage, databases and networking at a fraction of hyperscaler cost. Your data stays yours, and stays movable.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Teepin",
    "cloud infrastructure",
    "AI infrastructure",
    "AI inference",
    "egress costs",
    "vendor lock-in",
    "Shelby storage",
    "portable storage",
    "trusted execution",
    "enterprise cloud",
    "cost-efficient AI",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  alternates: {
    canonical: "/",
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
  icons: {
    icon: [{ url: "/teepin-mark.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/teepin-mark.svg", type: "image/svg+xml" }],
    apple: [{ url: "/teepin-mark.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/teepin-wordmark.svg",
        width: 744,
        height: 120,
        alt: "Teepin logo",
        type: "image/svg+xml",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/teepin-wordmark.svg"],
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/teepin-wordmark.svg`,
      description: siteDescription,
      foundingDate: "2025",
      email: "contact@teepin.com",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#teepin-inference`,
      name: "Teepin Inference",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web, API",
      description:
        "Run and fine-tune open models through one API, on portable storage and idle compute, inside trusted execution environments.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      url: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nevera.variable} ${glitchGoblin.variable} ${hydrogen.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="min-h-full bg-paper text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
