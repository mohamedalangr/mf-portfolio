import { useRef } from "react";

export default function MagneticButton({ children, className, ...props }) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    btn.style.transform = "translate(0, 0)";
  };

  return (
    <span
      ref={btnRef}
      className={`magnetic-wrap ${className || ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block", transition: "transform 0.2s ease-out" }}
    >
      {typeof children === "string" ? (
        <span {...props}>{children}</span>
      ) : (
        children
      )}
    </span>
  );
}
