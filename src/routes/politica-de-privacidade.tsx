import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage } from "@/features/institutional-page";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => buildHubHead(routes.privacy, "Política de Privacidade da UniEjatec."),
  component: () => <InstitutionalPage overline="Legal" title="Política de Privacidade" description="Como tratamos seus dados pessoais." />,
});
