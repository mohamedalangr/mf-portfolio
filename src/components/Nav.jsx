import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useActiveSection } from "../hooks/useActiveSection.js";

const SECTION_IDS = ["about", "projects", "contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const activeSection = useActiveSection(location.pathname === "/" ? SECTION_IDS : []);

  const closeNav = () => setOpen(false);

  const LINKS = [
    { href: "/#about", id: "about", label: "About" },
    { href: "/#projects", id: "projects", label: "Projects" },
  ];

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="/#top" className="nav-mark" onClick={closeNav}>
          <span className="dot" />
          Mohamed Fathy
        </a>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {LINKS.map((l) =>
            l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                onClick={closeNav}
                className={location.pathname === l.href ? "nav-active" : ""}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={closeNav}
                className={activeSection === l.id ? "nav-active" : ""}
              >
                {l.label}
              </a>
            )
          )}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a href="/#contact" className="nav-cta btn-primary nav-btn" onClick={closeNav} style={{ padding: "8px 16px", borderRadius: "4px", textDecoration: "none", fontSize: "0.9rem" }}>
            Contact
          </a>
          <button
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </div>
    </header>
  );
}
