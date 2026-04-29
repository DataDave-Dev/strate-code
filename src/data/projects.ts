import type { Project } from "../types/Proyect";

export const projects: Project[] = [
  {
    slug: "iseas-solutions",
    title: "ISEAS Solutions",
    tagline: "Apoyo académico para estudiantes",
    description:
      "Plataforma web que conecta estudiantes con asesores personalizados para ayudarlos a completar sus actividades académicas con calidad y a tiempo.",
    category: "Plataforma educativa",
    year: 2025,
    status: "live",
    url: "https://iseas-solutions.com/",
    cover: "/proyects/iseas-cover.png",
    stack: ["Astro", "Supabase", "Tailwind CSS"],
    services: [
      "Diseño UI/UX",
      "Desarrollo full-stack",
      "Autenticación",
      "Base de datos",
    ],
    highlights: [
      "Panel privado para administradores con métricas internas",
      "Carga y gestión de archivos por estudiante",
      "Autenticación segura con Supabase",
      "Diseño responsive con foco en mobile",
    ],
    color: "#3b82f6",
  },
];
