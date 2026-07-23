import { Link, useRouterState } from "@tanstack/react-router";
import { Container } from "@/components/ui/layout-primitives";
import { routes } from "@/config/routes.config";

/**
 * Breadcrumb — gerado automaticamente a partir do pathname.
 * Fonte: ROUTING_SYSTEM.md ("nunca montar breadcrumbs manualmente").
 */
export function Breadcrumb() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((seg, i) => {
    const to = "/" + segments.slice(0, i + 1).join("/");
    const known = Object.values(routes).find((r) => r.path === to && !("dynamic" in r && r.dynamic));
    const label = known?.label ?? decodeURIComponent(seg).replace(/-/g, " ");
    return { to, label };
  });

  return (
    <Container size="xl" className="pt-6">
      <nav aria-label="Breadcrumb" className="type-caption">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link to={routes.home.path} className="hover:text-primary">
              {routes.home.label}
            </Link>
          </li>
          {crumbs.map((c, i) => (
            <li key={c.to} className="flex items-center gap-1.5">
              <span aria-hidden="true">/</span>
              {i === crumbs.length - 1 ? (
                <span className="capitalize text-text-primary">{c.label}</span>
              ) : (
                <Link to={c.to} className="capitalize hover:text-primary">
                  {c.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </Container>
  );
}
