import React from "react";
import { SocialHub } from "./components/SocialHub";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "2026-01-01T00:00:00+00:00",
    "dateModified": new Date().toISOString(),
    "mainEntity": {
      "@type": "Person",
      "name": "Pankaj Verma",
      "alternateName": "ivpankaj",
      "identifier": "ivpankaj",
      "url": "https://pankaj.gay",
      "jobTitle": "Software Developer & Creator",
      "sameAs": [
        "https://github.com/ivpankaj",
        "https://x.com/ivpankaj",
        "https://instagram.com/ivpankaj",
        "https://linkedin.com/in/ivpankaj",
        "https://youtube.com/@ivpankaj",
        "https://discord.com/users/ivpankaj",
        "https://t.me/ivpankaj",
        "https://threads.net/@ivpankaj",
        "https://open.spotify.com/user/ivpankaj",
        "https://chess.com/member/ivpankaj",
        "https://reddit.com/user/ivpankaj",
        "https://ivpankaj.online"
      ]
    }
  };

  return (
    <main className="h-screen w-full bg-black text-white overflow-hidden selection:bg-white selection:text-black">
      {/* JSON-LD Structured Data for Enhanced Search Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Screen Reader & Bot SEO Semantics (Visually Hidden) */}
      <header className="sr-only">
        <h1>Pankaj Verma — ivpankaj</h1>
        <p>
          Official single-page social media portfolio and links directory for Pankaj Verma,
          widely recognized across the internet as ivpankaj.
        </p>
      </header>

      {/* Pure Visual Iconic Hub using Shadcn Components */}
      <SocialHub />
    </main>
  );
}