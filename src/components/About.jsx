import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Palette, Layers, Zap, GraduationCap, Laptop, Sparkles, Rocket } from 'lucide-react'

const stats = [
  { value: '20+', label: 'Projects Delivered', icon: Layers },
  { value: '50+', label: 'Happy Clients', icon: Zap },
  { value: '3+', label: 'Years Design & Dev', icon: Code },
]

const currentStatus = [
  { icon: GraduationCap, text: 'Studying BSc (Hons) Computing' },
  { icon: Laptop, text: 'Engineering full-stack web & mobile apps' },
  { icon: Sparkles, text: 'Designing user-centered digital products' },
  { icon: Rocket, text: 'Open to freelance, internship & software roles' },
]

function AnimatedCounter({ value, label, icon: Icon, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0, 1] }}
      className="relative group"
    >
      <div className="p-6 bg-card border border-card-border rounded-2xl hover:border-muted-foreground/30 transition-all duration-500 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Icon size={20} />
          </div>
        </div>
        <div className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-1">
          {isInView ? value : '0'}
        </div>
        <div className="text-sm text-muted-foreground font-medium">{label}</div>
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative z-10">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">
            About Milan
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
            Building real products<br />
            <span className="text-primary">from concept to code</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            I am a Computing student, Full-Stack Developer, and UI/UX Designer based in Nepal. I focus on creating clean, intuitive user interfaces backed by solid web architectures — turning practical ideas into working digital products.
          </p>
        </motion.div>

        {/* Currently / Present Status Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-6 md:p-8 bg-card border border-card-border rounded-2xl relative overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
            </span>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-foreground">
              Currently Focus & Status
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentStatus.map((item) => {
              const IconComp = item.icon
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl border border-card-border/60"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <IconComp size={16} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Dual Pillar Mindset */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
            className="p-8 md:p-10 bg-card border border-card-border rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Palette size={20} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">Design Perspective</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
              I view design as problem-solving. Great interfaces should be effortless to navigate, aesthetically refined, and accessible to everyone.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              My goal is always to create functional user flows that reduce friction while establishing a distinct brand identity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
            className="p-8 md:p-10 bg-card border border-card-border rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Code size={20} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">Engineering Philosophy</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
              Writing clean, maintainable code is key to building software that lasts. I follow component-driven architecture and solid API standards.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Understanding both the frontend UI and backend services allows me to deliver cohesive, performant applications.
            </p>
          </motion.div>
        </div>

        {/* Verified Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <AnimatedCounter key={stat.label} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
