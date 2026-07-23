import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/features/hub-page";
import { useGuides } from "@/hooks/use-content";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/guias")({
  head: () => buildHubHead(routes.guidesHub, "Guias completos sobre cursos, profissões e carreiras."),
  component: GuidesHub,
});

function GuidesHub() {
  const q = useGuides();
  return (
    <HubPage
      overline="Editorial"
      title="Guias"
      description="Materiais longos e aprofundados para orientar suas escolhas."
      hrefPrefix={routes.guidesHub.path}
      isLoading={q.isLoading}
      isError={q.isError}
      items={q.data?.data.map((g) => ({ slug: g.slug, title: g.title, excerpt: g.excerpt, badge: `${g.chapters} capítulos` }))}
    />
  );
}
