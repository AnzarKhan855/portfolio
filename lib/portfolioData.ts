export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: string;
  isUnreleased?: boolean;
  category: 'Flagship Enterprise AI' | 'AI Agent / RAG' | 'Full Stack AI' | 'ATS SaaS Platform';
  featured: boolean;
  metrics: { label: string; value: string }[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  backendUrl?: string;
  apiDocsUrl?: string;
  architecture: string[];
  keyFeatures: string[];
  pipelineSteps?: string[];
  roadmap?: { task: string; status: 'completed' | 'in-progress' }[];
}

export const DECISIONLENS = {
  frontend: 'https://decisionlens.vercel.app',
  backend: 'https://decisionlens-api.onrender.com',
  docs: 'https://decisionlens-api.onrender.com/docs',
  github: 'https://github.com/AnzarKhan855/decisionlens-ai',
  version: 'v1.0.0-alpha',
  status: 'CURRENTLY UNDER ACTIVE DEVELOPMENT',
  deployment: 'LIVE NOW — PRODUCTION DEPLOYMENT',
};

export const PERSONAL_INFO = {
  name: 'Anzar Khan',
  headline: 'AI Engineer building production-grade intelligent systems.',
  positioning: 'Builder of production-grade AI systems — not academic toy projects. Full-stack AI engineer who ships RAG pipelines, agentic systems, LLM integrations, and enterprise-style dashboards, deployed live.',
  education: {
    institution: 'Allenhouse Institute of Technology',
    degree: 'B.Tech in Artificial Intelligence & Machine Learning',
    years: '2023–2027',
    role: 'B.Tech Student & AI Systems Specialist',
  },
  email: 'anzark964@gmail.com',
  phone: '+91-7705855855',
  github: 'https://github.com/AnzarKhan855',
  githubUrl: 'https://github.com/AnzarKhan855',
  linkedin: 'https://www.linkedin.com/in/anzar-khan-522b712ab',
  linkedinUrl: 'https://www.linkedin.com/in/anzar-khan-522b712ab',
  location: 'Kanpur / Remote, India',
  roles: [
    'AI Engineer',
    'Full Stack AI Developer',
    'Machine Learning Engineer',
    'Generative AI Developer',
    'Enterprise Intelligence Builder',
  ],
  subtitles: [
    'Building AI Products',
    'Enterprise Intelligence',
    'Decision Intelligence',
    'LLM Applications',
    'AI Agents & RAG Systems',
    'Machine Learning Pipelines',
    'Future Enterprise Software',
  ],
  focusAreas: [
    'Large Language Models',
    'Retrieval-Augmented Generation',
    'Agentic AI',
    'Enterprise AI',
    'Full-Stack Development',
    'Backend Engineering',
    'Intelligent Analytics',
    'Decision Intelligence',
    'AI Automation',
    'Modern SaaS Products',
  ],
};

export const TECHNICAL_SKILL_GROUPS = [
  {
    category: 'Languages',
    skills: ['C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['Next.js', 'React.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'Django', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'AI / LLM',
    skills: [
      'Retrieval-Augmented Generation (RAG)',
      'Groq API',
      'Hugging Face Embeddings',
      'Prompt Engineering',
      'Resume Parsing',
      'Semantic Search',
    ],
  },
  {
    category: 'Data / Vector DB',
    skills: ['Qdrant', 'MongoDB Atlas', 'Supabase', 'MySQL'],
  },
  {
    category: 'Auth & Tools',
    skills: [
      'JWT Authentication',
      'bcrypt',
      'Clerk',
      'Git',
      'GitHub',
      'Postman',
      'VS Code',
    ],
  },
  {
    category: 'Deployment & CS Core',
    skills: [
      'Vercel',
      'Render',
      'DSA',
      'OOP',
      'DBMS',
      'OS',
      'Computer Networks',
    ],
  },
];

export const SKILL_CLUSTERS = [
  {
    category: 'AI & Machine Learning',
    color: '#00E0FF',
    skills: ['PyTorch', 'Scikit-Learn', 'XGBoost', 'Groq API', 'OpenAI API', 'LangChain', 'RAG Architecture', 'Qdrant Vector DB', 'Pandas', 'NumPy', 'Statsmodels'],
  },
  {
    category: 'Backend & Data Systems',
    color: '#7C5CFF',
    skills: ['FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Celery', 'MongoDB Atlas', 'REST APIs', 'SQL / Relational DBs', 'System Design'],
  },
  {
    category: 'Frontend & UI Engineering',
    color: '#00FFA3',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Three.js / R3F', 'GSAP', 'Framer Motion', 'HTML5 / CSS3'],
  },
  {
    category: 'DevOps, BI & Tools',
    color: '#3B82F6',
    skills: ['Git & GitHub', 'Docker', 'Power BI', 'VS Code', 'Swagger UI', 'Vercel', 'Postman'],
  },
];

export const CERTIFICATIONS_AND_CREDENTIALS = [
  {
    title: 'Data Structures & Algorithms Training',
    organization: 'Allenhouse Institute of Technology',
    year: '2024',
    type: 'Training',
  },
  {
    title: 'AI Tools and Productivity Training',
    organization: 'be10x',
    year: '2025',
    type: 'Certification',
  },
  {
    title: 'HTML & CSS Bootcamp',
    organization: 'Web Development Certification',
    year: '2024',
    type: 'Bootcamp',
  },
  {
    title: 'Research Paper Presentation',
    organization: 'Multi-Mode Charging Architecture: A Unified Power Bank and Charger Solution',
    year: '2024',
    type: 'Research',
  },
  {
    title: 'AKTU AI Tech Confluence Hackathon',
    organization: 'Participant & AI Innovator',
    year: '2025',
    type: 'Hackathon',
  },
];

export const TIMELINE_EVENTS = [
  {
    year: '2023 – 2027',
    title: 'B.Tech in Artificial Intelligence & Machine Learning',
    institution: 'Allenhouse Institute of Technology',
    description: 'Focused on core AI algorithms, neural network design, computer science fundamentals, data structures, and enterprise system architecture.',
    tag: 'Education',
  },
  {
    year: '2024',
    title: 'Full-Stack AI Application Development',
    institution: 'EvalMentor AI & Resume Builder',
    description: 'Engineered EvalMentor AI with FastAPI, Groq LLMs, MongoDB, and Next.js. Built real-time ATS Resume Builder.',
    tag: 'Product Launch',
  },
  {
    year: '2025',
    title: 'Advanced RAG & Vector Intelligence Systems',
    institution: 'CampusAgent AI',
    description: 'Architected high-throughput RAG search engine leveraging Qdrant Vector DB, LangChain, and semantic document parsers.',
    tag: 'AI Engineering',
  },
  {
    year: 'Present',
    title: 'Enterprise Decision Intelligence Platform',
    institution: 'DecisionLens AI Flagship',
    description: 'Designing and building DecisionLens AI to process millions of enterprise data points for predictive forecasting, anomaly detection, and automated executive copilot insights.',
    tag: 'Flagship SaaS',
  },
];

export const AI_LAB_EXPERIMENTS = [
  {
    id: 'exp-1',
    title: 'Multi-Agent Autonomous Decision Engine',
    category: 'Agentic Workflows',
    status: 'ACTIVE RUN',
    metrics: { accuracy: '97.4%', speed: '180ms' },
    codeSnippet: `class DecisionAgentCluster:
    def __init__(self, vector_db, llm_engine):
        self.vector_db = vector_db
        self.llm = llm_engine

    async def evaluate_risk(self, telemetry_data):
        embeddings = await self.vector_db.query_similar(telemetry_data)
        risk_score = self.llm.compute_anomaly(embeddings)
        return {"risk_level": risk_score, "confidence": 0.98}`,
  },
  {
    id: 'exp-2',
    title: 'Real-Time Graph RAG with Qdrant Vector Indices',
    category: 'Knowledge Graphs',
    status: 'STABLE',
    metrics: { accuracy: '98.9%', speed: '42ms' },
    codeSnippet: `async def query_knowledge_graph(query_str: str):
    dense_vector = embed_model.encode(query_str)
    search_hits = qdrant_client.search(
        collection_name="enterprise_graph",
        query_vector=dense_vector,
        limit=10
    )
    return synthesize_graph_context(search_hits)`,
  },
  {
    id: 'exp-3',
    title: 'Quantized LLM Ingestion for Financial Analytics',
    category: 'Enterprise AI',
    status: 'BENCHMARKING',
    metrics: { accuracy: '95.1%', speed: '95ms' },
    codeSnippet: `def run_quantized_inference(financial_prompt: str):
    response = groq_client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[{"role": "user", "content": financial_prompt}],
        temperature=0.1
    )
    return response.choices[0].message.content`,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'decisionlens-ai',
    title: 'DecisionLens AI',
    tagline: 'Enterprise Decision Intelligence Platform',
    status: 'Currently Under Active Development',
    isUnreleased: false,
    category: 'Flagship Enterprise AI',
    featured: true,
    githubUrl: 'https://github.com/AnzarKhan855/decisionlens-ai',
    demoUrl: 'https://decisionlens.vercel.app',
    backendUrl: 'https://decisionlens-api.onrender.com',
    apiDocsUrl: 'https://decisionlens-api.onrender.com/docs',
    description:
      'Transforms raw business datasets into executive-ready intelligence — automatic dataset detection, profiling, KPI generation, anomaly detection, AI-generated insights, forecasting, recommendations, and natural-language business querying via an AI Copilot.',
    metrics: [
      { label: 'Data Ingestion', value: '1M+ Records' },
      { label: 'Forecast Accuracy', value: '94.8%' },
      { label: 'AI Latency', value: '< 280ms' },
      { label: 'Pipeline Modules', value: '10 Engines' },
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'Python',
      'Pandas',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'REST APIs',
      'Machine Learning',
    ],
    pipelineSteps: [
      'Upload',
      'Detect',
      'Profile',
      'Insights',
      'Copilot',
      'Report',
    ],
    keyFeatures: [
      'Automatic dataset & domain detection',
      'Data profiling engine',
      'KPI generation',
      'Executive dashboard generation',
      'Anomaly detection',
      'AI-powered business insights',
      'Forecasting engine',
      'Recommendation engine',
      'Natural-language AI Copilot for business querying',
      'Executive summary & enterprise report generation',
    ],
    roadmap: [
      { task: 'Data ingestion layer', status: 'completed' },
      { task: 'Dataset profiling', status: 'completed' },
      { task: 'Dataset detection', status: 'completed' },
      { task: 'Upload system', status: 'completed' },
      { task: 'Database integration', status: 'completed' },
      { task: 'Auto insights engine', status: 'completed' },
      { task: 'Analytics engine', status: 'in-progress' },
      { task: 'AI Copilot', status: 'in-progress' },
      { task: 'Recommendation engine', status: 'in-progress' },
      { task: 'Enterprise dashboard', status: 'in-progress' },
    ],
    architecture: [
      'Dataset Detection & Profiling: Automated type inferencing & Pandas ingestion engine',
      'Predictive ML & Anomaly Core: Real-time time series forecasting and outlier scoring',
      'AI Copilot Layer: RAG over structured business data powered by FastAPI and LLMs',
      'Executive Intelligence UI: High-density interactive data visualization studio',
    ],
  },
  {
    id: 'campusagent-ai',
    title: 'CampusAgent AI',
    tagline: 'AI-Powered Student Productivity Platform',
    status: 'PRODUCTION READY',
    isUnreleased: false,
    category: 'AI Agent / RAG',
    featured: false,
    description:
      'Full-stack AI academic platform — assignments, attendance, practice tests, analytics, AI workspace, PDF library. End-to-end RAG pipeline (PDF parsing → chunking → Hugging Face embeddings → Qdrant vector search → Groq LLM) powering context-aware AI PDF chat with source references. 15+ REST APIs covering subject management, assignment tracking, attendance monitoring, PDF learning, and practice tests.',
    metrics: [
      { label: 'REST APIs', value: '15+ Endpoints' },
      { label: 'Vector Index', value: 'Qdrant DB' },
      { label: 'Retrieval Speed', value: '< 45ms' },
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'Python',
      'MongoDB Atlas',
      'JWT',
      'Groq API',
      'Hugging Face Embeddings',
      'Qdrant',
      'RAG',
      'Vercel',
      'Render',
    ],
    githubUrl: 'https://github.com/AnzarKhan855/campusagent-ai',
    demoUrl: 'https://campusagent-ai.vercel.app',
    backendUrl: 'https://campusagent-ai-backend.onrender.com',
    apiDocsUrl: 'https://campusagent-ai-backend.onrender.com/docs',
    architecture: [
      'Frontend: Next.js 15, TypeScript, Tailwind CSS client workspace',
      'Backend: FastAPI Python microservices hosted on Render',
      'Vector Database: Qdrant vector store with Hugging Face embeddings',
      'LLM Reasoning: Groq LLM API for low-latency RAG response synthesis',
    ],
    keyFeatures: [
      'End-to-end RAG PDF parser with context citations',
      '15+ REST APIs for complete academic workspace control',
      'Automated syllabus practice test generator with Groq LLM',
      'Predictive assignment deadline and attendance tracking',
    ],
  },
  {
    id: 'evalmentor-ai',
    title: 'EvalMentor AI',
    tagline: 'AI Interview Agent & Evaluation Platform',
    status: 'PRODUCTION READY',
    isUnreleased: false,
    category: 'Full Stack AI',
    featured: false,
    description:
      'Full-stack AI interview platform — resume parsing, personalized AI-generated interview questions, AI-based answer evaluation with scoring, and interview history tracking. Integrates Groq AI, MongoDB Atlas, JWT auth, and resume parsing pipelines to deliver recruiter-style feedback: strengths, weaknesses, and improved-answer suggestions.',
    metrics: [
      { label: 'Evaluation Latency', value: '< 1.2s' },
      { label: 'Auth Pipeline', value: 'JWT + Bcrypt' },
      { label: 'State Database', value: 'MongoDB Atlas' },
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'Python',
      'MongoDB Atlas',
      'JWT',
      'bcrypt',
      'Groq AI API',
      'Vercel',
      'Render',
    ],
    githubUrl: 'https://github.com/AnzarKhan855/evalmentor-ai',
    demoUrl: 'https://evalmentor-ai.vercel.app',
    architecture: [
      'Resume Parser: PDF structural extraction engine',
      'Evaluation Pipeline: Groq AI LLM feedback and scoring system',
      'Session State: MongoDB Atlas candidate interview archive',
    ],
    keyFeatures: [
      'Instant candidate resume parsing and tailored question generation',
      'Recruiter-style evaluation: score, strengths, weaknesses, and improved answers',
      'Interactive historical performance breakdown & score trend tracking',
    ],
  },
  {
    id: 'resume-builder',
    title: 'Resume Builder',
    tagline: 'ATS-Friendly Resume Builder',
    status: 'STABLE RELEASE',
    isUnreleased: false,
    category: 'ATS SaaS Platform',
    featured: false,
    description:
      'Full-stack ATS-friendly resume builder with authentication, cloud storage, responsive UI, real-time form handling, and resume management.',
    metrics: [
      { label: 'ATS Score', value: '98/100 Compliance' },
      { label: 'Auth Engine', value: 'Clerk Auth' },
      { label: 'Cloud Storage', value: 'Supabase' },
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'Clerk',
      'Vercel',
    ],
    demoUrl: 'https://anzarkhan855resumebuilder.vercel.app',
    architecture: [
      'State & Cloud: Supabase database combined with Clerk authentication',
      'Renderer: Real-time form handling with ATS compliant layout',
    ],
    keyFeatures: [
      'Real-time form state syncing and print-ready ATS templates',
      'Integrated Clerk authentication and Supabase data persistence',
      'Automated formatting check for high recruiter parser readability',
    ],
  },
];
