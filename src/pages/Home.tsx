import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Download, Brain, User, Cpu, Layers, Terminal, ChevronRight, Sparkles, Heart, Database, Layout, Trophy, Code, Rocket, Copy, Check, MapPin } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { genericTechIcon } from '../components/ui/TechLogos';
import { projects } from '../data/projects';
import { useTheme } from '../context/ThemeContext';

export const Home: React.FC = () => {
  const { theme } = useTheme();

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tonlongquanvn@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitFeedback('Please fill out all fields.');
      return;
    }
    setSubmitFeedback('');
    
    // Construct mailto link
    const subject = encodeURIComponent(`[Portfolio Contact] Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Long Quan Ton,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from Portfolio Contact Form.`
    );
    window.location.href = `mailto:tonlongquanvn@gmail.com?subject=${subject}&body=${body}`;
  };

  // Stats - Custom portfolio highlights
  const stats = [
    { 
      value: 'Top 10', 
      label: 'Finalist', 
      sublabel: 'Vietnam AI Open Hackathon', 
      icon: <Trophy size={20} className="text-accent" /> 
    },
    { 
      value: '2+', 
      label: 'Personal Projects', 
      sublabel: 'End-to-end AI Systems', 
      icon: <Code size={20} className="text-accent" /> 
    },
    { 
      value: '3+', 
      label: 'Competitions', 
      sublabel: 'Explored. Built. Shipped.', 
      icon: <Rocket size={20} className="text-accent" /> 
    },
    { 
      value: 'AI Focused', 
      label: 'Agentic Workflows', 
      sublabel: 'RAG · LLM · ML · Agents', 
      icon: <Brain size={20} className="text-accent" /> 
    }
  ];

  // Skills Architecture Layers
  const layers = [
    {
      num: '01',
      name: 'DATA LAYER',
      desc: 'Collect, store and prepare reliable data.',
      techs: ['PostgreSQL / PostGIS', 'Redis Cache', 'Qdrant Vector DB', 'Pandas • NumPy'],
      icon: <Database size={16} />
    },
    {
      num: '02',
      name: 'INTELLIGENCE LAYER',
      desc: 'Reasoning, retrieval and decision making.',
      techs: ['LangGraph', 'LangChain', 'RAG Pipeline', 'LLMs'],
      icon: <Brain size={16} />
    },
    {
      num: '03',
      name: 'BACKEND LAYER',
      desc: 'APIs, services and real-time communication.',
      techs: ['FastAPI', 'WebSocket', 'Docker', 'Nginx'],
      icon: <Terminal size={16} />
    },
    {
      num: '04',
      name: 'EXPERIENCE LAYER',
      desc: 'Deliver fast and delightful user experiences.',
      techs: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      icon: <Layout size={16} />
    }
  ];

  // Skills Overview Progress Cards
  const overviewSkills = [
    {
      name: 'AI Engineering',
      percent: 85,
      desc: 'Building intelligent agents and RAG systems',
      icon: <Brain size={16} />
    },
    {
      name: 'Backend Systems',
      percent: 80,
      desc: 'Designing scalable APIs and real-time services',
      icon: <Cpu size={16} />
    },
    {
      name: 'Frontend Development',
      percent: 75,
      desc: 'Creating responsive and interactive interfaces',
      icon: <Layout size={16} />
    },
    {
      name: 'Data Engineering',
      percent: 80,
      desc: 'Processing, analyzing and visualizing data',
      icon: <Layers size={16} />
    }
  ];

  // Tech stack rows
  const techCategories = [
    {
      label: 'Languages',
      techs: ['Python', 'TypeScript', 'SQL', 'C++', 'HTML/CSS'],
      icon: <Terminal size={14} />
    },
    {
      label: 'AI / ML & Frameworks',
      techs: ['LangGraph', 'LangChain', 'RAG', 'Ollama'],
      icon: <Brain size={14} />
    },
    {
      label: 'Backend & Databases',
      techs: ['FastAPI', 'WebSocket', 'PostgreSQL', 'PostGIS', 'Redis', 'Qdrant'],
      icon: <Cpu size={14} />
    },
    {
      label: 'Frontend & UI',
      techs: ['React', 'Next.js', 'Tailwind CSS', 'Chart.js'],
      icon: <Layout size={14} />
    },
    {
      label: 'Tools & DevOps',
      techs: ['Docker', 'Nginx', 'Git / GitHub', 'VS Code', 'Linux'],
      icon: <Layers size={14} />
    }
  ];

  return (
    <div className="w-full flex flex-col items-center bg-bg text-text-body overflow-x-hidden">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden pt-28 pb-16 border-b border-border-token/20 bg-bg">
        {/* Subtle background glow */}
        <div className="absolute right-[20%] top-[25%] w-[400px] h-[400px] rounded-full bg-accent/20 dark:bg-accent/10 blur-[100px] pointer-events-none z-0" />

        {/* Full-bleed Portrait - shifted left by increasing container width and objectPosition */}
        <div
          className="absolute inset-y-0 right-0 w-full md:w-[65%] lg:w-[56%] xl:w-[60%] overflow-hidden pointer-events-none"
        >
          <img
            src="/assets/images/portrait/NewImage.jpg"
            alt="Long Quan Ton"
            className="w-full h-full object-cover"
            style={{ objectPosition: '76% 15%', transform: 'scale(0.82)', transformOrigin: 'center top' }}
          />
          {/* Bottom blend — merges photo into next section */}
          {theme === 'light' && (
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
          )}
          {theme === 'dark' && (
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg to-transparent pointer-events-none z-10" />
          )}
        </div>

        {/* Full-width left blend — solid covers photo edge, then smooth fade */}
        <div
          className="absolute inset-0 pointer-events-none z-[5]"
          style={{
            background: 'linear-gradient(to right, var(--color-bg) 0%, var(--color-bg) 47%, transparent 62%)'
          }}
        />

        {/* Absolutely positioned Terminal - upper right, compact square shape */}
        <div className="hidden lg:flex absolute top-[30%] -translate-y-1/2 right-6 xl:right-12 z-20 w-[240px] xl:w-[260px]">
          <div className="glass-panel p-4 rounded-xl border border-border-token/30 font-mono text-[10px] bg-bg-alt/70 text-text-body space-y-2.5 shadow-xl select-none w-full backdrop-blur-md">
            <div className="flex items-center space-x-1.5 pb-1.5 border-b border-border-token/10">
              <div className="w-2 h-2 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <div className="w-2 h-2 rounded-full bg-green-500/80" />
              <span className="text-[9px] text-text-muted pl-2">shell - zsh</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center text-accent">
                <span className="text-text-muted pr-2">$</span>
                <span>whoami</span>
              </div>
              <div className="text-text-heading pl-3">&gt; Long Quan Ton _ AI_UTS_HCMUT</div>
              <div className="flex items-center text-accent pt-0.5">
                <span className="text-text-muted pr-2">$</span>
                <span>cat passion.log</span>
              </div>
              <div className="text-text-heading pl-3">&gt; Multi-agent architectures &amp; ML for Optimization</div>
              <div className="flex items-center text-accent pt-0.5 animate-pulse">
                <span className="text-text-muted pr-2">$</span>
                <span className="w-1.5 h-2.5 bg-accent inline-block" />
              </div>
            </div>
          </div>
        </div>

        {/* Center-aligned container wrapper - balanced viewport gaps */}
        <div className="w-full max-w-[1440px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 xl:px-20 relative z-10 flex flex-col justify-between gap-12 lg:gap-16 2xl:gap-20">
          {/* Top Row: Left content only - terminal is absolutely positioned */}
          <div className="w-full max-w-2xl">
            <div className="flex flex-col space-y-6 text-left relative -left-2 md:-left-8 lg:-left-16 xl:-left-24">
              {/* Location Pill Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent-dim border border-border-token w-max">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-text-muted">Ho Chi Minh City, Vietnam</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-display text-text-heading leading-[1.05] tracking-tight">
                  Long Quan Ton
                </h1>
                <p className="text-xl md:text-3xl font-semibold text-accent font-display italic tracking-wider leading-snug">
                  Aspiring AI Engineer
                </p>
                {/* Segmented status line indicator */}
                <div className="flex items-center gap-1.5 pt-1.5">
                  <div className="w-10 h-[2.5px] bg-accent rounded-full" />
                  <div className="w-4 h-[2.5px] bg-border-token/40 rounded-full" />
                  <div className="w-2.5 h-[2.5px] bg-border-token/40 rounded-full" />
                </div>
              </div>

              <p className="text-base md:text-lg text-text-body leading-relaxed max-w-lg">
                Passionate about building containerized agentic workflows, orchestrating LLM layers, and designing low-latency architectures to solve complex technical problems.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 flex-wrap pt-2">
                <Link 
                  to="/projects" 
                  className="px-7 py-3.5 rounded-full bg-accent hover:bg-accent-bright text-bg font-semibold text-sm flex items-center gap-2 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  View My Work <ArrowUpRight size={16} />
                </Link>
                <a 
                  href="/Long_Quan_Ton_CV.pdf" 
                  download="Long_Quan_Ton_CV.pdf"
                  className="px-7 py-3.5 rounded-full border border-border-token text-text-heading hover:bg-surface-2 text-sm flex items-center gap-2 font-semibold transition-all duration-300"
                >
                  Download CV <Download size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Row: Full-Width Horizontal Stats Banner */}
          <div className="w-full glass-panel p-6 rounded-2xl border border-border-token/40 shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x lg:divide-border-token/20 mt-8 relative -left-2 md:-left-8 lg:-left-16 xl:-left-24 lg:w-[calc(100%+8rem)] xl:w-[calc(100%+12rem)]">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-4 px-2 lg:px-6 first:pl-2">
                <div className="p-3 bg-accent-dim rounded-xl flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div className="flex flex-col space-y-0.5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl md:text-3xl font-extrabold text-text-heading font-display tracking-tight leading-none">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm font-bold text-text-heading tracking-tight leading-snug">
                    {stat.label}
                  </span>
                  <span className="text-[10px] md:text-xs text-text-muted leading-tight font-medium">
                    {stat.sublabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. About Me Section */}
      <section className="relative w-full max-w-[1360px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28 2xl:py-32 border-b border-border-token/20 overflow-hidden">
        <div className="absolute left-[8%] top-1/3 w-[360px] h-[360px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="absolute right-[15%] bottom-1/4 w-[280px] h-[280px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left: Summary text & identity */}
          <ScrollReveal direction="left" className="lg:col-span-6">
            <div className="relative">
              <div className="flex items-center gap-2.5 mb-4">
                <User size={17} className="text-accent" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent font-mono">About Me</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-display text-text-heading leading-[0.95] tracking-tight">
                My Story <br />
                <span className="italic font-normal text-accent">&amp; Path</span>
              </h2>
              <div className="flex items-center gap-1.5 mt-5 mb-7">
                <div className="w-12 h-[2.5px] bg-accent rounded-full" />
                <div className="w-5 h-[2.5px] bg-border-token/40 rounded-full" />
                <div className="w-3 h-[2.5px] bg-border-token/40 rounded-full" />
              </div>

              <div className="space-y-4 max-w-xl">
                <p className="text-base md:text-lg text-text-body leading-relaxed">
                  I'm a joint AI student at <span className="text-text-heading font-semibold">UTS × HCMUT</span> driven by a deep curiosity for how intelligent systems can solve real-world problems. My passion lies in building <span className="text-accent font-semibold">agentic workflows</span>, orchestrating LLM pipelines, and applying <span className="text-accent font-semibold">machine learning</span> to optimize complex decision-making.
                </p>
                <p className="text-base md:text-lg text-text-body leading-relaxed">
                  From training ML models to designing multi-agent architectures and shipping end-to-end AI applications — every project I take on is a step toward mastering the craft of <span className="text-text-heading font-semibold">practical AI engineering</span>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3 mt-8">
                {[
                  { label: 'UTS × HCMUT', sub: 'Joint Program' },
                  { label: 'Agentic AI', sub: 'Core Direction' },
                  { label: 'LLMs · MCP', sub: 'Technical Focus' },
                ].map((chip) => (
                  <div key={chip.label} className="group/chip border border-border-token/30 bg-bg-alt/35 rounded-2xl p-4 hover:border-accent/45 hover:bg-accent-dim/40 transition-all duration-300">
                    <span className="block text-xs md:text-sm font-semibold text-text-heading group-hover/chip:text-accent transition-colors">{chip.label}</span>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-text-muted mt-1">{chip.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Single professional portrait with luxury effects */}
          <ScrollReveal direction="right" className="lg:col-span-6">
            <div className="relative flex items-center justify-center">
              {/* Ambient glow behind portrait */}
              <div className="absolute w-[85%] h-[85%] rounded-[2rem] bg-accent/8 blur-[60px] pointer-events-none" />
              
              {/* Portrait container */}
              <div className="relative portrait-frame portrait-glow portrait-float w-full max-w-[460px] aspect-[3/4] rounded-[1.5rem] overflow-hidden border border-border-token/25">
                <img
                  src="/assets/images/portrait/Myself_Best_Potrait.png"
                  alt="Long Quan Ton — AI Engineer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                {/* Cinematic vignette overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'radial-gradient(ellipse at center, transparent 55%, var(--bg) 100%)',
                  opacity: 0.45,
                }} />
                {/* Inner ring highlight */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/8 pointer-events-none rounded-[1.5rem]" />
                {/* Bottom accent crop mark */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              </div>

              {/* Decorative crop marks */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-accent/25 rounded-tl-sm pointer-events-none hidden lg:block" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-accent/25 rounded-br-sm pointer-events-none hidden lg:block" />
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 3. Projects Loop Carousel (Small Square Cards, Infinite Scrolling Marquee) */}
      <section className="w-full max-w-[1360px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-20 border-b border-border-token/20">
        <div className="flex flex-col space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-2.5">
                <Layers size={20} className="text-accent" />
                <span className="text-sm uppercase tracking-widest font-semibold text-accent">Selected Works</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-display text-text-heading mt-3">
                Projects &amp; Competitions
              </h2>
            </ScrollReveal>

            <Link
              to="/projects"
              className="text-sm font-semibold text-accent hover:text-accent-bright flex items-center gap-1.5"
            >
              View All Projects <ChevronRight size={16} />
            </Link>
          </div>

          {/* Scrolling Marquee Carousel View */}
          <div className="w-full overflow-hidden relative py-4">
            {/* Fade overlays */}
            <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-6 animate-[project-marquee_35s_linear_infinite] hover:[animation-play-state:paused] w-max">
              {[...projects, ...projects].map((project, idx) => (
                <div
                  key={`${project.id}-${idx}`}
                  className="w-[300px] md:w-[340px] shrink-0 group"
                >
                  <Link to={`/projects?id=${project.id}`}>
                    <div className="glass-panel rounded-2xl overflow-hidden h-full flex flex-col hover:border-accent/40 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl hover:shadow-accent/5 dark:hover:shadow-accent/15 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                      
                      {/* Small Square Image preview */}
                      <div 
                        className="relative aspect-video w-full bg-bg-alt/50 overflow-hidden border-b border-border-token/20"
                        style={{
                          backgroundColor: project.hoverMedia && project.hoverMedia.objectFit === 'contain' ? '#ffffff' : undefined
                        }}
                      >
                        {project.status === 'placeholder' ? (
                          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                            <Sparkles className="text-accent/60 mb-1 animate-pulse" size={24} />
                            <span className="text-xs font-semibold text-text-heading">Coming Soon</span>
                          </div>
                        ) : (
                          <>
                            <img
                              src={project.hoverMedia.src}
                              alt={project.title}
                              loading="lazy"
                              className="w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                              style={{
                                objectFit: project.hoverMedia.objectFit || 'cover',
                                objectPosition: project.hoverMedia.objectPosition || 'center'
                              }}
                            />
                            {/* Dark gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            {/* Floating Action Button inside image container */}
                            <div className="absolute bottom-3 right-3 p-2 rounded-full bg-accent text-bg scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out shadow-lg">
                              <ArrowUpRight size={14} />
                            </div>
                          </>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-grow flex flex-col justify-between space-y-4 bg-bg-alt/5 transition-colors duration-300 group-hover:bg-bg-alt/25">
                        <div className="space-y-3">
                          {/* Category & Period info */}
                          <div className="flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-text-muted/80">
                            <span className="font-bold text-accent">
                              {project.category === 'Competition' && project.competitionName 
                                ? project.competitionName 
                                : project.category}
                            </span>
                            <span>{project.period.includes(' – ') ? project.period.split(' – ')[0] : project.period}</span>
                          </div>

                          <h3 className="text-lg md:text-xl font-bold font-display text-text-heading group-hover:text-accent transition-colors duration-300 leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-xs md:text-sm text-text-body/75 line-clamp-2 leading-relaxed font-body font-normal">
                            {project.summary}
                          </p>
                        </div>

                        {/* Tech stack tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.techStack.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-[9px] font-mono bg-surface-2/60 border border-border-token/15 px-2.5 py-1 rounded-md text-text-muted hover:border-accent/30 hover:text-accent transition-colors duration-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <style>{`
              @keyframes project-marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-50% - 12px)); }
              }
            `}</style>
          </div>

        </div>
      </section>

      {/* 4. Skills & Tech Stack Section */}
      <section className="w-full max-w-[1360px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28 2xl:py-32 border-b border-border-token/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Developer Skills & Layers */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-2.5">
                <Terminal size={20} className="text-accent" />
                <span className="text-sm uppercase tracking-widest font-semibold text-accent">Technical Rigor</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-display text-text-heading mt-3">
                Developer Skills
              </h2>
              <p className="text-base text-text-body mt-3 leading-relaxed">
                I design, build and ship reliable <span className="text-accent font-semibold">AI systems</span> from data to intelligent experiences.
              </p>
            </ScrollReveal>

            {/* Architecture Layers */}
            <ScrollReveal direction="left" delay={0.1}>
              <div className="relative space-y-6">
                {/* Connecting vertical line */}
                <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-accent/30 dark:bg-accent/20 -z-10" />
                
                {layers.map((layer, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 group">
                    {/* Icon Node */}
                    <div className="w-12 h-12 rounded-xl bg-surface border border-border-token flex items-center justify-center shrink-0 z-10 shadow-xs group-hover:border-accent/50 group-hover:shadow-accent/10 transition-all duration-300">
                      <div className="text-accent group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        {layer.icon}
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="flex-grow glass-panel p-5 rounded-2xl border border-border-token/40 hover:border-accent/40 transition-all duration-300 flex flex-col sm:flex-row justify-between gap-4">
                      <div className="space-y-1.5 sm:max-w-[65%]">
                        <span className="text-xs font-mono font-bold text-accent tracking-wider block">
                          {layer.num} {layer.name}
                        </span>
                        <p className="text-xs md:text-sm text-text-body leading-relaxed">
                          {layer.desc}
                        </p>
                      </div>
                      <div className="border-t sm:border-t-0 sm:border-l border-border-token/20 pt-2.5 sm:pt-0 sm:pl-4 shrink-0 flex flex-col justify-center">
                        <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-1.5">
                          {layer.techs.map((t, i) => (
                            <li key={i} className="text-xs text-text-muted flex items-center gap-1.5 font-mono font-medium">
                              <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Skills Overview & Tech Stack Rows */}
          <div className="lg:col-span-7 space-y-8">
            {/* Skills Overview */}
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-text-muted block">
                Skills Overview
              </span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {overviewSkills.map((skill, idx) => (
                  <ScrollReveal key={skill.name} direction="right" delay={idx * 0.05}>
                    <div className="glass-panel p-5 rounded-xl flex flex-col justify-between h-full hover:border-accent/40 transition-all duration-300">
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between text-accent">
                          <div className="p-2 bg-accent-dim rounded-lg flex items-center justify-center">
                            {skill.icon}
                          </div>
                          <span className="text-sm font-mono font-bold">{skill.percent}%</span>
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xs md:text-sm font-bold text-text-heading leading-tight">{skill.name}</h4>
                          <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">{skill.desc}</p>
                        </div>
                      </div>
                      <div className="w-full h-1.5 bg-border-token/20 rounded-full overflow-hidden mt-4">
                        <div 
                          className="h-full bg-accent rounded-full transition-all duration-500" 
                          style={{ width: `${skill.percent}%` }}
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Technology Stack Categorized Rows */}
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-text-muted block">
                Technology Stack
              </span>
              <div className="space-y-3.5">
                {techCategories.map((cat, idx) => (
                  <ScrollReveal key={cat.label} direction="right" delay={idx * 0.05}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl bg-bg-alt/40 border border-border-token/30 hover:bg-surface-2 transition-all duration-300">
                      <div className="flex items-center gap-2.5 w-full sm:w-[180px] shrink-0 text-text-heading font-semibold text-xs md:text-sm">
                        <span className="text-accent">{cat.icon}</span>
                        <span>{cat.label}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.techs.map((t) => (
                          <span key={t} className="inline-flex items-center gap-1.5 bg-bg border border-border-token/40 px-2.5 py-1.5 rounded-lg text-text-body hover:border-accent/40 hover:text-accent transition-colors group/tech">
                            <span className="text-accent/70 group-hover/tech:text-accent transition-colors shrink-0">{genericTechIcon(t, 14)}</span>
                            <span className="text-[10px] md:text-xs font-mono font-medium">{t}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4.5. Centered Artistic Quote Section */}
      <section className="relative w-full overflow-hidden py-8 md:py-12 border-b border-border-token/20">
        {/* Soft glowing background radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent-dim)_0%,transparent_60%)] pointer-events-none opacity-50" />
        
        <div className="max-w-[1360px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <ScrollReveal direction="up">
            <div className="relative max-w-5xl mx-auto text-center py-2">
              <blockquote className="space-y-4 relative z-10">
                <p className="text-2xl md:text-4xl lg:text-[46px] font-display font-medium italic text-text-heading leading-snug tracking-tight">
                  “Nothing in this world can take the place of persistence.”
                </p>
                <cite className="block text-xs md:text-sm font-mono tracking-widest uppercase text-accent not-italic mt-2">
                  — Calvin Coolidge
                </cite>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Personal Life Section */}
      <section className="relative w-full max-w-[1360px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28 2xl:py-32 border-t border-border-token/40 overflow-hidden">
        <div className="absolute right-[12%] top-24 w-[420px] h-[420px] rounded-full bg-accent/10 blur-[140px] pointer-events-none" />
        
        <div className="relative space-y-12">
          {/* Compact heading */}
          <ScrollReveal direction="up">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-4">
                <Heart size={18} className="text-accent" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent font-mono">Journal</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-text-heading leading-[0.95] tracking-tight">
                Life Outside <br />
                <span className="italic font-normal text-accent">of Code</span>
              </h2>
              <p className="text-base md:text-lg text-text-body mt-5 leading-relaxed max-w-lg">
                The quieter side of my work: travel, family, discipline, and the people who keep the journey grounded.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Cards on the Same Line */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {[
                { src: '/assets/images/personal/youth_korea.jpg', alt: 'Travel — Seoul, Korea', label: 'Travel', objectPosition: 'center' },
                { src: '/assets/images/personal/family_all_1.jpg', alt: 'Family roots', label: 'Family', objectPosition: 'center 12%' },
                { src: '/assets/images/personal/hobby_gym.jpg', alt: 'Gym discipline', label: 'Discipline', objectPosition: 'center' },
                { src: '/assets/images/personal/friend_group_2.jpg', alt: 'Friends and memories', label: 'Memories', objectPosition: 'center' },
              ].map((photo, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-border-token/25 shadow-lg cursor-default"
                >
                  {/* Image */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover grayscale-[25%] saturate-[0.9] group-hover:grayscale-0 group-hover:saturate-100 group-hover:scale-110 transition-all duration-[1200ms] ease-out"
                    style={{ objectPosition: photo.objectPosition }}
                  />
                  {/* Dark overlay — lightens on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent group-hover:from-bg/40 group-hover:via-transparent group-hover:to-bg/30 transition-all duration-700 pointer-events-none" />
                  {/* Inner ring */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none rounded-2xl" />
                  {/* Corner label */}
                  <div className="absolute bottom-4 left-5">
                    <span className="text-lg md:text-xl font-display font-bold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] group-hover:text-accent transition-colors duration-500">
                      {photo.label}
                    </span>
                    <div className="w-0 group-hover:w-1/2 h-[1.5px] bg-accent mt-1 transition-all duration-500 ease-out rounded-full" />
                  </div>
                  {/* Accent glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{
                    background: 'radial-gradient(ellipse at bottom left, rgba(16,185,129,0.12) 0%, transparent 60%)',
                  }} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Contact & Correspondence Section */}
      <section className="relative w-full max-w-[1360px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-20 md:py-28 2xl:py-32 border-t border-border-token/20 overflow-hidden bg-bg">
        <div className="absolute left-[5%] top-1/4 w-[380px] h-[380px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
        <div className="absolute right-[5%] bottom-1/4 w-[420px] h-[420px] rounded-full bg-accent/10 blur-[130px] pointer-events-none" />

        <div className="relative space-y-16">
          
          {/* Header */}
          <ScrollReveal direction="up">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-text-muted">06</span>
                <span className="w-1.5 h-[1.5px] bg-accent/40 rounded-full" />
                <span className="text-xs uppercase font-mono tracking-[0.25em] text-accent font-semibold">Contact &amp; Availability</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-text-heading leading-[0.95] tracking-tight">
                Let's build <br />
                <span className="italic font-normal text-accent">something good.</span>
              </h2>
              <p className="text-base md:text-lg text-text-body mt-6 leading-relaxed max-w-2xl">
                Open to collaborations, machine learning research, and building end-to-end intelligent systems. Let's work together to bring smart ideas to deployment. Reply within 24h.
              </p>
            </div>
          </ScrollReveal>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Card: Send a Note */}
            <ScrollReveal direction="left" className="lg:col-span-7 h-full flex">
              <div className="glass-panel p-6 md:p-8 rounded-2xl border border-border-token/40 space-y-8 flex flex-col justify-between w-full">
                
                {/* Panel Header */}
                <div className="flex items-center justify-between border-b border-border-token/10 pb-4">
                  <span className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-text-heading font-bold">¶ Send a Note</span>
                  <span className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-text-muted">Direct Submission</span>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSendEmail} className="space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="form-name" className="block text-xs md:text-sm font-mono uppercase tracking-wider text-text-muted">Name</label>
                        <input
                          id="form-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Bennedict Quan Ton"
                          className="w-full px-4 py-3.5 rounded-xl bg-surface-2/40 border border-border-token/25 text-text-heading placeholder-text-muted/40 text-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="form-email" className="block text-xs md:text-sm font-mono uppercase tracking-wider text-text-muted">Email Address</label>
                        <input
                          id="form-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tonlongquanvn@gmail.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-surface-2/40 border border-border-token/25 text-text-heading placeholder-text-muted/40 text-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                        />
                      </div>

                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="form-message" className="block text-xs md:text-sm font-mono uppercase tracking-wider text-text-muted">Note</label>
                      <textarea
                        id="form-message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about the project, research idea, or what you'd want us working on."
                        className="w-full px-4 py-3.5 rounded-xl bg-surface-2/40 border border-border-token/25 text-text-heading placeholder-text-muted/40 text-base focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none flex-grow"
                      />
                    </div>

                    {submitFeedback && (
                      <p className="text-xs text-red-500 font-mono">{submitFeedback}</p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border-token/10 mt-6">
                    <button
                      type="submit"
                      className="px-6 py-3.5 rounded-full bg-accent hover:bg-accent-bright text-bg font-semibold text-sm flex items-center gap-2 shadow-lg shadow-accent/15 hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Send Message <ArrowUpRight size={14} />
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-5 py-3.5 rounded-full border border-border-token/30 text-text-heading hover:bg-surface-2 text-sm flex items-center gap-2 font-medium transition-all duration-300"
                    >
                      {copied ? (
                        <>
                          <Check size={14} className="text-accent" /> Copied Email
                        </>
                      ) : (
                        <>
                          <Copy size={14} /> Copy Email
                        </>
                      )}
                    </button>
                  </div>

                </form>

              </div>
            </ScrollReveal>

            {/* Right Card: Correspondence */}
            <ScrollReveal direction="right" className="lg:col-span-5 h-full flex">
              <div className="glass-panel p-6 md:p-8 rounded-2xl border border-border-token/40 space-y-8 flex flex-col justify-between w-full">
                
                <div className="space-y-6">
                  {/* Panel Header */}
                  <div className="flex items-center justify-between border-b border-border-token/10 pb-4">
                    <span className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-text-heading font-bold">¶ Correspondence</span>
                    <span className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-text-muted">Four Channels</span>
                  </div>

                  {/* Communication Channels list */}
                  <div className="space-y-6">
                    
                    {/* Email */}
                    <div className="group/channel flex items-center justify-between py-2 border-b border-border-token/10">
                      <div className="space-y-1">
                        <span className="block text-xs md:text-sm font-mono uppercase tracking-widest text-text-muted">Email</span>
                        <a href="mailto:tonlongquanvn@gmail.com" className="block text-base md:text-lg font-semibold text-text-heading hover:text-accent transition-colors">
                          tonlongquanvn@gmail.com
                        </a>
                      </div>
                      <a href="mailto:tonlongquanvn@gmail.com" className="p-2 rounded-full hover:bg-surface-2 text-text-muted group-hover/channel:text-accent transition-all">
                        <ArrowUpRight size={16} />
                      </a>
                    </div>

                    {/* LinkedIn */}
                    <div className="group/channel flex items-center justify-between py-2 border-b border-border-token/10">
                      <div className="space-y-1">
                        <span className="block text-xs md:text-sm font-mono uppercase tracking-widest text-text-muted">LinkedIn</span>
                        <a href="https://linkedin.com/in/bennedictquanton" target="_blank" rel="noopener noreferrer" className="block text-base md:text-lg font-semibold text-text-heading hover:text-accent transition-colors">
                          linkedin.com/in/bennedictquanton
                        </a>
                      </div>
                      <a href="https://linkedin.com/in/bennedictquanton" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-surface-2 text-text-muted group-hover/channel:text-accent transition-all">
                        <ArrowUpRight size={16} />
                      </a>
                    </div>

                    {/* GitHub */}
                    <div className="group/channel flex items-center justify-between py-2 border-b border-border-token/10">
                      <div className="space-y-1">
                        <span className="block text-xs md:text-sm font-mono uppercase tracking-widest text-text-muted">GitHub</span>
                        <a href="https://github.com/BennedictQuanTon" target="_blank" rel="noopener noreferrer" className="block text-base md:text-lg font-semibold text-text-heading hover:text-accent transition-colors">
                          github.com/BennedictQuanTon
                        </a>
                      </div>
                      <a href="https://github.com/BennedictQuanTon" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-surface-2 text-text-muted group-hover/channel:text-accent transition-all">
                        <ArrowUpRight size={16} />
                      </a>
                    </div>

                    {/* Location */}
                    <div className="group/channel flex items-center justify-between py-2 border-b border-border-token/10">
                      <div className="space-y-1">
                        <span className="block text-xs md:text-sm font-mono uppercase tracking-widest text-text-muted">Located</span>
                        <span className="block text-base md:text-lg font-semibold text-text-heading">
                          Ho Chi Minh City, VN
                        </span>
                      </div>
                      <span className="text-xs md:text-sm font-mono text-text-muted flex items-center gap-1.5">
                        <MapPin size={12} className="text-accent" /> 10.8231° N, 106.6297° E
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
