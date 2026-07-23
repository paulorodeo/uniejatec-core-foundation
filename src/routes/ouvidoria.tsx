import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage } from "@/features/institutional-page";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/ouvidoria")({
  head: () => buildHubHead(routes.ombudsman, "Canal oficial de ouvidoria."),
  component: () => <InstitutionalPage overline="Institucional" title="Ouvidoria" description="Registre elogios, sugestões e reclamações." />,
});
