import data from "@/src/data/portfolio.json";

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-4">{data.about.title}</h2>
        </div>

        <div className="space-y-12">
          {data.about.sections.map((section, index) => (
            <div
              key={section.title}
              className="relative"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-1 h-24 bg-gradient-to-b from-primary/20 to-transparent" />
                <div>
                  <h3 className="text-xl font-light mb-3">{section.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
