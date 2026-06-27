import type { Passion } from '../types';

export const SHOW_PERSONAL_PHOTOS = false;

export const passions: Passion[] = [
  {
    id: 'ai-agents',
    title: 'Agentic Workflows',
    description: 'Designing autonomous multi-agent networks using LangGraph, LangChain, and Ollama that reflect on their reasoning and cross-validate output.',
    icon: 'Bot'
  },
  {
    id: 'hpc-compute',
    title: 'High-Performance Systems',
    description: 'Deploying heavy deep learning models on GPU clusters using vLLM engines and Redis semantic caching to scale performance.',
    icon: 'Cpu'
  },
  {
    id: 'fullstack-ux',
    title: 'Interactive Interfaces',
    description: 'Building snappy user experiences using Vite/React, Framer Motion, and 2D physics engines like Matter.js to visualize telemetry.',
    icon: 'Layers'
  },
  {
    id: 'spatial-data',
    title: 'Spatial Intelligence',
    description: 'Architecting fast geospatial query layers using PostgreSQL/PostGIS, Redis caching, and Qdrant vector retrieval pipelines.',
    icon: 'Compass'
  }
];

export const philosophy = {
  quote: "Intelligent systems should bridge abstract algorithms and real-world impact.",
  paragraph1: "I am an undergraduate student in Artificial Intelligence at UTS and HCMUT with a passion for designing agentic systems. My experience ranges from training local RAG pipelines to configuring high-throughput multi-agent systems powered by H200 clusters.",
  paragraph2: "I specialize in backend engineering (FastAPI, Redis, PostgreSQL), data annotation, and creating interactive telemetry frontends. I believe in clean code, secure data boundaries, and performance first."
};
