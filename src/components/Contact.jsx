import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact-section scroll-reveal">
      <div className="contact-shell">
        <div className="section-header">
          <span>Contact</span>
          <h2>Let’s work together on your next digital experience.</h2>
        </div>
        <div className="contact-layout">
          <div className="contact-copy">
            <p>
              Ready to turn your ideas into fast, memorable web products? Send a message.
            </p>
            <div className="contact-details">
              <div>
                <strong>Email</strong>
                <p>hello@opzytech.dev</p>
              </div>
              <div>
                <strong>Social</strong>
                <p>
                  <a href="#">GitHub</a>
                  <a href="#">LinkedIn</a>
                  <a href="#">Twitter</a>
                </p>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea placeholder="Tell me about your project" rows="5" />
            </label>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
