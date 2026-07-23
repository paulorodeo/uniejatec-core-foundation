import { createFileRoute } from "@tanstack/react-router";
import { DetailView } from "@/features/detail-view";
import { useInstitution } from "@/hooks/use-content";
import { buildDetailHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/instituicoes/$slug")({
  head: ({ params }) => buildDetailHead(routes.institutionsHub, params.slug, `Instituição · ${params.slug}`, "Instituição."),
  component: InstitutionDetail,
});

function InstitutionDetail() {
  const { slug } = Route.useParams();
  const q = useInstitution(slug);
  return <DetailView overline="Instituição" isLoading={q.isLoading} entity={q.data?.data ?? null} />;
}
