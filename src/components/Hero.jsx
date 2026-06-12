import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiDribbble } from "react-icons/si";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: FaLinkedinIn },
  { label: "Dribbble", href: "https://dribbble.com/", icon: SiDribbble },
  { label: "Email", href: "mailto:youremail@example.com", icon: FiMail },
];

export function Hero() {
  return (
    <section className="panel hero-panel" aria-labelledby="hero-title">
      <div className="section-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="hero-kicker">Hi, I&apos;m</p>
          <h1 className="hero-title" id="hero-title">Your Name</h1>
          <p className="hero-role">Computer Science Student<br />&amp; Web Developer</p>
          <p className="hero-copy">
            I build modern web applications, software projects, and digital experiences
            with a focus on performance, usability, and clean design.
          </p>
          <div className="button-row">
            <a className="glow-button" href="#projects">View my work</a>
            <a className="glow-button secondary" href="/contact">Contact me</a>
            <a className="glow-button secondary" href="/resume.txt" download>
              <FiDownload aria-hidden="true" /> Resume
            </a>
          </div>
          <div className="social-row" aria-label="Social profiles">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                className="social-link"
                href={href}
                key={label}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
