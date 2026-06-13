import { motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiFigma, SiGit, SiTailwindcss } from "react-icons/si";
import { skillBars } from "../data/skills.js";
import { revealUp, staggerContainer, viewport } from "../motion.js";

const tools = [
  ["React", FaReact],
  ["Node.js", FaNodeJs],
  ["Tailwind", SiTailwindcss],
  ["Git", SiGit],
  ["Figma", SiFigma],
];

export function Skills() {
  return (
    <section className="panel skills-panel" id="skills" aria-labelledby="skills-title">
      <div className="section-inner">
        <motion.span className="section-label" variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport}>
          / skills
        </motion.span>
        <motion.h2 className="section-title" id="skills-title" variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport}>
          My Skills
        </motion.h2>
        <motion.div className="skill-list" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          {skillBars.map((skill, index) => (
            <motion.div key={skill.name} variants={revealUp}>
              <div className="skill-head">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-track">
                <motion.div
                  className="skill-fill"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: skill.level / 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: index * 0.07 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="tool-strip"
          aria-label="Tools and technologies"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {tools.map(([label, Icon]) => (
            <motion.div className="tool-mini" key={label} variants={revealUp} whileHover={{ y: -6, scale: 1.06 }}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
