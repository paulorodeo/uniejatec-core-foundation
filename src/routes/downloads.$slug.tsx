import { createFileRoute } from "@tanstack/react-router";
import { DetailView } from "@/features/detail-view";
import { useDownload } from "@/hooks/use-content";
import { buildDetailHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/downloads/$slug")({
  head: ({ params }) => buildDetailHead(routes.downloadsHub, params.slug, `Download · ${params.slug}`, "Material para download."),
  component: DownloadDetail,
});

function DownloadDetail() {
  const { slug } = Route.useParams();
  const q = useDownload(slug);
  return <DetailView overline="Download" isLoading={q.isLoading} entity={q.data?.data ?? null} />;
}
