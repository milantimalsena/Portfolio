import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle, ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => setStatus('success'), 1500)
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative z-10">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
            Let us create<br />
            <span className="text-primary">something together</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am currently open to freelance opportunities and full-time positions. 
              Whether you have a project in mind or just want to connect, I would love to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:milantimalsena87@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border border-card-border rounded-xl hover:border-muted-foreground/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    milantimalsena87@gmail.com
                  </p>
                </div>
                <ArrowUpRight size={16} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <div className="flex items-center gap-4 p-4 bg-card border border-card-border rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-secondary-accent/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-secondary-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Nepal</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/milantimalsena"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card border border-card-border hover:border-muted-foreground/30 hover:text-foreground text-muted-foreground transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/milan-timalsena-373782353/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card border border-card-border hover:border-muted-foreground/30 hover:text-foreground text-muted-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/me__learn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card border border-card-border hover:border-muted-foreground/30 hover:text-foreground text-muted-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
            className="lg:col-span-3"
          >
            <div className="p-6 md:p-8 bg-card border border-card-border rounded-2xl">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center mb-6">
                      <CheckCircle size={32} className="text-success" />
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-foreground mb-2">Message sent!</h3>
                    <p className="text-muted-foreground max-w-sm">
                      Thank you for reaching out. I will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 text-sm font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                    >
                      Send another message <ArrowUpRight size={14} />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Name <span className="text-error">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 bg-background border border-card-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email <span className="text-error">*</span>
                        </label>
                        <input
                          required
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 bg-background border border-card-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-foreground">
                        Subject <span className="text-error">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 bg-background border border-card-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                        placeholder="What is this about?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message <span className="text-error">*</span>
                      </label>
                      <textarea
                        required
                        id="message"
                        rows="5"
                        className="w-full px-4 py-3 bg-background border border-card-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all duration-300 disabled:opacity-60 inline-flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
