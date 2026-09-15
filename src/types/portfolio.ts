export interface Project {
  id: string;
  title: string;
  category: 'Multimodal RAG / Generative AI' | 'Generative AI / NLP' | 'AI Application / Agentic Workflow' | 'Machine Learning / Data Analytics';
  tagline: string;
  description: string;
  featured?: boolean;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  github?: string;
  liveDemo?: string;
  architectureNodes: {
    title: string;
    description: string;
    tools?: string;
  }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  department: string;
  location: string;
  period: string;
  responsibilities: string[];
  tags: string[];
}

export interface PipelineStage {
  id: number;
  name: string;
  shortName: string;
  role: string;
  description: string;
  technologies: string[];
  keyPractices: string[];
}

export interface ExploringItem {
  title: string;
  tag: string;
  description: string;
  status: string;
}
