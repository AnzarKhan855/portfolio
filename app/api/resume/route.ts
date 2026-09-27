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
Proven track record architecting and deploying end-to-end production web platforms, 
high-throughput FastAPI and Node.js microservices, real-time MERN/Next.js applications, 
intelligent fraud decisioning engines, and production RAG pipelines with vector databases. 
Committed to Clean Architecture, robust type safety, test automation, and measurable business impact.

EDUCATION
---------
Allenhouse Institute of Technology, AKTU
Bachelor of Technology (B.Tech) in Artificial Intelligence & Machine Learning (2023 – 2027)
Coursework: Data Structures & Algorithms, Neural Networks, Deep Learning, Database Management 
Systems (RDBMS), Operating Systems, Computer Networks, Software Engineering.

TECHNICAL SKILLS
----------------
- Languages: Python, TypeScript, JavaScript (ES6+), SQL, C/C++, HTML5, CSS3
- Frontend: Next.js 15 (App Router), React 19, Tailwind CSS, Three.js / R3F, Framer Motion, Redux
- Backend: FastAPI, Node.js, Express.js, REST APIs, Microservices, JWT Auth, Bcrypt, WebSockets
- AI / Machine Learning: PyTorch, Scikit-Learn, XGBoost, SHAP Explainability, Groq API, OpenAI API, 
  RAG Pipelines, Qdrant Vector DB, Hugging Face Embeddings, Prompt Engineering
- Databases: PostgreSQL, MongoDB Atlas, Redis, Supabase, SQLite, Relational 3NF Design
- Data & Analytics: Pandas, NumPy, Data Profiling, Time-Series Forecasting, Recharts, Power BI
- DevOps & Tools: Git, GitHub, Docker, Postman, Playwright, Vercel, Render, Swagger / OpenAPI

FLAGSHIP PRODUCTION PROJECTS
----------------------------
1. DecisionLens AI — Enterprise Decision Intelligence Platform
   GitHub: https://github.com/AnzarKhan855/decisionlens-enterprise-analytics
   Live: https://decisionlens-enterprise-analytics.vercel.app | API Docs: https://decisionlens-api.onrender.com/docs
   - Architected full-stack enterprise analytics platform ingesting 1M+ raw transactional records.
   - Built automated dataset domain detection and statistical column profiling engine using Pandas & FastAPI.
   - Designed predictive time-series revenue forecasting models (94.8% accuracy) and anomaly detection.
   - Integrated conversational business RAG AI Copilot powered by Groq LLMs and structured database telemetry.

2. RiskShield AI — Enterprise Fraud Intelligence & Autonomous Decisioning Platform
   GitHub: https://github.com/AnzarKhan855/riskshield-ai
   Live: https://riskshield-ai-kappa.vercel.app
   - Engineered enterprise fraud decisioning platform featuring Clean Architecture across 17 REST endpoints.
   - Implemented Clean Architecture strictly decoupling Domain, Use Cases, Interfaces, and Infrastructure.
   - Built dual decisioning mesh evaluating visual AST compiled rules alongside calibrated XGBoost ML ensemble.
   - Integrated TreeSHAP regulatory feature attribution for adverse action transparency (PCI-DSS & SOC2 compliance).

3. CampusAgent AI — Agentic AI Student Productivity Platform
   GitHub: https://github.com/AnzarKhan855/campusagent-ai
   Live: https://campusagent-ai.vercel.app | API Docs: https://campusagent-ai-backend.onrender.com/docs
   - Shipped full-stack AI academic platform with 15+ production REST APIs covering subjects, deadlines, and notes.
   - Built end-to-end RAG pipeline using PyMuPDF, Hugging Face embeddings, and Qdrant vector database (<45ms search).
   - Designed automated syllabus practice test generator with instant Groq LLM response grading and radar analytics.

4. EvalMentor AI — AI Interview Agent & Evaluation Platform
   GitHub: https://github.com/AnzarKhan855/evalmentor-ai
   Live: https://evalmentor-ai.vercel.app
   - Developed full-stack technical interview preparation platform using Next.js, FastAPI, and MongoDB Atlas.
   - Built candidate resume parsing engine extracting technical skills to generate tailored interview questions.
   - Created multi-dimensional scoring rubric evaluating answers on correctness, depth, and clarity in <1.2s.

5. AI Resume Builder — ATS-Friendly SaaS & Document Parsing Engine
   GitHub: https://github.com/AnzarKhan855/resume-builder
   Live: https://ats-resumebuilder.vercel.app
   - Built real-time ATS resume generator scoring 98/100 compliance on industry applicant tracking parsers.
   - Engineered reactive form state syncing, Supabase cloud persistence, Clerk authentication, and high-DPI PDF export.

6. BookStore SQL Analytics & Business Intelligence
   GitHub: https://github.com/AnzarKhan855/BookStore-SQL-Analysis
   - Designed 3NF normalized PostgreSQL schema and executed 20+ analytical queries using window functions and CTEs.
   - Isolated customer lifetime value, seasonal order spikes, and inventory churn metrics for executive review.

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
