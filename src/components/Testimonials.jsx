import './Testimonials.css'

const testimonials = [
  {
    name: 'Maya Johnson',
    role: 'Product Lead',
    feedback: 'Adeoti delivered a polished front-end experience with thoughtful interaction design and excellent collaboration.'
  },
  {
    name: 'Daniel Kim',
    role: 'Startup Founder',
    feedback: 'Fast, responsive, and creative work — the website felt premium from the first draft.'
  },
  {
    name: 'Rita Nwosu',
    role: 'Design Partner',
    feedback: 'The attention to detail and motion made the product feel more confident and professional.'
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="section-header">
        <span>Testimonials</span>
        <h2>What collaborators say about working together.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="testimonial-card">
            <p>{testimonial.feedback}</p>
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
