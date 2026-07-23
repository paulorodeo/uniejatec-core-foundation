import { createFileRoute } from "@tanstack/react-router";
import { DetailView } from "@/features/detail-view";
import { useGlossaryTerm } from "@/hooks/use-content";
import { buildDetailHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/glossario/$slug")({
  head: ({ params }) => buildDetailHead(routes.glossaryHub, params.slug, `Termo · ${params.slug}`, "Termo do glossário."),
  component: GlossaryDetail,
});

function GlossaryDetail() {
  const { slug } = Route.useParams();
  const q = useGlossaryTerm(slug);
  const entity = q.data?.data;
  return (
    <DetailView
      overline="Glossário"
      isLoading={q.isLoading}
      entity={entity ? { title: entity.term, excerpt: entity.definition, body: entity.definition } : null}
    />
  );
}
