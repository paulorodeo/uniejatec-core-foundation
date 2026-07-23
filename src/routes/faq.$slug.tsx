import { createFileRoute } from "@tanstack/react-router";
import { DetailView } from "@/features/detail-view";
import { useFaq } from "@/hooks/use-content";
import { buildDetailHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/faq/$slug")({
  head: ({ params }) => buildDetailHead(routes.faqHub, params.slug, `FAQ · ${params.slug}`, "Pergunta frequente."),
  component: FaqDetail,
});

function FaqDetail() {
  const { slug } = Route.useParams();
  const q = useFaq(slug);
  const entity = q.data?.data;
  return (
    <DetailView
      overline="FAQ"
      isLoading={q.isLoading}
      entity={entity ? { title: entity.question, excerpt: entity.answer, body: entity.answer } : null}
    />
  );
}
