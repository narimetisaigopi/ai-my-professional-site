"use client";

export const Footer = () => {
  return (
    <footer 
      className="border-t py-12"
      style={{ 
        backgroundColor: 'var(--color-bg-primary)',
        borderColor: 'var(--color-border)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <p className="text-sm font-medium" style={{ color: 'var(--color-accent-light)' }}>
          &copy; 2025 Sai Gopi Narimeti. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
          Built with Next.js 16, TypeScript, Tailwind CSS, and modern web standards
        </p>
      </div>
    </footer>
  );
};
