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
        "name": "Pankaj Verma",
        "additionalName": "ivpankaj",
        "alternateName": [
          "Pankaj",
          "Pankaj Verma",
          "ivpankaj",
          "@ivpankaj",
          "Pankaj Verma ivpankaj",
          "ivpankaj.dev",
          "ivpankaj online",
          "ivpankaj developer",
          "pankaj.gay",
          "www.pankaj.gay",
          "https://www.pankaj.gay",
          "https://pankaj.gay",
        ],
        "identifier": "ivpankaj",
        "url": `${siteConfig.url}/`,
        "image": `${siteConfig.url}/opengraph-image`,
        "description":
          "Pankaj Verma (ivpankaj) is a software developer and tech person based in Noida, Greater Noida, and Delhi NCR, India.",
        "jobTitle": "Software Developer",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Noida",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN",
        },
        "homeLocation": [
          { "@type": "Place", "name": "Noida, Uttar Pradesh, India" },
          { "@type": "Place", "name": "Greater Noida, Uttar Pradesh, India" },
          { "@type": "Place", "name": "Delhi, India" },
          { "@type": "Place", "name": "Delhi NCR, India" },
        ],
        "workLocation": [
          { "@type": "Place", "name": "Noida" },
          { "@type": "Place", "name": "Greater Noida" },
          { "@type": "Place", "name": "Delhi NCR" },
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Software Developer",
          "occupationalCategory": "Software and Tech",
          "description":
            "Software developer and tech professional based in Noida, Greater Noida, and Delhi NCR.",
          "skills":
            "Full-Stack Web Development, TypeScript, React, Next.js, Node.js, Software Engineering",
        },
        "sameAs": siteConfig.verifiedSameAs,
        "knowsAbout": [
          "Software Development",
          "Software Engineering",
          "Tech and Software",
          "Full-Stack Web Development",
          "TypeScript",
          "React",
          "Next.js",
          "Open Source",
        ],
        "mainEntityOfPage": `${siteConfig.url}/`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": `${siteConfig.url}/`,
        "name": "Pankaj Verma (ivpankaj)",
        "alternateName": [
          "Pankaj",
          "Pankaj Verma",
          "ivpankaj",
          "Pankaj Verma — Official Website",
          "ivpankaj — Official Website",
          "pankaj.gay",
          "www.pankaj.gay",
          "https://www.pankaj.gay",
          "https://pankaj.gay",
        ],
        "description":
          "The official website and digital hub of Pankaj Verma (ivpankaj), software developer and tech person in Noida, Greater Noida, and Delhi NCR.",
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
        "name": "Pankaj Verma (ivpankaj) — Software Developer in Noida & Delhi NCR",
        "headline": "Official Profile & Social Directory for Pankaj Verma (ivpankaj)",
        "isPartOf": {
          "@id": `${siteConfig.url}/#website`,
        },
        "mainEntity": {
          "@id": `${siteConfig.url}/#person`,
        },
        "description": siteConfig.description,
        "inLanguage": "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Pankaj Verma (ivpankaj)",
            "item": `${siteConfig.url}/`,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#social-directory`,
        "name": "Pankaj Verma (ivpankaj) Official Social Media & Developer Profiles",
        "description":
          "Verified directory of official accounts for Pankaj Verma (ivpankaj) across social networks and developer platforms.",
        "itemListElement": Object.entries(siteConfig.socials).map(
          ([, social], index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": `Pankaj Verma (ivpankaj) on ${social.name} (${social.handle})`,
            "url": social.url,
          })
        ),
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

      {/* Visible Fullscreen Interactive Hub & Navigation */}
      <SocialHub />
    </main>
  );
}