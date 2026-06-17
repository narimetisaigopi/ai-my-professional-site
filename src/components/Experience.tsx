"use client";

import { resumeData } from "@/data/resume";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t relative overflow-hidden" style={{ 
      backgroundColor: 'var(--color-bg-tertiary)',
      borderColor: 'var(--color-border)',
      backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.08) 0%, transparent 40%), radial-gradient(circle at 90% 20%, rgba(37, 99, 235, 0.05) 0%, transparent 40%)',
    }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-center tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
            Experience
          </h2>
          <div className="h-1 w-16 mx-auto mt-6" style={{ background: 'var(--gradient-accent)' }}></div>
        </div>
        <div className="space-y-6">
          {resumeData.experience.map((job, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ 
                backgroundColor: 'var(--color-bg-secondary)',
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
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--color-accent-light)' }}>
                    {job.role}
                  </h3>
                  <p className="text-base font-semibold" style={{ color: 'var(--color-text-secondary)' }}>{job.company}</p>
                </div>
                <span className="text-sm font-mono font-semibold px-3 py-1 rounded-md" style={{ color: 'var(--color-accent)', backgroundColor: 'rgba(37, 99, 235, 0.1)' }}>
                  {job.period}
                </span>
              </div>

              {job.projects.length > 0 && (
                <div className="mb-8 pb-6 border-b" style={{ borderColor: 'var(--color-border-light)' }}>
                  <h4 className="font-bold mb-4 text-xs uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
                    Projects
                  </h4>
                  <ul className="space-y-3">
                    {job.projects.map((proj) => (
                      <li key={proj.name} style={{ color: 'var(--color-text-secondary)' }} className="flex gap-3">
                        <span className="text-accent mt-1" style={{ color: 'var(--color-accent)' }}>▹</span>
                        <div>
                          <span className="font-semibold" style={{ color: 'var(--color-accent-bright)' }}>
                            {proj.name}
                          </span>
                          <p className="text-sm mt-1">{proj.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-8 pb-6 border-b" style={{ borderColor: 'var(--color-border-light)' }}>
                <h4 className="font-bold mb-4 text-xs uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ color: 'var(--color-text-secondary)' }}>
                      <span className="mt-1 flex-shrink-0" style={{ color: 'var(--color-accent)' }}>▹</span>
                      <span className="text-sm leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-xs uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-md text-xs font-semibold border transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: 'rgba(37, 99, 235, 0.1)',
                        color: 'var(--color-accent-light)',
                        borderColor: 'rgba(37, 99, 235, 0.3)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
