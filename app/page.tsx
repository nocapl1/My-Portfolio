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

export default function Home() {
  const premiumEase = [0.16, 1, 0.3, 1];
  
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);
  
  // --- NEW: FOLDER HOVER STATE ---
  const [isFolderHovered, setIsFolderHovered] = useState(false);

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

  // --- TYPING EFFECT VARIANTS FOR NAME ---
  const nameText = "NICOLE LIANG";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 } // Speed of the typing effect
    }
  };
  const letterVariants = {
    hidden: { opacity: 0, x: -20, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { ease: premiumEase, duration: 0.5 } 
    }
  };

  return (
    <>
      <div className="p-16 max-w-5xl mx-auto flex flex-col gap-32 relative z-10">
        
        {/* --- DYNAMIC BACKGROUND INTERACTION WRAPPER --- */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[#000000]"></div>
          {/* Multicolour dynamic gradient background */}
          <div className="absolute inset-0 opacity-[0.25] mix-blend-color-burn" style={{ background: 'radial-gradient(circle at 10% 10%, #FFB6C1 0%, transparent 20%), radial-gradient(circle at 90% 90%, #87CEFA 0%, transparent 20%)' }}></div>
          
          {/* Optimized Red Flashlight */}
          <motion.div 
            className="w-[1000px] h-[1000px] pointer-events-none rounded-full"
            style={{ 
              x: mouseX, 
              y: mouseY,
              translateX: "-50%",
              translateY: "-50%",
              background: "radial-gradient(circle, rgba(229, 57, 53, 0.15) 0%, rgba(229, 57, 53, 0.05) 30%, transparent 70%)"
            }}
          />
        </div>

        {/* --- 1. HERO SECTION --- */}
        <section id="hero" className="flex flex-col justify-center relative pt-20">
          <div className="flex justify-end mb-8 overflow-hidden relative">
            <div className="w-1 absolute right-[-50px] top-1/2 h-20 border-r-2 border-dashed border-portfolioRed pointer-events-none opacity-50"></div>
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: premiumEase }}
              className="border border-white/20 rounded-full px-4 py-1 font-mono text-xs tracking-widest text-gray-400 bg-white/5 backdrop-blur-md cursor-default"
            >
                EST. 2025
            </motion.div>
          </div>

          <div className="overflow-hidden mb-2 relative">
             <motion.span
              initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.6, ease: premiumEase }}
              className="absolute top-[-20%] left-[10%] font-serif italic text-white/40 text-4xl md:text-5xl tracking-wider leading-none z-20 pointer-events-none"
            >
              Creative.
            </motion.span>
            <motion.h2 
              initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.1, ease: premiumEase }}
              className="font-serif text-xl tracking-widest text-gray-500 cursor-default"
            >
              PORTFOLIO
            </motion.h2>
          </div>

          <div className="overflow-hidden">
            <motion.h1 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-serif text-7xl md:text-[8rem] font-bold tracking-tighter relative z-10 leading-none text-white drop-shadow-2xl cursor-default flex flex-wrap"
            >
              {nameText.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </section>

        {/* --- 2. INFINITELY REPEATING MARQUEE (Right under Hero) --- */}
        <div className="w-[120vw] ml-[-10vw] bg-black/80 border-y border-white/10 py-5 overflow-hidden transform -rotate-2 -mt-16 mb-8 shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-xl cursor-default relative z-20">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 25 }} className="flex whitespace-nowrap font-mono text-sm tracking-[0.3em] text-gray-400 w-max">
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

        {/* --- 3. SKILLS 3D INTERACTIVE FOLDER SECTION --- */}
        <section id="skills" className="relative flex flex-col items-center justify-center pt-20 mb-32">
          
          <div className="overflow-hidden border-b border-white/10 pb-4 mb-24 flex justify-between items-end relative w-full">
            <motion.h2 
              initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: premiumEase }}
              className="font-serif text-4xl text-white cursor-default flex items-center gap-4"
            >
              SKILL_SET.json 
              <span className="font-mono text-[10px] bg-white/10 text-portfolioRed px-3 py-1 rounded-full uppercase tracking-widest border border-portfolioRed/30 animate-pulse">
                Hover Folder to Open
              </span>
            </motion.h2>
          </div>

          {/* 3D Container for the Folder (Trigger for Hover) */}
          <div 
            className="relative w-full max-w-3xl h-[450px] flex items-end justify-center perspective-[1200px]"
            onMouseEnter={() => setIsFolderHovered(true)}
            onMouseLeave={() => setIsFolderHovered(false)}
          >
            
            {/* Folder Back Cover */}
            <div className="absolute bottom-0 w-[400px] md:w-[500px] h-[300px] bg-[#1a1a1a] rounded-t-xl border-t border-l border-r border-white/10 z-0 shadow-2xl">
                <div className="absolute -top-8 left-0 w-32 h-8 bg-[#1a1a1a] rounded-t-lg border-t border-l border-white/10 flex items-center px-3">
                    <span className="font-mono text-[10px] text-gray-500 tracking-widest">SYS_FILES</span>
                </div>
            </div>

            {/* Fanning Cards Container (Inside the folder) */}
            {/* We use isFolderHovered to drive the 'animate' prop dynamically */}
            <div className="absolute bottom-4 z-10 w-full h-full flex items-end justify-center pointer-events-none">
                
                {/* CARD 1: Languages (Fans Left) */}
                <motion.div 
                  initial={false}
                  animate={isFolderHovered ? { y: -80, opacity: 1, rotate: -15, x: -120 } : { y: 150, opacity: 0, rotate: 0, x: 0 }}
                  whileHover={{ y: -130, scale: 1.05, rotate: -5, zIndex: 60 }}
                  transition={{ type: "spring", damping: 15, delay: isFolderHovered ? 0.1 : 0 }}
                  className="absolute w-[220px] h-[320px] bg-[#e0e0e0] rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col p-6 border border-white/50 pointer-events-auto cursor-pointer"
                >
                  <h3 className="font-serif italic text-3xl text-gray-800 tracking-tighter mb-4 border-b border-gray-300 pb-2">Languages</h3>
                  <ul className="font-mono text-xs text-gray-700 flex flex-col gap-3">
                    <li className="flex justify-between"><span>Java</span> <span className="text-portfolioRed">◆</span></li>
                    <li className="flex justify-between"><span>Python</span> <span className="text-portfolioRed">◆</span></li>
                    <li className="flex justify-between"><span>HTML/CSS</span> <span className="text-portfolioRed">◆</span></li>
                    <li className="flex justify-between"><span>JavaScript</span> <span className="text-portfolioRed">◆</span></li>
                  </ul>
                  <div className="mt-auto text-right font-mono text-[8px] text-gray-400">01</div>
                </motion.div>

                {/* CARD 2: Tools (Fans Right) */}
                <motion.div 
                  initial={false}
                  animate={isFolderHovered ? { y: -60, opacity: 1, rotate: 18, x: 140 } : { y: 150, opacity: 0, rotate: 0, x: 0 }}
                  whileHover={{ y: -110, scale: 1.05, rotate: 5, zIndex: 60 }}
                  transition={{ type: "spring", damping: 15, delay: isFolderHovered ? 0.15 : 0 }}
                  className="absolute w-[220px] h-[320px] bg-[#222] rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col p-6 border border-white/10 pointer-events-auto cursor-pointer"
                >
                  <h3 className="font-serif italic text-3xl text-white tracking-tighter mb-4 border-b border-white/20 pb-2">Tools</h3>
                  <ul className="font-mono text-xs text-gray-400 flex flex-col gap-3">
                    <li className="flex justify-between hover:text-white transition-colors"><span>Git</span> <span>_</span></li>
                    <li className="flex justify-between hover:text-white transition-colors"><span>Maven</span> <span>_</span></li>
                    <li className="flex justify-between hover:text-white transition-colors"><span>Bash</span> <span>_</span></li>
                    <li className="flex justify-between hover:text-white transition-colors"><span>JSON</span> <span>_</span></li>
                    <li className="flex justify-between hover:text-white transition-colors"><span>Tkinter</span> <span>_</span></li>
                    <li className="flex justify-between hover:text-white transition-colors"><span>Linux</span> <span>_</span></li>
                  </ul>
                  <div className="mt-auto text-right font-mono text-[8px] text-gray-600">03</div>
                </motion.div>

                {/* CARD 3: Frameworks (Fans Top Center) */}
                <motion.div 
                  initial={false}
                  animate={isFolderHovered ? { y: -120, opacity: 1, rotate: -2, x: -10 } : { y: 150, opacity: 0, rotate: 0, x: 0 }}
                  whileHover={{ y: -180, scale: 1.05, rotate: 0, zIndex: 60 }}
                  transition={{ type: "spring", damping: 15, delay: isFolderHovered ? 0.2 : 0 }}
                  className="absolute w-[220px] h-[320px] bg-portfolioRed text-white rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col p-6 border border-red-400 pointer-events-auto cursor-pointer"
                >
                  <h3 className="font-serif italic text-2xl tracking-tighter mb-4 border-b border-white/30 pb-2">Frameworks</h3>
                  <ul className="font-mono text-[11px] flex flex-col gap-3">
                    <li className="bg-black/20 p-2 rounded">Spring Boot</li>
                    <li className="bg-black/20 p-2 rounded">Spring Data JPA</li>
                    <li className="bg-black/20 p-2 rounded">OpenCV</li>
                    <li className="bg-black/20 p-2 rounded">MediaPipe</li>
                  </ul>
                  <div className="mt-auto text-right font-mono text-[8px] text-white/50">02</div>
                </motion.div>

                {/* ID CARD (Front Center) */}
                <motion.div 
                  initial={false}
                  animate={isFolderHovered ? { y: -10, opacity: 1, rotate: 4, x: 20 } : { y: 150, opacity: 0, rotate: 0, x: 0 }}
                  whileHover={{ y: -70, scale: 1.05, rotate: 0, zIndex: 60 }}
                  transition={{ type: "spring", damping: 15, delay: isFolderHovered ? 0.25 : 0 }}
                  className="absolute w-[260px] h-[360px] bg-[#111] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-40 border border-white/10 overflow-hidden pointer-events-auto cursor-pointer"
                >
                    <div className="flex gap-1.5 p-4 pb-0">
                        <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400/80"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="p-6 pt-4 flex-1 flex flex-col text-center">
                        <div className="font-mono text-[9px] text-portfolioRed tracking-widest mb-2 block uppercase">MASTER ACCESS</div>
                        <h2 className="font-serif text-3xl text-white mb-6">NICOLE LIANG</h2>
                        <div className="w-16 h-16 mx-auto mb-4 border border-white/20 rounded-full flex items-center justify-center bg-gray-800">
                            <span className="font-serif text-3xl text-portfolioRed font-bold">L</span>
                        </div>
                        <div className="mt-auto border-t border-white/10 pt-4 font-mono text-[8px] text-gray-500 uppercase tracking-widest text-left">
                            ID: NL-2026<br/>
                            ROLE: SOFTWARE ENGINEER<br/>
                            <span className="text-green-500 block mt-2">STATUS: CLEARANCE GRANTED</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Folder Front Flap (3D Hinge Animation triggers on state) */}
            <motion.div 
                style={{ transformOrigin: "bottom" }}
                initial={false}
                animate={{ rotateX: isFolderHovered ? -80 : 0 }} // Flaps down when hovered, closes when unhovered
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }} // Smooth, snappy hinge
                className="absolute bottom-0 w-[400px] md:w-[500px] h-[300px] bg-gradient-to-t from-[#0a0a0a] to-[#222] rounded-t-xl border border-white/20 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] flex items-center justify-center pointer-events-none"
            >
                {/* Visual detail on the front of the folder */}
                <div className="w-full h-full flex flex-col justify-center items-center opacity-30 border-8 border-[#111] rounded-t-xl p-4">
                     <div className="w-full border-b-2 border-dashed border-white/50 mb-2"></div>
                     <span className="font-mono text-2xl tracking-[0.5em] text-white">CONFIDENTIAL</span>
                     <div className="w-full border-b-2 border-dashed border-white/50 mt-2"></div>
                </div>
            </motion.div>

          </div>
        </section>

        {/* --- 4. PROJECTS SECTION --- */}
        <section id="projects" className="min-h-screen pt-16 relative z-20">
          <div className="overflow-hidden border-b border-white/10 pb-4 mb-12 flex justify-between items-end relative">
            <div className="w-[200px] absolute right-[0vw] top-[50%] h-[1px] border-b border-dashed border-portfolioRed pointer-events-none opacity-50 transform rotate-12"></div>
            <motion.h2 
              initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: premiumEase }}
              className="font-serif text-4xl text-white"
            >
              SELECTED PROJECTS
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.1, ease: premiumEase }}
                whileHover={{ 
                  scale: 1.03, y: -10, borderColor: "rgba(229, 57, 53, 0.6)", boxShadow: "0 25px 50px -12px rgba(229, 57, 53, 0.25)" 
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveProject(project)}
                className="glass-panel rounded-2xl p-2 group cursor-pointer relative overflow-hidden"
              >
                <div className="p-6 h-full flex flex-col relative z-10 rounded-xl bg-black/60 group-hover:bg-black transition-colors duration-300 pointer-events-none">
                  <div className="flex justify-between items-start mb-16">
                    <div className="w-12 h-12 absolute left-1/2 -translate-x-1/2 -top-12 h-[2px] border-b-2 border-dashed border-white/20 pointer-events-none"></div>
                    <div className="w-12 h-12 rounded-lg border border-white/10 bg-black flex items-center justify-center shadow-lg group-hover:bg-portfolioRed transition-all duration-300">
                      <span className="text-portfolioRed group-hover:text-white font-serif font-bold text-xl">{project.letter}</span>
                    </div>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full group-hover:border-portfolioRed/50 group-hover:text-portfolioRed">
                      {project.type}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-serif text-3xl text-white mb-3 flex items-center justify-between">
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
          <div className="mt-32 pt-8 flex justify-between items-center border-t border-white/10 font-mono text-sm text-gray-500 relative">
              <div className="w-[100px] absolute right-[-50px] -top-8 h-10 border-r border-t-0 border-dashed border-white/20 opacity-50"></div>
              <a href="mailto:hello@nicoleliang.com" className="hover:text-white transition-colors relative z-10">
                hello@nicoleliang.com
              </a>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white text-black px-6 py-2 rounded-full font-serif italic text-xs tracking-widest hover:bg-portfolioRed hover:text-white transition-colors cursor-pointer relative z-10">
                  N.L.
              </motion.div>
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
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -top-8 w-1 h-12 border-l-2 border-dashed border-portfolioRed/30 opacity-80 z-20"></div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <span className="font-mono text-xs text-portfolioRed tracking-widest mb-2 block uppercase">{activeProject.type}</span>
                  <h2 className="font-serif text-4xl text-white">{activeProject.title}</h2>
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