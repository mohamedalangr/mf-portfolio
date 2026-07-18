import { useScrollReveal } from "../hooks/useScrollReveal";

const EXPERIENCE = [
  {
    role: "Machine Learning Intern",
    org: "FlyRank",
    desc: "Applied machine learning algorithms to solve real-world SEO and content-ranking challenges, optimizing search performance.",
    date: "2024",
  },
  {
    role: "Data Analyst",
    org: "AITB",
    desc: "Built comprehensive reporting workflows and data pipelines to support data-driven business decisions.",
    date: "2023",
  },
  {
    role: "Data Analytics Intern",
    org: "CodeAlpha",
    desc: "Executed end-to-end analytics tasks including web scraping, EDA, data visualization, and NLP sentiment analysis.",
    date: "2023",
  },
];

const EDUCATION = [
  {
    role: "B.Sc. Computer Science & IT",
    org: "Future University in Egypt (FUE)",
    desc: "Graduated from the Faculty of Computers and Information Technology. Developed 'EmpowerHR', an AI-powered HR platform, as a graduation project.",
    date: "Graduated",
  },
  {
    role: "ML & AI Fluency Bootcamp",
    org: "Ongoing",
    desc: "Deepening theoretical and practical foundations through structured tracks in Machine Learning and General AI.",
    date: "Current",
  },
];

const SKILLS = [
  {
    category: "AI & Machine Learning",
    items: ["Python", "Scikit-learn", "NLP (TF-IDF, BERT)", "XGBoost", "Predictive Modeling", "SHAP"],
  },
  {
    category: "Data Analytics & Engineering",
    items: ["PostgreSQL", "Pandas", "ETL Pipelines", "Data Visualization", "Matplotlib / Seaborn"],
  },
  {
    category: "Software Development",
    items: ["FastAPI", "Django", "React", "Streamlit", "Docker", "Git"],
  },
];

function TimelineItem({ t }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div className={`timeline-item reveal ${isVisible ? "reveal-visible" : ""}`} ref={ref}>
      <div className="timeline-dot" />
      <div className="timeline-date">{t.date}</div>
      <div className="role">{t.role}</div>
      <div className="org">{t.org}</div>
      <div className="desc">{t.desc}</div>
    </div>
  );
}

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section" id="about">
      <div className={`wrap reveal ${isVisible ? "reveal-visible" : ""}`} ref={ref}>
        <div className="section-head">
          <span className="eyebrow">// about</span>
          <h2>End-to-End AI Engineering.</h2>
        </div>
        
        <div className="about-grid-new">
          <div className="about-content">
            <div className="about-bio">
              <h3>My Approach</h3>
              <p>
                I am a <strong>Data Analyst and AI Engineer</strong> who bridges the gap between raw data and production-ready applications. I specialize in building complete, end-to-end pipelines — from cleaning messy datasets and engineering features, to training complex machine learning models, to deploying robust APIs and interactive dashboards.
              </p>
              <p>
                My work spans across classical ML (like predicting industrial solar yields with Gradient Boosting), NLP (building semantic search and resume ranking engines with Sentence-BERT and TF-IDF), and full-stack software development. Whether I'm building a FastAPI backend, containerizing an app with Docker, or presenting actionable insights to stakeholders, I focus on delivering scalable, product-minded solutions.
              </p>
            </div>

            <div className="about-skills">
              <h3>Core Stack</h3>
              <div className="skills-grid">
                {SKILLS.map((skillGroup) => (
                  <div key={skillGroup.category} className="skill-category">
                    <h4>{skillGroup.category}</h4>
                    <div className="skill-tags">
                      {skillGroup.items.map((item) => (
                        <span key={item} className="skill-tag">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-timelines">
            <div className="timeline-section">
              <h3>Experience</h3>
              <div className="timeline">
                {EXPERIENCE.map((t) => (
                  <TimelineItem key={t.role} t={t} />
                ))}
              </div>
            </div>
            
            <div className="timeline-section" style={{ marginTop: "3rem" }}>
              <h3>Education</h3>
              <div className="timeline">
                {EDUCATION.map((t) => (
                  <TimelineItem key={t.role} t={t} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
