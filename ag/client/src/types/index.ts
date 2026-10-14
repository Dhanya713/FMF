export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  education?: string;
  interests?: string[];
  assessmentCompleted?: boolean;
  topCareerId?: string | null;
  activeCareerId?: string | null;
  isVerified?: boolean;
  completedRoadmapItems?: Record<string, string[]>;
  savedCareers?: string[];
  recommendations?: RecommendationSummary[];
  createdAt?: string;
}

export interface RecommendationSummary {
  careerId: string;
  suitability: number;
  whyItMatches: string;
}

export interface Interest {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
}

export interface QuestionOption {
  text: string;
  weights: Record<string, number>;
}

export interface Question {
  id: number;
  question: string;
  dimension?: string;
  category?: string;
  options: QuestionOption[];
}

export interface LearningResource {
  title: string;
  type: string;
  url: string;
  free?: boolean;
}

export interface Career {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  suitability?: number;
  whyItMatches?: string;
  salaryRange: string;
  growth: string;
  difficulty: string;
  rating?: string;
  badge?: string;
  icon?: string;
  accentColor?: string;
  demandLevel?: string;
  estimatedLearningTime?: string;
  requiredSkills: string[];
  overview?: string;
  keyResponsibilities?: string[];
  specializations?: string[];
  industries?: string[];
  pros?: string[];
  challenges?: string[];
  certifications?: string[];
  projects?: string[];
  communities?: string[];
  learningResources?: LearningResource[];
  relatedCareers?: string[];
}

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  resource: string;
  type?: string;
  completed: boolean;
}

export interface RoadmapStage {
  stage: 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional';
  badge: string;
  color: string;
  description: string;
  milestone?: string;
  items: RoadmapItem[];
  stageProgress: number;
  completedCount: number;
  totalCount: number;
}

export interface Roadmap {
  careerId: string;
  careerTitle?: string;
  stages: RoadmapStage[];
  progressPercentage: number;
  completedItems: number;
  totalItems: number;
}

export interface Recommendation {
  careerId: string;
  career: Career;
  suitability: number;
  rawScore?: number;
  whyItMatches: string;
}

export interface DashboardData {
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    education?: string;
    bio?: string;
    interests: string[];
  };
  assessmentStatus: {
    completed: boolean;
    topCareerId?: string | null;
    totalInterestsSelected: number;
  };
  topCareer: Career | null;
  activeCareer: Career | null;
  roadmapProgress: {
    careerId: string;
    careerTitle: string;
    percentage: number;
    completedCount: number;
    totalCount: number;
  };
  completedTopicsCount: number;
  quote: {
    quote: string;
    author: string;
  };
  recommendationsCount: number;
}

export interface AuthResponse {
  message: string;
  user: User;
  token?: string;
  requiresVerification?: boolean;
  email?: string;
  verificationToken?: string;
  verificationUrl?: string;
}
