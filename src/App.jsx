import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import CreativeWork from './components/CreativeWork'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import CommandPalette from './components/CommandPalette'
import TerminalEasterEgg from './components/TerminalEasterEgg'

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
      className="fixed inset-0 z-[999] bg-background flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
        className="text-center"
      >
        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
          <div className="w-5 h-5 rounded-lg bg-primary animate-pulse" />
        </div>
        <p className="text-sm text-muted-foreground font-medium">Loading Portfolio...</p>
      </motion.div>
    </motion.div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider defaultTheme="light">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative min-h-screen bg-background text-foreground overflow-x-hidden"
          >
            <div className="grain-overlay" aria-hidden="true" />
            <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
              <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px]" />
              <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary-accent/3 blur-[120px]" />
            </div>

            <ScrollProgress />
            <CustomCursor />
            <CommandPalette />
            <TerminalEasterEgg />

            <div className="relative z-10">
              <Navbar />
              <main>
                <Hero />
                <Projects />
                <Services />
                <CreativeWork />
                <About />
                <Experience />
                <Skills />
                <Testimonials />
                <Contact />
              </main>
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
