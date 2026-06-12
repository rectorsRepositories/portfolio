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
            <div className="education-school">University Name</div>
            <p className="education-meta">2023 - Present</p>
            <p className="education-copy">
              Relevant coursework: Data Structures, Algorithms, Web Development,
              Database Systems, Operating Systems, Software Engineering, and Computer Networks.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
