import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Animated Background blob patterns */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-indigo/10 blur-[120px] animate-blob filter"></div>
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-cyan/10 blur-[100px] animate-blob animation-delay-2000 filter"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-brand-indigo/10 blur-[120px] animate-blob animation-delay-4000 filter"></div>
        </div>

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
