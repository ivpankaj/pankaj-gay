"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Share2,
  QrCode,
  Search,
  ExternalLink,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Sparkles,
} from "lucide-react";
import {
  GithubIcon,
  XIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
  DiscordIcon,
  TelegramIcon,
  ThreadsIcon,
  ChessIcon,
  RedditIcon,
  SpotifyIcon,
  WebsiteIcon,
  OnlyFansIcon,
  LeetCodeIcon,
  FacebookIcon,
  SnapchatIcon,
  GmailIcon,
} from "./Icons";
import { ShareModal } from "./ShareModal";
import { SearchModal } from "./SearchModal";

interface AccountProfile {
  handle: string;
  url: string;
  ariaLabel: string;
  isComingSoon?: boolean;
}

interface SocialMediaSlide {
  id: string;
  index: string;
  name: string;
  isWelcome?: boolean;
  brandIcon?: React.ReactNode;
  brandColor?: string;
  profiles: AccountProfile[];
}

const ALL_SLIDES: SocialMediaSlide[] = [
  // First Face: Write only WELCOME
  {
    id: "welcome",
    index: "00",
    name: "WELCOME",
    isWelcome: true,
    profiles: [],
  },
  {
    id: "instagram",
    index: "01",
    name: "INSTAGRAM",
    brandColor: "#E1306C",
    brandIcon: <InstagramIcon size={38} />,
    profiles: [
      {
        handle: "@vpnkz",
        url: "https://instagram.com/vpnkz",
        ariaLabel: "Instagram @vpnkz",
      },
      {
        handle: "@ivpankaj",
        url: "https://instagram.com/ivpankaj",
        ariaLabel: "Instagram @ivpankaj",
      },
      {
        handle: "@15.10p",
        url: "https://instagram.com/15.10p",
        ariaLabel: "Instagram @15.10p",
      },
    ],
  },
  {
    id: "github",
    index: "02",
    name: "GITHUB",
    brandColor: "#ffffff",
    brandIcon: <GithubIcon size={38} className="text-white" />,
    profiles: [
      {
        handle: "ivpankaj",
        url: "https://github.com/ivpankaj",
        ariaLabel: "GitHub ivpankaj",
      },
    ],
  },
  {
    id: "x",
    index: "03",
    name: "X",
    brandColor: "#ffffff",
    brandIcon: <XIcon size={34} className="text-white" />,
    profiles: [
      {
        handle: "@ivpankaj",
        url: "https://x.com/ivpankaj",
        ariaLabel: "X @ivpankaj",
      },
    ],
  },
  {
    id: "linkedin",
    index: "04",
    name: "LINKEDIN",
    brandColor: "#0A66C2",
    brandIcon: <LinkedInIcon size={38} className="text-[#0A66C2]" />,
    profiles: [
      {
        handle: "Pankaj Verma",
        url: "https://linkedin.com/in/ivpankaj",
        ariaLabel: "LinkedIn Pankaj Verma",
      },
    ],
  },
  {
    id: "youtube",
    index: "05",
    name: "YOUTUBE",
    brandColor: "#FF0000",
    brandIcon: <YouTubeIcon size={38} className="text-[#FF0000]" />,
    profiles: [
      {
        handle: "@ivpankaj",
        url: "https://youtube.com/@ivpankaj",
        ariaLabel: "YouTube @ivpankaj",
      },
    ],
  },
  {
    id: "leetcode",
    index: "06",
    name: "LEETCODE",
    brandColor: "#FFA116",
    brandIcon: <LeetCodeIcon size={38} className="text-[#FFA116]" />,
    profiles: [
      {
        handle: "ivpankaj",
        url: "https://leetcode.com/u/ivpankaj",
        ariaLabel: "LeetCode ivpankaj",
      },
    ],
  },
  {
    id: "discord",
    index: "07",
    name: "DISCORD",
    brandColor: "#5865F2",
    brandIcon: <DiscordIcon size={38} className="text-[#5865F2]" />,
    profiles: [
      {
        handle: "ivpankaj",
        url: "https://discord.com/users/ivpankaj",
        ariaLabel: "Discord ivpankaj",
      },
    ],
  },
  {
    id: "telegram",
    index: "08",
    name: "TELEGRAM",
    brandColor: "#24A1DE",
    brandIcon: <TelegramIcon size={38} className="text-[#24A1DE]" />,
    profiles: [
      {
        handle: "@ivpankaj",
        url: "https://t.me/ivpankaj",
        ariaLabel: "Telegram @ivpankaj",
      },
    ],
  },
  {
    id: "snapchat",
    index: "09",
    name: "SNAPCHAT",
    brandColor: "#FFFC00",
    brandIcon: <SnapchatIcon size={38} className="text-[#FFFC00]" />,
    profiles: [
      {
        handle: "ivpank",
        url: "https://snapchat.com/add/ivpank",
        ariaLabel: "Snapchat ivpank",
      },
    ],
  },
  {
    id: "facebook",
    index: "10",
    name: "FACEBOOK",
    brandColor: "#1877F2",
    brandIcon: <FacebookIcon size={38} className="text-[#1877F2]" />,
    profiles: [
      {
        handle: "ivpankaj",
        url: "https://facebook.com/ivpankaj",
        ariaLabel: "Facebook ivpankaj",
      },
    ],
  },
  {
    id: "threads",
    index: "11",
    name: "THREADS",
    brandColor: "#ffffff",
    brandIcon: <ThreadsIcon size={34} className="text-white" />,
    profiles: [
      {
        handle: "@ivpankaj",
        url: "https://threads.net/@ivpankaj",
        ariaLabel: "Threads @ivpankaj",
      },
    ],
  },
  {
    id: "spotify",
    index: "12",
    name: "SPOTIFY",
    brandColor: "#1DB954",
    brandIcon: <SpotifyIcon size={38} className="text-[#1DB954]" />,
    profiles: [
      {
        handle: "ivpankaj",
        url: "https://open.spotify.com/user/ivpankaj",
        ariaLabel: "Spotify ivpankaj",
      },
    ],
  },
  {
    id: "chess",
    index: "13",
    name: "CHESS.COM",
    brandColor: "#81B64C",
    brandIcon: <ChessIcon size={38} className="text-[#81B64C]" />,
    profiles: [
      {
        handle: "ivpankaj",
        url: "https://chess.com/member/ivpankaj",
        ariaLabel: "Chess.com ivpankaj",
      },
    ],
  },
  {
    id: "reddit",
    index: "14",
    name: "REDDIT",
    brandColor: "#FF4500",
    brandIcon: <RedditIcon size={38} className="text-[#FF4500]" />,
    profiles: [
      {
        handle: "u/ivpankaj",
        url: "https://reddit.com/user/ivpankaj",
        ariaLabel: "Reddit u/ivpankaj",
      },
    ],
  },
  {
    id: "gmail",
    index: "15",
    name: "GMAIL",
    brandColor: "#EA4335",
    brandIcon: <GmailIcon size={38} className="text-[#EA4335]" />,
    profiles: [
      {
        handle: "imvpankaj@gmail.com",
        url: "mailto:imvpankaj@gmail.com",
        ariaLabel: "Email imvpankaj@gmail.com",
      },
    ],
  },
  {
    id: "portfolio",
    index: "16",
    name: "PORTFOLIO",
    brandColor: "#00F0FF",
    brandIcon: <WebsiteIcon size={38} className="text-[#00F0FF]" />,
    profiles: [
      {
        handle: "ivpankaj.online",
        url: "https://ivpankaj.online",
        ariaLabel: "Portfolio ivpankaj.online",
      },
    ],
  },
  {
    id: "onlyfans",
    index: "17",
    name: "ONLYFANS",
    brandColor: "#00AFF0",
    brandIcon: <OnlyFansIcon size={38} className="text-[#00AFF0]" />,
    profiles: [
      {
        handle: "Coming soon",
        url: "#",
        ariaLabel: "OnlyFans - Coming soon",
        isComingSoon: true,
      },
    ],
  },
];

const getHeadingSize = (text: string) => {
  const len = text.length;
  if (len <= 2) {
    // e.g. "X"
    return "text-[clamp(3.5rem,14vw,8.5rem)] sm:text-[clamp(5rem,16vw,10.5rem)]";
  }
  if (len <= 6) {
    // e.g. "GITHUB", "REDDIT"
    return "text-[clamp(2.25rem,9vw,5.75rem)] sm:text-[clamp(3.25rem,10vw,7.25rem)]";
  }
  if (len <= 7) {
    // e.g. "WELCOME", "YOUTUBE", "DISCORD", "THREADS", "SPOTIFY"
    return "text-[clamp(2rem,7.5vw,5.25rem)] sm:text-[clamp(2.75rem,8.5vw,6.5rem)]";
  }
  if (len <= 8) {
    // e.g. "LINKEDIN", "TELEGRAM", "WHATSAPP", "ONLYFANS"
    return "text-[clamp(1.75rem,6.2vw,4.5rem)] sm:text-[clamp(2.25rem,7.2vw,5.5rem)]";
  }
  // 9+ letters: "INSTAGRAM", "CHESS.COM", "PORTFOLIO"
  return "text-[clamp(1.5rem,5.2vw,4rem)] sm:text-[clamp(2rem,6.2vw,5rem)]";
};

export function SocialHub() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPos = container.scrollTop;
      const height = container.clientHeight;
      const newIndex = Math.min(
        ALL_SLIDES.length - 1,
        Math.max(0, Math.round(scrollPos / height))
      );
      setActiveIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const targetY = index * container.clientHeight;
    container.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const handleCopy = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch {
      // fallback
    }
  };

  // Search items list (excluding welcome slide)
  const searchItems = ALL_SLIDES.filter((s) => !s.isWelcome).map((s) => ({
    id: s.id,
    name: s.name,
    index: ALL_SLIDES.indexOf(s),
    icon: s.brandIcon,
  }));

  return (
    <TooltipProvider delayDuration={150}>
      <div className="relative w-full h-screen bg-black text-white overflow-hidden select-none font-sans">
        {/* Fixed Top Bar */}
        <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 sm:px-10 py-3.5 sm:py-5 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
      
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Search Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer"
                  aria-label="Search Platforms"
                >
                  <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-zinc-900 border-zinc-800 text-white">
                Search
              </TooltipContent>
            </Tooltip>

            {/* QR Code Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => setIsShareOpen(true)}
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer"
                  aria-label="QR Code"
                >
                  <QrCode className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-zinc-900 border-zinc-800 text-white">
                QR Code
              </TooltipContent>
            </Tooltip>

            {/* Share Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => setIsShareOpen(true)}
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer"
                  aria-label="Share"
                >
                  <Share2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-zinc-900 border-zinc-800 text-white">
                Share
              </TooltipContent>
            </Tooltip>
          </div>
        </header>

        {/* Fixed Right Navigation Indicators */}
        <aside className="fixed right-3 sm:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2 py-3 px-1.5 rounded-full bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-md">
          {ALL_SLIDES.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={slide.id}
                onClick={() => scrollToSlide(idx)}
                className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
                aria-label={`Jump to ${slide.name}`}
              >
                <div
                  className={`transition-all duration-300 rounded-full ${isActive
                      ? "h-4 w-1 bg-white shadow-[0_0_6px_rgba(255,255,255,0.7)]"
                      : "h-1 w-1 bg-zinc-700 hover:bg-zinc-400"
                    }`}
                />
              </button>
            );
          })}
        </aside>

        {/* Fixed Bottom Index Indicator & Scroll Controls */}
        <footer className="fixed bottom-0 inset-x-0 z-50 flex items-center justify-between px-4 sm:px-10 py-3 sm:py-5 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
          <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
            <span className="text-lg sm:text-2xl font-black tracking-tight text-white font-mono">
              {ALL_SLIDES[activeIndex].index}
            </span>
            <span className="text-[11px] sm:text-xs text-zinc-500 font-mono">
              / {ALL_SLIDES.length - 1 < 10 ? `0${ALL_SLIDES.length - 1}` : ALL_SLIDES.length - 1}
            </span>
          </div>

          <div className="flex items-center gap-1 pointer-events-auto">
            <Button
              variant="ghost"
              size="icon"
              disabled={activeIndex === 0}
              onClick={() => scrollToSlide(activeIndex - 1)}
              className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 disabled:opacity-20 cursor-pointer"
              aria-label="Previous"
            >
              <ChevronUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              disabled={activeIndex === ALL_SLIDES.length - 1}
              onClick={() => scrollToSlide(activeIndex + 1)}
              className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 disabled:opacity-20 cursor-pointer"
              aria-label="Next"
            >
              <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </footer>

        {/* Scroll-Snap Container */}
        <div
          ref={scrollContainerRef}
          className="w-full h-full overflow-y-auto snap-y snap-mandatory scroll-smooth scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {ALL_SLIDES.map((slide, idx) => {
            const isCurrent = idx === activeIndex;
            const isSingle = slide.profiles.length === 1;

            // FIRST FACE: Write only WELCOME
            if (slide.isWelcome) {
              return (
                <section
                  key={slide.id}
                  className="w-full h-screen snap-start snap-always flex flex-col justify-center items-center relative px-4 sm:px-8 md:px-12 pt-14 pb-14 overflow-hidden"
                >
                  <div className="w-full max-w-6xl 2xl:max-w-7xl flex flex-col items-center text-center my-auto -translate-y-12 sm:translate-y-0 px-2 sm:px-4">
                    <div className="w-full max-w-full flex justify-center items-center px-2">
                      <motion.div
                        role="heading"
                        aria-level={2}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={isCurrent ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className={`font-display font-black tracking-tight uppercase text-white leading-none select-none text-center whitespace-nowrap ${getHeadingSize(
                          "WELCOME"
                        )}`}
                      >
                        WELCOME
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isCurrent ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      onClick={() => scrollToSlide(1)}
                      className="flex flex-col items-center gap-2 mt-8 text-zinc-500 hover:text-white transition-colors cursor-pointer"
                    >
                      <ChevronDown className="h-5 w-5 animate-bounce" />
                    </motion.div>
                  </div>
                </section>
              );
            }

            // SOCIAL MEDIA SLIDES
            return (
              <section
                key={slide.id}
                className="w-full h-screen snap-start snap-always flex flex-col justify-center items-center relative px-4 sm:px-8 md:px-12 pt-14 pb-14 overflow-hidden"
              >
                {/* Background Giant Watermark Index */}
                <span className="absolute -left-2 sm:left-12 top-1/2 -translate-y-1/2 text-[9rem] sm:text-[18rem] md:text-[24rem] lg:text-[28rem] font-black text-zinc-950 font-mono select-none pointer-events-none -z-10 leading-none opacity-40">
                  {slide.index}
                </span>

                <div className="w-full max-w-6xl 2xl:max-w-7xl flex flex-col items-center text-center my-auto -translate-y-20 sm:translate-y-0 px-2 sm:px-4">
                  {/* Real Logo Box with Real Color */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 15 }}
                    animate={isCurrent ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: 15 }}
                    transition={{ duration: 0.45, delay: 0.08 }}
                    className="p-3 sm:p-3.5 rounded-2xl sm:rounded-3xl bg-zinc-950/90 border border-zinc-800/90 shadow-2xl mb-3 sm:mb-5 transition-transform hover:scale-105"
                    style={
                      slide.brandColor
                        ? {
                          boxShadow: `0 8px 32px -4px ${slide.brandColor}22`,
                        }
                        : undefined
                    }
                  >
                    {slide.brandIcon}
                  </motion.div>

                  {/* GIANT RESPONSIVE TITLE */}
                  <div className="w-full max-w-full flex justify-center items-center px-1 mb-4 sm:mb-8">
                    <motion.h2
                      initial={{ opacity: 0, scale: 0.94, y: 20 }}
                      animate={
                        isCurrent
                          ? { opacity: 1, scale: 1, y: 0 }
                          : { opacity: 0, scale: 0.94, y: 20 }
                      }
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className={`font-display font-black tracking-tight uppercase text-white leading-none select-none text-center whitespace-nowrap ${getHeadingSize(
                        slide.name
                      )}`}
                    >
                      {slide.name}
                    </motion.h2>
                  </div>

                  {/* Profile Cards Container (Centered if single, Grid if multiple) */}
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={
                      isCurrent ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
                    }
                    transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full max-w-full ${
                      isSingle
                        ? "flex justify-center"
                        : slide.profiles.length === 3
                        ? "flex flex-col sm:grid sm:grid-cols-3 gap-2.5 sm:gap-3.5 max-w-md sm:max-w-3xl mx-auto"
                        : "flex flex-col sm:grid sm:grid-cols-2 gap-2.5 sm:gap-3.5 max-w-md sm:max-w-xl mx-auto"
                    }`}
                  >
                    {slide.profiles.map((profile, pIdx) => (
                      <div
                        key={pIdx}
                        className={`group flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-zinc-950/90 border border-zinc-800/90 hover:border-zinc-600 hover:bg-zinc-900/40 transition-all duration-300 shadow-xl ${isSingle
                            ? "w-full max-w-[310px] sm:max-w-sm mx-auto"
                            : "w-full max-w-[310px] sm:max-w-none mx-auto"
                          }`}
                      >
                        <div className="flex items-center min-w-0 pr-2">
                          <span className="font-semibold text-white text-sm sm:text-base tracking-tight truncate font-sans">
                            {profile.handle}
                          </span>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() =>
                                  handleCopy(
                                    profile.isComingSoon
                                      ? "Coming soon"
                                      : profile.url
                                  )
                                }
                                className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl text-zinc-500 hover:text-white hover:bg-zinc-800 cursor-pointer"
                                aria-label="Copy"
                              >
                                {copiedUrl ===
                                  (profile.isComingSoon
                                    ? "Coming soon"
                                    : profile.url) ? (
                                  <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                                ) : (
                                  <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                )}
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent
                              side="top"
                              className="bg-zinc-900 border-zinc-800 text-white text-xs"
                            >
                              {copiedUrl ===
                                (profile.isComingSoon
                                  ? "Coming soon"
                                  : profile.url)
                                ? "Copied"
                                : "Copy"}
                            </TooltipContent>
                          </Tooltip>

                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="secondary"
                                size="icon"
                                asChild={!profile.isComingSoon}
                                className={`h-8 w-8 sm:h-9 sm:w-9 rounded-xl transition-all ${profile.isComingSoon
                                    ? "bg-zinc-900 text-zinc-400 border border-zinc-800 cursor-default"
                                    : "bg-white text-black hover:bg-zinc-200 group-hover:scale-105 cursor-pointer"
                                  }`}
                              >
                                {profile.isComingSoon ? (
                                  <div>
                                    <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#00AFF0]" />
                                  </div>
                                ) : (
                                  <a
                                    href={profile.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={profile.ariaLabel}
                                  >
                                    <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                  </a>
                                )}
                              </Button>
                            </TooltipTrigger>
                            {profile.isComingSoon && (
                              <TooltipContent
                                side="top"
                                className="bg-zinc-900 border-zinc-800 text-white text-xs"
                              >
                                Coming Soon
                              </TooltipContent>
                            )}
                          </Tooltip>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Share & QR Modal */}
        <ShareModal
          isOpen={isShareOpen}
          onClose={() => setIsShareOpen(false)}
          url="https://pankaj.gay"
        />

        {/* Quick Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          items={searchItems}
          onSelect={(index) => scrollToSlide(index)}
        />
      </div>
    </TooltipProvider>
  );
}
