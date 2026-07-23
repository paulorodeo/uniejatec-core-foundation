import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/features/hub-page";
import { useCareers } from "@/hooks/use-content";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/carreiras")({
  head: () => buildHubHead(routes.careersHub, "Trilhas de carreira e progressão profissional."),
  component: CareersHub,
});

function CareersHub() {
  const q = useCareers();
  return (
    <HubPage
      overline="Mercado"
      title="Carreiras"
      description="Trilhas completas por área e nível de senioridade."
      hrefPrefix={routes.careersHub.path}
      isLoading={q.isLoading}
      isError={q.isError}
      items={q.data?.data.map((c) => ({ slug: c.slug, title: c.title, excerpt: c.excerpt }))}
    />
  );
}
