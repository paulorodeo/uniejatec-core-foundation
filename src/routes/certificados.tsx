import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage } from "@/features/institutional-page";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/certificados")({
  head: () => buildHubHead(routes.certificates, "Certificados emitidos pela UniEjatec."),
  component: () => <InstitutionalPage overline="Acadêmico" title="Certificados" description="Emissão e validação de certificados serão implementadas em sprint futura." />,
});
