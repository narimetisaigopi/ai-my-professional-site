"use client";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: 'var(--color-bg-primary)',
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
        `,
      }}
    >
      {/* Animated gradient backdrop */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)',
          animation: 'float 6s ease-in-out infinite',
        }}
      ></div>
      <div
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10"
        style={{
          background: 'var(--gradient-accent)',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      ></div>
      <div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'var(--gradient-accent)',
          filter: 'blur(50px)',
          animation: 'float 10s ease-in-out infinite',
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6">
          <div className="space-y-4 animate-fade-in">
            <h1 
              className="text-6xl sm:text-8xl font-bold tracking-tighter leading-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Sai Gopi
              <br />
              <span style={{ background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Narimeti
              </span>
            </h1>
            <div className="h-1 w-24 mx-auto" style={{ background: 'var(--gradient-accent)' }}></div>
          </div>
          <p 
            className="text-xl sm:text-2xl font-semibold tracking-tight"
            style={{ color: 'var(--color-accent-light)' }}
          >
            Principal Software Engineer
          </p>
          <p 
            className="text-base sm:text-lg mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Architecting scalable full-stack solutions with 9+ years of expertise in Node.js, React, cloud infrastructure, and AI integration. Transforming complex problems into elegant, performant systems.
          </p>
          <div className="flex gap-6 justify-center flex-wrap pt-8">
            <a
              href="#experience"
              className="px-10 py-4 font-bold rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-2xl text-lg"
              style={{ 
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                color: '#ffffff',
                boxShadow: '0 15px 40px rgba(37, 99, 235, 0.4)',
                border: 'none'
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-10 py-4 font-bold rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 text-lg backdrop-blur-md"
              style={{ 
                borderWidth: '2px',
                borderColor: 'var(--color-accent-light)',
                color: '#ffffff',
                backgroundColor: 'rgba(37, 99, 235, 0.2)'
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
