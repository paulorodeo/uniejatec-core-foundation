import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/features/hub-page";
import { useNewsList } from "@/hooks/use-content";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/noticias")({
  head: () => buildHubHead(routes.newsHub, "Notícias da UniEjatec e do universo educacional."),
  component: NewsHub,
});

function NewsHub() {
  const q = useNewsList();
  return (
    <HubPage
      overline="Editorial"
      title="Notícias"
      description="Últimas atualizações institucionais e do setor educacional."
      hrefPrefix={routes.newsHub.path}
      isLoading={q.isLoading}
      isError={q.isError}
      items={q.data?.data.map((n) => ({ slug: n.slug, title: n.title, excerpt: n.excerpt }))}
    />
  );
}
