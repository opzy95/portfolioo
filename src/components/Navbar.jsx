import { useState } from 'react'
import './Navbar.css'

const Navbar = ({ theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <header className="navbar">
      <div className="brand">
        OpzyTech<span className="brand-accent">.</span>
      </div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <button
        type="button"
        className="btn btn-hamburger"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className="nav-actions">
        <button type="button" className="btn btn-icon" onClick={onToggleTheme}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
        <a href="#contact" className="btn btn-secondary">Hire Me</a>
        <a href="/resume.pdf" className="btn btn-primary" download>Download CV</a>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button
          type="button"
          className="mobile-menu-close"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>
        <div className="mobile-menu-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="mobile-menu-actions">
          <button type="button" className="btn btn-icon" onClick={() => {
            onToggleTheme()
            setMenuOpen(false)
          }}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
          <a href="#contact" className="btn btn-secondary" onClick={() => setMenuOpen(false)}>
            Hire Me
          </a>
          <a href="/resume.pdf" className="btn btn-primary" download>
            Download CV
          </a>
        </div>
      </div>
      <div className={`mobile-backdrop ${menuOpen ? 'visible' : ''}`} onClick={() => setMenuOpen(false)} />
    </header>
  )
}

export default Navbar
