import { Link } from "@tanstack/react-router";
import { Container } from "@/components/ui/layout-primitives";
import { primaryNav } from "@/config/navigation.config";
import { routes } from "@/config/routes.config";
import { siteConfig } from "@/config/site.config";

/**
 * SiteHeader — cabeçalho oficial.
 * Fonte: COMPONENT_LIBRARY.md (Header, MobileMenu).
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/85 backdrop-blur">
      <Container size="xl">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to={routes.home.path} className="flex items-center gap-2" aria-label={siteConfig.name}>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-heading font-bold">
              U
            </span>
            <span className="type-h4">{siteConfig.name}</span>
          </Link>

          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {primaryNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="rounded-md px-3 py-2 text-sm font-medium text-text-secondary hover:bg-muted hover:text-text-primary"
                    activeProps={{ className: "text-primary" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to={routes.search.path}
              className="rounded-md border border-border px-3 py-2 text-sm text-text-secondary hover:bg-muted"
            >
              Buscar
            </Link>
            <Link
              to={routes.studentArea.path}
              className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 md:inline-flex"
            >
              Área do Aluno
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
