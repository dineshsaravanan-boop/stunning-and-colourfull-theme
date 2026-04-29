import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="heading-font font-black text-xl tracking-tight">
          <span className="gradient-text">Alex</span>
          <span className="text-white">.dev</span>
        </div>
        <p className="text-gray-600 text-sm">© 2025 Alex Rivera — Crafted with passion & precision.</p>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse block" />
          <span>Available for new projects</span>
        </div>
      </div>
    </footer>
  );
};