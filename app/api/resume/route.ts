import { NextResponse } from 'next/server';

export async function GET() {
  const resumeContent = `================================================================================
                                ANZAR KHAN
       AI Engineer | Full Stack AI Developer | Machine Learning Engineer
              Kanpur / Remote, India | Email: anzarkhan.ai.dev@gmail.com
              GitHub: https://github.com/AnzarKhan855
              LinkedIn: https://linkedin.com/in/AnzarKhan855
================================================================================

SUMMARY
-------
Passionate AI Engineer and Enterprise Systems Developer currently pursuing B.Tech in 
Artificial Intelligence & Machine Learning at Allenhouse Institute of Technology. 
Experienced in architecting production-grade AI platforms, LLM RAG pipelines, FastAPI 
microservices, and scalable machine learning predictive models.

EDUCATION
---------
Allenhouse Institute of Technology
Bachelor of Technology (B.Tech) in Artificial Intelligence & Machine Learning (2023 - 2027)
- Specialized coursework in Neural Networks, Deep Learning, Relational Databases, System Design.

FLAGSHIP ENTERPRISE PROJECTS
----------------------------
1. DecisionLens AI — Enterprise Decision Intelligence Platform
   - Status: Currently under active development.
   - Built a scalable analytics engine utilizing FastAPI, Redis, Celery, and PostgreSQL.
   - Integrated XGBoost and Scikit-Learn time-series models for predictive revenue forecasting (94.8% accuracy).
   - Designed RAG-powered executive natural language copilot with Groq LLM & Qdrant vector database.

2. CampusAgent AI — AI-Driven Campus Assistant & RAG Intelligence System
   - Implemented high-performance vector search (Qdrant DB) for instant document & syllabus query resolution.
   - Integrated automated practice test generator & assignment deadline tracking.

3. EvalMentor AI — AI Interview Agent & Evaluation Platform
   - Developed full-stack application using Next.js, FastAPI, and MongoDB Atlas.
   - Built candidate resume parsing engine with Groq LLM scoring and feedback rubrics.

TECHNICAL SKILLS
----------------
- Languages: Python, TypeScript, JavaScript, SQL, C/C++, HTML5, CSS3
- AI / ML: PyTorch, Scikit-Learn, XGBoost, Groq API, OpenAI API, LangChain, Qdrant Vector DB, Pandas, NumPy
- Backend: FastAPI, Node.js, Express, PostgreSQL, Redis, Celery, MongoDB Atlas
- Frontend: Next.js, React, Tailwind CSS, Three.js, React Three Fiber, GSAP, Framer Motion
- DevOps & Tools: Git, GitHub, Docker, Power BI, Swagger UI, Vercel
================================================================================`;

  return new NextResponse(resumeContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'attachment; filename="Anzar_Khan_Resume.txt"',
    },
  });
}
