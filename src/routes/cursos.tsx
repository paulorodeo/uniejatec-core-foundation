import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/features/hub-page";
import { useCourses } from "@/hooks/use-content";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/cursos")({
  head: () => buildHubHead(routes.coursesHub, "Cursos técnicos, de graduação e livres da UniEjatec."),
  component: CoursesHub,
});

function CoursesHub() {
  const q = useCourses();
  return (
    <HubPage
      overline="Educação"
      title="Cursos"
      description="Formações técnicas, superiores e livres para cada momento da carreira."
      hrefPrefix={routes.coursesHub.path}
      isLoading={q.isLoading}
      isError={q.isError}
      items={q.data?.data.map((c) => ({ slug: c.slug, title: c.title, excerpt: c.excerpt, badge: c.modality.toUpperCase() }))}
    />
  );
}
