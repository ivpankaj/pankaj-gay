import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ExternalLink } from "lucide-react";
import { GithubIcon, LinkedInIcon, XIcon, GmailIcon } from "@/app/components/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/60 text-zinc-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Identity column */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="font-bold text-lg tracking-tight">
                {siteConfig.name}
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                (@{siteConfig.alternateName})
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Official personal website and digital hub of Pankaj Verma (ivpankaj),
              software developer and full-stack engineer based in Noida and Delhi NCR,
              India. Focused on scalable web applications, Next.js, React, TypeScript,
              and open-source software.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.socials.github.url}
                target="_blank"
                rel="me noopener noreferrer"
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="GitHub profile of Pankaj Verma"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={siteConfig.socials.linkedin.url}
                target="_blank"
                rel="me noopener noreferrer"
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="LinkedIn profile of Pankaj Verma"
              >
                <LinkedInIcon size={16} />
              </a>
              <a
                href={siteConfig.socials.x.url}
                target="_blank"
                rel="me noopener noreferrer"
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="X (Twitter) profile of Pankaj Verma"
              >
                <XIcon size={16} />
              </a>
              <a
                href="mailto:imvpankaj@gmail.com"
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="Email Pankaj Verma"
              >
                <GmailIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home (Social Hub)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Pankaj Verma
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Software Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-white transition-colors">
                  Technical Stack
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Technical Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified destinations */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono">
              Verified Portals
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://pankaj.life"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>pankaj.life (Portfolio)</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://cookmytech.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>CookMyTech</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.leetcode.url}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>LeetCode (@ivpankaj)</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.youtube.url}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>YouTube (@ivpankaj)</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {currentYear} Pankaj Verma (ivpankaj). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Official Domains: https://www.pankaj.gay • https://pankaj.gay</span>
            <span>•</span>
            <span>Noida, Uttar Pradesh, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
