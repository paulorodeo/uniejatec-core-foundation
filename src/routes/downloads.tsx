import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/features/hub-page";
import { useDownloads } from "@/hooks/use-content";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/downloads")({
  head: () => buildHubHead(routes.downloadsHub, "Materiais gratuitos para download."),
  component: DownloadsHub,
});

function DownloadsHub() {
  const q = useDownloads();
  return (
    <HubPage
      overline="Recursos"
      title="Downloads"
      description="E-books, planilhas e materiais complementares."
      hrefPrefix={routes.downloadsHub.path}
      isLoading={q.isLoading}
      isError={q.isError}
      items={q.data?.data.map((d) => ({ slug: d.slug, title: d.title, excerpt: d.excerpt, badge: d.format }))}
    />
  );
}
