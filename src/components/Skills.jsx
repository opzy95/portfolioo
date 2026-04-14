import './Skills.css'

const Skills = () => {
  const groups = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue']
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
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span>Skills</span>
        <h2>Technical stack that powers my work.</h2>
      </div>
      <div className="skills-grid">
        {groups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill} className="skill-pill">
                  {skill}
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
