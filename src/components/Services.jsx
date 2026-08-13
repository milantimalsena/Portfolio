import { motion } from 'framer-motion'
import { Palette, Code, Server, Sparkles, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    subtitle: 'User-focused interfaces & experiences',
    description:
      'Designing intuitive, accessible, and elegant digital interfaces. From user research and wireframing to high-fidelity Figma prototypes and design systems.',
    tags: ['Figma', 'Prototyping', 'Design Systems', 'Wireframing', 'User Research'],
    gradient: 'from-blue-500/10 to-indigo-500/10',
  },
  {
    icon: Code,
    title: 'Web Development',
    subtitle: 'Modern, responsive web applications',
    description:
      'Crafting high-performance frontend applications with React, Tailwind CSS, and Framer Motion. Focused on clean code, responsive layouts, and interactive experiences.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Responsive Design'],
    gradient: 'from-sky-500/10 to-blue-500/10',
  },
  {
    icon: Server,
    title: 'Full-Stack Development',
    subtitle: 'End-to-end backend & API architecture',
    description:
      'Building robust server-side logic, RESTful APIs, database structures, and backend systems using Node.js, Express, Django, and MongoDB.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'SQL'],
    gradient: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    icon: Sparkles,
    title: 'Digital & Creative Design',
    subtitle: 'Branding & visual communication',
    description:
      'Creating strong visual identities, digital campaign assets, promotional graphics, and brand materials that leave a lasting professional impression.',
    tags: ['Branding', 'Visual Identity', 'Photoshop', 'Illustrator', 'Graphics'],
    gradient: 'from-amber-500/10 to-orange-500/10',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative z-10 bg-section/40">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
            What I<br />
            <span className="text-primary">design & build</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            I bridge the gap between design and development, handling the end-to-end process from initial concept and UI design through to full-stack code and deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0, 1] }}
                className="group relative p-8 bg-card border border-card-border rounded-2xl hover:border-muted-foreground/20 transition-all duration-500 flex flex-col justify-between"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                      <IconComponent size={24} />
                    </div>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-xl hover:bg-muted/50"
                      aria-label={`Discuss ${service.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>

                  <h3 className="text-2xl font-display font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-4">{service.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-card-border/60">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-muted/60 rounded-full border border-card-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
