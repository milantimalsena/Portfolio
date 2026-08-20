import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Code } from 'lucide-react'

const experienceTimeline = [
  {
    role: 'Software Developer',
    organization: 'Kafals',
    period: '2025 - Present',
    type: 'work',
    icon: Briefcase,
    description: 'Leading full-stack design & development for client production platforms.',
    highlights: [
      'Bholi Ko Itahari — Vision 2050 civic urban development platform',
      'Birat TV — News broadcasting portal with live video streaming player',
      'Gayatri Katwal Bhandari Campaign — Political campaign web presence',
      'Madhesh Tourism Mart — Cultural tourism marketplace',
      'Eastern Tourism Mart — Regional tourism discovery & booking portal',
    ],
  },
  {
    role: 'Freelance Full-Stack Developer & UI Designer',
    organization: 'Self-Employed',
    period: '2023 - Present',
    type: 'freelance',
    icon: Code,
    description: 'Delivering end-to-end custom web applications, UI design systems, and digital client solutions.',
    highlights: [
      'Designed & developed 20+ web applications, dashboards, and marketing portals',
      'Built custom responsive interfaces in React, Tailwind CSS, and Figma',
      'Managed full client lifecycle from wireframing to production cloud deployment',
    ],
  },
  {
    role: 'BSc (Hons) Computing Student',
    organization: 'Undergraduate Education',
    period: '2022 - Present',
    type: 'education',
    icon: GraduationCap,
    description: 'Focusing on computer science fundamentals, software engineering, database systems, and web architecture.',
    highlights: [
      'Coursework in Data Structures, Web Development, Object-Oriented Programming, and Databases',
      'Building hands-on full-stack projects combining backend services and mobile/web frontends',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative z-10 bg-section/40">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">
            Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
            Experience &<br />
            <span className="text-primary">education</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            A chronological timeline of my professional work, software development experience, and academic journey.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[23px] md:left-[31px] top-0 bottom-0 w-px bg-card-border" aria-hidden="true" />

          <div className="space-y-8">
            {experienceTimeline.map((item, index) => {
              const IconComp = item.icon
              return (
                <motion.div
                  key={item.role + item.organization}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0, 1] }}
                  className="relative pl-14 md:pl-20"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-card border border-card-border flex items-center justify-center shadow-sm text-primary">
                    <IconComp size={22} />
                  </div>

                  <div className="p-6 md:p-8 bg-card border border-card-border rounded-2xl hover:border-muted-foreground/30 transition-all duration-500">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                          {item.role}
                        </h3>
                        <p className="text-primary font-medium mt-0.5 text-sm md:text-base">{item.organization}</p>
                      </div>
                      <span className="text-xs font-semibold tracking-wider text-muted-foreground px-3 py-1.5 bg-muted rounded-full inline-flex items-center w-fit whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">{item.description}</p>

                    <ul className="space-y-2" role="list">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3 text-xs md:text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
