import React from 'react';

export const TechStack3D: React.FC = () => {
  return (
    <div className="relative w-full max-w-[500px] aspect-[4/3] mx-auto flex items-center justify-center select-none overflow-visible">
      {/* Dynamic Glow Background */}
      <div className="absolute inset-0 bg-accent/5 rounded-full blur-[90px] pointer-events-none" />

      {/* SVG Canvas for 3D Layers and Connecting Lines */}
      <svg
        viewBox="0 0 500 400"
        className="w-full h-full overflow-visible drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Definitions for gradients, filters, and patterns */}
        <defs>
          <linearGradient id="layer-grad-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="layer-grad-2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="layer-grad-3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0E7490" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="layer-grad-4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.6" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="glow-purple" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-blue" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-green" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ==================== CENTRAL COLUMN VERTICAL FLOW ==================== */}
        {/* Core backbone linking the centers of each level */}
        <line x1="250" y1="330" x2="250" y2="120" stroke="var(--border-token)" strokeWidth="2" opacity="0.3" />
        {/* Central pulse lines flow upwards */}
        <line 
          x1="250" y1="330" x2="250" y2="120" 
          stroke="url(#layer-grad-4)" 
          strokeWidth="2" 
          strokeDasharray="8 12" 
          className="flow-up" 
        />

        {/* ==================== CONNECTING FLOW LINES ==================== */}
        {/* Left Side Connector Lines (Data Stream Flow) */}
        <path d="M 135 330 L 210 330" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4 4" className="flow-in" opacity="0.8" />
        <path d="M 135 260 L 220 260" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" className="flow-in" opacity="0.8" />
        <path d="M 135 190 L 230 190" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="4 4" className="flow-in" opacity="0.8" />
        <path d="M 135 120 L 240 120" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" className="flow-in" opacity="0.8" />

        {/* Right Side Connector Lines */}
        <path d="M 260 120 L 365 120" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" className="flow-out" opacity="0.8" />
        <path d="M 270 190 L 365 190" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="4 4" className="flow-out" opacity="0.8" />
        <path d="M 280 260 L 365 260" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" className="flow-out" opacity="0.8" />
        <path d="M 290 330 L 365 330" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4 4" className="flow-out" opacity="0.8" />

        {/* ==================== ISOMETRIC LAYERS (Holographic Stack) ==================== */}
        
        {/* LAYER 1: Purple (Data Collection & Integration) */}
        <g className="animate-[float-layer-1_5s_ease-in-out_infinite]">
          {/* Main Rhombus Plane */}
          <path
            d="M 250 290 L 330 330 L 250 370 L 170 330 Z"
            fill="url(#layer-grad-1)"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            className="hover:stroke-[#A78BFA] transition-all duration-300 cursor-pointer"
          />
          {/* Inner mesh lines */}
          <path d="M 210 310 L 290 350 M 210 350 L 290 310" stroke="#8B5CF6" strokeWidth="0.5" opacity="0.4" />
          {/* Nodes */}
          <circle cx="210" cy="330" r="5" fill="#A78BFA" filter="url(#glow-purple)" />
          <circle cx="290" cy="330" r="5" fill="#A78BFA" filter="url(#glow-purple)" />
          {/* Pulsing Outer Rings */}
          <circle cx="210" cy="330" r="9" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" className="animate-ping" style={{ animationDuration: '3s' }} />
        </g>

        {/* LAYER 2: Blue (Data Processing & Optimization) */}
        <g className="animate-[float-layer-2_5s_ease-in-out_infinite]">
          {/* Main Rhombus Plane */}
          <path
            d="M 250 220 L 330 260 L 250 300 L 170 260 Z"
            fill="url(#layer-grad-2)"
            stroke="#3B82F6"
            strokeWidth="1.5"
            className="hover:stroke-[#60A5FA] transition-all duration-300 cursor-pointer"
          />
          {/* Inner mesh lines */}
          <path d="M 210 240 L 290 280 M 210 280 L 290 240" stroke="#3B82F6" strokeWidth="0.5" opacity="0.4" />
          {/* Nodes */}
          <circle cx="220" cy="260" r="5" fill="#60A5FA" filter="url(#glow-blue)" />
          <circle cx="280" cy="260" r="5" fill="#60A5FA" filter="url(#glow-blue)" />
          {/* Pulsing Outer Rings */}
          <circle cx="220" cy="260" r="9" stroke="#3B82F6" strokeWidth="1" opacity="0.5" className="animate-ping" style={{ animationDuration: '3.5s' }} />
        </g>

        {/* LAYER 3: Cyan (Modeling & Evaluation) */}
        <g className="animate-[float-layer-3_5s_ease-in-out_infinite]">
          {/* Main Rhombus Plane */}
          <path
            d="M 250 150 L 330 190 L 250 230 L 170 190 Z"
            fill="url(#layer-grad-3)"
            stroke="#06B6D4"
            strokeWidth="1.5"
            className="hover:stroke-[#22D3EE] transition-all duration-300 cursor-pointer"
          />
          {/* Inner mesh lines */}
          <path d="M 210 170 L 290 210 M 210 210 L 290 170" stroke="#06B6D4" strokeWidth="0.5" opacity="0.4" />
          {/* Nodes */}
          <circle cx="230" cy="190" r="5" fill="#22D3EE" filter="url(#glow-cyan)" />
          <circle cx="270" cy="190" r="5" fill="#22D3EE" filter="url(#glow-cyan)" />
          {/* Pulsing Outer Rings */}
          <circle cx="230" cy="190" r="9" stroke="#06B6D4" strokeWidth="1" opacity="0.5" className="animate-ping" style={{ animationDuration: '4s' }} />
        </g>

        {/* LAYER 4: Emerald (Deployment & Monitoring) */}
        <g className="animate-[float-layer-4_5s_ease-in-out_infinite]">
          {/* Main Rhombus Plane */}
          <path
            d="M 250 80 L 330 120 L 250 160 L 170 120 Z"
            fill="url(#layer-grad-4)"
            stroke="#10B981"
            strokeWidth="1.5"
            className="hover:stroke-[#34D399] transition-all duration-300 cursor-pointer"
          />
          {/* Inner mesh lines */}
          <path d="M 210 100 L 290 140 M 210 140 L 290 100" stroke="#10B981" strokeWidth="0.5" opacity="0.4" />
          {/* Nodes */}
          <circle cx="240" cy="120" r="5" fill="#34D399" filter="url(#glow-green)" />
          <circle cx="260" cy="120" r="5" fill="#34D399" filter="url(#glow-green)" />
          {/* Pulsing Outer Rings */}
          <circle cx="240" cy="120" r="9" stroke="#10B981" strokeWidth="1" opacity="0.5" className="animate-ping" style={{ animationDuration: '4.5s' }} />
        </g>

        {/* ==================== PREMIUM GLOWING LABELS ==================== */}
        
        {/* Left Side Glass Badges */}
        <g className="left-labels">
          {/* Data Collection */}
          <rect x="20" y="318" width="115" height="24" rx="12" fill="var(--glass-bg)" stroke="#8B5CF6" strokeWidth="1.2" className="shadow-sm" />
          <text x="32" y="333" fill="var(--text-heading)" fontSize="9" fontWeight="bold" fontFamily="monospace">Data Collection</text>
          
          {/* Data Processing */}
          <rect x="20" y="248" width="115" height="24" rx="12" fill="var(--glass-bg)" stroke="#3B82F6" strokeWidth="1.2" className="shadow-sm" />
          <text x="32" y="263" fill="var(--text-heading)" fontSize="9" fontWeight="bold" fontFamily="monospace">Data Processing</text>
          
          {/* Modeling */}
          <rect x="35" y="178" width="100" height="24" rx="12" fill="var(--glass-bg)" stroke="#06B6D4" strokeWidth="1.2" className="shadow-sm" />
          <text x="47" y="193" fill="var(--text-heading)" fontSize="9" fontWeight="bold" fontFamily="monospace">AI Modeling</text>
          
          {/* Evaluation */}
          <rect x="35" y="108" width="100" height="24" rx="12" fill="var(--glass-bg)" stroke="#10B981" strokeWidth="1.2" className="shadow-sm" />
          <text x="47" y="123" fill="var(--text-heading)" fontSize="9" fontWeight="bold" fontFamily="monospace">AI Evaluation</text>
        </g>

        {/* Right Side Glass Badges */}
        <g className="right-labels">
          {/* Deployment */}
          <rect x="365" y="108" width="100" height="24" rx="12" fill="var(--glass-bg)" stroke="#10B981" strokeWidth="1.2" className="shadow-sm" />
          <text x="377" y="123" fill="var(--text-heading)" fontSize="9" fontWeight="bold" fontFamily="monospace">Deployment</text>

          {/* Monitoring */}
          <rect x="365" y="178" width="100" height="24" rx="12" fill="var(--glass-bg)" stroke="#06B6D4" strokeWidth="1.2" className="shadow-sm" />
          <text x="377" y="193" fill="var(--text-heading)" fontSize="9" fontWeight="bold" fontFamily="monospace">Monitoring</text>

          {/* Visualization */}
          <rect x="365" y="248" width="115" height="24" rx="12" fill="var(--glass-bg)" stroke="#3B82F6" strokeWidth="1.2" className="shadow-sm" />
          <text x="377" y="263" fill="var(--text-heading)" fontSize="9" fontWeight="bold" fontFamily="monospace">Visualization</text>

          {/* Optimization */}
          <rect x="365" y="318" width="115" height="24" rx="12" fill="var(--glass-bg)" stroke="#8B5CF6" strokeWidth="1.2" className="shadow-sm" />
          <text x="377" y="333" fill="var(--text-heading)" fontSize="9" fontWeight="bold" fontFamily="monospace">Optimization</text>
        </g>
      </svg>

      {/* Floating Keyframe Animations in pure CSS */}
      <style>{`
        /* Central flow upwards */
        @keyframes flow-up {
          to { stroke-dashoffset: -20; }
        }
        .flow-up {
          animation: flow-up 1.5s linear infinite;
        }

        /* Side connectors animation */
        @keyframes flow-in-anim {
          to { stroke-dashoffset: -8; }
        }
        .flow-in {
          animation: flow-in-anim 1s linear infinite;
        }
        
        @keyframes flow-out-anim {
          to { stroke-dashoffset: 8; }
        }
        .flow-out {
          animation: flow-out-anim 1s linear infinite;
        }

        /* 3D Float Heights */
        @keyframes float-layer-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes float-layer-2 {
          0%, 100% { transform: translateY(-4px); }
          50% { transform: translateY(-11px); }
        }
        @keyframes float-layer-3 {
          0%, 100% { transform: translateY(-8px); }
          50% { transform: translateY(-17px); }
        }
        @keyframes float-layer-4 {
          0%, 100% { transform: translateY(-12px); }
          50% { transform: translateY(-23px); }
        }
      `}</style>
    </div>
  );
};
