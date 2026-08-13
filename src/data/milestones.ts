import type { Milestone } from '../types';

export const milestones: Milestone[] = [
  {
    id: 'edu-uts-hcmut',
    type: 'education',
    date: 'Expected Graduation 2028',
    title: 'University of Technology Sydney & HCMUT',
    subtitle: 'Bachelor of Artificial Intelligence',
    description: 'A rigorous joint program focused on core ML algorithms, autonomous agent development, database systems, and statistical modeling.',
    details: [
      'Joint program with rigorous academic standards across two internationally recognised universities',
      'Specialization in AI agent workflows, vector retrieval pipelines, and full-stack integration'
    ]
  },
  {
    id: 'comp-amd-agent',
    type: 'competition',
    date: 'July 2026',
    title: 'AMD Developer Hackathon ACT II',
    subtitle: 'AI Developer · Token-Efficient Agent',
    description: 'Established a 4-layer hybrid agent router cutting API token usage by 85% and limiting latency to 505.1 ms.',
    details: [
      'Designed math reasoning pipeline achieving 95%+ accuracy across 200+ test cases at max 768 tokens',
      'Engineered local-first QA and summarization logic achieving 89% factual and 97% summary accuracy using Qwen-3B with Metal GPU acceleration'
    ],
    highlight: 'AMD Hackathon'
  },
  {
    id: 'comp-weatherise',
    type: 'competition',
    date: 'June 2026',
    title: 'Vietnam AI Open Hackathon',
    subtitle: 'Project Lead & AI Developer · Weatherise',
    description: 'Top 10 Finalists in a nationwide AI hackathon organized by NVIDIA, Viettel, and Sovico Group.',
    details: [
      'Spearheaded the development of a containerized multi-agent AI risk prediction engine',
      'Engineered unified MCP Server gateway and 4-collection RAG Knowledge Layer on an NVIDIA 8x H200 GPU cluster'
    ],
    image: '/assets/images/weatherise/team_2.jpg',
    highlight: 'Top 10 Finalist'
  },
  {
    id: 'comp-datathon',
    type: 'competition',
    date: 'April – May 2026',
    title: 'VinUni Datathon 2026',
    subtitle: 'Data Analyst · Team Datdy',
    description: 'Engineered pandas pipeline and executed comprehensive Exploratory Data Analysis (EDA) on a 10-year transactional database.',
    details: [
      'Merged and cleaned 15 CSV files distributed across Transactional and master layers',
      'Developed inventory optimization models and presented business strategy guidelines'
    ],
    image: '/assets/images/datathon/Datathon_Logo.jpg',
    highlight: 'Data Analyst'
  },
  {
    id: 'comp-morphysics',
    type: 'competition',
    date: 'March 2026',
    title: 'Bach Khoa Innovation 2026',
    subtitle: 'Project Lead & Frontend Developer · Morphysics',
    description: 'Architected a modular 2D physics virtual laboratory prototype utilizing Matter.js and React.',
    details: [
      'Created a 60 FPS glassmorphism telemetry dashboard with requestAnimationFrame',
      'Built a modular 20-experiment library enforcing strict clean-code standards'
    ],
    image: '/assets/images/morphysics/Experience_Morphysics_BKI_Team.jpg',
    highlight: 'Bach Khoa Innovation 2026'
  }
];
