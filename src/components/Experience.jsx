import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const experience = [
  {
    role: 'Software Developer',
    company: 'Kafals',
    period: '2024 - Present',
    type: 'work',
    description: 'Leading full-stack development for multiple high-impact digital platforms.',
    highlights: [
      'Eastern Tourism Mart — Regional tourism booking platform',
      'Madhesh Tourism Mart — Cultural tourism marketplace',
      'Birat TV — News broadcasting portal with live streaming',
      'Election Campaign Website — Political campaign management system',
    ],
  },
  {
    role: 'Freelance Designer & Developer',
    company: 'Self-Employed',
    period: '2023 - Present',
    type: 'work',
    description: 'Delivering premium web solutions to diverse clients across industries.',
    highlights: [
      'Built 20+ web applications and marketing sites',
      'Specialized in React, Flutter, and modern CSS architectures',
      'End-to-end product design and development workflow',
    ],
  },
  {
    role: 'BSc (Hons) Computing',
    company: 'University',
    period: '2022 - 2025',
    type: 'education',
    description: 'Comprehensive computing degree with focus on software engineering and design.',
    highlights: [
      'Full-stack development and database management',
      'Human-computer interaction and UI/UX principles',
      'Software architecture and design patterns',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative z-10 bg-section/50">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
            Where I have<br />
            <span className="text-primary">worked & grown</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[23px] md:left-[31px] top-0 bottom-0 w-px bg-card-border" aria-hidden="true" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.div
                key={item.role + item.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.1, 0, 1] }}
                className="relative pl-14 md:pl-16"
              >
                <div className="absolute left-0 top-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-card border border-card-border flex items-center justify-center shadow-sm">
                  {item.type === 'education' ? (
                    <GraduationCap size={20} className="text-primary" />
                  ) : (
                    <Briefcase size={20} className="text-primary" />
                  )}
                </div>

                <div className="p-6 md:p-8 bg-card border border-card-border rounded-2xl hover:border-muted-foreground/20 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <p className="text-primary font-medium mt-0.5">{item.company}</p>
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-muted-foreground px-3 py-1.5 bg-muted rounded-full inline-flex items-center w-fit whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                  <ul className="space-y-2" role="list">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
