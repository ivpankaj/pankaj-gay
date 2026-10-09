import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pankaj.gay"),
  title: "Pankaj Verma (ivpankaj) | Official Social Media & Links",
  description:
    "Official single-page social media hub and portfolio for Pankaj Verma (@ivpankaj). Connect across GitHub, X, Instagram, LinkedIn, Discord, and more.",
  keywords: [
    "Pankaj Verma",
    "ivpankaj",
    "pankaj.gay",
    "Pankaj Verma links",
    "Pankaj Verma social media",
    "ivpankaj portfolio",
    "ivpankaj social",
    "ivpankaj github",
    "ivpankaj twitter",
    "ivpankaj instagram",
    "ivpankaj linkedin",
    "ivpankaj online",
    "developer portfolio",
  ],
  authors: [{ name: "Pankaj Verma", url: "https://pankaj.gay" }],
  creator: "Pankaj Verma (ivpankaj)",
  publisher: "Pankaj Verma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://pankaj.gay",
  },
  openGraph: {
    type: "profile",
    title: "Pankaj Verma (ivpankaj) | Official Links",
    description:
      "Explore official links, channels, and social media hubs for Pankaj Verma (ivpankaj).",
    url: "https://pankaj.gay",
    siteName: "pankaj.gay",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Pankaj Verma (ivpankaj) | Official Links",
    description:
      "Explore official links and social media hubs for Pankaj Verma (@ivpankaj).",
    creator: "@ivpankaj",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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