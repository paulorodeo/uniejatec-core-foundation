import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage } from "@/features/institutional-page";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/login")({
  head: () => buildHubHead(routes.login, "Acesso à Área do Aluno."),
  component: () => <InstitutionalPage overline="Acadêmico" title="Entrar" description="Autenticação será habilitada em sprint futura." />,
});
