import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/features/hub-page";
import { useFaqList } from "@/hooks/use-content";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/faq")({
  head: () => buildHubHead(routes.faqHub, "Perguntas frequentes sobre cursos, matrícula e a UniEjatec."),
  component: FaqHub,
});

function FaqHub() {
  const q = useFaqList();
  return (
    <HubPage
      overline="Editorial"
      title="Perguntas Frequentes"
      description="Respostas objetivas para as dúvidas mais comuns."
      hrefPrefix={routes.faqHub.path}
      isLoading={q.isLoading}
      isError={q.isError}
      items={q.data?.data.map((f) => ({ slug: f.slug, title: f.question, excerpt: f.answer }))}
    />
  );
}
