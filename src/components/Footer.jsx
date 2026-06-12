import { FiArrowUp } from "react-icons/fi";

export function Footer() {
  const isInnerPage = ["/contact", "/experience"].includes(window.location.pathname);

  return (
    <footer className="footer">
      <div className="footer-copy">
        <span className="brand" aria-hidden="true">&lt;B/<span>R&gt;</span></span>
        <span> © {new Date().getFullYear()} Your Name. All rights reserved.</span>
      </div>
      <nav className="footer-nav" aria-label="Footer navigation">
        <a href="/#home">Home</a>
        <a href="/#about">About</a>
        <a href="/experience#skills">Skills</a>
        <a href="/#projects">Projects</a>
        <a href="/experience">Experience</a>
        <a href="/contact">Contact</a>
      </nav>
      <a className="footer-top" href={isInnerPage ? "/" : "#home"} aria-label="Back to top"><FiArrowUp /></a>
    </footer>
  );
}
