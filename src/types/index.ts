export interface Merchant {
  id: number;
  name: string;
  fullName: string;
  complexity: number;
  mechanics: string;
  description: string;
  guideText: string;
  expansion: string;
  tips: string;
}

export interface Townsfolk {
  name: string;
  expansion: string;
  description: string;
  guideText: string;
  interactivity: string;
  complexity: string;
  requires: string | null;
}

export interface Rogue {
  id: number | string;
  name: string;
  expansion: string;
  description: string;
  guideText: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  impact: string;
  interactivity: string;
  notRecommendedMultiple: boolean;
}

export interface RandomSetup {
  merchants: Merchant[];
  townsfolk: Townsfolk[];
  rogues: Rogue[];
}

export type ComplexityLevel = 0 | 1 | 2 | 3 | 4;
export type InteractivityLevel = 0 | 1 | 2 | 3 | 4;
export type ViewMode = '' | 'random' | 'all';
