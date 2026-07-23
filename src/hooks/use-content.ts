/**
 * Hooks de dados — consomem Services via TanStack Query.
 * NUNCA acessam APIs diretamente. NUNCA contêm regras de negócio.
 */

import { useQuery } from "@tanstack/react-query";
import { useServices } from "@/providers/adapter-provider";
import type { ListQuery } from "@/types";

const list = <T,>(key: string, fn: () => Promise<T>, q?: ListQuery) =>
  useQuery({ queryKey: [key, "list", q ?? {}], queryFn: fn });

const detail = <T,>(key: string, slug: string, fn: () => Promise<T>) =>
  useQuery({ queryKey: [key, "detail", slug], queryFn: fn, enabled: Boolean(slug) });

export const useArticles = (q?: ListQuery) => {
  const s = useServices();
  return list("articles", () => s.listArticles(q), q);
};
export const useArticle = (slug: string) => {
  const s = useServices();
  return detail("articles", slug, () => s.getArticle(slug));
};

export const useGuides = (q?: ListQuery) => {
  const s = useServices();
  return list("guides", () => s.listGuides(q), q);
};
export const useGuide = (slug: string) => {
  const s = useServices();
  return detail("guides", slug, () => s.getGuide(slug));
};

export const useNewsList = (q?: ListQuery) => {
  const s = useServices();
  return list("news", () => s.listNews(q), q);
};
export const useNewsItem = (slug: string) => {
  const s = useServices();
  return detail("news", slug, () => s.getNews(slug));
};

export const useGlossary = (q?: ListQuery) => {
  const s = useServices();
  return list("glossary", () => s.listGlossary(q), q);
};
export const useGlossaryTerm = (slug: string) => {
  const s = useServices();
  return detail("glossary", slug, () => s.getGlossaryTerm(slug));
};

export const useFaqList = (q?: ListQuery) => {
  const s = useServices();
  return list("faq", () => s.listFaq(q), q);
};
export const useFaq = (slug: string) => {
  const s = useServices();
  return detail("faq", slug, () => s.getFaq(slug));
};

export const useComparisons = (q?: ListQuery) => {
  const s = useServices();
  return list("comparisons", () => s.listComparisons(q), q);
};
export const useComparison = (slug: string) => {
  const s = useServices();
  return detail("comparisons", slug, () => s.getComparison(slug));
};

export const useDownloads = (q?: ListQuery) => {
  const s = useServices();
  return list("downloads", () => s.listDownloads(q), q);
};
export const useDownload = (slug: string) => {
  const s = useServices();
  return detail("downloads", slug, () => s.getDownload(slug));
};

export const useCourses = (q?: ListQuery) => {
  const s = useServices();
  return list("courses", () => s.listCourses(q), q);
};
export const useCourse = (slug: string) => {
  const s = useServices();
  return detail("courses", slug, () => s.getCourse(slug));
};

export const useProfessions = (q?: ListQuery) => {
  const s = useServices();
  return list("professions", () => s.listProfessions(q), q);
};
export const useProfession = (slug: string) => {
  const s = useServices();
  return detail("professions", slug, () => s.getProfession(slug));
};

export const useCareers = (q?: ListQuery) => {
  const s = useServices();
  return list("careers", () => s.listCareers(q), q);
};
export const useCareer = (slug: string) => {
  const s = useServices();
  return detail("careers", slug, () => s.getCareer(slug));
};

export const useInstitutions = (q?: ListQuery) => {
  const s = useServices();
  return list("institutions", () => s.listInstitutions(q), q);
};
export const useInstitution = (slug: string) => {
  const s = useServices();
  return detail("institutions", slug, () => s.getInstitution(slug));
};

export const useAuthors = (q?: ListQuery) => {
  const s = useServices();
  return list("authors", () => s.listAuthors(q), q);
};
export const useAuthor = (slug: string) => {
  const s = useServices();
  return detail("authors", slug, () => s.getAuthor(slug));
};

export const useCategories = (q?: ListQuery) => {
  const s = useServices();
  return list("categories", () => s.listCategories(q), q);
};
export const useCategory = (slug: string) => {
  const s = useServices();
  return detail("categories", slug, () => s.getCategory(slug));
};

export const useSearch = (query: string) => {
  const s = useServices();
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => s.search(query),
    enabled: query.trim().length > 0,
  });
};
