import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { VERIFIED_BLOG_POSTS } from "@/lib/site-data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  PenTool,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Writing & Architecture Notes",
  description:
    "Technical articles and software engineering write-ups by Pankaj Verma (ivpankaj). In-depth guides on Next.js App Router architecture, Express REST API design, and Python algorithms.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    title: "Technical Articles by Pankaj Verma (ivpankaj)",
    description:
      "Explore in-depth technical guides, software architecture insights, and code tutorials by Pankaj Verma (ivpankaj).",
    url: `${siteConfig.url}/blog`,
    siteName: "Pankaj Verma (ivpankaj)",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Articles by Pankaj Verma (ivpankaj)",
    description:
      "Software architecture, Next.js, and Python algorithm tutorials by Pankaj Verma (ivpankaj).",
    creator: "@ivpankaj",
  },
};

export default function BlogIndexPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${siteConfig.url}/blog#blog`,
        "url": `${siteConfig.url}/blog`,
        "name": "Pankaj Verma Engineering Blog",
        "description":
          "Technical articles, engineering tutorials, and software architecture guides by Pankaj Verma (ivpankaj).",
        "author": {
          "@id": `${siteConfig.url}/#person`,
        },
        "publisher": {
          "@id": `${siteConfig.url}/#person`,
        },
        "blogPost": VERIFIED_BLOG_POSTS.map((post) => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.summary,
          "url": `${siteConfig.url}/blog/${post.slug}`,
          "datePublished": post.publishedDate,
          "dateModified": post.modifiedDate,
          "author": {
            "@id": `${siteConfig.url}/#person`,
          },
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

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full space-y-12">
        <Breadcrumbs items={[{ label: "Technical Articles" }]} />

        {/* Header */}
        <header className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <BookOpen className="h-3.5 w-3.5 text-emerald-400" />
            <span>Engineering Writing & Tutorials</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Technical Articles & Guides
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Original, practical engineering tutorials and architectural reflections authored
            by <strong className="text-white">Pankaj Verma</strong> (<strong className="text-white">ivpankaj</strong>).
            Focusing on modern Next.js development, REST API engineering, and algorithmic problem-solving.
          </p>
        </header>

        {/* Article Listings */}
        <section aria-label="Articles list" className="space-y-6">
          <div className="space-y-6">
            {VERIFIED_BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/30 transition-all space-y-4"
              >
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                    <span>{post.publishedDate}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-zinc-500" />
                    <span>{post.readingTime}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <PenTool className="h-3.5 w-3.5 text-zinc-500" />
                    <span>Author: Pankaj Verma</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {post.summary}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800 flex items-center gap-1"
                      >
                        <Tag className="h-3 w-3 opacity-60" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
