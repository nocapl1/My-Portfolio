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

// --- FOLDER CARDS DATA ---
const folderCards = [
  {
    id: 0,
    title: "LANGUAGES",
    letter: "L",
    color: "#00d2ff", // Neon Blue
    tabLeft: "0%",
    roundedClass: "rounded-tl-none rounded-tr-xl rounded-b-xl",
    items: [
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "Python 3", level: 85 },
      { name: "Java / C++", level: 80 },
    ]
  },
  {
    id: 1,
    title: "FRAMEWORKS",
    letter: "F",
    color: "#b20a2c", // Neon Red
    tabLeft: "33.33%",
    roundedClass: "rounded-xl",
    items: [
      { name: "React & Next.js", level: 95 },
      { name: "Spring Boot", level: 75 },
      { name: "Tailwind CSS", level: 90 },
    ]
  },
  {
    id: 2,
    title: "TOOLING",
    letter: "T",
    color: "#F27121", // Neon Orange
    tabLeft: "66.66%",
    roundedClass: "rounded-tr-none rounded-tl-xl rounded-b-xl",
    items: [
      { name: "Git / Linux", level: 85 },
      { name: "Figma UI/UX", level: 80 },
      { name: "Docker / CI/CD", level: 70 },
    ]
  }
];

// --- AMBIENT PARTICLES ---
const motes = [
  { left: "15%", delay: 0.2, duration: 3.5 },
  { left: "28%", delay: 1.5, duration: 4.2 },
  { left: "42%", delay: 0.8, duration: 5.0 },
  { left: "55%", delay: 2.1, duration: 3.8 },
  { left: "68%", delay: 0.5, duration: 4.5 },
  { left: "82%", delay: 1.2, duration: 3.2 },
  { left: "90%", delay: 2.5, duration: 4.8 },
];

export default function Home() {
  const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);

  // --- FOLDER STATE ---
  const [isFolderHovered, setIsFolderHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // --- DYNAMIC BACKGROUND INTERACTION (GPU Optimized) ---
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
            style={{
              x: mouseX,
              y: mouseY,
              translateX: "-50%",
              translateY: "-50%",
              background: "radial-gradient(circle, rgba(229, 57, 53, 0.15) 0%, rgba(229, 57, 53, 0.02) 40%, rgba(0,0,0,0) 70%)",
              willChange: "transform" // Force GPU hardware acceleration
            }}
          />
        </div>

        {/* --- 1. HERO SECTION --- */}
        <section id="hero" className="flex flex-col justify-start items-center relative pt-8 pb-12 min-h-[90vh] text-center w-full">

          <div className="absolute top-8 left-8 z-30 flex flex-col items-start text-left">
            <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: premiumEase }} className="font-serif italic text-white/80 text-xl md:text-2xl tracking-wide">
              Computer Science.
            </motion.span>
            <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.1, ease: premiumEase }} className="font-serif text-lg md:text-xl tracking-widest text-white font-bold uppercase mt-1">
              PORTFOLIO
            </motion.h2>
          </div>

          <div className="absolute top-8 right-8 z-30 hidden md:block">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: premiumEase }} className="border border-white/20 rounded-lg px-4 py-1.5 font-mono text-[10px] tracking-widest text-white/70 bg-black/40 backdrop-blur-md cursor-default">
              EST. 2025
            </motion.div>
          </div>

          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] md:h-[600px] z-10 pointer-events-none flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hand.png"
              alt="Cybernetic Hand"
              className="absolute h-[350px] md:h-[550px] object-contain opacity-90 mix-blend-screen drop-shadow-[0_0_80px_rgba(229,57,53,0.3)] z-10"
            />
          </div>

          <motion.div
            className="absolute top-[55%] left-1/2 w-[240px] md:w-[440px] h-[240px] md:h-[440px] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            style={{ willChange: "transform" }}
          >
            {techPanels.map((panel, i) => {
              const angle = (i / techPanels.length) * Math.PI * 2;
              const x = 50 + 50 * Math.cos(angle);
              const y = 50 + 50 * Math.sin(angle);

              return (
                <div key={panel.label} className="absolute" style={{ top: `${y}%`, left: `${x}%`, transform: 'translate(-50%, -50%)' }}>
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

          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full flex justify-center items-center mt-8">
            <div className="absolute w-[80%] max-w-[800px] h-[100px] bg-black/60 blur-[40px] rounded-full pointer-events-none -z-10"></div>

            <motion.h1 variants={containerVariants} initial="hidden" animate="visible" className="font-serif text-[clamp(3rem,8vw,9rem)] font-bold tracking-tighter leading-none text-white cursor-default flex flex-row flex-nowrap whitespace-nowrap overflow-visible justify-center text-center w-full">
              {nameText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  whileHover={{ y: -15, scale: 1.05, color: "#e53935", textShadow: "0px 15px 30px rgba(229,57,53,0.8)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
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
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 25 }} className="flex whitespace-nowrap font-mono text-xs md:text-sm tracking-[0.2em] text-white/80 w-max" style={{ willChange: "transform" }}>
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

        {/* --- 3. 3D FOLDER WITH INDEX TABS --- */}
        <section id="skills" className="relative flex flex-col items-center justify-center pt-20 mb-40 w-full">

          <div className="overflow-hidden border-b border-white/10 pb-4 mb-32 flex justify-between items-end relative w-full">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="font-serif text-4xl text-white cursor-default flex items-center gap-6"
            >
              TECHNICAL_STACK

              {/* --- NEW GLOWING PILL BADGE --- */}
              <div className="relative flex items-center bg-[#0a0a0a] border border-white/10 rounded-full pl-4 pr-6 py-1.5 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <span className="text-[#e53935] font-light text-lg leading-none mr-3 mt-[-2px] relative z-10">+</span>
                <span className="font-mono text-[10px] md:text-xs text-white tracking-widest uppercase relative z-10 mt-[2px]">Interact</span>

                {/* Optimized Animated Spotlight Glow */}
                <div className="relative mx-4 h-4 w-[2px] bg-[#e53935] z-10 shadow-[0_0_8px_#e53935]">
                  <motion.div
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                      scaleX: [1, 1.8, 1] // GPU Optimized animation (removed width animation)
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-0 -translate-y-1/2 h-8 w-[40px] bg-gradient-to-r from-[#e53935]/70 to-transparent blur-[6px] origin-left pointer-events-none"
                    style={{ willChange: "transform, opacity" }}
                  />
                </div>

                <span className="font-mono text-[10px] md:text-xs text-white/30 tracking-widest uppercase relative z-10 mt-[2px]">With Folder</span>
              </div>
            </motion.h2>
          </div>

          <div
            className="relative w-full max-w-4xl h-[550px] flex items-end justify-center perspective-[1400px]"
            onMouseEnter={() => setIsFolderHovered(true)}
            onMouseLeave={() => {
              setIsFolderHovered(false);
              setHoveredCard(null);
            }}
          >
            {/* --- AMBIENT TECH DECORATIONS (SPARKS & RINGS) --- */}
            <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">

              {/* Pulsing Core Glow */}
              <motion.div
                animate={{
                  opacity: isFolderHovered ? 0.8 : [0.3, 0.5, 0.3],
                  scale: isFolderHovered ? 1.1 : [1, 1.05, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[60%] h-[60%] bg-portfolioRed/10 rounded-full blur-[80px]"
                style={{ willChange: "transform, opacity" }}
              />

              {/* Slow spinning dashed rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-white/5 opacity-50"
                style={{ willChange: "transform" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="absolute w-[650px] h-[650px] rounded-full border border-dotted border-portfolioRed/20 opacity-30"
                style={{ willChange: "transform" }}
              />

              {/* Corner crosshairs framing the folder */}
              <div className="absolute top-[15%] left-[5%] w-6 h-6 border-t-2 border-l-2 border-white/20"></div>
              <div className="absolute top-[15%] right-[5%] w-6 h-6 border-t-2 border-r-2 border-white/20"></div>
              <div className="absolute bottom-[5%] left-[5%] w-6 h-6 border-b-2 border-l-2 border-white/20"></div>
              <div className="absolute bottom-[5%] right-[5%] w-6 h-6 border-b-2 border-r-2 border-white/20"></div>

              {/* Floating Spark Particles */}
              <div className="absolute bottom-0 w-[550px] h-[300px] overflow-hidden">
                {motes.map((mote, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "-150%", opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: mote.duration, delay: mote.delay, ease: "linear" }}
                    className="absolute bottom-0 w-1 h-1 rounded-full bg-portfolioRed blur-[1px] shadow-[0_0_10px_rgba(229,57,53,0.8)]"
                    style={{ left: mote.left, willChange: "transform, opacity" }}
                  />
                ))}
              </div>
            </div>

            {/* --- NEON EDGE GLOW (Un-hovered State) --- */}
            <motion.div
              animate={{ opacity: isFolderHovered ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 w-[480px] md:w-[650px] h-[380px] z-0 pointer-events-none rounded-t-xl"
            >
              <div className="absolute inset-[-2px] md:inset-[-3px] rounded-t-xl blur-[12px] opacity-70" style={{ background: 'linear-gradient(135deg, #00d2ff 0%, #a855f7 40%, #ec4899 70%, #f27121 100%)' }} />
              <div className="absolute inset-[-1px] md:inset-[-2px] rounded-t-xl" style={{ background: 'linear-gradient(135deg, #00d2ff 0%, #a855f7 40%, #ec4899 70%, #f27121 100%)' }} />
            </motion.div>

            {/* --- Folder Back Cover --- */}
            <motion.div
              animate={{
                boxShadow: isFolderHovered ? "0 0 80px rgba(229, 57, 53, 0.2)" : "0 25px 50px -12px rgba(0,0,0,1)",
                borderColor: isFolderHovered ? "rgba(229, 57, 53, 0.4)" : "rgba(229, 57, 53, 0)" // Fixed transparent issue
              }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-0 w-[480px] md:w-[650px] h-[380px] bg-[#0a0a0a] rounded-t-xl border-t border-l border-r z-0"
            />

            {/* --- Vertical Tabbed Cards Container --- */}
            <div className="absolute bottom-0 z-10 w-[440px] md:w-[610px] h-[380px] flex items-end justify-center pointer-events-none">
              {folderCards.map((card, index) => {
                const isHovered = hoveredCard === card.id;
                return (
                  <motion.div
                    key={card.id}
                    initial={false}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    animate={{
                      y: isFolderHovered ? -60 : 0,
                      zIndex: isHovered ? 50 : index + 10,
                      boxShadow: isHovered
                        ? `0 0 60px ${card.color}80, 0 20px 50px rgba(0,0,0,0.8)`
                        : isFolderHovered
                          ? `0 0 15px ${card.color}30`
                          : "none",
                      borderColor: isHovered
                        ? `${card.color}`
                        : isFolderHovered
                          ? `${card.color}60`
                          : "rgba(255, 255, 255, 0.1)"
                    }}
                    transition={{ type: "spring", damping: 20, stiffness: 120 }}
                    className={`absolute bottom-0 w-full h-full bg-[#0a0a0a]/95 backdrop-blur-md border pointer-events-auto cursor-pointer flex flex-col ${card.roundedClass}`}
                  >
                    {/* INDEX TAB STICKING OUT TOP */}
                    <motion.div
                      animate={{
                        borderBottom: isHovered ? `1px solid ${card.color}` : isFolderHovered ? `1px solid ${card.color}60` : "1px solid #0a0a0a",
                        borderColor: isHovered ? `${card.color}` : isFolderHovered ? `${card.color}60` : "rgba(255,255,255,0.1)",
                        boxShadow: isHovered ? `0 -10px 20px ${card.color}30` : "none"
                      }}
                      className="absolute h-10 flex items-center justify-center border-t border-l border-r bg-[#0a0a0a]/95 backdrop-blur-md rounded-t-xl transition-colors z-20 group"
                      style={{ left: card.tabLeft, width: "33.33%", top: "-39px" }}
                    >
                      <span className="font-mono text-[10px] md:text-xs text-white/80 uppercase tracking-widest group-hover:text-white transition-colors flex items-center gap-2">
                        <motion.span animate={{ boxShadow: (isHovered || isFolderHovered) ? `0 0 10px ${card.color}` : "none" }} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: card.color }}></motion.span>
                        {card.title}
                      </span>
                    </motion.div>

                    {/* CARD BODY CONTENT */}
                    <div className="w-full h-full relative z-10 p-6 md:p-8 flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg border border-white/10 bg-[#111] flex items-center justify-center font-serif text-2xl font-bold" style={{ color: card.color, textShadow: (isHovered || isFolderHovered) ? `0 0 15px ${card.color}80` : "none" }}>{card.letter}</div>
                        <h3 className="font-serif text-3xl text-white" style={{ textShadow: isHovered ? `0 0 20px ${card.color}40` : "none" }}>{card.title}</h3>
                      </div>
                      <div className="mt-4 flex flex-col gap-6 w-full">
                        {card.items.map((item, i) => (
                          <div key={i} className="flex flex-col gap-2">
                            <div className="flex justify-between font-mono text-sm text-gray-300"><span>{item.name}</span></div>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: isHovered ? `${item.level}%` : 0, boxShadow: isHovered ? `0 0 10px ${card.color}` : "none" }} transition={{ duration: 0.8, delay: 0.1 + (i * 0.1), ease: premiumEase }} className="h-full rounded-full" style={{ backgroundColor: card.color }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* --- Folder Front Flap --- */}
            <motion.div
              style={{ transformOrigin: "bottom" }}
              initial={false}
              animate={{
                rotateX: isFolderHovered ? -75 : 0,
                boxShadow: isFolderHovered ? "0 -10px 80px rgba(229,57,53,0.3)" : "none",
                borderColor: isFolderHovered ? "rgba(229, 57, 53, 0.6)" : "rgba(229, 57, 53, 0)" // Fixed transparent issue
              }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="absolute bottom-0 w-[480px] md:w-[650px] h-[380px] bg-[#0a0a0a] rounded-t-xl border-t border-l border-r z-40 flex items-center justify-center pointer-events-none overflow-hidden"
            >
              {/* Subtle surface color wash to match the neon vibe when closed */}
              <motion.div animate={{ opacity: isFolderHovered ? 0 : 0.08 }} className="absolute inset-0 bg-gradient-to-br from-[#00d2ff] via-[#a855f7] to-[#f27121] pointer-events-none" />
              <div className="w-full h-full flex flex-col justify-center items-center opacity-50 border-[12px] border-[#080808] rounded-t-xl p-4 relative z-10">
                <div className="w-full border-b-2 border-dashed border-white/30 mb-3"></div>
                <span className="font-mono text-3xl tracking-[0.5em] text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">CONFIDENTIAL</span>
                <div className="w-full border-b-2 border-dashed border-white/30 mt-3"></div>
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