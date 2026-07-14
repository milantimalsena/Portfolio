import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Palette, Layers, Zap } from 'lucide-react'

const stats = [
  { value: '20+', label: 'Projects Delivered', icon: Layers },
  { value: '50+', label: 'Happy Clients', icon: Zap },
  { value: '3+', label: 'Years Experience', icon: Code },
]

const timeline = [
  { year: '2025', event: 'BSc (Hons) Computing' },
  { year: '2024', event: 'Started Freelance Development' },
  { year: '2023', event: 'UI/UX Design Practice' },
  { year: '2022', event: 'Started Design Journey' },
]

function AnimatedCounter({ value, label, icon: Icon, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0, 1] }}
      className="relative group"
    >
      <div className="p-6 bg-card border border-card-border rounded-2xl hover:border-muted-foreground/20 transition-all duration-500">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Icon size={20} className="text-primary" />
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
            About
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
            Engineering elegant<br />
            <span className="text-primary">digital experiences</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            I am a Full Stack Developer and UI/UX Designer who bridges the gap between design and engineering. 
            With a keen eye for detail and a passion for clean architecture, I build digital products that are 
            as beautiful as they are functional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
            className="p-8 md:p-10 bg-card border border-card-border rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Palette size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">Design Philosophy</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe great design is invisible. Every pixel, interaction, and animation should serve a purpose — 
              guiding users effortlessly toward their goals while creating memorable experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My approach combines user-centered design principles with modern engineering practices to deliver 
              products that are both intuitive and scalable.
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
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Code size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">Engineering Approach</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Clean code is not just about making things work — it is about making them maintainable, scalable, 
              and performant. I follow industry best practices and modern architecture patterns.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From RESTful APIs to component-driven frontends, every line of code is crafted with intention 
              and a focus on long-term sustainability.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <AnimatedCounter key={stat.label} {...stat} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute left-4 top-0 bottom-0 w-px bg-card-border" aria-hidden="true" />
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-[11px] top-1.5 w-[10px] h-[10px] rounded-full bg-primary border-2 border-background" />
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-semibold text-primary shrink-0">{item.year}</span>
                  <span className="text-foreground font-medium">{item.event}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
