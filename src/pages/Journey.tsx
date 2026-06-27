import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, CheckCircle, Image as ImageIcon } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { experiences } from '../data/experience';
import { milestones } from '../data/milestones';

export const Journey: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-bg text-text-body flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-6xl xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-24 2xl:py-32 flex flex-col items-center">
      {/* Page Hero Header */}
      <ScrollReveal className="text-center mb-20">
        <span className="text-xs uppercase tracking-widest font-semibold text-accent">Career Timeline</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-display text-text-heading mt-2">
          The Journey
        </h1>
        <p className="text-sm text-text-muted mt-2 max-w-md mx-auto">
          A documented timeline of academic achievements and technical work experience.
        </p>
      </ScrollReveal>

      {/* 💼 TRACK 1: WORK EXPERIENCE */}
      <section className="w-full mb-28">
        <ScrollReveal className="flex items-center gap-3 mb-10">
          <Briefcase size={28} className="text-accent" />
          <h2 className="text-2xl md:text-4xl font-bold font-display text-text-heading">
            Work Experience
          </h2>
        </ScrollReveal>

        <div className="flex flex-col space-y-8 w-full">
          {experiences.map((exp) => (
            <ScrollReveal key={exp.id}>
              <div className="glass-panel p-6 md:p-8 rounded-3xl hover:border-accent/40 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left Column (Logo & Meta) */}
                  <div className="md:col-span-4 flex flex-col space-y-6">
                    {/* Company Logo */}
                    {exp.companyLogo ? (
                      <div className="w-36 h-20 rounded-xl border border-border-token/30 overflow-hidden bg-white flex items-center justify-center p-2.5">
                        <img 
                          src={exp.companyLogo} 
                          alt={exp.company + ' logo'} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 rounded-2xl border-2 border-dashed border-border-token/50 flex flex-col items-center justify-center text-center p-2">
                        <ImageIcon size={28} className="text-text-muted" />
                        <span className="text-[10px] text-text-muted mt-1 font-semibold">Logo Coming</span>
                      </div>
                    )}

                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-bold font-display text-text-heading leading-tight">{exp.company}</h3>
                      <p className="text-sm md:text-base font-semibold text-accent font-mono uppercase tracking-wider">{exp.role}</p>
                      <div className="flex flex-col space-y-2 text-sm text-text-body">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-accent" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-accent" />
                          <span>{exp.startDate} – {exp.endDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Meta Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="text-xs font-bold uppercase tracking-wider bg-accent-dim text-accent-deep dark:text-accent-bright px-3.5 py-1.5 rounded-lg">
                        {exp.type}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider bg-bg-alt border border-border-token/30 text-text-muted px-3.5 py-1.5 rounded-lg">
                        {exp.mode}
                      </span>
                      {exp.isActive && (
                        <span className="text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Active
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Column (Responsibilities Flow & Skills) */}
                  <div className="md:col-span-8 flex flex-col justify-between space-y-6">
                    {/* Responsibilities */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-text-heading uppercase tracking-wider">Responsibilities</h4>
                      <div className="grid grid-cols-1 gap-4">
                        {exp.responsibilities.map((resp, i) => (
                          <div 
                            key={i} 
                            className="bg-bg-alt/40 border border-border-token/20 p-4 rounded-2xl flex items-start gap-3 hover:border-accent/30 transition-colors"
                          >
                            <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                            <p className="text-sm text-text-body leading-relaxed">{resp}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills Used */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-text-heading uppercase tracking-wider">Skills Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="text-xs font-mono bg-bg-alt/60 border border-border-token/30 px-3 py-1 rounded-full text-text-muted hover:border-accent/40 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 🎓 TRACK 2: EDUCATION */}
      <section className="w-full mb-28">
        <ScrollReveal className="flex items-center gap-3 mb-10">
          <GraduationCap size={28} className="text-accent" />
          <h2 className="text-2xl md:text-4xl font-bold font-display text-text-heading">
            Education
          </h2>
        </ScrollReveal>

        <div className="w-full">
          {milestones.filter(m => m.type === 'education').map((edu) => (
            <ScrollReveal key={edu.id}>
              <div className="glass-panel p-8 md:p-12 rounded-3xl hover:border-accent/40 transition-all duration-300 relative overflow-hidden group">
                {/* Background ambient light */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-accent/10 transition-all duration-500" />
                
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center relative z-10">
                  {/* Left: Content */}
                  <div className="flex-1 space-y-5">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs md:text-sm font-mono bg-accent-dim text-accent-deep dark:text-accent-bright border border-accent/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider font-bold">
                          {edu.date}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-text-heading tracking-tight leading-tight pt-1">
                        {edu.subtitle}
                      </h3>
                      <p className="text-lg md:text-xl font-semibold text-text-muted">
                        {edu.title}
                      </p>
                    </div>

                    <p className="text-base md:text-lg text-text-body/90 leading-relaxed border-l-2 border-accent/40 pl-4 py-1 italic">
                      "{edu.description}"
                    </p>
                  </div>

                  {/* Right: Logos arranged nicely in a container */}
                  <div className="flex items-center gap-4 bg-bg-alt/40 border border-border-token/30 p-5 md:p-6 rounded-2xl shrink-0 self-stretch lg:self-center justify-center lg:flex-col lg:gap-4 min-w-[240px] hover:border-accent/30 transition-colors">
                    <div className="h-24 px-6 rounded-xl border border-border-token/20 bg-white flex items-center justify-center shadow-sm w-48 hover:scale-105 transition-transform">
                      <img src="/assets/images/companies/uts_logo.png" alt="UTS Logo" className="h-14 w-auto object-contain" />
                    </div>
                    <div className="text-text-muted font-bold text-[10px] uppercase tracking-widest">Joint Program</div>
                    <div className="h-24 px-6 rounded-xl border border-border-token/20 bg-white flex items-center justify-center shadow-sm w-48 hover:scale-105 transition-transform">
                      <img src="/assets/images/companies/bku_logo.png" alt="BKU Logo" className="h-14 w-auto object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default Journey;
