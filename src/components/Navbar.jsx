import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

const homeLinks = ["home", "about", "projects"];

export function Navbar() {
  const path = window.location.pathname;
  const pageActive = path === "/contact" ? "contact" : path === "/experience" ? "experience" : null;
  const [active, setActive] = useState(pageActive ?? "home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pageActive) {
      setActive(pageActive);
      return undefined;
    }

    const sections = homeLinks
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.05, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pageActive]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="nav-shell">
      <nav className="nav-inner" aria-label="Primary navigation">
        <a className="brand" href="/#home" aria-label="Go to home" onClick={closeMenu}>
          &lt;B/<span>R&gt;</span>
        </a>
        <div className="desktop-nav">
          {homeLinks.map((link) => (
            <a
              className={`nav-link ${active === link ? "active" : ""}`}
              href={`/#${link}`}
              key={link}
            >
              {link}
            </a>
          ))}
          <a className={`nav-link ${active === "experience" ? "active" : ""}`} href="/experience">
            experience
          </a>
          <a className={`nav-link ${active === "contact" ? "active" : ""}`} href="/contact">
            contact
          </a>
        </div>
        <a className="glow-button secondary nav-resume" href="/resume.txt" download>
          Resume <FiDownload aria-hidden="true" />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      {open ? (
        <div className="mobile-menu">
          {homeLinks.map((link) => (
            <a href={`/#${link}`} key={link} onClick={closeMenu}>
              {link}
            </a>
          ))}
          <a href="/experience" onClick={closeMenu}>experience</a>
          <a href="/contact" onClick={closeMenu}>contact</a>
          <a href="/resume.txt" download onClick={closeMenu}>
            Download resume
          </a>
        </div>
      ) : null}
    </header>
  );
}
