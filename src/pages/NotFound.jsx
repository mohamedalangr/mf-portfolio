import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      <div className="wrap">
        <h1 style={{ fontSize: "6rem", color: "var(--teal-300)" }}>404</h1>
        <h2>Data Not Found.</h2>
        <p style={{ color: "var(--slate-300)", marginBottom: "32px", maxWidth: "400px", margin: "0 auto 32px" }}>
          The model predicts you are lost. The page you are looking for does not exist in this dataset.
        </p>
        <Link to="/" className="btn-primary">
          Return to Dashboard
        </Link>
      </div>
    </section>
  );
}
