import { motion } from 'framer-motion'
import {
  SiReact, SiVite, SiTailwindcss, SiFramer,
  SiNodedotjs, SiPython, SiDjango, SiExpress,
  SiMongodb, SiPostgresql, SiMysql, SiSqlite,
  SiVercel, SiNetlify, SiDocker,
  SiFigma, SiAdobe, SiCanva,
  SiGit, SiGithub, SiPostman,
} from 'react-icons/si'
import { FaJava, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, interactive user interfaces',
    skills: [
      { name: 'React', icon: SiReact, primary: true },
      { name: 'JavaScript', icon: FaJs, primary: true },
      { name: 'Tailwind CSS', icon: SiTailwindcss, primary: true },
      { name: 'HTML5', icon: FaHtml5, primary: true },
      { name: 'CSS3', icon: FaCss3Alt, primary: true },
      { name: 'Framer Motion', icon: SiFramer, primary: false },
      { name: 'Vite', icon: SiVite, primary: false },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Server logic, APIs, and application architecture',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, primary: true },
      { name: 'Express', icon: SiExpress, primary: true },
      { name: 'Python', icon: SiPython, primary: false },
      { name: 'Django', icon: SiDjango, primary: false },
      { name: 'Java', icon: FaJava, primary: false },
    ],
  },
  {
    title: 'Databases',
    description: 'Document and relational data stores',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, primary: true },
      { name: 'MySQL', icon: SiMysql, primary: false },
      { name: 'PostgreSQL', icon: SiPostgresql, primary: false },
      { name: 'SQLite', icon: SiSqlite, primary: false },
    ],
  },
  {
    title: 'UI/UX & Visual Design',
    description: 'Wireframing, prototyping, and visual design',
    skills: [
      { name: 'Figma', icon: SiFigma, primary: true },
      { name: 'Adobe Creative Suite', icon: SiAdobe, primary: false },
      { name: 'Canva', icon: SiCanva, primary: false },
    ],
  },
  {
    title: 'Deployment & Tools',
    description: 'Version control, hosting, and dev workflow',
    skills: [
      { name: 'Git', icon: SiGit, primary: true },
      { name: 'GitHub', icon: SiGithub, primary: true },
      { name: 'Vercel', icon: SiVercel, primary: true },
      { name: 'Netlify', icon: SiNetlify, primary: false },
      { name: 'Docker', icon: SiDocker, primary: false },
      { name: 'Postman', icon: SiPostman, primary: false },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative z-10 bg-section/40">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
            Technologies &<br />
            <span className="text-primary">tooling</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Core technologies and tools I use to design, build, and deploy digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.08, ease: [0.25, 0.1, 0, 1] }}
              className="p-6 bg-card border border-card-border rounded-2xl hover:border-muted-foreground/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-5 font-medium">{category.description}</p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
                        skill.primary
                          ? 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20'
                          : 'bg-muted/60 text-muted-foreground border-card-border hover:text-foreground hover:border-muted-foreground/30'
                      }`}
                    >
                      <skill.icon size={14} className="shrink-0" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
