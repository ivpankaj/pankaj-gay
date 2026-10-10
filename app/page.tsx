import React from "react";
import { siteConfig } from "@/config/site";
import { SocialHub } from "./components/SocialHub";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        "name": siteConfig.name,
        "alternateName": siteConfig.alternateName,
        "url": `${siteConfig.url}/`,
        "image": `${siteConfig.url}/opengraph-image`,
        "description": siteConfig.description,
        "jobTitle": "Software Developer & Creator",
        "sameAs": siteConfig.verifiedSameAs,
        "mainEntityOfPage": `${siteConfig.url}/`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": `${siteConfig.url}/`,
        "name": siteConfig.name,
        "alternateName": siteConfig.alternateName,
        "description": siteConfig.description,
        "publisher": {
          "@id": `${siteConfig.url}/#person`,
        },
        "creator": {
          "@id": `${siteConfig.url}/#person`,
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profilepage`,
        "url": `${siteConfig.url}/`,
        "name": `${siteConfig.name} - Official Personal Website & Profile`,
        "isPartOf": {
          "@id": `${siteConfig.url}/#website`,
        },
        "mainEntity": {
          "@id": `${siteConfig.url}/#person`,
        },
        "description": siteConfig.description,
        "inLanguage": "en-US",
      },
    ],
  };

  return (
    <main className="h-screen w-full bg-black text-white overflow-hidden selection:bg-white selection:text-black">
      {/* Schema.org JSON-LD Structured Data Graph for Search Engine Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Crawlable Semantic SEO Foundation for Googlebot and Screen Readers (Visually Hidden) */}
      <header className="sr-only">
        <h1>Pankaj Verma — Official Personal Website & Social Media Hub</h1>
        <p>
          Welcome to the official personal website of Pankaj Verma, known across the internet
          as ivpankaj. This website is the verified central directory connecting all of his
          genuine social media channels, open-source projects, and professional platforms.
        </p>
      </header>

      {/* Crawlable Semantic Anchor Links with rel="me" for Search Engine Verification (Visually Hidden) */}
      <nav aria-label="Official Social Profiles Directory" className="sr-only">
        <h2>Official Verified Social Media Channels for Pankaj Verma</h2>
        <ul>
          {Object.entries(siteConfig.socials).map(([key, social]) => (
            <li key={key}>
              <a
                href={social.url}
                rel="me noopener noreferrer"
                target="_blank"
              >
                Pankaj Verma on {social.name} ({social.handle})
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* User-Facing UI (Visually Unchanged) */}
      <SocialHub />
    </main>
  );
}