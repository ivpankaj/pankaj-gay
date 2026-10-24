import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { VERIFIED_BLOG_POSTS, BlogPost } from "@/lib/site-data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  PenTool,
  Share2,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return VERIFIED_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = VERIFIED_BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Pankaj Verma",
    };
  }

  const canonicalUrl = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url: canonicalUrl,
      publishedTime: post.publishedDate,
      modifiedTime: post.modifiedDate,
      authors: [`${siteConfig.url}/`],
      siteName: "Pankaj Verma (ivpankaj)",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      creator: "@ivpankaj",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = VERIFIED_BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `${siteConfig.url}/blog/${post.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${canonicalUrl}#article`,
        "headline": post.title,
        "description": post.summary,
        "datePublished": post.publishedDate,
        "dateModified": post.modifiedDate,
        "mainEntityOfPage": canonicalUrl,
        "author": {
          "@type": "Person",
          "@id": `${siteConfig.url}/#person`,
          "name": "Pankaj Verma",
          "alternateName": "ivpankaj",
          "url": `${siteConfig.url}/`,
        },
        "publisher": {
          "@type": "Person",
          "@id": `${siteConfig.url}/#person`,
          "name": "Pankaj Verma",
        },
        "keywords": post.tags.join(", "),
      },
    ],
  };

  // Helper to render basic markdown headings, code blocks, lists, and paragraphs
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeBuffer: string[] = [];
    let codeLang = "";

    lines.forEach((line, index) => {
      if (line.startsWith("```")) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLang = line.replace("```", "").trim();
          codeBuffer = [];
        } else {
          inCodeBlock = false;
          elements.push(
            <div
              key={`code-${index}`}
              className="my-6 rounded-2xl bg-zinc-950 border border-zinc-800 overflow-x-auto p-4 sm:p-5"
            >
              {codeLang && (
                <div className="text-xs font-mono text-zinc-500 mb-2 uppercase">
                  {codeLang}
                </div>
              )}
              <pre className="font-mono text-xs sm:text-sm text-zinc-200 leading-relaxed">
                <code>{codeBuffer.join("\n")}</code>
              </pre>
            </div>
          );
        }
        return;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        return;
      }

      if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={index}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-10 mb-4 pt-4 border-t border-zinc-900"
          >
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3
            key={index}
            className="text-xl sm:text-2xl font-semibold tracking-tight text-white mt-6 mb-3"
          >
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("---")) {
        elements.push(
          <hr key={index} className="my-8 border-zinc-800" />
        );
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={index} className="text-zinc-300 ml-4 list-disc my-1 leading-relaxed text-base">
            {line.replace("- ", "")}
          </li>
        );
      } else if (line.trim().length > 0) {
        elements.push(
          <p key={index} className="text-zinc-300 leading-relaxed text-base sm:text-lg my-4">
            {line}
          </p>
        );
      }
    });

    return elements;
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
            { label: "Technical Articles", href: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-zinc-500" />
              <span>Published: {post.publishedDate}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-zinc-500" />
              <span>{post.readingTime}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <PenTool className="h-3.5 w-3.5 text-zinc-500" />
              <span>Author: Pankaj Verma (ivpankaj)</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-zinc-300 leading-relaxed font-normal">
            {post.summary}
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800 flex items-center gap-1"
              >
                <Tag className="h-3 w-3 opacity-60" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none pt-4 border-t border-zinc-900">
          {renderContent(post.content)}
        </article>

        {/* Author Bio Box */}
        <aside aria-label="Author Information" className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
            <h2 className="text-base font-bold text-white">About the Author: Pankaj Verma</h2>
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Pankaj Verma (known online as <strong>ivpankaj</strong>) is a full-stack software developer
            based in Noida and Delhi NCR, India. He builds scalable web applications, open-source tools,
            and cloud software architectures. Explore his projects on{" "}
            <Link href="/projects" className="text-white underline underline-offset-4 hover:text-emerald-400">
              projects
            </Link>{" "}
            or visit his portfolio at{" "}
            <a href="https://pankaj.life" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4 hover:text-emerald-400">
              pankaj.life
            </a>.
          </p>
        </aside>

        {/* Bottom Navigation */}
        <div className="pt-6 border-t border-zinc-900 flex justify-between items-center text-sm">
          <Link
            href="/blog"
            className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>All Articles</span>
          </Link>
          <Link
            href="/projects"
            className="text-white hover:text-emerald-400 transition-colors font-medium"
          >
            <span>Explore Projects →</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
