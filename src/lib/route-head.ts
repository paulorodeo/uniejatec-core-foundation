/**
 * Route helpers — factories reduzem boilerplate para hubs/details.
 * Toda página consome hooks e monta head() via buildRouteHead.
 */

import type { HeadDescriptor } from "@/components/seo/head";
import { buildRouteHead } from "@/components/seo/head";
import type { RouteDefinition } from "@/config/routes.config";

export function buildHubHead(
  route: RouteDefinition,
  description: string,
): HeadDescriptor {
  return buildRouteHead({
    title: route.label,
    description,
    path: route.path,
    noindex: !route.indexable,
  });
}

export function buildDetailHead(
  hubRoute: RouteDefinition,
  slug: string,
  title: string,
  description: string,
): HeadDescriptor {
  return buildRouteHead({
    title,
    description,
    path: `${hubRoute.path}/${slug}`,
    ogType: "article",
    noindex: !hubRoute.indexable,
  });
}
