import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React Basics",
  "Python",
  "Java",
  "Git",
  "GitHub",
  "SQL"
];

const projects = [
  {
    title: "Student Management System",
    description:
      "A simple application for managing student records and basic academic information.",
    technologies: "HTML • CSS • JavaScript"
  },
  {
    title: "Weather Forecast",
    description:
      "A responsive weather application that displays weather information in a simple and user-friendly interface.",
    technologies: "HTML • CSS • JavaScript • API"
  },
  {
    title: "Portfolio Website",
    description:
      "A personal responsive portfolio built using React basics, JavaScript and CSS.",
    technologies: "React • JavaScript • CSS"
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
    setMenuOpen(false);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      {/* Navigation */}
      <header>
        <nav className="navbar">

          <button
            className="logo"
            onClick={() => scrollToSection("home")}
          >
            <span>PS</span>
            Pihu Sethia
          </button>

          <div className={menuOpen ? "nav-links open" : "nav-links"}>
            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("about")}>
              About
            </button>

            <button onClick={() => scrollToSection("skills")}>
              Skills
            </button>

            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </div>

          <div className="nav-actions">

            <button
              className="theme-button"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

          </div>

        </nav>
      </header>

      {/* Hero Section */}
      <main>

        <section id="home" className="hero">

          <div className="hero-content">

            <p className="welcome">
              HELLO, I'M
            </p>

            <h1>
              Pihu <span>Sethia</span>
            </h1>

            <h2>
              B.Tech 3rd Year Student
            </h2>

            <p className="intro">
              I am a passionate engineering student with a strong
              interest in web development. I enjoy creating clean,
              responsive and user-friendly websites while continuously
              learning new technologies.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </button>

            </div>

          </div>

          <div className="profile-card">

            <div className="initials">
              PS
            </div>

            <h3>
              Web Development
            </h3>

            <p>
              HTML • CSS • JavaScript • React
            </p>

          </div>

        </section>

        {/* About */}
        <section id="about" className="section">

          <p className="section-label">
            01 — ABOUT ME
          </p>

          <h2>
            Engineering student with a developer mindset.
          </h2>

          <p className="section-description">
            I am currently pursuing B.Tech and exploring software
            and web development alongside my engineering studies.
            My current focus is strengthening my frontend fundamentals
            and building practical projects using HTML, CSS,
            JavaScript and React.
          </p>

        </section>

        {/* Skills */}
        <section id="skills" className="section">

          <p className="section-label">
            02 — SKILLS
          </p>

          <h2>
            Technologies I work with
          </h2>

          <div className="skills-grid">

            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>

                <span className="skill-number">
                  0{index + 1}
                </span>

                <span>
                  {skill}
                </span>

              </div>
            ))}

          </div>

        </section>

        {/* Projects */}
        <section id="projects" className="section">

          <p className="section-label">
            03 — PROJECTS
          </p>

          <h2>
            Some of my work
          </h2>

          <div className="projects-grid">

            {projects.map((project, index) => (

              <article
                className="project-card"
                key={project.title}
              >

                <span className="project-number">
                  0{index + 1}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <small>
                  {project.technologies}
                </small>

              </article>

            ))}

          </div>

        </section>

        {/* Contact */}
        <section id="contact" className="contact-section">

          <div className="section">

            <p className="section-label">
              04 — GET IN TOUCH
            </p>

            <h2>
              Let's connect.
            </h2>

            <p className="section-description">
              I am open to learning opportunities, internships
              and interesting development projects.
            </p>

            <div className="contact-links">

              <a href="mailto:pihu123@example.com">
                ✉
                <span>
                  Email
                  <br />
                  <b>pihu123@example.com</b>
                </span>
              </a>

              <a
                href="https://linkedin.com/in/pihusethia"
                target="_blank"
                rel="noreferrer"
              >
                in
                <span>
                  LinkedIn
                  <br />
                  <b>linkedin.com/in/pihusethia</b>
                </span>
              </a>

              <a
                href="https://github.com/pihusethia"
                target="_blank"
                rel="noreferrer"
              >
                Git
                <span>
                  GitHub
                  <br />
                  <b>github.com/pihusethia</b>
                </span>
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer>

        <div>
          <span>PS</span>
          Pihu Sethia
        </div>

        <small>
          Built with HTML • CSS • JavaScript • React
        </small>

      </footer>

    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(
  <App />
);
