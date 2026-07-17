import { useScrollReveal } from "../hooks/useScrollReveal";


const TIMELINE = [
  {
    role: "ML Intern",
    org: "FlyRank",
    desc: "Applied machine learning to real SEO and content-ranking problems.",
  },
  {
    role: "Data Analyst",
    org: "AITB",
    desc: "Built reporting and analysis workflows to support business decisions.",
  },
  {
    role: "Intern",
    org: "CodeAlpha",
    desc: "Hands-on project work across data and software development tasks.",
  },
  {
    role: "B.Sc. Computer Science & IT",
    org: "Future University in Egypt (FUE)",
    desc: "Graduated from the Faculty of Computers and Information Technology.",
  },
];

function TimelineItem({ t }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div className={`timeline-item reveal ${isVisible ? "reveal-visible" : ""}`} ref={ref}>
      <div className="timeline-dot" />
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
      <div className={`wrap about-grid reveal ${isVisible ? "reveal-visible" : ""}`} ref={ref}>
        <div className="section-head">
          <span className="eyebrow">// about</span>
          <h2>Data-first, product-minded.</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I'm a <strong>Data Analyst and AI Engineer</strong> who likes
              working close to the whole pipeline — from cleaning a messy
              dataset, to training the model, to shipping the interface a
              client actually clicks on. That range comes from my graduation
              project, <strong>EmpowerHR</strong>, an AI-powered HR platform
              I built end-to-end: NLP-based CV ranking, attrition prediction,
              a full-stack web and mobile app, deployed on the cloud.
            </p>
            <p>
              I'm currently deepening that foundation through a structured
              ML/AI bootcamp, running two tracks in parallel: a{" "}
              <strong>Machine Learning</strong> track and a{" "}
              <strong>General AI Fluency</strong> track — while taking on
              freelance data, ML, and brand/document design work on the side.
            </p>
            <p>
              I work comfortably across Arabic and English contexts, and I'm
              equally at home presenting a dashboard to a business
              stakeholder as I am tuning a model in a notebook.
            </p>
          </div>
          <div className="timeline">
            {TIMELINE.map((t) => (
              <TimelineItem key={t.role} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
