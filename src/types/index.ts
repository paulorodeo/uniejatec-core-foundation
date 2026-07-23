/**
 * Types base — Fonte oficial dos contratos canônicos.
 * Fonte: API_CONTRACTS.md, CONTENT_MODEL.md.
 *
 * Estes tipos são independentes de CMS e representam o vocabulário do domínio.
 */

export type UUID = string;
export type ISODateTime = string;

export type ContentStatus =
  | "Draft"
  | "Review"
  | "Scheduled"
  | "Published"
  | "Archived"
  | "Deleted";

export type Language = "pt-BR" | "en" | "es";

export interface BaseEntity {
  id: UUID;
  slug: string;
  status: ContentStatus;
  language: Language;
  createdAt: ISODateTime;
  updatedAt: ISODateTime;
  publishedAt: ISODateTime | null;
}

export interface OpenGraph {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article" | "profile";
}

export interface TwitterMeta {
  card: "summary" | "summary_large_image";
  title: string;
  description: string;
  image?: string;
}

export interface EntityMetaData {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
  openGraph?: OpenGraph;
  twitter?: TwitterMeta;
  schema?: Record<string, unknown>;
}

export interface MediaAsset {
  id: UUID;
  url: string;
  alt: string;
  width?: number;
  height?: number;
  mimeType?: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  meta?: { pagination?: Pagination };
  links?: { self?: string; next?: string; previous?: string };
}

export interface ListQuery {
  page?: number;
  limit?: number;
  sort?: string;
  search?: string;
}
