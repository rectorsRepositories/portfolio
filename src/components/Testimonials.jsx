import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const focusAreas = [
  {
    quote: "Building responsive interfaces that remain clear, usable, and polished across screen sizes.",
    name: "Responsive Interfaces",
    role: "React, JavaScript, TypeScript, and Tailwind CSS",
  },
  {
    quote: "Developing full-stack applications with practical frontend, backend, and database technologies.",
    name: "Full-Stack Applications",
    role: "Node.js, Express, MongoDB, and MySQL",
  },
  {
    quote: "Prioritizing performance, usability, maintainable code, and clean visual design.",
    name: "Development Focus",
    role: "Performance, usability, and clean design",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setIndex((value) => (value + 1) % focusAreas.length),
      7000,
    );
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction) => {
    setIndex((value) => (value + direction + focusAreas.length) % focusAreas.length);
  };
  const focusArea = focusAreas[index];

  return (
    <section className="panel testimonials-panel" aria-labelledby="focus-title">
      <div className="section-inner">
        <div className="testimonial-content">
          <span className="section-label">/ focus</span>
          <h2 className="sr-only" id="focus-title">Professional Focus</h2>
          <span className="quote-mark" aria-hidden="true">&ldquo;</span>
          <AnimatePresence mode="wait">
            <motion.div
              key={focusArea.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24 }}
            >
              <p className="testimonial-quote">{focusArea.quote}</p>
              <div className="testimonial-name">{focusArea.name}</div>
              <div className="testimonial-role">{focusArea.role}</div>
            </motion.div>
          </AnimatePresence>
          <div className="slider-controls">
            <button className="slider-button" type="button" onClick={() => move(-1)} aria-label="Previous focus area">
              <FiChevronLeft />
            </button>
            <div className="slider-dots">
              {focusAreas.map((item, dotIndex) => (
                <button
                  className={`slider-dot ${dotIndex === index ? "active" : ""}`}
                  key={item.name}
                  type="button"
                  aria-label={`Show focus area ${dotIndex + 1}`}
                  onClick={() => setIndex(dotIndex)}
                />
              ))}
            </div>
            <button className="slider-button" type="button" onClick={() => move(1)} aria-label="Next focus area">
              <FiChevronRight />
            </button>
          </div>
        </div>
        <img className="testimonial-art" src="/assets/neon-bust.png" alt="" />
      </div>
    </section>
  );
}
