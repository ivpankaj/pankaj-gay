import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  ExternalLink,
  Code2,
  Terminal,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FolderGit2,
  Cpu,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Pankaj Verma — Full-Stack Developer Biography",
  description:
    "Learn about Pankaj Verma, also known as Pankaj and @ivpankaj. Full-stack software developer and tech person based in Noida and Delhi NCR, India. Biography, technical background, and verified profiles.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    title: "About Pankaj Verma (ivpankaj) — Software Developer",
    description:
      "Official biography and technical background of Pankaj Verma (ivpankaj), full-stack software developer based in Noida, Greater Noida, and Delhi NCR.",
    url: `${siteConfig.url}/about`,
    siteName: "Pankaj Verma (ivpankaj)",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Pankaj Verma (ivpankaj) — Software Developer",
    description:
      "Full-stack software developer in Noida & Delhi NCR. Verified profiles, technical background, and projects.",
    creator: "@ivpankaj",
  },
};

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/about#profilepage`,
        "url": `${siteConfig.url}/about`,
        "name": "About Pankaj Verma (ivpankaj)",
        "headline": "Personal Biography and Technical Profile of Pankaj Verma",
        "description":
          "Full-stack software developer and tech person in Noida and Delhi NCR, India. Biography, engineering philosophy, and verified developer presence.",
        "isPartOf": {
          "@id": `${siteConfig.url}/#website`,
        },
        "mainEntity": {
          "@id": `${siteConfig.url}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        "name": "Pankaj Verma",
        "givenName": "Pankaj",
        "familyName": "Verma",
        "additionalName": "ivpankaj",
        "alternateName": [
          "Pankaj",
          "ivpankaj",
          "@ivpankaj",
          "Pankaj Verma developer",
          "ivpankaj developer",
        ],
        "identifier": "ivpankaj",
        "url": `${siteConfig.url}/`,
        "image": `${siteConfig.url}/opengraph-image`,
        "description":
          "Pankaj Verma (known online as ivpankaj) is a software developer and computer science engineer based in Noida and Delhi NCR, India. Specializing in modern web applications, Next.js, React, TypeScript, and full-stack software engineering.",
        "jobTitle": "Software Developer & Full-Stack Engineer",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Noida",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN",
        },
        "homeLocation": [
          { "@type": "Place", "name": "Noida, Uttar Pradesh, India" },
          { "@type": "Place", "name": "Greater Noida, Uttar Pradesh, India" },
          { "@type": "Place", "name": "Delhi NCR, India" },
        ],
        "sameAs": siteConfig.verifiedSameAs,
        "knowsAbout": [
          "Full-Stack Web Development",
          "Next.js",
          "React",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Data Structures and Algorithms",
          "Python",
          "Web Performance Optimization",
          "Software Architecture",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full space-y-12">
        <Breadcrumbs items={[{ label: "About Pankaj Verma" }]} />

        {/* Hero Section */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Personal Biography & Identity</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            About Pankaj Verma
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-3xl">
            I am <strong className="text-white">Pankaj Verma</strong>, known across the internet
            as <strong className="text-white">ivpankaj</strong> (or simply{" "}
            <strong className="text-white">Pankaj</strong>). I am a software developer and
            full-stack engineer based in <span className="text-zinc-100">Noida</span>,{" "}
            <span className="text-zinc-100">Greater Noida</span>, and the{" "}
            <span className="text-zinc-100">Delhi NCR</span> region of India.
          </p>
        </header>

        {/* Core Identity Facts */}
        <section aria-labelledby="identity-summary" className="space-y-4">
          <h2 id="identity-summary" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <span>Verified Identity Summary</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Full Legal Name
              </span>
              <div className="text-base font-semibold text-white">Pankaj Verma</div>
              <div className="text-xs text-zinc-400">Commonly addressed as Pankaj</div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Global Handle / Online Moniker
              </span>
              <div className="text-base font-semibold text-white">ivpankaj (@ivpankaj)</div>
              <div className="text-xs text-zinc-400">Consistent across all verified developer networks</div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Professional Role
              </span>
              <div className="text-base font-semibold text-white">Software Developer & Full-Stack Engineer</div>
              <div className="text-xs text-zinc-400">Specializing in Next.js, React, TypeScript, and Node.js</div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-1">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Geographic Location
              </span>
              <div className="text-base font-semibold text-white flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-zinc-400 shrink-0" />
                <span>Noida & Delhi NCR, India</span>
              </div>
              <div className="text-xs text-zinc-400">Available for local and international collaboration</div>
            </div>
          </div>
        </section>

        {/* Narrative Biography */}
        <section aria-labelledby="narrative-bio" className="space-y-4">
          <h2 id="narrative-bio" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Terminal className="h-5 w-5 text-blue-400" />
            <span>Background & Engineering Journey</span>
          </h2>

          <div className="space-y-4 text-zinc-300 leading-relaxed text-base">
            <p>
              My journey into software engineering began with Computer Science foundations, exploring how
              data structures, algorithms, and modular design form the bedrock of dependable applications.
              Over time, I specialized in full-stack web technologies—specifically the JavaScript and TypeScript
              ecosystem, centered on Next.js, React, Node.js, Express, and MongoDB.
            </p>
            <p>
              Through hands-on engineering, I have authored open-source software, built cloud tools, and
              launched real web platforms:
            </p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>CookMyTech:</strong> A digital engineering and solutions platform built with modern
                  Next.js App Router and responsive cloud architecture.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>pankaj.life:</strong> My comprehensive personal developer portfolio showcasing skills,
                  micro-animations, and system designs.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>DsaWithPython:</strong> An open-source educational suite providing Python implementations
                  of fundamental data structures and algorithmic complexity benchmarks.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Express Backend Boilerplate:</strong> A production-ready starter architecture for Node.js
                  REST APIs with centralized error handling and Mongoose integration.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Engineering Philosophy */}
        <section aria-labelledby="philosophy" className="space-y-4">
          <h2 id="philosophy" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <Code2 className="h-5 w-5 text-purple-400" />
            <span>Engineering Principles</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
              <h3 className="font-semibold text-white text-base">Speed & Performance</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Prioritizing minimal client JavaScript payloads, server-rendered components, sub-second LCP, and zero CLS layout shifts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
              <h3 className="font-semibold text-white text-base">Type Safety & Rigor</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Using TypeScript to eliminate runtime bugs at compile time, guaranteeing predictable data contracts across the entire stack.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
              <h3 className="font-semibold text-white text-base">Ethical Craftsmanship</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Transparent software engineering without exaggerated claims, fabricated credentials, or bloated third-party dependencies.
              </p>
            </div>
          </div>
        </section>

        {/* Verified Social Media Profiles Directory */}
        <section aria-labelledby="profiles-directory" className="space-y-4">
          <h2 id="profiles-directory" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <span>Official Verified Public Profiles</span>
          </h2>

          <p className="text-sm text-zinc-400">
            Pankaj Verma maintains verified profiles on the following platforms under the official handle{" "}
            <code className="text-zinc-200 bg-zinc-900 px-1.5 py-0.5 rounded">ivpankaj</code>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(siteConfig.socials).map(([key, social]) => (
              <a
                key={key}
                href={social.url}
                target="_blank"
                rel="me noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-600 hover:bg-zinc-900/40 transition-all group"
              >
                <div className="min-w-0 pr-2">
                  <div className="font-semibold text-white text-sm group-hover:text-emerald-400 transition-colors">
                    {social.name}
                  </div>
                  <div className="text-xs text-zinc-400 truncate font-mono">
                    {social.handle}
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-zinc-500 group-hover:text-white shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </section>

        {/* Navigation CTAs */}
        <section aria-label="Explore more sections" className="pt-6 border-t border-zinc-900 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all"
          >
            <FolderGit2 className="h-4 w-4" />
            <span>Explore Software Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/skills"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-medium text-sm hover:border-zinc-700 transition-all"
          >
            <Cpu className="h-4 w-4" />
            <span>Review Technical Stack</span>
          </Link>

          <Link
            href="/blog"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-medium text-sm hover:border-zinc-700 transition-all"
          >
            <BookOpen className="h-4 w-4" />
            <span>Read Technical Articles</span>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
