import React from 'react';

export default function Sidebar() {
  return (
    <aside className="fixed top-0 right-0 h-screen w-64 border-r border-white/10 flex flex-col justify-between p-8 z-50 glass-panel">
      <div>
        <h1 className="font-serif text-2xl font-bold tracking-widest text-portfolioRed mb-12">
          TK.
        </h1>
        <nav className="flex flex-col gap-6 font-mono text-sm">
          <a href="#hero" className="hover:text-portfolioRed transition-colors duration-300">&gt; 01. HOME</a>
          <a href="#projects" className="hover:text-portfolioRed transition-colors duration-300">&gt; 02. PROJECTS</a>
          <a href="#experience" className="hover:text-portfolioRed transition-colors duration-300">&gt; 03. EXPERIENCE</a>
          <a href="#about" className="hover:text-portfolioRed transition-colors duration-300">&gt; 04. ABOUT</a>
        </nav>
      </div>
      <div className="font-mono text-xs text-gray-500">
        <a href="#" className="border border-portfolioRed/50 text-portfolioRed px-4 py-2 rounded-full hover:bg-portfolioRed hover:text-white transition-all">
          RESUME
        </a>
      </div>
    </aside>
  );
}