import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function CaseStudy() {
  const { id } = useParams();

  return (
    <section className="section" style={{ minHeight: "80vh", paddingTop: "120px" }}>
      <div className="wrap">
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--teal-500)", marginBottom: "32px", textDecoration: "none", fontWeight: 500 }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <span className="eyebrow">// case study</span>
        <h1 style={{ marginBottom: "16px", fontSize: "3rem", textTransform: "capitalize" }}>{id.replace(/-/g, ' ')}</h1>
        <div style={{ background: "var(--paper)", padding: "40px", borderRadius: "var(--radius)", border: "1px solid rgba(15, 23, 42, 0.08)" }}>
          <h2 style={{ marginBottom: "16px" }}>The Problem</h2>
          <p style={{ color: "var(--slate-300)", marginBottom: "32px", lineHeight: 1.7 }}>
            This section will detail the specific business problem that this project aimed to solve, 
            along with the data constraints and stakeholder requirements.
          </p>
          <h2 style={{ marginBottom: "16px" }}>The Architecture</h2>
          <p style={{ color: "var(--slate-300)", marginBottom: "32px", lineHeight: 1.7 }}>
            Here we'll place a mermaid diagram or architectural flowchart showing the data pipeline, model training process, and deployment structure.
          </p>
          <h2 style={{ marginBottom: "16px" }}>The Outcome</h2>
          <p style={{ color: "var(--slate-300)", lineHeight: 1.7 }}>
            Final metrics, business impact, and key learnings from the deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
