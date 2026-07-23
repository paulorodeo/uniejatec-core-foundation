/**
 * Adapter contracts — Interfaces que qualquer origem de dados DEVE cumprir.
 * Fonte: DATA_ARCHITECTURE.md, API_CONTRACTS.md.
 *
 * Implementações válidas: MockAdapter (esta sprint), PayloadAdapter,
 * WordPressAdapter, RestAdapter, GraphQLAdapter (futuras).
 *
 * NUNCA expor detalhes específicos de CMS.
 */

import type { ApiResponse, ListQuery } from "@/types";
import type { Article, Guide, News, Glossary, Faq, Comparison, Download } from "@/domains/editorial/types";
import type { Course } from "@/domains/education/types";
import type { Profession, Career } from "@/domains/market/types";
import type { Institution, Author } from "@/domains/institutional/types";
import type { Category } from "@/domains/organization/types";

export interface EntityAdapter<T> {
  list(query?: ListQuery): Promise<ApiResponse<T[]>>;
  getBySlug(slug: string): Promise<ApiResponse<T | null>>;
}

export interface PlatformAdapter {
  articles: EntityAdapter<Article>;
  guides: EntityAdapter<Guide>;
  news: EntityAdapter<News>;
  glossary: EntityAdapter<Glossary>;
  faq: EntityAdapter<Faq>;
  comparisons: EntityAdapter<Comparison>;
  downloads: EntityAdapter<Download>;
  courses: EntityAdapter<Course>;
  professions: EntityAdapter<Profession>;
  careers: EntityAdapter<Career>;
  institutions: EntityAdapter<Institution>;
  authors: EntityAdapter<Author>;
  categories: EntityAdapter<Category>;
  search(query: string): Promise<ApiResponse<SearchResult[]>>;
}

export interface SearchResult {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  kind: string;
  url: string;
}
