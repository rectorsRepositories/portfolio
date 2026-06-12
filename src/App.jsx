import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { Experience } from "./components/Experience.jsx";
import { Education } from "./components/Education.jsx";
import { TechStack } from "./components/TechStack.jsx";
import { Testimonials } from "./components/Testimonials.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

export function App() {
  const path = window.location.pathname;
  const isContactPage = path === "/contact";
  const isExperiencePage = path === "/experience";

  return (
    <div className="site-shell">
      <Navbar />
      {isContactPage ? (
        <main className="portfolio-grid contact-page-main">
          <Contact />
          <Testimonials />
        </main>
      ) : isExperiencePage ? (
        <main className="portfolio-grid experience-page-main">
          <Experience />
          <Skills />
          <TechStack />
          <Education />
        </main>
      ) : (
        <main className="portfolio-grid" id="home">
          <Hero />
          <About />
          <Projects />
        </main>
      )}
      <Footer />
    </div>
  );
}
