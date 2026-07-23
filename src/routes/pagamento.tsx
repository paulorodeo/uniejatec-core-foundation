import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage } from "@/features/institutional-page";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/pagamento")({
  head: () => buildHubHead(routes.payment, "Pagamento de matrículas e mensalidades."),
  component: () => <InstitutionalPage overline="Acadêmico" title="Pagamento" description="Integração de pagamento será implementada em sprint futura." />,
});
