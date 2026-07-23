import { createFileRoute } from "@tanstack/react-router";
import { DetailView } from "@/features/detail-view";
import { useAuthor } from "@/hooks/use-content";
import { buildDetailHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/autores/$slug")({
  head: ({ params }) => buildDetailHead(routes.authorsHub, params.slug, `Autor · ${params.slug}`, "Perfil de autor."),
  component: AuthorDetail,
});

function AuthorDetail() {
  const { slug } = Route.useParams();
  const q = useAuthor(slug);
  const entity = q.data?.data;
  return (
    <DetailView
      overline="Autor"
      isLoading={q.isLoading}
      entity={entity ? { title: entity.name, excerpt: entity.excerpt, body: entity.role } : null}
    />
  );
}
