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
      <ScrollReveal className="text-center mb-16 md:mb-20">
        <span className="text-xs uppercase tracking-widest font-semibold text-accent font-mono">Career Timeline</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-display text-text-heading mt-3">
          The Journey
        </h1>
        <p className="text-sm md:text-base text-text-muted mt-4 max-w-lg mx-auto leading-relaxed">
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
              <div className="glass-panel p-6 md:p-8 lg:p-10 rounded-3xl hover:border-accent/40 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left Column (Logo & Meta) */}
                  <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-5">
                    {/* Company Logo (Wider & centered frame) */}
                    {exp.companyLogo ? (
                      <div className="w-full max-w-[340px] md:max-w-[380px] h-24 rounded-2xl border border-border-token/30 overflow-hidden bg-white flex items-center justify-center p-3.5 shadow-sm">
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

                    <div className="space-y-2.5 w-full">
                      <h3 className="text-2xl md:text-4xl font-bold font-display text-text-heading leading-tight">{exp.company}</h3>
                      <p className="text-sm md:text-base font-semibold text-accent font-display uppercase tracking-wider">{exp.role}</p>
                      <div className="flex flex-col items-center md:items-start space-y-1.5 text-base md:text-lg text-text-body/90 font-medium">
                        <div className="flex items-center gap-2">
                          <MapPin size={18} className="text-accent shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={18} className="text-accent shrink-0" />
                          <span>{exp.startDate} – {exp.endDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Responsibilities Flow & Skills) */}
                  <div className="md:col-span-7 flex flex-col justify-between space-y-5">
                    {/* Responsibilities (Tighter spacing & compact line height) */}
                    <div className="space-y-2.5">
                      <h4 className="text-sm md:text-base font-bold text-text-heading uppercase tracking-wider">Responsibilities</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {exp.responsibilities.map((resp, i) => (
                          <div 
                            key={i} 
                            className="bg-bg-alt/40 border border-border-token/20 p-2.5 md:p-3 rounded-xl flex items-start gap-2.5 hover:border-accent/30 transition-colors"
                          >
                            <CheckCircle size={16} className="text-accent shrink-0 mt-1" />
                            <p className="text-sm md:text-base text-text-body/90 leading-snug font-body">{resp}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills Used (Tech Stack style matching Project cards) */}
                    <div className="flex flex-wrap items-center gap-2.5 text-sm md:text-base font-semibold pt-4 border-t border-border-token/15">
                      <span className="font-bold text-text-heading shrink-0 mr-1">Skills Used:</span>
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="text-sm font-medium bg-bg border border-border-token/30 px-3.5 py-1.5 rounded-lg text-text-heading hover:border-accent/40 hover:text-accent transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
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
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2.5">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-text-heading tracking-tight leading-tight">
                        {edu.subtitle}
                      </h3>
                      <p className="text-lg md:text-xl font-semibold text-text-muted">
                        {edu.title}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-base md:text-lg text-text-body/90 font-medium pt-1">
                      <Calendar size={18} className="text-accent shrink-0" />
                      <span>{edu.date}</span>
                    </div>
                  </div>

                  {/* Right: Logos arranged nicely in a container */}
                  <div className="flex items-center gap-4 bg-bg-alt/40 border border-border-token/30 p-5 md:p-6 rounded-2xl shrink-0 self-stretch lg:self-center justify-center lg:flex-col lg:gap-3 min-w-[240px] hover:border-accent/30 transition-colors">
                    <div className="h-24 px-6 rounded-xl border border-border-token/20 bg-white flex items-center justify-center shadow-sm w-48 hover:scale-105 transition-transform">
                      <img src="/assets/images/companies/uts_logo.png" alt="UTS Logo" className="h-14 w-auto object-contain" />
                    </div>
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
