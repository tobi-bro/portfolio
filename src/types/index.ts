export type SkillStatus = 'LEARNING' | 'BUILDING' | 'PRACTICING' | 'PROJECT EXPERIENCE';

export interface SkillItem {
  id: string;
  name: string;
  category: 'Backend' | 'DevOps' | 'Security' | 'Languages' | 'Database';
  kanji: string;
  status: SkillStatus;
  description: string;
  useCase: string;
  relatedProject: string;
  levelBadge: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  caseFileNumber: string;
  chapterNumber: string;
  title: string;
  subtitle: string;
  kanjiTitle: string;
  speechPrompt: string;
  speechResponse: string;
  tagline: string;
  problem: string;
  solution: string;
  architecture: string;
  security: string[];
  techStack: string[];
  whatILearned: string;
  githubUrl: string;
  liveDemoUrl?: string;
  panelStyle?: 'wide' | 'tall' | 'asymmetric';
  status: 'COMPLETED' | 'OPERATIONAL' | 'BETA';
}

export interface BattleBugItem {
  id: string;
  bugNumber: string;
  title: string;
  threatLevel: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  status: 'DEFEATED' | 'INVESTIGATING';
  enemyType: string;
  symptoms: string;
  rootCause: string;
  lethalFix: string;
  stackInvolved: string[];
  timestamp: string;
}

export interface JourneyMilestone {
  step: number;
  stageName: string;
  kanji: string;
  techNodes: string[];
  rank: string;
  quote: string;
  isCurrent?: boolean;
}
