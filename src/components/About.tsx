"use client";

import { resumeData } from "@/data/resume";

export const About = () => {
  return (
    <section
      id="about"
      className="py-24 border-t relative overflow-hidden"
      style={{ 
        backgroundColor: 'var(--color-bg-secondary)',
        borderColor: 'var(--color-border)',
        backgroundImage: `
          radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 10% 80%, rgba(37, 99, 235, 0.05) 0%, transparent 40%)
        `,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 
            className="text-5xl font-bold text-center tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            About Me
          </h2>
          <div className="h-1 w-16 mx-auto mt-6" style={{ background: 'var(--gradient-accent)' }}></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <p className="leading-relaxed text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              {resumeData.summary}
            </p>
            <div className="flex gap-3 flex-wrap pt-4">
              {["9+ Years", "Full Stack", "Cloud Expert", "AI Pioneer"].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'rgba(37, 99, 235, 0.15)',
                    color: 'var(--color-accent-bright)',
                    borderColor: 'rgba(37, 99, 235, 0.3)',
                    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.1)'
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div 
              className="p-6 rounded-lg border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" 
              style={{ 
                backgroundColor: 'var(--color-bg-tertiary)',
                borderColor: 'var(--color-border-light)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}
            >
              <h3 className="font-semibold mb-2 text-xs tracking-widest uppercase" style={{ color: 'var(--color-accent)' }}>Education</h3>
              {resumeData.education.map((edu) => (
                <div key={edu.degree}>
                  <p className="font-semibold text-sm" style={{ color: 'var(--color-text-primary)' }}>{edu.degree}</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{edu.institution}</p>
                  <p className="text-xs font-medium pt-1" style={{ color: 'var(--color-accent-light)' }}>{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
