import projectsData from "./projects.json";

export type Project = {
  slug: string;
  title: string;
  image: string;
  detailsImage: string;
  description: string;
  overview: string;
  duration: string;
  created: string;
  tags: string[];
  builtWith: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  liveUrl: string;
  githubUrl?: string;
};

export const projects: Project[] = projectsData as Project[];
