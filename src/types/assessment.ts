export interface AssessmentQuestion {
  id: string;
  type: 'likert' | 'mcq' | 'slider' | 'spatial';
  category: 'psychometric' | 'technical' | 'wiscar';
  subcategory: string;
  question: string;
  options?: string[];
  min?: number;
  max?: number;
  required?: boolean;
}

export interface AssessmentResponse {
  questionId: string;
  value: number | string;
}

export interface WISCARScores {
  will: number;
  interest: number;
  skill: number;
  cognitive: number;
  ability: number;
  realWorld: number;
}

export interface AssessmentResult {
  psychometricFitScore: number;
  technicalReadinessScore: number;
  wiscarScores: WISCARScores;
  overallConfidence: number;
  recommendation: 'yes' | 'maybe' | 'no';
  personalizedInsights: string;
  learningPath: string[];
  careerRoles: string[];
  nextSteps: {
    ifYes: string[];
    ifNo: string[];
  };
}

export interface AssessmentState {
  currentSection: number;
  currentQuestion: number;
  responses: AssessmentResponse[];
  isComplete: boolean;
  result?: AssessmentResult;
}