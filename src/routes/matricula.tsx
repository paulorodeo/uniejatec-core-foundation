import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage } from "@/features/institutional-page";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/matricula")({
  head: () => buildHubHead(routes.enrollment, "Matrícula em cursos UniEjatec."),
  component: () => <InstitutionalPage overline="Acadêmico" title="Matrícula" description="Fluxo de matrícula será implementado em sprint futura." />,
});
