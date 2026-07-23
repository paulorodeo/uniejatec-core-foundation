/**
 * Domain models — Organização (categorias, tags, coleções).
 * Fonte: CONTENT_MODEL.md.
 */
import type { BaseEntity, EntityMetaData } from "@/types";

export interface Category extends BaseEntity {
  kind: "category";
  title: string;
  description: string;
  metadata?: EntityMetaData;
}
