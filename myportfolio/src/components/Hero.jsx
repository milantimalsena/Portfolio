import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

// Adjust standard import paths based on the existing vite architecture
import milanPhoto from '../assets/milanphoto.JPG'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-sm font-medium text-brand-cyan"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            Available for work in 2026
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground leading-[1.1]">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-blue-400 to-brand-cyan">
              Milan Timalsena
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-lg">
            Frontend Developer specializing in building modern, premium, and performant web applications.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-brand-indigo/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)]"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel font-semibold hover:bg-muted/50 hover:scale-105 transition-all"
            >
              <Download size={18} /> Resume
            </a>
          </div>

          <div className="flex items-center gap-8 mt-4 pt-8 border-t border-[var(--card-border)] w-full">
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-foreground">3+</span>
              <span className="text-sm text-muted-foreground">Years Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-foreground">20+</span>
              <span className="text-sm text-muted-foreground">Projects Completed</span>
            </div>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo to-brand-cyan rounded-full blur-3xl opacity-20 dark:opacity-40 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full border border-[var(--card-border)] bg-background/50 backdrop-blur-3xl z-0"></div>
            <img
              src={milanPhoto}
              alt="Milan Timalsena"
              className="absolute inset-4 rounded-full object-cover z-10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              style={{ width: 'calc(100% - 32px)', height: 'calc(100% - 32px)' }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
