"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

const projects = [
  {
    id: 'quantum',
    title: 'QUANTUM FLUX',
    type: 'Live Web App',
    letter: 'Q',
    shortDesc: 'High-performance React architecture built for scale. Implements fluid motion interactions and real-time state synchronization.',
    longDesc: 'Quantum Flux is a next-generation web application focusing on real-time state synchronization and fluid motion interactions. Built to handle massive data throughput while maintaining a flawless 60fps animation pipeline. The architecture relies on heavily optimized React rendering and custom WebGL shaders.',
    tech: ['NEXT.JS', 'TYPESCRIPT', 'FRAMER'],
    github: 'https://github.com/nicoleliang/quantum-flux'
  },
  {
    id: 'aetherius',
    title: 'AETHERIUS UI',
    type: 'UI Library',
    letter: 'A',
    shortDesc: 'Minimalist component library focused on precise typography, accessibility, and cinematic styling.',
    longDesc: 'A strictly typed, highly accessible React component library designed for cinematic web experiences. Features custom hooks for scroll animations, physics-based interactions, and a fully customizable design token system built on top of Tailwind CSS.',
    tech: ['REACT', 'TAILWIND', 'STORYBOOK'],
    github: 'https://github.com/nicoleliang/aetherius-ui'
  }
];

export default function Home() {
  const premiumEase = [0.16, 1, 0.3, 1];
  
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);

  // --- OPTIMIZED SPRINGS FOR ZERO LAG ---
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
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

  return (
    <>
      <div className="p-16 max-w-5xl mx-auto flex flex-col gap-32 relative z-10">
        
        {/* --- OPTIMIZED FLASHLIGHT BACKGROUND --- */}
        {/* Swapped heavy CSS blur for a highly performant radial gradient. Brighter core, zero lag. */}
        <motion.div 
          className="fixed top-0 left-0 w-[1000px] h-[1000px] pointer-events-none -z-10"
          style={{ 
            x: mouseX, 
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
            background: "radial-gradient(circle, rgba(229, 57, 53, 0.25) 0%, rgba(229, 57, 53, 0.08) 30%, transparent 70%)"
          }}
        />

        <section id="hero" className="min-h-[80vh] flex flex-col justify-center relative pt-20">
          <div className="flex justify-end mb-8 overflow-hidden">
              <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: premiumEase }}
                className="border border-white/20 rounded-full px-4 py-1 font-mono text-xs tracking-widest text-gray-400 bg-white/5 backdrop-blur-md"
              >
                  EST. 2025
              </motion.div>
          </div>

          <div className="overflow-hidden mb-2">
            <motion.h2 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: premiumEase }}
              className="font-serif text-xl tracking-widest text-gray-500"
            >
              PORTFOLIO
            </motion.h2>
          </div>

          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%", rotate: 2 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
              className="font-serif text-7xl md:text-[8rem] font-bold tracking-tighter relative z-10 leading-none text-white drop-shadow-2xl"
            >
              NICOLE LIANG
            </motion.h1>
          </div>
        </section>

        <div className="w-[120vw] ml-[-10vw] bg-black/80 border-y border-white/10 py-5 overflow-hidden transform -rotate-2 -mt-16 mb-16 shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex whitespace-nowrap font-mono text-sm tracking-[0.3em] text-gray-400 w-max"
          >
            <div className="flex shrink-0 items-center">
              <span className="mx-8 text-white">CREATIVE DEVELOPER</span> <span className="text-portfolioRed">◆</span>
              <span className="mx-8">FRONTEND ENGINEER</span> <span className="text-portfolioRed">◆</span>
              <span className="mx-8 text-white">UI/UX DESIGNER</span> <span className="text-portfolioRed">◆</span>
              <span className="mx-8">SOFTWARE ARCHITECT</span> <span className="text-portfolioRed">◆</span>
            </div>
            <div className="flex shrink-0 items-center">
              <span className="mx-8 text-white">CREATIVE DEVELOPER</span> <span className="text-portfolioRed">◆</span>
              <span className="mx-8">FRONTEND ENGINEER</span> <span className="text-portfolioRed">◆</span>
              <span className="mx-8 text-white">UI/UX DESIGNER</span> <span className="text-portfolioRed">◆</span>
              <span className="mx-8">SOFTWARE ARCHITECT</span> <span className="text-portfolioRed">◆</span>
            </div>
          </motion.div>
        </div>

        <section id="projects" className="min-h-screen pt-16 relative z-20">
          <div className="overflow-hidden border-b border-white/10 pb-4 mb-12 flex justify-between items-end">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="font-serif text-4xl text-white"
            >
              SELECTED PROJECTS
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.1, ease: premiumEase }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -10, 
                  borderColor: "rgba(229, 57, 53, 0.6)", 
                  boxShadow: "0 25px 50px -12px rgba(229, 57, 53, 0.25)" 
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveProject(project)}
                style={{ WebkitBackfaceVisibility: "hidden", transform: "translateZ(0)" }}
                className="glass-panel rounded-2xl p-2 group cursor-pointer relative overflow-hidden"
              >
                <div className="p-6 h-full flex flex-col relative z-10 rounded-xl bg-black/60 group-hover:bg-black transition-colors duration-300 pointer-events-none">
                  <div className="flex justify-between items-start mb-16">
                    <div className="w-12 h-12 rounded-lg border border-white/10 bg-black flex items-center justify-center shadow-lg group-hover:bg-portfolioRed group-hover:border-portfolioRed transition-all duration-300">
                      <span className="text-portfolioRed group-hover:text-white font-serif font-bold text-xl transition-colors duration-300">{project.letter}</span>
                    </div>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full group-hover:border-portfolioRed/50 group-hover:text-portfolioRed transition-colors duration-300">
                      {project.type}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-serif text-3xl text-white mb-3 flex items-center justify-between">
                      {project.title}
                      <span className="text-portfolioRed opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-mono text-xl">
                        &rarr;
                      </span>
                    </h3>
                    <p className="font-sans text-sm text-gray-400 mb-6 leading-relaxed line-clamp-2 font-light group-hover:text-gray-300 transition-colors duration-300">
                      {project.shortDesc}
                    </p>
                    <ul className="font-mono text-[10px] text-gray-400 flex gap-2">
                      {project.tech.map((t) => (
                        <li key={t} className="bg-white/5 px-3 py-1.5 rounded-md border border-white/5 group-hover:border-portfolioRed/30 transition-colors duration-300">{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: premiumEase }}
          id="about" 
          className="pt-16 pb-32"
        >
          <div className="mt-32 pt-8 flex justify-between items-center border-t border-white/10 font-mono text-sm text-gray-500">
              <a href="mailto:hello@nicoleliang.com" className="transition-colors hover:text-white cursor-pointer">
                hello@nicoleliang.com
              </a>
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white text-black px-6 py-2 rounded-full font-serif italic text-xs tracking-widest hover:bg-portfolioRed hover:text-white transition-colors duration-300 cursor-pointer"
              >
                  N.L.
              </motion.div>
          </div>
        </motion.section>

      </div>

      {/* --- MODAL --- */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              onClick={() => setActiveProject(null)} 
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: premiumEase }}
              // Added cursor-default here so interacting with the panel feels normal
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-portfolioRed/40 rounded-3xl p-8 md:p-12 shadow-[0_0_80px_rgba(229,57,53,0.15)] overflow-hidden cursor-default"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-portfolioRed/20 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <span className="font-mono text-xs text-portfolioRed tracking-widest mb-2 block uppercase">{activeProject.type}</span>
                  <h2 className="font-serif text-4xl text-white">{activeProject.title}</h2>
                </div>
                <button 
                  onClick={() => setActiveProject(null)}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-portfolioRed hover:border-portfolioRed transition-all duration-300 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="relative z-10 mb-10">
                <p className="font-sans text-gray-300 leading-relaxed text-lg mb-8 font-light">
                  {activeProject.longDesc}
                </p>

                <div className="mb-4 font-mono text-xs text-gray-500 uppercase tracking-widest">Technologies Used</div>
                <div className="flex flex-wrap gap-3">
                  {activeProject.tech.map((t) => (
                    <span key={t} className="bg-portfolioRed/10 text-portfolioRed px-4 py-2 rounded-lg border border-portfolioRed/20 font-mono text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex gap-4 pt-6 border-t border-white/10">
                <a 
                  href={activeProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-portfolioRed text-white px-8 py-3 rounded-full font-mono text-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                >
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