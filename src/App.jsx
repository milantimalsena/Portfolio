import { lazy, Suspense, useEffect, useState } from 'react'
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const BelowFold = lazy(() => import('./components/BelowFold'))
const DeferredChrome = lazy(() => import('./components/DeferredChrome'))

function App() {
  const [showDeferredContent, setShowDeferredContent] = useState(false)

  useEffect(() => {
    const reveal = () => setShowDeferredContent(true)

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(reveal, { timeout: 1000 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timerId = window.setTimeout(reveal, 1)
    return () => window.clearTimeout(timerId)
  }, [])

  useEffect(() => {
    if (!showDeferredContent || !window.location.hash) return

    const frameId = window.requestAnimationFrame(() => {
      const target = document.getElementById(window.location.hash.slice(1))
      target?.scrollIntoView()
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [showDeferredContent])

  return (
    <ThemeProvider defaultTheme="light">
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        <div className="grain-overlay" aria-hidden="true" />
        <div className="fixed inset-0 pointer-events-none z-0 hidden md:block" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary-accent/3 blur-[120px]" />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={null}>
              {showDeferredContent && <BelowFold />}
            </Suspense>
          </main>
        </div>

        <Suspense fallback={null}>
          {showDeferredContent && <DeferredChrome />}
        </Suspense>
      </div>
    </ThemeProvider>
  )
}

export default App
