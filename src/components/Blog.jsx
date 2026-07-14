import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'

const posts = [
  {
    title: 'Building Premium User Interfaces with React and Framer Motion',
    excerpt: 'Exploring the principles and techniques behind creating smooth, delightful animations that enhance user experience without sacrificing performance.',
    date: 'Mar 15, 2026',
    readTime: '8 min read',
    tags: ['React', 'Animation', 'UI/UX'],
    gradient: 'from-primary/20 to-secondary-accent/20',
  },
  {
    title: 'The Art of Minimal Web Design: Less is More',
    excerpt: 'Why minimalist design is more than just whitespace — it is about purposeful reduction that amplifies the user experience.',
    date: 'Feb 28, 2026',
    readTime: '6 min read',
    tags: ['Design', 'Minimalism', 'UX'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Full-Stack Architecture: Building Scalable Modern Applications',
    excerpt: 'A practical guide to structuring full-stack applications for scalability, maintainability, and developer experience.',
    date: 'Jan 10, 2026',
    readTime: '10 min read',
    tags: ['Architecture', 'Full-Stack', 'Best Practices'],
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32 relative z-10 bg-section/50">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">
            Blog
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
            Thoughts &<br />
            <span className="text-primary">insights</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0, 1] }}
              className="group bg-card border border-card-border rounded-2xl overflow-hidden hover:border-muted-foreground/20 transition-all duration-500 cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-2xl bg-card/50 backdrop-blur-sm border border-card-border flex items-center justify-center">
                  <span className="text-2xl font-display font-semibold text-foreground/60">
                    {post.date.split(' ')[1]}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-muted-foreground px-2 py-0.5 bg-muted rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-1.5 transition-all">
                    Read <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
