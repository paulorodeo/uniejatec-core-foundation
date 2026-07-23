/**
 * Mock fixtures — dados simulados para desenvolvimento.
 * NUNCA misturar com produção. Todas as origens futuras substituem este
 * adapter integralmente sem alterar camadas superiores.
 */

import type { Article, Guide, News, Glossary, Faq, Comparison, Download } from "@/domains/editorial/types";
import type { Course } from "@/domains/education/types";
import type { Profession, Career } from "@/domains/market/types";
import type { Institution, Author } from "@/domains/institutional/types";
import type { Category } from "@/domains/organization/types";

const now = "2026-07-01T12:00:00Z";

const base = (slug: string, overrides: Record<string, unknown> = {}) => ({
  id: `mock-${slug}`,
  slug,
  status: "Published" as const,
  language: "pt-BR" as const,
  createdAt: now,
  updatedAt: now,
  publishedAt: now,
  ...overrides,
});

export const mockArticles: Article[] = [
  {
    ...base("como-escolher-um-curso-tecnico"),
    kind: "article",
    title: "Como escolher um curso técnico alinhado à sua carreira",
    excerpt: "Um guia prático para avaliar modalidade, duração e reconhecimento do MEC.",
    readingTime: 8,
    body: "Conteúdo editorial simulado para desenvolvimento.",
    authorSlug: "maria-silva",
    categorySlug: "orientacao-profissional",
  },
  {
    ...base("mercado-de-trabalho-em-tecnologia-2026"),
    kind: "article",
    title: "Panorama do mercado de trabalho em tecnologia em 2026",
    excerpt: "Áreas em alta, salários médios e habilidades mais demandadas.",
    readingTime: 12,
    body: "Conteúdo editorial simulado para desenvolvimento.",
    authorSlug: "joao-almeida",
    categorySlug: "tecnologia",
  },
  {
    ...base("competencias-para-a-nova-economia"),
    kind: "article",
    title: "Competências essenciais para a nova economia",
    excerpt: "Como desenvolver habilidades transversais que atravessam qualquer área.",
    readingTime: 6,
    body: "Conteúdo editorial simulado para desenvolvimento.",
    categorySlug: "carreiras",
  },
];

export const mockGuides: Guide[] = [
  {
    ...base("guia-completo-do-tecnico-em-agropecuaria"),
    kind: "guide",
    title: "Guia completo do Técnico em Agropecuária",
    excerpt: "Tudo sobre currículo, mercado, salários e caminhos após a formação.",
    chapters: 7,
    body: "Guia simulado.",
  },
  {
    ...base("guia-do-enem-e-vestibulares"),
    kind: "guide",
    title: "Guia do ENEM e vestibulares",
    excerpt: "Cronograma, estratégias de estudo e como usar sua nota.",
    chapters: 12,
    body: "Guia simulado.",
  },
];

export const mockNews: News[] = [
  {
    ...base("uniejatec-lanca-novo-programa-de-bolsas"),
    kind: "news",
    title: "UniEjatec lança novo programa de bolsas para cursos técnicos",
    excerpt: "Programa contempla estudantes de baixa renda em todo o país.",
    body: "Notícia simulada.",
  },
  {
    ...base("parceria-com-instituicoes-internacionais"),
    kind: "news",
    title: "Nova parceria amplia acesso a instituições internacionais",
    excerpt: "Convênio abre oportunidades de intercâmbio em áreas técnicas.",
    body: "Notícia simulada.",
  },
];

export const mockGlossary: Glossary[] = [
  {
    ...base("empregabilidade"),
    kind: "glossary",
    title: "Empregabilidade",
    excerpt: "Capacidade de se manter empregável ao longo da carreira.",
    term: "Empregabilidade",
    definition: "Conjunto de competências que aumentam as chances de conquistar e manter uma ocupação.",
  },
  {
    ...base("modalidade-ead"),
    kind: "glossary",
    title: "Modalidade EAD",
    excerpt: "Ensino a distância mediado por tecnologia.",
    term: "EAD",
    definition: "Modalidade de ensino em que professor e aluno estão fisicamente separados.",
  },
];

export const mockFaq: Faq[] = [
  {
    ...base("qual-a-diferenca-entre-tecnico-e-tecnologo"),
    kind: "faq",
    title: "Qual a diferença entre técnico e tecnólogo?",
    excerpt: "Comparativo entre os dois tipos de formação.",
    question: "Qual a diferença entre técnico e tecnólogo?",
    answer: "O curso técnico é de nível médio; o tecnólogo é uma graduação superior de curta duração.",
  },
];

export const mockComparisons: Comparison[] = [
  {
    ...base("tecnico-vs-graduacao"),
    kind: "comparison",
    title: "Técnico vs Graduação: qual escolher?",
    excerpt: "Comparativo completo entre formação técnica e graduação.",
    subjects: ["Curso Técnico", "Graduação"],
    body: "Comparativo simulado.",
  },
];

export const mockDownloads: Download[] = [
  {
    ...base("planejamento-de-estudos-2026"),
    kind: "download",
    title: "Planejamento de Estudos 2026",
    excerpt: "Planilha editável para organizar seu ano letivo.",
    fileUrl: "/downloads/mock/planejamento.pdf",
    fileSize: "420 KB",
    format: "PDF",
  },
];

export const mockCourses: Course[] = [
  {
    ...base("tecnico-em-agropecuaria"),
    kind: "course",
    title: "Técnico em Agropecuária",
    excerpt: "Formação técnica com foco em produção sustentável.",
    modality: "presencial",
    degree: "tecnico",
    durationMonths: 24,
    institutionSlug: "uniejatec",
    categorySlug: "agrarias",
  },
  {
    ...base("tecnico-em-enfermagem"),
    kind: "course",
    title: "Técnico em Enfermagem",
    excerpt: "Prepare-se para atuar na área da saúde.",
    modality: "hibrido",
    degree: "tecnico",
    durationMonths: 20,
    categorySlug: "saude",
  },
  {
    ...base("desenvolvimento-de-sistemas"),
    kind: "course",
    title: "Técnico em Desenvolvimento de Sistemas",
    excerpt: "Fundamentos de programação, banco de dados e engenharia de software.",
    modality: "ead",
    degree: "tecnico",
    durationMonths: 18,
    categorySlug: "tecnologia",
  },
];

export const mockProfessions: Profession[] = [
  {
    ...base("enfermeiro"),
    kind: "profession",
    title: "Enfermeiro",
    excerpt: "Profissional da saúde responsável pelo cuidado integral.",
    area: "Saúde",
    averageSalary: 4200,
  },
  {
    ...base("desenvolvedor-de-software"),
    kind: "profession",
    title: "Desenvolvedor de Software",
    excerpt: "Constrói sistemas, aplicações e produtos digitais.",
    area: "Tecnologia",
    averageSalary: 8500,
  },
];

export const mockCareers: Career[] = [
  {
    ...base("carreira-em-saude"),
    kind: "career",
    title: "Carreira em Saúde",
    excerpt: "Caminhos profissionais na área da saúde.",
    seniorityLevels: ["Auxiliar", "Técnico", "Superior", "Especialista"],
  },
  {
    ...base("carreira-em-tecnologia"),
    kind: "career",
    title: "Carreira em Tecnologia",
    excerpt: "Trilhas de crescimento em desenvolvimento e infraestrutura.",
    seniorityLevels: ["Estagiário", "Júnior", "Pleno", "Sênior", "Especialista"],
  },
];

export const mockInstitutions: Institution[] = [
  {
    ...base("uniejatec"),
    kind: "institution",
    title: "UniEjatec",
    excerpt: "Instituição de educação profissional referência no Brasil.",
    city: "Brasília",
  },
];

export const mockAuthors: Author[] = [
  {
    ...base("maria-silva"),
    kind: "author",
    name: "Maria Silva",
    title: "Maria Silva",
    excerpt: "Especialista em orientação profissional.",
    role: "Editora Chefe",
  },
  {
    ...base("joao-almeida"),
    kind: "author",
    name: "João Almeida",
    title: "João Almeida",
    excerpt: "Pesquisador do mercado de trabalho em tecnologia.",
    role: "Colunista",
  },
];

export const mockCategories: Category[] = [
  { ...base("tecnologia"), kind: "category", title: "Tecnologia", description: "Conteúdos sobre tecnologia e desenvolvimento." },
  { ...base("saude"), kind: "category", title: "Saúde", description: "Conteúdos sobre carreiras na saúde." },
  { ...base("agrarias"), kind: "category", title: "Ciências Agrárias", description: "Conteúdos sobre agrárias." },
  { ...base("orientacao-profissional"), kind: "category", title: "Orientação Profissional", description: "Orientação de carreira." },
  { ...base("carreiras"), kind: "category", title: "Carreiras", description: "Panorama de carreiras." },
];
