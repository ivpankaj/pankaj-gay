import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["700", "800"],
});

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
      "Pankaj Verma (ivpankaj) — Software Developer & Technology Portfolio",
    template: `%s | Pankaj Verma (ivpankaj)`,
  },
  description:
    "Official website of Pankaj Verma (known online as ivpankaj) — Software developer and full-stack engineer in Noida, Greater Noida, and Delhi NCR, India. Explore verified projects, technical skills, engineering articles, and official profiles.",
  applicationName: "Pankaj Verma (ivpankaj)",
  authors: [{ name: "Pankaj Verma", url: siteConfig.url }],
  creator: "Pankaj Verma (ivpankaj)",
  publisher: "Pankaj Verma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    // Tier 1 — Primary personal identity
    "Pankaj Verma",
    "Pankaj Verma portfolio",
    "Pankaj Verma developer",
    "Pankaj Verma personal website",
    "Pankaj Verma official website",
    "Pankaj Verma projects",
    "Pankaj Verma GitHub",
    "Pankaj Verma technology",

    // Tier 2 — First-name identity
    "Pankaj",
    "Pankaj developer",
    "Pankaj software developer",
    "Pankaj portfolio",
    "Pankaj technology",
    "Pankaj projects",
    "Pankaj coding",
    "Pankaj programmer",

    // Tier 3 — Global username
    "ivpankaj",
    "ivpankaj portfolio",
    "ivpankaj developer",
    "ivpankaj GitHub",
    "ivpankaj projects",
    "ivpankaj technology",
    "ivpankaj website",

    // Tier 4 — Full name plus technology
    "Pankaj Verma software developer",
    "Pankaj Verma web developer",
    "Pankaj Verma full-stack developer",
    "Pankaj Verma Next.js developer",
    "Pankaj Verma React developer",
    "Pankaj Verma JavaScript developer",
    "Pankaj Verma TypeScript developer",
    "Pankaj Verma Node.js developer",
    "Pankaj Verma software engineer",
    "Pankaj Verma developer portfolio",
    "Pankaj Verma GitHub projects",

    // Tier 5 — Username plus technology
    "ivpankaj developer",
    "ivpankaj Next.js",
    "ivpankaj React",
    "ivpankaj JavaScript",
    "ivpankaj TypeScript",
    "ivpankaj Node.js",
    "ivpankaj full-stack developer",
    "ivpankaj software engineer",
    "ivpankaj GitHub projects",
    "ivpankaj web development",

    // Tier 6 — Professional discovery & location
    "Developer portfolio",
    "Full-stack developer portfolio",
    "Next.js developer portfolio",
    "Software engineering projects",
    "Web application development",
    "Open-source projects",
    "Technical blog",
    "Software development case studies",
    "Software developer in Noida",
    "Software developer in Greater Noida",
    "Software developer in Delhi NCR",
    "pankaj.gay",
    "www.pankaj.gay",
    "https://www.pankaj.gay",
    "https://pankaj.gay",
    "pankaj.life",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title:
      "Pankaj Verma (ivpankaj) — Software Developer & Technology Portfolio",
    description:
      "Official website of Pankaj Verma (ivpankaj) — Software developer and full-stack engineer in Noida, Greater Noida, and Delhi NCR. Verified projects and profiles.",
    siteName: "Pankaj Verma (ivpankaj)",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pankaj Verma (ivpankaj) — Software Developer & Technology Portfolio",
    description:
      "Software developer in Noida & Delhi NCR. Verified projects, technical stack, and official directory for Pankaj Verma (ivpankaj).",
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${syne.variable} font-sans`}
    >
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
      </head>
      <body className="bg-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}