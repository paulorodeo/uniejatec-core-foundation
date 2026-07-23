import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage } from "@/features/institutional-page";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/sobre")({
  head: () => buildHubHead(routes.about, "Quem somos e o que fazemos na UniEjatec."),
  component: () => (
    <InstitutionalPage overline="Institucional" title="Sobre a UniEjatec" description="Nossa história, missão e valores." />
  ),
});
