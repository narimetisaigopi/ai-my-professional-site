"use client";

import { resumeData } from "@/data/resume";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 border-t relative overflow-hidden"
      style={{ 
        backgroundColor: 'var(--color-bg-tertiary)',
        borderColor: 'var(--color-border)',
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.08) 0%, transparent 40%)
        `,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-center tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
            Get In Touch
          </h2>
          <div className="h-1 w-16 mx-auto mt-6" style={{ background: 'var(--gradient-accent)' }}></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <a
            href={`mailto:${resumeData.personal.email}`}
            className="border rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            style={{ 
              backgroundColor: 'var(--color-bg-secondary)',
              borderColor: 'var(--color-border-light)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(37, 99, 235, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-light)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            }}
          >
            <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-125">
              ✉️
            </div>
            <h3 className="font-bold mb-3 text-xs uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>Email</h3>
            <p className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>{resumeData.personal.email}</p>
          </a>

          <a
            href={`tel:${resumeData.personal.phone}`}
            className="border rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            style={{ 
              backgroundColor: 'var(--color-bg-secondary)',
              borderColor: 'var(--color-border-light)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(37, 99, 235, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-light)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            }}
          >
            <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-125">
              📱
            </div>
            <h3 className="font-bold mb-3 text-xs uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>Phone</h3>
            <p className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>{resumeData.personal.phone}</p>
          </a>

          <div 
            className="border rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            style={{ 
              backgroundColor: 'var(--color-bg-secondary)',
              borderColor: 'var(--color-border-light)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(37, 99, 235, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-light)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            }}
          >
            <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-125">
              📍
            </div>
            <h3 className="font-bold mb-3 text-xs uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>Location</h3>
            <p className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>{resumeData.personal.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
