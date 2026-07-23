import { createFileRoute } from "@tanstack/react-router";
import { DetailView } from "@/features/detail-view";
import { useArticle } from "@/hooks/use-content";
import { buildDetailHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/artigos/$slug")({
  head: ({ params }) =>
    buildDetailHead(routes.articlesHub, params.slug, `Artigo · ${params.slug}`, "Artigo editorial da UniEjatec."),
  component: ArticleDetail,
});

function ArticleDetail() {
  const { slug } = Route.useParams();
  const q = useArticle(slug);
  return <DetailView overline="Artigo" isLoading={q.isLoading} entity={q.data?.data ?? null} />;
}
