import { createFileRoute } from "@tanstack/react-router";
import { DetailView } from "@/features/detail-view";
import { useGuide } from "@/hooks/use-content";
import { buildDetailHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/guias/$slug")({
  head: ({ params }) => buildDetailHead(routes.guidesHub, params.slug, `Guia · ${params.slug}`, "Guia editorial da UniEjatec."),
  component: GuideDetail,
});

function GuideDetail() {
  const { slug } = Route.useParams();
  const q = useGuide(slug);
  return <DetailView overline="Guia" isLoading={q.isLoading} entity={q.data?.data ?? null} />;
}
