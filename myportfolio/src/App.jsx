import { useEffect } from 'react'
import {
  SiFigma,
  SiAdobeillustrator,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFlutter,
} from 'react-icons/si'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import milanPhoto from './assets/milanphoto.JPG'
import milanLogo from './assets/milan logo.svg'
import './App.css'
import '../src/assets/milanphoto.jpg'

const skills = [
  { label: 'Figma', icon: <SiFigma /> },
  { label: 'Adobe Illustrator', icon: <SiAdobeillustrator /> },
  { label: 'HTML', icon: <SiHtml5 /> },
  { label: 'CSS', icon: <SiCss3 /> },
  { label: 'JavaScript', icon: <SiJavascript /> },
  { label: 'React (basic)', icon: <SiReact /> },
  { label: 'Flutter (learning)', icon: <SiFlutter /> },
]

const projects = [
  {
    title: 'Creative Portfolio UI',
    description:
      'A concept portfolio layout exploring layered glass panels and bold typography for a personal brand.',
    tools: ['Figma', 'Illustrator', 'Design Systems'],
    link: '#',
  },
  {
    title: 'Learning Dashboard',
    description:
      'A responsive dashboard to track courses, daily practice, and progress milestones while learning frontend.',
    tools: ['React', 'CSS Grid', 'Framer prototypes'],
    link: '#',
  },
  {
    title: 'Mini Brand Kit',
    description:
      'A visual identity kit with logo marks, color palette, and social media graphics for a side project.',
    tools: ['Adobe Illustrator', 'Brand Guidelines'],
    link: '#',
  },
]

const timeline = [
  {
    label: 'Graphic design basics',
    detail: 'Practicing layout, color theory, and composition fundamentals.',
    period: '2022',
  },
  {
    label: 'UI/UX fundamentals',
    detail: 'Exploring user flows, wireframes, and usability best practices.',
    period: '2023',
  },
  {
    label: 'Frontend development',
    detail: 'Learning HTML, CSS, and JavaScript to build interactive interfaces.',
    period: '2024',
  },
  {
    label: 'React',
    detail: 'Building small projects to understand components, hooks, and state.',
    period: '2024',
  },
  {
    label: 'Flutter',
    detail: 'Experimenting with mobile UI patterns and responsive layouts.',
    period: '2025',
  },
  {
    label: 'Future goals',
    detail: 'Ship polished products that combine thoughtful design and clean code.',
    period: 'Beyond',
  },
]

const ContactLink = ({ href, icon, label }) => (
  <a className="contact-link" href={href} target="_blank" rel="noreferrer">
    {icon}
    <span>{label}</span>
  </a>
)

const useReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
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

  return (
    <div className="app">
      <header className="nav-bar">
        <img src={milanLogo} alt="Milan Logo" className="nav-logo" />
        <nav aria-label="Primary" className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero__content reveal">
            <p className="hero__eyebrow">Graphic Design & Frontend Development Learner</p>
            <h1>Milan Timalsena</h1>
            <p className="hero__tagline">Exploring design & tech. Learning, building, growing.</p>
            <div className="hero__actions">
              <a className="btn primary" href="#projects">
                View Projects
              </a>
              <a className="btn ghost" href="#contact">
                Contact Me
              </a>
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
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Curious about design and code</h2>
          </div>
          <p className="lead">
            I’m currently learning design and frontend development. I enjoy working on creative ideas and building
            projects that help me grow. Every project is a chance to experiment, learn something new, and connect design
            thinking with digital experiences.
          </p>
          <ul className="pill-list">
            <li>Visual storytelling</li>
            <li>Responsive layouts</li>
            <li>Design systems exploration</li>
            <li>Continuous learning mindset</li>
          </ul>
        </section>

        <section className="panel reveal" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools in my toolkit</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.label} className="skill-card">
                <span aria-hidden="true" className="skill-icon">
                  {skill.icon}
                </span>
                <span className="skill-label">{skill.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel reveal" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Practice projects & concepts</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <ul className="tag-list">
                  {project.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  View case study →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="panel reveal" id="journey">
          <div className="section-heading">
            <p className="eyebrow">Journey</p>
            <h2>Learning timeline</h2>
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
            <h2>Let’s create something together</h2>
          </div>
          <div className="contact-content">
            <div className="contact-details">
              <ContactLink href="mailto:milantimalsena87@gmail.com" icon={<HiOutlineMail />} label="milantimalsena87@gmail.com" />
              <ContactLink href="https://github.com/milantimalsena" icon={<FaGithub />} label="github.com/milantimalsena" />
              <ContactLink href="https://www.linkedin.com/in/milan-timalsena-373782353/" icon={<FaLinkedin />} label="LinkedIn" />
              <ContactLink href="https://www.instagram.com/me_learn" icon={<FaInstagram />} label="@me_learn" />
            </div>
            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
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
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Milan Timalsena. Always learning and creating.</p>
      </footer>
    </div>
  )
}

export default App
