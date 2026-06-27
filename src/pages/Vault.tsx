import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, X, Calendar, User, Tag, Sparkles, Trophy } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { projects } from '../data/projects';
import type { Project } from '../types';
import { genericTechIcon } from '../components/ui/TechLogos';

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    height={size}
    width={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 3.12.9.01.64.01 1.11.01 1.2 0 .21-.16.46-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8z" />
  </svg>
);

export const Vault: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const closeProjectModal = () => {
    navigate('/projects', { replace: true });
  };

  // Sync selectedProject with URL search param "?id=..."
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const projectId = params.get('id');
    if (projectId) {
      const match = projects.find((p) => p.id === projectId);
      if (match) {
        setSelectedProject(match);
      } else {
        setSelectedProject(null);
      }
    } else {
      setSelectedProject(null);
    }
  }, [location.search]);

  // Keyboard accessibility: Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeProjectModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const categories = ['All', 'Personal Project', 'Competition'];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  return (
    <div className="w-full min-h-screen bg-bg text-text-body flex flex-col items-center overflow-x-hidden">
      <div className="w-full max-w-[1340px] mx-auto px-6 md:px-12 py-24 flex flex-col items-center">
        {/* Page Title */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-accent">Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-text-heading mt-2">
            Projects & Codebases
          </h1>
          <p className="text-sm text-text-muted mt-2 max-w-md mx-auto">
            An archive of intelligent agent systems, full-stack applications, and hackathon projects.
          </p>
        </ScrollReveal>

        {/* Pill Filter Bar */}
        <ScrollReveal className="w-full flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-3 p-1.5 rounded-full glass-panel max-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${filter === cat
                    ? 'bg-accent text-bg shadow-md'
                    : 'text-text-muted hover:text-text-heading hover:bg-surface-2'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Horizontal Project List */}
        <div className="w-full flex flex-col space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isCompetition = project.category === 'Competition';

              const getCompetitionBadge = (id: string) => {
                if (id === 'weatherise') return { text: 'Top 10 Finalist', color: 'bg-amber-500/90 text-white border border-amber-400/20' };
                return null;
              };

              const badge = isCompetition ? getCompetitionBadge(project.id) : null;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full group cursor-pointer"
                  onClick={() => navigate(`/projects?id=${project.id}`)}
                >
                  <div className={`glass-panel rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300 p-8 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch relative ${isCompetition
                      ? 'border-accent/40 dark:border-accent/40 shadow-xl shadow-accent/10 dark:shadow-accent/20 ring-1 ring-accent/20 bg-gradient-to-br from-bg-alt/75 via-surface/30 to-bg-alt/55'
                      : 'hover:border-accent/40'
                    }`}>
                    {/* Glowing background blob for Competition */}
                    {isCompetition && (
                      <div className="absolute -right-24 -top-24 w-48 h-48 rounded-full bg-accent/8 dark:bg-accent/4 blur-3xl pointer-events-none z-0" />
                    )}

                    {/* Left Column: Media Preview */}
                    <div className="relative w-full lg:w-[32%] min-h-[260px] lg:min-h-auto lg:self-stretch bg-bg-alt/50 overflow-hidden rounded-2xl border border-border-token/40 shrink-0 z-10">
                      {/* Competition Badge */}
                      {badge && (
                        <div className={`absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 px-3 py-1 ${badge.color} rounded-full text-[9px] font-bold uppercase tracking-wider shadow-md backdrop-blur-sm`}>
                          <Trophy size={10} />
                          <span>{badge.text}</span>
                        </div>
                      )}

                      {project.status === 'placeholder' ? (
                        <div className="w-full h-full min-h-[240px] flex flex-col items-center justify-center p-6 text-center">
                          <Sparkles className="text-accent/60 mb-2 animate-pulse" size={24} />
                          <span className="text-xs font-semibold text-text-heading">Visual Coming Soon</span>
                          <span className="text-[10px] text-text-muted mt-0.5">Visual coming soon</span>
                        </div>
                      ) : project.hoverMedia.type === 'video' ? (
                        <video
                          src={project.hoverMedia.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover transition-transform duration-500 absolute inset-0"
                        />
                      ) : (
                        <img
                          src={project.hoverMedia.src}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-contain p-3.5 bg-white transition-transform duration-500 absolute inset-0"
                        />
                      )}
                    </div>

                    {/* Middle Column: Core Info */}
                    <div className="flex-grow flex flex-col justify-between space-y-5 lg:pr-6 z-10">
                      <div className="space-y-4">
                        {/* Top Meta Row */}
                        <div className="flex items-center gap-3">
                          <span className="text-lg md:text-xl font-mono font-bold text-accent">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          {isCompetition ? (
                            <span className="text-xs uppercase font-extrabold tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/25 px-3 py-1 rounded-full">
                              Competition
                            </span>
                          ) : (
                            <span className="text-xs uppercase font-extrabold tracking-widest text-accent-deep dark:text-accent-bright bg-accent-dim px-3 py-1 rounded-full">
                              {project.category}
                            </span>
                          )}
                          {!isCompetition && (
                            <span className="text-xs md:text-sm font-semibold text-text-muted ml-auto lg:ml-0">
                              {project.period}
                            </span>
                          )}
                        </div>

                        {/* Competition Meta Section */}
                        {isCompetition && project.competitionName && (
                          <div className="flex flex-col space-y-2.5 mt-2 mb-4">
                            {/* 1. Tên cuộc thi */}
                            <div className="text-base md:text-lg font-extrabold text-text-heading leading-snug">
                              {project.competitionName}
                            </div>

                            {/* 2. Logo ban tổ chức bên dưới */}
                            <div className="flex items-center gap-2">
                              {project.organizerLogos ? (
                                project.organizerLogos.map((logo, idx) => (
                                  <div key={idx} className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center border border-border-token/10 shadow-xs hover:scale-105 transition-transform duration-200">
                                    <img 
                                      src={logo} 
                                      alt={`Organizer ${idx + 1}`} 
                                      className="w-full h-full object-contain" 
                                    />
                                  </div>
                                ))
                              ) : project.organizerLogo ? (
                                <div className="w-18 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center border border-border-token/10 shadow-xs hover:scale-105 transition-transform duration-200">
                                  <img 
                                    src={project.organizerLogo} 
                                    alt={project.organizer} 
                                    className="w-full h-full object-contain" 
                                  />
                                </div>
                              ) : null}
                            </div>

                            {/* 3. Thời gian thi */}
                            <div className="text-xs md:text-sm text-text-muted font-medium flex items-center gap-1.5">
                              <Calendar size={13} className="text-accent shrink-0" />
                              <span>{project.period}</span>
                            </div>
                          </div>
                        )}

                        <h3 className="text-2xl md:text-3xl font-bold font-display text-text-heading group-hover:text-accent transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-sm md:text-base text-text-body leading-relaxed md:leading-loose line-clamp-4">
                          {project.summary}
                        </p>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.techStack.slice(0, 6).map((tech) => (
                          <span key={tech} className="flex items-center gap-1.5 text-xs font-mono bg-bg-alt/50 border border-border-token/30 px-3 py-1 rounded-full text-text-muted">
                            {genericTechIcon(tech, 12, "fill-current text-text-muted shrink-0")}
                            <span>{tech}</span>
                          </span>
                        ))}
                        {project.techStack.length > 6 && (
                          <span className="text-xs font-mono bg-bg-alt/50 border border-border-token/30 px-3 py-1 rounded-full text-text-muted">
                            +{project.techStack.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Key Features & Links */}
                    <div className="w-full lg:w-[30%] shrink-0 border-t lg:border-t-0 lg:border-l border-border-token/20 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between space-y-6 z-10">
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-text-muted block">
                            My Role
                          </span>
                          <span className="text-xs font-bold text-text-heading block bg-surface-2/40 border border-border-token/10 px-3 py-1.5 rounded-lg max-w-max">
                            {project.role}
                          </span>
                        </div>
                        <span className="text-xs uppercase font-bold tracking-wider text-text-muted block pt-1">
                          Key Features
                        </span>
                        <ul className="space-y-3">
                          {project.outcomes.slice(0, 3).map((outcome, idx) => (
                            <li key={idx} className="text-xs md:text-sm text-text-body flex items-start gap-2 leading-relaxed md:leading-loose">
                              <span className="text-accent mt-1.5 shrink-0">•</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4 mt-auto">
                        <span className="text-sm font-semibold text-accent group-hover:text-accent-bright flex items-center gap-1.5 transition-colors duration-200">
                          View Project <ArrowUpRight size={16} />
                        </span>
                        {project.githubUrl && (
                          <div
                            onClick={(e) => {
                              e.stopPropagation(); // prevent modal trigger
                            }}
                            className="p-2 rounded-full hover:bg-surface-2 text-text-muted hover:text-text-heading border border-border-token/30 transition-all duration-200"
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Github repo">
                              <GithubIcon size={18} />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Project Detail Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/80 backdrop-blur-md"
              onClick={closeProjectModal}
            >
              {/* Modal Body */}
              <motion.div
                initial={{ y: 50, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 50, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col space-y-8 select-text"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-3 w-full">
                    <div className="flex items-center gap-3">
                      <span className="text-xs uppercase font-extrabold tracking-widest text-accent bg-accent-dim px-3 py-1 rounded-full">
                        {selectedProject.category}
                      </span>
                      {selectedProject.id === 'weatherise' && (
                        <span className="text-xs uppercase font-extrabold tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/25 px-3 py-1 rounded-full">
                          Top 10 Finalist
                        </span>
                      )}
                    </div>

                    {selectedProject.category === 'Competition' && selectedProject.competitionName && (
                      <div className="flex flex-col space-y-2.5 mt-2 mb-4">
                        {/* 1. Tên cuộc thi */}
                        <div className="text-base md:text-lg font-extrabold text-text-heading leading-snug">
                          {selectedProject.competitionName}
                        </div>

                        {/* 2. Logo ban tổ chức bên dưới */}
                        <div className="flex items-center gap-2">
                          {selectedProject.organizerLogos ? (
                            selectedProject.organizerLogos.map((logo, idx) => (
                              <div key={idx} className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center border border-border-token/10 shadow-xs hover:scale-105 transition-transform duration-200">
                                <img 
                                  src={logo} 
                                  alt={`Organizer ${idx + 1}`} 
                                  className="w-full h-full object-contain" 
                                />
                              </div>
                            ))
                          ) : selectedProject.organizerLogo ? (
                            <div className="w-18 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center border border-border-token/10 shadow-xs hover:scale-105 transition-transform duration-200">
                              <img 
                                src={selectedProject.organizerLogo} 
                                alt={selectedProject.organizer} 
                                className="w-full h-full object-contain" 
                              />
                            </div>
                          ) : null}
                        </div>

                        {/* 3. Thời gian thi */}
                        <div className="text-xs md:text-sm text-text-muted font-medium flex items-center gap-1.5">
                          <Calendar size={13} className="text-accent shrink-0" />
                          <span>{selectedProject.period}</span>
                        </div>
                      </div>
                    )}

                    <h2 className="text-2xl md:text-4xl font-bold font-display text-text-heading">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-text-muted">
                      <span className="flex items-center gap-1.5"><User size={14} className="text-accent" /> {selectedProject.role}</span>
                      {selectedProject.category !== 'Competition' && (
                        <span className="flex items-center gap-1.5"><Calendar size={14} className="text-accent" /> {selectedProject.period}</span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={closeProjectModal}
                    className="p-2 rounded-full hover:bg-surface-2 border border-border-token text-text-muted hover:text-text-heading transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Grid content split: 3/5 Left (problem/timeline) + 2/5 Right (tech/outcomes) */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  {/* Left Column (Details & Process Timeline) */}
                  <div className="md:col-span-3 flex flex-col space-y-6">
                    {/* Problem Statement */}
                    <div className="space-y-2">
                      <h3 className="text-sm uppercase font-bold tracking-widest text-text-heading flex items-center gap-2">
                        <Tag size={14} className="text-accent" /> The Challenge
                      </h3>
                      <p className="text-sm text-text-body leading-relaxed bg-bg-alt/40 p-4 rounded-2xl border border-border-token/30">
                        {selectedProject.problem}
                      </p>
                    </div>

                    {/* Process Timeline */}
                    <div className="space-y-4">
                      <h3 className="text-sm uppercase font-bold tracking-widest text-text-heading">
                        Development Timeline & Role
                      </h3>
                      <div className="border-l-2 border-border-token/40 pl-4 space-y-6">
                        {selectedProject.process.map((step, idx) => (
                          <div key={idx} className="relative space-y-2">
                            {/* Circle dot on border */}
                            <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-accent border border-bg" />
                            <span className="text-[10px] font-mono text-accent-deep dark:text-accent-bright font-bold">{step.date}</span>
                            <h4 className="text-sm font-bold text-text-heading">{step.title}</h4>
                            <p className="text-xs text-text-body leading-relaxed">{step.description}</p>
                            {step.image && (
                              <img
                                src={step.image}
                                alt={step.title}
                                className="w-full max-h-48 object-cover rounded-xl mt-2 border border-border-token/30"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Outcomes, Tech, Links) */}
                  <div className="md:col-span-2 flex flex-col space-y-6">
                    {/* Key Deliverables & Outcomes */}
                    <div className="space-y-3">
                      <h3 className="text-sm uppercase font-bold tracking-widest text-text-heading">
                        Measurable Outcomes
                      </h3>
                      <ul className="space-y-2.5 text-xs text-text-body list-disc pl-4 leading-relaxed">
                        {selectedProject.outcomes.map((outcome, idx) => (
                          <li key={idx}>{outcome}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Complete Tech Stack with Logos */}
                    <div className="space-y-3">
                      <h3 className="text-sm uppercase font-bold tracking-widest text-text-heading">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech) => (
                          <span key={tech} className="flex items-center gap-1.5 text-xs font-mono bg-accent-dim border border-border-token/40 text-accent-deep dark:text-accent-bright px-3 py-1.5 rounded-md">
                            {genericTechIcon(tech, 14, "fill-current text-accent shrink-0")}
                            <span>{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* External Links */}
                    {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                      <div className="space-y-3 pt-4 border-t border-border-token/30">
                        <h3 className="text-xs uppercase font-bold tracking-widest text-text-heading">
                          Repositories & Deployment
                        </h3>
                        <div className="flex flex-col gap-2">
                          {selectedProject.githubUrl && (
                            <a
                              href={selectedProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2 border border-border-token hover:bg-surface-2 rounded-xl text-text-heading transition-colors cursor-pointer"
                            >
                              <GithubIcon size={14} /> Repository
                            </a>
                          )}
                          {selectedProject.liveUrl && (
                            <a
                              href={selectedProject.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2 bg-accent hover:bg-accent-bright text-bg rounded-xl transition-colors cursor-pointer"
                            >
                              <ExternalLink size={14} /> Live System
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Vault;
