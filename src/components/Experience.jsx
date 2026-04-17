import './Experience.css'

const timeline = [
  {
    title: 'Full Stack Developer Intern',
    company: 'EduTAMS',
    date: '2025 Till Date',
    description: 'Built responsive interfaces, contributed to component libraries, and improved page performance across desktop and mobile.'
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Independent Projects',
    date: '2024',
    description: 'Delivered polished landing pages, prototype interactions, and design handoff assets for startups and founders.'
  },
  {
    title: 'Consulting Partner',
    company: 'Growth Labs',
    date: '2024',
    description: 'Advised product teams on accessibility, UI consistency, and full-stack architecture for rapid launch cycles.'
  }
]

const Experience = () => {
  return (
    <section id="experience" className="experience-section scroll-reveal">
      <div className="section-header">
        <span>Experience</span>
        <h2>Career highlights and growth through real product work.</h2>
      </div>
      <div className="timeline">
        {timeline.map((item) => (
          <div key={item.title} className="timeline-item">
            <span className="timeline-date">{item.date}</span>
            <div className="timeline-card">
              <h3>{item.title}</h3>
              <p className="timeline-company">{item.company}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
