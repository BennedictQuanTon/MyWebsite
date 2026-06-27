import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, Quote, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const Education: React.FC = () => {
  const academicDetails = {
    degree: 'Joint Bachelor of Artificial Intelligence',
    institutions: 'University of Technology Sydney (UTS) & HCMUT',
    period: '2024 – 2028 (Expected)',
    gpa: '6.75 / 7.00 (First Semester)',
    desc: 'An elite joint degree program focused on computational mathematics, deep learning models, computer vision, and neural network architectures. The curriculum bridges rigorous theoretical foundations with enterprise-level AI application engineering.',
    courses: [
      'Data Structures & Algorithms',
      'Linear Algebra & Calculus',
      'Introduction to Deep Learning',
      'Probability & Statistics for AI'
    ]
  };

  const certifications = [
    {
      title: 'IELTS Academic: 7.0 Band Score',
      issuer: 'British Council',
      date: 'Dec 2025',
      type: 'Language proficiency credential'
    },
    {
      title: 'AI Agents in LangGraph',
      issuer: 'DeepLearning.AI',
      date: 'Jan 2026',
      type: 'Advanced multi-agent orchestration course'
    },
    {
      title: 'Building Agentic RAG with LlamaIndex',
      issuer: 'DeepLearning.AI',
      date: 'Jan 2026',
      type: 'Production-ready retriever architectures'
    },
    {
      title: 'Functions, Tools and Agents with LangChain',
      issuer: 'DeepLearning.AI',
      date: 'Feb 2026',
      type: 'LLM tool-calling and workflow pipelines'
    },
    {
      title: 'Intro to Machine Learning',
      issuer: 'Kaggle Certifications',
      date: 'Jun 2026',
      type: 'Foundational ML modeling and validation'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-bg text-text-body flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-6xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-24 2xl:py-32 flex flex-col items-center min-h-screen">
      {/* Title */}
      <ScrollReveal className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest font-semibold text-accent">Academic Foundation</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-display text-text-heading mt-2">
          Education & Credentials
        </h1>
        <p className="text-sm text-text-muted mt-2 max-w-md mx-auto">
          A certified record of my academic study, technical specialization, and linguistic capabilities.
        </p>
      </ScrollReveal>

      {/* Main Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column - Academic Degree (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          <ScrollReveal direction="left">
            <div className="glass-panel p-8 md:p-10 rounded-3xl space-y-6 hover:border-accent/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-500" />
              
              <div className="flex items-start gap-5">
                <div className="p-4 bg-accent-dim rounded-2xl">
                  <GraduationCap className="text-accent" size={32} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-accent-deep dark:text-accent-bright bg-accent-dim px-2.5 py-0.5 rounded-full">
                    Degree Program
                  </span>
                  <h2 className="text-2xl font-bold text-text-heading font-display pt-1">
                    {academicDetails.degree}
                  </h2>
                  <p className="text-sm text-text-muted font-medium">{academicDetails.institutions}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-xs text-text-muted border-y border-border-token/20 py-4">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-accent" /> {academicDetails.period}</span>
                <span className="flex items-center gap-2"><BookOpen size={14} className="text-accent" /> Full-time joint study</span>
              </div>

              <p className="text-sm text-text-body leading-relaxed">
                {academicDetails.desc}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-widest text-text-heading">Key Core Subjects</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {academicDetails.courses.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-text-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border-token/20 flex justify-between items-center">
                <span className="text-xs font-mono text-text-muted">Academic Standings</span>
                <div className="text-right">
                  <div className="text-3xl font-extrabold text-accent font-mono leading-none">{academicDetails.gpa}</div>
                  <span className="text-[10px] text-text-muted">Scale of 7.00</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Inspirational Quote */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="border-l-2 border-accent pl-6 py-3 italic text-text-heading font-display flex gap-3">
              <Quote size={24} className="text-accent shrink-0" />
              <p className="text-base md:text-lg">
                "Continuous preparation is the foundation of high-performance execution. Knowledge structured is speed unlocked."
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column - Certifications (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <ScrollReveal direction="right">
            <h3 className="text-lg font-bold text-text-heading flex items-center gap-2.5 mb-2">
              <ShieldCheck size={20} className="text-accent" />
              <span>Professional Credentials</span>
            </h3>
          </ScrollReveal>

          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05} direction="right">
                <div className="glass-panel p-6 rounded-2xl hover:border-accent/40 transition-all duration-300 flex items-start gap-4">
                  <div className="p-2.5 bg-accent-dim rounded-xl mt-0.5">
                    <Award className="text-accent" size={20} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-accent-deep dark:text-accent-bright bg-accent-dim px-2 py-0.5 rounded-md">
                      {cert.date}
                    </span>
                    <h4 className="text-sm font-bold text-text-heading pt-1">{cert.title}</h4>
                    <p className="text-xs text-text-muted">{cert.issuer} &middot; {cert.type}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Education;
