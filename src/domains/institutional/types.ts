/**
 * Domain models — Institucional.
 * Fonte: CONTENT_MODEL.md.
 */
import type { BaseEntity, MediaAsset, EntityMetaData } from "@/types";

export interface Institution extends BaseEntity {
  kind: "institution";
  title: string;
  excerpt: string;
  logo?: MediaAsset;
  city?: string;
  metadata?: EntityMetaData;
}

export interface Author extends BaseEntity {
  kind: "author";
  name: string;
  /** Alias de exibição — normalmente igual a `name`; usado por componentes genéricos. */
  title: string;
  excerpt: string;
  avatar?: MediaAsset;
  role: string;
  metadata?: EntityMetaData;
}
