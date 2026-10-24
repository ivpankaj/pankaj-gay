import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { VERIFIED_SKILLS } from "@/lib/site-data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Cpu,
  Layers,
  ArrowRight,
  Code2,
  Database,
  Binary,
  Wrench,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Stack & Engineering Toolchain",
  description:
    "Technical stack, proficiencies, and software engineering toolchain of Pankaj Verma (ivpankaj). Advanced Next.js, React, TypeScript, Node.js, Express, MongoDB, and Python algorithms.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    type: "website",
    title: "Technical Skills & Toolchain — Pankaj Verma (ivpankaj)",
    description:
      "Explore the verified technology stack and engineering proficiencies of full-stack developer Pankaj Verma (ivpankaj).",
    url: `${siteConfig.url}/skills`,
    siteName: "Pankaj Verma (ivpankaj)",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Skills & Toolchain — Pankaj Verma (ivpankaj)",
    description:
      "Explore verified skills in React, Next.js, TypeScript, Node.js, and Python by Pankaj Verma (ivpankaj).",
    creator: "@ivpankaj",
  },
};

export default function SkillsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.url}/skills#collectionpage`,
        "url": `${siteConfig.url}/skills`,
        "name": "Technical Skills & Toolchain of Pankaj Verma (ivpankaj)",
        "description":
          "Verified software engineering skills, frameworks, programming languages, and developer tools mastered by Pankaj Verma.",
        "isPartOf": {
          "@id": `${siteConfig.url}/#website`,
        },
        "publisher": {
          "@id": `${siteConfig.url}/#person`,
        },
      },
    ],
  };

  const getCategoryIcon = (categoryName: string) => {
    if (categoryName.includes("Frontend")) return <Code2 className="h-5 w-5 text-blue-400" />;
    if (categoryName.includes("Backend")) return <Database className="h-5 w-5 text-emerald-400" />;
    if (categoryName.includes("Algorithms")) return <Binary className="h-5 w-5 text-purple-400" />;
    return <Wrench className="h-5 w-5 text-amber-400" />;
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full space-y-12">
        <Breadcrumbs items={[{ label: "Technical Skills" }]} />

        {/* Header */}
        <header className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <Cpu className="h-3.5 w-3.5 text-emerald-400" />
            <span>Verified Engineering Capabilities</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Technical Stack & Engineering Skills
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            A comprehensive breakdown of programming languages, libraries, frameworks,
            and developer tooling used by <strong className="text-white">Pankaj Verma</strong>{" "}
            (<strong className="text-white">ivpankaj</strong>). Every listed skill is backed by
            real implementations across verified open-source and client projects.
          </p>
        </header>

        {/* Skill Categories */}
        <div className="space-y-12">
          {VERIFIED_SKILLS.map((category) => (
            <section
              key={category.name}
              aria-labelledby={`cat-${category.name.replace(/\s+/g, "-").toLowerCase()}`}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
                {getCategoryIcon(category.name)}
                <div>
                  <h2
                    id={`cat-${category.name.replace(/\s+/g, "-").toLowerCase()}`}
                    className="text-xl sm:text-2xl font-bold tracking-tight text-white"
                  >
                    {category.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 font-normal">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/30 transition-all space-y-2.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-semibold text-white text-base flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {skill.description}
                    </p>

                    {skill.relevantProjects.length > 0 && (
                      <div className="pt-2 border-t border-zinc-900/80 flex items-center gap-1.5 flex-wrap">
                        <span className="text-[11px] font-mono text-zinc-500">
                          Applied in:
                        </span>
                        {skill.relevantProjects.map((pSlug) => (
                          <Link
                            key={pSlug}
                            href={`/projects/${pSlug}`}
                            className="text-[11px] font-mono text-zinc-400 hover:text-emerald-400 bg-zinc-900/80 px-2 py-0.5 rounded transition-colors"
                          >
                            {pSlug}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl font-bold text-white">
              See These Technologies in Action
            </h2>
            <p className="text-sm text-zinc-400">
              Browse Pankaj Verma&apos;s real project case studies, source repositories, and live demos.
            </p>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shrink-0"
          >
            <Layers className="h-4 w-4" />
            <span>View Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
