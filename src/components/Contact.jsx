import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      alert('Please fill your name, email, and message.')
      return
    }
    setSending(true)
    const to = 'fatimaahaddad@hotmail.com' // TODO: replace with your email
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    setTimeout(() => setSending(false), 800)
  }

  return (
    <section id="contact" className="section contact">
      <h2>Get In Touch</h2>
      <div className="contact-grid">
        <div className="contact-card contact-form">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Enter your full name" />
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="email">Your Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="name@email.com" />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="e.g. +9665XXXXXXX" />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Write your message..." />
            </div>
            <button className="btn btn-gradient" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send Message'}</button>
          </form>
        </div>

        <div className="contact-card contact-info">
          <h3>Contact Information</h3>
          <ul className="info-list">
            <li>
              <span className="info-label">Email</span>
              <a href="mailto:fatimaahaddad@hotmail.com">fatimaahaddad@hotmail.com</a>
            </li>
            <li>
              <span className="info-label">Phone</span>
              <span>+966546993111</span>
            </li>
            <li>
              <span className="info-label">Location</span>
              <span>Saudi Arabia</span>
            </li>
            <li>
              <span className="info-label">LinkedIn</span>
              <a href="https://www.linkedin.com/in/fatima-alhaddad-a049bb2b5/" target="_blank" rel="noopener noreferrer">Connect with me</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact


