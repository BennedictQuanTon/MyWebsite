export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  url?: string;
}

export const certs: Certificate[] = [
  {
    id: 'langchain-agents',
    title: 'Functions, Tools and Agents with LangChain',
    issuer: 'DeepLearning.AI',
    date: 'Feb 2026',
    url: 'https://www.deeplearning.ai/'
  },
  {
    id: 'langgraph-agents',
    title: 'AI Agents in LangGraph',
    issuer: 'DeepLearning.AI',
    date: 'Jan 2026',
    url: 'https://www.deeplearning.ai/'
  },
  {
    id: 'llamaindex-rag',
    title: 'Building Agentic RAG with LlamaIndex',
    issuer: 'DeepLearning.AI',
    date: 'Jan 2026',
    url: 'https://www.deeplearning.ai/'
  },
  {
    id: 'ielts-7',
    title: 'IELTS Academic 7.0',
    issuer: 'British Council',
    date: 'Dec 2025',
    url: 'https://www.britishcouncil.org/'
  },
  {
    id: 'kaggle-intro-ml',
    title: 'Intro to Machine Learning',
    issuer: 'Kaggle',
    date: 'Dec 2025',
    image: '/assets/images/certificates/Certificate_IntroToML.png'
  }
];
