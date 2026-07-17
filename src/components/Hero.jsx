import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import NodeGraph from "./NodeGraph.jsx";
import { Download } from "lucide-react";
import MagneticButton from "./MagneticButton.jsx";

const PHRASES = [
  "I build the models, dashboards, and AI systems.",
  "I turn messy data into business insights.",
  "I ship full-stack AI products end-to-end.",
  "I make data tell a compelling story.",
];

function useTypewriter(phrases, typingSpeed = 60, deletingSpeed = 35, pauseMs = 2000) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length === current.length) {
          setTimeout(() => setIsDeleting(true), pauseMs);
          return;
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}

export default function Hero() {
  const typedText = useTypewriter(PHRASES);
  const heroRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        setOffset(window.scrollY * 0.5);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div style={{ transform: `translateY(${offset}px)`, position: "absolute", inset: 0 }}>
        <NodeGraph />
      </div>
      <div className="hero-inner">
        <div className="hero-status">
          <span className="blink" />
          available for new projects
        </div>
        <h1>
          Turning raw data into <span className="accent">decisions</span> —
          and ideas into working AI products.
        </h1>
        <p className="hero-sub typewriter-line">
          <span>{typedText}</span>
          <span className="typewriter-cursor">|</span>
        </p>
        <div className="hero-actions">
          <MagneticButton>
            <a href="#contact" className="btn-primary magnetic-glow">
              Start a project →
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="#projects" className="btn-ghost">
              View my work
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="/mohamed_fathy_cv.pdf" download className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 20px" }}>
              <Download size={18} /> Download CV
            </a>
          </MagneticButton>
        </div>

        <div className="hero-readout">
          <div className="readout-item">
            <div className="k">Focus</div>
            <div className="v">ML &amp; Data Analytics</div>
          </div>
          <div className="readout-item">
            <div className="k">Based in</div>
            <div className="v">Cairo, Egypt</div>
          </div>
          <div className="readout-item">
            <div className="k">Works with</div>
            <div className="v">Local &amp; International clients</div>
          </div>
          <div className="readout-item">
            <div className="k">Core stack</div>
            <div className="v">Python · scikit-learn · Power BI</div>
          </div>
        </div>
      </div>
    </section>
  );
}
