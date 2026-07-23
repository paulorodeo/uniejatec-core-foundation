import { createFileRoute } from "@tanstack/react-router";
import { DetailView } from "@/features/detail-view";
import { useProfession } from "@/hooks/use-content";
import { buildDetailHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/profissoes/$slug")({
  head: ({ params }) => buildDetailHead(routes.professionsHub, params.slug, `Profissão · ${params.slug}`, "Ficha da profissão."),
  component: ProfessionDetail,
});

function ProfessionDetail() {
  const { slug } = Route.useParams();
  const q = useProfession(slug);
  return <DetailView overline="Profissão" isLoading={q.isLoading} entity={q.data?.data ?? null} />;
}
