import { motion } from 'framer-motion'

const skills = [
  { name: 'React.js', icon: '⚛️' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Framer Motion', icon: '🎬' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'HTML5 / CSS3', icon: '🌐' },
  { name: 'Git & GitHub', icon: '🐙' },
  { name: 'Figma', icon: '🖋️' },
]

export default function Skills() {
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
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-center cursor-default group"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform">{skill.icon}</div>
              <h4 className="font-semibold text-foreground group-hover:text-brand-cyan transition-colors">{skill.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
