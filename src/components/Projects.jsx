import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const PROJECTS = [
  // ─── AI & ML ───
  {
    category: "AI & ML",
    thumb: <img src="/images/empower_hr.png" alt="EmpowerHR" />,
    status: "graduation project · deployed",
    title: "EmpowerHR",
    desc: "A full-stack HR and recruitment platform with AI-powered CV ranking (Sentence-BERT + TF-IDF), XGBoost attrition prediction, role-based dashboards for Candidates, Employees, HR Managers, and Admins — deployed on GCP with a React frontend and Flutter mobile app.",
    stack: ["Django", "React", "Flutter", "PostgreSQL", "XGBoost", "NLP"],
    github: "https://github.com/mohamedalangr/EmpowerHR-GraduationProject",
    live: "https://empowerhr.xyz/",
  },
  {
    category: "AI & ML",
    thumb: <img src="/images/jobpulse_ai.png" alt="JobPulse AI" />,
    status: "full-stack ai product · deployed",
    title: "JobPulse AI",
    desc: "An advanced system for analyzing career opportunities, evaluating candidate market fit, and building intelligent learning roadmaps using semantic search and feature engineering. Dockerized production stack with FastAPI, Streamlit, PostgreSQL, and Nginx reverse proxy.",
    stack: ["FastAPI", "Streamlit", "Docker", "PostgreSQL", "Nginx", "NLP"],
    github: "https://github.com/mohamedalangr/jobpulse-ai",
    live: "https://jobpulse-ai-xi.vercel.app",
  },
  {
    category: "AI & ML",
    thumb: <img src="/images/solar_grid_forecaster.png" alt="Solar Grid Forecaster" />,
    status: "time-series forecasting · deployed",
    title: "Solar Grid Forecaster",
    desc: "A production-grade analytics dashboard implementing Multi-Quantile Regression Gradient Boosting and SHAP Explainable AI (XAI) to forecast industrial solar plant yields with 90% confidence windows for uncertainty quantification and grid risk management.",
    stack: ["Python", "Gradient Boosting", "SHAP", "Streamlit", "XAI"],
    github: "https://github.com/mohamedalangr/solar-grid-forecaster",
    live: "https://solar-grid-forecaster.streamlit.app/",
  },
  {
    category: "AI & ML",
    thumb: <img src="/images/ai_cv_screening.png" alt="AI CV Screening" />,
    status: "nlp tool",
    title: "AI-Powered CV Screening",
    desc: "A Streamlit app that allows HR teams to upload multiple CVs (PDF/TXT) and a job description. The system automatically ranks candidates using TF-IDF vectorization and cosine similarity scoring for intelligent resume matching.",
    stack: ["Python", "Streamlit", "TF-IDF", "NLP", "scikit-learn"],
    github: "https://github.com/mohamedalangr/ai-cv-screening",
  },
  {
    category: "AI & ML",
    thumb: <img src="/images/heart_disease.png" alt="Heart Disease Prediction" />,
    status: "end-to-end ml pipeline",
    title: "Heart Disease Risk Prediction",
    desc: "A complete end-to-end ML pipeline to predict heart disease risk using the UCI dataset — includes data preprocessing, PCA, feature selection, supervised & unsupervised learning, hyperparameter tuning, and deployment with Streamlit + Ngrok.",
    stack: ["Python", "scikit-learn", "PCA", "Streamlit", "Ngrok"],
    github: "https://github.com/mohamedalangr/Heart_Disease_Project",
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
  {
    category: "AI & ML",
    thumb: <img src="/images/sleep_analysis.png" alt="Sleep Quality Analysis" />,
    status: "data science",
    title: "Sleep Quality Analysis",
    desc: "A data science project analyzing sleep quality patterns, disorders, and lifestyle factors affecting sleep health using statistical analysis and data visualization techniques.",
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/mohamedalangr/Sleep-Project",
  },
  {
    category: "AI & ML",
    thumb: <img src="/images/ai_cv_screening.png" alt="AI Project" />,
    status: "artificial intelligence",
    title: "AI Project",
    desc: "An artificial intelligence project implementing core AI algorithms and techniques including search strategies, optimization, and intelligent problem-solving approaches.",
    stack: ["Python", "AI Algorithms", "Search", "Optimization"],
    github: "https://github.com/mohamedalangr/AI-Project",
  },
  // ─── Data Analytics ───
  {
    category: "Data Analytics",
    thumb: <img src="/images/ai_job_market.png" alt="AI Job Market Analytics" />,
    status: "data pipeline · analytics",
    title: "AI Job Market Analytics",
    desc: "End-to-end data analytics project — from dataset exploration and ER diagram design to star schema normalization, PostgreSQL implementation, Python ETL pipeline development, and exploratory data analysis of the AI job market landscape.",
    stack: ["Python", "PostgreSQL", "ETL", "Pandas", "EDA"],
    github: "https://github.com/mohamedalangr/AI-Job-Market-Analytics",
  },
  {
    category: "Data Analytics",
    thumb: <img src="/images/hr_analytics.png" alt="HR Analytics Dashboard" />,
    status: "dashboard · analysis",
    title: "HR Analytics Dashboard",
    desc: "A comprehensive analysis of HR data to identify employee attrition drivers, with a full data preprocessing workflow in Jupyter and an interactive Streamlit dashboard featuring KPIs, charts, and actionable retention insights.",
    stack: ["Python", "Streamlit", "Pandas", "Jupyter", "EDA"],
    github: "https://github.com/mohamedalangr/HR_Analytics_Dashboard",
  },
  {
    category: "Data Analytics",
    thumb: <img src="/images/hotel_dashboard.png" alt="Hotel Booking Dashboard" />,
    status: "dashboard · deployed",
    title: "Hotel Booking Dashboard",
    desc: "A Streamlit dashboard for hotel managers to monitor booking patterns, cancellations, revenue, and guest behavior with interactive Plotly charts, filters by date/hotel/status, room mismatch monitoring, and data export capabilities.",
    stack: ["Python", "Streamlit", "Plotly", "Pandas"],
    github: "https://github.com/mohamedalangr/hotel_dashboard",
  },
  {
    category: "Data Analytics",
    thumb: <img src="/images/codealpha_analytics.png" alt="CodeAlpha Internship" />,
    status: "internship · 4 tasks",
    title: "CodeAlpha Data Analytics",
    desc: "Four end-to-end data analytics tasks completed during the CodeAlpha Internship: web scraping with BeautifulSoup, exploratory data analysis, data visualization with Matplotlib/Seaborn, and NLP sentiment analysis.",
    stack: ["Python", "BeautifulSoup", "Matplotlib", "Seaborn", "NLP"],
    github: "https://github.com/mohamedalangr/CodeAlpha_DataAnalytics_Tasks",
  },
  // ─── Software Development ───
  {
    category: "Software Dev",
    thumb: <img src="/images/flight_reservation.png" alt="Flight Reservation App" />,
    status: "desktop application",
    title: "Flight Reservation App",
    desc: "A desktop application for booking, viewing, updating, and deleting flight reservations with a multi-page GUI, SQLite database with full CRUD operations, and PyInstaller packaging for Windows executables.",
    stack: ["Python", "Tkinter", "SQLite", "PyInstaller"],
    github: "https://github.com/mohamedalangr/Flight-Reservation-App",
  },
  {
    category: "Software Dev",
    thumb: <img src="/images/food_ordering.png" alt="Food Ordering Website" />,
    status: "web application",
    title: "Food Ordering Website",
    desc: "A full-featured online food ordering web application built with ASP.NET, featuring a restaurant menu, cart system, order management, and user authentication.",
    stack: ["ASP.NET", "C#", "SQL Server", "HTML/CSS"],
    github: "https://github.com/mohamedalangr/OrderingFoodWebsite",
  },
  {
    category: "Software Dev",
    thumb: <img src="/images/tourism_db.png" alt="Tourism Database" />,
    status: "web application",
    title: "Tourism Database System",
    desc: "A tourism management web application built with ASP.NET for managing tourist destinations, bookings, and travel information with a structured database backend.",
    stack: ["ASP.NET", "C#", "SQL Server"],
    github: "https://github.com/mohamedalangr/TourismDB",
  },
  {
    category: "Software Dev",
    thumb: <img src="/images/flight_reservation.png" alt="Music Player" />,
    status: "desktop application",
    title: "Music Player Application",
    desc: "A feature-rich music player desktop application built in Java with playlist management, playback controls, and a clean GUI for browsing and playing audio files.",
    stack: ["Java", "Swing", "JavaFX"],
    github: "https://github.com/mohamedalangr/Music-Player-Application-JAVA-",
  },
];

const CATEGORIES = ["All", "AI & ML", "Data Analytics", "Software Dev"];

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
          <h2>All my work.</h2>
          <p>Every project I've built — from AI-powered platforms and data pipelines to full-stack web and desktop applications.</p>
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
