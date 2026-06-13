import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { revealLeft, revealRight, revealUp, staggerContainer, viewport } from "../motion.js";

export function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("Thanks - your message is ready to send.");
    form.reset();
  };

  return (
    <section className="panel contact-panel" id="contact" aria-labelledby="contact-title">
      <div className="section-inner">
        <motion.span className="section-label" variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport}>
          / contact
        </motion.span>
        <div className="contact-layout">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
            <motion.h2 className="section-title" id="contact-title" variants={revealLeft}>Let&apos;s Work Together</motion.h2>
            <motion.div className="contact-list" variants={revealUp}>
              <a className="contact-item" href="mailto:brector77777@gmail.com">
                <FiMail aria-hidden="true" /> brector77777@gmail.com
              </a>
              <span className="contact-item">
                <FiMapPin aria-hidden="true" /> Terre Haute, Indiana, USA
              </span>
            </motion.div>
            <motion.div className="social-row" variants={revealUp}>
              <a
                className="social-link"
                href="mailto:brector77777@gmail.com"
                aria-label="Email Brayton Rector"
              >
                <FiMail />
              </a>
            </motion.div>
          </motion.div>
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={revealRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <input name="name" placeholder="Name" aria-label="Name" required />
            <input name="email" type="email" placeholder="Email" aria-label="Email" required />
            <input className="field-wide" name="subject" placeholder="Subject" aria-label="Subject" required />
            <textarea className="field-wide" name="message" placeholder="Message" aria-label="Message" required />
            <button className="glow-button compact-button" type="submit">
              Send message <FiSend aria-hidden="true" />
            </button>
            <span className="form-status" role="status">{status}</span>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
