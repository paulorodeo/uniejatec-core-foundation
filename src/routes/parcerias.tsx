import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage } from "@/features/institutional-page";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/parcerias")({
  head: () => buildHubHead(routes.partnerships, "Parcerias e convênios institucionais."),
  component: () => <InstitutionalPage overline="Institucional" title="Parcerias" description="Convênios acadêmicos e corporativos." />,
});
