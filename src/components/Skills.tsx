"use client";

import { resumeData } from "@/data/resume";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      items: resumeData.skills.languages,
    },
    {
      title: "Frontend",
      items: resumeData.skills.frontend,
    },
    {
      title: "Backend",
      items: resumeData.skills.backend,
    },
    {
      title: "Databases & Caching",
      items: resumeData.skills.databases,
    },
    {
      title: "Cloud Platforms",
      items: resumeData.skills.cloud,
    },
    {
      title: "DevOps & CI/CD",
      items: resumeData.skills.devops,
    },
    {
      title: "Monitoring & Observability",
      items: resumeData.skills.monitoring,
    },
    {
      title: "Generative AI",
      items: resumeData.skills.ai,
    },
    {
      title: "Testing & Quality",
      items: resumeData.skills.testing,
    },
    {
      title: "Core Expertise",
      items: resumeData.skills.expertise,
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 border-t relative overflow-hidden"
      style={{ 
        backgroundColor: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border)',
        backgroundImage: `
          radial-gradient(circle at 80% 80%, rgba(37, 99, 235, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.05) 0%, transparent 40%)
        `,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-center tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
            Skills & Expertise
          </h2>
          <div className="h-1 w-16 mx-auto mt-6" style={{ background: 'var(--gradient-accent)' }}></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-lg p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ 
                backgroundColor: 'var(--color-bg-tertiary)',
                borderColor: 'var(--color-border-light)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(37, 99, 235, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-light)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
            >
              <h3 className="font-bold text-xs uppercase tracking-widest mb-6" style={{ color: 'var(--color-accent)' }}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-300 hover:scale-110"
                    style={{ 
                      backgroundColor: 'var(--color-bg-primary)',
                      color: 'var(--color-accent-light)',
                      borderColor: 'var(--color-border)',
                      boxShadow: '0 2px 8px rgba(37, 99, 235, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent)';
                      e.currentTarget.style.color = 'var(--color-accent-bright)';
                      e.currentTarget.style.boxShadow = '0 8px 16px rgba(37, 99, 235, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.color = 'var(--color-accent-light)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(37, 99, 235, 0.1)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
