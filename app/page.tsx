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

  // --- AI LOGIC STATE ---
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiTyping, setIsAiTyping] = useState(false);

  // --- DYNAMIC BACKGROUND INTERACTION (OPTIMIZED) ---
  const springConfig = { damping: 50, stiffness: 200, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    let frameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse updates using requestAnimationFrame for better performance
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (activeProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [activeProject]);

  // --- THE AI BRAIN ---
  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;
    
    setIsAiTyping(true);
    setAiResponse(null);
    
    setTimeout(() => {
      const lowerQuery = aiQuery.toLowerCase();
      if (lowerQuery.includes("quantum")) {
         setAiResponse("QUANTUM FLUX is a next-generation Next.js application designed to handle massive data throughput while maintaining a flawless 60fps animation pipeline.");
      } else if (lowerQuery.includes("react") || lowerQuery.includes("framework")) {
         setAiResponse("Nicole specializes in React and Next.js for the frontend, combining it with Tailwind CSS and Framer Motion to build highly interactive, cinematic UI experiences.");
      } else if (lowerQuery.includes("backend") || lowerQuery.includes("java")) {
         setAiResponse("On the backend, Nicole has strong proficiency in Java and Spring Boot for building robust APIs, as well as Python for scripting and data handling.");
      } else if (lowerQuery.includes("contact") || lowerQuery.includes("hire") || lowerQuery.includes("email")) {
         setAiResponse("You can reach Nicole directly at hello@nicoleliang.com. Scroll to the bottom of the page to find the quick-contact terminal.");
      } else {
         setAiResponse("I am the dossier AI assistant. I can fetch specific files regarding Nicole's technical stack, project history, or design architecture. Please try asking about 'React', 'Projects', or 'Backend'.");
      }
      setIsAiTyping(false);
      setAiQuery(""); 
    }, 1500); 
  };

  const nameText = "NICOLE LIANG";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
  };
  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { ease: premiumEase, duration: 0.5 } }
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
          
          {/* OPTIMIZED: Added willChange to prevent layout thrashing */}
          <motion.div 
            className="w-[800px] h-[800px] pointer-events-none rounded-full"
            style={{ 
              x: mouseX, 
              y: mouseY, 
              translateX: "-50%", 
              translateY: "-50%", 
              background: "radial-gradient(circle, rgba(229, 57, 53, 0.12) 0%, transparent 60%)",
              willChange: "transform"
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
          
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] md:h-[600px] z-10 pointer-events-none flex items-center justify-center">
            <img 
              src="/hand.png" 
              alt="Cybernetic Hand" 
              className="absolute h-[350px] md:h-[550px] object-contain opacity-90 mix-blend-screen drop-shadow-[0_0_40px_rgba(229,57,53,0.3)] z-10" 
            />
          </div>

          {/* OPTIMIZED: Added willChange */}
          <motion.div 
            className="absolute top-[55%] left-1/2 w-[240px] md:w-[440px] h-[240px] md:h-[440px] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
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
                    transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
                    style={{ willChange: "transform" }}
                    className="flex items-center gap-2 bg-[#0a0a0a]/90 backdrop-blur-sm border border-white/20 border-b-[2px] border-b-portfolioRed px-5 py-2.5 rounded-full font-mono text-[10px] md:text-xs text-white shadow-[0_10px_20px_rgba(229,57,53,0.3)] whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-portfolioRed"></span>
                    {panel.label}
                  </motion.div>
                </div>
              )
            })}
          </motion.div>

          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full flex justify-center items-center mt-8">
            <motion.h1 variants={containerVariants} initial="hidden" animate="visible" className="font-serif text-[clamp(3rem,8vw,9rem)] font-bold tracking-tighter leading-none text-white cursor-default flex flex-row flex-nowrap whitespace-nowrap overflow-visible justify-center text-center w-full">
              {nameText.split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants}
                  whileHover={{ y: -10, scale: 1.05, color: "#e53935" }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="inline-block relative z-10 transition-colors duration-300"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </section>

        {/* --- 2. CLEAN MARQUEE (OPTIMIZED) --- */}
        <div className="w-[100vw] ml-[calc(-50vw+50%)] border-y border-white/10 bg-[#0a0a0a] py-3 overflow-hidden relative z-10 mt-12 mb-20">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }} 
              style={{ willChange: "transform" }}
              className="flex whitespace-nowrap font-mono text-xs md:text-sm tracking-[0.2em] text-white/80 w-max"
            >
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

        {/* --- 3. 3D FOLDER WITH INDEX TABS & AI INPUT --- */}
        <section id="skills" className="relative flex flex-col items-center justify-center pt-20 mb-32 w-full">
          
          <div className="overflow-hidden border-b border-white/10 pb-4 mb-24 flex justify-between items-end relative w-full">
            <motion.h2 
              initial={{ y: "100%" }} 
              whileInView={{ y: 0 }} 
              viewport={{ once: true, margin: "-100px" }} 
              transition={{ duration: 0.8, ease: premiumEase }} 
              className="font-serif text-4xl text-white cursor-default flex items-center gap-6"
            >
              TECHNICAL_STACK 
            </motion.h2>
          </div>

          <div 
            className="relative w-full max-w-4xl h-[450px] md:h-[550px] flex items-end justify-center perspective-[1400px]"
            onMouseEnter={() => setIsFolderHovered(true)}
            onMouseLeave={() => {
              setIsFolderHovered(false);
              setHoveredCard(null);
            }}
          >
            {/* AMBIENT TECH DECORATIONS */}
            <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }} 
                style={{ willChange: "transform" }}
                className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-white/5 opacity-50"
              />
              <div className="absolute bottom-0 w-[550px] h-[300px] overflow-hidden">
                {motes.map((mote, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "-150%", opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: mote.duration, delay: mote.delay, ease: "linear" }}
                      style={{ willChange: "transform" }}
                      className="absolute bottom-0 w-1 h-1 rounded-full bg-portfolioRed shadow-[0_0_5px_rgba(229,57,53,0.5)]"
                      style={{ left: mote.left }}
                    />
                ))}
              </div>
            </div>

            {/* NEON EDGE GLOW */}
            <motion.div 
              animate={{ opacity: isFolderHovered ? 0 : 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 w-[95%] md:w-[650px] h-[380px] z-0 pointer-events-none rounded-t-xl"
            >
              <div className="absolute inset-[-2px] md:inset-[-3px] rounded-t-xl blur-[10px]" style={{ background: 'linear-gradient(135deg, #00d2ff 0%, #a855f7 40%, #ec4899 70%, #f27121 100%)' }} />
            </motion.div>

            {/* Folder Back Cover */}
            <div className="absolute bottom-0 w-[95%] md:w-[650px] h-[380px] bg-[#111] rounded-t-xl border-t border-l border-r border-white/10 z-0 shadow-2xl" />

            {/* Vertical Tabbed Cards Container */}
            <div className="absolute bottom-0 z-10 w-[90%] md:w-[610px] h-[380px] flex items-end justify-center pointer-events-none">
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
                        borderColor: isHovered ? `${card.color}` : isFolderHovered ? `${card.color}60` : "rgba(255, 255, 255, 0.1)"
                      }}
                      transition={{ type: "spring", damping: 25, stiffness: 150 }}
                      style={{ willChange: "transform" }}
                      className={`absolute bottom-0 w-full h-full bg-[#0a0a0a] border pointer-events-auto cursor-pointer flex flex-col ${card.roundedClass}`}
                    >
                      {/* Inner Glow Hack (Performant alternative to boxShadow) */}
                      <motion.div 
                        initial={false}
                        animate={{ opacity: isHovered ? 0.15 : 0 }}
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: `radial-gradient(circle at 50% 0%, ${card.color}, transparent 60%)` }}
                      />

                      <motion.div 
                        animate={{
                            borderBottom: isHovered ? `1px solid ${card.color}` : isFolderHovered ? `1px solid ${card.color}60` : "1px solid #0a0a0a",
                            borderColor: isHovered ? `${card.color}` : isFolderHovered ? `${card.color}60` : "rgba(255,255,255,0.1)",
                        }}
                        className="absolute h-10 flex items-center justify-center border-t border-l border-r bg-[#0a0a0a] rounded-t-xl z-20 group"
                        style={{ left: card.tabLeft, width: "33.33%", top: "-39px" }}
                      >
                         <span className="font-mono text-[10px] md:text-xs text-white/80 uppercase tracking-widest group-hover:text-white transition-colors flex items-center gap-2">
                           {card.title}
                         </span>
                      </motion.div>

                      <div className="w-full h-full relative z-10 p-6 md:p-8 flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-12 h-12 rounded-lg border border-white/10 bg-[#111] flex items-center justify-center font-serif text-2xl font-bold" style={{ color: card.color }}>
                             {card.letter}
                           </div>
                           <h3 className="font-serif text-2xl md:text-3xl text-white">
                             {card.title}
                           </h3>
                        </div>
                        
                        <div className="mt-4 flex flex-col gap-6 w-full">
                          {card.items.map((item, i) => (
                            <div key={i} className="flex flex-col gap-2">
                               <div className="flex justify-between font-mono text-xs md:text-sm text-gray-300">
                                 <span>{item.name}</span>
                               </div>
                               <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden transform-gpu">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: isHovered ? `${item.level}%` : 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 + (i * 0.1), ease: premiumEase }}
                                    className="h-full rounded-full"
                                    style={{ backgroundColor: card.color, willChange: "width" }}
                                  />
                               </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
            </div>

            {/* Folder Front Flap */}
            <motion.div 
                style={{ transformOrigin: "bottom", willChange: "transform" }}
                initial={false}
                animate={{ 
                  rotateX: isFolderHovered ? -75 : 0, 
                  borderColor: isFolderHovered ? "rgba(229, 57, 53, 0.6)" : "rgba(255, 255, 255, 0.15)"
                }} 
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }} 
                className="absolute bottom-0 w-[95%] md:w-[650px] h-[380px] bg-gradient-to-t from-[#050505] to-[#1a1a1a] rounded-t-xl border-t border-l border-r z-40 flex items-center justify-center pointer-events-none shadow-[0_-10px_30px_rgba(0,0,0,0.8)]"
            >
                <div className="w-full h-full flex flex-col justify-center items-center opacity-40 border-[8px] md:border-[12px] border-[#0a0a0a] rounded-t-xl p-4">
                     <div className="w-full border-b-2 border-dashed border-white/50 mb-3"></div>
                     <span className="font-mono text-xl md:text-3xl tracking-[0.5em] text-white/90">CONFIDENTIAL</span>
                     <div className="w-full border-b-2 border-dashed border-white/50 mt-3"></div>
                </div>
            </motion.div>

          </div>

          {/* AI PROMPT INPUT BOX */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-2xl mt-16 relative group z-50 flex flex-col items-center"
          >
            <div className="w-full relative">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 rounded-2xl opacity-30 blur-[4px] group-hover:opacity-50 transition duration-500 pointer-events-none"></div>
              
              <form onSubmit={handleAiSubmit} className="relative bg-[#0d0d0f] rounded-2xl p-3 flex flex-col gap-4 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] w-full">
                <div className="flex items-center px-3 pt-2">
                  <span className="text-gray-500 mr-3 text-lg font-light">|</span>
                  <input
                    type="text"
                    value={aiQuery}
                    onChange={(e) => setAiQuery(e.target.value)}
                    placeholder="Ask anything about my experience... (Press Enter)"
                    className="w-full bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none text-sm md:text-base font-sans"
                    disabled={isAiTyping}
                  />
                </div>
                <div className="flex justify-between items-center px-1">
                  <div className="flex gap-2">
                    <button type="button" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 transition-colors border border-white/5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                    </button>
                    <button type="button" className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 text-xs gap-1.5 transition-colors border border-white/5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                      Normal <span className="text-[10px] opacity-50 ml-1">⌄</span>
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button type="submit" disabled={isAiTyping} className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#8A2387] via-[#E94057] to-[#F27121] flex items-center justify-center text-white transition-transform hover:scale-105 shadow-lg shadow-purple-500/20 disabled:opacity-50">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-ml-[1px] mt-[1px]"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <AnimatePresence>
              {(aiResponse || isAiTyping) && (
                <motion.div 
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  className="w-[95%] bg-[#0d0d0f]/90 rounded-xl p-5 mt-4 border border-white/5 shadow-xl overflow-hidden"
                >
                  {isAiTyping ? (
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs font-mono uppercase tracking-widest">
                       <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0 }}>Searching</motion.span>
                       <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}>.</motion.span>
                       <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}>.</motion.span>
                       <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.6 }}>.</motion.span>
                    </div>
                  ) : (
                    <p className="font-mono text-sm text-gray-300 leading-relaxed">
                      {aiResponse}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </section>

        {/* --- 4. PROJECTS SECTION --- */}
        <section id="projects" className="min-h-screen pt-16 relative z-20">
          <div className="overflow-hidden border-b border-white/10 pb-4 mb-12 flex justify-between items-end relative">
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
                whileHover={{ scale: 1.02, y: -5, borderColor: "rgba(229, 57, 53, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveProject(project)}
                className="bg-[#111] border border-white/10 rounded-2xl p-2 group cursor-pointer relative overflow-hidden transition-colors"
              >
                <div className="p-6 h-full flex flex-col relative z-10 rounded-xl bg-black/60 pointer-events-none">
                  <div className="flex justify-between items-start mb-16">
                    <div className="w-12 h-12 rounded-lg border border-white/10 bg-black flex items-center justify-center group-hover:bg-portfolioRed transition-all duration-300">
                      <span className="text-portfolioRed group-hover:text-white font-serif font-bold text-xl">{project.letter}</span>
                    </div>
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-serif text-3xl text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-400 mb-6 leading-relaxed line-clamp-2 font-light">
                      {project.shortDesc}
                    </p>
                    <ul className="font-mono text-[10px] text-gray-400 flex gap-2">
                      {project.tech.map((t) => (
                        <li key={t} className="bg-white/5 px-3 py-1.5 rounded-md border border-white/5">{t}</li>
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" onClick={() => setActiveProject(null)} />
            <motion.div initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} transition={{ duration: 0.4, ease: premiumEase }} className="relative w-full max-w-2xl bg-[#0a0a0a] border border-portfolioRed/40 rounded-3xl p-8 md:p-12 overflow-hidden cursor-default">
              
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
                    <span key={t} className="bg-portfolioRed/10 text-portfolioRed px-4 py-2 rounded-lg border border-portfolioRed/20 font-mono text-xs flex items-center gap-2">
                        ◆ {t}
                    </span>
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