"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/app/components/Icons";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-900 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold tracking-tight text-base sm:text-lg">
            {siteConfig.name}
          </span>
          <span className="text-xs text-zinc-400 font-mono hidden sm:inline-block">
            @{siteConfig.alternateName}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-zinc-900 text-white font-medium"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href="https://pankaj.life"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors"
          >
            <span>pankaj.life</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.socials.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-200 hover:text-white hover:border-zinc-700 transition-all"
            aria-label="GitHub @ivpankaj"
          >
            <GithubIcon size={14} className="text-white" />
            <span>GitHub</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-black/95 px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base ${
                  isActive
                    ? "bg-zinc-900 text-white font-medium"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://pankaj.life"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base text-zinc-400 hover:text-white"
          >
            <span>Developer Portfolio (pankaj.life)</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <div className="pt-3 border-t border-zinc-900 flex items-center justify-between px-3">
            <span className="text-xs text-zinc-500">Pankaj Verma (@ivpankaj)</span>
            <a
              href="mailto:imvpankaj@gmail.com"
              className="text-xs text-zinc-300 hover:text-white underline"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
