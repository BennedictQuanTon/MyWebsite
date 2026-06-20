export interface TimelineStep {
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Personal Project' | 'Competition';
  period: string;
  role: string;
  summary: string;
  problem: string;
  process: TimelineStep[];
  techStack: string[];
  outcomes: string[];
  images: string[];
  hoverMedia: {
    type: 'image' | 'video';
    src: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  status: 'active' | 'placeholder';
}

export const projects: Project[] = [
  {
    id: 'weatherise',
    title: 'Weatherise',
    category: 'Competition',
    period: 'June 2, 2026 – June 12, 2026',
    role: 'Project Lead & AI Developer',
    summary: 'An enterprise-focused AI system utilizing specialized multi-agents to analyze weather-related risks for tourism, construction, and agriculture sectors, powered by an 8x H200 GPU cluster.',
    problem: 'Sectors like agriculture, construction, and tourism suffer huge financial losses due to unpredictable weather risks. Traditional systems do not translate raw meteorological data into sector-specific, actionable operational decisions.',
    process: [
      {
        date: 'June 2, 2026',
        title: 'Project Kickoff & Architecture',
        description: 'Designed the multi-agent orchestration architecture separating Weather Watcher, Weather Agent, and Notification Agent. Formulated spatial database schema using PostGIS.',
        image: '/assets/images/weatherise/sys_arch.jpg'
      },
      {
        date: 'June 5, 2026',
        title: 'Model Deployment on H200 GPU Cluster',
        description: 'Engineered containerized AI pipelines leveraging Qwen 2.5-27B via vLLM and NVIDIA Nemotron 3 120B NIM on an 8x H200 GPU cluster for high-throughput reasoning.',
        image: '/assets/images/weatherise/team.jpg'
      },
      {
        date: 'June 9, 2026',
        title: 'Real-Time Interface & Streaming API',
        description: 'Developed Next.js PWA with WebSocket streaming to deliver instant risk assessment reports and show real-time agent communications feed.',
        image: '/assets/images/weatherise/ui_2.jpg'
      },
      {
        date: 'June 12, 2026',
        title: 'Hackathon Final Pitch',
        description: 'Presented Weatherise at the Vietnam AI Open Hackathon (NVIDIA/Viettel/Sovico), securing a spot in the Top 10 Finalists.',
        image: '/assets/images/weatherise/team_2.jpg'
      }
    ],
    techStack: ['LangChain', 'vLLM', 'NVIDIA NIM', 'FastAPI', 'PostgreSQL', 'PostGIS', 'Qdrant', 'Next.js', 'WebSockets', 'Docker'],
    outcomes: [
      'Successfully advanced to the Top 10 Finalists in the prestigious Vietnam AI Open Hackathon.',
      'Deployed local LLM pipelines (vLLM & NIM) serving complex queries under 2 seconds on H200 clusters.',
      'Designed real-time WebSocket communication tracking and multi-agent system synchronization.'
    ],
    images: [
      '/assets/images/portrait/Myself_Best_Potrait.png', // Old home portrait added to Weatherise
      '/assets/images/weatherise/sys_arch.jpg',
      '/assets/images/weatherise/ui_2.jpg',
      '/assets/images/weatherise/team.jpg',
      '/assets/images/weatherise/team_2.jpg',
      '/assets/images/weatherise/travel.jpg',
      '/assets/images/weatherise/log.jpg',
      '/assets/images/weatherise/pre.png'
    ],
    hoverMedia: {
      type: 'video',
      src: '/assets/videos/weatherise_demo.mp4'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/Weatherise',
    status: 'active'
  },
  {
    id: 'bkai-admissions',
    title: 'BKAi Admissions System',
    category: 'Personal Project',
    period: 'Jan 2026 – Apr 2026',
    role: 'Full-Stack AI Developer',
    summary: 'A 100% local LangGraph admissions chatbot using hybrid vector/lexical retrieval, cross-encoder reranking, and semantic caching to support local voice interfaces.',
    problem: 'University admission offices are flooded with repetitive queries. Standard AI chatbots suffer from hallucinations on complex, official university admission guidelines and have slow response times.',
    process: [
      {
        date: 'Jan 2026',
        title: 'Local LLM Setup & LangGraph Workflows',
        description: 'Deployed Qwen 2.5-7B locally using Ollama. Structured the chatbot conversation flow using LangGraph with a self-reflection loop to evaluate retrieved context.',
        image: '/assets/images/bkai/chat_ui.png'
      },
      {
        date: 'Feb 2026',
        title: 'Hybrid Search & Retrieval Optimization',
        description: 'Fused Vector Search (ChromaDB) and BM25 Lexical Search via Reciprocal Rank Fusion (RRF). Integrated a Cross-Encoder reranker to prioritize documents.',
        image: '/assets/images/bkai/dashboard_monitoring.png'
      },
      {
        date: 'March 2026',
        title: 'Semantic Caching & Voice UI',
        description: 'Implemented a Redis-backed semantic cache with Sentence-Transformers to slash repeat query latency. Integrated local faster-whisper and edge-tts for voice queries.',
        image: '/assets/images/bkai/chat_response.png'
      }
    ],
    techStack: ['LangGraph', 'Ollama', 'Qwen 2.5-7B', 'ChromaDB', 'Redis', 'FastAPI', 'BM25', 'Sentence-Transformers', 'Faster-Whisper', 'Edge-TTS'],
    outcomes: [
      'Completely eliminated LLM hallucinations, ensuring 100% grounded accuracy on official admissions guidelines.',
      'Slashed response latency by 99% (from ~90s to <0.1s) for cached admissions queries.',
      'Supported 15 concurrent local users by optimizing GPU memory footprint and batching client requests.'
    ],
    images: [
      '/assets/images/bkai/chat_ui.png',
      '/assets/images/bkai/chat_response.png',
      '/assets/images/bkai/dashboard_monitoring.png',
      '/assets/images/bkai/voice_ui.png'
    ],
    hoverMedia: {
      type: 'video',
      src: '/assets/videos/bkai_demo.mp4'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/BKAi-Admissions',
    status: 'active'
  },
  {
    id: 'morphysics',
    title: 'Morphysics',
    category: 'Competition',
    period: 'March 2026 – Present',
    role: 'Project Lead & Frontend Developer',
    summary: 'An interactive virtual physics laboratory featuring a 2D physics engine, 60 FPS telemetry dashboard, and real-time AI assistant for classroom experiments.',
    problem: 'High school students struggle to visualize abstract physics formulas. Traditional labs are expensive or lack real-time telemetry data to explain mechanical forces dynamically.',
    process: [
      {
        date: 'March 2026',
        title: 'Interactive 2D Physics Engine',
        description: 'Integrated Matter.js with React 19 to render real-time mechanics (collisions, gravity) and enabled drag-and-drop experiment configuration.',
        image: '/assets/images/morphysics/Experience_Morphysics_BKI_UI.jpg'
      },
      {
        date: 'April 2026',
        title: 'Telemetry Dashboard & AI Integration',
        description: 'Engineered a 60 FPS dashboard using requestAnimationFrame for live property monitoring. Wired an AI assistant to guide students through experiment setups.',
        image: '/assets/images/morphysics/Experience_Morphysics_BKI_Team.jpg'
      }
    ],
    techStack: ['React', 'TypeScript', 'Matter.js', 'FastAPI', 'Gemini API', 'requestAnimationFrame', 'Glassmorphism UI', 'Vite'],
    outcomes: [
      'Delivered a highly interactive 60 FPS dashboard tracking physical telemetry with negligible CPU load.',
      'Built a rich library of 20 physics experiments adhering to standard high school curriculum.',
      'Successfully pitching the prototype at Bach Khoa Innovation 2026 (BKI).'
    ],
    images: [
      '/assets/images/morphysics/Experience_Morphysics_BKI_UI.jpg',
      '/assets/images/morphysics/Experience_Morphysics_BKI_Team.jpg'
    ],
    hoverMedia: {
      type: 'video',
      src: '/assets/videos/morphysics_demo.mp4'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/Morphysics',
    status: 'active'
  },
  {
    id: 'vinuni-datathon',
    title: 'VinUni Datathon: The GridBreakers',
    category: 'Competition',
    period: 'Apr 18, 2026 – May 11, 2026',
    role: 'Data Analyst',
    summary: 'A multidimensional e-commerce analytical project that structured a decade-long (2012–2022) transactional database to derive operational business strategies.',
    problem: 'A massive simulated fashion retailer dataset was fragmented across 15 CSV files and multiple database layers, making it hard to extract actionable patterns in promotions and inventory.',
    process: [
      {
        date: 'April 2026',
        title: 'Data Cleaning & Multi-Layer Joins',
        description: 'Engineered pipelines in Jupyter Notebooks using Pandas/NumPy to align 15 transaction, customer, and marketing logs spanning 10 years.'
      },
      {
        date: 'May 2026',
        title: 'Exploratory Data Analysis & Strategy',
        description: 'Conducted rigorous visual EDA using Seaborn/Matplotlib. Modeled correlation matrices between discounts, customer retention, and inventory turnovers.'
      }
    ],
    techStack: ['Python', 'Pandas', 'NumPy', 'Jupyter Notebook', 'Matplotlib', 'Seaborn', 'Analytical Modeling'],
    outcomes: [
      'Successfully structured and synthesized 10 years of multi-layered transactional database rows into a singular analytical core.',
      'Discovered key retention trends linking seasonal promotion fatigue to dropping customer lifetime value.',
      'Presented core operational recommendations directly solving retailer inventory challenges.'
    ],
    images: [], // Missing - uses placeholder frame
    hoverMedia: {
      type: 'image',
      src: '/assets/images/portrait/Myself_potrait.jpg' // fallback card image
    },
    status: 'placeholder'
  },
  {
    id: 'yourai',
    title: 'YourAI',
    category: 'Personal Project',
    period: 'Feb 2026 – Present',
    role: 'Full-Stack AI Developer',
    summary: 'A monorepo academic management platform with natural language DB commands, real-time dual-scale GPA engine, and asynchronous email pipelines.',
    problem: 'Academic portals are often fragmented, offering no unified dashboard for GPA tracking across different international standards, and lack interactive AI capabilities to let students query academic data in plain text.',
    process: [
      {
        date: 'Feb 2026',
        title: 'Database Security & Monorepo Init',
        description: 'Initialized monorepo with FastAPI and React (Vite). Established Row Level Security (RLS) on Supabase PostgreSQL for strict multi-tenant student data isolation.',
        image: '/assets/images/yourai/logo.jpg'
      },
      {
        date: 'March 2026',
        title: 'AI Agent & Function Calling Integration',
        description: 'Integrated Gemini 1.5 Flash via Function Calling to parse natural language requests into SQL statements. Implemented Regex Fallback Parser for high-reliability failovers.'
      },
      {
        date: 'April 2026',
        title: 'GPA Conversion & Async Engine',
        description: 'Developed a dual-scale GPA calculation engine (converting VN 10-point to AU 7-point scales) and wired asynchronous task queues using Redis and Resend SMTP.'
      }
    ],
    techStack: ['React', 'FastAPI', 'Gemini 1.5 Flash', 'Supabase', 'PostgreSQL RLS', 'Redis', 'ARQ', 'Resend SMTP', 'asyncpg', 'Vite'],
    outcomes: [
      'Achieved a Google Lighthouse performance score of >90/100 through optimized PWA code-splitting and asset compression.',
      'Reduced database querying latency to <1.2s using Gemini 1.5 Function Calling.',
      'Ensured 99.9% uptime by building a reliable Regex Fallback Parser for query outages.',
      'Boosted background email dispatching concurrency by 300% via async Redis queues.'
    ],
    images: [
      '/assets/images/yourai/logo.jpg'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/yourai/logo.jpg'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/YourAI',
    status: 'active'
  }
];
