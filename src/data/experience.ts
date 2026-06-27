import type { WorkExperience } from '../types';

export const experiences: WorkExperience[] = [
  {
    id: 'globaltech-annotator',
    company: 'GlobalTech VietNam',
    companyLogo: '/assets/images/companies/globaltech_logo.jpg',
    companyPhoto: undefined, // placeholder
    location: 'Ho Chi Minh City, Vietnam',
    role: 'Data Annotator',
    type: 'Part-time',
    mode: 'Remote',
    startDate: 'May 2026',
    endDate: 'Present',
    isActive: true,
    responsibilities: [
      'Processed & annotated complex datasets across multiple structured and unstructured formats, primarily HTML, JSON, and Excel files.',
      'Conducted rigorous quality assurance checks and precise data labeling, maintaining high data integrity.',
      'Consistently met strict weekly page-volume targets, proving reliability and attention to detail.'
    ],
    skills: ['HTML', 'JSON', 'Excel', 'Data Labeling', 'Quality Assurance', 'Data Annotation'],
    photos: [],
    status: 'active'
  }
];
