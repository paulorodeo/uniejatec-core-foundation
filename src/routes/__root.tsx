import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AdapterProvider } from "@/providers/adapter-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/layout-primitives";
import { siteConfig } from "@/config/site.config";
import { seoConfig } from "@/config/seo.config";

function NotFoundComponent() {
  return (
    <Container size="md" className="py-24 text-center">
      <p className="type-overline text-primary">Erro 404</p>
      <h1 className="mt-3 type-h1">Página não encontrada</h1>
      <p className="mt-3 type-lead">
        O endereço acessado não existe ou foi movido. Verifique a URL ou volte à página inicial.
      </p>
      <div className="mt-8">
        <a
          href="/"
          className="inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Ir para a Home
        </a>
      </div>
    </Container>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <Container size="md" className="py-24 text-center">
      <h1 className="type-h1">Não foi possível carregar esta página</h1>
      <p className="mt-3 type-lead">
        Um erro inesperado interrompeu o carregamento. Tente novamente ou volte à Home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <Button
          onClick={() => {
            router.invalidate();
            reset();
          }}
        >
          Tentar novamente
        </Button>
        <a
          href="/"
          className="inline-flex h-11 items-center rounded-md border border-border px-5 text-sm font-medium hover:bg-muted"
        >
          Ir para a Home
        </a>
      </div>
    </Container>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: seoConfig.defaultTitle },
      { name: "description", content: seoConfig.defaultDescription },
      { name: "author", content: siteConfig.organization.name },
      { property: "og:site_name", content: siteConfig.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: seoConfig.locale },
      { name: "twitter:card", content: seoConfig.twitterCard },
      { name: "twitter:site", content: siteConfig.twitter },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.organization.name,
          legalName: siteConfig.organization.legalName,
          description: siteConfig.description,
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <AdapterProvider>
          <AppShell>
            <Outlet />
          </AppShell>
        </AdapterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
