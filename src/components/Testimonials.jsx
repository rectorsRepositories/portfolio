import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    quote: "Working with Your Name was an amazing experience. The final website felt polished, clear, and far beyond our expectations.",
    name: "Client Name",
    role: "Founder, Creative Studio",
  },
  {
    quote: "They translated a complicated idea into an intuitive product and communicated every decision with clarity.",
    name: "Project Collaborator",
    role: "Product Designer",
  },
  {
    quote: "Reliable, thoughtful, and fast. The implementation was responsive, maintainable, and visually excellent.",
    name: "Team Lead",
    role: "Software Company",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setIndex((value) => (value + 1) % testimonials.length),
      7000,
    );
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction) => {
    setIndex((value) => (value + direction + testimonials.length) % testimonials.length);
  };
  const testimonial = testimonials[index];

  return (
    <section className="panel testimonials-panel" aria-labelledby="testimonials-title">
      <div className="section-inner">
        <div className="testimonial-content">
          <span className="section-label">/ testimonials</span>
          <h2 className="sr-only" id="testimonials-title">Testimonials</h2>
          <span className="quote-mark" aria-hidden="true">“</span>
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24 }}
            >
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-name">- {testimonial.name}</div>
              <div className="testimonial-role">{testimonial.role}</div>
            </motion.div>
          </AnimatePresence>
          <div className="slider-controls">
            <button className="slider-button" type="button" onClick={() => move(-1)} aria-label="Previous testimonial">
              <FiChevronLeft />
            </button>
            <div className="slider-dots">
              {testimonials.map((item, dotIndex) => (
                <button
                  className={`slider-dot ${dotIndex === index ? "active" : ""}`}
                  key={item.name}
                  type="button"
                  aria-label={`Show testimonial ${dotIndex + 1}`}
                  onClick={() => setIndex(dotIndex)}
                />
              ))}
            </div>
            <button className="slider-button" type="button" onClick={() => move(1)} aria-label="Next testimonial">
              <FiChevronRight />
            </button>
          </div>
        </div>
        <img className="testimonial-art" src="/assets/neon-bust.png" alt="" />
      </div>
    </section>
  );
}
