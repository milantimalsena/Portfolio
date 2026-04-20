import { motion } from 'framer-motion'
import { Sparkles, Code, Layout } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-indigo to-brand-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 glass-panel p-8 md:p-12 rounded-3xl"
          >
            <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="text-brand-cyan" /> My Journey
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I am a design-minded frontend developer passionate about building clean, fast, and accessible user interfaces. I bridge the gap between design and engineering, ensuring that every pixel translates seamlessly into code.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With a strong foundation in modern web technologies, I specialize in crafting digital experiences that are not just highly functional, but visually stunning. From complex web applications to premium marketing sites, I bring a detail-oriented approach to everything I build.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-panel p-6 rounded-3xl hover:-translate-y-1 transition-transform">
              <Code className="w-10 h-10 text-brand-indigo mb-4" />
              <h4 className="text-xl font-bold mb-2">Clean Code</h4>
              <p className="text-muted-foreground">Maintainable, scalable, and highly optimized frontend architecture.</p>
            </div>
            <div className="glass-panel p-6 rounded-3xl hover:-translate-y-1 transition-transform">
              <Layout className="w-10 h-10 text-brand-cyan mb-4" />
              <h4 className="text-xl font-bold mb-2">Premium UI/UX</h4>
              <p className="text-muted-foreground">Intuitive interfaces with stunning micro-interactions and animations.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
