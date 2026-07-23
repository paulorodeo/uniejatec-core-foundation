import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/features/hub-page";
import { useArticles } from "@/hooks/use-content";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/artigos")({
  head: () =>
    buildHubHead(routes.articlesHub, "Artigos editoriais sobre educação, carreira e mercado de trabalho."),
  component: ArticlesHub,
});

function ArticlesHub() {
  const q = useArticles();
  return (
    <HubPage
      overline="Editorial"
      title="Artigos"
      description="Análises, tendências e orientação profissional produzidas pela UniEjatec."
      hrefPrefix={routes.articlesHub.path}
      isLoading={q.isLoading}
      isError={q.isError}
      items={q.data?.data.map((a) => ({ slug: a.slug, title: a.title, excerpt: a.excerpt, badge: `${a.readingTime} min` }))}
    />
  );
}
