export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  iconName: string;
  priceEstimate: string;
  timeframe: string;
}

export interface CaseStudy {
  challenge: string;
  solution: string;
  results: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'website' | 'ecommerce' | 'wordpress' | 'redesign' | 'seo';
  categoryLabel: string;
  description: string;
  image: string;
  stats: { label: string; value: string };
  caseStudy: CaseStudy;
  clientName: string;
  websiteUrl?: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  review: string;
  rating: number;
  service: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProposalInput {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  services: string[];
  budget: number;
  projectDetails: string;
  timeline: string;
  bookingDate?: string;
  bookingTime?: string;
}
