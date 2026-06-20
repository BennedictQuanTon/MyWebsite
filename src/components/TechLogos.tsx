import React from 'react';

interface TechIconProps {
  className?: string;
  size?: number;
}

// Custom inline SVG icons for Bennedict's tech stack
export const ReactIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="8" fill="currentColor" />
    <ellipse cx="50" cy="50" rx="40" ry="15" stroke="currentColor" strokeWidth="4" transform="rotate(30 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="15" stroke="currentColor" strokeWidth="4" transform="rotate(90 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="15" stroke="currentColor" strokeWidth="4" transform="rotate(150 50 50)" />
  </svg>
);

export const PythonIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.966 0c-2.316 0-3.328.188-4.526.54-2.128.625-2.617 1.83-2.617 4.195v1.272h7.323v1.02H4.823c-2.378 0-4.103.54-4.664 2.658-.625 2.366-.54 3.738 0 6.079.49 2.115 1.947 2.637 4.325 2.637h1.492v-2.029c0-2.366.862-4.526 4.316-4.526h4.315c2.316 0 4.104-1.393 4.104-3.738V4.316c0-2.316-1.572-3.87-4.104-4.156C13.568.04 12.83 0 11.966 0zm-3.818 1.488a.936.936 0 1 1 0 1.872.936.936 0 0 1 0-1.872zm11.029 4.341v2.028c0 2.366-.862 4.526-4.316 4.526h-4.315c-2.316 0-4.104 1.393-4.104 3.738v3.743c0 2.316 1.572 3.87 4.104 4.156 1.033.118 1.77.158 2.634.158 2.316 0 3.328-.188 4.526-.54 2.128-.625 2.617-1.83 2.617-4.195v-1.272H13.12v-1.02h7.323c2.378 0 4.103-.54 4.664-2.658.625-2.366.54-3.738 0-6.079-.49-2.115-1.947-2.637-4.325-2.637h-1.492zM15.82 20.64a.936.936 0 1 1 0 1.872.936.936 0 0 1 0-1.872z" />
  </svg>
);

export const FastapiIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.822 9.544l-4.57 7.643a.584.584 0 0 1-1.037.039l-2.036-3.395a.584.584 0 0 0-.965-.052l-2.909 3.878a.584.584 0 0 1-.951-.689l3.527-5.834a.584.584 0 0 1 1.037-.039l1.984 3.308a.584.584 0 0 0 .965.052l3.053-4.062a.584.584 0 0 1 .907.091l.995 1.553z" />
  </svg>
);

export const NextjsIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.195 18.062l-6.398-8.156v6.394H8.438V7.59h1.36l6.234 8.016V7.59h1.359v10.472h-1.196z" />
  </svg>
);

export const TypescriptIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0V0zm22.484 22.25v-2.029h-1.636c-.469 0-.756-.255-.756-.703v-4.992c0-.448.287-.703.756-.703h1.636v-2.029h-5.267v2.029h1.492c.469 0 .756.255.756.703v4.992c0 .448-.287.703-.756.703h-1.492v2.029h5.267zm-7.64 0c1.782 0 3.011-.99 3.011-2.602 0-2.316-2.586-2.585-2.586-3.55 0-.495.39-.778 1.053-.778.683 0 1.258.281 1.705.815l1.41-1.385c-.886-.99-2.024-1.458-3.328-1.458-1.748 0-2.842 1.042-2.842 2.551 0 2.235 2.585 2.502 2.585 3.568 0 .546-.469.846-1.139.846-.867 0-1.572-.416-2.062-1.092l-1.388 1.28c.94 1.222 2.228 1.805 3.581 1.805z" />
  </svg>
);

export const DockerIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM11.266 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM11.266 8.361h2.119c.102 0 .186-.084.186-.186V6.056c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM8.577 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H8.577c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM8.577 8.361h2.119c.102 0 .186-.084.186-.186V6.056c0-.102-.084-.186-.186-.186H8.577c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM5.888 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H5.888c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM3.172 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H3.172c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM11.266 5.644h2.119c.102 0 .186-.084.186-.186V3.34c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM23.766 12.368c-.144-.415-.551-.695-.992-.695h-2.61v-2.119c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119h-5.466V5.644h2.119c.102 0 .186-.084.186-.186V3.34c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119h-1.637V11.218c.034 5.212-3.805 6.008-3.805 6.008.102.017.203.034.305.034 2.153 0 4.144-.958 5.483-2.585 1.348 1.627 3.339 2.585 5.492 2.585 2.144 0 4.135-.958 5.483-2.585 1.339 1.627 3.33 2.585 5.483 2.585.508 0 .992-.093 1.441-.271 1.483-.585 2.178-2.169 1.83-3.958-.339-1.288-.932-2.186-1.576-2.652z" />
  </svg>
);

export const PostgresqlIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.111 12.353c-.31.396-1.374 1.109-1.849 1.258a4.912 4.912 0 0 1-1.353.21c-.482 0-.792-.085-1.237-.306-.576-.288-.864-.813-.864-1.564 0-.712.274-1.255.824-1.625.394-.265.864-.396 1.411-.396h1.22v-.23c0-.495-.297-.743-.889-.743-.591 0-.962.248-.962.743h-2.112c0-1.485 1.056-2.475 3.074-2.475 2.019 0 3.001.99 3.001 2.475v4.186c0 .484.288.726.864.726h.222v1.65H18.7c-.576 0-.864-.289-.864-.867v-.474l-.725.43z" />
  </svg>
);

export const RedisIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L1.13 6.25v11.5L12 24l10.87-6.25v-11.5L12 0zm0 3.61L18.87 7.5l-2.74 1.58L12 6.78 7.87 9.08l-2.74-1.58L12 3.61zm-7.61 5.92l2.74 1.58V16.8l-2.74-1.58V9.53zm8.74 10.86L6.26 16.8l2.74-1.58 4.13 2.3v3.74v-1.87zm1.13.06v-3.74l4.13-2.3 2.74 1.58-6.87 3.96v.5zm6.48-4.65v-5.69l2.74-1.58v5.69l-2.74 1.58z" />
  </svg>
);

export const SupabaseIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.36 10.158l-8.91 5.15a1.2 1.2 0 0 1-1.748-1.042V9.116a1.2 1.2 0 0 0-1.748-1.042l-6.31 3.65A1.2 1.2 0 0 0 2.04 12.83l8.91-5.15a1.2 1.2 0 0 1 1.748 1.042v5.15a1.2 1.2 0 0 0 1.748 1.042l6.31-3.65a1.2 1.2 0 0 0 .604-1.106z" />
  </svg>
);

export const LangchainIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
  </svg>
);

export const LanggraphIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="18" r="3" fill="currentColor" />
    <circle cx="18" cy="6" r="3" fill="currentColor" />
    <circle cx="18" cy="18" r="3" fill="currentColor" />
    <path d="M8.5 16.5l7-7M18 9v6M9 18h6" />
  </svg>
);

export const NvidiaIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17c-2.3 0-4.2-1.5-4.8-3.5h9.3c-.5 2-2.3 3.5-4.5 3.5zM7.2 12c0-2.3 1.5-4.2 3.5-4.8v9.3c-2-.5-3.5-2.3-3.5-4.5zm8.3-4.8c2 .5 3.5 2.3 3.5 4.5 0 2.3-1.5 4.2-3.5 4.8V7.2z" />
  </svg>
);

export const genericTechIcon = (name: string, size: number = 24, className?: string) => {
  const normalized = name.toLowerCase().replace(/[\s\.\-\:]/g, '');
  const finalClass = className || "w-6 h-6 transition-colors fill-current";

  switch (normalized) {
    case 'react':
    case 'reactjs':
      return <ReactIcon size={size} className={finalClass} />;
    case 'python':
      return <PythonIcon size={size} className={finalClass} />;
    case 'fastapi':
      return <FastapiIcon size={size} className={finalClass} />;
    case 'nextjs':
    case 'next':
      return <NextjsIcon size={size} className={finalClass} />;
    case 'typescript':
    case 'ts':
      return <TypescriptIcon size={size} className={finalClass} />;
    case 'docker':
      return <DockerIcon size={size} className={finalClass} />;
    case 'postgresql':
    case 'postgres':
    case 'postgis':
      return <PostgresqlIcon size={size} className={finalClass} />;
    case 'redis':
      return <RedisIcon size={size} className={finalClass} />;
    case 'supabase':
      return <SupabaseIcon size={size} className={finalClass} />;
    case 'langchain':
      return <LangchainIcon size={size} className={finalClass} />;
    case 'langgraph':
      return <LanggraphIcon size={size} className={finalClass} />;
    case 'nvidia':
    case 'nvidianim':
    case 'nim':
      return <NvidiaIcon size={size} className={finalClass} />;
    default:
      // Fallback: A nice generic chip/tech node icon
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={finalClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      );
  }
};
