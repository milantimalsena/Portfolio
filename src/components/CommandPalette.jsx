import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Home, User, Briefcase, Folder, Code, BookOpen, Mail, Download } from 'lucide-react'

const items = [
  { id: 'home', label: 'Home', icon: Home, href: '#home' },
  { id: 'about', label: 'About', icon: User, href: '#about' },
  { id: 'experience', label: 'Experience', icon: Briefcase, href: '#experience' },
  { id: 'projects', label: 'Projects', icon: Folder, href: '#projects' },
  { id: 'skills', label: 'Skills', icon: Code, href: '#skills' },
  { id: 'blog', label: 'Blog', icon: BookOpen, href: '#blog' },
  { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
  { id: 'resume', label: 'Download Resume', icon: Download, href: '/Resume/Milan-Timalsena-Resume.pdf' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)

  const filtered = query
    ? items.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
    : items

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    setQuery('')
    setSelectedIndex(0)
  }, [open])

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % filtered.length)
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
      }
      if (e.key === 'Enter' && filtered[selectedIndex]) {
        const item = filtered[selectedIndex]
        if (item.href.startsWith('#')) {
          document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.open(item.href, '_blank')
        }
        setOpen(false)
      }
    },
    [filtered, selectedIndex]
  )

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-card border border-card-border rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-card-border">
              <Search size={18} className="text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0) }}
                onKeyDown={handleKeyDown}
                placeholder="Navigate to..."
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base"
                aria-label="Search commands"
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground bg-muted rounded-md">
                ESC
              </kbd>
            </div>
            <div className="max-h-72 overflow-y-auto p-2" role="listbox">
              {filtered.length === 0 ? (
                <p className="text-center text-muted-foreground py-8 text-sm">
                  No results found
                </p>
              ) : (
                filtered.map((item, index) => (
                  <button
                    key={item.id}
                    role="option"
                    aria-selected={index === selectedIndex}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${
                      index === selectedIndex
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-muted/50'
                    }`}
                    onClick={() => {
                      if (item.href.startsWith('#')) {
                        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                      } else {
                        window.open(item.href, '_blank')
                      }
                      setOpen(false)
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <item.icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
