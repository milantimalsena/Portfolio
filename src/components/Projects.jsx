import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowUpRight, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { cn } from '../lib/utils'

const projects = [
  {
    title: 'Saral Sewa',
    tagline: 'Simplified Access to Public Services',
    description: 'A service aggregator platform providing a streamlined gateway to government and public services through an intuitive, accessible interface.',
    role: 'Full Stack Developer',
    tech: ['Flutter', 'Dart', 'Django', 'REST API', 'SQLite'],
    features: ['Multi-service integration', 'User authentication', 'Real-time status tracking', 'Responsive mobile design'],
    outcome: 'Delivered a user-friendly platform that simplifies access to essential public services.',
    image: null,
    live: '#',
    github: 'https://github.com/milantimalsena',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Restaurant Management System',
    tagline: 'Complete Digital Restaurant Operations',
    description: 'A comprehensive restaurant management solution featuring order management, inventory tracking, billing, and analytics dashboards.',
    role: 'Full Stack Developer',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    features: ['Order management system', 'Inventory tracking', 'Billing & invoicing', 'Sales analytics'],
    outcome: 'Streamlined restaurant operations with an intuitive digital management platform.',
    image: null,
    live: '#',
    github: 'https://github.com/milantimalsena',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Eastern Tourism Mart',
    tagline: 'Regional Tourism Discovery Platform',
    description: 'An elegant travel booking and exposition platform showcasing Eastern Nepals cultural and natural heritage with seamless navigation.',
    role: 'Software Developer',
    tech: ['React', 'API Integration', 'Responsive Design'],
    features: ['Tour package listings', 'Booking system', 'Image galleries', 'Location mapping'],
    outcome: 'Created a digital showcase that promotes regional tourism and facilitates bookings.',
    image: null,
    live: 'http://Easterntravelmart2026.com',
    github: 'https://easterntravelmart.com/',
    gradient: 'from-sky-500/20 to-blue-500/20',
  },
  {
    title: 'Madhesh Tourism Mart',
    tagline: 'Cultural Heritage & Tourism Marketplace',
    description: 'A digital marketplace celebrating Madhesh provinces cultural heritage with tour packages, event listings, and community engagement features.',
    role: 'Software Developer',
    tech: ['React', 'Node.js', 'MongoDB'],
    features: ['Cultural tour packages', 'Event management', 'Community forums', 'Multilingual support'],
    outcome: 'Built a comprehensive tourism platform highlighting regional cultural heritage.',
    image: null,
    live: '#',
    github: 'https://github.com/milantimalsena',
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    title: 'Birat TV',
    tagline: 'Modern News Broadcasting Portal',
    description: 'A responsive news broadcasting portal offering live streaming capabilities, article management, and high-performance media delivery.',
    role: 'Software Developer',
    tech: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
    features: ['Live video streaming', 'Article CMS', 'Breaking news alerts', 'Responsive design'],
    outcome: 'Delivered a modern news platform with seamless live streaming and content management.',
    image: null,
    live: 'http://www.BiratTv.com.np',
    github: 'https://github.com/milantimalsena',
    gradient: 'from-red-500/20 to-rose-500/20',
  },
  {
    title: 'Gayatri Katwal Bhandari Campaign',
    tagline: 'Political Campaign Digital Presence',
    description: 'A political campaign website designed to effectively communicate the candidates vision, achievements, and connect with constituents.',
    role: 'Full Stack Developer',
    tech: ['React', 'Tailwind CSS', 'Node.js'],
    features: ['Candidate profile', 'News & updates', 'Event calendar', 'Donation integration'],
    outcome: 'Created a compelling digital campaign presence that effectively engaged voters.',
    image: null,
    live: '#',
    github: 'https://github.com/milantimalsena',
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'Portfolio Website',
    tagline: 'Premium Digital Product Studio',
    description: 'This portfolio — a handcrafted, luxury editorial experience showcasing design and engineering capabilities.',
    role: 'Designer & Developer',
    tech: ['React', 'Vite', 'Framer Motion', 'Tailwind CSS'],
    features: ['Custom animations', 'Dark/light mode', 'Command palette', 'Responsive design'],
    outcome: 'A memorable, premium portfolio that communicates sophistication and technical expertise.',
    image: null,
    live: '#',
    github: 'https://github.com/milantimalsena',
    gradient: 'from-primary/20 to-secondary-accent/20',
  },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-24 md:py-32 relative z-10">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
            Featured<br />
            <span className="text-primary">work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0, 1] }}
              className={cn(
                'group relative bg-card border border-card-border rounded-2xl overflow-hidden cursor-pointer',
                'hover:border-muted-foreground/20 transition-all duration-500'
              )}
              onClick={() => setSelected(project)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(project) } }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    {project.role}
                  </span>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 font-medium">{project.tagline}</p>
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full border border-card-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <span className="inline-flex items-center gap-1.5 font-medium text-primary group-hover:gap-2 transition-all">
                    View Case Study <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0, 1] }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-card border border-card-border rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`Case study: ${selected.title}`}
            >
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br ${selected.gradient}`} />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm border border-card-border rounded-xl hover:bg-muted transition-colors z-10"
                aria-label="Close case study"
              >
                <X size={18} />
              </button>

              <div className="relative pt-20 px-6 md:px-10 pb-10">
                <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2 block">
                  {selected.role}
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-2">
                  {selected.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8">{selected.tagline}</p>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">Overview</h4>
                    <p className="text-foreground leading-relaxed">{selected.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2" role="list">
                      {selected.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-3">Outcome</h4>
                    <p className="text-foreground leading-relaxed">{selected.outcome}</p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-card-border">
                    {selected.live !== '#' && (
                      <a
                        href={selected.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all text-sm"
                      >
                        <ExternalLink size={16} />
                        Live Website
                      </a>
                    )}
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-card-border text-foreground font-semibold rounded-xl hover:border-muted-foreground/30 transition-all text-sm"
                    >
                      <FaGithub size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
