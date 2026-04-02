import { motion } from 'framer-motion'

const timeline = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2024 - Present",
    description: "Building premium high-performance web applications, specialized in React, Vite, and modern CSS. Delivering tailored solutions for diverse client bases including e-commerce, news media, and content management."
  },
  {
    role: "UI/UX Designer",
    company: "Self-Employed",
    period: "2023 - 2024",
    description: "Creating wireframes, interactive prototypes, and user flows to establish highly accessible, conversion-driven digital experiences."
  },
  {
    role: "Graphic Design Foundation",
    company: "Training",
    period: "2022 - 2023",
    description: "Mastering layout composition, color theory, and advanced typography which now securely fuels my frontend design engineering capabilities."
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-indigo to-brand-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:pl-10 space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="absolute -left-[45px] md:-left-[49px] top-1 w-6 h-6 rounded-full bg-background border-4 border-primary z-10"></div>
              <div className="glass-panel p-6 md:p-8 rounded-3xl hover:border-brand-cyan/50 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between mb-4 md:items-center">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-foreground">{item.role}</h3>
                    <h4 className="text-lg font-medium text-brand-cyan">{item.company}</h4>
                  </div>
                  <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mt-2 md:mt-0 px-3 py-1 bg-muted rounded-full inline-block w-max">
                    {item.period}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
