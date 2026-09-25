import React, { useState, useRef, useCallback } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { TechLogos } from './TechLogos'
import './TechStack.css'

// Tier 1: Core Web & Frontend Foundations (Inner Orbit)
const innerOrbitTechs = [
  {
    name: 'HTML5',
    category: 'Markup Standard',
    brandColor: '#E34F26',
    glowColor: 'rgba(227, 79, 38, 0.45)',
    angle: 0,
    logo: TechLogos.HTML5,
  },
  {
    name: 'CSS3',
    category: 'Styling Standard',
    brandColor: '#1572B6',
    glowColor: 'rgba(21, 114, 182, 0.45)',
    angle: 72,
    logo: TechLogos.CSS3,
  },
  {
    name: 'JavaScript',
    category: 'Core Web Language',
    brandColor: '#F7DF1E',
    glowColor: 'rgba(247, 223, 30, 0.45)',
    angle: 144,
    logo: TechLogos.JavaScript,
  },
  {
    name: 'TypeScript',
    category: 'Typed Language',
    brandColor: '#3178C6',
    glowColor: 'rgba(49, 120, 198, 0.45)',
    angle: 216,
    logo: TechLogos.TypeScript,
  },
  {
    name: 'React',
    category: 'Frontend UI',
    brandColor: '#61DAFB',
    glowColor: 'rgba(97, 218, 251, 0.45)',
    angle: 288,
    logo: TechLogos.React,
  },
]

// Tier 2: Backend, Database & Product Design (Middle Orbit)
const middleOrbitTechs = [
  {
    name: 'Node.js',
    category: 'Backend Runtime',
    brandColor: '#5FA04E',
    glowColor: 'rgba(95, 160, 78, 0.45)',
    angle: 30,
    logo: TechLogos.NodeJS,
  },
  {
    name: 'MongoDB',
    category: 'NoSQL Database',
    brandColor: '#47A248',
    glowColor: 'rgba(71, 162, 72, 0.45)',
    angle: 90,
    logo: TechLogos.MongoDB,
  },
  {
    name: 'Python',
    category: 'Backend & Scripting',
    brandColor: '#3776AB',
    glowColor: 'rgba(55, 118, 171, 0.45)',
    angle: 150,
    logo: TechLogos.Python,
  },
  {
    name: 'Java',
    category: 'Enterprise Backend',
    brandColor: '#EA2D2E',
    glowColor: 'rgba(234, 45, 46, 0.45)',
    angle: 210,
    logo: TechLogos.Java,
  },
  {
    name: 'Tailwind CSS',
    category: 'Modern Styling',
    brandColor: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.45)',
    angle: 270,
    logo: TechLogos.Tailwind,
  },
  {
    name: 'Figma',
    category: 'UI/UX Design',
    brandColor: '#F24E1E',
    glowColor: 'rgba(242, 78, 30, 0.45)',
    angle: 330,
    logo: TechLogos.Figma,
  },
]

// Tier 3: Cloud, DevOps, Mobile & AI Platforms (Outer Orbit)
const outerOrbitTechs = [
  {
    name: 'Docker',
    category: 'Containerization',
    brandColor: '#2496ED',
    glowColor: 'rgba(36, 150, 237, 0.45)',
    angle: 0,
    logo: TechLogos.Docker,
  },
  {
    name: 'AWS',
    category: 'Cloud Infrastructure',
    brandColor: '#FF9900',
    glowColor: 'rgba(255, 153, 0, 0.45)',
    angle: 60,
    logo: TechLogos.AWS,
  },
  {
    name: 'cPanel',
    category: 'Hosting & Server Admin',
    brandColor: '#FF6C2C',
    glowColor: 'rgba(255, 108, 44, 0.45)',
    angle: 120,
    logo: TechLogos.CPanel,
  },
  {
    name: 'GitHub',
    category: 'Version Control & CI',
    brandColor: '#24292F',
    glowColor: 'rgba(0, 0, 0, 0.35)',
    angle: 180,
    logo: TechLogos.GitHub,
  },
  {
    name: 'Flutter',
    category: 'Cross-Platform Mobile',
    brandColor: '#02569B',
    glowColor: 'rgba(2, 86, 155, 0.45)',
    angle: 240,
    logo: TechLogos.Flutter,
  },
  {
    name: 'OpenAI',
    category: 'AI & Large Language Models',
    brandColor: '#10A37F',
    glowColor: 'rgba(16, 163, 127, 0.45)',
    angle: 300,
    logo: TechLogos.OpenAI,
  },
]

function TechBadge({ tech, counterClass, radiusVar, isHovered, onHover, onLeave }) {
  const Logo = tech.logo
  return (
    <div
      className="orbit-slot"
      style={{
        '--angle': `${tech.angle}deg`,
        '--radius': `var(${radiusVar})`,
      }}
      onMouseEnter={() => onHover(tech)}
      onMouseLeave={onLeave}
    >
      <div className={counterClass}>
        <div
          className={`relative group flex items-center justify-center w-full h-full rounded-full transition-all duration-300 cursor-pointer select-none ${
            isHovered ? 'scale-125 z-40' : 'hover:scale-115'
          }`}
          style={{
            boxShadow: isHovered
              ? `0 0 24px ${tech.glowColor}, 0 6px 16px rgba(0, 0, 0, 0.12)`
              : undefined,
          }}
          aria-label={tech.name}
        >
          {/* Badge Background Circle */}
          <div
            className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 p-2 sm:p-2.5 ${
              isHovered
                ? 'bg-white dark:bg-[#1E1E1E] ring-2'
                : 'bg-white/95 dark:bg-[#1C1C1E]/95 shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.35)] border border-slate-200/70 dark:border-white/10'
            }`}
            style={{
              borderColor: isHovered ? tech.brandColor : undefined,
            }}
          >
            <Logo className="w-full h-full object-contain" />
          </div>

          {/* Floating Tooltip Pill */}
          <div
            className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900/90 dark:bg-white/95 text-white dark:text-gray-900 text-[11px] font-medium tracking-tight rounded-md whitespace-nowrap shadow-lg backdrop-blur-sm pointer-events-none transition-all duration-200 flex items-center gap-1.5 ${
              isHovered
                ? 'opacity-100 -translate-y-1 scale-100'
                : 'opacity-0 translate-y-0 scale-95 pointer-events-none'
            }`}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block shrink-0"
              style={{ backgroundColor: tech.brandColor }}
            />
            <span className="font-semibold">{tech.name}</span>
            <span className="opacity-70 text-[10px]">· {tech.category}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TechStack() {
  const [activeTech, setActiveTech] = useState(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const stageRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const handleMouseMove = useCallback(
    (e) => {
      if (prefersReducedMotion || !stageRef.current) return
      const rect = stageRef.current.getBoundingClientRect()
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
      setTilt({
        x: Math.max(-1, Math.min(1, x)) * 5,
        y: Math.max(-1, Math.min(1, y)) * -5,
      })
    },
    [prefersReducedMotion]
  )

  const handleMouseLeaveSection = useCallback(() => {
    setTilt({ x: 0, y: 0 })
    setActiveTech(null)
  }, [])

  return (
    <section
      id="tech-stack"
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-background select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeaveSection}
    >
      {/* Subtle Background Glows matching portfolio aesthetics */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[650px] h-[350px] sm:h-[500px] md:h-[650px] rounded-full bg-gradient-to-tr from-purple-500/10 via-indigo-500/8 to-blue-400/5 blur-[90px] dark:blur-[120px] dark:opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] rounded-full bg-violet-500/10 blur-[60px] dark:opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-container px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 inline-block"
          >
            SKILLS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-foreground mb-4"
          >
            Tech Stack
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-pretty max-w-lg mx-auto"
          >
            Technologies I use to design, build and ship digital products.
          </motion.p>
        </div>

        {/* Orbit Visualization Stage */}
        <div
          ref={stageRef}
          data-paused={activeTech !== null}
          className="orbit-stage relative w-[310px] h-[310px] sm:w-[480px] sm:h-[480px] md:w-[560px] md:h-[560px] lg:w-[650px] lg:h-[650px] mx-auto flex items-center justify-center transition-transform duration-200 ease-out"
          style={{
            transform: prefersReducedMotion
              ? 'none'
              : `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          }}
        >
          {/* Subtle Ambient Radial Disk Backdrop */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at center, rgba(139, 92, 246, 0.08) 0%, rgba(99, 102, 241, 0.04) 40%, rgba(245, 158, 11, 0.02) 65%, transparent 75%)',
            }}
          />

          {/* 1. OUTER ORBIT (Clockwise, 6 items) */}
          <div className="orbit-ring orbit-ring-outer">
            {outerOrbitTechs.map((tech) => (
              <TechBadge
                key={tech.name}
                tech={tech}
                counterClass="orbit-counter-outer-cw"
                radiusVar="--radius-outer"
                isHovered={activeTech?.name === tech.name}
                onHover={setActiveTech}
                onLeave={() => setActiveTech(null)}
              />
            ))}
          </div>

          {/* 2. MIDDLE ORBIT (Counter-Clockwise, 6 items) */}
          <div className="orbit-ring orbit-ring-middle">
            {middleOrbitTechs.map((tech) => (
              <TechBadge
                key={tech.name}
                tech={tech}
                counterClass="orbit-counter-ccw"
                radiusVar="--radius-middle"
                isHovered={activeTech?.name === tech.name}
                onHover={setActiveTech}
                onLeave={() => setActiveTech(null)}
              />
            ))}
          </div>

          {/* 3. INNER ORBIT (Clockwise, 4 items) */}
          <div className="orbit-ring orbit-ring-inner">
            {innerOrbitTechs.map((tech) => (
              <TechBadge
                key={tech.name}
                tech={tech}
                counterClass="orbit-counter-cw"
                radiusVar="--radius-inner"
                isHovered={activeTech?.name === tech.name}
                onHover={setActiveTech}
                onLeave={() => setActiveTech(null)}
              />
            ))}
          </div>

          {/* CENTER NUCLEUS / CODE SYMBOL */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="orbit-center-node group"
            title="Milan Timalsena · Core Stack"
          >
            {/* Subtle Pulsing Halo */}
            <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-md group-hover:blur-lg transition-all duration-300 pointer-events-none" />

            {/* Glowing Code Symbol */}
            <span className="font-mono font-bold text-white text-base sm:text-xl md:text-2xl tracking-tighter select-none drop-shadow-md">
              &lt;/&gt;
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
