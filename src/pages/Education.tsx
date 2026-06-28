import React from 'react';
import { GraduationCap, Calendar, BookOpen, Download } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const Education: React.FC = () => {
  // Degree program data
  const degreeProgram = {
    degree: 'Joint Bachelor of Artificial Intelligence',
    institutions: 'University of Technology Sydney (UTS) & HCMUT',
    period: '2025 – 2028 (Expected)',
    gpa: '6.75 / 7.00',
  };

  // Certificate credentials data mapped directly from actual files in assets
  const certifications = [
    {
      title: 'Generative AI with Large Language Models',
      issuer: 'DeepLearning.AI & AWS',
      date: 'Jun 2026',
      image: '/assets/images/certificates/dlai_aws_genai_llm.png',
      link: '/assets/images/certificates/dlai_aws_genai_llm.png',
      aspectRatio: 'aspect-[4/3]',
    },
    {
      title: 'AI Agents in LangGraph',
      issuer: 'DeepLearning.AI',
      date: 'Jun 2026',
      image: '/assets/images/certificates/dlai_ai_agents.jpg',
      link: '/assets/images/certificates/dlai_ai_agents.jpg',
      aspectRatio: 'aspect-[4/3]',
    },
    {
      title: 'Building Agentic RAG with LlamaIndex',
      issuer: 'DeepLearning.AI',
      date: 'Jun 2026',
      image: '/assets/images/certificates/dlai_building_rag.jpg',
      link: '/assets/images/certificates/dlai_building_rag.jpg',
      aspectRatio: 'aspect-[4/3]',
    },
    {
      title: 'Functions, Tools and Agents with LangChain',
      issuer: 'DeepLearning.AI',
      date: 'Jun 2026',
      image: '/assets/images/certificates/dlai_functions_tools_agents.jpg',
      link: '/assets/images/certificates/dlai_functions_tools_agents.jpg',
      aspectRatio: 'aspect-[4/3]',
    },
    {
      title: 'Intro to Machine Learning',
      issuer: 'Kaggle',
      date: 'Jun 2026',
      image: '/assets/images/certificates/kaggle_intro_to_ml.png',
      link: '/assets/images/certificates/kaggle_intro_to_ml.png',
      aspectRatio: 'aspect-[4/3]',
    },
    {
      title: 'Intermediate Machine Learning',
      issuer: 'Kaggle',
      date: 'Jun 2026',
      image: '/assets/images/certificates/kaggle_intermediate_ml.png',
      link: '/assets/images/certificates/kaggle_intermediate_ml.png',
      aspectRatio: 'aspect-[4/3]',
    },
    {
      title: 'Agentic AI Explained',
      issuer: 'NVIDIA Deep Learning Institute',
      date: 'Jun 2026',
      image: '/assets/images/certificates/nvidia_dli_agentic_ai.jpg',
      link: '/assets/images/certificates/nvidia_dli_agentic_ai.jpg',
      aspectRatio: 'aspect-[3.2/1]',
      gridSpan: 'md:col-span-2 lg:col-span-2',
    },
    {
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM',
      date: 'Jun 2026',
      image: '/assets/images/certificates/ibm_ai_fundamentals.png',
      link: '/assets/images/certificates/ibm_ai_fundamentals.pdf',
      aspectRatio: 'aspect-[4/3]',
    }
  ];

  return (
    <div className="w-full min-h-screen bg-bg text-text-body flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-6xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-24 2xl:py-32 flex flex-col items-center min-h-screen">
        
        {/* Page Title */}
        <ScrollReveal className="text-center mb-16 md:mb-20 flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent font-mono">Academic Foundation</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-display text-text-heading mt-3">
            Education & Credentials
          </h1>
          <p className="text-sm md:text-base text-text-muted mt-4 max-w-lg mx-auto leading-relaxed">
            A certified record of my academic study, technical specialization, and professional capabilities.
          </p>
          <div className="mt-8">
            <a 
              href="/Long_Quan_Ton_CV.pdf" 
              download="Long_Quan_Ton_CV.pdf"
              className="px-6 py-2.5 rounded-full border border-accent/30 hover:border-accent hover:bg-accent/5 text-text-heading text-sm flex items-center gap-2.5 font-semibold transition-all duration-300 cursor-pointer"
            >
              Download CV <Download size={16} className="text-accent" />
            </a>
          </div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="w-full space-y-16">
          
          {/* University Section */}
          <ScrollReveal>
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-border-token/40 hover:border-accent/30 transition-all duration-500 relative overflow-hidden group shadow-lg max-w-4xl mx-auto">
              <div className="absolute top-0 right-0 w-60 h-60 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-700 pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap size={28} className="text-accent" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-accent font-bold">
                      University Degree
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-4xl font-bold text-text-heading font-display leading-tight">
                      {degreeProgram.degree}
                    </h3>
                    <p className="text-base md:text-lg text-text-muted font-medium">
                      {degreeProgram.institutions}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted pt-2">
                    <span className="flex items-center gap-2 font-mono">
                      <Calendar size={16} className="text-accent" /> {degreeProgram.period}
                    </span>
                    <span className="flex items-center gap-2 font-mono">
                      <BookOpen size={16} className="text-accent" /> Full-time Joint Study Program
                    </span>
                  </div>
                </div>

                <div className="md:text-right border-t md:border-t-0 md:border-l border-border-token/20 pt-6 md:pt-0 md:pl-10 shrink-0 flex flex-col justify-center">
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-2">Academic Standing</span>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-accent font-mono leading-none">
                    {degreeProgram.gpa}
                  </div>
                  <span className="text-[10px] text-text-muted uppercase tracking-wider block mt-2">Scale of 7.00 • First Semester</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications & Courses Section */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="flex flex-col items-center text-center space-y-2">
                <h2 className="text-3xl md:text-5xl font-bold font-display text-text-heading">
                  Certificates & Credentials
                </h2>
                <p className="text-sm md:text-base text-text-muted max-w-lg leading-relaxed">
                  Verified specialization courses, machine learning modeling credentials, and technical workshops.
                </p>
              </div>
            </ScrollReveal>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, idx) => {
                const isWide = cert.gridSpan;
                
                return (
                  <ScrollReveal
                    key={idx}
                    direction="up"
                    delay={idx * 0.05}
                    className={`${isWide ? cert.gridSpan : ''}`}
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-panel rounded-2xl border border-border-token/35 hover:border-accent/40 overflow-hidden flex flex-col h-full group hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 cursor-pointer block"
                    >
                      
                      {/* Image / Preview Frame */}
                      <div className={`relative ${cert.aspectRatio} w-full overflow-hidden bg-surface-2/20 border-b border-border-token/10 flex items-center justify-center`}>
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        />
                      </div>

                      {/* Content details */}
                      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-[10px] font-mono text-accent-deep dark:text-accent-bright bg-accent-dim px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                              {cert.date}
                            </span>
                            <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                              {cert.issuer}
                            </span>
                          </div>
                          <h4 className="text-base md:text-lg font-bold text-text-heading font-display group-hover:text-accent transition-colors leading-snug">
                            {cert.title}
                          </h4>
                        </div>
                      </div>

                    </a>
                  </ScrollReveal>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;
