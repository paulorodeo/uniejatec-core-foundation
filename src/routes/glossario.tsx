import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/features/hub-page";
import { useGlossary } from "@/hooks/use-content";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/glossario")({
  head: () => buildHubHead(routes.glossaryHub, "Glossário oficial de termos da educação profissional."),
  component: GlossaryHub,
});

function GlossaryHub() {
  const q = useGlossary();
  return (
    <HubPage
      overline="Editorial"
      title="Glossário"
      description="Definições oficiais dos principais termos utilizados na plataforma."
      hrefPrefix={routes.glossaryHub.path}
      isLoading={q.isLoading}
      isError={q.isError}
      items={q.data?.data.map((g) => ({ slug: g.slug, title: g.term, excerpt: g.definition }))}
    />
  );
}
