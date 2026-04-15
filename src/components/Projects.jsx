import './Projects.css'

const projectList = [
  {
    title: 'LaunchPad UI',
    image: '/images/project-image1%20(1).png',
    description: 'A modern landing page with interactive animations, fast loading, and polished spacing.',
    tech: 'React · Tailwind · Vite',
    demo: '#',
    code: '#'
  },
  {
    title: 'Crypto Dashboard',
    image: '/images/project-image1%20(2).png',
    description: 'A responsive analytics panel with gradient charts, cards, and micro interactions.',
    tech: 'Vue · CSS Grid · Motion',
    demo: '#',
    code: '#'
  },
  {
    title: 'Studio Portfolio',
    image: '/images/project-image1%20(3).png',
    description: 'A premium portfolio experience with glassmorphism, content rhythm, and smooth scroll.',
    tech: 'React · Shadcn UI · JavaScript',
    demo: '#',
    code: '#'
  },
  {
    title: 'Product Showcase',
    image: '/images/project-image1%20(4).png',
    description: 'A product landing experience with refined spacing, gradients, and key conversion points.',
    tech: 'HTML · CSS · JavaScript',
    demo: '#',
    code: '#'
  },
  {
    title: 'Agency Mockup',
    image: '/images/project-image1%20(5).png',
    description: 'A visual-first agency interface with bold typography and polished content hierarchy.',
    tech: 'Figma · React · CSS',
    demo: '#',
    code: '#'
  },
  {
    title: 'Analytics View',
    image: '/images/project-image1%20(6).png',
    description: 'An analytics dashboard design with charts, cards, and modern data presentation.',
    tech: 'Vue · Charting · Responsive UI',
    demo: '#',
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
