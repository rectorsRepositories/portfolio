import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const stats = [
  ["2+", "Years of Experience"],
  ["15+", "Projects Completed"],
  ["12+", "Technologies"],
  ["100%", "Commitment"],
];

export function About() {
  return (
    <section className="panel about-panel" id="about" aria-labelledby="about-title">
      <div className="section-inner">
        <span className="section-label">/ about</span>
        <div className="about-layout">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <h2 className="section-title" id="about-title">About Me</h2>
            <p>
              I&apos;m a computer science student and web developer who enjoys turning
              ideas into real, usable digital experiences.
            </p>
            <p>
              I care about thoughtful problem solving, learning new technologies,
              and building work that makes a clear impact.
            </p>
            <a className="glow-button secondary compact-button" href="/resume.txt" download>
              Download resume <FiDownload aria-hidden="true" />
            </a>
          </motion.div>
          <img className="about-art" src="/assets/neon-bust.png" alt="Neon-lit classical marble bust" />
        </div>
        <div className="stats-grid">
          {stats.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
