export interface SocialProfile {
  name: string;
  url: string;
  handle: string;
  category: "development" | "social" | "media" | "community" | "portfolio";
  verified: boolean;
}

export interface SiteConfig {
  name: string;
  author: string;
  alternateName: string;
  url: string;
  title: string;
  description: string;
  locale: string;
  themeColor: string;
  socials: Record<string, SocialProfile>;
  verifiedSameAs: string[];
  verification: {
    google?: string;
    bing?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Pankaj Verma",
  author: "Pankaj Verma",
  alternateName: "ivpankaj",
  url: "https://pankaj.gay",
  title: "Pankaj Verma | Official Website & Social Links",
  description:
    "Official personal website and central hub of Pankaj Verma (known online as ivpankaj). Discover verified links to his GitHub, X, LinkedIn, YouTube, Instagram, and developer portfolio.",
  locale: "en_US",
  themeColor: "#000000",
  socials: {
    github: {
      name: "GitHub",
      url: "https://github.com/ivpankaj",
      handle: "ivpankaj",
      category: "development",
      verified: true,
    },
    x: {
      name: "X (Twitter)",
      url: "https://x.com/ivpankaj",
      handle: "@ivpankaj",
      category: "social",
      verified: true,
    },
    instagram: {
      name: "Instagram",
      url: "https://instagram.com/ivpankaj",
      handle: "@ivpankaj",
      category: "social",
      verified: true,
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ivpankaj",
      handle: "Pankaj Verma",
      category: "social",
      verified: true,
    },
    youtube: {
      name: "YouTube",
      url: "https://youtube.com/@ivpankaj",
      handle: "@ivpankaj",
      category: "media",
      verified: true,
    },
    discord: {
      name: "Discord",
      url: "https://discord.com/users/ivpankaj",
      handle: "ivpankaj",
      category: "community",
      verified: true,
    },
    telegram: {
      name: "Telegram",
      url: "https://t.me/ivpankaj",
      handle: "@ivpankaj",
      category: "community",
      verified: true,
    },
    threads: {
      name: "Threads",
      url: "https://threads.net/@ivpankaj",
      handle: "@ivpankaj",
      category: "social",
      verified: true,
    },
    spotify: {
      name: "Spotify",
      url: "https://open.spotify.com/user/ivpankaj",
      handle: "ivpankaj",
      category: "media",
      verified: true,
    },
    chess: {
      name: "Chess.com",
      url: "https://chess.com/member/ivpankaj",
      handle: "ivpankaj",
      category: "community",
      verified: true,
    },
    reddit: {
      name: "Reddit",
      url: "https://reddit.com/user/ivpankaj",
      handle: "u/ivpankaj",
      category: "community",
      verified: true,
    },
    whatsapp: {
      name: "WhatsApp",
      url: "https://wa.me/?text=https%3A%2F%2Fpankaj.gay",
      handle: "Pankaj Verma",
      category: "social",
      verified: true,
    },
    portfolio: {
      name: "Developer Portfolio",
      url: "https://ivpankaj.online",
      handle: "ivpankaj.online",
      category: "portfolio",
      verified: true,
    },
  },
  verifiedSameAs: [
    "https://github.com/ivpankaj",
    "https://x.com/ivpankaj",
    "https://instagram.com/ivpankaj",
    "https://linkedin.com/in/ivpankaj",
    "https://youtube.com/@ivpankaj",
    "https://discord.com/users/ivpankaj",
    "https://t.me/ivpankaj",
    "https://threads.net/@ivpankaj",
    "https://open.spotify.com/user/ivpankaj",
    "https://chess.com/member/ivpankaj",
    "https://reddit.com/user/ivpankaj",
    "https://ivpankaj.online",
  ],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
  },
};
