import type { WorkExperience } from '../types';

export const experiences: WorkExperience[] = [
  {
    id: 'flyrank-ai-intern',
    company: 'FlyRank AI',
    companyLogo: '/assets/images/companies/flyrank_logo.svg',
    companyPhoto: undefined,
    location: 'Ho Chi Minh City, Vietnam',
    role: 'Backend AI Engineering Intern',
    type: 'Internship',
    mode: 'Remote',
    startDate: 'August 2026',
    endDate: 'Present',
    isActive: true,
    responsibilities: [
      'Architected high-throughput RESTful API endpoints and backend microservices using FastAPI, Redis, and Python, improving system response latency by ~40% across production workflows.',
      'Engineered autonomous multi-agent reasoning flows using LangGraph and LangChain, accelerating task execution speeds and complex query resolution by ~65%.',
      'Optimized development velocity and API spec design throughput by ~3x through intelligent integration of Claude Opus 5 and Cursor IDE workflows into daily engineering pipelines.'
    ],
    skills: ['FastAPI', 'LangChain', 'LangGraph', 'Python', 'TypeScript', 'Claude Code', 'Cursor IDE', 'Redis'],
    photos: [],
    status: 'active'
  },
  {
    id: 'globaltech-annotator',
    company: 'GlobalTech SJC VietNam',
    companyLogo: '/assets/images/companies/globaltech_logo.jpg',
    companyPhoto: undefined, // placeholder
    location: 'Ho Chi Minh City, Vietnam',
    role: 'Data Annotator and Quality Control',
    type: 'Part-time',
    mode: 'Remote',
    startDate: 'May 2026',
    endDate: 'Present',
    isActive: true,
    responsibilities: [
      'Secured high-quality AI training data, as measured by a flexible weekly throughput of up to ~960 HTML files or 4 hours of .wav audio, by auditing and correcting annotations within JSON files.',
      'Guaranteed dataset integrity for AI model training, ensuring highest labeling accuracy, by executing rigorous quality control on structural text and acoustic annotations.',
      'Consistently met strict weekly page-volume targets, proving reliability and attention to detail.'
    ],
    skills: ['LabelStudio', 'HTML', 'JSON', 'Excel', 'Data Labeling', 'Quality Assurance', 'Data Annotation'],
    photos: [],
    status: 'active'
  }
];
