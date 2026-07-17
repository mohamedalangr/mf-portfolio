import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";

const LINKS = [
  {
    label: "Email",
    value: "moalangr@gmail.com",
    href: "mailto:moalangr@gmail.com",
    icon: <Mail size={20} />,
  },
  {
    label: "LinkedIn",
    value: "mohamed-fathy-888694278",
    href: "https://linkedin.com/in/mohamed-fathy-888694278",
    icon: <FaLinkedin size={20} />,
  },
  {
    label: "GitHub",
    value: "mohamedalangr",
    href: "https://github.com/mohamedalangr",
    icon: <FaGithub size={20} />,
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section" id="contact">
      <div className={`wrap reveal ${isVisible ? "reveal-visible" : ""}`} ref={ref}>
        <div className="contact" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'flex-start' }}>
          
          <div className="contact-form-side">
            <span className="eyebrow" style={{ color: "#2fe0c9" }}>
              // contact
            </span>
            <h2 style={{ marginTop: 12 }}>Have a project in mind?</h2>
            <p style={{ marginTop: '16px', color: 'var(--slate-300)', lineHeight: 1.65, marginBottom: '32px' }}>
              Whether it's a dashboard, a model, or a full AI product — tell
              me what you're working on and I'll get back to you within a
              day or two.
            </p>

            <form action="https://formsubmit.co/moalangr@gmail.com" method="POST" className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="form-input" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="form-input" required placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" className="form-input" required placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>

          <div className="contact-links" style={{ alignSelf: 'center' }}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Connect with me</h3>
            {LINKS.map((l) => (
              <a
                className="contact-link"
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ color: 'var(--teal-300)' }}>{l.icon}</div>
                  <div>
                    <div className="label">{l.label}</div>
                    <div className="value" style={{ fontSize: '0.95rem' }}>{l.value}</div>
                  </div>
                </div>
                <span className="arrow">→</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
