/**
 * SEO defaults — Fonte oficial de metadados base.
 * Fonte: SEO_SYSTEM.md.
 *
 * Cada rota é obrigada a sobrescrever title/description/canonical/og:*.
 */

import { siteConfig } from "./site.config";

export const seoConfig = {
  defaultTitle: `${siteConfig.name} — ${siteConfig.tagline}`,
  titleTemplate: (title: string) => `${title} — ${siteConfig.name}`,
  defaultDescription: siteConfig.description,
  locale: siteConfig.locale,
  twitterCard: "summary_large_image" as const,
  twitterSite: siteConfig.twitter,
  robotsIndex: "index, follow",
  robotsNoindex: "noindex, follow",
} as const;
