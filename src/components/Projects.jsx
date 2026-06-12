import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/projects.js";
import { ProjectCard } from "./ProjectCard.jsx";

export function Projects() {
  const [expanded, setExpanded] = useState(false);
  const visibleProjects = expanded ? projects : projects.slice(0, 3);

  return (
    <section className="panel projects-panel" id="projects" aria-labelledby="projects-title">
      <div className="section-inner">
        <span className="section-label">/ projects</span>
        <div className="section-heading-row">
          <h2 className="section-title" id="projects-title">Featured Projects</h2>
          <button
            className="glow-button secondary compact-button"
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "Show featured" : "View all projects"}
          </button>
        </div>
        <motion.div className="projects-grid" layout>
          <AnimatePresence initial={false}>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
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
