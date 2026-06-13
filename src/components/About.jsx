import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { floatingImage, revealLeft, revealRight, revealUp, staggerContainer, viewport } from "../motion.js";

const stats = [
  ["React", "Frontend"],
  ["Node.js", "Backend"],
  ["SQL", "Database"],
  ["Git", "Workflow"],
];

export function About() {
  return (
    <section className="panel about-panel" id="about" aria-labelledby="about-title">
      <div className="section-inner">
        <span className="section-label">/ about</span>
        <div className="about-layout">
          <motion.div
            className="about-copy"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.h2 className="section-title" id="about-title" variants={revealLeft}>About Me</motion.h2>
            <motion.p variants={revealUp}>
              I&apos;m Brayton Rector, a computer science student and web developer
              based in Terre Haute, Indiana.
            </motion.p>
            <motion.p variants={revealUp}>
              I focus on responsive interfaces, full-stack applications, performance,
              usability, and clean design.
            </motion.p>
            <motion.a className="glow-button secondary compact-button" href="/resume.txt" download variants={revealUp}>
              Download resume <FiDownload aria-hidden="true" />
            </motion.a>
          </motion.div>
          <motion.div
            className="about-art-wrap"
            variants={revealRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.img
              className="about-art"
              src="/assets/neon-bust.png"
              alt="Neon-lit classical marble bust"
              animate={floatingImage}
            />
          </motion.div>
        </div>
        <motion.div
          className="stats-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {stats.map(([value, label]) => (
            <motion.div className="stat" key={label} variants={revealUp}>
              <strong>{value}</strong>
              <span>{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
