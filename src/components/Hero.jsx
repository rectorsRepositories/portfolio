import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";
import { revealUp, staggerContainer } from "../motion.js";

const socialLinks = [
  { label: "Email Brayton Rector", href: "mailto:brector77777@gmail.com", icon: FiMail },
];

export function Hero() {
  return (
    <section className="panel hero-panel" aria-labelledby="hero-title">
      <div className="section-inner">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-kicker" variants={revealUp}>Hi, I&apos;m</motion.p>
          <motion.h1 className="hero-title" id="hero-title" variants={revealUp}>
            Brayton Rector
          </motion.h1>
          <motion.p className="hero-role" variants={revealUp}>
            Computer Science Student<br />&amp; Web Developer
          </motion.p>
          <motion.p className="hero-copy" variants={revealUp}>
            I build responsive interfaces and full-stack applications with a focus on
            performance, usability, and clean design.
          </motion.p>
          <motion.div className="button-row" variants={revealUp}>
            <a className="glow-button" href="#projects">View my work</a>
            <a className="glow-button secondary" href="/contact">Contact me</a>
            <a className="glow-button secondary" href="/resume.txt" download>
              <FiDownload aria-hidden="true" /> Resume
            </a>
          </motion.div>
          <motion.div className="social-row" aria-label="Social profiles" variants={revealUp}>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
