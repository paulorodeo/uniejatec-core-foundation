/**
 * Domain models — Editorial.
 * Fonte: CONTENT_MODEL.md.
 */
import type { BaseEntity, MediaAsset, EntityMetaData } from "@/types";

export interface EditorialEntityBase extends BaseEntity {
  title: string;
  excerpt: string;
  coverImage?: MediaAsset;
  authorSlug?: string;
  categorySlug?: string;
  metadata?: EntityMetaData;
}

export interface Article extends EditorialEntityBase {
  kind: "article";
  readingTime: number;
  body: string;
}

export interface Guide extends EditorialEntityBase {
  kind: "guide";
  chapters: number;
  body: string;
}

export interface News extends EditorialEntityBase {
  kind: "news";
  body: string;
}

export interface Glossary extends EditorialEntityBase {
  kind: "glossary";
  term: string;
  definition: string;
}

export interface Faq extends EditorialEntityBase {
  kind: "faq";
  question: string;
  answer: string;
}

export interface Comparison extends EditorialEntityBase {
  kind: "comparison";
  subjects: string[];
  body: string;
}

export interface Download extends EditorialEntityBase {
  kind: "download";
  fileUrl: string;
  fileSize?: string;
  format: string;
}
