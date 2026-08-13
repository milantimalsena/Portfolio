import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowUpRight, X, CheckCircle2, Layers } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { cn } from '../lib/utils'

const projects = [
  {
    id: 'gupta-nexus',
    title: 'Gupta Nexus',
    tagline: 'Enterprise Digital Management Platform',
    role: 'Lead Full-Stack Developer & UI Designer',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    challenge: 'Managing operational workflows, client communication, and project reporting across fragmented communication tools resulted in lost context and inefficiency.',
    approach: 'Designed an intuitive dashboard interface in Figma focusing on clean hierarchy and single-click access to active workflows. Built a decoupled React frontend backed by a Node.js REST API.',
    solution: 'Delivered an integrated enterprise portal featuring real-time status dashboards, client management modules, and automated workflow tracking.',
    contribution: 'Architected database schemas, designed high-fidelity UI components, and implemented frontend state management.',
    outcome: 'Streamlined client operations and replaced legacy offline tracking with a modern digital workspace.',
    live: '#',
    github: 'https://github.com/milantimalsena',
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    id: 'flowvent',
    title: 'Flowvent',
    tagline: 'Event Planning & Workflow Application',
    role: 'Full-Stack Developer & UI/UX Designer',
    tech: ['React', 'JavaScript', 'Node.js', 'Express', 'Tailwind CSS'],
    challenge: 'Event organizers needed a streamlined system to coordinate scheduling, attendee registrations, and vendor workflows without complex software overhead.',
    approach: 'Created modular user flows and interactive visual schedules to minimize cognitive load during high-pressure event execution.',
    solution: 'Built a responsive event workspace supporting dynamic registration forms, agenda builders, and automated notifications.',
    contribution: 'Designed user interface flows, created component libraries, and connected backend API endpoints.',
    outcome: 'Reduced event setup time and provided a unified management dashboard for organizers.',
    live: '#',
    github: 'https://github.com/milantimalsena',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: 'eastern-tourism',
    title: 'Eastern Tourism Mart',
    tagline: 'Regional Tourism Discovery & Booking Portal',
    role: 'Software Developer (Kafals)',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'REST API'],
    challenge: 'Eastern Nepal’s rich cultural destinations lacked a centralized, high-performance digital portal for international visitors and booking agencies.',
    approach: 'Emphasized rich visual storytelling, fast page load speeds, and intuitive destination discovery filtered by tour categories.',
    solution: 'Deployed a production tourism portal featuring tour package listings, gallery showcases, and direct travel inquiry forms.',
    contribution: 'Developed responsive frontend interfaces, optimized image rendering performance, and integrated query API endpoints.',
    outcome: 'Promoted regional tourism destinations and enabled seamless travel package inquiries.',
    live: 'http://Easterntravelmart2026.com',
    github: 'https://easterntravelmart.com/',
    gradient: 'from-sky-500/20 to-blue-500/20',
  },
  {
    id: 'madhesh-tourism',
    title: 'Madhesh Tourism Mart',
    tagline: 'Cultural Heritage & Tourism Marketplace',
    role: 'Software Developer (Kafals)',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    challenge: 'Connecting local cultural heritage sites, regional events, and hospitality businesses with travelers across Nepal.',
    approach: 'Created accessible directory layouts with multilingual design considerations and interactive event schedules.',
    solution: 'Built a regional marketplace featuring cultural travel itineraries, vendor showcases, and event announcements.',
    contribution: 'Designed card component structures, implemented backend data fetching, and built responsive layout grids.',
    outcome: 'Elevated cultural tourism visibility and connected regional vendors with visitors.',
    live: '#',
    github: 'https://github.com/milantimalsena',
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    id: 'birat-tv',
    title: 'Birat TV',
    tagline: 'Modern News Broadcasting & Live Streaming Portal',
    role: 'Software Developer (Kafals)',
    tech: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
    challenge: 'Delivering breaking news updates and high-traffic live video streams seamlessly across mobile devices.',
    approach: 'Architected a lightweight client bundle using Vite and React with embedded streaming players optimized for low latency.',
    solution: 'Launched a news broadcasting web portal with live TV streaming, article categorization, and breaking news alerts.',
    contribution: 'Implemented live video player integrations, responsive article typography, and high-performance layout rendering.',
    outcome: 'Delivered smooth live stream delivery and quick article reading experience during peak news cycles.',
    live: 'http://www.BiratTv.com.np',
    github: 'https://github.com/milantimalsena',
    gradient: 'from-red-500/20 to-rose-500/20',
  },
  {
    id: 'saral-sewa',
    title: 'Saral Sewa',
    tagline: 'Public Services Aggregator Platform',
    role: 'Full Stack Mobile & Web Developer',
    tech: ['Flutter', 'Dart', 'Django', 'SQLite', 'REST API'],
    challenge: 'Complex civic guidelines and public service procedures created barrier for citizens seeking clear government information.',
    approach: 'Designed a single-window mobile interface prioritizing accessibility, clean typography, and quick search indexing.',
    solution: 'Built a multi-service public aggregator providing step-by-step service guides, application requirements, and status updates.',
    contribution: 'Developed cross-platform mobile views using Flutter and built Django REST backend endpoints.',
    outcome: 'Streamlined civic access and empowered users with simplified public service information.',
    live: '#',
    github: 'https://github.com/milantimalsena',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 'gayatri-campaign',
    title: 'Gayatri Katwal Bhandari Campaign',
    tagline: 'Political Campaign Digital Presence',
    role: 'Full-Stack Developer',
    tech: ['React', 'Tailwind CSS', 'Node.js'],
    challenge: 'Communicating the candidate’s vision, policy goals, and event calendar clearly to constituents during an active campaign season.',
    approach: 'Designed a high-trust, authoritative visual identity paired with fast news feed updates and interactive event calendars.',
    solution: 'Delivered a campaign web portal featuring candidate manifestos, press releases, media galleries, and constituent interaction forms.',
    contribution: 'Designed and built the full web application from initial mockup through deployment.',
    outcome: 'Strengthened digital constituent engagement and presented a clear campaign platform.',
    live: '#',
    github: 'https://github.com/milantimalsena',
    gradient: 'from-blue-500/20 to-indigo-500/20',
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
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
            Digital products<br />
            <span className="text-primary">designed & shipped</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            A selection of real-world applications, platforms, and digital experiences I have designed, engineered, and deployed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0, 1] }}
              className={cn(
                'group relative bg-card border border-card-border rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between',
                'hover:border-muted-foreground/30 transition-all duration-500 shadow-sm hover:shadow-md'
              )}
              onClick={() => setSelected(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelected(project)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View detailed case study for ${project.title}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full border border-primary/20">
                      {project.role}
                    </span>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 font-medium">{project.tagline}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Key Contribution</div>
                    <p className="text-foreground/90 text-sm leading-relaxed line-clamp-2">
                      {project.contribution}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-md border border-card-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-card-border/60 flex items-center justify-between text-sm">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-primary group-hover:gap-2 transition-all">
                      Read Case Study <ArrowUpRight size={15} />
                    </span>
                    {project.live !== '#' && (
                      <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" /> Live
                      </span>
                    )}
                  </div>
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
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8 overflow-y-auto"
            onClick={() => setSelected(null)}
          >
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0, 1] }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-card border border-card-border rounded-3xl shadow-2xl my-auto"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`Case study: ${selected.title}`}
            >
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br ${selected.gradient}`} />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-md border border-card-border rounded-xl hover:bg-muted transition-colors z-20 text-foreground"
                aria-label="Close case study"
              >
                <X size={18} />
              </button>

              <div className="relative pt-16 px-6 md:px-10 pb-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full border border-primary/20">
                    {selected.role}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-2">
                  {selected.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8 font-medium">{selected.tagline}</p>

                <div className="space-y-8">
                  {/* Case Study Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-muted/40 rounded-2xl border border-card-border">
                    <div>
                      <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> The Challenge
                      </h4>
                      <p className="text-sm text-foreground/90 leading-relaxed">{selected.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-accent" /> My Approach
                      </h4>
                      <p className="text-sm text-foreground/90 leading-relaxed">{selected.approach}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">The Solution</h4>
                    <p className="text-foreground leading-relaxed">{selected.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">My Role & Contribution</h4>
                    <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10 text-foreground">
                      <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                      <p className="text-sm leading-relaxed">{selected.contribution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium bg-muted text-foreground rounded-full border border-card-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Outcome & Impact</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{selected.outcome}</p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-card-border">
                    {selected.live !== '#' && (
                      <a
                        href={selected.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all text-sm shadow-sm"
                      >
                        <ExternalLink size={16} />
                        Visit Live Project
                      </a>
                    )}
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-card-border text-foreground font-semibold rounded-xl hover:border-muted-foreground/30 transition-all text-sm"
                    >
                      <FaGithub size={16} />
                      View Source Code
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
