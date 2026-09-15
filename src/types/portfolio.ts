export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  featured?: boolean;
  status?: string;
  targetAudience?: string;
  problemTitle?: string;
  problem: string;
  solutionTitle?: string;
  solution: string;
  candidateWorkflow?: {
    step: string;
    label: string;
    sub?: string;
  }[];
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
    slug?: string;
  }[];
}

export interface SkillTopicDetail {
  id: string;
  name: string;
  category: string;
  tagline: string;
  whatIUseItFor: string;
  myPracticalImplementation: string;
  pipelineSteps: {
    title: string;
    desc: string;
  }[];
  whereIUsedIt: string;
  relatedProjectSlug: string;
  relatedProjectTitle: string;
  relatedTechnologies: string[];
}

export interface ExploringTopicDetail {
  id: string;
  title: string;
  tag: string;
  status: string;
  description: string;
  whatItIs: string;
  whyItMatters: string;
  architectureFlow: {
    step: string;
    desc: string;
  }[];
  keyCapabilities: string[];
  practicalApplication: string;
  relatedProjectLink?: string;
  relatedProjectTitle?: string;
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

export interface Certification {
  title: string;
  issuer: string;
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
  id: string;
  title: string;
  tag: string;
  description: string;
  status: string;
  link: string;
}