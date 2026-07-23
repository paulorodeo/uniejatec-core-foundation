import { createFileRoute } from "@tanstack/react-router";
import { DetailView } from "@/features/detail-view";
import { useNewsItem } from "@/hooks/use-content";
import { buildDetailHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/noticias/$slug")({
  head: ({ params }) => buildDetailHead(routes.newsHub, params.slug, `Notícia · ${params.slug}`, "Notícia UniEjatec."),
  component: NewsDetail,
});

function NewsDetail() {
  const { slug } = Route.useParams();
  const q = useNewsItem(slug);
  return <DetailView overline="Notícia" isLoading={q.isLoading} entity={q.data?.data ?? null} />;
}
