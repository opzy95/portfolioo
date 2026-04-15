import './Skills.css'

const Skills = () => {
  const skillIcons = {
    HTML: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 3h16l-1.5 17.5L12 21l-6.5-.5L4 3z" />
        <path d="M8.5 8h7" />
        <path d="M12 13.5l3.5-1.2" />
      </svg>
    ),
    CSS: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3h14l-1.25 14.5L12 21l-5.75-3.5L5 3z" />
        <path d="M9 8.5h6" />
        <path d="M9 12.5h4" />
      </svg>
    ),
    JavaScript: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M10 8h1.5v8" />
        <path d="M13.5 16.5c1.5 0 2.5-0.8 2.5-2.2 0-1.2-0.9-1.6-1.8-1.9" />
      </svg>
    ),
    React: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="7" ry="3.5" />
        <ellipse cx="12" cy="12" rx="3.5" ry="7" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="3.5" ry="7" transform="rotate(-60 12 12)" />
      </svg>
    ),
    Vue: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l8 14 8-14" />
        <path d="M9 4l3.5 8.5L16 4" />
      </svg>
    ),
    'Node.js': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 7l6-4 6 4v10l-6 4-6-4V7z" />
        <path d="M10.5 16.5v-9" />
        <path d="M13.5 15.5v-8" />
      </svg>
    ),
    Express: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 7h12" />
        <path d="M6 11h10" />
        <path d="M6 15h12" />
      </svg>
    ),
    'REST APIs': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="2" />
        <circle cx="6" cy="16" r="2" />
        <circle cx="18" cy="16" r="2" />
        <path d="M8 10.5l4 2.5 4-2.5" />
        <path d="M12 12.5v4" />
      </svg>
    ),
    MongoDB: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s5-5.5 5-10.5S12 3 12 3s-5 3.5-5 7.5S12 21 12 21z" />
        <path d="M12 8.5c1.25 1.5 2 2 2 3" />
      </svg>
    ),
    SQL: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="6" rx="6" ry="3" />
        <path d="M6 6v10c0 1.65 2.69 3 6 3s6-1.35 6-3V6" />
        <path d="M6 11.5c0 1.65 2.69 3 6 3s6-1.35 6-3" />
      </svg>
    ),
    'Tailwind CSS': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12s3 4 8 4 8-4 8-4" />
        <path d="M4 8s3-2 8-2 8 2 8 2" />
      </svg>
    ),
    Bootstrap: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="5" width="14" height="14" rx="3" />
        <path d="M9 8h4.5c1.5 0 2 1 2 2s-.5 2-2 2H9v6" />
      </svg>
    ),
    'Shadcn UI': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4l8 8-8 8-8-8 8-8z" />
        <path d="M12 4v16" />
      </svg>
    ),
    Vite: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4l8 8-8 8" />
        <path d="M14 4v16" />
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="10" cy="12" r="2" />
        <path d="M8 14.4L16 9.6" />
        <path d="M10 12V8" />
      </svg>
    ),
    Figma: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="6" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="18" r="2" />
        <circle cx="8" cy="9" r="2" />
      </svg>
    ),
    'VS Code': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 4l8 8-8 8V4z" />
        <path d="M13 4l6 4v8l-6 4" />
      </svg>
    ),
    'Responsive Design': (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <path d="M8 8h8" />
        <path d="M8 12h8" />
      </svg>
    )
  }

  const groups = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'SQL']
    },
    {
      title: 'Frameworks',
      skills: ['Tailwind CSS', 'Bootstrap', 'Shadcn UI', 'Vite']
    },
    {
      title: 'Tools',
      skills: ['Git', 'Figma', 'VS Code', 'Responsive Design']
    }
  ]

  return (
    <section id="skills" className="skills-section scroll-reveal">
      <div className="section-header">
        <span>Skills</span>
        <h2>Technical stack that powers my work.</h2>
      </div>
      <div className="skills-grid">
        {groups.map((group, groupIndex) => (
          <div key={group.title} className="skill-group" style={{ '--group-delay': `${groupIndex * 0.15}s` }}>
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill, skillIndex) => (
                <li
                  key={skill}
                  className="skill-pill"
                  style={{ '--pill-delay': `${(groupIndex * 0.12 + skillIndex * 0.05).toFixed(2)}s` }}
                >
                  <span className="skill-icon">{skillIcons[skill]}</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
