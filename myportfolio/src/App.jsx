import { useEffect, useMemo, useState } from 'react'
import {
  SiFigma,
  SiAdobeillustrator,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFlutter,
} from 'react-icons/si'
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import milanPhoto from './assets/milanphoto.JPG'
import milanLogo from './assets/milan logo.svg'
import coverImage from './assets/milantimalsena cover.jpg'
import './App.css'

const profile = {
  name: 'Milan Timalsena',
  headline: 'Design-minded frontend developer building clean, fast interfaces.',
  subhead:
    'I combine UI/UX fundamentals with React to ship responsive, accessible experiences with crisp visual polish.',
  email: 'milantimalsena87@gmail.com',
  github: 'https://github.com/milantimalsena',
  linkedin: 'https://www.linkedin.com/in/milan-timalsena-373782353/',
  instagram: 'https://www.instagram.com/me_learn',
  website: 'https://milantimalsena.vercel.app/',
}

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { label: 'HTML', icon: <SiHtml5 /> },
      { label: 'CSS', icon: <SiCss3 /> },
      { label: 'JavaScript', icon: <SiJavascript /> },
      { label: 'React', icon: <SiReact /> },
    ],
  },
  {
    title: 'Design',
    items: [
      { label: 'Figma', icon: <SiFigma /> },
      { label: 'Adobe Illustrator', icon: <SiAdobeillustrator /> },
    ],
  },
  {
    title: 'Exploring',
    items: [{ label: 'Flutter', icon: <SiFlutter /> }],
  },
]

const projects = [
  {
    featured: true,
    title: 'Portfolio Website (Vite + React)',
    description:
      'A fast, minimal portfolio focused on recruiter conversion: clear story, strong hierarchy, and polished interactions.',
    highlights: ['Hero that states value in 5 seconds', 'Projects framed as case studies', 'Accessible, responsive layout'],
    stack: ['React', 'Vite', 'Modern CSS'],
    links: {
      live: profile.website,
      repo: profile.github,
    },
    metrics: ['LCP-focused layout', 'Keyboard-friendly navigation'],
  },
  {
    title: 'Learning Dashboard UI',
    description:
      'A responsive dashboard concept for tracking courses and daily practice with a clean grid and calm visuals.',
    highlights: ['Modular card system', 'Mobile-first layouts', 'Clear information hierarchy'],
    stack: ['React', 'CSS Grid', 'UI Prototyping'],
    links: {
      live: '#',
      repo: '#',
    },
    metrics: ['Replace with a measurable result (e.g., time saved, users)'],
  },
  {
    title: 'Mini Brand Kit',
    description:
      'A compact visual identity kit with logo marks, color palette, and social graphics for consistent branding.',
    highlights: ['Reusable components', 'Consistent spacing + type scale', 'Export-ready assets'],
    stack: ['Illustrator', 'Figma', 'Brand Guidelines'],
    links: {
      live: '#',
      repo: '#',
    },
    metrics: ['Replace with a measurable result (e.g., deliverables shipped)'],
  },
]

const timeline = [
  {
    label: 'Graphic design foundations',
    detail: 'Layout, composition, and visual clarity — training the eye for detail.',
    period: '2022',
  },
  {
    label: 'UI/UX fundamentals',
    detail: 'User flows, wireframes, and usability patterns with a focus on clarity.',
    period: '2023',
  },
  {
    label: 'Frontend development',
    detail: 'Turning design into clean, responsive UIs using HTML/CSS/JavaScript.',
    period: '2024',
  },
  {
    label: 'React',
    detail: 'Component thinking, hooks, and real UI composition with reusable patterns.',
    period: '2024',
  },
  {
    label: 'Flutter',
    detail: 'Experimenting with mobile UI patterns and responsive layouts.',
    period: '2025',
  },
  {
    label: 'Next: ship more real products',
    detail: 'More live projects with measurable outcomes and case studies.',
    period: 'Beyond',
  },
]

const ContactLink = ({ href, icon, label }) => (
  <a className="contact-link" href={href} target="_blank" rel="noreferrer">
    {icon}
    <span>{label}</span>
  </a>
)

const Stat = ({ label, value }) => (
  <div className="stat">
    <div className="stat__value">{value}</div>
    <div className="stat__label">{label}</div>
  </div>
)

const useReveal = () => {
  useEffect(() => {
    const reduceMotion =
      typeof window !== 'undefined' &&
      'matchMedia' in window &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const revealElements = document.querySelectorAll('.reveal')

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}

const App = () => {
  useReveal()

  const stats = useMemo(
    () => [
      { label: 'Focus', value: 'UI polish + speed' },
      { label: 'Core', value: 'React + modern CSS' },
      { label: 'Strength', value: 'Design systems mindset' },
    ],
    [],
  )

  const [sendState, setSendState] = useState('idle')

  const handleContactSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    const subject = encodeURIComponent(`Portfolio inquiry — ${name || 'New message'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n— Sent from ${profile.website}`,
    )

    setSendState('opening')
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    window.setTimeout(() => setSendState('idle'), 1200)
    event.currentTarget.reset()
  }

  return (
    <div className="app">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="nav-bar">
        <img src={milanLogo} alt="Milan Logo" className="nav-logo" />
        <nav aria-label="Primary" className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#journey">Experience</a>
          <a className="nav-cta" href={`mailto:${profile.email}`}>
            Email
          </a>
        </nav>
      </header>

      <main id="content">
        <section className="hero" id="home">
          <div className="hero__content reveal">
            <p className="hero__eyebrow">Frontend • UI/UX • Design Systems</p>
            <h1>{profile.name}</h1>
            <p className="hero__tagline">{profile.headline}</p>
            <p className="hero__subtag">{profile.subhead}</p>

            <div className="hero__actions">
              <a className="btn primary" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">
                View GitHub
              </a>
            </div>

            <div className="hero__proof">
              {stats.map((item) => (
                <Stat key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </div>
          <div className="hero__visual reveal">
            <div className="hero__orb">
              <div className="hero__ring" />
              <div className="hero__glow" />
              <img src={milanPhoto} alt="Milan Timalsena" className="hero__photo" />
            </div>
          </div>
        </section>

        <section className="panel reveal" id="about">
          <div className="section-heading cover" style={{ backgroundImage: `url(${coverImage})` }}>
            <p className="eyebrow">About</p>
            <h2>Design taste + implementation skills</h2>
          </div>
          <p className="lead">
            I build interfaces that feel calm, premium, and easy to use. My work sits at the intersection of UI design
            and frontend development: clean layouts, consistent systems, and details that make products feel trustworthy.
          </p>
          <div className="two-col">
            <ul className="pill-list" aria-label="Strengths">
              <li>Sharp hierarchy & spacing</li>
              <li>Reusable component thinking</li>
              <li>Accessible, responsive UI</li>
              <li>Visual polish (micro-interactions)</li>
            </ul>
            <ul className="pill-list" aria-label="What I’m optimizing for">
              <li>Fast load + smooth feel</li>
              <li>Readable typography</li>
              <li>Simple, confident copy</li>
              <li>High-conversion CTAs</li>
            </ul>
          </div>
        </section>

        <section className="panel reveal" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools I use to ship</h2>
          </div>
          <div className="skills-groups">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <div className="skill-group__title">{group.title}</div>
                <div className="skills-grid">
                  {group.items.map((skill) => (
                    <div key={skill.label} className="skill-card">
                      <span aria-hidden="true" className="skill-icon">
                        {skill.icon}
                      </span>
                      <span className="skill-label">{skill.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel reveal" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work (case-study framing)</h2>
            <p className="section-sub">
              Each project answers: what was the problem, what I built, and what improved.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article
                key={project.title}
                className={project.featured ? 'project-card featured' : 'project-card'}
              >
                <div className="project-top">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  {project.featured ? <span className="badge">Featured</span> : null}
                </div>

                <ul className="project-points">
                  {project.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="project-meta">
                  <ul className="tag-list" aria-label="Project stack">
                    {project.stack.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a className="project-link" href={project.links.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                    <a className="project-link" href={project.links.repo} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  </div>
                </div>

                <div className="project-metrics" aria-label="Project outcomes">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="metric">
                      {metric}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel reveal" id="journey">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Growth timeline</h2>
            <p className="section-sub">A clear story from design foundations → shipping interfaces.</p>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <div key={item.label} className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-period">{item.period}</div>
                  <h3>{item.label}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel reveal" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something clean and fast</h2>
            <p className="section-sub">
              Best way to reach me: email. I respond as soon as I can.
            </p>
          </div>
          <div className="contact-content">
            <div className="contact-details">
              <ContactLink href={`mailto:${profile.email}`} icon={<HiOutlineMail />} label={profile.email} />
              <ContactLink href={profile.github} icon={<FaGithub />} label="github.com/milantimalsena" />
              <ContactLink href={profile.linkedin} icon={<FaLinkedin />} label="LinkedIn" />
              <ContactLink href={profile.instagram} icon={<FaInstagram />} label="@me_learn" />
              <ContactLink href={profile.website} icon={<FaGlobe />} label="Live site" />
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label>
                Name
                <input name="name" placeholder="Your name" type="text" required />
              </label>
              <label>
                Email
                <input name="email" placeholder="you@example.com" type="email" required />
              </label>
              <label>
                Message
                <textarea name="message" placeholder="Tell me about your idea" rows="4" required />
              </label>
              <button className="btn primary" type="submit">
                {sendState === 'opening' ? 'Opening email…' : 'Send message'}
              </button>
              <p className="form-note" role="status" aria-live="polite">
                This opens your email app with a prefilled message.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
        </p>
      </footer>
    </div>
  )
}

export default App
