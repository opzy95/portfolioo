import './Projects.css'

const projectList = [
  {
    title: 'A Fashion Brand',
    image: '/images/project-image1%20(1).png',
    description: 'A modern landing page with interactive animations, fast loading, and polished spacing.',
    tech: 'React · Tailwind · Vite',
    demo: 'https://kcee-clothing.vercel.app/',
    code: '#'
  },
  {
    title: 'A Kitchen E-commerce',
    image: '/images/project-image1%20(2).png',
    description: 'A responsive analytics panel with gradient charts, cards, and micro interactions.',
    tech: 'Vue · CSS Grid · Motion',
    demo: 'https://araire-ventures.vercel.app/',
    code: '#'
  },
  {
    title: 'A Food E-commerce Website',
    image: '/images/project-image1%20(3).png',
    description: 'A premium food website experience with glassmorphism, content rhythm, and smooth scroll.',
    tech: 'React · Shadcn UI · JavaScript',
    demo: 'https://opzyfoods.vercel.app/',
    code: '#'
  },
  {
    title: 'A Crypto Wallet',
    image: '/images/project-image1%20(4).png',
    description: 'A Crypto Wallet landing experience with refined spacing, gradients, and key conversion points.',
    tech: 'HTML · CSS · JavaScript',
    demo: 'https://crypto-wallet-neon.vercel.app/',
    code: '#'
  },
  {
    title: 'A School website Landing Page',
    image: '/images/project-image1%20(5).png',
    description: 'A School landing interface with bold typography and polished content hierarchy.',
    tech: 'Figma · React · CSS',
    demo: 'https://tasuedproject-msgc.vercel.app/',
    code: '#'
  },
  {
    title: 'A School Landing Page',
    image: '/images/project-image1%20(6).png',
    description: 'A School landing page, with a nice presentation.',
    tech: 'Vue · Charting · Responsive UI',
    demo: 'https://aap-beta.vercel.app/',
    code: '#'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="projects-section scroll-reveal">
      <div className="section-header">
        <span>Projects</span>
        <h2>Selected work that shows design, speed, and polish.</h2>
      </div>
      <div className="project-grid">
        {projectList.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-preview">
              <img src={project.image} alt={`${project.title} screenshot`} />
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.tech}</span>
              <div className="project-actions">
                <a href={project.demo} className="btn btn-secondary" target="_blank" rel="noreferrer">Live Demo</a>
                <a href={project.code} className="btn btn-primary" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
