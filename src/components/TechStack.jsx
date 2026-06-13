import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscCode, VscGithub } from "react-icons/vsc";
import { techGroups } from "../data/skills.js";
import { revealUp, staggerContainer, viewport } from "../motion.js";

const iconMap = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: FaReact,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  Python: FaPython,
  "C++": SiCplusplus,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  "Git & GitHub": FaGitAlt,
  "VS Code": VscCode,
  Linux: FaLinux,
  Database: FaDatabase,
  GitHub: VscGithub,
};

export function TechStack() {
  return (
    <section className="panel tech-panel" aria-labelledby="tech-title">
      <div className="section-inner">
        <motion.span className="section-label" variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport}>
          / tech stack
        </motion.span>
        <motion.h2 className="section-title" id="tech-title" variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport}>
          Tech Stack
        </motion.h2>
        <motion.div className="tech-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
          {techGroups.map((group) => (
            <motion.div className="tech-group" key={group.title} variants={revealUp}>
              <h3>{group.title}</h3>
              <div className="tech-list">
                {group.items.map((item) => {
                  const Icon = iconMap[item] ?? FaDatabase;
                  return (
                    <motion.div className="tech-item" key={item} whileHover={{ x: 6, color: "#ffffff" }}>
                      <Icon aria-hidden="true" />
                      <span>{item}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
