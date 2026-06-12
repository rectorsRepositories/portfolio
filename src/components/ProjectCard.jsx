import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <img className="project-image" src={project.image} alt="" />
        {project.github || project.demo ? (
          <div className="project-links">
            {project.github ? (
              <a
                className="project-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub aria-hidden="true" />
              </a>
            ) : null}
            {project.demo ? (
              <a
                className="project-link"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open live demo for ${project.title}`}
              >
                <FiExternalLink aria-hidden="true" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-copy">{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  );
}
