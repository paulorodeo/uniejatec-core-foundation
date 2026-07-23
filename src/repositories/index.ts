/**
 * Repositories — abstraem o acesso a dados por domínio.
 * Fonte: DATA_ARCHITECTURE.md.
 *
 * Repositories conhecem apenas o Adapter injetado.
 * Services consomem Repositories.
 */

import type { PlatformAdapter, EntityAdapter } from "@/adapters/contracts";

export interface EntityRepository<T> {
  list: EntityAdapter<T>["list"];
  getBySlug: EntityAdapter<T>["getBySlug"];
}

function fromAdapter<T>(adapter: EntityAdapter<T>): EntityRepository<T> {
  return { list: adapter.list.bind(adapter), getBySlug: adapter.getBySlug.bind(adapter) };
}

export function createRepositories(adapter: PlatformAdapter) {
  return {
    articles: fromAdapter(adapter.articles),
    guides: fromAdapter(adapter.guides),
    news: fromAdapter(adapter.news),
    glossary: fromAdapter(adapter.glossary),
    faq: fromAdapter(adapter.faq),
    comparisons: fromAdapter(adapter.comparisons),
    downloads: fromAdapter(adapter.downloads),
    courses: fromAdapter(adapter.courses),
    professions: fromAdapter(adapter.professions),
    careers: fromAdapter(adapter.careers),
    institutions: fromAdapter(adapter.institutions),
    authors: fromAdapter(adapter.authors),
    categories: fromAdapter(adapter.categories),
    search: adapter.search.bind(adapter),
  };
}

export type Repositories = ReturnType<typeof createRepositories>;
