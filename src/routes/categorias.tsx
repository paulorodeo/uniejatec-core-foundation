import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/features/hub-page";
import { useCategories } from "@/hooks/use-content";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/categorias")({
  head: () => buildHubHead(routes.categoriesHub, "Categorias editoriais da plataforma."),
  component: CategoriesHub,
});

function CategoriesHub() {
  const q = useCategories();
  return (
    <HubPage
      overline="Organização"
      title="Categorias"
      description="Áreas de conhecimento organizadas para facilitar a navegação."
      hrefPrefix={routes.categoriesHub.path}
      isLoading={q.isLoading}
      isError={q.isError}
      items={q.data?.data.map((c) => ({ slug: c.slug, title: c.title, excerpt: c.description }))}
    />
  );
}
