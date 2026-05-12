export default function Sidebar() {
  return (
    <aside className="hidden md:flex fixed top-0 right-0 h-screen w-56 border-l border-white/10 flex-col justify-between p-8 z-50 glass-panel">
      <div>
        <h1 className="font-serif text-2xl font-bold tracking-widest text-portfolio-red mb-12">
          NL.
        </h1>
        <nav className="flex flex-col gap-6 font-mono text-sm">
          <a href="#hero" className="hover:text-portfolio-red transition-colors duration-300">&gt; 01. HOME</a>
          <a href="#skills" className="hover:text-portfolio-red transition-colors duration-300">&gt; 02. SKILLS</a>
          <a href="#projects" className="hover:text-portfolio-red transition-colors duration-300">&gt; 03. PROJECTS</a>
          <a href="#contact" className="hover:text-portfolio-red transition-colors duration-300">&gt; 04. CONTACT</a>
        </nav>
      </div>
      <a href="#" className="self-start border border-portfolio-red/50 text-portfolio-red px-4 py-2 rounded-full font-mono text-xs hover:bg-portfolio-red hover:text-white transition-all">
        RESUME
      </a>
    </aside>
  );
}