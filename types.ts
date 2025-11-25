import { LucideIcon } from 'lucide-react';

export type ConceptType = 'adaptive' | 'convergent';

export interface Mechanism {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  impact: 'increase' | 'decrease' | 'variable';
  detailedText: string;
}

export interface Example {
  title: string;
  description: string;
  imagePlaceholder: string;
}

export interface ConceptData {
  id: ConceptType;
  title: string;
  subtitle: string;
  definition: string;
  visualMetaphor: string; // Description of the animation
  examples: Example[];
}

export interface Reference {
  title: string;
  author: string;
  year?: string;
  link?: string;
  type: 'book' | 'article' | 'web';
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}