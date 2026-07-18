import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const PROJECTS = [
  {
    category: "AI & ML",
    thumb: <img src="/images/empower_hr.png" alt="EmpowerHR" />,
    status: "graduation project · deployed",
    title: "EmpowerHR",
    desc: "A full-stack HR and recruitment platform with AI-powered CV ranking (Sentence-BERT + TF-IDF), XGBoost attrition prediction, role-based dashboards, and a mobile app — deployed on GCP.",
    stack: ["Django", "React", "Flutter", "PostgreSQL", "XGBoost", "NLP"],
    github: "https://github.com/mohamedalangr/EmpowerHR-GraduationProject",
    live: "https://empowerhr.xyz/",
  },
  {
    category: "AI & ML",
    thumb: <img src="/images/jobpulse_ai.png" alt="JobPulse AI" />,
    status: "full-stack ai product · deployed",
    title: "JobPulse AI",
    desc: "An advanced system for analyzing career opportunities, evaluating candidate market fit, and building intelligent learning roadmaps using semantic search and feature engineering. Dockerized stack with FastAPI, Streamlit, PostgreSQL, and Nginx.",
    stack: ["FastAPI", "Streamlit", "Docker", "PostgreSQL", "Nginx", "NLP"],
    github: "https://github.com/mohamedalangr/jobpulse-ai",
    live: "https://jobpulse-ai-xi.vercel.app",
  },
  {
    category: "AI & ML",
    thumb: <img src="/images/solar_grid_forecaster.png" alt="Solar Grid Forecaster" />,
    status: "time-series forecasting · deployed",
    title: "Solar Grid Forecaster",
    desc: "A production-grade analytics dashboard implementing Multi-Quantile Regression Gradient Boosting and SHAP Explainable AI to forecast industrial solar plant yields with uncertainty quantification and risk management.",
    stack: ["Python", "Gradient Boosting", "SHAP", "Streamlit", "XAI"],
    github: "https://github.com/mohamedalangr/solar-grid-forecaster",
    live: "https://solar-grid-forecaster.streamlit.app/",
  },
  {
    category: "AI & ML",
    thumb: <img src="/images/ai_cv_screening.png" alt="AI CV Screening" />,
    status: "nlp tool",
    title: "AI-Powered CV Screening",
    desc: "A Streamlit app that allows HR teams to upload multiple CVs (PDF/TXT) and a job description. The system automatically ranks candidates using TF-IDF vectorization and cosine similarity scoring.",
    stack: ["Python", "Streamlit", "TF-IDF", "NLP", "scikit-learn"],
    github: "https://github.com/mohamedalangr/ai-cv-screening",
  },
  {
    category: "Data Analytics",
    thumb: <img src="/images/ai_job_market.png" alt="AI Job Market Analytics" />,
    status: "data pipeline · analytics",
    title: "AI Job Market Analytics",
    desc: "End-to-end data analytics project — from dataset exploration and ER diagram design to PostgreSQL implementation, ETL pipeline development, and exploratory data analysis of the AI job market landscape.",
    stack: ["Python", "PostgreSQL", "ETL", "Pandas", "EDA"],
    github: "https://github.com/mohamedalangr/AI-Job-Market-Analytics",
  },
  {
    category: "AI & ML",
    thumb: <img src="/images/flyrank_ml.png" alt="Flyrank ML Internship" />,
    status: "ml internship",
    title: "Flyrank ML Internship",
    desc: "Applied machine learning to real-world SEO and content-ranking problems during an internship at FlyRank, building models to optimize search performance and content discoverability.",
    stack: ["Python", "Jupyter", "scikit-learn", "ML", "SEO"],
    github: "https://github.com/mohamedalangr/flyrank-ml-internship",
  },
];

const CATEGORIES = ["All", "AI & ML", "Data Analytics"];

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <section className="section" id="projects">
      <div className={`wrap reveal ${isVisible ? "reveal-visible" : ""}`} ref={ref}>
        <div className="section-head">
          <span className="eyebrow">// projects</span>
          <h2>Selected work.</h2>
          <p>Real projects — from AI-powered platforms to data pipelines and ML internships.</p>
        </div>

        <div className="project-filters" style={{ marginBottom: "32px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-list">
          {filteredProjects.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-thumb">{p.thumb}</div>
              <div>
                <div className="project-status">{p.status}</div>
                <h3>{p.title}</h3>
                <p className="desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "16px", marginTop: "16px", flexWrap: "wrap" }}>
                  <a
                    className="project-link"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub →
                  </a>
                  {p.live && (
                    <a
                      className="project-link"
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
