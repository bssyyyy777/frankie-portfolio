export type Language = 'en' | 'zh';

export type PageId =
  | 'home'
  | 'video-content'
  | 'film-narrative'
  | 'storyboard'
  | 'strategy-communication'
  | 'about-contact';

export interface BilingualText {
  en: string;
  zh: string;
}

export interface VideoProject {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  category: 'variety' | 'documentary' | 'lifestyle';
  duration: string;
  platform: string;
  collabType: BilingualText; // Solo / Team
  role: BilingualText;
  thumbnailUrl: string;
  videoUrl?: string;
  summary: BilingualText;
  description: BilingualText;
  highlights: BilingualText[];
  keyTools: string[];
}

export interface FilmProject {
  id: string;
  title: BilingualText;
  genre: BilingualText;
  duration: string;
  year: string;
  course: BilingualText;
  roles: BilingualText;
  cameraSpecs: string;
  colorGrade: BilingualText;
  heroImage: string;
  videoUrl?: string;
  logline: BilingualText;
  concept: BilingualText;
  preProduction: {
    storyboarding: BilingualText;
    shotList: BilingualText;
    scheduling: BilingualText;
    scouting: BilingualText;
  };
  production: {
    challenges: BilingualText;
    audioRecording: BilingualText;
    cinematography: BilingualText;
    solutions: BilingualText;
  };
  postProduction: {
    editing: BilingualText;
    vfxTechnique: BilingualText;
    soundDesign: BilingualText;
    colorWork: BilingualText;
  };
  poster?: {
    imageUrl: string;
    tagline: BilingualText;
    visualAnalysis: BilingualText;
    symbolism: BilingualText[];
  };
  reflections: BilingualText;
  pullQuote: BilingualText;
}

export interface StoryboardProject {
  id: string;
  title: BilingualText;
  filmTitle: BilingualText;
  shotRange: BilingualText;
  technique: BilingualText;
  storyboardImageUrl: string;
  aspectRatio: string;
  formatNote: BilingualText;
  timelineLabels: BilingualText[];
  description: BilingualText;
  directorNotes: BilingualText;
  continuityDetails: {
    beat: BilingualText;
    camera: BilingualText;
    action: BilingualText;
  }[];
}

export interface StrategyCaseStudy {
  id: string;
  title: BilingualText;
  badge: BilingualText;
  course: string;
  year: string;
  leadStudent: string;
  teamMembers?: string[];
  challenge: BilingualText;
  methodology: BilingualText;
  theoreticalFramework: BilingualText;
  platforms?: {
    platform: string;
    followers: string;
    role: BilingualText;
  }[];
  contentDistribution?: {
    category: BilingualText;
    percentage: number;
  }[];
  engagementComparison?: {
    type: BilingualText;
    avgLikes: string;
    avgComments: string;
    avgReposts: string;
    total: string;
    highlight?: boolean;
  }[];
  keyInsights: BilingualText[];
  swot?: {
    strengths: BilingualText[];
    weaknesses: BilingualText[];
    opportunities: BilingualText[];
    threats: BilingualText[];
  };
  scctFramework?: {
    crisisType: BilingualText;
    responsibilityLevel: BilingualText;
    companyResponse: BilingualText[];
    critique: {
      strengths: BilingualText[];
      weaknesses: BilingualText[];
    };
  };
  recommendations: {
    title: BilingualText;
    description: BilingualText;
    theorySupport: BilingualText;
  }[];
  references: string[];
}

export interface ProductionProcessStage {
  id: 'development' | 'pre-production' | 'production' | 'post-production' | 'reflection';
  phaseNumber: string;
  phase: BilingualText;
  title: BilingualText;
  description: BilingualText;
  frankieRole: BilingualText;
  decisionsAndChallenges: BilingualText[];
  solutionsAndOutcomes: BilingualText[];
  visuals: {
    url: string;
    caption: BilingualText;
    type: 'script' | 'props' | 'storyboard' | 'photo' | 'timeline' | 'slide' | 'poster';
  }[];
}

export interface FilmProductionProcess {
  filmId: string;
  filmTitle: BilingualText;
  genre: BilingualText;
  overview: BilingualText;
  stages: ProductionProcessStage[];
}

