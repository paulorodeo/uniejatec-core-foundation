import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Container, Section, Stack } from "@/components/ui/layout-primitives";
import { PageHeader } from "@/components/layout/page-header";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/empty-state";
import { Link } from "@tanstack/react-router";
import { useSearch } from "@/hooks/use-content";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

const searchSchema = z.object({ q: z.string().optional() });

export const Route = createFileRoute("/busca")({
  validateSearch: searchSchema,
  head: () => buildHubHead(routes.search, "Busca em toda a plataforma UniEjatec."),
  component: SearchPage,
});

function SearchPage() {
  const params = Route.useSearch();
  const [query, setQuery] = useState(params.q ?? "");
  const { data, isLoading, isError } = useSearch(query);
  const results = data?.data ?? [];

  return (
    <>
      <PageHeader overline="Busca" title="Buscar" description="Encontre artigos, cursos, profissões e mais." />
      <Section>
        <Container size="md">
          <Stack gap={6}>
            <Input
              autoFocus
              placeholder="O que você procura?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Termo de busca"
            />
            {query.trim().length === 0 ? (
              <EmptyState title="Digite para buscar" description="Comece digitando um termo para ver resultados." />
            ) : isLoading ? (
              <p className="type-caption">Buscando…</p>
            ) : isError ? (
              <EmptyState title="Erro na busca" description="Tente novamente." />
            ) : results.length === 0 ? (
              <EmptyState title="Nenhum resultado" description={`Não encontramos conteúdos para "${query}".`} />
            ) : (
              <Stack gap={3}>
                {results.map((r) => (
                  <Link key={r.id} to={r.url}>
                    <Card>
                      <CardContent>
                        <Badge>{r.kind}</Badge>
                        <p className="mt-2 type-h4">{r.title}</p>
                        {r.excerpt ? <p className="mt-1 type-small text-text-secondary">{r.excerpt}</p> : null}
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </Stack>
            )}
          </Stack>
        </Container>
      </Section>
    </>
  );
}
