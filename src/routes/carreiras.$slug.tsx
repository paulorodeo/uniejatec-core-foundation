import { createFileRoute } from "@tanstack/react-router";
import { DetailView } from "@/features/detail-view";
import { useCareer } from "@/hooks/use-content";
import { buildDetailHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/carreiras/$slug")({
  head: ({ params }) => buildDetailHead(routes.careersHub, params.slug, `Carreira · ${params.slug}`, "Trilha de carreira."),
  component: CareerDetail,
});

function CareerDetail() {
  const { slug } = Route.useParams();
  const q = useCareer(slug);
  return <DetailView overline="Carreira" isLoading={q.isLoading} entity={q.data?.data ?? null} />;
}
