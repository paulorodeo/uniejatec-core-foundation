import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage } from "@/features/institutional-page";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/contato")({
  head: () => buildHubHead(routes.contact, "Fale com a UniEjatec."),
  component: () => (
    <InstitutionalPage overline="Institucional" title="Contato" description="Canais oficiais de atendimento." />
  ),
});
