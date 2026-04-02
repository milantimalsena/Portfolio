import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { cn } from '../lib/utils'
import milanLogo from '../assets/milan logo.svg'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className={cn(
        'mx-auto max-w-6xl px-6 transition-all duration-300',
        scrolled ? 'w-[calc(100%-2rem)] md:w-[90%]' : 'w-full'
      )}>
        <nav className={cn(
          'flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300',
          scrolled ? 'glass-panel shadow-lg' : 'bg-transparent'
        )}>
          {/* Logo */}
          <a href="#home" className="relative group">
            <img src={milanLogo} alt="Milan Logo" className="h-8 w-auto" />
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-indigo to-brand-cyan transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-cyan transition-all duration-300 group-hover:w-full opacity-50"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-[60] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm glass-panel z-[70] p-6 shadow-2xl flex flex-col md:hidden border-l border-[var(--card-border)]"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-full bg-muted/20 hover:bg-muted text-foreground">
                  <X size={24} />
                </button>
              </div>
              <ul className="flex flex-col gap-6">
                {links.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-display font-medium text-foreground hover:text-brand-cyan transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
