import { motion } from 'framer-motion'
import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
} from 'react-icons/fa'
import { SiFramer, SiGithub, SiTailwindcss, SiVite } from 'react-icons/si'

const skills = [
  { name: 'React.js', icon: FaReact },
  { name: 'Vite', icon: SiVite },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'JavaScript', icon: FaJs },
  { name: 'HTML5 / CSS3', icon: [FaHtml5, FaCss3Alt] },
  { name: 'Git & GitHub', icon: [FaGitAlt, SiGithub] },
  { name: 'Figma', icon: FaFigma },
]

export default function Skills() {
  const normalizeIcons = (icon) => (Array.isArray(icon) ? icon : [icon])

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Tech Arsenal</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-indigo to-brand-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const icons = normalizeIcons(skill.icon)

            return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-center cursor-default group"
            >
              <div className="flex items-center gap-2 text-4xl text-brand-cyan group-hover:scale-110 transition-transform">
                {icons.map((IconComponent, iconIndex) => (
                  <IconComponent key={`${skill.name}-${iconIndex}`} aria-hidden="true" />
                ))}
              </div>
              <h4 className="font-semibold text-foreground group-hover:text-brand-cyan transition-colors">{skill.name}</h4>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
