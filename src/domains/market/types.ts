/**
 * Domain models — Mercado de Trabalho.
 * Fonte: CONTENT_MODEL.md.
 */
import type { BaseEntity, MediaAsset, EntityMetaData } from "@/types";

export interface Profession extends BaseEntity {
  kind: "profession";
  title: string;
  excerpt: string;
  coverImage?: MediaAsset;
  area: string;
  averageSalary?: number;
  metadata?: EntityMetaData;
}

export interface Career extends BaseEntity {
  kind: "career";
  title: string;
  excerpt: string;
  coverImage?: MediaAsset;
  seniorityLevels: readonly string[];
  metadata?: EntityMetaData;
}
