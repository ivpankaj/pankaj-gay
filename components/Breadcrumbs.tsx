import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { siteConfig } from "@/config/site";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullItems: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...items,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": fullItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href ? { "item": `${siteConfig.url}${item.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumbs" className="py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono flex-wrap">
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              {index === 0 && <Home className="h-3 w-3 text-zinc-500" />}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-zinc-200 font-medium">{item.label}</span>
              )}
              {!isLast && (
                <ChevronRight className="h-3 w-3 text-zinc-600 shrink-0" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
