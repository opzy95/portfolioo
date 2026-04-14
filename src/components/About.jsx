import './About.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-copy">
        <div className="section-header">
          <span>About Me</span>
          <h2>Crafting premium web experiences with a polished front-end focus.</h2>
        </div>
        <p>
          I’m a front-end developer with a passion for building immersive digital
          products. I blend elegant design systems with performant code to create
          interfaces that feel fast, intuitive, and memorable.
        </p>
        <p>
          From responsive layouts to micro-interactions and animation-driven
          storytelling, I help teams turn brand ambition into beautiful, usable
          web experiences.
        </p>
        <div className="about-highlights">
          <div>
            <strong>Fast interfaces</strong>
            <span>Optimized experiences across devices.</span>
          </div>
          <div>
            <strong>Design systems</strong>
            <span>Consistent UI with strong visual hierarchy.</span>
          </div>
          <div>
            <strong>Interactive UI</strong>
            <span>Smooth motion, polished hover states, and clarity.</span>
          </div>
        </div>
      </div>
      <div className="about-visual">
        <div className="profile-card">
          <div className="profile-frame" />
          <img
            src="/images/profile-img.jpeg"
            alt="Adeoti Opeyemi"
            className="profile-avatar"
          />
          <div className="profile-meta">
            <p>Adeoti Opeyemi</p>
            <span>Front-End Developer</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
