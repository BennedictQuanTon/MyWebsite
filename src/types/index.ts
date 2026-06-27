// ─── Project ──────────────────────────────────────────────────────────────────

export interface TimelineStep {
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Personal Project' | 'Competition';
  period: string;
  role: string;
  summary: string;
  problem: string;
  process: TimelineStep[];
  techStack: string[];
  outcomes: string[];
  images: string[];
  hoverMedia: {
    type: 'image' | 'video';
    src: string;
    objectPosition?: string;
    objectFit?: 'cover' | 'contain';
  };
  githubUrl?: string;
  liveUrl?: string;
  status: 'active' | 'placeholder';
  competitionName?: string;
  organizer?: string;
  organizerLogo?: string;
  organizerLogos?: string[];
}

// ─── About ────────────────────────────────────────────────────────────────────

export interface Passion {
  id: string;
  title: string;
  description: string;
  /** Lucide icon name */
  icon: string;
}

// ─── Experience ───────────────────────────────────────────────────────────────

export interface WorkExperience {
  id: string;
  company: string;
  companyLogo?: string;
  companyPhoto?: string;
  location: string;
  role: string;
  type: 'Part-time' | 'Full-time' | 'Internship' | 'Freelance';
  mode: 'Remote' | 'On-site' | 'Hybrid';
  startDate: string;
  endDate: string;
  isActive: boolean;
  responsibilities: string[];
  skills: string[];
  photos?: string[];
  status: 'active' | 'placeholder';
}

// ─── Certifications ───────────────────────────────────────────────────────────

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  url?: string;
}

// ─── Milestones ───────────────────────────────────────────────────────────────

export interface Milestone {
  id: string;
  type: 'education' | 'competition';
  /** Display string, e.g. "June 2026" */
  date: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image?: string;
  highlight?: string;
}
