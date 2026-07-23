import { createFileRoute } from "@tanstack/react-router";
import { DetailView } from "@/features/detail-view";
import { useCourse } from "@/hooks/use-content";
import { buildDetailHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/cursos/$slug")({
  head: ({ params }) => buildDetailHead(routes.coursesHub, params.slug, `Curso · ${params.slug}`, "Curso da UniEjatec."),
  component: CourseDetail,
});

function CourseDetail() {
  const { slug } = Route.useParams();
  const q = useCourse(slug);
  return <DetailView overline="Curso" isLoading={q.isLoading} entity={q.data?.data ?? null} />;
}
