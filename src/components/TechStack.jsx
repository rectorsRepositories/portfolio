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
        <span className="section-label">/ tech stack</span>
        <h2 className="section-title" id="tech-title">Tech Stack</h2>
        <div className="tech-grid">
          {techGroups.map((group) => (
            <div className="tech-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tech-list">
                {group.items.map((item) => {
                  const Icon = iconMap[item] ?? FaDatabase;
                  return (
                    <div className="tech-item" key={item}>
                      <Icon aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
