import './Navbar.css'

const Navbar = ({ theme, onToggleTheme }) => {
  return (
    <header className="navbar">
      <div className="brand">
        OpzyTech<span className="brand-accent">.</span>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="nav-actions">
        <button type="button" className="btn btn-icon" onClick={onToggleTheme}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
        <a href="#contact" className="btn btn-secondary">Hire Me</a>
        <a href="/resume.pdf" className="btn btn-primary" download>Download CV</a>
      </div>
    </header>
  )
}

export default Navbar
