import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Pankaj Verma (ivpankaj) — Software Developer in Noida & Delhi NCR | Official Website",
    template: `%s | Pankaj Verma (ivpankaj)`,
  },
  description:
    "Official website of Pankaj Verma (ivpankaj) — Software developer and tech person based in Noida, Greater Noida, Delhi, and Delhi NCR. Explore verified profiles on GitHub, X, LinkedIn, and developer portfolio.",
  applicationName: "Pankaj Verma (ivpankaj)",
  authors: [{ name: "Pankaj Verma (ivpankaj)", url: siteConfig.url }],
  creator: "Pankaj Verma (ivpankaj)",
  publisher: "Pankaj Verma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    "Pankaj",
    "Pankaj Verma",
    "ivpankaj",
    "@ivpankaj",
    "software and tech person",
    "tech person",
    "software developer",
    "Software Developer at Noida",
    "Software Developer in Noida",
    "Software Developer Greater Noida",
    "Software Developer in Greater Noida",
    "Software Developer Delhi",
    "Software Developer in Delhi",
    "Software Developer Delhi NCR",
    "Software Developer in Delhi NCR",
    "Pankaj Verma Noida",
    "Pankaj Verma Greater Noida",
    "Pankaj Verma Delhi NCR",
    "Pankaj Verma Software Developer",
    "ivpankaj software developer",
    "ivpankaj Noida",
    "ivpankaj Delhi",
    "ivpankaj Delhi NCR",
    "ivpankaj official website",
    "ivpankaj github",
    "ivpankaj twitter",
    "ivpankaj linkedin",
    "ivpankaj instagram",
    "ivpankaj online",
    "pankaj.gay",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title:
      "Pankaj Verma (ivpankaj) — Software Developer in Noida & Delhi NCR",
    description:
      "Official website of Pankaj Verma (ivpankaj) — Software developer and tech person based in Noida, Greater Noida, and Delhi NCR.",
    siteName: "Pankaj Verma (ivpankaj)",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pankaj Verma (ivpankaj) — Software Developer in Noida & Delhi NCR",
    description:
      "Software developer and tech person in Noida, Greater Noida, Delhi NCR. Verified profiles for Pankaj Verma (ivpankaj).",
    creator: "@ivpankaj",
    site: "@ivpankaj",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: siteConfig.verification.google || undefined,
    other: {
      ...(siteConfig.verification.bing
        ? { "msvalidate.01": siteConfig.verification.bing }
        : {}),
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-61YH1S6XCW"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-61YH1S6XCW');
`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}