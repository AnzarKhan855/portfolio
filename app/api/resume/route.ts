import { NextResponse } from 'next/server';

export async function GET() {
  const resumeContent = `================================================================================
                                ANZAR KHAN
           Full-Stack Developer | MERN Stack Developer | AI/ML Engineer
    Kanpur / Remote, India | Email: anzark964@gmail.com | Phone: +91-7705855855
                       GitHub: https://github.com/AnzarKhan855
                   LinkedIn: https://linkedin.com/in/AnzarKhan855
================================================================================

PROFESSIONAL SUMMARY
--------------------
High-impact Full-Stack Developer and AI/ML Engineer pursuing B.Tech in Artificial 
Intelligence & Machine Learning at Allenhouse Institute of Technology (2023-2027). 
Proven engineering track record architecting and deploying end-to-end production web platforms, 
high-throughput FastAPI and Node.js microservices, real-time MERN/Next.js applications, 
enterprise fraud decisioning meshes with Clean Architecture, DuckDB-powered analytics platforms, 
and multi-tenant Voice of Customer intelligence engines with 350+ automated tests passing. 
Committed to Clean Architecture, type safety, test automation, and measurable business impact.

PROFESSIONAL EXPERIENCE
-----------------------
Zidio Development | Web Developer Intern
September 2026 – Present | Remote
- Developing and maintaining frontend and backend features for web applications using React.js, Next.js, and Node.js.
- Building responsive, user-friendly interfaces and integrating RESTful APIs to enhance user engagement.
- Collaborating in Agile sprints, participating in peer code reviews, and maintaining technical documentation.
- Ensuring web performance, cross-browser compatibility, and code quality across production releases.

EDUCATION
---------
Allenhouse Institute of Technology, AKTU
Bachelor of Technology (B.Tech) in Artificial Intelligence & Machine Learning (2023 – 2027)
Coursework: Data Structures & Algorithms, Neural Networks, Deep Learning, Database Management 
Systems (RDBMS), Operating Systems, Computer Networks, Software Engineering.

TECHNICAL SKILLS
----------------
- Languages: Python, TypeScript, JavaScript (ES6+), SQL, C/C++, HTML5, CSS3
- Frontend: Next.js 14/15/16 (App Router), React 19, Tailwind CSS, Three.js / R3F, Framer Motion, Redux
- Backend: FastAPI, Node.js, Express.js, REST APIs, Microservices, JWT Auth, Bcrypt, WebSockets
- AI / Machine Learning: PyTorch, Scikit-Learn, XGBoost, SHAP / TreeSHAP, Groq API, Claude 3.5 Sonnet, 
  RAG Pipelines, Qdrant Vector DB, Hugging Face Embeddings, Prompt Engineering
- Databases: PostgreSQL, Neon PostgreSQL, Prisma ORM, DuckDB, MongoDB Atlas, Redis, Supabase, SQLite, Relational 3NF Design
- Data & Analytics: Pandas, NumPy, Data Profiling, Time-Series Forecasting, Recharts, Power BI
- DevOps & Tools: Git, GitHub, Docker, Postman, Playwright, Vercel, Render, Swagger / OpenAPI

SHIPPED PRODUCTION PLATFORMS (ENGINEERING EVOLUTION SEQUENCE)
-------------------------------------------------------------
01. AI Resume Builder — ATS Resume Intelligence & Forensic Document Parser
    GitHub: https://github.com/AnzarKhan855/resume-builder
    Live: https://ats-resumebuilder.vercel.app
    - Engineered ATS-compliant resume builder supporting 50 Overleaf ATS templates scoring 98/100 on ATS parsers.
    - Implemented server-safe unpdf parser eliminating canvas polyfill crashes and reducing serverless bundle by 78%.
    - Verified with 40+ automated unit and integration tests across Edge runtimes.

02. EvalMentor AI — AI Interview Agent & Evaluation Platform
    GitHub: https://github.com/AnzarKhan855/evalmentor-ai
    Live: https://evalmentor-ai.vercel.app
    - Developed full-stack technical interview preparation platform using Next.js 15, FastAPI, and MongoDB Atlas.
    - Built candidate resume parsing engine extracting technical skills to generate tailored interview questions.
    - Created multi-dimensional scoring rubric evaluating answers on correctness, depth, and clarity in <1.2s via Groq LPU.

03. CampusAgent AI — Agentic AI Student Productivity Platform
    GitHub: https://github.com/AnzarKhan855/campusagent-ai
    Live: https://campusagent-ai.vercel.app | Backend Docs: https://campusagent-ai-backend.onrender.com/docs
    - Shipped full-stack AI academic platform with 15+ production REST APIs covering subjects, deadlines, and notes.
    - Built end-to-end RAG pipeline using PyMuPDF, Hugging Face embeddings, and Qdrant vector database (<45ms search).
    - Designed automated practice test generator with instant Groq LLM response grading and radar analytics.

04. DecisionLens AI — Enterprise Decision Intelligence Platform [FLAGSHIP PROJECT]
    GitHub: https://github.com/AnzarKhan855/decisionlens-enterprise-analytics
    Live: https://decisionlens-enterprise-analytics.vercel.app | Backend Docs: https://decisionlens-enterprise-analytics.onrender.com/docs
    - Architected full-stack enterprise analytics platform ingesting 1M+ raw transactional records.
    - Integrated DuckDB in-memory analytical engine, automated column profiling, and predictive forecasting (94.8% accuracy).
    - Hardened with 30 verified API routes and 269 passing automated backend pytests (100% test pass rate).
    - Built conversational business AI Copilot grounded on live DuckDB telemetry and structured database schema.

05. BookStore SQL Analytics — 3NF Relational Database & Revenue Intelligence System
    GitHub: https://github.com/AnzarKhan855/BookStore-SQL-Analysis
    - Designed 3NF normalized PostgreSQL schema across Customers, Orders, Books, and Authors.
    - Executed 20+ analytical queries with CTEs and window functions (DENSE_RANK) to isolate customer lifetime value cohorts.
    - Delivered revenue breakdown dashboards uncovering high-margin product channels.

06. RiskShield AI — Enterprise Fraud Intelligence & Autonomous Decisioning Platform
    GitHub: https://github.com/AnzarKhan855/riskshield-ai
    Live: https://riskshield-ai-kappa.vercel.app
    - Engineered enterprise fraud decisioning platform featuring Clean Hexagonal Architecture across 17 REST endpoints.
    - Implemented Clean Architecture strictly decoupling Domain, Use Cases, Interfaces, and Infrastructure layers.
    - Built dual decisioning mesh evaluating visual AST-compiled rules alongside calibrated XGBoost ML ensemble.
    - Integrated TreeSHAP regulatory feature attribution for adverse action transparency (PCI-DSS & SOC2 compliance).

07. LOOP 2.0 — AI Customer Feedback Intelligence Platform [LATEST PRODUCTION SYSTEM]
    GitHub: https://github.com/AnzarKhan855/ai-customer-feedback-intelligence
    Live: https://ai-customer-feedback-intelligence-black.vercel.app
    - Architected multi-tenant Voice of Customer intelligence platform on Neon PostgreSQL and Prisma ORM.
    - Implemented dual NLP pipeline: aspect-based sentiment (ABSA), Plutchik-8 emotions, and deterministic 0–100 severity index.
    - Built Grounded Root Cause Explorer linking AI hypotheses to raw customer records with exact citations.
    - Verified with 79/79 passing automated tests across 15 enterprise operational modules.

AWARDS, RESEARCH & CERTIFICATIONS
---------------------------------
- Research Paper Presentation: "Multi-Mode Charging Architecture: Unified Power Bank & Charger" (2024)
- AKTU AI Tech Confluence Hackathon Participant & AI Innovator (2025)
- Data Structures & Algorithms Engineering Training, Allenhouse (2024)
- AI Tools and Modern Productivity Workflows, be10x Certification (2025)
================================================================================`;

  return new NextResponse(resumeContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'attachment; filename="Anzar_Khan_FullStack_AI_Resume.txt"',
    },
  });
}
