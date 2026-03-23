// Structured types for our AI Intelligence Report features to consume cleanly

export type ToneAnalysis = {
  emotionalTone: string;
  urgencyLevel: string;
  toneScorePercent: number;
  urgencyScorePercent: number;
};

export type ActionItem = {
  id: number;
  task: string;
  owner: string;
  due: string;
};

export type EmailIntelligenceReport = {
  summary: string;
  tone: ToneAnalysis;
  flags: string[];
  actionItems: ActionItem[];
  reply: string;
};
