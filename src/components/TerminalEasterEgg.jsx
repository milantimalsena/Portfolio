import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal } from 'lucide-react'

const commands = {
  help: 'Available commands: about, skills, projects, contact, whoami, clear, help',
  about: 'Milan Timalsena — Software Engineer & UI/UX Designer. Building modern digital products since 2022.',
  skills: 'React, Node.js, Flutter, Python, TypeScript, MongoDB, Docker, Figma, and more.',
  projects: 'Check out my projects at https://github.com/milantimalsena',
  contact: 'Email: milantimalsena87@gmail.com',
  whoami: 'milan-timalsena — Full Stack Developer, UI/UX Designer, Creative Technologist.',
}

export default function TerminalEasterEgg() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { text: 'Welcome to the hidden terminal. Type "help" to get started.', type: 'system' },
  ])
  const inputRef = useRef(null)
  const terminalRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '\\' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (e) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    if (!cmd) return

    setHistory((prev) => [...prev, { text: `$ ${input}`, type: 'input' }])

    if (cmd === 'clear') {
      setHistory([])
    } else if (commands[cmd]) {
      setTimeout(() => {
        setHistory((prev) => [...prev, { text: commands[cmd], type: 'output' }])
      }, 100)
    } else {
      setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          { text: `Command not found: ${cmd}. Type "help" for available commands.`, type: 'error' },
        ])
      }, 100)
    }

    setInput('')
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[95] flex items-end justify-center p-4 pb-8 pointer-events-none"
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-auto" onClick={() => setOpen(false)} />
          <motion.div
            ref={terminalRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl h-80 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto font-mono text-sm"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Developer terminal"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setOpen(false)}
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                  aria-label="Close terminal"
                />
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-50" />
                <div className="w-3 h-3 rounded-full bg-green-500 opacity-50" />
              </div>
              <div className="flex items-center gap-2 mx-auto">
                <Terminal size={14} className="text-green-400" />
                <span className="text-xs text-gray-400">developer@milan:~</span>
              </div>
            </div>

            <div className="p-4 h-[calc(100%-44px)] overflow-y-auto">
              {history.map((entry, i) => (
                <div
                  key={i}
                  className={`mb-1 ${
                    entry.type === 'input'
                      ? 'text-green-400'
                      : entry.type === 'error'
                      ? 'text-red-400'
                      : entry.type === 'system'
                      ? 'text-blue-400'
                      : 'text-gray-300'
                  }`}
                >
                  {entry.text}
                </div>
              ))}

              <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
                <span className="text-green-400 shrink-0">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent text-green-400 outline-none placeholder:text-gray-600"
                  placeholder="Type a command..."
                  aria-label="Terminal input"
                />
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
