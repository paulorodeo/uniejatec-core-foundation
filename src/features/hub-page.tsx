/**
 * HubPage — página oficial de listagem (hub) de uma entidade.
 * Une PageHeader + ContentGrid.
 */
import { Container, Section } from "@/components/ui/layout-primitives";
import { PageHeader } from "@/components/layout/page-header";
import { ContentGrid, type ContentGridItem } from "./content-grid";

interface Props {
  overline: string;
  title: string;
  description: string;
  hrefPrefix: string;
  isLoading: boolean;
  isError: boolean;
  items: ContentGridItem[] | undefined;
}

export function HubPage({
  overline,
  title,
  description,
  hrefPrefix,
  isLoading,
  isError,
  items,
}: Props) {
  return (
    <>
      <PageHeader overline={overline} title={title} description={description} />
      <Section>
        <Container size="xl">
          <ContentGrid
            items={items}
            isLoading={isLoading}
            isError={isError}
            hrefPrefix={hrefPrefix}
          />
        </Container>
      </Section>
    </>
  );
}
