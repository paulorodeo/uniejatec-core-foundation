/**
 * MockAdapter — implementação padrão desta sprint.
 * Cumpre integralmente o contrato PlatformAdapter.
 * Fonte: DATA_ARCHITECTURE.md.
 */

import type { PlatformAdapter, EntityAdapter, SearchResult } from "../contracts";
import type { ApiResponse, ListQuery } from "@/types";
import { paginateArray } from "@/utils";
import * as fixtures from "./fixtures";

interface HasSlugTitle {
  slug: string;
  title: string;
  excerpt?: string;
}

function createEntityAdapter<T extends HasSlugTitle>(
  items: readonly T[],
): EntityAdapter<T> {
  return {
    async list(query?: ListQuery): Promise<ApiResponse<T[]>> {
      const filtered = query?.search
        ? items.filter((i) =>
            i.title.toLowerCase().includes(query.search!.toLowerCase()),
          )
        : items;
      const { data, pagination } = paginateArray(
        filtered,
        query?.page ?? 1,
        query?.limit ?? 12,
      );
      return { success: true, data, meta: { pagination } };
    },
    async getBySlug(slug: string): Promise<ApiResponse<T | null>> {
      const found = items.find((i) => i.slug === slug) ?? null;
      return { success: true, data: found };
    },
  };
}

function toSearchResult(item: HasSlugTitle & { kind: string }, urlPrefix: string): SearchResult {
  return {
    id: `${item.kind}-${item.slug}`,
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt ?? "",
    kind: item.kind,
    url: `${urlPrefix}/${item.slug}`,
  };
}

export function createMockAdapter(): PlatformAdapter {
  return {
    articles: createEntityAdapter(fixtures.mockArticles),
    guides: createEntityAdapter(fixtures.mockGuides),
    news: createEntityAdapter(fixtures.mockNews),
    glossary: createEntityAdapter(fixtures.mockGlossary),
    faq: createEntityAdapter(fixtures.mockFaq),
    comparisons: createEntityAdapter(fixtures.mockComparisons),
    downloads: createEntityAdapter(fixtures.mockDownloads),
    courses: createEntityAdapter(fixtures.mockCourses),
    professions: createEntityAdapter(fixtures.mockProfessions),
    careers: createEntityAdapter(fixtures.mockCareers),
    institutions: createEntityAdapter(fixtures.mockInstitutions),
    authors: createEntityAdapter(fixtures.mockAuthors),
    categories: createEntityAdapter(fixtures.mockCategories),
    async search(query: string) {
      const q = query.toLowerCase().trim();
      if (!q) return { success: true, data: [] };
      const results: SearchResult[] = [
        ...fixtures.mockArticles.map((i) => toSearchResult(i, "/artigos")),
        ...fixtures.mockGuides.map((i) => toSearchResult(i, "/guias")),
        ...fixtures.mockCourses.map((i) => toSearchResult(i, "/cursos")),
        ...fixtures.mockProfessions.map((i) => toSearchResult(i, "/profissoes")),
        ...fixtures.mockCareers.map((i) => toSearchResult(i, "/carreiras")),
        ...fixtures.mockNews.map((i) => toSearchResult(i, "/noticias")),
      ].filter(
        (r) =>
          r.title.toLowerCase().includes(q) || r.excerpt.toLowerCase().includes(q),
      );
      return { success: true, data: results };
    },
  };
}
