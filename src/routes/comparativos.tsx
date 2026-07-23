import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/features/hub-page";
import { useComparisons } from "@/hooks/use-content";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/comparativos")({
  head: () => buildHubHead(routes.comparisonsHub, "Comparativos entre cursos, profissões e modalidades."),
  component: ComparisonsHub,
});

function ComparisonsHub() {
  const q = useComparisons();
  return (
    <HubPage
      overline="Editorial"
      title="Comparativos"
      description="Análises comparativas para apoiar suas decisões."
      hrefPrefix={routes.comparisonsHub.path}
      isLoading={q.isLoading}
      isError={q.isError}
      items={q.data?.data.map((c) => ({ slug: c.slug, title: c.title, excerpt: c.excerpt }))}
    />
  );
}
