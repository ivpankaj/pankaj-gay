import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { VERIFIED_PROJECTS, Project } from "@/lib/site-data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  ExternalLink,
  Calendar,
  Layers,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/app/components/Icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return VERIFIED_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = VERIFIED_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Pankaj Verma",
    };
  }

  const canonicalUrl = `${siteConfig.url}/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      title: `${project.title} — Pankaj Verma`,
      description: project.description,
      url: canonicalUrl,
      siteName: "Pankaj Verma (ivpankaj)",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      creator: "@ivpankaj",
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = VERIFIED_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = VERIFIED_PROJECTS.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? VERIFIED_PROJECTS[currentIndex - 1] : null;
  const nextProject =
    currentIndex < VERIFIED_PROJECTS.length - 1
      ? VERIFIED_PROJECTS[currentIndex + 1]
      : null;

  const canonicalUrl = `${siteConfig.url}/projects/${project.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareSourceCode",
        "@id": `${canonicalUrl}#software`,
        "name": project.title,
        "description": project.description,
        "abstract": project.problem,
        "programmingLanguage": project.tech.join(", "),
        "datePublished": project.date,
        "author": {
          "@type": "Person",
          "@id": `${siteConfig.url}/#person`,
          "name": "Pankaj Verma",
          "alternateName": "ivpankaj",
          "url": `${siteConfig.url}/`,
        },
        ...(project.repoUrl ? { "codeRepository": project.repoUrl } : {}),
        ...(project.liveUrl ? { "targetProduct": { "@type": "SoftwareApplication", "url": project.liveUrl } } : {}),
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

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full space-y-10">
        <Breadcrumbs
          items={[
            { label: "Software Projects", href: "/projects" },
            { label: project.title },
          ]}
        />

        {/* Back Link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>Released {project.date}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-zinc-300 leading-relaxed font-normal">
            {project.tagline}
          </p>

          {/* Action buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-medium text-sm hover:border-zinc-700 transition-all"
              >
                <GithubIcon size={16} className="text-white" />
                <span>View Source on GitHub</span>
              </a>
            )}
          </div>
        </header>

        {/* Tech Stack */}
        <section aria-labelledby="technologies-heading" className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
          <h2 id="technologies-heading" className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="h-4 w-4 text-emerald-400" />
            <span>Technologies & Frameworks</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs sm:text-sm font-mono px-3 py-1 rounded-lg bg-zinc-900 text-zinc-200 border border-zinc-800"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Problem Statement */}
        <section aria-labelledby="problem-heading" className="space-y-3">
          <h2 id="problem-heading" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            The Problem & Objective
          </h2>
          <p className="text-base text-zinc-300 leading-relaxed">
            {project.problem}
          </p>
        </section>

        {/* My Contribution */}
        <section aria-labelledby="contribution-heading" className="space-y-3">
          <h2 id="contribution-heading" className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
            <span>Pankaj Verma&apos;s Engineering Contribution</span>
          </h2>
          <p className="text-base text-zinc-300 leading-relaxed">
            {project.contribution}
          </p>
        </section>

        {/* Architectural Decisions */}
        <section aria-labelledby="architecture-heading" className="space-y-3">
          <h2 id="architecture-heading" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Architecture & Implementation Decisions
          </h2>
          <p className="text-base text-zinc-300 leading-relaxed">
            {project.architecture}
          </p>
        </section>

        {/* Key Highlights */}
        <section aria-labelledby="highlights-heading" className="space-y-4">
          <h2 id="highlights-heading" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Key Engineering Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-2.5 p-4 rounded-xl bg-zinc-950 border border-zinc-800/80"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-300">{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Prev / Next Navigation */}
        <nav aria-label="Adjacent project navigation" className="pt-8 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all text-left space-y-1 block"
            >
              <div className="text-xs font-mono text-zinc-500">← Previous Project</div>
              <div className="text-sm font-semibold text-white truncate">
                {prevProject.title}
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all text-right space-y-1 block"
            >
              <div className="text-xs font-mono text-zinc-500">Next Project →</div>
              <div className="text-sm font-semibold text-white truncate">
                {nextProject.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </main>

      <Footer />
    </div>
  );
}
