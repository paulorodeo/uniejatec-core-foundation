/**
 * sitemap.xml — gerado a partir de rotas indexáveis + slugs mock.
 * Fonte: ROUTING_SYSTEM.md.
 */
import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { routes } from "@/config/routes.config";
import { createMockAdapter } from "@/adapters/mock";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const adapter = createMockAdapter();
        const staticPaths = Object.values(routes)
          .filter((r) => r.indexable && !("dynamic" in r && r.dynamic))
          .map((r) => r.path);

        const dynamicPaths: string[] = [];
        const collectors: Array<[string, () => Promise<{ data: { slug: string }[] }>]> = [
          [routes.articlesHub.path, () => adapter.articles.list({ limit: 1000 }).then((r) => ({ data: r.data }))],
          [routes.guidesHub.path, () => adapter.guides.list({ limit: 1000 }).then((r) => ({ data: r.data }))],
          [routes.newsHub.path, () => adapter.news.list({ limit: 1000 }).then((r) => ({ data: r.data }))],
          [routes.glossaryHub.path, () => adapter.glossary.list({ limit: 1000 }).then((r) => ({ data: r.data }))],
          [routes.faqHub.path, () => adapter.faq.list({ limit: 1000 }).then((r) => ({ data: r.data }))],
          [routes.comparisonsHub.path, () => adapter.comparisons.list({ limit: 1000 }).then((r) => ({ data: r.data }))],
          [routes.downloadsHub.path, () => adapter.downloads.list({ limit: 1000 }).then((r) => ({ data: r.data }))],
          [routes.coursesHub.path, () => adapter.courses.list({ limit: 1000 }).then((r) => ({ data: r.data }))],
          [routes.professionsHub.path, () => adapter.professions.list({ limit: 1000 }).then((r) => ({ data: r.data }))],
          [routes.careersHub.path, () => adapter.careers.list({ limit: 1000 }).then((r) => ({ data: r.data }))],
          [routes.institutionsHub.path, () => adapter.institutions.list({ limit: 1000 }).then((r) => ({ data: r.data }))],
          [routes.authorsHub.path, () => adapter.authors.list({ limit: 1000 }).then((r) => ({ data: r.data }))],
          [routes.categoriesHub.path, () => adapter.categories.list({ limit: 1000 }).then((r) => ({ data: r.data }))],
        ];
        for (const [prefix, fetcher] of collectors) {
          const res = await fetcher();
          for (const item of res.data) dynamicPaths.push(`${prefix}/${item.slug}`);
        }

        const urls = [...staticPaths, ...dynamicPaths]
          .map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`)
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
