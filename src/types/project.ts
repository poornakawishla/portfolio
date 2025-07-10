export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'case-study' | 'brand-identity' | 'graphic-design' | 'ai-images';
  slug: string;
  figmaUrl?: string;
  liveUrl: string;
  duration?: string;
  role?: string;
  platform?: string;
  fullDescription?: string;
  features?: string[];
  images?: string[];
  downloadUrl?: string;
  isUIProject?: boolean;
  hasCaseStudy?: boolean;
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}