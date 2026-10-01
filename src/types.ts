export interface PersonalInfo {
  name: string;
  fullName: string;
  designation: string;
  tagline: string;
  about: string[];
  profileImage: string;
  email: string;
  phone: string;
  address: string;
  github: string;
  linkedIn: string;
  resume: string;
}

export type SkillCategory = "Languages" | "Backend" | "Databases" | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  /** Key of an icon in src/assets/skills. Skills without one get a monogram tile. */
  icon?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
}

export type ProjectKind = "Backend API" | "Web App" | "Mobile App";

export interface Project {
  id: number;
  name: string;
  kind: ProjectKind;
  role: string;
  summary: string;
  points: string[];
  tools: string[];
  code?: string;
  demo?: string;
}

export interface Education {
  id: number;
  title: string;
  institution: string;
  duration: string;
}

export interface NavLink {
  id: string;
  label: string;
}
