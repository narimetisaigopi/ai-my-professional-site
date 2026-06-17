"use client";

export const Header = () => {
  return (
    <header 
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-300"
      style={{ 
        backgroundColor: 'rgba(3, 7, 18, 0.9)',
        borderColor: 'var(--color-border)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-bold tracking-tight hover:scale-105 transition-transform duration-300"
          style={{ 
            background: 'var(--gradient-accent)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          SGN
        </a>
        <ul className="hidden md:flex gap-8">
          {["home", "about", "experience", "skills", "contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="capitalize text-sm font-medium tracking-tight transition-all duration-300 relative group"
                  style={{ color: 'var(--color-text-secondary)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-accent-bright)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                  }}
                >
                  {item}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  ></span>
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};
