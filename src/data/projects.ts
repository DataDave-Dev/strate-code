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
  {
    slug: "myca-erp",
    title: "MYCA ERP",
    tagline: "ERP con integración de IA para construcción",
    description:
      "Sistema ERP a medida para una empresa constructora: gestión de obras, control presupuestario, cronogramas, subcontratistas, órdenes de compra y pagos en una sola plataforma — potenciado con IA para automatizar tareas y generar insights.",
    category: "ERP empresarial",
    year: 2025,
    status: "in-progress",
    cover: "/proyects/myca-cover.png",
    stack: ["Next.js", "Supabase", "Tailwind CSS", "IA"],
    services: [
      "Diseño UI/UX",
      "Desarrollo full-stack",
      "Integración con IA",
      "Autenticación segura",
    ],
    highlights: [
      "Integración con IA para asistencia inteligente y automatizaciones",
      "Gestión completa del ciclo de obras",
      "Control presupuestario en tiempo real",
      "Roles diferenciados por área operativa",
    ],
    color: "#1e40af",
  },
];
