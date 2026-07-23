import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/features/hub-page";
import { useAuthors } from "@/hooks/use-content";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/autores")({
  head: () => buildHubHead(routes.authorsHub, "Autores e colaboradores da UniEjatec."),
  component: AuthorsHub,
});

function AuthorsHub() {
  const q = useAuthors();
  return (
    <HubPage
      overline="Institucional"
      title="Autores"
      description="Editores, colunistas e especialistas responsáveis pelos conteúdos."
      hrefPrefix={routes.authorsHub.path}
      isLoading={q.isLoading}
      isError={q.isError}
      items={q.data?.data.map((a) => ({ slug: a.slug, title: a.name, excerpt: a.excerpt, badge: a.role }))}
    />
  );
}
