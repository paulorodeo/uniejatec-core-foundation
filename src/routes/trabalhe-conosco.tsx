import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage } from "@/features/institutional-page";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/trabalhe-conosco")({
  head: () => buildHubHead(routes.careersJobs, "Oportunidades de carreira na UniEjatec."),
  component: () => <InstitutionalPage overline="Institucional" title="Trabalhe Conosco" description="Vagas abertas e cultura interna." />,
});
