export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  year: number;
  status: "live" | "in-progress" | "case-study";
  url?: string;
  repoUrl?: string;
  cover: string;
  stack: string[];
  services: string[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
  color?: string;
}
