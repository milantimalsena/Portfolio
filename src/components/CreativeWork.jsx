import { motion } from 'framer-motion'
import { Layout, Palette, Image as ImageIcon, Sparkles, ExternalLink } from 'lucide-react'

const creativeItems = [
  {
    title: 'Brand Identity & Visual System',
    category: 'Branding & Identity',
    description: 'Minimalist brand systems, color token palettes, custom iconography, and typography guidelines for digital products.',
    icon: Palette,
    accent: 'from-blue-500/20 to-purple-500/20',
    tags: ['Figma', 'Visual Identity', 'Typography', 'Color Tokens'],
  },
  {
    title: 'Product UI/UX Component System',
    category: 'UI/UX Design',
    description: 'Component-driven design systems in Figma with responsive auto-layout primitives, interactive states, and design-to-code tokens.',
    icon: Layout,
    accent: 'from-emerald-500/20 to-sky-500/20',
    tags: ['Figma', 'UI Kit', 'Design System', 'Prototyping'],
  },
  {
    title: 'Campaign Media & Social Graphics',
    category: 'Digital Creative',
    description: 'Engaging social media graphics, campaign banners, event materials, and digital promotional assets crafted for maximum engagement.',
    icon: ImageIcon,
    accent: 'from-amber-500/20 to-rose-500/20',
    tags: ['Photoshop', 'Illustrator', 'Campaign Assets', 'Social Media'],
  },
]

export default function CreativeWork() {
  return (
    <section id="creative" className="py-24 md:py-32 relative z-10">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">
            Design & Creative
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
            Visual &<br />
            <span className="text-primary">creative work</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Beyond engineering code, I design sleek visual identity systems, digital campaign media, and high-fidelity interface prototypes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {creativeItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0, 1] }}
                className="group relative bg-card border border-card-border rounded-2xl overflow-hidden hover:border-muted-foreground/20 transition-all duration-500 flex flex-col justify-between"
              >
                <div className={`h-48 bg-gradient-to-br ${item.accent} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-card/10 backdrop-blur-[2px]" />
                  <div className="w-16 h-16 rounded-2xl bg-card/80 backdrop-blur-md border border-card-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 shadow-md">
                    <IconComponent size={28} />
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-card-border/60">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-muted rounded-full border border-card-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
