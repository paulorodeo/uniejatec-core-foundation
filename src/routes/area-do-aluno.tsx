import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage } from "@/features/institutional-page";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/area-do-aluno")({
  head: () => buildHubHead(routes.studentArea, "Área restrita do aluno."),
  component: () => <InstitutionalPage overline="Acadêmico" title="Área do Aluno" description="Autenticação e portal do aluno serão implementados em sprint futura." />,
});
