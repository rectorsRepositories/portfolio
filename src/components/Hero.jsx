import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";

const socialLinks = [
  { label: "Email Brayton Rector", href: "mailto:brector77777@gmail.com", icon: FiMail },
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
          <h1 className="hero-title" id="hero-title">Brayton Rector</h1>
          <p className="hero-role">Computer Science Student<br />&amp; Web Developer</p>
          <p className="hero-copy">
            I build responsive interfaces and full-stack applications with a focus on
            performance, usability, and clean design.
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
