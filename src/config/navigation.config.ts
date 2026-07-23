/**
 * Navigation configuration — Fonte oficial dos menus.
 * Fonte: INFORMATION_ARCHITECTURE.md, ROUTING_SYSTEM.md.
 *
 * Menus NUNCA consomem rotas diretamente; consomem esta estrutura.
 */

import { routes } from "./routes.config";

export interface NavItem {
  readonly label: string;
  readonly to: string;
  readonly description?: string;
}

export interface NavGroup {
  readonly label: string;
  readonly items: readonly NavItem[];
}

export const primaryNav: readonly NavItem[] = [
  { label: routes.articlesHub.label, to: routes.articlesHub.path },
  { label: routes.guidesHub.label, to: routes.guidesHub.path },
  { label: routes.coursesHub.label, to: routes.coursesHub.path },
  { label: routes.professionsHub.label, to: routes.professionsHub.path },
  { label: routes.careersHub.label, to: routes.careersHub.path },
  { label: routes.newsHub.label, to: routes.newsHub.path },
];

export const footerNav: readonly NavGroup[] = [
  {
    label: "Editorial",
    items: [
      { label: routes.articlesHub.label, to: routes.articlesHub.path },
      { label: routes.guidesHub.label, to: routes.guidesHub.path },
      { label: routes.newsHub.label, to: routes.newsHub.path },
      { label: routes.glossaryHub.label, to: routes.glossaryHub.path },
      { label: routes.faqHub.label, to: routes.faqHub.path },
      { label: routes.comparisonsHub.label, to: routes.comparisonsHub.path },
      { label: routes.downloadsHub.label, to: routes.downloadsHub.path },
    ],
  },
  {
    label: "Educação e Mercado",
    items: [
      { label: routes.coursesHub.label, to: routes.coursesHub.path },
      { label: routes.professionsHub.label, to: routes.professionsHub.path },
      { label: routes.careersHub.label, to: routes.careersHub.path },
      { label: routes.institutionsHub.label, to: routes.institutionsHub.path },
      { label: routes.categoriesHub.label, to: routes.categoriesHub.path },
      { label: routes.authorsHub.label, to: routes.authorsHub.path },
    ],
  },
  {
    label: "Institucional",
    items: [
      { label: routes.about.label, to: routes.about.path },
      { label: routes.contact.label, to: routes.contact.path },
      { label: routes.partnerships.label, to: routes.partnerships.path },
      { label: routes.careersJobs.label, to: routes.careersJobs.path },
      { label: routes.ombudsman.label, to: routes.ombudsman.path },
    ],
  },
  {
    label: "Legal e Acadêmico",
    items: [
      { label: routes.privacy.label, to: routes.privacy.path },
      { label: routes.terms.label, to: routes.terms.path },
      { label: routes.studentArea.label, to: routes.studentArea.path },
      { label: routes.login.label, to: routes.login.path },
    ],
  },
];
