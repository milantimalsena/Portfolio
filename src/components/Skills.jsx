import { motion } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiVite, SiTailwindcss, SiFramer, SiTypescript,
  SiNodedotjs, SiPython, SiDjango, SiFlutter, SiDart, SiExpress,
  SiMongodb, SiPostgresql, SiMysql, SiSqlite,
  SiFirebase, SiVercel, SiNetlify, SiDocker, SiAwsamplify,
  SiFigma, SiAdobe, SiCanva, SiNotion,
  SiGit, SiGithub, SiPostman, SiLinux,
} from 'react-icons/si'
import { FaJava, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Vite', icon: SiVite },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Framer Motion', icon: SiFramer },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: FaJs },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Python', icon: SiPython },
      { name: 'Django', icon: SiDjango },
      { name: 'Express', icon: SiExpress },
      { name: 'Java', icon: FaJava },
      { name: 'Dart', icon: SiDart },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'SQLite', icon: SiSqlite },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Netlify', icon: SiNetlify },
      { name: 'Docker', icon: SiDocker },
      { name: 'AWS Amplify', icon: SiAwsamplify },
    ],
  },
  {
    title: 'Design',
    skills: [
      { name: 'Figma', icon: SiFigma },
      { name: 'Adobe', icon: SiAdobe },
      { name: 'Canva', icon: SiCanva },
      { name: 'Notion', icon: SiNotion },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'Linux', icon: SiLinux },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative z-10 bg-section/50">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
            Tools &<br />
            <span className="text-primary">technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1, ease: [0.25, 0.1, 0, 1] }}
              className="p-6 bg-card border border-card-border rounded-2xl hover:border-muted-foreground/20 transition-all duration-500"
            >
              <h3 className="text-lg font-display font-semibold text-foreground mb-5">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground bg-muted rounded-full border border-card-border hover:border-muted-foreground/30 hover:text-foreground transition-all duration-200"
                  >
                    <skill.icon size={14} className="shrink-0" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
