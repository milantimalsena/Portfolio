import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Velvra – E-commerce Footwear Website',
    description: 'A premium footwear e-commerce platform with sleek UI, advanced filtering, and a robust cart system demonstrating high-conversion design patterns.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    live: '#',
    github: 'https://github.com/milantimalsena/Velvra-A_e-commerce-Footwear-Website',
    featured: true
  },
  {
    title: 'Birat TV',
    description: 'A responsive news broadcasting portal offering live streaming and article management with high performance media delivery.',
    tech: ['HTML/CSS', 'JavaScript', 'Frontend Architecture'],
    live: 'http://www.BiratTv.com.np',
    github: 'https://github.com/milantimalsena',
    featured: false
  },
  {
    title: 'Eastern Travel Mart',
    description: 'A travel booking and exposition platform showcasing regional tourism with elegant imagery and seamless navigation.',
    tech: ['React', 'Responsive Design', 'API Integration'],
    live: 'http://Easterntravelmart2026.com',
    github: 'https://github.com/milantimalsena',
    featured: false
  },
  {
    title: 'Saral Sewa',
    description: 'A service aggregator offering a simplified gateway to public services through an accessible and user-friendly interface.',
    tech: ['Frontend Framework', 'UI/UX', 'Accessibility'],
    live: '#',
    github: 'https://github.com/milantimalsena',
    featured: false
  },
  {
    title: 'Art Gallery Management System',
    description: 'A management dashboard for tracking artworks, artists, and exhibitions efficiently with data visualization.',
    tech: ['React', 'State Management', 'Dashboards'],
    live: '#',
    github: 'https://github.com/milantimalsena/Art-Gallery-tracking-Management-system',
    featured: false
  },
  {
    title: 'Inventory Management System',
    description: 'A robust shoe inventory tracker ensuring real-time stock updates, low-stock alerts, and intuitive data entry.',
    tech: ['JavaScript', 'System Architecture', 'CRUD Operations'],
    live: '#',
    github: 'https://github.com/milantimalsena/shoe-inventory-management-system',
    featured: false
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Selected Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-indigo to-brand-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative glass-panel rounded-3xl overflow-hidden flex flex-col ${project.featured ? 'md:col-span-2 lg:col-span-3 lg:flex-row' : ''}`}
            >
              <div className={`p-8 flex flex-col flex-grow w-full ${project.featured ? 'lg:w-1/2' : ''}`}>
                {project.featured && (
                  <span className="text-xs font-bold tracking-wider uppercase text-brand-cyan mb-2 block">Featured Project</span>
                )}
                <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-brand-cyan transition-colors">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-brand-indigo transition-colors ml-auto">
                    <FaGithub size={18} /> Source Code
                  </a>
                </div>
              </div>
              
              <div className={`bg-muted border-t md:border-t-0 md:border-l border-[var(--card-border)] relative overflow-hidden flex items-center justify-center p-8 ${project.featured ? 'lg:w-1/2 min-h-[300px]' : 'h-48'}`}>
                {/* Abstract project placeholder using gradients until actual screenshots are piped */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/20 to-brand-cyan/20 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
                <div className="relative z-10 glass-panel p-4 rounded-xl shadow-2xl skew-y-3 group-hover:skew-y-0 transition-all duration-500">
                  <h4 className="font-display font-bold text-center tracking-tight opacity-70">
                     {project.title} Preview
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
