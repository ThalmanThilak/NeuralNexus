export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  overview: string;
  features: ServiceFeature[];
  process: ProcessStep[];
  pricing: PricingTier[];
  faqs: FAQ[];
  benefits: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  panelTitle: string;
  description: string;
  cta: string;
  image: string;
  details: ServiceDetail;
}
