import { PiGraduationCap } from "react-icons/pi";

export function Education() {
  return (
    <section className="panel education-panel" id="education" aria-labelledby="education-title">
      <div className="section-inner">
        <span className="section-label">/ education</span>
        <article className="education-card">
          <div className="education-icon"><PiGraduationCap aria-hidden="true" /></div>
          <div>
            <h2 id="education-title">Bachelor of Science in Computer Science</h2>
            <div className="education-school">Southern New Hampshire University</div>
            <p className="education-meta">2023 - Present</p>
            <p className="education-copy">
              Pursuing a Bachelor of Science in Computer Science while developing
              practical web development and software engineering skills.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
