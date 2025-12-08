import { FaGraduationCap } from "react-icons/fa";
import { education, focusAreas, qualities } from "../data/aboutData.js";
import { useRef } from "react";
import useAboutAnimation from "../hooks/useAboutAnimation.js";

const About = () => {
  const aboutRef = useRef();
  useAboutAnimation(aboutRef);

  return (
    <section ref={aboutRef} className="section-padding -mb-5 md:mb-20">
      <div className="max-w-[1536px] mx-auto">
        {/* Section Header */}
        <div className="about-header text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
            Frontend developer focused on building fast, clean, and user-first
            web experiences.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="about-content">
            <div className="hidden md:block mb-8">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <div className="space-y-4 text-text-muted-light dark:text-text-muted-dark text-left lg:text-justify">
                <p>
                  I’m a frontend developer who discovered a deep interest in web
                  development during my academic journey. What started with
                  curiosity quickly turned into a passion for building clean,
                  responsive, and meaningful digital experiences.
                </p>

                <p>
                  I focus heavily on writing clean, maintainable code and
                  designing interfaces that feel intuitive, fast, and
                  purposeful. For me, good UI is not just about looks — it’s
                  about how effortlessly a user can move through a product.
                </p>

                <p>
                  Right now, I’m actively building real-world projects,
                  sharpening my frontend skills, and stepping into full-stack
                  development with a long-term goal of working on impactful
                  products.
                </p>
              </div>
            </div>

            {/* Qualities */}
            <div className=" about-qualities space-y-4">
              {qualities.map((q) => (
                <div
                  key={q.title}
                  className="flex items-start gap-4 p-4 card card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <q.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{q.title}</h4>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                      {q.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="about-education mb-8">
              <div className="flex items-center gap-3 mb-6">
                <FaGraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Academic Background</h3>
              </div>
              <div className="p-6 card card-hover">
                <div className="flex flex-col gap-3 md:flex-row justify-between mb-2">
                  <h4 className="font-bold text-lg">{education.degree}</h4>
                  <span className="max-w-[100px] text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-lg md:rounded-full ">
                    {education.year}
                  </span>
                </div>
                <p className="text-text-muted-light dark:text-text-muted-dark mb-3">
                  {education.school}
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">CGPA:</span>
                  <span className="text-primary">{education.gpa}</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block p-6 card card-hover">
              <h4 className="text-[16px] font-semibold mb-4">
                Currently Focused On
              </h4>
              <div className="space-y-3">
                {focusAreas.map(({ label, progress }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-text-muted-light dark:text-text-muted-dark">
                      {label}
                    </span>
                    <div className="w-24 h-2 bg-primary/30 rounded-full overflow-hidden">
                      <div
                        className={`about-progress h-full bg-primary rounded-full`}
                        data-width={`${progress}%`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
