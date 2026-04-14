import './Hero.css'

const Hero = () => {
  const particles = Array.from({ length: 8 })

  return (
    <section id="home" className="hero-section">
      <div className="hero-left">
        <span className="hero-label">Front-End Developer</span>
        <h1>Adeoti Opeyemi</h1>
        <p className="hero-copy">
          Building fast, modern, and scalable web experiences for ambitious brands,
          startups, and teams that want polished front-end craftsmanship.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Hire Me</a>
        </div>
        <div className="hero-highlights">
          <div>
            <strong>20+</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>5</strong>
            <span>Years Experience</span>
          </div>
          <div>
            <strong>10+</strong>
            <span>UI Journeys</span>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src="/images/profile-img.jpeg" alt="Adeoti Opeyemi" className="hero-image" />
          </div>
          <div className="hero-ring" />
          <div className="hero-panel">
            <span>Creative Interfaces</span>
            <strong>Design-driven development.</strong>
          </div>
          {particles.map((_, index) => (
            <span key={index} className={`particle particle-${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
