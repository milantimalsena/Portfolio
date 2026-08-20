import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ExternalLink, ArrowUpRight, X, Globe } from 'lucide-react'
import { cn } from '../lib/utils'

import bholiLogo from '../assets/work/Bholi ko itahari.png'
import biratTvLogo from '../assets/work/Birat Tv.svg'
import easternMartLogo from '../assets/work/Eaastern travel mart.png'
import gayatriLogo from '../assets/work/gayatri katuwal bhandari.jpeg'
import madheshMartLogo from '../assets/work/madhesh Torish mart.png'
import guptaNexusLogo from '../assets/work/Gupta nexus.png'

const projects = [
  {
    id: 'gupta-nexus',
    title: 'Gupta Nexus',
    tagline: 'Enterprise Digital Management Platform',
    category: 'Enterprise Suite',
    tech: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    challenge: 'Managing operational workflows, client communication, and project reporting across fragmented communication tools resulted in lost context and inefficiency.',
    approach: 'Collaborated to design an intuitive dashboard in Figma and build a scalable Next.js and React frontend backed by a Node.js & Express REST API architecture.',
    solution: 'Delivered an integrated enterprise portal featuring real-time status dashboards, client management modules, and automated workflow tracking.',
    contribution: 'Collaborated across the full stack: architected database schemas, designed high-fidelity UI components, and implemented frontend state management and API routes.',
    outcome: 'Streamlined client operations and replaced legacy offline tracking with a modern digital workspace.',
    live: 'https://guptanexus.com',
    github: 'https://github.com/milantimalsena',
    logo: guptaNexusLogo,
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    id: 'bholikoitahari',
    title: 'Bholi Ko Itahari',
    tagline: 'Vision 2050 Civic Urban Development Platform',
    category: 'Civic Platform',
    tech: ['React', 'Node.js', 'Express', 'JavaScript', 'Tailwind CSS', 'Vite'],
    challenge: 'Communicating the ambitious "Vision 2050" master plan for Itahari city to citizens, youth, and civic leaders required an engaging, accessible, and fast digital hub.',
    approach: 'Collaborated to design and engineer a full-stack civic portal highlighting key development pillars, community participation mechanisms, and vision milestones with high mobile responsiveness.',
    solution: 'Deployed a dedicated civic web platform providing interactive vision roadmaps, localized typography, community engagement channels, and milestone tracking.',
    contribution: 'Contributed across the full stack: co-designed UI wireframes, developed responsive React views, and integrated backend API endpoints for civic feeds and constituent feedback.',
    outcome: 'Empowered citizens and civic stakeholders to explore, engage with, and contribute to the collective urban future of Itahari.',
    live: 'https://bholikoitahari.com',
    github: 'https://github.com/milantimalsena',
    logo: bholiLogo,
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 'birat-tv',
    title: 'Birat TV',
    tagline: 'Modern News Broadcasting & Live Streaming Portal',
    category: 'News & Media',
    tech: ['React', 'Node.js', 'Express', 'JavaScript', 'Tailwind CSS', 'Vite'],
    challenge: 'Delivering breaking news updates and high-traffic live video streams seamlessly across mobile devices.',
    approach: 'Collaboratively engineered a full-stack media platform using React and Node.js with embedded streaming players optimized for low latency and high concurrency.',
    solution: 'Launched a news broadcasting web portal with live TV streaming, article categorization, and breaking news alerts.',
    contribution: 'Delivered full-stack components: implemented live video player integrations, responsive typography, and backend API endpoints for news feeds and live broadcasting data.',
    outcome: 'Delivered smooth live stream delivery and quick article reading experience during peak news cycles.',
    live: 'http://www.BiratTv.com.np',
    github: 'https://github.com/milantimalsena',
    logo: biratTvLogo,
    gradient: 'from-red-500/20 to-rose-500/20',
  },
  {
    id: 'gayatri-campaign',
    title: 'Gayatri Katwal Bhandari Campaign',
    tagline: 'Political Campaign Digital Presence',
    category: 'Campaign Portal',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    challenge: 'Communicating the candidate’s vision, policy goals, and event calendar clearly to constituents during an active campaign season.',
    approach: 'Collaborated to build a high-trust, authoritative full-stack campaign presence paired with fast news feed updates and interactive event calendars.',
    solution: 'Delivered a campaign web portal featuring candidate manifestos, press releases, media galleries, and constituent interaction forms.',
    contribution: 'Developed full-stack modules including dynamic manifestos, media galleries, contact submission APIs, and database persistence.',
    outcome: 'Strengthened digital constituent engagement and presented a clear campaign platform.',
    live: 'https://gayatri-bhandari.vercel.app/',
    github: 'https://github.com/milantimalsena',
    logo: gayatriLogo,
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    id: 'madhesh-tourism',
    title: 'Madhesh Tourism Mart',
    tagline: 'Cultural Heritage & Tourism Marketplace',
    category: 'Cultural Marketplace',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    challenge: 'Connecting local cultural heritage sites, regional events, and hospitality businesses with travelers across Nepal.',
    approach: 'Created accessible directory layouts with multilingual design considerations and interactive event schedules.',
    solution: 'Built a regional marketplace featuring cultural travel itineraries, vendor showcases, and event announcements.',
    contribution: 'Designed card component structures, implemented backend data fetching, and built responsive layout grids.',
    outcome: 'Elevated cultural tourism visibility and connected regional vendors with visitors.',
    live: 'https://madheshtourismmart.com/',
    github: 'https://github.com/milantimalsena',
    logo: madheshMartLogo,
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: 'eastern-tourism',
    title: 'Eastern Tourism Mart',
    tagline: 'Regional Tourism Discovery & Booking Portal',
    category: 'Tourism & Travel',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'REST API'],
    challenge: 'Eastern Nepal’s rich cultural destinations lacked a centralized, high-performance digital portal for international visitors and booking agencies.',
    approach: 'Emphasized rich visual storytelling, fast page load speeds, and intuitive destination discovery filtered by tour categories.',
    solution: 'Deployed a production tourism portal featuring tour package listings, gallery showcases, and direct travel inquiry forms.',
    contribution: 'Developed responsive frontend interfaces, optimized image rendering performance, and integrated query API endpoints.',
    outcome: 'Promoted regional tourism destinations and enabled seamless travel package inquiries.',
    live: 'https://easterntravelmart.com/',
    github: 'https://github.com/milantimalsena',
    logo: easternMartLogo,
    gradient: 'from-sky-500/20 to-blue-500/20',
  },
  {
    id: 'saral-sewa',
    title: 'Saral Sewa',
    tagline: 'Public Services Aggregator Platform',
    category: 'Civic App',
    tech: ['Flutter', 'Dart', 'Django', 'SQLite', 'REST API'],
    challenge: 'Complex civic guidelines and public service procedures created barrier for citizens seeking clear government information.',
    approach: 'Designed a single-window mobile interface prioritizing accessibility, clean typography, and quick search indexing.',
    solution: 'Built a multi-service public aggregator providing step-by-step service guides, application requirements, and status updates.',
    contribution: 'Developed cross-platform mobile views using Flutter and built Django REST backend endpoints.',
    outcome: 'Streamlined civic access and empowered users with simplified public service information.',
    live: '#',
    github: 'https://github.com/milantimalsena',
    logo: null,
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
]

const workflowStages = [
  { id: 'design', step: '01', label: 'DESIGN' },
  { id: 'build', step: '02', label: 'BUILD' },
  { id: 'ship', step: '03', label: 'SHIP' },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const [activeStage, setActiveStage] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) return
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % workflowStages.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [shouldReduceMotion])

  return (
    <section id="projects" className="py-24 md:py-32 relative z-10">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
          className="max-w-3xl mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block"
          >
            Featured Work
          </motion.span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-[1.12] mb-6 tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="block text-foreground"
            >
              Digital products
            </motion.span>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative inline-flex items-center flex-wrap gap-x-3 overflow-hidden py-1 min-h-[1.3em]"
            >
              {shouldReduceMotion ? (
                <span className="text-primary font-semibold">designed & shipped</span>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeStage}
                    initial={{ y: 18, opacity: 0, filter: 'blur(4px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -18, opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2"
                  >
                    {activeStage === 0 && (
                      <>
                        <span className="text-primary font-semibold relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary/40">
                          designed
                        </span>
                        <span className="text-foreground/90 font-normal">& shipped</span>
                      </>
                    )}
                    {activeStage === 1 && (
                      <>
                        <span className="text-foreground/90 font-normal">designed &</span>
                        <span className="text-primary font-semibold relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary/40">
                          built
                        </span>
                      </>
                    )}
                    {activeStage === 2 && (
                      <>
                        <span className="text-primary font-semibold relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary/40">
                          built
                        </span>
                        <span className="text-foreground/90 font-normal">&</span>
                        <span className="text-primary font-semibold relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary/40">
                          shipped
                        </span>
                      </>
                    )}
                  </motion.span>
                </AnimatePresence>
              )}
            </motion.div>
          </h2>

          {/* Product Workflow Indicator bar */}
          <div className="mt-6 pt-6 relative border-t border-card-border/40 max-w-md">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 left-0 right-0 h-[2px] bg-primary origin-left"
            />
            <div className="grid grid-cols-3 gap-3">
              {workflowStages.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={cn(
                    'flex flex-col items-start transition-all duration-300 text-left cursor-pointer group',
                    activeStage === idx ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  )}
                  aria-label={`Workflow stage ${stage.step} ${stage.label}`}
                >
                  <span className={cn(
                    'text-[10px] font-mono font-semibold tracking-wider mb-1 px-1.5 py-0.5 rounded border transition-colors',
                    activeStage === idx
                      ? 'bg-primary/10 border-primary/30 text-primary'
                      : 'bg-muted/40 border-card-border/60 text-muted-foreground group-hover:border-muted-foreground/30'
                  )}>
                    {stage.step}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-widest font-display uppercase">
                    {stage.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            A selection of real-world applications, platforms, and digital experiences I have designed, engineered, and deployed.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0, 1] }}
              className={cn(
                'group relative bg-card border border-card-border rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between',
                'hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300'
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
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3 min-w-0">
                      {project.logo && (
                        <div className="w-10 h-10 rounded-xl bg-muted/80 p-1.5 border border-card-border flex items-center justify-center overflow-hidden shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={project.logo}
                            alt={`${project.title} logo`}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full border border-primary/20 truncate">
                        {project.category}
                      </span>
                    </div>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
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
                      Read Case Study <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
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
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  {selected.logo && (
                    <div className="w-12 h-12 rounded-2xl bg-card/90 p-2 border border-card-border flex items-center justify-center overflow-hidden shadow-md">
                      <img
                        src={selected.logo}
                        alt={`${selected.title} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                  <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full border border-primary/20">
                    {selected.category}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-2">
                  {selected.title}
                </h3>
                <p className="text-lg font-medium text-muted-foreground mb-8">
                  {selected.tagline}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-muted/40 rounded-2xl border border-card-border">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">The Challenge</h4>
                    <p className="text-sm text-foreground/90 leading-relaxed">{selected.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">The Solution</h4>
                    <p className="text-sm text-foreground/90 leading-relaxed">{selected.solution}</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">My Approach</h4>
                    <p className="text-sm text-foreground/90 leading-relaxed">{selected.approach}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Key Outcome</h4>
                    <p className="text-sm text-foreground/90 leading-relaxed">{selected.outcome}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-card-border">
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-lg border border-card-border">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {selected.github !== '#' && (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-foreground bg-muted hover:bg-muted/80 rounded-xl transition-colors"
                      >
                        GitHub <ArrowUpRight size={15} />
                      </a>
                    )}
                    {selected.live !== '#' && (
                      <a
                        href={selected.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-xl transition-colors shadow-sm"
                      >
                        Visit Live Site <ExternalLink size={15} />
                      </a>
                    )}
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

