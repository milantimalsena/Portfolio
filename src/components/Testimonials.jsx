import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Gayatri Katwal Bhandari',
    role: 'President',
    company: 'CCI Itahari',
    content: 'Milan delivered an exceptional campaign website that perfectly captured our vision. His attention to detail and understanding of our needs transformed our digital presence. The result was a professional, engaging platform that truly resonated with our audience.',
  },
  {
    name: 'Rakesh Gupta',
    role: 'Director',
    company: 'Gupta Nexus',
    content: 'Working with Milan was a seamless experience. He translated our requirements into an elegant digital solution that exceeded our expectations. His technical expertise and design sensibility make him a rare talent in the industry.',
  },
  {
    name: 'Bikal Paudel',
    role: 'CEO',
    company: 'Birat TV',
    content: 'Milan brings a rare combination of design thinking and technical skill. The news portal he built for us handles high traffic with ease while maintaining a beautiful, intuitive interface. Highly recommend his services.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 md:py-32 relative z-10">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
            What people<br />
            <span className="text-primary">say</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -top-8 -left-4 text-primary/10" aria-hidden="true">
            <Quote size={80} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
              className="relative z-10 p-8 md:p-12 bg-card border border-card-border rounded-2xl"
            >
              <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 text-pretty">
                &ldquo;{testimonials[current].content}&rdquo;
              </blockquote>
              <div>
                <cite className="not-italic">
                  <span className="block font-semibold text-foreground">{testimonials[current].name}</span>
                  <span className="text-sm text-muted-foreground">
                    {testimonials[current].role}, {testimonials[current].company}
                  </span>
                </cite>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? 'w-8 bg-primary' : 'bg-card-border'
                }`}
                role="tab"
                aria-selected={index === current}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
