import { motion } from "framer-motion";
import { PiGraduationCap } from "react-icons/pi";
import { revealUp, viewport } from "../motion.js";

export function Education() {
  return (
    <section className="panel education-panel" id="education" aria-labelledby="education-title">
      <div className="section-inner">
        <motion.span className="section-label" variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport}>
          / education
        </motion.span>
        <motion.article
          className="education-card"
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          whileHover={{ y: -8, boxShadow: "0 24px 70px rgba(255, 44, 168, 0.14)" }}
        >
          <motion.div
            className="education-icon"
            animate={{ rotate: [0, -4, 4, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <PiGraduationCap aria-hidden="true" />
          </motion.div>
          <div>
            <h2 id="education-title">Bachelor of Science in Computer Science</h2>
            <div className="education-school">Southern New Hampshire University</div>
            <p className="education-meta">2023 - Present</p>
            <p className="education-copy">
              Pursuing a Bachelor of Science in Computer Science while developing
              practical web development and software engineering skills.
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
