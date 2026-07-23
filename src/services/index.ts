/**
 * Services — expõem casos de uso à camada de Hooks.
 * Fonte: DATA_ARCHITECTURE.md.
 *
 * Services nunca conhecem HTTP, apenas Repositories.
 * Nesta sprint, apenas encapsulam listagem e detalhe.
 */

import type { Repositories } from "@/repositories";
import type { ListQuery } from "@/types";

export function createServices(repos: Repositories) {
  return {
    listArticles: (q?: ListQuery) => repos.articles.list(q),
    getArticle: (slug: string) => repos.articles.getBySlug(slug),

    listGuides: (q?: ListQuery) => repos.guides.list(q),
    getGuide: (slug: string) => repos.guides.getBySlug(slug),

    listNews: (q?: ListQuery) => repos.news.list(q),
    getNews: (slug: string) => repos.news.getBySlug(slug),

    listGlossary: (q?: ListQuery) => repos.glossary.list(q),
    getGlossaryTerm: (slug: string) => repos.glossary.getBySlug(slug),

    listFaq: (q?: ListQuery) => repos.faq.list(q),
    getFaq: (slug: string) => repos.faq.getBySlug(slug),

    listComparisons: (q?: ListQuery) => repos.comparisons.list(q),
    getComparison: (slug: string) => repos.comparisons.getBySlug(slug),

    listDownloads: (q?: ListQuery) => repos.downloads.list(q),
    getDownload: (slug: string) => repos.downloads.getBySlug(slug),

    listCourses: (q?: ListQuery) => repos.courses.list(q),
    getCourse: (slug: string) => repos.courses.getBySlug(slug),

    listProfessions: (q?: ListQuery) => repos.professions.list(q),
    getProfession: (slug: string) => repos.professions.getBySlug(slug),

    listCareers: (q?: ListQuery) => repos.careers.list(q),
    getCareer: (slug: string) => repos.careers.getBySlug(slug),

    listInstitutions: (q?: ListQuery) => repos.institutions.list(q),
    getInstitution: (slug: string) => repos.institutions.getBySlug(slug),

    listAuthors: (q?: ListQuery) => repos.authors.list(q),
    getAuthor: (slug: string) => repos.authors.getBySlug(slug),

    listCategories: (q?: ListQuery) => repos.categories.list(q),
    getCategory: (slug: string) => repos.categories.getBySlug(slug),

    search: (query: string) => repos.search(query),
  };
}

export type Services = ReturnType<typeof createServices>;
