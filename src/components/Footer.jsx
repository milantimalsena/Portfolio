import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useTheme } from './ThemeProvider'
import logo from '../assets/logo.svg'
import milanLogo from '../assets/milan logo.svg'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()

  const handleClick = (href) => (e) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const currentLogo = theme === 'dark' ? milanLogo : logo

  return (
    <footer className="relative z-10 border-t border-card-border bg-background" role="contentinfo">
      <div className="mx-auto max-w-container px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#home" onClick={handleClick('#home')} aria-label="Milan Timalsena - Back to top">
              <img src={currentLogo} alt="Milan Timalsena" className="h-8 md:h-10 w-auto object-contain rounded-[5px]" />
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xs text-center md:text-left">
              Milan Timalsena — Full-Stack Developer & UI/UX Designer crafting real digital products.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <li>
                <a href="#projects" onClick={handleClick('#projects')} className="text-muted-foreground hover:text-foreground transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" onClick={handleClick('#services')} className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#creative" onClick={handleClick('#creative')} className="text-muted-foreground hover:text-foreground transition-colors">
                  Creative
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleClick('#about')} className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={handleClick('#skills')} className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleClick('#contact')} className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-card-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Milan Timalsena. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/milantimalsena"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub profile"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/milan-timalsena-373782353/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://www.instagram.com/me__learn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram profile"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
