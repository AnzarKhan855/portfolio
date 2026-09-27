export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: string;
  isUnreleased?: boolean;
  category: string;
  badgeColor?: string;
  accentColor?: string;
  featured: boolean;
  problem?: string;
  solution?: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  backendUrl?: string;
  apiDocsUrl?: string;
  architecture: string[];
  architectureFlow?: { step: string; role: string; tech: string }[];
  keyFeatures: string[];
  engineeringChallenges?: string[];
  pipelineSteps?: string[];
  roadmap?: { task: string; status: 'completed' | 'in-progress' }[];
}

export const DECISIONLENS = {
  frontend: 'https://decisionlens-enterprise-analytics.vercel.app',
  backend: 'https://decisionlens-api.onrender.com',
  docs: 'https://decisionlens-api.onrender.com/docs',
  github: 'https://github.com/AnzarKhan855/decisionlens-enterprise-analytics',
  version: 'v1.0.0-alpha',
  status: 'CURRENTLY UNDER ACTIVE DEVELOPMENT',
  deployment: 'LIVE NOW — PRODUCTION DEPLOYMENT',
};

export const PERSONAL_INFO = {
  name: 'Anzar Khan',
  title: 'Full-Stack Developer | MERN Stack Developer | AI/ML Engineer',
  primaryRole: 'Full-Stack Developer • MERN Stack • AI/ML',
  headline: 'Building intelligent products at the intersection of full-stack engineering, AI, analytics, and automation.',
  valueProposition: 'I build complete products — from architecture and APIs to databases, AI systems, dashboards, deployment, and polished user interfaces.',
  positioning: 'Builder of complete production systems — not tutorial clones. Full-stack engineer who designs and ships scalable MERN and Next.js applications, high-performance FastAPI backends, RAG pipelines, intelligent analytics platforms, and polished 3D-enhanced interfaces.',
  education: {
    institution: 'Allenhouse Institute of Technology',
    degree: 'B.Tech in Artificial Intelligence & Machine Learning',
    years: '2023–2027',
    role: 'B.Tech Student & AI Systems Specialist',
  },
  email: 'anzark964@gmail.com',
  phone: '+91-7705855855',
  github: 'https://github.com/AnzarKhan855',
  githubUsername: 'AnzarKhan855',
  githubUrl: 'https://github.com/AnzarKhan855',
  linkedin: 'https://www.linkedin.com/in/anzar-khan-522b712ab',
  linkedinUrl: 'https://www.linkedin.com/in/anzar-khan-522b712ab',
  location: 'Kanpur / Remote, India',
  roles: [
    'Full-Stack Developer',
    'MERN Stack Developer',
    'AI / ML Engineer',
    'FastAPI & Python Specialist',
    'Enterprise Systems Architect',
  ],
  engineeringMetadata: [
    'FULL-STACK DEVELOPMENT',
    'MERN / NEXT.JS',
    'FASTAPI & PYTHON',
    'MONGODB & SQL',
    'AI AGENTS & RAG',
    'DATA ANALYTICS',
  ],
  focusAreas: [
    'Full-Stack Web Development',
    'MERN Stack Architecture',
    'Next.js & React 19 Ecosystem',
    'FastAPI Microservices',
    'Large Language Models & RAG',
    'Agentic Workflows',
    'Data Analytics & Forecasting',
    'Relational & Vector Databases',
    'REST APIs & System Design',
    'Cloud Deployment & CI/CD',
  ],
};

export const ENGINEERING_METRICS = [
  { label: 'Production Systems', value: '6', description: 'End-to-end built & deployed applications' },
  { label: 'REST API Endpoints', value: '30+', description: 'Secured with JWT, schemas & validation' },
  { label: 'Cloud Deployments', value: '5', description: 'Live on Vercel Edge & Render cloud' },
  { label: 'Data & AI Pipelines', value: '10+', description: 'RAG, XGBoost, SHAP, and analytics engines' },
  { label: 'Full-Stack Coverage', value: '100%', description: 'Frontend, backend, databases, AI & DevOps' },
];

export const VERIFIED_METRICS = ENGINEERING_METRICS;

export const TECHNICAL_SKILL_GROUPS = [
  {
    category: 'Frontend',
    iconName: 'Layers',
    skills: ['React 19', 'Next.js 15 (App Router)', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Three.js / React Three Fiber', 'Framer Motion'],
  },
  {
    category: 'Backend',
    iconName: 'Server',
    skills: ['Python 3.12+', 'FastAPI', 'Node.js', 'Express.js', 'RESTful API Architecture', 'JWT Authentication', 'Bcrypt Security', 'Microservices'],
  },
  {
    category: 'Database & Storage',
    iconName: 'Database',
    skills: ['MongoDB Atlas', 'PostgreSQL', 'SQL', 'Qdrant Vector DB', 'Supabase', 'Redis', 'Database Indexing & Normalization (3NF)'],
  },
  {
    category: 'AI / Machine Learning',
    iconName: 'Cpu',
    skills: ['Retrieval-Augmented Generation (RAG)', 'AI Agents & Tool Calling', 'Groq LLM API', 'OpenAI & Llama 3', 'Hugging Face Embeddings', 'Scikit-Learn', 'XGBoost', 'SHAP Explainability'],
  },
  {
    category: 'Data & Analytics',
    iconName: 'BarChart3',
    skills: ['Python Pandas', 'NumPy', 'Data Profiling & Ingestion', 'Statistical Time-Series Forecasting', 'KPI Generation', 'Power BI', 'Recharts & Data Visualization'],
  },
  {
    category: 'DevOps & Tooling',
    iconName: 'Wrench',
    skills: ['Git & GitHub', 'Docker Containerization', 'Vercel Deployment', 'Render Cloud', 'Postman API Testing', 'Playwright E2E', 'VS Code', 'Swagger / OpenAPI'],
  },
];

export const ENGINEERING_DNA = [
  {
    title: 'Frontend Engineering',
    tag: 'UI/UX & Performance',
    color: '#00E0FF',
    description: 'Developing high-performance, responsive web interfaces using Next.js 15, React 19, TypeScript, and Tailwind CSS. Focuses on sub-second load times, accessible ARIA hierarchies, and 60 FPS motion polish.',
    provenIn: 'DecisionLens, RiskShield AI, CampusAgent AI, Resume Builder',
  },
  {
    title: 'Backend Architecture',
    tag: 'High-Throughput APIs',
    color: '#7C5CFF',
    description: 'Engineering asynchronous microservices and API gateways using FastAPI and Node.js. Implements strict Pydantic schemas, dependency injection, rate limiting, and defensive error boundaries.',
    provenIn: 'RiskShield AI (17 endpoints), CampusAgent AI (15+ endpoints)',
  },
  {
    title: 'AI / ML Integration',
    tag: 'Production Intelligence',
    color: '#00FFA3',
    description: 'Deploying operational AI workflows: tree-based ensembles (XGBoost), model explainability (TreeSHAP), and high-throughput LLM synthesis via Groq and Llama 3 with sub-second latencies.',
    provenIn: 'RiskShield AI Fraud Engine, EvalMentor AI Scoring',
  },
  {
    title: 'RAG & Vector Search',
    tag: 'Semantic Retrieval',
    color: '#38BDF8',
    description: 'Designing end-to-end Retrieval-Augmented Generation pipelines using dense embedding models, chunking strategies, and Qdrant vector indexing for sub-50ms context retrieval.',
    provenIn: 'CampusAgent AI PDF Copilot, DecisionLens Business Copilot',
  },
  {
    title: 'Data & Business Intelligence',
    tag: 'Analytics & Profiling',
    color: '#F59E0B',
    description: 'Transforming millions of unstructured records into actionable executive metrics, anomaly detection flags, and statistical revenue forecasts using Pandas, SQL, and interactive Recharts.',
    provenIn: 'DecisionLens Analytics Studio, BookStore SQL Analytics',
  },
  {
    title: 'Database Architecture',
    tag: 'SQL & NoSQL Persistence',
    color: '#EC4899',
    description: 'Architecting hybrid persistence layers: PostgreSQL for relational ACID consistency and complex analytics; MongoDB Atlas for dynamic document hierarchies and agent state.',
    provenIn: 'RiskShield AI, CampusAgent AI, BookStore SQL Analysis',
  },
  {
    title: 'Security & Governance',
    tag: 'Zero-Trust Protocol',
    color: '#10B981',
    description: 'Implementing robust security postures: JWT cryptographic tokens, password hashing with bcrypt, input sanitization, honeypot spam traps, and PCI-DSS PAN masking compliance.',
    provenIn: 'Portfolio Contact API, RiskShield AI Governance',
  },
  {
    title: 'System Design & SDLC',
    tag: 'From Idea to Production',
    color: '#8B5CF6',
    description: 'Operating with Clean Architecture separation of concerns: domain entities, use-case interactors, repository adapters, and infrastructure isolation for maintainability and automated testability.',
    provenIn: 'RiskShield AI Clean Architecture, DecisionLens Modular Engine',
  },
];

export const BUILD_PIPELINE = [
  {
    step: '01',
    title: 'Understand & Scope',
    subtitle: 'Requirements & Constraints',
    description: 'Deconstruct domain problem, establish operational SLAs, isolate data schemas, and identify failure modes before writing a single line of code.',
    icon: 'Search',
  },
  {
    step: '02',
    title: 'Architect & Model',
    subtitle: 'System Design & Contracts',
    description: 'Define Clean Architecture boundaries, OpenAPI specifications, relational/NoSQL schemas, vector indexing topologies, and state machines.',
    icon: 'Layers',
  },
  {
    step: '03',
    title: 'Build Core',
    subtitle: 'Full-Stack Implementation',
    description: 'Implement frontend UI components in Next.js/React and high-throughput async endpoints in FastAPI/Node.js with strict type safety.',
    icon: 'Code2',
  },
  {
    step: '04',
    title: 'Integrate AI',
    subtitle: 'Models, RAG & Vector Mesh',
    description: 'Embed LLMs, construct semantic retrieval pipelines with Qdrant vector indices, train baseline ML estimators, and connect streaming telemetry.',
    icon: 'Cpu',
  },
  {
    step: '05',
    title: 'Test & Harden',
    subtitle: 'Security & Performance',
    description: 'Execute unit tests, API penetration scans, rate limit validation, P99 latency profiling, and Playwright end-to-end user simulations.',
    icon: 'ShieldCheck',
  },
  {
    step: '06',
    title: 'Deploy & Automate',
    subtitle: 'Cloud CI/CD & Containers',
    description: 'Package microservices with Docker, establish automated GitHub CI/CD, and deploy edge-rendered frontends to Vercel and backends to Render.',
    icon: 'Rocket',
  },
  {
    step: '07',
    title: 'Monitor & Iterate',
    subtitle: 'Telemetry & Feedback Loops',
    description: 'Track real-time latency health checks, audit logs, model drift metrics, and user feedback to iteratively refine product performance.',
    icon: 'Activity',
  },
];

export const ARCHITECTURE_ECOSYSTEM = [
  {
    id: 'frontend',
    name: 'Next.js 15 & React 19',
    layer: 'Frontend Client Layer',
    color: '#00E0FF',
    protocol: 'HTTPS / WebSockets',
    description: 'Production frontend framework providing App Router server-side rendering, streaming client components, responsive layouts, and 3D Canvas visualizers.',
    role: 'Client Interface, Data Dashboards & Real-time Visualizations',
  },
  {
    id: 'api-gateway',
    name: 'REST API & Security Gateway',
    layer: 'Ingress & Authentication',
    color: '#7C5CFF',
    protocol: 'REST / JSON / JWT',
    description: 'API gateway enforcing JWT cryptographic verification, CORS boundaries, client rate limiting, request validation, and honeypot spam protection.',
    role: 'Traffic Routing, Auth Enforcement & Rate Limiting',
  },
  {
    id: 'backend',
    name: 'FastAPI & Python 3.12',
    layer: 'Backend Microservices Layer',
    color: '#10B981',
    protocol: 'Async ASGI / HTTP2',
    description: 'High-throughput async Python framework powering AI microservices, background job coordination, Pydantic type validation, and data serialization.',
    role: 'Core Business Logic, Rule Engines & Model Execution',
  },
  {
    id: 'ai-ml',
    name: 'AI & ML Inference Mesh',
    layer: 'Intelligence & Decisioning',
    color: '#F59E0B',
    protocol: 'Groq API / Scikit-Learn / PyTorch',
    description: 'Multi-model orchestration layer combining XGBoost ensemble decisioning, TreeSHAP regulatory explainability, and Groq LLM RAG synthesis.',
    role: 'Anomaly Scoring, Predictive Analytics & AI Copilot',
  },
  {
    id: 'database',
    name: 'PostgreSQL & MongoDB Atlas',
    layer: 'Dual Persistence Layer',
    color: '#EC4899',
    protocol: 'TCP / Connection Pooling',
    description: 'Hybrid storage strategy utilizing PostgreSQL for ACID relational transaction histories and MongoDB Atlas for flexible document structures and session logs.',
    role: 'Relational Records, Document Store & User State',
  },
  {
    id: 'vector-db',
    name: 'Qdrant Vector Database',
    layer: 'Vector & Semantic Memory',
    color: '#38BDF8',
    protocol: 'gRPC / REST Vector Search',
    description: 'Specialized vector database executing sub-45ms cosine similarity lookups over dense embeddings for context-aware document and syllabus search.',
    role: 'Semantic Search, Document Knowledge & RAG Embeddings',
  },
  {
    id: 'cloud',
    name: 'Vercel Edge & Render Cloud',
    layer: 'Infrastructure & Deployment',
    color: '#8B5CF6',
    protocol: 'Cloud Edge / Docker Containers',
    description: 'Distributed cloud hosting infrastructure featuring edge CDN routing, automated zero-downtime rollouts, Docker container isolation, and SSL termination.',
    role: 'Automated CI/CD, Containerization & Global Distribution',
  },
];

export const CERTIFICATIONS_AND_CREDENTIALS = [
  {
    title: 'B.Tech in Artificial Intelligence & Machine Learning',
    organization: 'Allenhouse Institute of Technology',
    year: '2023–2027',
    type: 'Degree',
  },
  {
    title: 'Research Paper Presentation: Multi-Mode Charging Architecture',
    organization: 'Unified Power Bank and Charger Solution',
    year: '2024',
    type: 'Research',
  },
  {
    title: 'AKTU AI Tech Confluence Hackathon',
    organization: 'Participant & AI Systems Innovator',
    year: '2025',
    type: 'Hackathon',
  },
  {
    title: 'Data Structures & Algorithms Engineering Training',
    organization: 'Allenhouse Institute of Technology',
    year: '2024',
    type: 'Training',
  },
  {
    title: 'AI Tools & Modern Productivity Workflows',
    organization: 'be10x Certification',
    year: '2025',
    type: 'Certification',
  },
  {
    title: 'Full-Stack Web Development Bootcamp',
    organization: 'Web Systems Certification',
    year: '2024',
    type: 'Certification',
  },
];

export const TIMELINE_EVENTS = [
  {
    year: '2023 – 2027',
    title: 'B.Tech in Artificial Intelligence & Machine Learning',
    institution: 'Allenhouse Institute of Technology',
    description: 'Pursuing comprehensive curriculum in Neural Networks, Deep Learning, Data Structures, Relational Database Management Systems (RDBMS), and Computer Systems Architecture.',
    tag: 'Education',
  },
  {
    year: '2024',
    title: 'Full-Stack SaaS & Resume Intelligence Development',
    institution: 'AI Resume Builder & EvalMentor AI',
    description: 'Architected and shipped ATS-compliant resume generator with real-time state syncing. Built candidate resume parsing engine with FastAPI and Groq LLMs in EvalMentor AI.',
    tag: 'SaaS Launch',
  },
  {
    year: '2025',
    title: 'High-Throughput Vector RAG & Academic Agent Platform',
    institution: 'CampusAgent AI',
    description: 'Engineered multi-feature student productivity platform with 15+ REST endpoints, Qdrant vector database RAG search (<45ms), syllabus practice tests, and assignment tracking.',
    tag: 'AI Platform',
  },
  {
    year: '2025 – Present',
    title: 'Enterprise Fraud Intelligence & Clean Architecture',
    institution: 'RiskShield AI Platform',
    description: 'Engineered production-grade fraud intelligence platform featuring AST policy engine, multi-model XGBoost ensemble, TreeSHAP regulatory explainability, and 17 REST endpoints.',
    tag: 'Enterprise System',
  },
  {
    year: 'Present',
    title: 'DecisionLens Enterprise Analytics Flagship',
    institution: 'DecisionLens AI Ecosystem',
    description: 'Architecting DecisionLens AI to process large-scale datasets with automated domain detection, statistical time-series forecasting, anomaly alerts, and conversational business copilot.',
    tag: 'Flagship SaaS',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'decisionlens-ai',
    title: 'DecisionLens AI',
    tagline: 'Enterprise Decision Intelligence Platform',
    status: 'Live Production & Active Engineering',
    isUnreleased: false,
    category: 'Enterprise Analytics',
    badgeColor: '#00E0FF',
    accentColor: '#00E0FF',
    featured: true,
    githubUrl: 'https://github.com/AnzarKhan855/decisionlens-enterprise-analytics',
    demoUrl: 'https://decisionlens-enterprise-analytics.vercel.app',
    backendUrl: 'https://decisionlens-api.onrender.com',
    apiDocsUrl: 'https://decisionlens-api.onrender.com/docs',
    problem:
      'Enterprise leaders face data fragmentation across spreadsheets and databases, losing days manually compiling reports, calculating KPIs, and identifying business risks without timely predictive insight.',
    solution:
      'Engineered an enterprise decision intelligence platform that automatically ingests raw business datasets, profiles columns, generates executive KPI dashboards, detects operational anomalies, and delivers natural language answers via an AI Copilot.',
    description:
      'High-throughput business intelligence and decision platform featuring automatic dataset detection, statistical time-series forecasting, anomaly scoring, executive dashboard generation, and natural-language querying via an integrated AI Copilot.',
    metrics: [
      { label: 'Data Ingestion', value: '1M+ Records' },
      { label: 'Forecast Accuracy', value: '94.8%' },
      { label: 'AI Latency', value: '< 280ms' },
      { label: 'Pipeline Engines', value: '10 Modules' },
    ],
    technologies: [
      'Next.js 15',
      'React 19',
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
      'Recharts',
    ],
    architecture: [
      'Ingestion & Detection: Automated schema and column inferencing via Pandas and statistical heuristics',
      'Predictive ML Engine: Time-series forecasting and statistical outlier anomaly detection algorithms',
      'AI Copilot Layer: RAG over structured business metrics powered by FastAPI microservices and LLMs',
      'Executive Intelligence UI: High-density interactive dashboard built with Next.js and Recharts',
    ],
    architectureFlow: [
      { step: '01', role: 'Data Ingestion', tech: 'FastAPI / Pandas' },
      { step: '02', role: 'Domain Profiling', tech: 'Statistical Engine' },
      { step: '03', role: 'Predictive Modeling', tech: 'ML Forecast / Anomalies' },
      { step: '04', role: 'Executive Copilot', tech: 'RAG / Groq LLM' },
      { step: '05', role: 'Visual Telemetry', tech: 'Next.js / Recharts' },
    ],
    keyFeatures: [
      'Automatic dataset & domain detection (Sales, HR, Finance, Inventory)',
      'Data profiling and column statistics engine',
      'Automated executive KPI generation',
      'Real-time anomaly and outlier detection',
      'AI-generated business insights and summaries',
      'Predictive time-series revenue and demand forecasting',
      'Natural-language business query AI Copilot',
      'Exportable enterprise executive reports and PDF summaries',
    ],
    engineeringChallenges: [
      'Handling diverse unstructured CSV formats without breaking schema parsers',
      'Optimizing memory utilization during large dataset Pandas aggregations',
      'Balancing low-latency executive queries with complex statistical ML computations',
    ],
    roadmap: [
      { task: 'Data ingestion layer', status: 'completed' },
      { task: 'Dataset profiling & detection', status: 'completed' },
      { task: 'Database persistence layer', status: 'completed' },
      { task: 'Auto insights engine', status: 'completed' },
      { task: 'Analytics & forecasting engine', status: 'in-progress' },
      { task: 'Executive AI Copilot', status: 'in-progress' },
      { task: 'Enterprise dashboard export', status: 'in-progress' },
    ],
    pipelineSteps: ['Upload', 'Detect', 'Profile', 'Insights', 'Copilot', 'Report'],
  },
  {
    id: 'riskshield-ai',
    title: 'RiskShield AI',
    tagline: 'Enterprise Fraud Intelligence & Autonomous Decisioning Platform',
    status: 'Live Production',
    isUnreleased: false,
    category: 'Risk Intelligence',
    badgeColor: '#10B981',
    accentColor: '#10B981',
    featured: true,
    githubUrl: 'https://github.com/AnzarKhan855/riskshield-ai',
    demoUrl: 'https://riskshield-ai-kappa.vercel.app',
    problem:
      'Traditional payment fraud rules are rigid and brittle, missing emerging fraud rings, triggering high false positive customer rejections, and failing strict regulatory auditability standards (PCI-DSS/SOC2).',
    solution:
      'Engineered an enterprise fraud prevention platform implementing Clean Architecture, dual decisioning (AST compiled rules + XGBoost ensemble), TreeSHAP regulatory explainability, and entity graph relationship forensics.',
    description:
      'Enterprise fraud intelligence platform featuring real-time transaction ingestion, AST policy engine, multi-model ML inference mesh (XGBoost / Random Forest), TreeSHAP regulatory explanations, and case investigation workflows with high-throughput execution.',
    metrics: [
      { label: 'Architecture', value: 'Clean Hexagonal' },
      { label: 'Model ROC-AUC', value: '97.4%' },
      { label: 'REST Endpoints', value: '17 APIs' },
      { label: 'Compliance', value: 'TreeSHAP / PCI-DSS' },
    ],
    technologies: [
      'FastAPI',
      'Python 3.12',
      'Next.js 14',
      'TypeScript',
      'Tailwind CSS',
      'XGBoost',
      'Scikit-Learn',
      'SHAP',
      'SQLite / PostgreSQL',
      'Clean Architecture',
      'Docker',
      'Playwright',
    ],
    architecture: [
      'Clean Architecture Mesh: Strict decoupling into Domain, Use Cases, Interfaces, and Infrastructure',
      'Dual Decisioning Engine: AST compiled visual rules evaluated in parallel with XGBoost ML inference',
      'Regulatory Explainability: TreeSHAP mathematical feature attribution with SHA-256 audit hashes',
      'Entity Forensics: Graph relationship detection across IP addresses, devices, and PAN cards',
    ],
    architectureFlow: [
      { step: '01', role: 'Transaction Ingress', tech: 'FastAPI / Pydantic' },
      { step: '02', role: 'Rule Evaluation', tech: 'AST Policy Compiler' },
      { step: '03', role: 'ML Inference', tech: 'XGBoost / Ensemble' },
      { step: '04', role: 'SHAP Attribution', tech: 'Regulatory Audit Mesh' },
      { step: '05', role: 'Operations HUD', tech: 'Next.js 14 / TypeScript' },
    ],
    keyFeatures: [
      'Real-time transaction stream ingestion with asynchronous validation pipeline',
      'Visual Rule Studio with AST rule compiler and zero-downtime policy simulation',
      'Multi-model ML registry featuring calibrated XGBoost and Random Forest scoring',
      'TreeSHAP regulatory feature attribution for adverse action transparency',
      'Entity 360 forensics linking shared cards, IP clusters, and device fingerprints',
      'Collaborative fraud analyst case management and investigation workspace',
      'PCI-DSS v4.0 PAN masking and immutable audit log verification',
    ],
    engineeringChallenges: [
      'Optimizing end-to-end decision throughput combining AST rule evaluation and ML inference',
      'Preventing model drift in non-stationary fraud environments with PSI tracking',
      'Strict adherence to Clean Architecture boundaries across all 17 REST endpoints',
    ],
  },
  {
    id: 'campusagent-ai',
    title: 'CampusAgent AI',
    tagline: 'Agentic AI Student Productivity Platform',
    status: 'Live Production',
    isUnreleased: false,
    category: 'Agentic AI / RAG',
    badgeColor: '#7C5CFF',
    accentColor: '#7C5CFF',
    featured: true,
    githubUrl: 'https://github.com/AnzarKhan855/campusagent-ai',
    demoUrl: 'https://campusagent-ai.vercel.app',
    backendUrl: 'https://campusagent-ai-backend.onrender.com',
    apiDocsUrl: 'https://campusagent-ai-backend.onrender.com/docs',
    problem:
      'College students struggle with fragmented academic tools, dislocated study notes, missed assignment deadlines, and lack of personalized exam practice tailored to their specific university syllabus.',
    solution:
      'Engineered an all-in-one AI student ecosystem combining high-throughput RAG search over uploaded course PDFs, automated practice test generation, assignment deadline tracking, and weak-topic performance analytics.',
    description:
      'Full-stack AI academic platform featuring an end-to-end RAG pipeline (PyMuPDF → chunking → Hugging Face embeddings → Qdrant vector DB → Groq LLM) powering context-aware PDF chat with citations across 15+ REST endpoints.',
    metrics: [
      { label: 'REST APIs', value: '15+ Endpoints' },
      { label: 'Vector DB', value: 'Qdrant' },
      { label: 'RAG Retrieval', value: '< 45ms' },
      { label: 'Auth System', value: 'JWT + Bcrypt' },
    ],
    technologies: [
      'Next.js 15',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'FastAPI',
      'Python',
      'MongoDB Atlas',
      'Qdrant Vector DB',
      'Hugging Face Embeddings',
      'Groq LLM API',
      'PyMuPDF',
      'JWT',
      'Vercel',
      'Render',
    ],
    architecture: [
      'Frontend Workspace: Next.js 15 App Router client with responsive academic dashboards',
      'FastAPI Microservices: Asynchronous Python REST endpoints hosted on Render',
      'Vector Retrieval: Qdrant vector database indexing dense text embeddings for sub-45ms search',
      'LLM Reasoning: Groq API with Llama 3 for low-latency contextual answer synthesis',
    ],
    architectureFlow: [
      { step: '01', role: 'PDF Ingestion', tech: 'PyMuPDF Parser' },
      { step: '02', role: 'Chunk & Embed', tech: 'Hugging Face Model' },
      { step: '03', role: 'Vector Search', tech: 'Qdrant Vector DB' },
      { step: '04', role: 'RAG Generation', tech: 'Groq LLM / Llama 3' },
      { step: '05', role: 'Student Portal', tech: 'Next.js 15 / Tailwind' },
    ],
    keyFeatures: [
      'End-to-end RAG PDF knowledge retriever with exact page citations',
      '15+ production REST APIs covering academic scheduling, subjects, and notes',
      'Automated syllabus practice test generator with instant AI answer grading',
      'Predictive assignment deadline and attendance warning indicators',
      'Interactive radar and bar chart weak-topic performance breakdown',
      'Secure multi-tenant authentication with JWT and Bcrypt encryption',
    ],
    engineeringChallenges: [
      'Maintaining high-speed vector retrieval across multi-hundred page technical textbooks',
      'Eliminating LLM hallucinations by enforcing strict ground-truth prompt constraints',
      'Designing cohesive state management across academic modules and vector indexes',
    ],
  },
  {
    id: 'evalmentor-ai',
    title: 'EvalMentor AI',
    tagline: 'AI Interview Agent & Candidate Evaluation Platform',
    status: 'Live Production',
    isUnreleased: false,
    category: 'AI Interview Platform',
    badgeColor: '#00FFA3',
    accentColor: '#00FFA3',
    featured: false,
    githubUrl: 'https://github.com/AnzarKhan855/evalmentor-ai',
    demoUrl: 'https://evalmentor-ai.vercel.app',
    problem:
      'Job candidates lack access to personalized, recruiter-style mock technical interviews that thoroughly evaluate their real resume background and provide actionable feedback on weaknesses.',
    solution:
      'Built a full-stack platform that extracts structural candidate information from PDF resumes, crafts tailored technical interview questions, and provides recruiter-style score breakdowns with model answer suggestions.',
    description:
      'Full-stack AI interview platform featuring automated resume parsing, personalized interview question generation, response scoring, and historical performance tracking utilizing FastAPI, Groq LLMs, and MongoDB Atlas.',
    metrics: [
      { label: 'Evaluation Latency', value: '< 1.2s' },
      { label: 'Auth Pipeline', value: 'JWT + Bcrypt' },
      { label: 'Database', value: 'MongoDB Atlas' },
      { label: 'Inference', value: 'Groq LLM' },
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'FastAPI',
      'Python',
      'MongoDB Atlas',
      'JWT',
      'Bcrypt',
      'Groq AI API',
      'PyMuPDF',
      'Vercel',
      'Render',
    ],
    architecture: [
      'Resume Structural Extraction: PDF document parser isolating skills, projects, and education',
      'Interview Question Generator: Contextual prompt engineering tailoring inquiries to experience',
      'Scoring & Rubric Engine: Multi-dimensional evaluation evaluating depth, correctness, and clarity',
      'Historical Archive: MongoDB Atlas database tracking candidate score trajectories over time',
    ],
    architectureFlow: [
      { step: '01', role: 'Resume Upload', tech: 'PyMuPDF Parser' },
      { step: '02', role: 'Skill Extraction', tech: 'FastAPI / Pydantic' },
      { step: '03', role: 'Dynamic Questions', tech: 'Groq LLM Engine' },
      { step: '04', role: 'Answer Evaluation', tech: 'Recruiter Rubric AI' },
      { step: '05', role: 'Progress Tracker', tech: 'MongoDB / Next.js' },
    ],
    keyFeatures: [
      'Automated candidate resume parsing with structural skill extraction',
      'Dynamic interview question generator matching candidate seniority and stack',
      'Recruiter-style evaluation: score (0-100), key strengths, weaknesses, and model answers',
      'Interactive performance archive tracking candidate growth across multiple sessions',
      'Secure user profiles with authenticated session token management',
    ],
    engineeringChallenges: [
      'Standardizing parsing output across inconsistent, custom resume templates',
      'Calibrating prompt rubrics to avoid excessive leniency or harshness in scoring',
      'Optimizing round-trip inference time to deliver real-time conversational feedback',
    ],
  },
  {
    id: 'resume-builder',
    title: 'AI Resume Builder',
    tagline: 'ATS-Friendly Resume Builder & Intelligent Document Parser',
    status: 'Live Production',
    isUnreleased: false,
    category: 'Developer Productivity',
    badgeColor: '#38BDF8',
    accentColor: '#38BDF8',
    featured: false,
    githubUrl: 'https://github.com/AnzarKhan855/resume-builder',
    demoUrl: 'https://ats-resumebuilder.vercel.app',
    problem:
      'Over 75% of online job applications are rejected by automated ATS parsers due to non-standard columns, unparseable icons, poor typography, and missing structural keywords.',
    solution:
      'Developed an ATS-optimized resume builder that enforces recruiter-proven document standards, provides real-time form state synchronization, and produces clean, machine-readable PDF resumes.',
    description:
      'Full-stack ATS resume builder featuring real-time form state synchronization, cloud persistence, compliant typography hierarchy, and instant high-readability resume export for recruiters.',
    metrics: [
      { label: 'ATS Score', value: '98/100 Compliance' },
      { label: 'Form Sync', value: 'Real-time' },
      { label: 'Cloud Storage', value: 'Supabase' },
      { label: 'Auth Engine', value: 'Clerk / JWT' },
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'Clerk Auth',
      'PDF Generation',
      'Vercel',
    ],
    architecture: [
      'Reactive State Engine: Real-time form synchronization with zero latency typing lag',
      'Cloud Persistence Layer: User profile and resume document synchronization in Supabase',
      'ATS Layout Renderer: Print-accurate CSS formatting optimized for ATS parser ingestion',
    ],
    architectureFlow: [
      { step: '01', role: 'User Auth', tech: 'Clerk / JWT' },
      { step: '02', role: 'Data Ingestion', tech: 'React Hook Forms' },
      { step: '03', role: 'ATS Validation', tech: 'Heuristic Checker' },
      { step: '04', role: 'Cloud Persistence', tech: 'Supabase' },
      { step: '05', role: 'PDF Export', tech: 'Print CSS Renderer' },
    ],
    keyFeatures: [
      'Clean, recruiter-approved ATS-compliant single-column and dual-column layouts',
      'Real-time preview synchronized instantly with interactive editing controls',
      'Dedicated sections for Work Experience, Education, Projects, Skills, and Certifications',
      'Cloud storage allowing resume saving, cloning, and multi-version management',
      'One-click high-resolution PDF download ready for enterprise job portals',
    ],
    engineeringChallenges: [
      'Ensuring CSS print styles render identically across diverse desktop and mobile browsers',
      'Handling reactive deep nested form state without unnecessary component re-renders',
    ],
  },
  {
    id: 'bookstore-sql-analytics',
    title: 'BookStore SQL Analytics & BI',
    tagline: 'Enterprise Relational Database & Revenue Intelligence System',
    status: 'Source Available',
    isUnreleased: false,
    category: 'Data Analytics',
    badgeColor: '#F59E0B',
    accentColor: '#F59E0B',
    featured: false,
    githubUrl: 'https://github.com/AnzarKhan855/BookStore-SQL-Analysis',
    problem:
      'E-commerce retail operations require deep relational analytics to isolate customer purchase frequency, identify high-margin book categories, and calculate quarterly inventory churn.',
    solution:
      'Architected a 3NF normalized PostgreSQL database and an extensive suite of business queries utilizing complex multi-table joins, subqueries, CTEs, and window functions to extract commercial insights.',
    description:
      'Comprehensive relational database analysis using PostgreSQL. Explores customer behavior, sales trends, inventory turnover, and profitability through advanced SQL aggregations and CTEs.',
    metrics: [
      { label: 'Database Schema', value: '3NF Relational' },
      { label: 'Analytical Queries', value: '20+ Complex SQL' },
      { label: 'Aggregations', value: 'Window & CTEs' },
      { label: 'Insights Focus', value: 'Revenue & Churn' },
    ],
    technologies: [
      'PostgreSQL',
      'SQL',
      'Relational Database Design',
      'CTEs & Subqueries',
      'Window Functions',
      'Data Modeling',
      'Git',
    ],
    architecture: [
      'Relational Schema: 3NF normalized tables for Customers, Orders, Books, and Order Items',
      'Query Optimization: B-Tree index utilization for rapid aggregation and join execution',
      'Analytics Layer: Complex window ranking and cumulative revenue analysis',
    ],
    architectureFlow: [
      { step: '01', role: 'Data Modeling', tech: '3NF Entity Relations' },
      { step: '02', role: 'Data Ingestion', tech: 'PostgreSQL DDL/DML' },
      { step: '03', role: 'Relational Queries', tech: 'Joins, CTEs, Subqueries' },
      { step: '04', role: 'Business Metrics', tech: 'Window Functions / Aggregations' },
    ],
    keyFeatures: [
      'Full 3NF relational database schema design with primary and foreign key integrity',
      'Complex multi-table INNER, LEFT, and FULL joins across orders and inventory',
      'Advanced window functions for calculating running totals, rankings, and moving averages',
      'Common Table Expressions (CTEs) for multi-tiered customer segmentation queries',
      'Detailed analytical reports on customer lifetime value and seasonal sales trends',
    ],
    engineeringChallenges: [
      'Optimizing query plans to prevent full table scans across large transactional tables',
      'Writing modular CTEs to make complex multi-step financial aggregations maintainable',
    ],
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
    title: 'TreeSHAP Adverse Action Regulatory Attribution',
    category: 'Model Governance',
    status: 'COMPLIANT',
    metrics: { accuracy: '99.2%', speed: '8ms' },
    codeSnippet: `def compute_regulatory_attribution(tree_model, feature_vector):
    explainer = shap.TreeExplainer(tree_model)
    shap_values = explainer.shap_values(feature_vector)
    top_adverse_features = np.argsort(shap_values[0])[-5:]
    return generate_adverse_action_notice(top_adverse_features)`,
  },
];

export const SKILL_CLUSTERS = [
  {
    category: 'AI & Machine Learning',
    color: '#00E0FF',
    skills: ['PyTorch', 'Scikit-Learn', 'XGBoost', 'Groq API', 'OpenAI API', 'LangChain', 'RAG Architecture', 'Qdrant Vector DB', 'Pandas', 'NumPy'],
  },
  {
    category: 'Backend & Data Systems',
    color: '#7C5CFF',
    skills: ['FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Node.js', 'MongoDB Atlas', 'REST APIs', 'SQL / Relational DBs', 'System Design'],
  },
  {
    category: 'Frontend & UI Engineering',
    color: '#00FFA3',
    skills: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Three.js / R3F', 'Framer Motion', 'HTML5 / CSS3'],
  },
  {
    category: 'DevOps & Tooling',
    color: '#3B82F6',
    skills: ['Git & GitHub', 'Docker', 'Power BI', 'VS Code', 'Swagger UI', 'Vercel', 'Render', 'Postman'],
  },
];

// =========================================================================
// SECTION 05 — ANZAR'S TECHNOLOGY UNIVERSE (7 ORBITING GALAXIES)
// =========================================================================

export interface TechnologyItem {
  name: string;
  category: string;
  description: string;
  usedInProjectIds: string[];
}

export interface TechnologyGalaxy {
  id: string;
  name: string;
  galaxyNumber: string;
  centralLabel: string;
  color: string;
  accentColor: string;
  description: string;
  radius: number;
  speed: number;
  tiltX: number;
  tiltZ: number;
  technologies: TechnologyItem[];
}

export const TECHNOLOGY_GALAXIES: TechnologyGalaxy[] = [
  {
    id: 'frontend',
    name: 'Frontend Galaxy',
    galaxyNumber: '01',
    centralLabel: 'FRONTEND',
    color: '#00FFA3', // Neon Emerald
    accentColor: '#10B981',
    description: 'The interactive interface layer powering Anzar’s production applications with reactive state, responsive layouts, and 60 FPS motion.',
    radius: 4.8,
    speed: 0.05,
    tiltX: 0.32,
    tiltZ: -0.18,
    technologies: [
      {
        name: 'Next.js',
        category: 'Frontend',
        description: 'App Router architecture, SSR/SSG, optimized server/client components, dynamic routing, and edge deployment.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'React',
        category: 'Frontend',
        description: 'Component-driven state architecture, concurrent features, custom hooks, and high-performance DOM reconciliation.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'TypeScript',
        category: 'Frontend',
        description: 'Strict static typing, interface contracts, generics, and defensive compile-time verification across full-stack applications.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'JavaScript',
        category: 'Frontend',
        description: 'Modern ECMAScript (ES6+), async/await control flow, functional array pipelines, and web API integrations.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder', 'bookstore-sql'],
      },
      {
        name: 'HTML',
        category: 'Frontend',
        description: 'Semantic document hierarchy, accessible ARIA roles, structured SEO metadata, and clean DOM markup.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'CSS',
        category: 'Frontend',
        description: 'Modern CSS3 variables, flexbox & grid design patterns, hardware-accelerated transitions, and responsive viewports.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'Tailwind CSS',
        category: 'Frontend',
        description: 'Utility-first styling systems, custom cyber themes, component tokens, dark-mode color palettes, and glassmorphic designs.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'Framer Motion',
        category: 'Frontend',
        description: 'Declarative physics-based layout animations, gesture recognition, scroll-linked values, and smooth UI transitions.',
        usedInProjectIds: ['decisionlens-ai', 'campusagent-ai'],
      },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Galaxy',
    galaxyNumber: '02',
    centralLabel: 'BACKEND',
    color: '#FFD700', // Deep Gold
    accentColor: '#F59E0B',
    description: 'High-throughput microservices, asynchronous execution loops, strictly typed API schemas, and robust authorization guards.',
    radius: 7.2,
    speed: -0.045,
    tiltX: -0.26,
    tiltZ: 0.24,
    technologies: [
      {
        name: 'Node.js',
        category: 'Backend',
        description: 'Asynchronous event-driven JavaScript server runtime for microservices, file handling, and API middlewares.',
        usedInProjectIds: ['evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'Express.js',
        category: 'Backend',
        description: 'Lightweight web application framework for routing HTTP endpoints, middleware pipelines, and REST architectures.',
        usedInProjectIds: ['evalmentor-ai'],
      },
      {
        name: 'Python',
        category: 'Backend',
        description: 'Primary computational language powering machine learning inference, statistical pipelines, and asynchronous APIs.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'bookstore-sql'],
      },
      {
        name: 'FastAPI',
        category: 'Backend',
        description: 'High-performance async ASGI web framework with automatic Swagger documentation, Pydantic type validation, and dependency injection.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai'],
      },
      {
        name: 'REST APIs',
        category: 'Backend',
        description: 'Stateless RESTful endpoint design, predictable HTTP status codes, structured JSON payloads, and defensive error boundaries.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'JWT',
        category: 'Backend',
        description: 'Cryptographically signed JSON Web Tokens for stateless user authentication, role-based access control, and bearer sessions.',
        usedInProjectIds: ['campusagent-ai', 'evalmentor-ai'],
      },
      {
        name: 'Pydantic',
        category: 'Backend',
        description: 'Strict runtime data validation, schema enforcement, and serialization for Python microservice requests and responses.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai'],
      },
    ],
  },
  {
    id: 'aiml',
    name: 'AI / ML Galaxy',
    galaxyNumber: '03',
    centralLabel: 'AI / ML',
    color: '#7C5CFF', // Radiant Violet
    accentColor: '#9333EA',
    description: 'Operational intelligence pipelines: RAG semantic search, calibrated tree ensembles, feature attribution, and fast LLM inference.',
    radius: 9.6,
    speed: 0.04,
    tiltX: 0.38,
    tiltZ: 0.30,
    technologies: [
      {
        name: 'LLM APIs',
        category: 'AI / ML',
        description: 'Integration of modern foundation models with structured schema outputs, few-shot prompting, and deterministic temperature controls.',
        usedInProjectIds: ['campusagent-ai', 'evalmentor-ai', 'decisionlens-ai'],
      },
      {
        name: 'Groq',
        category: 'AI / ML',
        description: 'Ultra-low latency LPU inference engine powering real-time conversational agents and sub-second interview evaluations.',
        usedInProjectIds: ['campusagent-ai', 'evalmentor-ai'],
      },
      {
        name: 'RAG',
        category: 'AI / ML',
        description: 'Retrieval-Augmented Generation workflows combining semantic chunk retrieval with contextual generative grounding.',
        usedInProjectIds: ['campusagent-ai', 'decisionlens-ai'],
      },
      {
        name: 'Embeddings',
        category: 'AI / ML',
        description: 'Dense vector representations from sentence transformer models for similarity clustering and semantic search.',
        usedInProjectIds: ['campusagent-ai', 'decisionlens-ai'],
      },
      {
        name: 'Qdrant',
        category: 'AI / ML',
        description: 'Production vector search engine with payload filtering, cosine distance metrics, and fast vector indexing.',
        usedInProjectIds: ['campusagent-ai'],
      },
      {
        name: 'Machine Learning',
        category: 'AI / ML',
        description: 'Supervised classification pipelines, dataset split strategies, precision/recall optimization, and ROC-AUC evaluation.',
        usedInProjectIds: ['riskshield-ai'],
      },
      {
        name: 'XGBoost',
        category: 'AI / ML',
        description: 'Extreme Gradient Boosting decision tree ensemble tuned with early stopping and probability calibration for fraud detection.',
        usedInProjectIds: ['riskshield-ai'],
      },
      {
        name: 'SHAP',
        category: 'AI / ML',
        description: 'Game-theoretic TreeSHAP feature attribution calculating local Shapley values for regulatory explainability and adverse action notices.',
        usedInProjectIds: ['riskshield-ai'],
      },
      {
        name: 'Hugging Face',
        category: 'AI / ML',
        description: 'Open-source transformer architectures, tokenizer pipelines, and pretrained sentence embeddings for local semantic inference.',
        usedInProjectIds: ['campusagent-ai'],
      },
      {
        name: 'PyMuPDF',
        category: 'AI / ML',
        description: 'High-speed document parsing extracting clean text buffers, font metadata, and table bounding boxes from academic and resume PDFs.',
        usedInProjectIds: ['campusagent-ai', 'evalmentor-ai'],
      },
    ],
  },
  {
    id: 'database',
    name: 'Database Galaxy',
    galaxyNumber: '04',
    centralLabel: 'DATABASE',
    color: '#00E0FF', // Electric Cyan
    accentColor: '#0284C7',
    description: 'Heterogeneous storage solutions balancing relational integrity, document agility, in-memory caching, and vector indexing.',
    radius: 12.0,
    speed: -0.035,
    tiltX: -0.34,
    tiltZ: -0.22,
    technologies: [
      {
        name: 'MongoDB',
        category: 'Database',
        description: 'NoSQL document database with flexible JSON schemas, compound indexes, and aggregation pipelines for agile application state.',
        usedInProjectIds: ['campusagent-ai', 'evalmentor-ai', 'riskshield-ai'],
      },
      {
        name: 'PostgreSQL',
        category: 'Database',
        description: 'Enterprise ACID-compliant relational database featuring strict schema constraints, foreign key cascades, and complex indexing.',
        usedInProjectIds: ['decisionlens-ai', 'bookstore-sql'],
      },
      {
        name: 'SQL',
        category: 'Database',
        description: 'Relational data querying using multi-table joins, subqueries, Common Table Expressions (CTEs), and analytical window ranking functions.',
        usedInProjectIds: ['bookstore-sql', 'decisionlens-ai'],
      },
      {
        name: 'Supabase',
        category: 'Database',
        description: 'Managed PostgreSQL platform with real-time subscriptions, Row Level Security (RLS) policies, and integrated object storage.',
        usedInProjectIds: ['resume-builder'],
      },
      {
        name: 'Qdrant',
        category: 'Database',
        description: 'Dedicated vector database engineered for large-scale similarity search, collection partitioning, and filtered semantic retrieval.',
        usedInProjectIds: ['campusagent-ai'],
      },
      {
        name: 'Redis',
        category: 'Database',
        description: 'High-speed in-memory data store utilized for fast cache lookups, session serialization, and token bucket rate limiting.',
        usedInProjectIds: ['decisionlens-ai'],
      },
    ],
  },
  {
    id: 'data',
    name: 'Data & Analytics Galaxy',
    galaxyNumber: '05',
    centralLabel: 'DATA & ANALYTICS',
    color: '#FF00A0', // Magenta Pink
    accentColor: '#DB2777',
    description: 'Transforming raw transactional records into business intelligence through statistical profiling, time-series forecasting, and interactive charts.',
    radius: 14.4,
    speed: 0.03,
    tiltX: 0.28,
    tiltZ: -0.36,
    technologies: [
      {
        name: 'Python',
        category: 'Data & Analytics',
        description: 'Data science scripting, vector math, automated data transformations, and statistical modeling.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'bookstore-sql'],
      },
      {
        name: 'Pandas',
        category: 'Data & Analytics',
        description: 'Tabular dataframe processing, missing value imputation, group-by aggregations, datetime parsing, and statistical summaries.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'bookstore-sql'],
      },
      {
        name: 'Recharts',
        category: 'Data & Analytics',
        description: 'Declarative React charting library for rendering dynamic time-series curves, risk distribution bars, and revenue area graphs.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai'],
      },
      {
        name: 'KPI Analytics',
        category: 'Data & Analytics',
        description: 'Engineering essential business metrics including customer lifetime value (CLV), churn rate, moving averages, and profit margins.',
        usedInProjectIds: ['decisionlens-ai', 'bookstore-sql'],
      },
      {
        name: 'Data Visualization',
        category: 'Data & Analytics',
        description: 'Designing intuitive visual encodings, decision matrices, interactive legends, and color-coded risk heatmaps.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai'],
      },
      {
        name: 'Power BI',
        category: 'Data & Analytics',
        description: 'Enterprise business intelligence reporting, DAX measures, relational modeling, and interactive executive dashboards.',
        usedInProjectIds: ['bookstore-sql', 'decisionlens-ai'],
      },
      {
        name: 'Excel',
        category: 'Data & Analytics',
        description: 'Financial modeling, pivot tables, VLOOKUP/XLOOKUP functions, and initial exploratory data validation.',
        usedInProjectIds: ['bookstore-sql'],
      },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure Galaxy',
    galaxyNumber: '06',
    centralLabel: 'CLOUD & INFRASTRUCTURE',
    color: '#38BDF8', // Sky Blue
    accentColor: '#0EA5E9',
    description: 'Reliable deployment environments, containerized microservice architectures, and global edge network delivery.',
    radius: 16.8,
    speed: -0.025,
    tiltX: -0.22,
    tiltZ: 0.38,
    technologies: [
      {
        name: 'Docker',
        category: 'Cloud & DevOps',
        description: 'Multi-stage container builds, reproducible production images, environment variable isolation, and lightweight local testing.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai'],
      },
      {
        name: 'Vercel',
        category: 'Cloud & DevOps',
        description: 'Automated CI/CD git-linked deployments, global edge CDN caching, and serverless compute for Next.js web applications.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'Render',
        category: 'Cloud & DevOps',
        description: 'Cloud hosting platform for containerized Python FastAPI web services, automated SSL certificates, and persistent disks.',
        usedInProjectIds: ['decisionlens-ai', 'campusagent-ai'],
      },
      {
        name: 'Git',
        category: 'Cloud & DevOps',
        description: 'Distributed version control, atomic commits, feature branches, rebasing, and merge conflict resolution.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder', 'bookstore-sql'],
      },
      {
        name: 'GitHub',
        category: 'Cloud & DevOps',
        description: 'Cloud repository hosting, issue tracking, open-source portfolio maintenance, and automated webhook triggers.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder', 'bookstore-sql'],
      },
      {
        name: 'REST deployment',
        category: 'Cloud & DevOps',
        description: 'Stateless API cloud hosting with CORS middleware configuration, environment secrecy, and health probe endpoints.',
        usedInProjectIds: ['decisionlens-ai', 'campusagent-ai', 'riskshield-ai'],
      },
    ],
  },
  {
    id: 'tools',
    name: 'Engineering Tools Galaxy',
    galaxyNumber: '07',
    centralLabel: 'ENGINEERING TOOLS',
    color: '#F43F5E', // Rose Coral
    accentColor: '#E11D48',
    description: 'Developer tooling, API debugging environments, code formatting standards, and container runtimes ensuring velocity.',
    radius: 19.2,
    speed: 0.02,
    tiltX: 0.35,
    tiltZ: -0.28,
    technologies: [
      {
        name: 'Git',
        category: 'Engineering Tools',
        description: 'Command-line version control managing repository history, branch staging, and collaborative code merges.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder', 'bookstore-sql'],
      },
      {
        name: 'GitHub',
        category: 'Engineering Tools',
        description: 'Remote collaboration platform with release tags, repository documentation, and open-source project showcases.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder', 'bookstore-sql'],
      },
      {
        name: 'VS Code',
        category: 'Engineering Tools',
        description: 'Primary IDE customized with TypeScript linters, Python virtual environment debuggers, and Docker extension tooling.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder', 'bookstore-sql'],
      },
      {
        name: 'Postman',
        category: 'Engineering Tools',
        description: 'REST API payload debugging, JWT authentication headers testing, route verification, and environment variable collections.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'Docker',
        category: 'Engineering Tools',
        description: 'Local container daemon creating architecture parity between development workstations and production cloud servers.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai'],
      },
    ],
  },
];

// =========================================================================
// SECTION 20 TO 28 — UNDERSTANDABLE 3D/SVG PROJECT ARCHITECTURAL FLOWS
// =========================================================================

export interface ProjectArchitectureStep {
  id: string;
  stepNumber: number;
  label: string;
  subLabel: string;
  tech: string;
  description: string;
}

export interface ProjectArchitectureFlow {
  projectId: string;
  projectTitle: string;
  headline: string;
  steps: ProjectArchitectureStep[];
}

export const PROJECT_ARCHITECTURE_FLOWS: Record<string, ProjectArchitectureFlow> = {
  'decisionlens-ai': {
    projectId: 'decisionlens-ai',
    projectTitle: 'DecisionLens AI',
    headline: 'Enterprise Decision Intelligence & Statistical Ingestion Pipeline',
    steps: [
      {
        id: 'dl-step-1',
        stepNumber: 1,
        label: 'DATA SOURCE',
        subLabel: 'Raw Ingestion',
        tech: 'CSV / JSON / API streams',
        description: 'Accepts raw tabular files and business datasets up to 1M+ rows via drag-and-drop or HTTP multipart upload.',
      },
      {
        id: 'dl-step-2',
        stepNumber: 2,
        label: 'INGESTION',
        subLabel: 'Validation Layer',
        tech: 'FastAPI + Pydantic',
        description: 'Parses incoming data streams, verifies encoding, validates schemas, and checks null tolerances.',
      },
      {
        id: 'dl-step-3',
        stepNumber: 3,
        label: 'PROCESSING',
        subLabel: 'Profiling Engine',
        tech: 'Python + Pandas',
        description: 'Automates column type inference, statistical summaries, missing value imputation, and anomaly detection.',
      },
      {
        id: 'dl-step-4',
        stepNumber: 4,
        label: 'ANALYTICS ENGINE',
        subLabel: 'Time-Series Models',
        tech: 'Pandas + NumPy',
        description: 'Executes trend decomposition, seasonal regression, rolling window statistics, and margin calculations.',
      },
      {
        id: 'dl-step-5',
        stepNumber: 5,
        label: 'KPI / FORECASTING',
        subLabel: 'Metric Synthesis',
        tech: 'Statistical Algorithms',
        description: 'Generates forward-looking revenue forecasts, identifies churn inflection points, and computes performance KPIs.',
      },
      {
        id: 'dl-step-6',
        stepNumber: 6,
        label: 'INSIGHTS',
        subLabel: 'RAG Copilot',
        tech: 'FastAPI + LLM RAG',
        description: 'Translates natural language questions like "What drove Q3 margin decline?" into contextual data answers.',
      },
      {
        id: 'dl-step-7',
        stepNumber: 7,
        label: 'DASHBOARD',
        subLabel: 'Client Presentation',
        tech: 'Next.js 15 + Recharts',
        description: 'Renders reactive charts, downloadable summaries, metric cards, and interactive filtering dashboards.',
      },
    ],
  },
  'riskshield-ai': {
    projectId: 'riskshield-ai',
    projectTitle: 'RiskShield AI',
    headline: 'Enterprise Fraud Intelligence & Explainable Decisioning Mesh',
    steps: [
      {
        id: 'rs-step-1',
        stepNumber: 1,
        label: 'INPUT DATA',
        subLabel: 'Transaction Ingress',
        tech: 'FastAPI Ingress',
        description: 'Receives transaction payloads with user telemetry, device fingerprints, transaction amounts, and velocity indicators.',
      },
      {
        id: 'rs-step-2',
        stepNumber: 2,
        label: 'FEATURE ENGINEERING',
        subLabel: 'Attribute Extraction',
        tech: 'AST Rule Compiler + Pandas',
        description: 'Compiles business rule expressions using Abstract Syntax Trees and calculates dynamic behavioral aggregates.',
      },
      {
        id: 'rs-step-3',
        stepNumber: 3,
        label: 'RISK MODEL',
        subLabel: 'Model Inference',
        tech: 'Calibrated XGBoost Ensemble',
        description: 'Passes normalized feature vectors into gradient-boosted decision trees trained on historical fraud patterns.',
      },
      {
        id: 'rs-step-4',
        stepNumber: 4,
        label: 'RISK SCORE',
        subLabel: 'Probability Calculation',
        tech: 'Isotonic Regression',
        description: 'Outputs a well-calibrated continuous risk score between 0.00 and 1.00 representing fraud likelihood.',
      },
      {
        id: 'rs-step-5',
        stepNumber: 5,
        label: 'EXPLAINABILITY',
        subLabel: 'Regulatory Attribution',
        tech: 'TreeSHAP Game Theory',
        description: 'Calculates exact local Shapley contribution values for each feature to generate regulatory adverse action notices.',
      },
      {
        id: 'rs-step-6',
        stepNumber: 6,
        label: 'DECISION',
        subLabel: 'Automated Verdict',
        tech: 'Clean Architecture Gate',
        description: 'Executes automated policy: Approve (<0.35), Step-Up MFA Challenge (0.35–0.75), or Decline (>0.75).',
      },
    ],
  },
  'campusagent-ai': {
    projectId: 'campusagent-ai',
    projectTitle: 'CampusAgent AI',
    headline: 'Agentic Academic Productivity & Vector RAG Platform',
    steps: [
      {
        id: 'ca-step-1',
        stepNumber: 1,
        label: 'USER',
        subLabel: 'Student Interaction',
        tech: 'Browser / Mobile Client',
        description: 'Student uploads lecture slides, syllabi, or asks questions about course concepts and assignment schedules.',
      },
      {
        id: 'ca-step-2',
        stepNumber: 2,
        label: 'NEXT.JS',
        subLabel: 'App Router Client',
        tech: 'Next.js 15 + TypeScript',
        description: 'Manages optimistic UI state, document upload streaming, conversation history, and practice test generation.',
      },
      {
        id: 'ca-step-3',
        stepNumber: 3,
        label: 'FASTAPI',
        subLabel: 'API Microservice',
        tech: 'FastAPI + Python 3.12',
        description: 'Routes 15+ secured endpoints, handles JWT auth tokens, validates requests, and dispatches background tasks.',
      },
      {
        id: 'ca-step-4',
        stepNumber: 4,
        label: 'AI AGENT',
        subLabel: 'Autonomous Orchestrator',
        tech: 'RAG, Memory & Groq LPU',
        description: 'Orchestrates document chunking (PyMuPDF), retrieves relevant context, manages conversational memory, and executes tools.',
      },
      {
        id: 'ca-step-5',
        stepNumber: 5,
        label: 'VECTOR DATABASE',
        subLabel: 'Semantic Search Store',
        tech: 'Qdrant Vector DB',
        description: 'Indexes dense embeddings with cosine similarity distance, returning the top-k most relevant academic passages.',
      },
      {
        id: 'ca-step-6',
        stepNumber: 6,
        label: 'DATABASE',
        subLabel: 'Persistent Storage',
        tech: 'MongoDB Atlas',
        description: 'Persists user profiles, subject taxonomies, quiz histories, generated summaries, and analytics logs.',
      },
    ],
  },
  'evalmentor-ai': {
    projectId: 'evalmentor-ai',
    projectTitle: 'EvalMentor AI',
    headline: 'AI Interview Agent & Structured Candidate Assessment Platform',
    steps: [
      {
        id: 'em-step-1',
        stepNumber: 1,
        label: 'RESUME',
        subLabel: 'Candidate Input',
        tech: 'PDF Document Upload',
        description: 'Candidate submits their technical resume and selects their target engineering role (Frontend, Backend, AI/ML).',
      },
      {
        id: 'em-step-2',
        stepNumber: 2,
        label: 'PARSER',
        subLabel: 'Text Extraction',
        tech: 'PyMuPDF Engine',
        description: 'Extracts career history, education milestones, project descriptions, and technical skill keywords.',
      },
      {
        id: 'em-step-3',
        stepNumber: 3,
        label: 'PROFILE',
        subLabel: 'Competency Graph',
        tech: 'Structured JSON AST',
        description: 'Constructs an internal competency model mapping the candidate’s stated proficiencies and technical gaps.',
      },
      {
        id: 'em-step-4',
        stepNumber: 4,
        label: 'QUESTION GENERATOR',
        subLabel: 'Dynamic Scenarios',
        tech: 'FastAPI + LLM Engine',
        description: 'Generates tailored situational and algorithmic interview questions based on the candidate’s specific resume claims.',
      },
      {
        id: 'em-step-5',
        stepNumber: 5,
        label: 'USER ANSWER',
        subLabel: 'Response Ingestion',
        tech: 'Interactive UI Console',
        description: 'Candidate provides typed technical responses to real-world system design and coding challenges.',
      },
      {
        id: 'em-step-6',
        stepNumber: 6,
        label: 'AI EVALUATOR',
        subLabel: 'Rubric Assessment',
        tech: 'Groq LLM Acceleration',
        description: 'Evaluates the candidate’s technical depth, problem-solving structure, and communication clarity against hiring rubrics.',
      },
      {
        id: 'em-step-7',
        stepNumber: 7,
        label: 'FEEDBACK',
        subLabel: 'Actionable Report',
        tech: 'MongoDB + Next.js Report',
        description: 'Delivers a comprehensive evaluation card detailing strengths, weaknesses, recommended improvements, and hiring score.',
      },
    ],
  },
  'resume-builder': {
    projectId: 'resume-builder',
    projectTitle: 'AI Resume Builder',
    headline: 'ATS-Friendly SaaS & Deterministic Document Architecture',
    steps: [
      {
        id: 'rb-step-1',
        stepNumber: 1,
        label: 'RESUME INPUT',
        subLabel: 'User Career Data',
        tech: 'Next.js Dynamic Form',
        description: 'User enters employment history, technical competencies, education, and project achievements.',
      },
      {
        id: 'rb-step-2',
        stepNumber: 2,
        label: 'DOCUMENT PARSER',
        subLabel: 'Syntax Analyzer',
        tech: 'Parsing Engine',
        description: 'Classifies raw input into standardized resume entity tokens, cleaning formatting artifacts.',
      },
      {
        id: 'rb-step-3',
        stepNumber: 3,
        label: 'SECTION EXTRACTION',
        subLabel: 'Semantic Grouping',
        tech: 'State Reducer Matrix',
        description: 'Decomposes profile into modular sections: Summary, Experience, Projects, Skills, and Education.',
      },
      {
        id: 'rb-step-4',
        stepNumber: 4,
        label: 'STRUCTURED PROFILE',
        subLabel: 'Standard Schema',
        tech: 'JSON Resume Standard',
        description: 'Maintains an immutable JSON AST representation of the resume for deterministic styling and export.',
      },
      {
        id: 'rb-step-5',
        stepNumber: 5,
        label: 'ATS ENGINE',
        subLabel: 'Compliance Scorer',
        tech: 'ATS Rule Evaluator',
        description: 'Tests document against industry Applicant Tracking System heuristics, scoring 98/100 parser compatibility.',
      },
      {
        id: 'rb-step-6',
        stepNumber: 6,
        label: 'TEMPLATE',
        subLabel: 'Visual Typesetting',
        tech: 'Tailwind Print CSS',
        description: 'Applies clean, recruiter-approved typography, standard margins, and high-contrast typographic hierarchy.',
      },
      {
        id: 'rb-step-7',
        stepNumber: 7,
        label: 'PDF',
        subLabel: 'Export Generation',
        tech: 'Browser Print Driver',
        description: 'Generates a clean vector PDF download ready for recruiter submission and automated job board parsing.',
      },
    ],
  },
  'bookstore-sql': {
    projectId: 'bookstore-sql',
    projectTitle: 'BookStore SQL Analytics',
    headline: '3NF Relational Database & Revenue Intelligence Engine',
    steps: [
      {
        id: 'bs-step-1',
        stepNumber: 1,
        label: 'DATABASE',
        subLabel: 'Relational Core',
        tech: 'PostgreSQL Relational DB',
        description: 'Normalized 3NF relational schema storing customer profiles, author catalogs, book inventory, and sales orders.',
      },
      {
        id: 'bs-step-2',
        stepNumber: 2,
        label: 'SQL QUERIES',
        subLabel: 'Complex Aggregations',
        tech: 'SQL + CTEs + Window Functions',
        description: 'Executes 20+ analytical queries using DENSE_RANK(), PARTITION BY, and multi-table inner/outer joins.',
      },
      {
        id: 'bs-step-3',
        stepNumber: 3,
        label: 'DATA ANALYSIS',
        subLabel: 'Statistical Profiling',
        tech: 'Python + Pandas',
        description: 'Aggregates transactional histories to identify genre revenue distributions and high-volume purchasing cohorts.',
      },
      {
        id: 'bs-step-4',
        stepNumber: 4,
        label: 'REVENUE / METRICS',
        subLabel: 'Financial KPI Extraction',
        tech: 'Financial Calculations',
        description: 'Calculates Customer Lifetime Value (CLV), order repeat rates, seasonal sales peaks, and inventory velocity.',
      },
      {
        id: 'bs-step-5',
        stepNumber: 5,
        label: 'INSIGHTS',
        subLabel: 'Business Intelligence',
        tech: 'Executive Reports + Power BI',
        description: 'Delivers actionable strategic recommendations on inventory restocking, author promotions, and customer retention.',
      },
    ],
  },
};
