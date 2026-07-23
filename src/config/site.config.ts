/**
 * Site configuration — Single Source of Truth para identidade da plataforma.
 * Fonte: PROJECT.md, BRAND_SYSTEM.md (placeholder), INFORMATION_ARCHITECTURE.md.
 */

export const siteConfig = {
  name: "UniEjatec",
  fullName: "UniEjatec Platform",
  tagline: "Plataforma editorial e educacional",
  description:
    "Portal editorial e educacional da UniEjatec — conhecimento organizado sobre cursos, profissões, carreiras e mercado de trabalho.",
  locale: "pt-BR",
  url: "",
  twitter: "@uniejatec",
  organization: {
    name: "UniEjatec",
    legalName: "UniEjatec Educação",
  },
} as const;

export type SiteConfig = typeof siteConfig;
