export interface Metric {
  label: string;
  value: string;
  trend?: 'up' | 'down';
}

export interface CaseStudy {
  category: string;
  title: string;
  description: string;
  metrics: Metric[];
  client?: string;
  url?: string;
  role?: string;
  industry?: string;
  timeline?: string;
  tools?: string[];
  businessContext?: string;
  challenge?: string;
  strategy?: string;
  execution?: string;
  results?: string;
  images?: string[];
}

export interface WorkHistory {
  company: string;
  role: string;
  description: string;
  metrics: Metric[];
  tags: string[];
  chartData: any[];
  chartType: 'bar' | 'area' | 'composed';
  chartKeys: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: any;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}