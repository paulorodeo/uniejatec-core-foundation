/**
 * SEO helpers — geram o objeto `head()` conforme SEO_SYSTEM.md.
 *
 * Toda rota pública DEVE consumir esta função. NÃO usar em __root — o
 * root apenas define defaults sitewide.
 */

import { seoConfig } from "@/config/seo.config";

export interface RouteSeoInput {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article" | "profile";
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export interface HeadDescriptor {
  meta: Array<Record<string, string>>;
  links: Array<{ rel: string; href: string }>;
  scripts?: Array<{ type: string; children: string }>;
}

export function buildRouteHead(input: RouteSeoInput): HeadDescriptor {
  const title = seoConfig.titleTemplate(input.title);
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: input.description },
    { property: "og:title", content: title },
    { property: "og:description", content: input.description },
    { property: "og:type", content: input.ogType ?? "website" },
    { property: "og:url", content: input.path },
    { property: "og:locale", content: seoConfig.locale },
    { name: "twitter:card", content: seoConfig.twitterCard },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: input.description },
    {
      name: "robots",
      content: input.noindex ? seoConfig.robotsNoindex : seoConfig.robotsIndex,
    },
  ];
  if (input.image) {
    meta.push({ property: "og:image", content: input.image });
    meta.push({ name: "twitter:image", content: input.image });
  }
  const links = [{ rel: "canonical", href: input.path }];
  const scripts = input.jsonLd
    ? [
        {
          type: "application/ld+json",
          children: JSON.stringify(input.jsonLd),
        },
      ]
    : undefined;
  return { meta, links, scripts };
}
