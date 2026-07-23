/**
 * Route registry — Fonte única de verdade de URLs públicas.
 * Fonte: ROUTING_SYSTEM.md.
 *
 * Menus, breadcrumbs, sitemap e navegação SEMPRE consomem esta tabela.
 * URLs nunca deverão ser hardcoded em componentes.
 */

export interface RouteDefinition {
  readonly path: string;
  readonly label: string;
  readonly domain: RouteDomain;
  readonly indexable: boolean;
  readonly dynamic?: boolean;
}

export type RouteDomain =
  | "home"
  | "editorial"
  | "education"
  | "market"
  | "institutional"
  | "commercial"
  | "academic"
  | "system"
  | "search";

export const routes = {
  home: { path: "/", label: "Início", domain: "home", indexable: true },

  // Editorial
  articlesHub: { path: "/artigos", label: "Artigos", domain: "editorial", indexable: true },
  articleDetail: { path: "/artigos/$slug", label: "Artigo", domain: "editorial", indexable: true, dynamic: true },
  guidesHub: { path: "/guias", label: "Guias", domain: "editorial", indexable: true },
  guideDetail: { path: "/guias/$slug", label: "Guia", domain: "editorial", indexable: true, dynamic: true },
  newsHub: { path: "/noticias", label: "Notícias", domain: "editorial", indexable: true },
  newsDetail: { path: "/noticias/$slug", label: "Notícia", domain: "editorial", indexable: true, dynamic: true },
  glossaryHub: { path: "/glossario", label: "Glossário", domain: "editorial", indexable: true },
  glossaryDetail: { path: "/glossario/$slug", label: "Termo", domain: "editorial", indexable: true, dynamic: true },
  faqHub: { path: "/faq", label: "FAQ", domain: "editorial", indexable: true },
  faqDetail: { path: "/faq/$slug", label: "Pergunta", domain: "editorial", indexable: true, dynamic: true },
  comparisonsHub: { path: "/comparativos", label: "Comparativos", domain: "editorial", indexable: true },
  comparisonDetail: { path: "/comparativos/$slug", label: "Comparativo", domain: "editorial", indexable: true, dynamic: true },
  downloadsHub: { path: "/downloads", label: "Downloads", domain: "editorial", indexable: true },
  downloadDetail: { path: "/downloads/$slug", label: "Download", domain: "editorial", indexable: true, dynamic: true },

  // Educação
  coursesHub: { path: "/cursos", label: "Cursos", domain: "education", indexable: true },
  courseDetail: { path: "/cursos/$slug", label: "Curso", domain: "education", indexable: true, dynamic: true },

  // Mercado
  professionsHub: { path: "/profissoes", label: "Profissões", domain: "market", indexable: true },
  professionDetail: { path: "/profissoes/$slug", label: "Profissão", domain: "market", indexable: true, dynamic: true },
  careersHub: { path: "/carreiras", label: "Carreiras", domain: "market", indexable: true },
  careerDetail: { path: "/carreiras/$slug", label: "Carreira", domain: "market", indexable: true, dynamic: true },

  // Organização
  categoriesHub: { path: "/categorias", label: "Categorias", domain: "editorial", indexable: true },
  categoryDetail: { path: "/categorias/$slug", label: "Categoria", domain: "editorial", indexable: true, dynamic: true },
  authorsHub: { path: "/autores", label: "Autores", domain: "institutional", indexable: true },
  authorDetail: { path: "/autores/$slug", label: "Autor", domain: "institutional", indexable: true, dynamic: true },
  institutionsHub: { path: "/instituicoes", label: "Instituições", domain: "institutional", indexable: true },
  institutionDetail: { path: "/instituicoes/$slug", label: "Instituição", domain: "institutional", indexable: true, dynamic: true },

  // Institucional
  about: { path: "/sobre", label: "Sobre", domain: "institutional", indexable: true },
  contact: { path: "/contato", label: "Contato", domain: "institutional", indexable: true },
  partnerships: { path: "/parcerias", label: "Parcerias", domain: "institutional", indexable: true },
  careersJobs: { path: "/trabalhe-conosco", label: "Trabalhe Conosco", domain: "institutional", indexable: true },
  ombudsman: { path: "/ouvidoria", label: "Ouvidoria", domain: "institutional", indexable: true },
  privacy: { path: "/politica-de-privacidade", label: "Política de Privacidade", domain: "institutional", indexable: true },
  terms: { path: "/termos-de-uso", label: "Termos de Uso", domain: "institutional", indexable: true },

  // Acadêmico (sistema — noindex)
  studentArea: { path: "/area-do-aluno", label: "Área do Aluno", domain: "academic", indexable: false },
  login: { path: "/login", label: "Entrar", domain: "academic", indexable: false },
  enrollment: { path: "/matricula", label: "Matrícula", domain: "academic", indexable: false },
  payment: { path: "/pagamento", label: "Pagamento", domain: "academic", indexable: false },
  certificates: { path: "/certificados", label: "Certificados", domain: "academic", indexable: false },

  // Busca
  search: { path: "/busca", label: "Busca", domain: "search", indexable: false },
} as const satisfies Record<string, RouteDefinition>;

export type RouteKey = keyof typeof routes;
