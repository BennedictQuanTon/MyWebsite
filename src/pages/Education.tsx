import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, ShieldCheck, Library } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const Education: React.FC = () => {
  // --- PLACEHOLDER DATA FOR USER TO FILL ---
  const degreeProgram = {
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

  const extraCourses = [
    {
      title: 'AI Agents in LangGraph',
      provider: 'DeepLearning.AI',
      date: 'Jan 2026',
      desc: 'Advanced multi-agent orchestration course focusing on building complex, stateful LLM applications.'
    },
    {
      title: 'Building Agentic RAG with LlamaIndex',
      provider: 'DeepLearning.AI',
      date: 'Jan 2026',
      desc: 'Production-ready retriever architectures and advanced RAG techniques.'
    },
    {
      title: 'Functions, Tools and Agents with LangChain',
      provider: 'DeepLearning.AI',
      date: 'Feb 2026',
      desc: 'LLM tool-calling, reasoning loops, and workflow pipelines.'
    }
  ];

  const certifications = [
    {
      title: 'IELTS Academic: 7.0 Band Score',
      issuer: 'British Council',
      date: 'Dec 2025',
      type: 'Language proficiency credential'
    },
    {
      title: 'Intro to Machine Learning',
      issuer: 'Kaggle Certifications',
      date: 'Jun 2026',
      type: 'Foundational ML modeling and validation'
    }
  ];
  // -----------------------------------------

  return (
    <div className="w-full min-h-screen bg-bg text-text-body flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-6xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-24 2xl:py-32 flex flex-col items-center min-h-screen">
        
        {/* Page Title */}
        <ScrollReveal className="text-center mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent font-mono">Academic Foundation</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-display text-text-heading mt-3">
            Education & Credentials
          </h1>
          <p className="text-sm md:text-base text-text-muted mt-4 max-w-lg mx-auto leading-relaxed">
            A certified record of my academic study, technical specialization, and professional capabilities.
          </p>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: My Degree Program */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap size={24} className="text-accent" />
                <h2 className="text-2xl md:text-3xl font-bold font-display text-text-heading">
                  My Degree Program
                </h2>
              </div>

              <div className="glass-panel p-8 md:p-10 rounded-3xl space-y-6 hover:border-accent/30 transition-all duration-500 relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-700 pointer-events-none" />
                
                <div className="space-y-2 relative z-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">
                    University Degree
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-heading font-display leading-tight">
                    {degreeProgram.degree}
                  </h3>
                  <p className="text-sm md:text-base text-text-muted font-medium mt-1">
                    {degreeProgram.institutions}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-xs text-text-muted border-y border-border-token/20 py-4 relative z-10">
                  <span className="flex items-center gap-2 font-mono">
                    <Calendar size={14} className="text-accent" /> {degreeProgram.period}
                  </span>
                  <span className="flex items-center gap-2 font-mono">
                    <BookOpen size={14} className="text-accent" /> Full-time joint study
                  </span>
                </div>

                <p className="text-sm text-text-body leading-relaxed relative z-10">
                  {degreeProgram.desc}
                </p>

                <div className="space-y-4 relative z-10">
                  <h4 className="text-xs uppercase font-bold tracking-widest text-text-heading font-mono">Key Core Subjects</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {degreeProgram.courses.map((course, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-text-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1 shrink-0" />
                        <span className="leading-tight">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border-token/20 flex justify-between items-center relative z-10">
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider">Academic Standing</span>
                  <div className="text-right">
                    <div className="text-2xl md:text-3xl font-extrabold text-accent font-mono leading-none">
                      {degreeProgram.gpa}
                    </div>
                    <span className="text-[10px] text-text-muted uppercase tracking-wider block mt-1">Scale of 7.00</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: Extra Courses & Certifications */}
          <div className="lg:col-span-6 flex flex-col gap-12">
            
            {/* Extra Courses Section */}
            <ScrollReveal direction="right">
              <div className="flex items-center gap-3 mb-6">
                <Library size={24} className="text-accent" />
                <h2 className="text-2xl md:text-3xl font-bold font-display text-text-heading">
                  Extra Courses
                </h2>
              </div>

              <div className="space-y-4">
                {extraCourses.map((course, idx) => (
                  <div 
                    key={idx} 
                    className="glass-panel p-6 rounded-2xl hover:border-accent/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group"
                  >
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[10px] font-mono text-accent-deep dark:text-accent-bright bg-accent-dim px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                          {course.date}
                        </span>
                        <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                          {course.provider}
                        </span>
                      </div>
                      <h4 className="text-base md:text-lg font-bold text-text-heading font-display group-hover:text-accent transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-xs md:text-sm text-text-body/80 leading-relaxed">
                        {course.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Certifications Section */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck size={24} className="text-accent" />
                <h2 className="text-2xl md:text-3xl font-bold font-display text-text-heading">
                  Certifications
                </h2>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div 
                    key={idx} 
                    className="glass-panel p-5 md:p-6 rounded-2xl hover:border-accent/40 transition-all duration-300 flex items-start gap-4 md:gap-5 group"
                  >
                    <div className="p-3 bg-accent-dim rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Award className="text-accent" size={20} />
                    </div>
                    <div className="flex flex-col space-y-1.5 w-full">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm md:text-base font-bold text-text-heading leading-tight">
                          {cert.title}
                        </h4>
                        <span className="text-[10px] font-mono text-text-muted shrink-0">
                          {cert.date}
                        </span>
                      </div>
                      <p className="text-xs text-text-muted font-mono uppercase tracking-wider">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-text-body/70">
                        {cert.type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;
