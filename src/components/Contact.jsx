import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiDribbble } from "react-icons/si";

export function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("Thanks — your message is ready to send.");
    form.reset();
  };

  return (
    <section className="panel contact-panel" id="contact" aria-labelledby="contact-title">
      <div className="section-inner">
        <span className="section-label">/ contact</span>
        <div className="contact-layout">
          <div>
            <h2 className="section-title" id="contact-title">Let&apos;s Work Together</h2>
            <div className="contact-list">
              <a className="contact-item" href="mailto:youremail@example.com">
                <FiMail aria-hidden="true" /> youremail@example.com
              </a>
              <a className="contact-item" href="tel:+11234567890">
                <FiPhone aria-hidden="true" /> (123) 456-7890
              </a>
              <span className="contact-item"><FiMapPin aria-hidden="true" /> Your City, Country</span>
            </div>
            <div className="social-row">
              <a className="social-link" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a className="social-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a className="social-link" href="https://dribbble.com/" target="_blank" rel="noreferrer" aria-label="Dribbble"><SiDribbble /></a>
              <a className="social-link" href="mailto:youremail@example.com" aria-label="Email"><FiMail /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" aria-label="Name" required />
            <input name="email" type="email" placeholder="Email" aria-label="Email" required />
            <input className="field-wide" name="subject" placeholder="Subject" aria-label="Subject" required />
            <textarea className="field-wide" name="message" placeholder="Message" aria-label="Message" required />
            <button className="glow-button compact-button" type="submit">
              Send message <FiSend aria-hidden="true" />
            </button>
            <span className="form-status" role="status">{status}</span>
          </form>
        </div>
      </div>
    </section>
  );
}
