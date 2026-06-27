import type { Milestone } from '../types';

export const milestones: Milestone[] = [
  {
    id: 'edu-uts-hcmut',
    type: 'education',
    date: 'Expected 2028',
    title: 'University of Technology Sydney & HCMUT',
    subtitle: 'Joint Bachelor of Artificial Intelligence',
    description: 'A rigorous joint program focused on core ML algorithms, autonomous agent development, database systems, and statistical modeling.',
    details: [
      'Joint program with rigorous academic standards across two internationally recognised universities',
      'Specialization in AI agent workflows, vector retrieval pipelines, and full-stack integration'
    ]
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
      'Deployed Qwen 2.5-27B and Nemotron 3 120B on an NVIDIA 8x H200 GPU cluster'
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
