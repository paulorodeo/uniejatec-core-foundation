import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/features/hub-page";
import { useInstitutions } from "@/hooks/use-content";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/instituicoes")({
  head: () => buildHubHead(routes.institutionsHub, "Instituições parceiras da UniEjatec."),
  component: InstitutionsHub,
});

function InstitutionsHub() {
  const q = useInstitutions();
  return (
    <HubPage
      overline="Institucional"
      title="Instituições"
      description="Conheça a UniEjatec e sua rede de instituições parceiras."
      hrefPrefix={routes.institutionsHub.path}
      isLoading={q.isLoading}
      isError={q.isError}
      items={q.data?.data.map((i) => ({ slug: i.slug, title: i.title, excerpt: i.excerpt }))}
    />
  );
}
