import { experience } from "../data/experience.js";

export function Experience() {
  return (
    <section className="panel experience-panel" id="experience" aria-labelledby="experience-title">
      <div className="section-inner">
        <span className="section-label">/ experience</span>
        <h2 className="section-title" id="experience-title">Experience</h2>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.title}>
              <span className="timeline-dot" aria-hidden="true" />
              <time className="timeline-date">{item.date}</time>
              <h3 className="timeline-title">{item.title}</h3>
              <div className="timeline-company">{item.company}</div>
              <p className="timeline-copy">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
