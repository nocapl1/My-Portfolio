"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

// --- PROJECTS DATA ---
const projects = [
  {
    id: 'quantum',
    title: 'QUANTUM FLUX',
    type: 'FILE: QUANTUM.md',
    letter: 'Q',
    shortDesc: 'High-performance React architecture built for scale. Fluid motion interactions and real-time state synchronization.',
    longDesc: 'Quantum Flux is a next-generation web application focusing on real-time state synchronization and fluid motion interactions. It handles massive data throughput while maintaining a flawless 60fps animation pipeline using heavily optimized React rendering and custom WebGL shaders.',
    tech: ['NEXT.JS', 'TYPESCRIPT', 'FRAMER'],
    github: 'https://github.com/nicoleliang/quantum-flux'
  },
  {
    id: 'aetherius',
    title: 'AETHERIUS UI',
    type: 'FILE: AETHERIUS.md',
    letter: 'A',
    shortDesc: 'Minimalist component library focused on precise typography, accessibility, and cinematic styling.',
    longDesc: 'A strictly typed, highly accessible React component library designed for cinematic web experiences. Features custom hooks for scroll animations, physics-based interactions, and a fully customizable design token system built on top of Tailwind CSS.',
    tech: ['REACT', 'TAILWIND', 'STORYBOOK'],
    github: 'https://github.com/nicoleliang/aetherius-ui'
  }
];

// --- FERRIS WHEEL PANELS ---
const techPanels = [
  { label: "TYPESCRIPT" },
  { label: "REACT" },
  { label: "NEXT.JS" },
  { label: "TAILWIND CSS" },
  { label: "SPRING BOOT" },
  { label: "PYTHON" },
  { label: "JAVA" },
  { label: "C++" },
];

export default function Home() {
  const premiumEase = [0.16, 1, 0.3, 1];
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);

  // --- DYNAMIC BACKGROUND INTERACTION ---
  const springConfig = { damping: 40, stiffness: 100, mass: 1 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (activeProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [activeProject]);

  const nameText = "NICOLE LIANG";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
  };
  const letterVariants = {
    hidden: { opacity: 0, x: -20, filter: "blur(5px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { ease: premiumEase, duration: 0.5 } }
  };

  return (
    <>
      <div className="p-8 md:p-16 max-w-7xl mx-auto flex flex-col relative z-10 overflow-hidden">
        
        {/* --- DYNAMIC BACKGROUND WITH SOFT GRID --- */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[#050505]" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
          
          <div className="absolute inset-0 opacity-[0.2] mix-blend-color-burn" style={{ background: 'radial-gradient(circle at 10% 10%, #FFB6C1 0%, transparent 20%), radial-gradient(circle at 90% 90%, #87CEFA 0%, transparent 20%), radial-gradient(circle, rgba(229, 57, 53, 0.15) 0%, rgba(229, 57, 53, 0.05) 30%, transparent 70%)' }}></div>
          <motion.div 
            className="w-[1000px] h-[1000px] pointer-events-none rounded-full"
            style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%", background: "radial-gradient(circle, rgba(229, 57, 53, 0.15) 0%, rgba(229, 57, 53, 0.02) 40%, transparent 70%)" }}
          />
        </div>

        {/* --- 1. HERO SECTION --- */}
        <section id="hero" className="flex flex-col justify-start items-center relative pt-8 pb-12 min-h-[90vh] text-center w-full">
          
          {/* Top Left Title */}
          <div className="absolute top-8 left-8 z-30 flex flex-col items-start text-left">
            <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: premiumEase }} className="font-serif italic text-white/80 text-xl md:text-2xl tracking-wide">
              Computer Science.
            </motion.span>
            <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.1, ease: premiumEase }} className="font-serif text-lg md:text-xl tracking-widest text-white font-bold uppercase mt-1">
              PORTFOLIO
            </motion.h2>
          </div>

          {/* Top Right EST Badge */}
          <div className="absolute top-8 right-8 z-30 hidden md:block">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: premiumEase }} className="border border-white/20 rounded-lg px-4 py-1.5 font-mono text-[10px] tracking-widest text-white/70 bg-black/40 backdrop-blur-md cursor-default">
                EST. 2025
            </motion.div>
          </div>
          
          {/* 3D Hand */}
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] md:h-[600px] z-10 pointer-events-none flex items-center justify-center">
            <img 
              src="/hand.png" 
              alt="Cybernetic Hand" 
              className="absolute h-[350px] md:h-[550px] object-contain opacity-90 mix-blend-screen drop-shadow-[0_0_80px_rgba(229,57,53,0.3)] z-10" 
            />
          </div>

          {/* FERRIS WHEEL */}
          <motion.div 
            className="absolute top-[55%] left-1/2 w-[240px] md:w-[440px] h-[240px] md:h-[440px] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {techPanels.map((panel, i) => {
              const angle = (i / techPanels.length) * Math.PI * 2;
              const x = 50 + 50 * Math.cos(angle);
              const y = 50 + 50 * Math.sin(angle);
              
              return (
                <div 
                  key={panel.label}
                  className="absolute"
                  style={{ top: `${y}%`, left: `${x}%`, transform: 'translate(-50%, -50%)' }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    className="flex items-center gap-2 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/20 border-b-[2px] border-b-portfolioRed px-5 py-2.5 rounded-full font-mono text-[10px] md:text-xs text-white shadow-[0_10px_20px_rgba(229,57,53,0.7)] whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-portfolioRed animate-pulse"></span>
                    {panel.label}
                  </motion.div>
                </div>
              )
            })}
          </motion.div>

          {/* DYNAMIC & READABLE CENTERED NAME */}
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full flex justify-center items-center mt-8">
            
            {/* Contrast Shield: A soft blur behind the text to dim the hand slightly and boost readability */}
            <div className="absolute w-[80%] max-w-[800px] h-[100px] bg-black/60 blur-[40px] rounded-full pointer-events-none -z-10"></div>

            <motion.h1 variants={containerVariants} initial="hidden" animate="visible" className="font-serif text-[clamp(3rem,8vw,9rem)] font-bold tracking-tighter leading-none text-white cursor-default flex flex-row flex-nowrap whitespace-nowrap overflow-visible justify-center text-center w-full">
              {nameText.split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants}
                  // Interactive Wave Hover
                  whileHover={{ 
                      y: -15, 
                      scale: 1.05, 
                      color: "#e53935", 
                      textShadow: "0px 15px 30px rgba(229,57,53,0.8)" 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  // Built-in deep shadow for baseline readability
                  className="inline-block relative z-10 drop-shadow-[0_10px_15px_rgba(0,0,0,1)] transition-colors duration-300"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </section>

        {/* --- 2. CLEAN MARQUEE --- */}
        <div className="w-[100vw] ml-[calc(-50vw+50%)] border-y border-white/10 bg-[#0a0a0a] py-3 overflow-hidden relative z-10 mt-12 mb-20">
            <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 25 }} className="flex whitespace-nowrap font-mono text-xs md:text-sm tracking-[0.2em] text-white/80 w-max">
                <div className="flex shrink-0 items-center">
                  <span className="mx-6">CREATIVE DEVELOPER</span> <span className="text-white/40">◆</span>
                  <span className="mx-6">FRONTEND ENGINEER</span> <span className="text-white/40">◆</span>
                  <span className="mx-6">UI/UX DESIGNER</span> <span className="text-white/40">◆</span>
                  <span className="mx-6">SOFTWARE ARCHITECT</span> <span className="text-white/40">◆</span>
                </div>
                <div className="flex shrink-0 items-center">
                  <span className="mx-6">CREATIVE DEVELOPER</span> <span className="text-white/40">◆</span>
                  <span className="mx-6">FRONTEND ENGINEER</span> <span className="text-white/40">◆</span>
                  <span className="mx-6">UI/UX DESIGNER</span> <span className="text-white/40">◆</span>
                  <span className="mx-6">SOFTWARE ARCHITECT</span> <span className="text-white/40">◆</span>
                </div>
            </motion.div>
        </div>

        {/* --- 3. HORIZONTAL SKILL CARDS --- */}
        <section id="skills" className="relative flex flex-col mb-32 z-20 w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative z-20">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="glow-card glow-figma w-full p-5 rounded-2xl flex flex-col justify-center border border-white/5 bg-[#0f0f0f]/80 backdrop-blur-sm cursor-default">
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded border border-white/10 bg-black flex items-center justify-center font-serif text-lg font-bold text-white">L</div>
                 <h3 className="font-serif text-xl text-white">Languages</h3>
              </div>
              <p className="text-[13px] text-gray-400 font-mono tracking-tight pl-11">JS/TS, Python, Java</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="glow-card glow-framer w-full p-5 rounded-2xl flex flex-col justify-center border border-white/5 bg-[#0f0f0f]/80 backdrop-blur-sm cursor-default">
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded border border-white/10 bg-black flex items-center justify-center font-serif text-lg font-bold text-white">F</div>
                 <h3 className="font-serif text-xl text-white">Frameworks</h3>
              </div>
              <p className="text-[13px] text-gray-400 font-mono tracking-tight pl-11">React, Next.js, Spring</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} className="glow-card glow-deepthink w-full p-5 rounded-2xl flex flex-col justify-center border border-white/5 bg-[#0f0f0f]/80 backdrop-blur-sm cursor-default">
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded border border-white/10 bg-black flex items-center justify-center font-serif text-lg font-bold text-white">T</div>
                 <h3 className="font-serif text-xl text-white">Tooling</h3>
              </div>
              <p className="text-[13px] text-gray-400 font-mono tracking-tight pl-11">Figma, Git, Linux</p>
            </motion.div>

          </div>
        </section>

        {/* --- 4. PROJECTS SECTION --- */}
        <section id="projects" className="min-h-[60vh] relative z-20">
          <div className="overflow-hidden border-b border-white/10 pb-4 mb-12 flex justify-between items-end relative">
            <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: premiumEase }} className="font-serif text-3xl md:text-4xl text-white">
              SELECTED PROJECTS
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {projects.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, scale: 0.98, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1 + 0.1, ease: premiumEase }} whileHover={{ scale: 1.03, y: -10, borderColor: "rgba(229, 57, 53, 0.6)", boxShadow: "0 25px 50px -12px rgba(229, 57, 53, 0.25)" }} whileTap={{ scale: 0.96 }} onClick={() => setActiveProject(project)} className="glass-panel rounded-2xl p-2 group cursor-pointer relative overflow-hidden">
                <div className="p-6 h-full flex flex-col relative z-10 rounded-xl bg-black/60 group-hover:bg-black transition-colors duration-300 pointer-events-none">
                  <div className="flex justify-between items-start mb-16">
                    <div className="w-12 h-12 rounded-lg border border-white/10 bg-black flex items-center justify-center shadow-lg group-hover:bg-portfolioRed transition-all duration-300">
                      <span className="text-portfolioRed group-hover:text-white font-serif font-bold text-xl">{project.letter}</span>
                    </div>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full group-hover:border-portfolioRed/50 group-hover:text-portfolioRed">
                      {project.type}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-serif text-2xl md:text-3xl text-white mb-3 flex items-center justify-between">
                      {project.title}
                      <span className="text-portfolioRed opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-mono text-xl">&rarr;</span>
                    </h3>
                    <p className="font-sans text-sm text-gray-400 mb-6 leading-relaxed line-clamp-2 font-light group-hover:text-gray-300">
                      {project.shortDesc}
                    </p>
                    <ul className="font-mono text-[10px] text-gray-400 flex gap-2">
                      {project.tech.map((t) => (
                        <li key={t} className="bg-white/5 px-3 py-1.5 rounded-md border border-white/5 group-hover:border-portfolioRed/30">{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- 5. FOOTER --- */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: premiumEase }} className="pt-16 pb-32">
          <div className="mt-16 md:mt-32 pt-8 flex flex-col md:flex-row justify-between items-center border-t border-white/10 font-mono text-sm text-gray-500 relative cursor-default gap-8 md:gap-0">
              <a href="mailto:hello@nicoleliang.com" className="hover:text-white transition-colors relative z-10 cursor-pointer">
                hello@nicoleliang.com
              </a>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white text-black px-6 py-2 rounded-full font-serif italic text-xs tracking-widest hover:bg-portfolioRed hover:text-white transition-colors cursor-pointer relative z-10">
                  N.L.
              </motion.div>
          </div>
          <div className="mt-16 flex justify-center w-full">
            <h3 className="font-serif italic text-white/50 text-3xl md:text-4xl cursor-default text-center">Make magic happen.</h3>
          </div>
        </motion.section>
      </div>

      {/* --- PROJECT DETAIL MODAL --- */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer" onClick={() => setActiveProject(null)} />
            <motion.div initial={{ opacity: 0, y: 100, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.95 }} transition={{ duration: 0.5, ease: premiumEase }} className="relative w-full max-w-2xl bg-[#0a0a0a] border border-portfolioRed/40 rounded-3xl p-8 md:p-12 shadow-[0_0_80px_rgba(229,57,53,0.15)] overflow-hidden cursor-default">
              <div className="absolute top-0 right-0 w-64 h-64 bg-portfolioRed/20 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <span className="font-mono text-xs text-portfolioRed tracking-widest mb-2 block uppercase">{activeProject.type}</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-white">{activeProject.title}</h2>
                </div>
                <button onClick={() => setActiveProject(null)} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-portfolioRed hover:border-portfolioRed transition-all cursor-pointer">
                  ✕
                </button>
              </div>
              <div className="relative z-10 mb-10">
                <p className="font-sans text-gray-300 leading-relaxed text-lg mb-8 font-light">{activeProject.longDesc}</p>
                <div className="mb-4 font-mono text-xs text-gray-500 uppercase tracking-widest">Technologies Used</div>
                <div className="flex flex-wrap gap-3">
                  {activeProject.tech.map((t, i) => (
                    <motion.span key={t} initial={{ opacity: 0, x: -10, rotate: -5 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }} className="bg-portfolioRed/10 text-portfolioRed px-4 py-2 rounded-lg border border-portfolioRed/20 font-mono text-xs flex items-center gap-2">
                        ◆ {t}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="relative z-10 flex gap-4 pt-6 border-t border-white/10">
                <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="bg-portfolioRed text-white px-8 py-3 rounded-full font-mono text-sm tracking-widest hover:bg-white hover:text-black transition-colors flex items-center gap-2 cursor-pointer">
                  VIEW GITHUB ↗
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}