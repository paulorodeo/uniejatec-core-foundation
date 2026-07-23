import { createFileRoute } from "@tanstack/react-router";
import { DetailView } from "@/features/detail-view";
import { useComparison } from "@/hooks/use-content";
import { buildDetailHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/comparativos/$slug")({
  head: ({ params }) => buildDetailHead(routes.comparisonsHub, params.slug, `Comparativo · ${params.slug}`, "Comparativo editorial."),
  component: ComparisonDetail,
});

function ComparisonDetail() {
  const { slug } = Route.useParams();
  const q = useComparison(slug);
  return <DetailView overline="Comparativo" isLoading={q.isLoading} entity={q.data?.data ?? null} />;
}
