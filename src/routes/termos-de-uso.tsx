import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage } from "@/features/institutional-page";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => buildHubHead(routes.terms, "Termos de Uso da plataforma UniEjatec."),
  component: () => <InstitutionalPage overline="Legal" title="Termos de Uso" description="Condições de uso da plataforma." />,
});
