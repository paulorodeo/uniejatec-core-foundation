/**
 * Domain models — Educação.
 * Fonte: CONTENT_MODEL.md.
 */
import type { BaseEntity, MediaAsset, EntityMetaData } from "@/types";

export type CourseModality = "presencial" | "ead" | "hibrido";
export type CourseDegree = "tecnico" | "graduacao" | "pos-graduacao" | "livre";

export interface Course extends BaseEntity {
  kind: "course";
  title: string;
  excerpt: string;
  coverImage?: MediaAsset;
  modality: CourseModality;
  degree: CourseDegree;
  durationMonths: number;
  institutionSlug?: string;
  categorySlug?: string;
  metadata?: EntityMetaData;
}
