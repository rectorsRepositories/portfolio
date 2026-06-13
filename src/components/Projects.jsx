import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/projects.js";
import { revealUp, staggerContainer, viewport } from "../motion.js";
import { ProjectCard } from "./ProjectCard.jsx";

export function Projects() {
  const [expanded, setExpanded] = useState(false);
  const visibleProjects = expanded ? projects : projects.slice(0, 3);

  return (
    <section className="panel projects-panel" id="projects" aria-labelledby="projects-title">
      <div className="section-inner">
        <motion.span
          className="section-label"
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          / projects
        </motion.span>
        <motion.div
          className="section-heading-row"
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h2 className="section-title" id="projects-title">Featured Projects</h2>
          <button
            className="glow-button secondary compact-button"
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "Show featured" : "View all projects"}
          </button>
        </motion.div>
        <motion.div
          className="projects-grid"
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <AnimatePresence initial={false}>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                variants={revealUp}
                exit={{ opacity: 0, y: 12 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
