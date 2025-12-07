import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../data/projectsData.js";

const Projects = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-text-muted-light dark:text-text-muted-dark animate-fade-in-up a-delay-100">
            Real-world projects built while learning modern frontend development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            if (i > 5) return;
            return (
              <div
                key={p.id}
                className="group overflow-hidden rounded-xl card card-hover"
              >
                {/* Project Image */}
                <div className="h-52 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg">{p.title}</h3>
                    <FaCode className="w-5 h-5 text-primary" />
                  </div>

                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-4">
                    {p.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 justify-center">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <FaGithub className="w-4 h-4" /> Code
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:hidden gap-6">
          {projects.map((p, i) => {
            if (i > 2) return;
            return (
              <div
                key={p.id}
                className="group overflow-hidden rounded-xl card card-hover"
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg">{p.title}</h3>
                    <FaCode className="w-5 h-5 text-primary" />
                  </div>

                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-4">
                    {p.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 justify-center">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <FaGithub className="w-4 h-4" /> Code
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-all flex items-center justify-center gap-2 text-sm"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Projects Note */}
        {projects.length > 6 && (
          <div className="hidden md:block text-center mt-12 p-6 card max-w-md mx-auto">
            <p className="text-text-muted-light dark:text-text-muted-dark mb-3">
              More projects available on GitHub
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
            >
              View GitHub Profile
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          </div>
        )}

        {projects.length > 3 && (
          <div className="md:hidden text-center mt-12 p-6 card max-w-md mx-auto">
            <p className="text-text-muted-light dark:text-text-muted-dark mb-3">
              More projects available on GitHub
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
            >
              View GitHub Profile
              <FaExternalLinkAlt className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
export default Projects;
