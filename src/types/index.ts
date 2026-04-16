export type Philosopher = {
  id: string;
  name: string;
  birthYear?: number;
  deathYear?: number;
  era: string;
  school: string[];
  shortDescription: string;
  simpleSummary: string;
  keyIdeas: string[];
  majorWorks: string[];
  relatedTermIds: string[];
  humanView?: string;
  worldView?: string;
  desireView?: string;
  freedomView?: string;
  happinessView?: string;
};

export type Term = {
  id: string;
  name: string;
  shortDescription: string;
  simpleExplanation: string;
  detailedExplanation: string;
  relatedPhilosopherIds: string[];
  relatedTermIds: string[];
};

export type Memo = {
  id: string;
  targetType: 'philosopher' | 'term';
  targetId: string;
  content: string;
  updatedAt: string;
};

export type Favorite = { targetType: 'philosopher' | 'term'; targetId: string };
