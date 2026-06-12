import { motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiFigma, SiGit, SiTailwindcss } from "react-icons/si";
import { skillBars } from "../data/skills.js";

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
        <span className="section-label">/ skills</span>
        <h2 className="section-title" id="skills-title">My Skills</h2>
        <div className="skill-list">
          {skillBars.map((skill, index) => (
            <div key={skill.name}>
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
            </div>
          ))}
        </div>
        <div className="tool-strip" aria-label="Tools and technologies">
          {tools.map(([label, Icon]) => (
            <div className="tool-mini" key={label}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
