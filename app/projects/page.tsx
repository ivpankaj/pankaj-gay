import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { VERIFIED_PROJECTS } from "@/lib/site-data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  ExternalLink,
  ArrowRight,
  FolderGit2,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/app/components/Icons";

export const metadata: Metadata = {
  title: "Software Engineering Projects & Open Source",
  description:
    "Explore verified software engineering projects developed by Pankaj Verma (ivpankaj). Featuring CookMyTech, Pankaj.life, CRM systems, Task Management, Python algorithms, and REST API architectures.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    title: "Software Projects by Pankaj Verma (ivpankaj)",
    description:
      "Explore real software projects and open-source contributions by full-stack developer Pankaj Verma (ivpankaj).",
    url: `${siteConfig.url}/projects`,
    siteName: "Pankaj Verma (ivpankaj)",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Projects by Pankaj Verma (ivpankaj)",
    description:
      "Real software projects and GitHub repositories created by Pankaj Verma (ivpankaj).",
    creator: "@ivpankaj",
  },
};

export default function ProjectsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.url}/projects#collectionpage`,
        "url": `${siteConfig.url}/projects`,
        "name": "Software Projects by Pankaj Verma (ivpankaj)",
        "description":
          "Curated collection of verified software development projects, open-source code repositories, and web applications built by Pankaj Verma.",
        "isPartOf": {
          "@id": `${siteConfig.url}/#website`,
        },
        "publisher": {
          "@id": `${siteConfig.url}/#person`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/projects#itemlist`,
        "name": "Pankaj Verma Software Projects",
        "itemListElement": VERIFIED_PROJECTS.map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": project.title,
          "url": `${siteConfig.url}/projects/${project.slug}`,
          "description": project.description,
        })),
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

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full space-y-12">
        <Breadcrumbs items={[{ label: "Software Projects" }]} />

        {/* Header */}
        <header className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <FolderGit2 className="h-3.5 w-3.5 text-emerald-400" />
            <span>Verified Portfolio of Work</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Software Projects by Pankaj Verma
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            A comprehensive index of real software applications, developer tools,
            and open-source repositories designed and built by <strong className="text-white">Pankaj Verma</strong>{" "}
            (<strong className="text-white">ivpankaj</strong>). Every project represents genuine code,
            tested architectures, and working deployments.
          </p>
        </header>

        {/* Projects Grid */}
        <section aria-label="Projects list" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VERIFIED_PROJECTS.map((project) => (
              <article
                key={project.slug}
                className="group p-6 sm:p-7 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/30 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {project.date}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1 text-xs text-zinc-400 pt-2">
                    {project.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Sparkles className="h-3 w-3 text-emerald-400 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer links */}
                <div className="pt-4 border-t border-zinc-900/90 flex items-center justify-between gap-3 text-xs">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-1 font-semibold text-white hover:text-emerald-400 transition-colors"
                  >
                    <span>Detailed Case Study</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon size={14} className="text-white" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-colors"
                        aria-label={`Visit live demo for ${project.title}`}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom CTA to Skills */}
        <section className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-xl font-bold text-white">
              Interested in the Technologies Powering These Projects?
            </h2>
            <p className="text-sm text-zinc-400">
              Explore Pankaj Verma&apos;s full technical stack and proficiency across frontend, backend, and algorithms.
            </p>
          </div>
          <Link
            href="/skills"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shrink-0"
          >
            <Layers className="h-4 w-4" />
            <span>Explore Skills & Stack</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
