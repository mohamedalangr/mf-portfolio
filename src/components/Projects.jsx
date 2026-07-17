import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

const PROJECTS = [
  {
    category: "Machine Learning",
    thumb: <img src="/images/empower_hr.png" alt="EmpowerHR" />,
    status: "graduation project · deployed",
    title: "EmpowerHR",
    desc: "An AI-powered HR management platform for SMEs — NLP-based CV ranking with Sentence-BERT and TF-IDF, XGBoost attrition prediction, and a full web + mobile experience, deployed on GCP.",
    stack: ["Django", "FastAPI", "React", "Flutter", "PostgreSQL", "XGBoost"],
    link: "github.com/mohamedalangr/EmpowerHR",
  },
  {
    category: "Data Analysis",
    thumb: <img src="/images/ibm_attrition.png" alt="IBM Employee Attrition Analysis" />,
    status: "case study",
    title: "IBM Employee Attrition Analysis",
    desc: "A full analysis of employee attrition drivers, delivered as an interactive Power BI dashboard and a bilingual (Arabic/English) presentation for stakeholders.",
    stack: ["Power BI", "Python", "Pandas"],
    link: "github.com/mohamedalangr/IBM-Employee-Attrition-Analysis",
  },
  {
    category: "Machine Learning",
    thumb: <img src="/images/google_search.png" alt="Google Search Ranking & Discoverability" />,
    status: "ml bootcamp capstone",
    title: "Google Search Ranking & Discoverability",
    desc: "A machine learning capstone modeling the signals behind search ranking and discoverability, built on a DuckDB + scikit-learn pipeline.",
    stack: ["DuckDB", "scikit-learn", "Hugging Face"],
    link: "github.com/mohamedalangr/Google-Search-Ranking",
  },
  {
    category: "Design",
    thumb: <img src="/images/alsaqr_mashawi.png" alt="Al-Saqr Mashawi Brand System" />,
    status: "brand identity",
    title: "Al-Saqr Mashawi Brand System",
    desc: "A complete Arabic-language brand identity for a grilled-meats restaurant — logo system, print collateral, and a full bilingual brand PDF.",
    stack: ["ReportLab", "Arabic Typography"],
    link: "github.com/mohamedalangr/Al-Saqr-Mashawi",
  },
];

const CATEGORIES = ["All", "Machine Learning", "Data Analysis", "Design"];

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
          <p>A few projects that show the range — from ML pipelines to full products to brand systems.</p>
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
                <Link
                  className="project-link"
                  to={`/project/${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
