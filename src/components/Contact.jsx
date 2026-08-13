import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle, ArrowUpRight, MessageSquare, AlertCircle } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [result, setResult] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setResult('')

    try {
      const formData = new FormData(e.target)
      formData.append('access_key', '5fe02169-4e25-4793-901a-83f9ef8b194c')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setResult('Success!')
      } else {
        setStatus('error')
        setResult(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setResult('Failed to send message. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative z-10">
      <div className="mx-auto max-w-container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-secondary-accent mb-4 inline-flex items-center gap-1.5 px-3 py-1 bg-secondary-accent/10 rounded-full border border-secondary-accent/20">
            <MessageSquare size={12} /> Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
            Have an idea?<br />
            <span className="text-primary">Let's turn it into something real.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Whether you are building a website, web application, brand identity, or digital product — I am open to freelance projects, software roles, and creative collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              <a
                href="mailto:milantimalsena87@gmail.com"
                className="flex items-center gap-4 p-4 bg-card border border-card-border rounded-2xl hover:border-muted-foreground/30 transition-all duration-300 group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Direct Email</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                    milantimalsena87@gmail.com
                  </p>
                </div>
                <ArrowUpRight size={18} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>

              <div className="flex items-center gap-4 p-4 bg-card border border-card-border rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-secondary-accent/10 flex items-center justify-center shrink-0 text-secondary-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">Nepal (Available Globally)</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border border-card-border rounded-2xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Connect Online</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/milantimalsena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-muted/60 border border-card-border hover:border-muted-foreground/30 hover:text-foreground text-muted-foreground transition-all duration-300 text-xs font-medium"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/milan-timalsena-373782353/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-muted/60 border border-card-border hover:border-muted-foreground/30 hover:text-foreground text-muted-foreground transition-all duration-300 text-xs font-medium"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={16} /> LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/me__learn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-muted/60 border border-card-border hover:border-muted-foreground/30 hover:text-foreground text-muted-foreground transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
            className="lg:col-span-3"
          >
            <div className="p-6 md:p-8 bg-card border border-card-border rounded-2xl shadow-sm">
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
                    <p className="text-muted-foreground max-w-sm text-sm">
                      Thank you for reaching out. Your message has been sent directly to Milan via Web3Forms.
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
                    <h3 className="text-lg font-display font-semibold text-foreground mb-4">Start a Conversation</h3>
                    
                    {status === 'error' && (
                      <div className="p-4 bg-error/10 border border-error/20 rounded-xl text-error text-sm flex items-center gap-2">
                        <AlertCircle size={18} className="shrink-0" />
                        <span>{result}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Your Name <span className="text-error">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 bg-background border border-card-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                          placeholder="Milan Timalsena"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Your Email <span className="text-error">*</span>
                        </label>
                        <input
                          required
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 bg-background border border-card-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                          placeholder="milan@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Subject / Project <span className="text-error">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 bg-background border border-card-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-sm"
                        placeholder="Web Application / UI Design / Freelance Opportunity"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Message <span className="text-error">*</span>
                      </label>
                      <textarea
                        required
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-4 py-3 bg-background border border-card-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all resize-none text-sm"
                        placeholder="Tell me about your project, timeline, or requirements..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all duration-300 disabled:opacity-60 inline-flex items-center justify-center gap-2 shadow-md shadow-primary/20"
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
