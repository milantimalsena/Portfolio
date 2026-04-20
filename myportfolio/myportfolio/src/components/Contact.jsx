import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Send, CheckCircle, ArrowRight } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate network latency
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 relative z-10 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-cyan">outstanding.</span></h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm currently open for new opportunities. Whether you have a specific project in mind or just want to say hi, my inbox is always open.
          </p>

          <div className="flex items-center gap-4 text-foreground mb-8 glass-panel p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Mail />
            </div>
            <div>
              <h4 className="font-bold">Email</h4>
              <a href="mailto:milantimalsena87@gmail.com" className="text-muted-foreground hover:text-brand-cyan transition-colors">
                milantimalsena87@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel p-8 rounded-3xl"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold font-display mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. I will get back to you as soon as possible.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-primary font-semibold hover:underline flex items-center gap-2 mx-auto"
                >
                   Send another message <ArrowRight size={16} />
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">Name</label>
                    <input required type="text" id="name" className="p-4 rounded-xl bg-background border border-[var(--card-border)] focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-shadow" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">Email</label>
                    <input required type="email" id="email" className="p-4 rounded-xl bg-background border border-[var(--card-border)] focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-shadow" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-foreground">Subject</label>
                  <input required type="text" id="subject" className="p-4 rounded-xl bg-background border border-[var(--card-border)] focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-shadow" placeholder="Project Inquiry" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                  <textarea required id="message" rows="4" className="p-4 rounded-xl bg-background border border-[var(--card-border)] focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-shadow resize-none" placeholder="Let's build something..."></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-indigo/90 transition-colors disabled:opacity-70 mt-2"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
