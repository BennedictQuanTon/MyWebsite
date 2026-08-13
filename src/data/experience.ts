import type { WorkExperience } from '../types';

export const experiences: WorkExperience[] = [
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
