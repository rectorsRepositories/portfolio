import { motion } from "framer-motion";
import { experience } from "../data/experience.js";
import { revealLeft, revealUp, staggerContainer, viewport } from "../motion.js";

export function Experience() {
  return (
    <section className="panel experience-panel" id="experience" aria-labelledby="experience-title">
      <div className="section-inner">
        <motion.span className="section-label" variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport}>
          / experience
        </motion.span>
        <motion.h2 className="section-title" id="experience-title" variants={revealLeft} initial="hidden" whileInView="visible" viewport={viewport}>
          Experience
        </motion.h2>
        <motion.div className="timeline" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          {experience.map((item) => (
            <motion.article className="timeline-item" key={item.title} variants={revealUp}>
              <span className="timeline-dot" aria-hidden="true" />
              <time className="timeline-date">{item.date}</time>
              <h3 className="timeline-title">{item.title}</h3>
              <div className="timeline-company">{item.company}</div>
              <p className="timeline-copy">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
