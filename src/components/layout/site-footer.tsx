import { Link } from "@tanstack/react-router";
import { Container } from "@/components/ui/layout-primitives";
import { footerNav } from "@/config/navigation.config";
import { siteConfig } from "@/config/site.config";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <Container size="xl" className="py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="type-h4">{siteConfig.name}</p>
            <p className="mt-3 max-w-xs type-small text-text-secondary">{siteConfig.description}</p>
          </div>
          {footerNav.map((group) => (
            <div key={group.label}>
              <p className="type-overline">{group.label}</p>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="type-small text-text-secondary hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-divider pt-6 type-caption md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {siteConfig.organization.legalName}.</p>
          <p>Plataforma editorial e educacional.</p>
        </div>
      </Container>
    </footer>
  );
}
