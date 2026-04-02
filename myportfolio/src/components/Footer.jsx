import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import milanLogo from '../assets/milan logo.svg'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-12 border-t border-[var(--card-border)] bg-background">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex flex-col items-center md:items-start">
          <a href="#home">
            <img src={milanLogo} alt="Milan Logo" className="h-8 w-auto" />
          </a>
          <p className="text-sm text-muted-foreground mt-2 text-center md:text-left max-w-xs">
            Designing and coding beautiful, premium experiences for the web.
          </p>
        </div>

        <div className="flex items-center gap-6 text-muted-foreground">
          <a href="https://github.com/milantimalsena" target="_blank" rel="noreferrer" className="hover:text-foreground hover:scale-110 transition-all hover:text-brand-cyan">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/milan-timalsena-373782353/" target="_blank" rel="noreferrer" className="hover:text-foreground hover:scale-110 transition-all hover:text-[#0077b5]">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/me__learn" target="_blank" rel="noreferrer" className="hover:text-foreground hover:scale-110 transition-all hover:text-[#E1306C]">
            <FaInstagram size={24} />
          </a>
          {/* Add Facebook link manually, assuming standard profile for now based on user instruction */}
          <a href="#" target="_blank" rel="noreferrer" className="hover:text-foreground hover:scale-110 transition-all hover:text-[#1877F2]">
            <FaFacebook size={24} />
          </a>
        </div>

      </div>

      <div className="mt-12 text-center text-sm text-muted-foreground font-medium">
        &copy; {currentYear} Milan Timalsena. All rights reserved.
      </div>
    </footer>
  )
}
