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
  maturityLevel?: 'FLAGSHIP' | 'ENTERPRISE' | 'ADVANCED' | 'FOUNDATION';
  filterTags?: string[];
  deploymentInfo?: {
    platform: string;
    runtime: string;
    database: string;
    tests: string;
  };
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
  engineeringStory?: string;
  pipelineSteps?: string[];
  roadmap?: { task: string; status: 'completed' | 'in-progress' }[];
}

export const LOOP = {
  id: 'loop-ai',
  title: 'LOOP 2.0 — AI Customer Feedback Intelligence Platform',
  tagline: 'Enterprise AI Customer Feedback Intelligence & Strategic Action Platform',
  frontend: 'https://ai-customer-feedback-intelligence-black.vercel.app',
  github: 'https://github.com/AnzarKhan855/ai-customer-feedback-intelligence',
  version: 'v2.0.0',
  status: 'LIVE / PRODUCTION',
  deployment: 'Vercel Production + Managed Neon PostgreSQL',
  tests: '79/79 Passing',
  capabilitiesCount: 15,
};

export const DECISIONLENS = {
  frontend: 'https://decisionlens-enterprise-analytics.vercel.app',
  backend: 'https://decisionlens-enterprise-analytics.onrender.com',
  docs: 'https://decisionlens-enterprise-analytics.onrender.com/docs',
  github: 'https://github.com/AnzarKhan855/decisionlens-enterprise-analytics',
  version: 'v2.1.0-RC',
  status: 'PRODUCTION READY — LIVE DEPLOYMENT',
  deployment: 'Vercel Edge + Render Production Backend',
  tests: '269 pytest Passing',
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
    'PRISMA & POSTGRESQL',
    'MONGODB & NEON',
    'AI AGENTS & RAG',
    'DATA ANALYTICS',
  ],
  focusAreas: [
    'Full-Stack Web Development',
    'MERN Stack Architecture',
    'Next.js 14/15 & React 19 Ecosystem',
    'FastAPI & Node.js Microservices',
    'Large Language Models & RAG',
    'Multi-Tenant SaaS Architecture',
    'Agentic Workflows & Rule Engines',
    'Data Analytics & Forecasting',
    'Relational, Vector & Serverless DBs',
    'REST APIs & System Design',
    'Cloud Deployment & CI/CD',
  ],
};

export const ENGINEERING_METRICS = [
  { label: 'Production Systems', value: '7', description: 'End-to-end built & deployed applications' },
  { label: 'REST API Endpoints', value: '75+', description: 'Secured with JWT, schemas & validation' },
  { label: 'Automated Tests', value: '350+', description: 'Unit, integration & E2E passing tests' },
  { label: 'Cloud Deployments', value: '7+', description: 'Live on Vercel Edge, Render & Neon Cloud' },
  { label: 'Full-Stack Coverage', value: '100%', description: 'Frontend, backend, databases, AI & DevOps' },
];

export const VERIFIED_METRICS = ENGINEERING_METRICS;

export const TECHNICAL_SKILL_GROUPS = [
  {
    category: 'Frontend',
    iconName: 'Layers',
    skills: ['React 19', 'Next.js 14/15 (App Router)', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Three.js / React Three Fiber', 'Framer Motion'],
  },
  {
    category: 'Backend',
    iconName: 'Server',
    skills: ['Python 3.12+', 'FastAPI', 'Node.js', 'Express.js', 'RESTful API Architecture', 'JWT Authentication', 'NextAuth.js', 'Bcrypt Security', 'Microservices'],
  },
  {
    category: 'Database & Storage',
    iconName: 'Database',
    skills: ['PostgreSQL', 'Neon Serverless', 'Prisma ORM', 'MongoDB Atlas', 'SQL (3NF)', 'Qdrant Vector DB', 'Supabase', 'Redis', 'DuckDB'],
  },
  {
    category: 'AI / Machine Learning',
    iconName: 'Cpu',
    skills: ['Retrieval-Augmented Generation (RAG)', 'Anthropic Claude 3.5 Sonnet', 'Groq LLM API', 'Aspect-Based Sentiment (ABSA)', 'Plutchik-8 Emotion Modeling', 'XGBoost', 'SHAP Explainability', 'Scikit-Learn'],
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
    description: 'Developing high-performance, responsive web interfaces using Next.js, React 19, TypeScript, and Tailwind CSS. Focuses on sub-second initial loads, accessible ARIA hierarchies, and 60 FPS motion polish.',
    provenIn: 'LOOP 2.0, DecisionLens, RiskShield AI, CampusAgent AI, Resume Builder',
  },
  {
    title: 'Backend Architecture',
    tag: 'High-Throughput APIs',
    color: '#7C5CFF',
    description: 'Engineering asynchronous microservices and API gateways using FastAPI and Node.js. Implements strict Pydantic schemas, dependency injection, rate limiting, and defensive error boundaries.',
    provenIn: 'RiskShield AI (17 endpoints), CampusAgent AI (15+ endpoints), DecisionLens (30+ endpoints)',
  },
  {
    title: 'AI / ML Integration',
    tag: 'Production Intelligence',
    color: '#00FFA3',
    description: 'Deploying operational AI workflows: Claude 3.5 Sonnet RAG with grounded citations, tree-based ensembles (XGBoost), model explainability (TreeSHAP), and high-throughput LLM synthesis with sub-second latencies.',
    provenIn: 'LOOP 2.0 Grounded Insights, RiskShield AI Fraud Engine, EvalMentor AI Scoring',
  },
  {
    title: 'RAG & Vector Search',
    tag: 'Semantic Retrieval',
    color: '#38BDF8',
    description: 'Designing end-to-end Retrieval-Augmented Generation pipelines using dense embedding models, chunking strategies, and Qdrant vector indexing for sub-50ms context retrieval with verified citations.',
    provenIn: 'CampusAgent AI PDF Copilot, LOOP 2.0 Ask AI, DecisionLens Business Copilot',
  },
  {
    title: 'Data & Business Intelligence',
    tag: 'Analytics & Profiling',
    color: '#F59E0B',
    description: 'Transforming millions of unstructured records into actionable executive metrics, anomaly detection flags, and statistical revenue forecasts using Pandas, SQL, and interactive Recharts.',
    provenIn: 'LOOP 2.0 Customer Health, DecisionLens Analytics Studio, BookStore SQL Analytics',
  },
  {
    title: 'Database Architecture',
    tag: 'SQL & NoSQL Persistence',
    color: '#EC4899',
    description: 'Architecting hybrid persistence layers: PostgreSQL & Neon Serverless via Prisma for ACID relational consistency; MongoDB Atlas for dynamic document hierarchies and agent state.',
    provenIn: 'LOOP 2.0, RiskShield AI, CampusAgent AI, BookStore SQL Analysis',
  },
  {
    title: 'Security & Governance',
    tag: 'Zero-Trust Protocol',
    color: '#10B981',
    description: 'Implementing robust security postures: Multi-tenant RBAC workspace scoping, JWT cryptographic tokens, password hashing with bcrypt, input sanitization, honeypot spam traps, and PCI-DSS PAN masking.',
    provenIn: 'LOOP 2.0 Multi-Tenant RBAC, Portfolio Contact API, RiskShield AI Governance',
  },
  {
    title: 'System Design & SDLC',
    tag: 'From Idea to Production',
    color: '#8B5CF6',
    description: 'Operating with Clean Architecture separation of concerns: domain entities, use-case interactors, repository adapters, and infrastructure isolation for maintainability and automated testability.',
    provenIn: 'LOOP 2.0 Ingestion Pipeline, RiskShield AI Clean Architecture, DecisionLens Modular Engine',
  },
];

export const BUILD_PIPELINE = [
  {
    step: '01',
    title: 'Understand & Scope',
    subtitle: 'Requirements & Constraints',
    description: 'Deconstruct domain problem, establish operational SLAs, isolate data schemas, and identify failure modes before writing a single line of code.',
    icon: 'Search',
    provenIn: 'LOOP 2.0 VoC Requirements Analysis',
  },
  {
    step: '02',
    title: 'Architect & Model',
    subtitle: 'System Design & Contracts',
    description: 'Define Clean Architecture boundaries, OpenAPI specifications, relational/NoSQL schemas, vector indexing topologies, and state machines.',
    icon: 'Layers',
    provenIn: 'RiskShield AST Engine & LOOP Prisma Schema',
  },
  {
    step: '03',
    title: 'Build Core',
    subtitle: 'Full-Stack Implementation',
    description: 'Implement frontend UI components in Next.js/React and high-throughput async endpoints in FastAPI/Node.js with strict type safety.',
    icon: 'Code2',
    provenIn: 'DecisionLens 30 Routes & CampusAgent Client',
  },
  {
    step: '04',
    title: 'Integrate AI',
    subtitle: 'Models, RAG & Vector Mesh',
    description: 'Embed LLMs, construct semantic retrieval pipelines with Qdrant vector indices, train baseline ML estimators, and connect streaming telemetry.',
    icon: 'Cpu',
    provenIn: 'LOOP Claude 3.5 ABSA & CampusAgent Qdrant RAG',
  },
  {
    step: '05',
    title: 'Test & Harden',
    subtitle: 'Security & Performance',
    description: 'Execute unit tests, API penetration scans, rate limit validation, P99 latency profiling, and Playwright end-to-end user simulations.',
    icon: 'ShieldCheck',
    provenIn: 'LOOP 79/79 Tests & DecisionLens 269 Pytests',
  },
  {
    step: '06',
    title: 'Deploy & Automate',
    subtitle: 'Cloud CI/CD & Containers',
    description: 'Package microservices with Docker, establish automated GitHub CI/CD, and deploy edge-rendered frontends to Vercel and backends to Render/Neon.',
    icon: 'Rocket',
    provenIn: 'Vercel Edge & Render Production Deployments',
  },
  {
    step: '07',
    title: 'Monitor & Iterate',
    subtitle: 'Telemetry & Feedback Loops',
    description: 'Track real-time latency health checks, audit logs, model drift metrics, and user feedback to iteratively refine product performance.',
    icon: 'Activity',
    provenIn: 'LOOP Activity Center & RiskShield Telemetry',
  },
];

export const ARCHITECTURE_ECOSYSTEM = [
  {
    id: 'frontend',
    name: 'Next.js 14/15 & React 19',
    layer: 'Frontend Client Layer',
    color: '#00E0FF',
    protocol: 'HTTPS / WebSockets / Server Actions',
    description: 'Production frontend framework providing App Router server-side rendering, streaming client components, responsive layouts, and 3D Canvas visualizers.',
    role: 'Client Interface, Data Dashboards & Real-time Visualizations',
  },
  {
    id: 'api-gateway',
    name: 'REST API & Security Gateway',
    layer: 'Ingress & Authentication',
    color: '#7C5CFF',
    protocol: 'REST / JSON / JWT / NextAuth',
    description: 'API gateway enforcing JWT cryptographic verification, RBAC permissions, CORS boundaries, client rate limiting, and honeypot spam protection.',
    role: 'Traffic Routing, Auth Enforcement & Rate Limiting',
  },
  {
    id: 'backend',
    name: 'FastAPI & Node.js Microservices',
    layer: 'Backend Microservices Layer',
    color: '#10B981',
    protocol: 'Async ASGI / HTTP2 / Node Serverless',
    description: 'High-throughput async Python & Node.js frameworks powering AI microservices, background job coordination, Pydantic type validation, and data serialization.',
    role: 'Core Business Logic, Rule Engines & Model Execution',
  },
  {
    id: 'ai-ml',
    name: 'AI & Dual NLP Inference Mesh',
    layer: 'Intelligence & Decisioning',
    color: '#F59E0B',
    protocol: 'Claude 3.5 / Groq API / Scikit-Learn / XGBoost',
    description: 'Multi-model orchestration layer combining Claude 3.5 Sonnet RAG, local fallback ABSA sentiment, XGBoost fraud decisioning, and TreeSHAP explainability.',
    role: 'Anomaly Scoring, Predictive Analytics & Grounded RAG Copilot',
  },
  {
    id: 'database',
    name: 'Neon PostgreSQL & MongoDB Atlas',
    layer: 'Dual Persistence Layer',
    color: '#EC4899',
    protocol: 'Prisma ORM / TCP / Connection Pooling',
    description: 'Hybrid storage strategy utilizing Neon Serverless PostgreSQL via Prisma for ACID multi-tenant data, and MongoDB Atlas for flexible document structures and session logs.',
    role: 'Relational Records, Document Store & Tenant Isolation',
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
    name: 'Vercel Edge, Render & Neon Cloud',
    layer: 'Infrastructure & Deployment',
    color: '#8B5CF6',
    protocol: 'Cloud Edge / Docker Containers / Serverless',
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
    institution: 'Allenhouse Institute of Technology, AKTU',
    description: 'Pursuing comprehensive curriculum in Neural Networks, Deep Learning, Data Structures & Algorithms, Relational Database Management Systems (RDBMS), Operating Systems, and Software Engineering.',
    tag: 'Education',
  },
  {
    year: '2024',
    title: 'Full-Stack SaaS & Resume Intelligence Development',
    institution: 'AI Resume Builder & EvalMentor AI',
    description: 'Architected and shipped ATS-compliant resume builder with real-time state syncing and 50 templates. Built candidate resume parsing engine with FastAPI, PyMuPDF, and Groq LLMs in EvalMentor AI.',
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
    year: '2025 – 2026',
    title: 'Enterprise Fraud Intelligence & Clean Architecture',
    institution: 'RiskShield AI Platform',
    description: 'Engineered production-grade fraud intelligence platform featuring AST policy engine, multi-model XGBoost ensemble, TreeSHAP regulatory explainability, and 17 REST endpoints.',
    tag: 'Enterprise System',
  },
  {
    year: '2026',
    title: 'Decision Intelligence & Universal Analytics Flagship',
    institution: 'DecisionLens AI Ecosystem',
    description: 'Architected DecisionLens AI v2.1.0-RC to process large-scale datasets with DuckDB in-memory query engine, statistical time-series forecasting, anomaly alerts, 30 routes, and 269 passing automated tests.',
    tag: 'Flagship SaaS',
  },
  {
    year: '2026',
    title: 'Enterprise AI Customer Feedback Intelligence Platform',
    institution: 'LOOP 2.0 Ecosystem',
    description: 'Architected and shipped LOOP 2.0: multi-tenant VoC platform with dual NLP pipeline (sentiment, Plutchik-8 emotions, ABSA, 0-100 severity), grounded root cause analysis, 15 enterprise modules, and 79/79 passing automated tests on Neon PostgreSQL.',
    tag: 'Flagship AI',
  },
  {
    year: 'Present',
    title: 'Production Systems Architect & Enterprise Builder',
    institution: 'Multi-System Production Ecosystem',
    description: 'Operating with production-grade engineering maturity across 7 deployed platforms, 75+ REST API endpoints, 350+ automated tests, and 100% full-stack architectural coverage.',
    tag: 'Production Mastery',
  },
];

export const PROJECT_FILTER_CATEGORIES = [
  'ALL',
  'AI / ML',
  'FULL STACK',
  'ENTERPRISE',
  'ANALYTICS',
  'RISK / SECURITY',
  'DATA',
  'SYSTEM DESIGN',
] as const;

export type ProjectFilterCategory = (typeof PROJECT_FILTER_CATEGORIES)[number];

export const PROJECTS: Project[] = [
  {
    id: 'loop-ai',
    title: 'LOOP 2.0',
    tagline: 'Enterprise AI Customer Feedback Intelligence Platform',
    status: 'Live Production',
    isUnreleased: false,
    category: 'Enterprise AI & Customer Intelligence',
    badgeColor: '#00FFA3',
    accentColor: '#00FFA3',
    featured: true,
    maturityLevel: 'FLAGSHIP',
    filterTags: ['ALL', 'AI / ML', 'FULL STACK', 'ENTERPRISE', 'ANALYTICS', 'SYSTEM DESIGN'],
    deploymentInfo: {
      platform: 'Vercel Production',
      runtime: 'Next.js 14 App Router + Node.js',
      database: 'Neon Serverless PostgreSQL (Prisma ORM)',
      tests: '79/79 Passing Automated Tests',
    },
    githubUrl: 'https://github.com/AnzarKhan855/ai-customer-feedback-intelligence',
    demoUrl: 'https://ai-customer-feedback-intelligence-black.vercel.app',
    problem:
      'Product and engineering teams drown in scattered, unstructured feedback across Zendesk, Intercom, App Stores, and CSVs—losing days manually triaging complaints, missing critical churn signals, and prioritizing features based on guesswork rather than empirical customer evidence.',
    solution:
      'Engineered an enterprise VoC intelligence platform that ingests multi-channel feedback, scores data hygiene (0–100), runs a dual NLP intelligence pipeline (Sentiment, Plutchik-8 emotion taxonomy, Aspect-Based ABSA, 9-class intent, and explainable 0–100 severity), uncovers grounded root causes with verifiable database record links, and converts insights into roadmap actions.',
    description:
      'Enterprise AI customer-feedback intelligence platform that transforms raw customer feedback into grounded insights, emerging trends, product gaps, strategic priorities, customer health signals, recommendations, executive intelligence, and operational actions.',
    metrics: [
      { label: 'Automated Tests', value: '79/79 Passing' },
      { label: 'Enterprise Modules', value: '15 Capabilities' },
      { label: 'Pre-Seeded Corpus', value: '127+ Records' },
      { label: 'Severity Precision', value: 'Deterministic 0-100' },
    ],
    technologies: [
      'Next.js 14',
      'TypeScript',
      'Prisma ORM',
      'PostgreSQL (Neon)',
      'Anthropic Claude',
      'NextAuth.js',
      'Tailwind CSS',
      'Recharts',
      'Multi-Tenant RBAC',
      'Aspect-Based ABSA',
      'Plutchik-8 Emotions',
      'Zod',
      'Vercel',
    ],
    architecture: [
      'Multi-Channel Ingestion Gate: REST ingestion API, CSV bulk loader, and simulators for Zendesk, Intercom, and App Store feedback',
      'Data Quality & Hygiene Engine: Text normalization, injection stripping, Levenshtein deduplication, and 0–100 quality scoring',
      'Dual-Engine NLP Pipeline: Claude 3.5 Sonnet & local deterministic fallback computing Sentiment, Plutchik-8, ABSA, and 0–100 severity',
      'Multi-Tenant Relational Persistence: Prisma ORM on Neon Serverless PostgreSQL with strict workspace tenant isolation (workspaceId)',
      'Grounded Intelligence & RAG: Ask LOOP AI analyst with verifiable citation links to database records and zero hallucination fallback',
      'Product Manager Decision Workspace: Strategic Priority Matrix (2x2 Impact vs Urgency), Emerging Trends Radar, and Product Gaps with ARR risk',
      'Executive Reporting & Actions: Custom Markdown/JSON intelligence report builder, activity notifications, and 1-click roadmap promotion',
    ],
    architectureFlow: [
      { step: '01', role: 'Feedback Ingestion', tech: 'REST API & CSV Bulk' },
      { step: '02', role: 'Data Quality & Dedup', tech: 'Hygiene & Levenshtein' },
      { step: '03', role: 'Relational Persistence', tech: 'Prisma + Neon PG' },
      { step: '04', role: 'NLP & Severity Engine', tech: 'Sentiment, ABSA, Plutchik-8' },
      { step: '05', role: 'Grounded Intelligence', tech: 'RAG & Traceable Citations' },
      { step: '06', role: 'PM Decision Hub', tech: '2x2 Priority Matrix & Gaps' },
      { step: '07', role: 'Roadmap & Actions', tech: 'Action Promotion Engine' },
    ],
    keyFeatures: [
      'Customer Health Intelligence: Deterministic 0–100 health composite with positive signals, critical issues, churn indicators, and account vitality',
      'Grounded Root Cause Explorer: Evidence-backed diagnostic hypotheses with verifiable citation links to source feedback records',
      'Emerging Issue Trend Detection: 7-day volume burst detection, sentiment velocity shifts, and anomalous feedback surges',
      'Product Gap & Competitive Intelligence: Feature deficit extraction with ARR churn exposure and competitor displacement tracking',
      'AI Strategic Priority Matrix: 2x2 Impact vs Urgency quadrant ranking (Quick Wins, Major Projects, Fill-ins, Deprioritized)',
      'Semantic Feedback Clustering: Token Jaccard similarity grouping customer feedback with centroid sentiment and dominant emotion',
      'Executive Intelligence Briefing: Automated leadership synthesis of weekly VoC trajectory, Net Sentiment, and P0 incident blockers',
      'Intelligent Feedback Deduplication: Levenshtein distance and token-overlap duplicate detection for pristine data hygiene',
      'Action Recommendation Engine: 1-click promotion of high-severity feedback trends into formal roadmap action items',
      'AI Executive Report Builder: Multi-section exportable intelligence briefings in structured JSON and Markdown',
      'Enterprise Activity Center: Real-time unified notification stream with unread state tracking and quick action links',
      'Global Command Palette (Cmd+K / Ctrl+K): Fuzzy keyboard-driven search across all 15 modules, feedback items, and accounts',
      'Product Manager Decision Hub: Unified command center integrating Priority Matrix, Emerging Issues, and Product Gaps',
      'Ingestion Operations Command Center: Channel-by-channel health telemetry, data hygiene scores, and schema validation diagnostics',
      'Enterprise Control Center: Admin-only observability into database latency, tenant quotas, and RBAC role distribution',
    ],
    engineeringChallenges: [
      'Eliminating metric hallucination by enforcing strictly grounded RAG citations linking every executive hypothesis to database records',
      'Architecting resilient dual-engine NLP: local deterministic fallback when external LLM endpoints are unavailable or rate-limited',
      'Enforcing strict multi-tenant workspace isolation at the Prisma query level across 15 enterprise intelligence endpoints',
    ],
    engineeringStory:
      'Building LOOP 2.0 taught me that the hardest part of customer intelligence is not generating text with an LLM, but engineering mathematical grounding. By creating deterministic formulas for 0–100 severity and customer health, backed by a dual NLP pipeline and strict workspace isolation in Neon PostgreSQL, the platform delivers trustworthy executive intelligence that product managers can stake their roadmap on.',
    pipelineSteps: ['Ingest', 'Sanitize', 'Persist', 'NLP & ABSA', 'RAG Insights', 'PM Hub', 'Actions'],
  },
  {
    id: 'decisionlens-ai',
    title: 'DecisionLens AI',
    tagline: 'Enterprise Decision Intelligence & Statistical Ingestion Platform',
    status: 'Live Production',
    isUnreleased: false,
    category: 'Enterprise Analytics',
    badgeColor: '#00E0FF',
    accentColor: '#00E0FF',
    featured: true,
    maturityLevel: 'FLAGSHIP',
    filterTags: ['ALL', 'AI / ML', 'FULL STACK', 'ENTERPRISE', 'ANALYTICS', 'DATA', 'SYSTEM DESIGN'],
    deploymentInfo: {
      platform: 'Vercel Edge (Frontend) + Render Web Service (Backend)',
      runtime: 'Next.js 15 App Router + FastAPI Python 3.12',
      database: 'DuckDB In-Memory + Parquet Storage + MongoDB Atlas',
      tests: '269 pytest Passing (100% Backend Pass Rate)',
    },
    githubUrl: 'https://github.com/AnzarKhan855/decisionlens-enterprise-analytics',
    demoUrl: 'https://decisionlens-enterprise-analytics.vercel.app',
    backendUrl: 'https://decisionlens-enterprise-analytics.onrender.com',
    apiDocsUrl: 'https://decisionlens-enterprise-analytics.onrender.com/docs',
    problem:
      'Enterprise leaders face data fragmentation across spreadsheets and databases, losing days manually compiling reports, calculating KPIs, and identifying business risks without timely predictive insight.',
    solution:
      'Engineered an enterprise decision intelligence platform that automatically ingests raw business datasets, profiles columns, generates executive KPI dashboards, detects operational anomalies, and delivers natural language answers via an AI Copilot backed by DuckDB and statistical models.',
    description:
      'High-throughput business intelligence and decision platform featuring automatic dataset detection, statistical time-series forecasting, anomaly scoring, executive dashboard generation, and natural-language querying via an integrated AI Copilot across 30 production routes.',
    metrics: [
      { label: 'Automated Tests', value: '269 Passed' },
      { label: 'Frontend Routes', value: '30 Verified' },
      { label: 'Data Ingestion', value: '1M+ Records' },
      { label: 'AI Copilot Latency', value: 'P50 ~1.5s' },
    ],
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'FastAPI',
      'Python 3.12',
      'DuckDB',
      'Pandas',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'REST APIs',
      'Recharts',
      'Vercel',
      'Render',
    ],
    architecture: [
      'Ingestion & Detection: Automated schema and column inferencing via Pandas and DuckDB in-memory engine',
      'Predictive ML Engine: Time-series forecasting and statistical outlier anomaly detection algorithms',
      'AI Copilot Layer: RAG over structured business metrics powered by FastAPI microservices and LLMs',
      'Executive Intelligence UI: High-density interactive dashboard built with Next.js 15, React 19, and Recharts',
    ],
    architectureFlow: [
      { step: '01', role: 'Data Ingestion', tech: 'FastAPI / DuckDB' },
      { step: '02', role: 'Domain Profiling', tech: 'Statistical Engine' },
      { step: '03', role: 'Predictive Modeling', tech: 'ML Forecast / Anomalies' },
      { step: '04', role: 'Executive Copilot', tech: 'RAG / Groq LLM' },
      { step: '05', role: 'Visual Telemetry', tech: 'Next.js 15 / Recharts' },
    ],
    keyFeatures: [
      'Automatic dataset & domain detection (Sales, HR, Finance, Inventory)',
      'Data profiling and column statistics engine with sub-second analysis',
      'Automated executive KPI generation with interactive drilldowns',
      'Real-time anomaly and outlier detection across revenue and volume',
      'AI-generated business insights and summaries grounded in DuckDB queries',
      'Predictive time-series revenue and demand forecasting models',
      'Natural-language business query AI Copilot with multi-turn context',
      'Exportable enterprise executive reports and multi-section summaries',
    ],
    engineeringChallenges: [
      'Handling diverse unstructured CSV and ZIP formats with Windows-1252 byte normalization without schema parser crashes',
      'Eliminating memory leaks under high concurrent query volume using TTLCache and automatic DuckDB view recycling',
      'Guaranteeing CORS headers on error responses across Vercel client and Render backend via dedicated exception middleware',
    ],
    engineeringStory:
      'DecisionLens proved how critical end-to-end integration testing is. Going from a prototype to a production release (v2.1.0-RC) with 269 passed pytests and 30 verified routes required solving real production bugs: asynchronous multi-table ZIP processing, non-UTF-8 encoding normalization, and multi-tenant collision isolation.',
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
    maturityLevel: 'ENTERPRISE',
    filterTags: ['ALL', 'AI / ML', 'FULL STACK', 'ENTERPRISE', 'RISK / SECURITY', 'SYSTEM DESIGN'],
    deploymentInfo: {
      platform: 'Vercel Production (Frontend) + Containerized Microservices',
      runtime: 'Next.js 14 App Router + FastAPI Python 3.12',
      database: 'PostgreSQL / SQLite + Redis Feature Store',
      tests: 'Playwright E2E + Unit Test Suites',
    },
    githubUrl: 'https://github.com/AnzarKhan855/riskshield-ai',
    demoUrl: 'https://riskshield-ai-kappa.vercel.app',
    problem:
      'Traditional payment fraud rules are rigid and brittle, missing emerging fraud rings, triggering high false positive customer rejections, and failing strict regulatory auditability standards (PCI-DSS/SOC2).',
    solution:
      'Engineered an enterprise fraud prevention platform implementing Clean Architecture, dual decisioning (AST compiled rules + XGBoost ensemble), TreeSHAP regulatory explainability, and entity graph relationship forensics.',
    description:
      'Enterprise fraud intelligence platform featuring real-time transaction ingestion, AST policy engine, multi-model ML inference mesh (XGBoost / Random Forest), TreeSHAP regulatory explanations, and case investigation workflows across 17 REST endpoints.',
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
      'PostgreSQL',
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
      'Optimizing end-to-end decision throughput combining AST rule evaluation and ML inference under 15ms P99',
      'Preventing model drift in non-stationary fraud environments with PSI tracking',
      'Strict adherence to Clean Architecture boundaries across all 17 REST endpoints',
    ],
    engineeringStory:
      'Designing RiskShield AI taught me why Clean Architecture matters in regulated domains. Separating pure domain business rules from database adapters allowed us to run dual decisioning (AST rules + XGBoost ML) in sub-15ms latency while providing cryptographically hashed TreeSHAP explanations required by banking regulators.',
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
    maturityLevel: 'ADVANCED',
    filterTags: ['ALL', 'AI / ML', 'FULL STACK', 'SYSTEM DESIGN'],
    deploymentInfo: {
      platform: 'Vercel (Frontend) + Render (Backend)',
      runtime: 'Next.js 16 + FastAPI Python 3.13+',
      database: 'Qdrant Cloud Vector DB + MongoDB Atlas',
      tests: 'Pytest Suite + Async Semaphore Pools',
    },
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
      { label: 'Vector DB', value: 'Qdrant Cloud' },
      { label: 'RAG Retrieval', value: '< 45ms' },
      { label: 'Auth System', value: 'JWT + Bcrypt' },
    ],
    technologies: [
      'Next.js 16',
      'TypeScript',
      'React 19',
      'Tailwind CSS',
      'FastAPI',
      'Python 3.13',
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
      'Frontend Workspace: Next.js 16 App Router client with responsive academic dashboards',
      'FastAPI Microservices: Asynchronous Python REST endpoints hosted on Render',
      'Vector Retrieval: Qdrant vector database indexing dense text embeddings for sub-45ms search',
      'LLM Reasoning: Groq API with Llama 3 for low-latency contextual answer synthesis',
    ],
    architectureFlow: [
      { step: '01', role: 'PDF Ingestion', tech: 'PyMuPDF Parser' },
      { step: '02', role: 'Chunk & Embed', tech: 'Hugging Face Model' },
      { step: '03', role: 'Vector Search', tech: 'Qdrant Vector DB' },
      { step: '04', role: 'RAG Generation', tech: 'Groq LLM / Llama 3' },
      { step: '05', role: 'Student Portal', tech: 'Next.js 16 / Tailwind' },
    ],
    keyFeatures: [
      'End-to-end RAG PDF knowledge retriever with exact page citations',
      '15+ production REST APIs covering academic scheduling, subjects, and notes',
      'Automated syllabus practice test generator with instant AI answer grading',
      'Predictive assignment deadline and attendance compliance calculators',
      'Interactive radar and bar chart weak-topic performance breakdown',
      'Secure multi-tenant authentication with JWT and Bcrypt encryption',
    ],
    engineeringChallenges: [
      'Maintaining high-speed vector retrieval across multi-hundred page technical textbooks',
      'Eliminating LLM hallucinations by enforcing strict ground-truth prompt constraints',
      'Parallelizing AI test question evaluation with asyncio worker pools without exceeding rate limits',
    ],
    engineeringStory:
      'CampusAgent taught me the engineering trade-offs of RAG systems. Chunk size, overlap ratio, and vector payload indexing directly determine whether students get accurate textbook citations or useless fluff. Implementing Qdrant vector search with metadata filtering cut query latency to under 45ms.',
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
    maturityLevel: 'ADVANCED',
    filterTags: ['ALL', 'AI / ML', 'FULL STACK'],
    deploymentInfo: {
      platform: 'Vercel (Frontend) + Render (Backend)',
      runtime: 'Next.js 15 + FastAPI Python 3.11+',
      database: 'MongoDB Atlas',
      tests: 'Pytest API Suite',
    },
    githubUrl: 'https://github.com/AnzarKhan855/evalmentor-ai',
    demoUrl: 'https://evalmentor-ai.vercel.app',
    backendUrl: 'https://evalmentor-ai.onrender.com',
    apiDocsUrl: 'https://evalmentor-ai.onrender.com/docs',
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
      'Next.js 15',
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
    engineeringStory:
      'EvalMentor demonstrated how structured prompt engineering combined with fast LPU inference (Groq) can replace generic chatbots with realistic, structured interview simulations that provide genuine hiring feedback.',
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
    maturityLevel: 'ADVANCED',
    filterTags: ['ALL', 'FULL STACK', 'SYSTEM DESIGN'],
    deploymentInfo: {
      platform: 'Vercel Production',
      runtime: 'Next.js 16 (Turbopack) + React 19',
      database: 'MongoDB Atlas (Mongoose 9)',
      tests: '40+ Test Suite (Forensic Parser + Hardening)',
    },
    githubUrl: 'https://github.com/AnzarKhan855/resume-builder',
    demoUrl: 'https://ats-resumebuilder.vercel.app',
    problem:
      'Over 75% of online job applications are rejected by automated ATS parsers due to non-standard columns, unparseable icons, poor typography, and missing structural keywords.',
    solution:
      'Developed an ATS-optimized resume builder that enforces recruiter-proven document standards, provides real-time form state synchronization, and produces clean, machine-readable PDF and native DOCX resumes with 50 calibrated templates.',
    description:
      'Full-stack ATS resume platform featuring server-safe forensic document parsing (unpdf + mammoth), 50 Overleaf/LaTeX-calibrated ATS templates, deep Job Description tailoring studio, and strict multi-tenant isolation.',
    metrics: [
      { label: 'ATS Score', value: '98/100 Compliance' },
      { label: 'Templates', value: '50 Overleaf ATS' },
      { label: 'Parser Fidelity', value: 'Server-Safe unpdf' },
      { label: 'Multi-Format', value: 'PDF + Native DOCX' },
    ],
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'MongoDB Atlas',
      'unpdf',
      'mammoth',
      'Groq Llama 3.3',
      'Vercel',
    ],
    architecture: [
      'Forensic Parser: Server-safe PDF extraction via unpdf with zero canvas dependencies for Vercel functions',
      'Database-First State: MongoDB serves as single source of truth with sanitized ingestion preventing CastError',
      'Universal Template Renderer: Universal canonical data binding preserving 100% of fields across 50 templates',
    ],
    architectureFlow: [
      { step: '01', role: 'File Upload', tech: 'Multipart unpdf / mammoth' },
      { step: '02', role: 'Grounding Filter', tech: 'Anti-Hallucination Guard' },
      { step: '03', role: 'Canonical State', tech: 'MongoDB / Mongoose 9' },
      { step: '04', role: 'ATS Validation', tech: '50 Template Layouts' },
      { step: '05', role: 'Multi-Format Export', tech: 'Print CSS & Native DOCX' },
    ],
    keyFeatures: [
      '50 Overleaf/LaTeX-grade ATS templates across 7 industry categories',
      'Forensic server-safe PDF & DOCX parser with zero-hallucination grounding filter',
      'Deep Job Description tailoring studio with STAR methodology rewrite',
      'Native DOCX generation matching canonical resume hierarchy without distortion',
      'Strict multi-tenant ownership authorization on every resume route',
    ],
    engineeringChallenges: [
      'Eliminating serverless canvas polyfill crashes by rebuilding document parsing on unpdf',
      'Guaranteeing zero data loss when dynamically switching between 50 divergent template layouts',
    ],
    engineeringStory:
      'Building ResumeBuilder taught me that real document engineering requires zero-hallucination discipline. A parser must never invent companies or dates out of thin air. Enforcing strict character-level substring verification ensured 100% fidelity.',
  },
  {
    id: 'bookstore-sql',
    title: 'BookStore SQL Analytics & BI',
    tagline: 'Enterprise Relational Database & Revenue Intelligence System',
    status: 'Source Available',
    isUnreleased: false,
    category: 'Data Analytics',
    badgeColor: '#F59E0B',
    accentColor: '#F59E0B',
    featured: false,
    maturityLevel: 'FOUNDATION',
    filterTags: ['ALL', 'DATA', 'ANALYTICS'],
    deploymentInfo: {
      platform: 'GitHub Repository',
      runtime: 'PostgreSQL Relational Engine',
      database: 'PostgreSQL 3NF Schema',
      tests: '20+ Complex SQL Analytical Queries',
    },
    githubUrl: 'https://github.com/AnzarKhan855/BookStore-SQL-Analysis',
    problem:
      'E-commerce retail operations require deep relational analytics to isolate customer purchase frequency, identify high-margin book categories, and calculate quarterly inventory churn.',
    solution:
      'Architected a 3NF normalized PostgreSQL database and an extensive suite of business queries utilizing complex multi-table joins, subqueries, CTEs, and window functions to extract commercial insights.',
    description:
      'Comprehensive relational database analysis using PostgreSQL. Explores customer behavior, sales trends, inventory turnover, and profitability through advanced SQL aggregations, window functions, and CTEs.',
    metrics: [
      { label: 'Database Schema', value: '3NF Relational' },
      { label: 'Analytical Queries', value: '20+ Complex SQL' },
      { label: 'Aggregations', value: 'Window & CTEs' },
      { label: 'Insights Focus', value: 'Revenue & Churn' },
    ],
    technologies: [
      'PostgreSQL',
      'SQL',
      'Relational Database Design (3NF)',
      'CTEs & Subqueries',
      'Window Functions (DENSE_RANK)',
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
    engineeringStory:
      'BookStore SQL gave me foundational fluency in relational algebra. Understanding indexing, normalization, and window ranking functions in PostgreSQL forms the bedrock of how I now design database schemas for SaaS platforms like LOOP and DecisionLens.',
  },
];

export const AI_LAB_EXPERIMENTS = [
  {
    id: 'exp-1',
    title: 'Grounded VoC Aspect-Based Sentiment & Severity Engine',
    category: 'Agentic NLP',
    status: 'PRODUCTION ACTIVE',
    metrics: { accuracy: 'Deterministic 0–100', speed: '42ms' },
    codeSnippet: `// LOOP 2.0 Deterministic Severity Formula
export function calculateSeverity(signal: CustomerSignal): number {
  let score = 25; // Base
  if (signal.sentiment < -0.3) score += 25;
  if (signal.emotions.includes('anger')) score += 15;
  if (signal.isSystemOutage) score += 20;
  if (signal.isSecurityBreach) score += 35;
  if (signal.arrExposure > 50000) score += 10;
  return Math.min(100, score);
}`,
  },
  {
    id: 'exp-2',
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
    skills: ['Anthropic Claude', 'RAG Architecture', 'Qdrant Vector DB', 'XGBoost', 'TreeSHAP', 'Groq API', 'Aspect-Based Sentiment', 'Pandas', 'NumPy'],
  },
  {
    category: 'Backend & Data Systems',
    color: '#7C5CFF',
    skills: ['FastAPI', 'Python', 'Prisma ORM', 'PostgreSQL', 'Neon Serverless', 'Node.js', 'MongoDB Atlas', 'REST APIs', 'System Design'],
  },
  {
    category: 'Frontend & UI Engineering',
    color: '#00FFA3',
    skills: ['Next.js 14/15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Three.js / R3F', 'Framer Motion', 'Recharts'],
  },
  {
    category: 'DevOps & Tooling',
    color: '#3B82F6',
    skills: ['Git & GitHub', 'Docker', 'Vercel', 'Render', 'Postman', 'Playwright', 'OpenAPI / Swagger'],
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
        description: 'App Router architecture, SSR/SSG, server actions, dynamic routing, and edge deployment.',
        usedInProjectIds: ['loop-ai', 'decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'React',
        category: 'Frontend',
        description: 'Component-driven state architecture, concurrent features, custom hooks, and high-performance DOM reconciliation.',
        usedInProjectIds: ['loop-ai', 'decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'TypeScript',
        category: 'Frontend',
        description: 'Strict static typing, interface contracts, generics, and compile-time verification across full-stack applications.',
        usedInProjectIds: ['loop-ai', 'decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'JavaScript',
        category: 'Frontend',
        description: 'Modern ECMAScript (ES6+), async/await control flow, functional array pipelines, and web API integrations.',
        usedInProjectIds: ['loop-ai', 'decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder', 'bookstore-sql'],
      },
      {
        name: 'Tailwind CSS',
        category: 'Frontend',
        description: 'Utility-first styling systems, custom cyber themes, component tokens, dark-mode palettes, and glassmorphic designs.',
        usedInProjectIds: ['loop-ai', 'decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'Framer Motion',
        category: 'Frontend',
        description: 'Declarative physics-based layout animations, gesture recognition, scroll-linked values, and smooth UI transitions.',
        usedInProjectIds: ['decisionlens-ai', 'campusagent-ai'],
      },
      {
        name: 'Three.js / R3F',
        category: 'Frontend',
        description: 'Interactive 3D WebGL scenes, orbital tech universes, and scroll-linked avatar journeys running at smooth 60 FPS.',
        usedInProjectIds: ['portfolio'],
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
        name: 'FastAPI',
        category: 'Backend',
        description: 'High-performance async ASGI web framework with automatic Swagger documentation, Pydantic type validation, and dependency injection.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai'],
      },
      {
        name: 'Python',
        category: 'Backend',
        description: 'Primary computational language powering machine learning inference, statistical pipelines, and asynchronous APIs.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'bookstore-sql'],
      },
      {
        name: 'Node.js',
        category: 'Backend',
        description: 'Asynchronous event-driven JavaScript server runtime for microservices, file handling, and API middlewares.',
        usedInProjectIds: ['loop-ai', 'evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'REST APIs',
        category: 'Backend',
        description: 'Stateless RESTful endpoint design, predictable HTTP status codes, structured JSON payloads, and defensive error boundaries.',
        usedInProjectIds: ['loop-ai', 'decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'JWT & Auth',
        category: 'Backend',
        description: 'Cryptographically signed tokens and NextAuth sessions for role-based access control and multi-tenant security.',
        usedInProjectIds: ['loop-ai', 'campusagent-ai', 'evalmentor-ai', 'riskshield-ai'],
      },
      {
        name: 'Pydantic / Zod',
        category: 'Backend',
        description: 'Strict runtime schema validation and serialization for API requests, database payloads, and environment variables.',
        usedInProjectIds: ['loop-ai', 'decisionlens-ai', 'riskshield-ai', 'campusagent-ai'],
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
        name: 'Anthropic Claude',
        category: 'AI / ML',
        description: 'Claude 3.5 Sonnet integration with grounded customer feedback reasoning, ABSA, and citation-backed synthesis.',
        usedInProjectIds: ['loop-ai'],
      },
      {
        name: 'RAG & Vectors',
        category: 'AI / ML',
        description: 'Retrieval-Augmented Generation workflows combining semantic chunk retrieval with contextual generative grounding and zero hallucination fallback.',
        usedInProjectIds: ['loop-ai', 'campusagent-ai', 'decisionlens-ai'],
      },
      {
        name: 'Groq LPU',
        category: 'AI / ML',
        description: 'Ultra-low latency LPU inference engine powering real-time conversational agents and sub-second interview evaluations.',
        usedInProjectIds: ['campusagent-ai', 'evalmentor-ai', 'decisionlens-ai'],
      },
      {
        name: 'Qdrant Vector DB',
        category: 'AI / ML',
        description: 'Production vector search engine with payload filtering, cosine distance metrics, and sub-45ms vector indexing.',
        usedInProjectIds: ['campusagent-ai'],
      },
      {
        name: 'XGBoost',
        category: 'AI / ML',
        description: 'Extreme Gradient Boosting decision tree ensemble tuned with early stopping and probability calibration for fraud detection.',
        usedInProjectIds: ['riskshield-ai'],
      },
      {
        name: 'TreeSHAP',
        category: 'AI / ML',
        description: 'Game-theoretic TreeSHAP feature attribution calculating local Shapley values for regulatory explainability and adverse action notices.',
        usedInProjectIds: ['riskshield-ai'],
      },
      {
        name: 'ABSA & Sentiment',
        category: 'AI / ML',
        description: 'Aspect-Based Sentiment Analysis and Plutchik-8 emotion taxonomy modeling for multi-dimensional customer signal classification.',
        usedInProjectIds: ['loop-ai'],
      },
      {
        name: 'PyMuPDF',
        category: 'AI / ML',
        description: 'High-speed document parsing extracting clean text buffers, font metadata, and table bounding boxes from PDFs.',
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
        name: 'PostgreSQL',
        category: 'Database',
        description: 'Enterprise ACID-compliant relational database featuring strict schema constraints, foreign key cascades, and complex indexing.',
        usedInProjectIds: ['loop-ai', 'decisionlens-ai', 'bookstore-sql'],
      },
      {
        name: 'Neon Serverless',
        category: 'Database',
        description: 'Serverless PostgreSQL with instant autoscaling, connection pooling, and branch-level testing environments.',
        usedInProjectIds: ['loop-ai'],
      },
      {
        name: 'Prisma ORM',
        category: 'Database',
        description: 'Type-safe object-relational mapping providing schema migrations, relation modeling, and multi-tenant workspace isolation.',
        usedInProjectIds: ['loop-ai'],
      },
      {
        name: 'MongoDB Atlas',
        category: 'Database',
        description: 'NoSQL document database with flexible JSON schemas, compound indexes, and aggregation pipelines for agile application state.',
        usedInProjectIds: ['campusagent-ai', 'evalmentor-ai', 'riskshield-ai', 'resume-builder'],
      },
      {
        name: 'DuckDB',
        category: 'Database',
        description: 'Fast analytical in-memory columnar database executing sub-second aggregations over large parquet tables.',
        usedInProjectIds: ['decisionlens-ai'],
      },
      {
        name: 'SQL (3NF)',
        category: 'Database',
        description: 'Relational data querying using multi-table joins, subqueries, Common Table Expressions (CTEs), and window functions.',
        usedInProjectIds: ['bookstore-sql', 'decisionlens-ai', 'loop-ai'],
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
        name: 'Pandas',
        category: 'Data & Analytics',
        description: 'Tabular dataframe processing, missing value imputation, group-by aggregations, datetime parsing, and statistical summaries.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'bookstore-sql'],
      },
      {
        name: 'Recharts',
        category: 'Data & Analytics',
        description: 'Declarative React charting library for rendering dynamic time-series curves, risk distribution bars, and revenue area graphs.',
        usedInProjectIds: ['loop-ai', 'decisionlens-ai', 'riskshield-ai'],
      },
      {
        name: 'KPI Analytics',
        category: 'Data & Analytics',
        description: 'Engineering essential business metrics including customer health score, ARR churn exposure, moving averages, and profit margins.',
        usedInProjectIds: ['loop-ai', 'decisionlens-ai', 'bookstore-sql'],
      },
      {
        name: 'Data Profiling',
        category: 'Data & Analytics',
        description: 'Automated statistical column inference, distribution skews, null-rate profiling, and data hygiene scoring (0–100).',
        usedInProjectIds: ['loop-ai', 'decisionlens-ai'],
      },
      {
        name: 'Power BI',
        category: 'Data & Analytics',
        description: 'Enterprise business intelligence reporting, DAX measures, relational modeling, and interactive executive dashboards.',
        usedInProjectIds: ['bookstore-sql', 'decisionlens-ai'],
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
        name: 'Vercel',
        category: 'Cloud & DevOps',
        description: 'Automated CI/CD git-linked deployments, global edge CDN caching, and serverless compute for Next.js applications.',
        usedInProjectIds: ['loop-ai', 'decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder'],
      },
      {
        name: 'Render Cloud',
        category: 'Cloud & DevOps',
        description: 'Cloud hosting platform for containerized Python FastAPI web services, automated SSL certificates, and health probe monitoring.',
        usedInProjectIds: ['decisionlens-ai', 'campusagent-ai', 'evalmentor-ai'],
      },
      {
        name: 'Docker',
        category: 'Cloud & DevOps',
        description: 'Multi-stage container builds, reproducible production images, environment variable isolation, and lightweight local testing.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai'],
      },
      {
        name: 'Git & GitHub',
        category: 'Cloud & DevOps',
        description: 'Distributed version control, atomic commits, feature branches, semantic releases, and open-source project showcases.',
        usedInProjectIds: ['loop-ai', 'decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder', 'bookstore-sql'],
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
        name: 'Postman',
        category: 'Engineering Tools',
        description: 'REST API payload debugging, JWT authentication headers testing, route verification, and automated collection runs.',
        usedInProjectIds: ['loop-ai', 'decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai'],
      },
      {
        name: 'Playwright & E2E',
        category: 'Engineering Tools',
        description: 'Automated browser testing verifying complex user interactions, authentication flows, and regression prevention.',
        usedInProjectIds: ['riskshield-ai', 'loop-ai'],
      },
      {
        name: 'Swagger / OpenAPI',
        category: 'Engineering Tools',
        description: 'Interactive API specifications, documentation portals, and schema validation contracts.',
        usedInProjectIds: ['decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai'],
      },
      {
        name: 'VS Code',
        category: 'Engineering Tools',
        description: 'Primary IDE customized with TypeScript linters, Python virtual environment debuggers, and Docker extensions.',
        usedInProjectIds: ['loop-ai', 'decisionlens-ai', 'riskshield-ai', 'campusagent-ai', 'evalmentor-ai', 'resume-builder', 'bookstore-sql'],
      },
    ],
  },
];

// =========================================================================
// SECTION: SHIPPED LIVE SYSTEMS PROOF MATRIX
// =========================================================================

export interface ShippedSystemProof {
  id: string;
  title: string;
  tagline: string;
  maturity: 'FLAGSHIP PRODUCTION' | 'ENTERPRISE SYSTEM' | 'ADVANCED PLATFORM' | 'SAAS PRODUCT' | 'DATA PIPELINE';
  frontend: string;
  backend: string;
  database: string;
  aiEngine: string;
  testCoverage: string;
  deploymentHost: string;
  githubUrl: string;
  demoUrl: string;
  isLive: boolean;
}

export const LIVE_SYSTEMS_PROOF: ShippedSystemProof[] = [
  {
    id: 'loop-ai',
    title: 'LOOP 2.0',
    tagline: 'AI Customer Feedback Intelligence Platform',
    maturity: 'FLAGSHIP PRODUCTION',
    frontend: 'Next.js 14 App Router (TypeScript)',
    backend: 'Next.js Server Actions + Node API Routes',
    database: 'Neon Serverless PostgreSQL (Prisma ORM)',
    aiEngine: 'Claude 3.5 Sonnet + Dual Deterministic NLP',
    testCoverage: '79 / 79 Automated Tests Passing',
    deploymentHost: 'Vercel Edge + Neon Cloud',
    githubUrl: 'https://github.com/AnzarKhan855/ai-customer-feedback-intelligence',
    demoUrl: 'https://ai-customer-feedback-intelligence-black.vercel.app',
    isLive: true,
  },
  {
    id: 'decisionlens-ai',
    title: 'DecisionLens AI',
    tagline: 'Enterprise Decision Intelligence & Statistical Ingestion',
    maturity: 'FLAGSHIP PRODUCTION',
    frontend: 'Next.js 15 + React 19 (30 Verified Routes)',
    backend: 'FastAPI Python 3.12 (Async Microservices)',
    database: 'DuckDB In-Memory + Parquet + MongoDB Atlas',
    aiEngine: 'Conversational Business Copilot + Time-Series ML',
    testCoverage: '269 pytest Passing (100% Backend Pass Rate)',
    deploymentHost: 'Vercel Edge + Render Production',
    githubUrl: 'https://github.com/AnzarKhan855/decisionlens-enterprise-analytics',
    demoUrl: 'https://decisionlens-enterprise-analytics.vercel.app',
    isLive: true,
  },
  {
    id: 'riskshield-ai',
    title: 'RiskShield AI',
    tagline: 'Enterprise Fraud Intelligence & Autonomous Decisioning',
    maturity: 'ENTERPRISE SYSTEM',
    frontend: 'Next.js 14 + Tailwind CSS HUD',
    backend: 'FastAPI Python (Clean Hexagonal Architecture)',
    database: 'PostgreSQL / SQLite + Redis Feature Store',
    aiEngine: 'XGBoost Ensemble + TreeSHAP Adverse Attribution',
    testCoverage: 'Playwright E2E + Unit Test Suites',
    deploymentHost: 'Vercel Production',
    githubUrl: 'https://github.com/AnzarKhan855/riskshield-ai',
    demoUrl: 'https://riskshield-ai-kappa.vercel.app',
    isLive: true,
  },
  {
    id: 'campusagent-ai',
    title: 'CampusAgent AI',
    tagline: 'Agentic Student Academic Productivity & Vector RAG',
    maturity: 'ADVANCED PLATFORM',
    frontend: 'Next.js 16 + React 19 + TypeScript',
    backend: 'FastAPI Python 3.13 (15+ REST Endpoints)',
    database: 'Qdrant Cloud Vector DB + MongoDB Atlas',
    aiEngine: 'RAG Pipeline with Dense Embeddings (<45ms)',
    testCoverage: 'Pytest Suite + Async Semaphore Pools',
    deploymentHost: 'Vercel + Render Web Service',
    githubUrl: 'https://github.com/AnzarKhan855/campusagent-ai',
    demoUrl: 'https://campusagent-ai.vercel.app',
    isLive: true,
  },
  {
    id: 'evalmentor-ai',
    title: 'EvalMentor AI',
    tagline: 'AI Technical Interview Agent & Evaluation Platform',
    maturity: 'ADVANCED PLATFORM',
    frontend: 'Next.js 15 + Tailwind CSS',
    backend: 'FastAPI Python + PyMuPDF Parser',
    database: 'MongoDB Atlas',
    aiEngine: 'Groq LPU (Sub-second Evaluation Latency)',
    testCoverage: 'API Integration Test Suite',
    deploymentHost: 'Vercel + Render Web Service',
    githubUrl: 'https://github.com/AnzarKhan855/evalmentor-ai',
    demoUrl: 'https://evalmentor-ai.vercel.app',
    isLive: true,
  },
  {
    id: 'resume-builder',
    title: 'AI Resume Builder',
    tagline: 'ATS Resume Intelligence & Forensic Document Parser',
    maturity: 'SAAS PRODUCT',
    frontend: 'Next.js 16 (Turbopack) + React 19',
    backend: 'Server-Safe unpdf + mammoth Direct Extractors',
    database: 'MongoDB Atlas (Mongoose 9)',
    aiEngine: 'Groq Llama 3.3 STAR Tailoring Engine',
    testCoverage: '40+ Test Suite (Forensic Parser + Hardening)',
    deploymentHost: 'Vercel Production',
    githubUrl: 'https://github.com/AnzarKhan855/resume-builder',
    demoUrl: 'https://ats-resumebuilder.vercel.app',
    isLive: true,
  },
  {
    id: 'bookstore-sql',
    title: 'BookStore SQL Analytics',
    tagline: '3NF Relational Database & Business Intelligence',
    maturity: 'DATA PIPELINE',
    frontend: 'Interactive SQL Console / Power BI Schema',
    backend: 'PostgreSQL Relational Engine',
    database: 'PostgreSQL 3NF Normalized Database',
    aiEngine: 'Statistical Revenue & Churn Aggregations',
    testCoverage: '20+ Complex SQL Analytical Queries',
    deploymentHost: 'GitHub Repository',
    githubUrl: 'https://github.com/AnzarKhan855/BookStore-SQL-Analysis',
    demoUrl: 'https://github.com/AnzarKhan855/BookStore-SQL-Analysis',
    isLive: false,
  },
];

// =========================================================================
// SECTION — PROJECT ARCHITECTURAL FLOWS
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
  'loop-ai': {
    projectId: 'loop-ai',
    projectTitle: 'LOOP 2.0',
    headline: 'Enterprise AI Customer Feedback Intelligence & Strategic Action Pipeline',
    steps: [
      {
        id: 'loop-step-1',
        stepNumber: 1,
        label: 'SOURCES',
        subLabel: 'Multi-Channel Ingestion',
        tech: 'Zendesk / Intercom / CSV',
        description: 'Ingests multi-channel customer feedback through REST endpoints, bulk CSV parsers, and live support channel simulators.',
      },
      {
        id: 'loop-step-2',
        stepNumber: 2,
        label: 'HYGIENE',
        subLabel: 'Sanitization & Dedup',
        tech: 'Levenshtein & Quality Scoring',
        description: 'Normalizes raw text, strips prompt injection payloads, computes 0–100 data hygiene scores, and clusters duplicate submissions.',
      },
      {
        id: 'loop-step-3',
        stepNumber: 3,
        label: 'PERSISTENCE',
        subLabel: 'Relational Isolation',
        tech: 'Neon PostgreSQL + Prisma',
        description: 'Persists structured records in managed Neon Serverless PostgreSQL with strict multi-tenant workspace isolation (workspaceId).',
      },
      {
        id: 'loop-step-4',
        stepNumber: 4,
        label: 'NLP PIPELINE',
        subLabel: 'Dual Analysis Engine',
        tech: 'ABSA + Plutchik-8 Emotions',
        description: 'Runs Aspect-Based Sentiment Analysis (ABSA), 8-class Plutchik emotions, 9-class intent classification, and deterministic 0–100 severity.',
      },
      {
        id: 'loop-step-5',
        stepNumber: 5,
        label: 'GROUNDED AI',
        subLabel: 'Traceable Insights',
        tech: 'Claude 3.5 Sonnet RAG',
        description: 'Executes grounded semantic queries where every hypothesis and summary is strictly linked to verifiable database citation IDs.',
      },
      {
        id: 'loop-step-6',
        stepNumber: 6,
        label: 'DECISION HUB',
        subLabel: 'Product Prioritization',
        tech: '2x2 Priority Matrix & Radar',
        description: 'Sorts issues into Quick Wins, Major Projects, Fill-ins, and Deprioritized while tracking emerging surges and ARR at risk.',
      },
      {
        id: 'loop-step-7',
        stepNumber: 7,
        label: 'ACTION & REPORT',
        subLabel: 'Roadmap Execution',
        tech: 'Action Promotion & Markdown',
        description: 'One-click promotion converts high-severity insights into formal roadmap action items and exports custom executive reports in JSON/Markdown.',
      },
    ],
  },
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
        tech: 'CSV / JSON / ZIP archives',
        description: 'Accepts raw tabular files and business datasets up to 1M+ rows via drag-and-drop or HTTP multipart upload with async 202 response.',
      },
      {
        id: 'dl-step-2',
        stepNumber: 2,
        label: 'INGESTION',
        subLabel: 'Validation Layer',
        tech: 'FastAPI + Pydantic V2',
        description: 'Parses incoming data streams, normalizes Windows-1252 byte encodings to UTF-8, validates schemas, and checks null tolerances.',
      },
      {
        id: 'dl-step-3',
        stepNumber: 3,
        label: 'PROCESSING',
        subLabel: 'In-Memory Engine',
        tech: 'DuckDB + Python Pandas',
        description: 'Automates column type inference, statistical summaries, missing value imputation, and anomaly detection with in-memory DuckDB views.',
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
        tech: 'FastAPI + Groq LLM RAG',
        description: 'Translates natural language questions like "What drove Q3 margin decline?" into contextual DuckDB SQL-backed answers.',
      },
      {
        id: 'dl-step-7',
        stepNumber: 7,
        label: 'DASHBOARD',
        subLabel: 'Client Presentation',
        tech: 'Next.js 15 + Recharts',
        description: 'Renders reactive charts, downloadable summaries, metric cards, and interactive filtering dashboards across 30 verified routes.',
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
        tech: 'Next.js 16 + TypeScript',
        description: 'Manages optimistic UI state, document upload streaming, conversation history, and practice test generation.',
      },
      {
        id: 'ca-step-3',
        stepNumber: 3,
        label: 'FASTAPI',
        subLabel: 'API Microservice',
        tech: 'FastAPI + Python 3.13',
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
        description: 'Indexes dense embeddings with cosine similarity distance, returning the top-k most relevant academic passages in <45ms.',
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
        tech: 'Next.js 16 Dynamic Form',
        description: 'User enters employment history, technical competencies, education, and project achievements.',
      },
      {
        id: 'rb-step-2',
        stepNumber: 2,
        label: 'DOCUMENT PARSER',
        subLabel: 'Server-Safe unpdf',
        tech: 'unpdf + mammoth',
        description: 'Serverless-safe document extraction with zero canvas polyfill crashes and character-level anti-hallucination filter.',
      },
      {
        id: 'rb-step-3',
        stepNumber: 3,
        label: 'SECTION EXTRACTION',
        subLabel: 'Semantic Grouping',
        tech: 'Canonical Schema Reducer',
        description: 'Decomposes profile into modular sections: Summary, Experience, Projects, Skills, and Education.',
      },
      {
        id: 'rb-step-4',
        stepNumber: 4,
        label: 'STRUCTURED PROFILE',
        subLabel: 'Standard Schema',
        tech: 'MongoDB Atlas State',
        description: 'Single source of truth persistence in MongoDB with sanitized ID ingestion preventing CastErrors.',
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
        label: 'TEMPLATES',
        subLabel: '50 ATS Layouts',
        tech: 'Overleaf/LaTeX Typesetting',
        description: 'Applies clean, recruiter-approved typography across single-column, left-rail, executive, and compact layouts.',
      },
      {
        id: 'rb-step-7',
        stepNumber: 7,
        label: 'EXPORT',
        subLabel: 'Multi-Format Generation',
        tech: 'Print CSS & Native DOCX',
        description: 'Generates print-accurate vector PDF downloads and native Microsoft Word .docx documents matching canonical hierarchy.',
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

// Backwards-compatible aliases
PROJECT_ARCHITECTURE_FLOWS['bookstore-sql-analytics'] = PROJECT_ARCHITECTURE_FLOWS['bookstore-sql'];
PROJECT_ARCHITECTURE_FLOWS['loop-feedback-intelligence'] = PROJECT_ARCHITECTURE_FLOWS['loop-ai'];
