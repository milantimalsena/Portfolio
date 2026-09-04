import { motion } from 'framer-motion'
import { ArrowUpRight, FileText } from 'lucide-react'
import milanPhotoSmall from '../assets/milanphoto-480.jpg'
import milanPhotoLarge from '../assets/milanphoto-900.jpg'
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFlutter,
  SiFigma,
  SiTailwindcss,
  SiDocker,
  SiJavascript,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const techCards = [
  { icon: SiReact, label: 'React', x: '70%', y: '10%', delay: 0 },
  { icon: SiNodedotjs, label: 'Node.js', x: '85%', y: '40%', delay: 0.5 },
  { icon: FaJava, label: 'Java', x: '15%', y: '15%', delay: 1 },
  { icon: SiMongodb, label: 'MongoDB', x: '5%', y: '55%', delay: 1.5 },
  { icon: SiFlutter, label: 'Flutter', x: '75%', y: '72%', delay: 2 },
  { icon: SiFigma, label: 'Figma', x: '10%', y: '80%', delay: 2.5 },
  { icon: SiTailwindcss, label: 'Tailwind', x: '88%', y: '55%', delay: 3 },
  { icon: SiDocker, label: 'Docker', x: '25%', y: '42%', delay: 3.5 },
  { icon: SiJavascript, label: 'JavaScript', x: '55%', y: '5%', delay: 4 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-secondary-accent/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-container px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold tracking-tight text-foreground leading-[1.08]"
            >
              Milan Timalsena
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-primary mt-2">
                Full-Stack Developer & UI/UX Designer
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg text-pretty"
            >
              I designs and builds modern digital products from interface design through development and deployment.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-2xl hover:brightness-110 transition-all duration-300 shadow-md shadow-primary/20"
              >
                View My Work
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-card border border-card-border text-foreground font-semibold rounded-2xl hover:border-muted-foreground/30 transition-all duration-300"
              >
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary-accent/10 rounded-full blur-3xl" />
              <div className="absolute inset-4 rounded-full bg-card/50 backdrop-blur-3xl border border-card-border overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-10" />
                <img
                  src={milanPhotoLarge}
                  srcSet={`${milanPhotoSmall} 480w, ${milanPhotoLarge} 900w`}
                  sizes="(min-width: 1024px) 450px, (min-width: 768px) 384px, 288px"
                  alt="Milan Timalsena — Software Engineer & UI/UX Designer"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width="900"
                  height="1350"
                />
              </div>
            </div>

            {techCards.map((card) => (
              <motion.div
                key={card.label}
                className="absolute hidden md:flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                style={{ left: card.x, top: card.y }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + card.delay, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <card.icon className="text-gray-700 dark:text-gray-200" size={16} />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-200">{card.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
