import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/features/hub-page";
import { useProfessions } from "@/hooks/use-content";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/profissoes")({
  head: () => buildHubHead(routes.professionsHub, "Panorama de profissões e mercado de trabalho."),
  component: ProfessionsHub,
});

function ProfessionsHub() {
  const q = useProfessions();
  return (
    <HubPage
      overline="Mercado"
      title="Profissões"
      description="Descubra o dia a dia, salários e caminhos de formação de cada profissão."
      hrefPrefix={routes.professionsHub.path}
      isLoading={q.isLoading}
      isError={q.isError}
      items={q.data?.data.map((p) => ({ slug: p.slug, title: p.title, excerpt: p.excerpt, badge: p.area }))}
    />
  );
}
