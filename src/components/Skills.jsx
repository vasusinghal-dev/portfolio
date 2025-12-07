import { useRef } from "react";
import { skills, specialties } from "../data/skillsData.js";
import useSkillsAnimation from "../hooks/useSkillsAnimation.js";

const Skills = () => {
  const skillRef = useRef();
  useSkillsAnimation(skillRef);

  return (
    <section ref={skillRef} className="section-padding -mb-20 md:mb-0">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
            Tools, technologies, and methodologies I leverage to build
            exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <div className="skill-grid grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4">
            {skills.map((s) => (
              <div key={s.name} className="group skill-card">
                <div className="card p-3 md:p-4 flex flex-col items-center justify-center gap-2 md:gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                  <div
                    className={`text-2xl md:text-3xl ${s.color} transition-all duration-300`}
                  >
                    <s.icon />
                  </div>
                  <span className="text-[11px] md:text-sm text-center font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                    {s.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialties Section */}
        <div className="hidden md:block">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2">
              Areas of <span className="text-secondary">Specialization</span>
            </h3>
            <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
              Focused expertise that drives project success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {specialties.map((sp) => (
              <div key={sp.title} className="group relative">
                {/* Subtle Gradient Border Effect */}
                <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="card p-6 h-full backdrop-blur-sm">
                  <div className="inline-flex p-3 rounded-xl bg-primary/5 dark:bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <sp.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{sp.title}</h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark mb-5">
                    {sp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {sp.tags.map((t) => (
                      <span
                        key={t}
                        className="text-sm font-medium px-3 py-1 bg-primary/20 rounded-full border-border-light/30 dark:border-border/30 transition-all duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
