import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Section, Grid, Stack } from "@/components/ui/layout-primitives";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentGrid } from "@/features/content-grid";
import { useArticles, useCourses, useProfessions } from "@/hooks/use-content";
import { buildRouteHead } from "@/components/seo/head";
import { routes } from "@/config/routes.config";
import { siteConfig } from "@/config/site.config";
import { primaryNav } from "@/config/navigation.config";

export const Route = createFileRoute("/")({
  head: () =>
    buildRouteHead({
      title: siteConfig.tagline,
      description: siteConfig.description,
      path: "/",
      ogType: "website",
    }),
  component: HomePage,
});

function HomePage() {
  const articles = useArticles({ limit: 3 });
  const courses = useCourses({ limit: 3 });
  const professions = useProfessions({ limit: 3 });

  return (
    <>
      {/* Hero */}
      <Section spacing="lg" className="bg-surface">
        <Container size="xl">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
            <Stack gap={6}>
              <Badge variant="accent" className="w-fit">{siteConfig.name}</Badge>
              <h1 className="type-display max-w-2xl">
                Conhecimento organizado para orientar sua carreira.
              </h1>
              <p className="type-lead max-w-xl">
                {siteConfig.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild-fallback>
                  <Link to={routes.coursesHub.path} className="inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90">
                    Explorar cursos
                  </Link>
                </Button>
                <Link
                  to={routes.articlesHub.path}
                  className="inline-flex h-11 items-center rounded-md border border-border px-5 text-sm font-medium hover:bg-muted"
                >
                  Ler artigos
                </Link>
              </div>
            </Stack>
            <Card>
              <CardContent>
                <p className="type-overline">Navegue por áreas</p>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {primaryNav.map((n) => (
                    <li key={n.to}>
                      <Link
                        to={n.to}
                        className="block rounded-md border border-border px-3 py-2 type-small hover:bg-muted"
                      >
                        {n.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="xl">
          <SectionHeading title="Artigos em destaque" to={routes.articlesHub.path} />
          <ContentGrid
            hrefPrefix={routes.articlesHub.path}
            isLoading={articles.isLoading}
            isError={articles.isError}
            items={articles.data?.data.map((a) => ({
              slug: a.slug,
              title: a.title,
              excerpt: a.excerpt,
              badge: `${a.readingTime} min de leitura`,
            }))}
          />
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container size="xl">
          <SectionHeading title="Cursos recomendados" to={routes.coursesHub.path} />
          <ContentGrid
            hrefPrefix={routes.coursesHub.path}
            isLoading={courses.isLoading}
            isError={courses.isError}
            items={courses.data?.data.map((c) => ({
              slug: c.slug,
              title: c.title,
              excerpt: c.excerpt,
              badge: c.modality.toUpperCase(),
            }))}
          />
        </Container>
      </Section>

      <Section>
        <Container size="xl">
          <SectionHeading title="Profissões em foco" to={routes.professionsHub.path} />
          <Grid cols={3}>
            {(professions.data?.data ?? []).map((p) => (
              <Link key={p.slug} to={`${routes.professionsHub.path}/${p.slug}`}>
                <Card className="h-full">
                  <CardContent>
                    <Badge>{p.area}</Badge>
                    <CardTitle className="mt-3">{p.title}</CardTitle>
                    <CardDescription>{p.excerpt}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}

function SectionHeading({ title, to }: { title: string; to: string }) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <h2 className="type-h2">{title}</h2>
      <Link to={to} className="type-small font-medium text-primary hover:underline">
        Ver todos →
      </Link>
    </div>
  );
}
