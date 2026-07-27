import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'weatherise',
    title: 'Weatherise',
    category: 'Competition',
    period: 'June 2, 2026 – June 12, 2026',
    role: 'Project Lead & AI Developer',
    summary: 'A weather-driven multi-agent decision system across Tourism, Construction & Agriculture, optimized on an 8x NVIDIA H200 GPU cluster with live MCP Server gateway & RAG Knowledge Layer.',
    problem: 'Sectors like agriculture, construction, and tourism suffer huge financial losses due to unpredictable weather risks. Traditional systems do not translate raw meteorological data into sector-specific, actionable operational decisions.',
    process: [
      {
        date: 'June 2, 2026',
        title: 'Multi-Agent System Architecture',
        description: 'Designed multi-agent decision system architecture across 3 domains (Tourism, Construction & Agriculture) using LangGraph, NeMo Agent Toolkit, Pydantic v2, and NeMo Guardrails.',
        image: '/assets/images/weatherise/sys_arch.jpg'
      },
      {
        date: 'June 5, 2026',
        title: 'Live External API MCP Server',
        description: 'Engineered a unified MCP Server gateway consolidating 7+ live external APIs into a single tool-call interface using Python, FastAPI, and Redis 7, cutting integration complexity by ~60%.',
        image: '/assets/images/weatherise/team.jpg'
      },
      {
        date: 'June 9, 2026',
        title: 'RAG Knowledge Layer on H200 GPU Cluster',
        description: 'Built and seeded a 4-collection RAG Knowledge Layer ingesting 500+ domain records with ~2s retrieval using nv-embedqa-e5-v5 NIM, Qdrant, and PostgreSQL 16 on an 8x NVIDIA H200 GPU cluster.',
        image: '/assets/images/weatherise/ui_2.jpg'
      },
      {
        date: 'June 12, 2026',
        title: 'Hackathon Final Pitch',
        description: 'Presented Weatherise at the Vietnam AI Open Hackathon (NVIDIA/Viettel/Sovico), securing a spot in the Top 10 Finalists.',
        image: '/assets/images/weatherise/team_2.jpg'
      }
    ],
    techStack: ['LangGraph', 'NeMo Toolkit', 'NVIDIA NIM', 'FastAPI', 'Python', 'Redis', 'Qdrant', 'PostgreSQL', 'NeMo Guardrails', 'MCP'],
    outcomes: [
      'Advanced to Top 10 Finalists in the prestigious Vietnam AI Open Hackathon (NVIDIA/Viettel/Sovico).',
      'Engineered a unified MCP Server gateway consolidating 7+ live external APIs into a single tool-call interface, cutting integration complexity by ~60%.',
      'Built a 4-collection RAG Knowledge Layer ingesting 500+ domain records with ~2s retrieval to ground every NIM reasoning call, optimized on an 8x NVIDIA H200 GPU cluster.'
    ],
    images: [
      '/assets/images/weatherise/cover.png',
      '/assets/images/weatherise/sys_arch.jpg',
      '/assets/images/weatherise/ui_2.jpg',
      '/assets/images/weatherise/team.jpg',
      '/assets/images/weatherise/team_2.jpg',
      '/assets/images/weatherise/travel.jpg',
      '/assets/images/weatherise/log.jpg'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/weatherise/cover.png'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/Weatherise',
    status: 'active',
    competitionName: 'Vietnam AI Open Hackathon',
    organizer: 'NVIDIA / Viettel / Sovico',
    organizerLogo: '/assets/images/companies/weatherise_org.jpg',
    organizerLogos: [
      '/assets/images/companies/nvidia_logo.png',
      '/assets/images/companies/viettel_logo.svg',
      '/assets/images/companies/sovico_logo.png'
    ]
  },
  {
    id: 'amd-token-agent',
    title: 'Token-Efficient Agent',
    category: 'Competition',
    period: 'July 6, 2026 – July 13, 2026',
    role: 'AI Developer',
    summary: 'A 4-layer hybrid agent router cutting API token usage by 85% and limiting latency to 505.1 ms using Python, asyncio, local Qwen-3B, and remote Fireworks APIs.',
    problem: 'High API token consumption and slow response latencies in LLM agents lead to prohibitive costs and poor user experience for complex reasoning and QA tasks.',
    process: [
      {
        date: 'July 6, 2026',
        title: '4-Layer Hybrid Router Setup',
        description: 'Established a 4-layer hybrid agent router cutting API token usage by 85% and limiting latency to 505.1 ms using Python and asyncio via local Qwen-3B and remote Fireworks APIs.'
      },
      {
        date: 'July 9, 2026',
        title: 'Math Reasoning Pipeline',
        description: 'Designed a math reasoning pipeline achieving 95%+ accuracy across 200+ test cases at max 768 tokens per task using Python AST parsing and Fireworks APIs (Kimi/Minimax) with regex extraction.'
      },
      {
        date: 'July 13, 2026',
        title: 'Local-First QA & Summarization Engine',
        description: 'Engineered local-first QA and summarization logic achieving 89% factual and 97% summary accuracy (100 test cases each) using Qwen-3B via llama-cpp-python with Metal GPU acceleration.'
      }
    ],
    techStack: ['Python', 'asyncio', 'Qwen-3B', 'Fireworks API', 'llama-cpp-python', 'Metal GPU', 'AST Parsing', 'Regex'],
    outcomes: [
      'Established a 4-layer hybrid agent router cutting API token usage by 85% and limiting latency to 505.1 ms.',
      'Designed a math reasoning pipeline achieving 95%+ accuracy across 200+ test cases at max 768 tokens per task.',
      'Engineered local-first QA and summarization logic achieving 89% factual and 97% summary accuracy using Qwen-3B via llama-cpp-python with Metal GPU acceleration.'
    ],
    images: [
      '/assets/images/amd-token-agent/cover.png'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/amd-token-agent/cover.png'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/Token-Efficient-Agent',
    status: 'active',
    competitionName: 'AMD Developer Hackathon ACT II',
    organizer: 'AMD'
  },
  {
    id: 'bkai-admissions',
    title: 'BKAi Admissions System',
    category: 'Personal Project',
    period: 'Jan 2026 – Apr 2026',
    role: 'Full-Stack AI Developer',
    summary: 'A multi-hop Agentic RAG admissions system with LangGraph, Gemini 3.1 Flash-Lite, hybrid search (ChromaDB + BM25 + BGE reranker), Redis semantic cache, and LiveKit + Deepgram voice.',
    problem: 'University admission offices are flooded with repetitive queries. Standard AI chatbots suffer from hallucinations on complex guidelines and lack low-latency semantic caching and natural Vietnamese voice interfaces.',
    process: [
      {
        date: 'Jan 2026',
        title: 'Multi-Hop Agentic RAG Workflows',
        description: 'Raised grounded accuracy to ~87% end-to-end on an internal 120-item golden set by shipping multi-hop Agentic RAG with LangGraph, Gemini 3.1 Flash-Lite, hybrid retrieval (ChromaDB + BM25 + BGE reranker), and Pydantic validation.',
        image: '/assets/images/bkai/chat_ui.png'
      },
      {
        date: 'Feb 2026',
        title: 'Redis Semantic Cache Optimization',
        description: 'Cut repeat-query latency by ~99% from ~6.1s cold pipeline to ~0.04-0.05s cache hits using Redis semantic cache (cosine >= 0.92, 30d TTL) with MiniLM embeddings.',
        image: '/assets/images/bkai/dashboard_monitoring.png'
      },
      {
        date: 'March 2026',
        title: 'Vietnamese Voice & Docker Privacy',
        description: 'Delivered multi-turn counseling and Vietnamese voice at ~94% coreference success using LiveKit + Deepgram speech recognition and edge-tts synthesis, keeping ~115 documents (~150 semantic chunks) inside Docker volumes on-prem.',
        image: '/assets/images/bkai/chat_response.png'
      }
    ],
    techStack: ['LangGraph', 'Gemini 3.1', 'ChromaDB', 'BM25', 'BGE Reranker', 'Redis', 'LiveKit', 'Deepgram', 'Edge-TTS', 'Docker', 'FastAPI'],
    outcomes: [
      'Raised grounded accuracy to ~87% end-to-end on internal 120-item golden set via multi-hop Agentic RAG with LangGraph, Gemini 3.1 Flash-Lite, ChromaDB + BM25 + BGE reranker.',
      'Cut repeat-query latency by ~99% from ~6.1s avg cold pipeline to ~0.04-0.05s cache hits via Redis semantic cache (cosine >= 0.92, 30d TTL) with MiniLM embeddings.',
      'Delivered multi-turn counseling & Vietnamese voice at ~94% coreference success using LiveKit + Deepgram & edge-tts neural synthesis.',
      'Secured data privacy by locally hosting ~115 source documents inside Docker volumes with zero third-party document egress.'
    ],
    images: [
      '/assets/images/bkai/cover.jpg',
      '/assets/images/bkai/chat_ui.png',
      '/assets/images/bkai/chat_response.png',
      '/assets/images/bkai/dashboard_monitoring.png',
      '/assets/images/bkai/voice_ui.png'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/bkai/cover.jpg'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/BKAi-Admissions',
    status: 'active'
  },
  {
    id: 'morphysics',
    title: 'Morphysics',
    category: 'Competition',
    period: 'Mar 2026 – Present',
    role: 'Project Lead & Frontend Developer',
    summary: 'An interactive 2D physics virtual lab built with React 19 and Matter.js, featuring a 60 FPS Glassmorphism Telemetry Dashboard and multimodal AI assistant executing simulations under 3s.',
    problem: 'High school students struggle to visualize abstract physics formulas. Traditional labs are expensive or lack real-time telemetry data to explain mechanical forces dynamically.',
    process: [
      {
        date: 'March 2026',
        title: 'Interactive 2D Physics Engine',
        description: 'Architected React 19/TypeScript virtual lab integrating Matter.js to render real-time 2D physics mechanics (collisions, gravity) with drag-and-drop experiment configuration.',
        image: '/assets/images/morphysics/Experience_Morphysics_BKI_UI.jpg'
      },
      {
        date: 'April 2026',
        title: 'Telemetry Dashboard & Multimodal AI',
        description: 'Engineered a 60 FPS Glassmorphism Telemetry Dashboard via requestAnimationFrame to monitor live physical properties with minimal CPU/GPU overhead. Implemented multimodal AI UI executing API simulations in <3s.',
        image: '/assets/images/morphysics/Experience_Morphysics_BKI_Team.jpg'
      }
    ],
    techStack: ['React 19', 'TypeScript', 'Matter.js', 'requestAnimationFrame', 'FastAPI', 'Gemini API', 'Glassmorphism UI', 'Vite'],
    outcomes: [
      'Architected a React 19/TypeScript virtual lab integrating Matter.js to render real-time mechanics with drag-and-drop.',
      'Engineered a 60 FPS Glassmorphism Telemetry Dashboard via requestAnimationFrame to monitor live physical properties with minimal CPU/GPU overhead.',
      'Implemented multimodal AI UI executing API-driven simulations in <3s, leading BKI pitch and building a modular 20-experiment library.'
    ],
    images: [
      '/assets/images/morphysics/Experience_Morphysics_BKI_UI.jpg',
      '/assets/images/morphysics/Experience_Morphysics_BKI_Team.jpg'
    ],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/morphysics/Experience_Morphysics_BKI_UI.jpg'
    },
    githubUrl: 'https://github.com/BennedictQuanTon/Morphysics',
    status: 'active',
    competitionName: 'Bach Khoa Innovation 2026',
    organizer: 'HCMUT',
    organizerLogo: '/assets/images/companies/bk.png'
  },
  {
    id: 'vinuni-datathon',
    title: 'Team Datdy',
    category: 'Competition',
    period: 'Apr 18, 2026 – May 11, 2026',
    role: 'Data Analyst',
    summary: 'A multidimensional e-commerce analytical project structuring a decade-long (2012–2022) transactional database across 15 CSV files with advanced EDA and business strategy.',
    problem: 'A massive simulated fashion retailer dataset was fragmented across 15 CSV files and multiple database layers (Master, Transaction, Analytical, Operational), making it hard to extract actionable patterns in promotions and inventory.',
    process: [
      {
        date: 'April 2026',
        title: 'Complex Data Processing & Structuring',
        description: 'Engineered robust data pipelines in Jupyter Notebooks utilizing Pandas and NumPy to clean and integrate a decade-long (2012–2022) e-commerce dataset across 15 CSV files.'
      },
      {
        date: 'May 2026',
        title: 'Advanced EDA & Business Strategy',
        description: 'Leveraged Matplotlib and Seaborn for EDA, transforming multidimensional data into clear visualizations to reveal key trends in inventory, promotions, and web traffic.'
      }
    ],
    techStack: ['Python', 'Pandas', 'NumPy', 'Jupyter Notebook', 'Matplotlib', 'Seaborn', 'Analytical Modeling'],
    outcomes: [
      'Engineered data pipelines in Jupyter Notebooks using Pandas/NumPy to clean and integrate a decade-long (2012–2022) e-commerce dataset across 15 CSV files in Master, Transaction, Analytical, and Operational layers.',
      'Leveraged Matplotlib & Seaborn for comprehensive EDA, transforming multidimensional data into clear visualizations revealing inventory & web traffic trends.',
      'Partnered with HCMUT team to translate technical insights into actionable operational strategies, directly solving core business challenges for a fashion retailer.'
    ],
    images: ['/assets/images/datathon/Datathon_Logo.jpg'],
    hoverMedia: {
      type: 'image',
      src: '/assets/images/datathon/Datathon_Logo.jpg',
      objectPosition: 'center top'
    },
    status: 'active',
    competitionName: 'VinUni Datathon 2026',
    organizer: 'VinUni',
    organizerLogo: '/assets/images/companies/vinuni_logo.png'
  },
  {
    id: 'yourai',
    title: 'YourAI',
    category: 'Personal Project',
    period: 'Feb 2026 – Present',
    role: 'Full-Stack AI Developer',
    summary: 'A Monorepo PWA academic management platform with natural language DB commands (Gemini 1.5 Flash), real-time dual-scale GPA engine, and Supabase RLS security.',
    problem: 'Academic portals are often fragmented, offering no unified dashboard for GPA tracking across different international standards, and lack interactive AI capabilities to let students query academic data in plain text.',
    process: [
      {
        date: 'Feb 2026',
        title: 'Enterprise PWA Architecture',
        description: 'Architected a Monorepo academic management platform using FastAPI and React (Vite) as a PWA, achieving >90/100 Google Lighthouse score for instant load times.',
        image: '/assets/images/yourai/logo.jpg'
      },
      {
        date: 'March 2026',
        title: 'AI Agent & NLP Function Calling',
        description: 'Integrated Gemini 1.5 Flash via Function Calling to translate natural language into SQL database commands with <1.2s latency, backed by Regex Fallback Parser for 99.9% system availability.'
      },
      {
        date: 'April 2026',
        title: 'Dual-Scale GPA Engine & Async Queues',
        description: 'Built a real-time GPA engine converting Vietnamese (10-point) to Australian (7-point) scales. Implemented async queues via ARQ, Redis, and Resend SMTP boosting backend concurrency by 300%.'
      }
    ],
    techStack: ['React', 'FastAPI', 'Gemini 1.5 Flash', 'Supabase', 'PostgreSQL RLS', 'Redis', 'ARQ', 'Resend SMTP', 'asyncpg', 'Vite'],
    outcomes: [
      'Architected Monorepo academic platform using FastAPI and React (Vite) achieving >90/100 Google Lighthouse score.',
      'Integrated Gemini 1.5 Flash via Function Calling translating natural language into DB commands with <1.2s latency and 99.9% availability via Regex Fallback Parser.',
      'Built dual-scale GPA engine (VN 10-point to AU 7-point) and async email queues via ARQ/Redis/Resend SMTP boosting concurrency by 300%.',
      'Enforced zero-trust security via Supabase PostgreSQL Row Level Security (RLS) and secure 60s OTP flow with bcrypt hashing.'
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
